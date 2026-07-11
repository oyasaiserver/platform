import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import { R2BucketLifecycle } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket-lifecycle";
import { R2CustomDomain } from "@oyasaiserver/cdktf-providers/cloudflare/r2-custom-domain";
import { Container } from "@oyasaiserver/cdktf-providers/docker/container";
import { Network } from "@oyasaiserver/cdktf-providers/docker/network";
import { DockerProvider } from "@oyasaiserver/cdktf-providers/docker/provider";
import { ActionsOrganizationVariable } from "@oyasaiserver/cdktf-providers/github/actions-organization-variable";
import { BranchDefault } from "@oyasaiserver/cdktf-providers/github/branch-default";
import { GithubProvider } from "@oyasaiserver/cdktf-providers/github/provider";
import { Repository } from "@oyasaiserver/cdktf-providers/github/repository";
import { RepositoryRuleset } from "@oyasaiserver/cdktf-providers/github/repository-ruleset";
import { WorkflowRepositoryPermissions } from "@oyasaiserver/cdktf-providers/github/workflow-repository-permissions";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import { Password } from "@oyasaiserver/cdktf-providers/random/password";
import { RandomProvider } from "@oyasaiserver/cdktf-providers/random/provider";
import { Fn } from "cdktf";
import type { Construct } from "constructs";
import { getDockerImages, getHostPaths } from "../docker-images.ts";
import { DAY_IN_SECONDS, envs, ports } from "../helpers.ts";
import { createSecrets } from "../secrets.ts";
import type { CommonInfra } from "./common-infra.ts";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

type Props = {
  commonInfra: CommonInfra;
};

export class CommonInternal extends OyasaiTerraformStack {
  // TODO: Where should we put this? - shun 2026 04
  readonly nixCachePublicKey =
    "oyasaiserver:f0coAsRP8jLzDTOmVCY8hqQibMHtZcxjk60oVCQkjtU=";

  constructor(scope: Construct, id: string, { commonInfra }: Props) {
    super(scope, id);

    this.createCloudBackend();

    const secrets = createSecrets(this, commonInfra);

    new RandomProvider(this, "random");

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    new InfisicalProvider(this, this.t("infisical-provider"));

    new DockerProvider(this, id, {
      host: `tcp://${commonInfra.ipv4}:2376`,
      caMaterial: secrets.get("TLS_CA_PEM"),
      certMaterial: secrets.get("TLS_CERT_PEM"),
      keyMaterial: secrets.get("TLS_KEY_PEM"),
    });

    new GithubProvider(this, "github-provider", {
      // Required for app auth
      owner: "oyasaiserver",
      // Must pass empty object for app auth
      // @ts-expect-error https://github.com/hashicorp/terraform-plugin-sdk/issues/142
      appAuth: {},
    });

    const { oyasaiIoRegistrarDomain, oyasaiIoZone } = commonInfra;
    const images = getDockerImages();
    const hostPaths = getHostPaths("common");

    const nixCacheBucket = new R2Bucket(this, "nix-cache-r2-bucket", {
      accountId: commonInfra.cloudflareAccountId,
      name: "nix-cache",
      // Most popular location for GitHub Action runners
      location: "enam",
    });

    const nixCacheExpirationDays = 180;

    new R2BucketLifecycle(this, this.t("nix-cache-r2-bucket-lifecycle"), {
      accountId: commonInfra.cloudflareAccountId,
      bucketName: nixCacheBucket.name,
      rules: [
        {
          id: `Expire all cache after ${nixCacheExpirationDays} days`,
          enabled: true,
          conditions: {
            prefix: "", // everything
          },
          // S3 lifecycle expiry is based on upload time, not last access. Since
          // `nix copy` skips entries that already exist, timestamps are never
          // refreshed on reuse. Run `nix copy --force` periodically to reset
          // object age and avoid eviction.
          deleteObjectsTransition: {
            condition: {
              type: "Age",
              maxAge: nixCacheExpirationDays * DAY_IN_SECONDS,
            },
          },
        },
      ],
    });

    // Practically read-only because Cloudflare limits upload to 100MB for
    // "proxied" domains. - shun 2026-04
    //
    // https://developers.cloudflare.com/support/troubleshooting/http-status-codes/4xx-client-error/error-413/#cloudflare-specific-information
    new R2CustomDomain(this, "nix-cache-r2-custom-domain", {
      accountId: commonInfra.cloudflareAccountId,
      bucketName: nixCacheBucket.name,
      domain: `nix-cache.${oyasaiIoRegistrarDomain.domainName}`,
      enabled: true,
      zoneId: oyasaiIoZone.id,
    });

    const network = new Network(this, this.t("network-internal"), {
      name: "network-internal",
    });

    const postgresPassword = new Password(this, this.t("postgres-password"), {
      length: 32,
      special: false, // keep it simple for a DB URL
    });

    const niks3ApiToken = new Password(this, this.t("niks3-api-token"), {
      length: 48, // min 36 chars required
      special: false,
    });

    const postgres = new Container(this, this.t("postgres-container"), {
      image: images.postgres,
      name: "postgres",
      restart: "unless-stopped",
      networksAdvanced: [network],
      env: envs({
        POSTGRES_USER: "niks3",
        POSTGRES_PASSWORD: postgresPassword.result,
        POSTGRES_DB: "niks3",
      }),
      volumes: [
        {
          containerPath: "/var/lib/postgresql",
          hostPath: hostPaths.postgres,
        },
      ],
    });

    const niks3Bucket = new R2Bucket(this, "niks3-r2-bucket", {
      accountId: commonInfra.cloudflareAccountId,
      name: "niks3",
      // Most popular location for GitHub Action runners
      location: "enam",
    });

    const niks3Container = new Container(this, this.t("niks3-container"), {
      image: images.niks3,
      name: "niks3",
      restart: "unless-stopped",
      networksAdvanced: [network],
      dependsOn: [postgres],
      ports: ports({
        tcp: [5751],
      }),
      tmpfs: {
        "/secrets": "rw,noexec,nosuid,size=65536k",
      },
      entrypoint: [
        "/bin/sh",
        "-c",
        'echo "$NIKS3_SIGNING_KEY_VAL" > "$NIKS3_SIGN_KEY_PATHS" && exec /bin/niks3-server',
      ],
      env: envs({
        NIKS3_DB: Fn.sensitive(
          `postgres://niks3:${postgresPassword.result}@postgres:5432/niks3?sslmode=disable`,
        ),
        NIKS3_S3_ENDPOINT: `${commonInfra.cloudflareAccountId}.r2.cloudflarestorage.com`,
        NIKS3_S3_BUCKET: niks3Bucket.name,
        NIKS3_S3_ACCESS_KEY: secrets.get("CLOUDFLARE_ACCESS_KEY_ID"),
        NIKS3_S3_SECRET_KEY: secrets.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
        NIKS3_S3_REGION: "auto",
        NIKS3_API_TOKEN: niks3ApiToken.result,
        NIKS3_SIGNING_KEY_VAL: secrets.get("NIX_CACHE_SIGNING_KEY"),
        NIKS3_SIGN_KEY_PATHS: "/secrets/signing-key",
      }),
    });

    // NOMERGE caddy
    new Container(this, this.t("caddy-internal-container"), {
      image: images.caddy,
      name: "caddy",
      restart: "unless-stopped",
      networksAdvanced: [network],
      ports: ports({
        tcp: [
          80, // http
          443, // https
        ],
      }),
      command: [
        "reverse-proxy",
        "--from",
        `cache.${commonInfra.oyasaiIoRegistrarDomain.domainName}`,
        "--to",
        `${niks3Container.name}:5751`,
      ],
      volumes: [
        {
          containerPath: "/data",
          hostPath: hostPaths.caddy,
        },
      ],
    });

    const platformRepository = new Repository(
      this,
      this.t("platform-repository"),
      {
        name: "platform",
        description: "OyasaiServer monorepo",
        visibility: "public",
        // Portals
        hasIssues: true,
        hasDiscussions: false,
        hasProjects: false,
        hasWiki: false,
        // PR commit config
        allowMergeCommit: false,
        allowSquashMerge: true,
        allowRebaseMerge: false,
        allowAutoMerge: true,
        squashMergeCommitTitle: "PR_TITLE",
        squashMergeCommitMessage: "PR_BODY",
        deleteBranchOnMerge: true,
        allowUpdateBranch: true,
        // DANGER: never destroy the repository.
        lifecycle: {
          preventDestroy: true,
        },
      },
    );

    new BranchDefault(this, this.t("platform-default-branch"), {
      repository: platformRepository.name,
      branch: "master",
      // DANGER: never destroy the default branch.
      lifecycle: {
        preventDestroy: true,
      },
    });

    new RepositoryRuleset(
      this,
      this.t("platform-protect-master-repository-ruleset"),
      {
        enforcement: "active",
        name: "protect-master",
        rules: {
          pullRequest: {
            allowedMergeMethods: ["squash"],
            requiredReviewThreadResolution: true,
            // Allow merge without an approval, unless protected by CODEOWNER
            requireCodeOwnerReview: true,
            requiredApprovingReviewCount: 0,
          },
          deletion: true,
          requiredStatusChecks: {
            requiredCheck: [
              "nocommit",
              "merging-into-master",
              "pr-title",
              "nix-flake-health",
              "nix-flake-check (macos-latest)",
              "nix-flake-check (ubuntu-latest)",
              "nix-devshell (macos-latest)",
              "nix-devshell (ubuntu-latest)",
            ].map((context) => ({ context })),
          },
        },
        target: "branch",
        conditions: {
          refName: {
            exclude: [],
            include: ["~DEFAULT_BRANCH"],
          },
        },
        bypassActors: [
          {
            actorType: "OrganizationAdmin",
            bypassMode: "always",
          },
        ],
        repository: platformRepository.name,
      },
    );

    new ActionsOrganizationVariable(
      this,
      this.t("nix-cache-public-key-actions-org-variable"),
      {
        variableName: "NIX_CACHE_PUBLIC_KEY",
        value: this.nixCachePublicKey,
        visibility: "all",
      },
    );

    new ActionsOrganizationVariable(
      this,
      this.t("nix-cache-substituter-actions-org-variable"),
      {
        variableName: "NIX_CACHE_SUBSTITUTER",
        value: `s3://${nixCacheBucket.name}?endpoint=${commonInfra.cloudflareAccountId}.r2.cloudflarestorage.com&compression=zstd`,
        visibility: "all",
      },
    );

    new WorkflowRepositoryPermissions(
      this,
      this.t("platform-workflow-repository-permission"),
      {
        repository: platformRepository.name,
        defaultWorkflowPermissions: "write",
        canApprovePullRequestReviews: true,
      },
    );
  }
}
