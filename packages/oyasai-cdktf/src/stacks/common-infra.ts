import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { RegistrarDomain } from "@oyasaiserver/cdktf-providers/cloudflare/registrar-domain";
import { Zone } from "@oyasaiserver/cdktf-providers/cloudflare/zone";
import { Identity } from "@oyasaiserver/cdktf-providers/infisical/identity";
import { IdentityOidcAuth } from "@oyasaiserver/cdktf-providers/infisical/identity-oidc-auth";
import { Project } from "@oyasaiserver/cdktf-providers/infisical/project";
import { ProjectEnvironment } from "@oyasaiserver/cdktf-providers/infisical/project-environment";
import { ProjectIdentity } from "@oyasaiserver/cdktf-providers/infisical/project-identity";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import type { Construct } from "constructs";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";
import { GrafanaProvider } from "@oyasaiserver/cdktf-providers/grafana/provider";
import { CloudStack } from "@oyasaiserver/cdktf-providers/grafana/cloud-stack";
import { CloudStackServiceAccount } from "@oyasaiserver/cdktf-providers/grafana/cloud-stack-service-account";
import { CloudStackServiceAccountToken } from "@oyasaiserver/cdktf-providers/grafana/cloud-stack-service-account-token";
import { CloudAccessPolicy } from "@oyasaiserver/cdktf-providers/grafana/cloud-access-policy";
import { CloudAccessPolicyToken } from "@oyasaiserver/cdktf-providers/grafana/cloud-access-policy-token";
import { Dashboard } from "@oyasaiserver/cdktf-providers/grafana/dashboard";
import { DataSource } from "@oyasaiserver/cdktf-providers/grafana/data-source";
import { mustEnv, pick } from "../helpers.ts";

export class CommonInfra extends OyasaiTerraformStack {
  private readonly infisicalOrgId = "a8e8e008-81e0-4a4f-81a9-8441c6820e7e";

  readonly cloudflareAccountId = "7befe273c79e6f7993c1cd4534d6afff";

  readonly oyasaiIoRegistrarDomain: RegistrarDomain;
  readonly oyasaiIoZone: Zone;

  readonly platformInfisicalProject: Project;
  readonly platformInfisicalProjectEnvironment: ProjectEnvironment;

  readonly platformCloudGrafanaStack: CloudStack;
  readonly platformAllServicesToken: CloudAccessPolicyToken;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.createCloudBackend();

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    new InfisicalProvider(this, this.t("infisical-provider"));

    const platformInfisicalMachineIdentity = new Identity(
      this,
      this.t("platform-infisical-identity"),
      {
        name: "oyasai-machine",
        orgId: this.infisicalOrgId,
        role: "admin",
        hasDeleteProtection: true,
      },
    );

    new IdentityOidcAuth(
      this,
      this.t("platform-infisical-identity-oidc-auth"),
      {
        boundIssuer: "https://token.actions.githubusercontent.com",
        boundSubject: "repo:oyasaiserver/platform:*",
        identityId: platformInfisicalMachineIdentity.id,
        oidcDiscoveryUrl: "https://token.actions.githubusercontent.com",
      },
    );

    this.platformInfisicalProject = new Project(
      this,
      this.t("platform-infisical-project"),
      {
        name: "platform",
        slug: "platform",
      },
    );

    new ProjectIdentity(this, this.t("platform-machine-project-identity"), {
      projectId: this.platformInfisicalProject.id,
      identityId: platformInfisicalMachineIdentity.id,
      roles: [
        {
          roleSlug: "admin",
        },
      ],
    });

    this.platformInfisicalProjectEnvironment = new ProjectEnvironment(
      this,
      this.t("platform-common-infisical-project-environment"),
      {
        name: "common",
        projectId: this.platformInfisicalProject.id,
        slug: "common",
      },
    );

    this.oyasaiIoRegistrarDomain = new RegistrarDomain(
      this,
      this.t("oyasai-io-registrar-domain"),
      {
        accountId: this.cloudflareAccountId,
        domainName: "oyasai.io",
        privacy: true,
      },
    );

    this.oyasaiIoZone = new Zone(this, "oyasai-io-zone", {
      account: {
        id: this.cloudflareAccountId,
      },
      name: this.oyasaiIoRegistrarDomain.domainName,
      type: "full",
    });

    const grafanaCloudProvider = new GrafanaProvider(
      this,
      "grafana-cloud-provider",
      {
        alias: "cloud",
        cloudAccessPolicyToken: mustEnv("GRAFANA_CLOUD_ACCESS_POLICY_TOKEN"),
      },
    );

    this.platformCloudGrafanaStack = new CloudStack(
      this,
      "platform-cloud-stack",
      {
        provider: grafanaCloudProvider,
        // Platform was taken, must be globally unique - ueda 2026-09
        name: "oyasaiplatform",
        slug: "oyasaiplatform",
        regionSlug: "prod-ap-northeast-0", // Japan
        // Some stuffs require the whole stack to be recreated. Everything is
        // managed via TF anyways.
        deleteProtection: false,
      },
    );

    const cloudServiceAccount = new CloudStackServiceAccount(
      this,
      "cloud-stack-service-account",
      {
        provider: grafanaCloudProvider,
        stackSlug: this.platformCloudGrafanaStack.slug,
        name: "terraform-sa",
        role: "Admin",
      },
    );

    const saToken = new CloudStackServiceAccountToken(
      this,
      "cloud-stack-service-account-token",
      {
        provider: grafanaCloudProvider,
        stackSlug: this.platformCloudGrafanaStack.slug,
        name: "terraform-sa-token",
        serviceAccountId: cloudServiceAccount.id,
      },
    );

    const allServicesPolicy = new CloudAccessPolicy(
      this,
      "cloud-access-policy-all-services",
      {
        provider: grafanaCloudProvider,
        name: "terraform-all-services",
        region: this.platformCloudGrafanaStack.regionSlug,
        scopes: ["logs:read", "logs:write"],
        realm: [
          {
            type: "stack",
            identifier: this.platformCloudGrafanaStack.id,
          },
        ],
      },
    );

    this.platformAllServicesToken = new CloudAccessPolicyToken(
      this,
      "cloud-access-policy-token-all-services",
      {
        provider: grafanaCloudProvider,
        name: "terraform-all-services-token",
        region: allServicesPolicy.region,
        accessPolicyId: allServicesPolicy.policyId,
      },
    );

    new GrafanaProvider(this, "grafana-provider", {
      url: this.platformCloudGrafanaStack.url,
      auth: saToken.key,
    });

    const lokiDatasource = new DataSource(this, "loki-datasource", {
      uid: "loki",
      name: "Loki",
      type: "loki",
      url: this.platformCloudGrafanaStack.logsUrl,
      accessMode: "proxy",
      basicAuthEnabled: true,
      basicAuthUsername: `${this.platformCloudGrafanaStack.logsUserId}`,
      secureJsonDataEncoded: JSON.stringify({
        basicAuthPassword: this.platformAllServicesToken.token,
      }),
    });

    const lokiDataSourceJson = pick(lokiDatasource, "type", "uid");

    new Dashboard(this, "platform-dashboard", {
      overwrite: true,
      configJson: JSON.stringify({
        title: "Oyasai Platform",
        uid: "oyasai-platform",
        panels: [
          {
            title: "Log Volume",
            type: "timeseries",
            gridPos: { h: 4, w: 24, x: 0, y: 0 },
            datasource: lokiDataSourceJson,
            targets: [
              {
                expr: 'sum by(service) (count_over_time({service=~"$service", environment=~"$environment"} [$__interval]))',
                datasource: lokiDataSourceJson,
                legendFormat: "{{service}}",
              },
            ],
            fieldConfig: {
              defaults: {
                unit: "short",
                custom: {
                  stacking: { mode: "normal", group: "A" },
                  fillOpacity: 50,
                  lineWidth: 1,
                  pointSize: 0,
                },
              },
              overrides: [],
            },
            options: {
              legend: { displayMode: "list", placement: "bottom", showLegend: true },
              tooltip: { mode: "multi" },
            },
          },
          {
            title: "All Logs",
            type: "logs",
            gridPos: { h: 20, w: 24, x: 0, y: 4 },
            datasource: lokiDataSourceJson,
            targets: [
              {
                expr: '{service=~"$service", environment=~"$environment"} |= "$search"',
                datasource: lokiDataSourceJson,
              },
            ],
            options: {
              showTime: true,
              showLabels: false,
              showCommonLabels: false,
              wrapLogMessage: false,
              prettifyLogMessage: true,
              enableLogDetails: true,
              sortOrder: "Descending",
              dedupStrategy: "none",
            },
          },
        ],
        templating: {
          list: [
            {
              name: "service",
              type: "query",
              query: 'label_values(service)',
              datasource: lokiDataSourceJson,
              multi: true,
              includeAll: true,
              allValue: ".+",
              refresh: 2,
              sort: 1,
            },
            {
              name: "environment",
              type: "query",
              query: 'label_values(environment)',
              datasource: lokiDataSourceJson,
              multi: true,
              includeAll: true,
              allValue: ".+",
              refresh: 2,
              sort: 1,
              value: "master",
            },
            {
              name: "search",
              type: "textbox",
              query: "",
              hide: 0,
            },
          ],
        },
      }),
    });
  }
}
