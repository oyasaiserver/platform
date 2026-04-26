import { GithubProvider } from "@oyasaiserver/cdktf-providers/github/provider";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";
import type { Construct } from "constructs";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import type { CommonInfra } from "./common-infra.ts";
import { R2CustomDomain } from "@oyasaiserver/cdktf-providers/cloudflare/r2-custom-domain";
import { Repository } from "@oyasaiserver/cdktf-providers/github/repository";
import { BranchProtection } from "@oyasaiserver/cdktf-providers/github/branch-protection";
import { BranchDefault } from "@oyasaiserver/cdktf-providers/github/branch-default";
import { RepositoryRuleset } from "@oyasaiserver/cdktf-providers/github/repository-ruleset";

type Props = {
  commonInfra: CommonInfra;
};

export class CommonInternal extends OyasaiTerraformStack {
  constructor(scope: Construct, id: string, { commonInfra }: Props) {
    super(scope, id);

    const { secrets, oyasaiIoRegistrarDomain, oyasaiIoZone } = commonInfra;

    this.createCloudBackend();

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

    new BranchDefault(
      this,
      this.t("platform-default-branch"),
      {
        repository: platformRepository.name,
        branch: "master",
        // DANGER: never destroy the default branch.
        lifecycle: {
          preventDestroy: true,
        },
      },
    );

    new RepositoryRuleset(this, this.t("platform-protect-master-repository-ruleset"), {
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
            "nix-devshell (ubuntu-latest)"
          ].map(context => ({context}))
        }
      },
      target: "branch",
      conditions: {
        refName: {
          exclude: [],
          include: ["~DEFAULT_BRANCH"]
        }
      },
      repository: platformRepository.name
    })

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    const nixCacheBucket = new R2Bucket(this, "nix-cache-r2-bucket", {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      name: "nix-cache",
    });

    // Practically read-only because Cloudflare limits upload to 100MB for
    // "proxied" domains. - shun 2026-04
    //
    // https://developers.cloudflare.com/support/troubleshooting/http-status-codes/4xx-client-error/error-413/#cloudflare-specific-information
    new R2CustomDomain(this, "nix-cache-r2-custom-domain", {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      bucketName: nixCacheBucket.name,
      domain: `nix-cache.${oyasaiIoRegistrarDomain.domainName}`,
      enabled: true,
      zoneId: oyasaiIoZone.id,
    });
  }
}
