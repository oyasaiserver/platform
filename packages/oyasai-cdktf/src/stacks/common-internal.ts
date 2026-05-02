import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import { R2BucketLifecycle } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket-lifecycle";
import { R2CustomDomain } from "@oyasaiserver/cdktf-providers/cloudflare/r2-custom-domain";
import { ActionsOrganizationVariable } from "@oyasaiserver/cdktf-providers/github/actions-organization-variable";
import { ActionsSecret } from "@oyasaiserver/cdktf-providers/github/actions-secret";
import { BranchDefault } from "@oyasaiserver/cdktf-providers/github/branch-default";
import { GithubProvider } from "@oyasaiserver/cdktf-providers/github/provider";
import { Repository } from "@oyasaiserver/cdktf-providers/github/repository";
import { RepositoryRuleset } from "@oyasaiserver/cdktf-providers/github/repository-ruleset";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import type { Construct } from "constructs";
import { DAY_IN_SECONDS } from "../helpers.ts";
import { createSecrets } from "../secrets.ts";
import type { CommonInfra } from "./common-infra.ts";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

type Props = {
  commonInfra: CommonInfra;
};

export class CommonInternal extends OyasaiTerraformStack {
  // TODO: Where should we put this? - shun 2026 04
  public readonly nixCachePublicKey =
    "oyasaiserver:f0coAsRP8jLzDTOmVCY8hqQibMHtZcxjk60oVCQkjtU=";

  constructor(scope: Construct, id: string, { commonInfra }: Props) {
    super(scope, id);

    this.createCloudBackend();

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    new InfisicalProvider(this, this.t("infisical-provider"));

    const { oyasaiIoRegistrarDomain, oyasaiIoZone } = commonInfra;
    const secrets = createSecrets(this, commonInfra);

    const nixCacheBucket = new R2Bucket(this, "nix-cache-r2-bucket", {
      accountId: secrets.get("CLOUDFLARE_ACCOUNT_ID"),
      name: "nix-cache",
      // Most popular location for GitHub Action runners
      location: "enam",
    });

    const nixCacheExpirationDays = 180;

    new R2BucketLifecycle(this, this.t("nix-cache-r2-bucket-lifecycle"), {
      accountId: secrets.get("CLOUDFLARE_ACCOUNT_ID"),
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
      accountId: secrets.get("CLOUDFLARE_ACCOUNT_ID"),
      bucketName: nixCacheBucket.name,
      domain: `nix-cache.${oyasaiIoRegistrarDomain.domainName}`,
      enabled: true,
      zoneId: oyasaiIoZone.id,
    });

    new GithubProvider(this, "github-provider", {
      // Required for app auth
      owner: "oyasaiserver",
      // Must pass empty object for app auth
      // @ts-expect-error https://github.com/hashicorp/terraform-plugin-sdk/issues/142
      appAuth: {},
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
        value: `s3://${nixCacheBucket.name}?endpoint=${secrets.get("CLOUDFLARE_ACCOUNT_ID")}.r2.cloudflarestorage.com&compression=zstd`,
        visibility: "all",
      },
    );

    // TODO: inject via OIDC? But that sounds too permissive... - shun 2026 04
    new ActionsSecret(this, this.t("nix-cache-signing-key-actions-secret"), {
      repository: platformRepository.name,
      secretName: "NIX_CACHE_SIGNING_KEY",
      value: secrets.get("NIX_CACHE_SIGNING_KEY"),
    });
    new ActionsSecret(
      this,
      this.t("platform-cloudflare-access-key-id-actions-secret"),
      {
        repository: platformRepository.name,
        secretName: "CLOUDFLARE_ACCESS_KEY_ID",
        value: secrets.get("CLOUDFLARE_ACCESS_KEY_ID"),
      },
    );
    new ActionsSecret(
      this,
      this.t("platform-cloudflare-secret-access-key-actions-secret"),
      {
        repository: platformRepository.name,
        secretName: "CLOUDFLARE_SECRET_ACCESS_KEY",
        value: secrets.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
      },
    );
  }
}
