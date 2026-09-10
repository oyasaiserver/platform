// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaProviderConfig {
  /**
  * API token, basic auth in the `username:password` format or `anonymous` (string literal). May alternatively be set via the `GRAFANA_AUTH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#auth GrafanaProvider#auth}
  */
  readonly auth?: string;
  /**
  * Certificate CA bundle (file path or literal value) to use to verify the Grafana server's certificate. May alternatively be set via the `GRAFANA_CA_CERT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#ca_cert GrafanaProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Access Policy Token for Grafana Cloud. May alternatively be set via the `GRAFANA_CLOUD_ACCESS_POLICY_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#cloud_access_policy_token GrafanaProvider#cloud_access_policy_token}
  */
  readonly cloudAccessPolicyToken?: string;
  /**
  * Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_CLOUD_API_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#cloud_api_url GrafanaProvider#cloud_api_url}
  */
  readonly cloudApiUrl?: string;
  /**
  * A Grafana Cloud Provider access token. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#cloud_provider_access_token GrafanaProvider#cloud_provider_access_token}
  */
  readonly cloudProviderAccessToken?: string;
  /**
  * A Grafana Cloud Provider backend address. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#cloud_provider_url GrafanaProvider#cloud_provider_url}
  */
  readonly cloudProviderUrl?: string;
  /**
  * A Grafana Connections API access token. May alternatively be set via the `GRAFANA_CONNECTIONS_API_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#connections_api_access_token GrafanaProvider#connections_api_access_token}
  */
  readonly connectionsApiAccessToken?: string;
  /**
  * A Grafana Connections API address. May alternatively be set via the `GRAFANA_CONNECTIONS_API_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#connections_api_url GrafanaProvider#connections_api_url}
  */
  readonly connectionsApiUrl?: string;
  /**
  * A Grafana Fleet Management basic auth in the `username:password` format. May alternatively be set via the `GRAFANA_FLEET_MANAGEMENT_AUTH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#fleet_management_auth GrafanaProvider#fleet_management_auth}
  */
  readonly fleetManagementAuth?: string;
  /**
  * A Grafana Fleet Management API address. May alternatively be set via the `GRAFANA_FLEET_MANAGEMENT_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#fleet_management_url GrafanaProvider#fleet_management_url}
  */
  readonly fleetManagementUrl?: string;
  /**
  * A Grafana Frontend Observability API access token. May alternatively be set via the `GRAFANA_FRONTEND_O11Y_API_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#frontend_o11y_api_access_token GrafanaProvider#frontend_o11y_api_access_token}
  */
  readonly frontendO11YApiAccessToken?: string;
  /**
  * The Grafana Frontend Observability API URL. This is optional, and should only be set to override the default API. May alternatively be set via the `GRAFANA_FRONTEND_O11Y_API_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#frontend_o11y_api_url GrafanaProvider#frontend_o11y_api_url}
  */
  readonly frontendO11YApiUrl?: string;
  /**
  * Optional. HTTP headers mapping keys to values used for accessing the Grafana and Grafana Cloud APIs. May alternatively be set via the `GRAFANA_HTTP_HEADERS` environment variable in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#http_headers GrafanaProvider#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Skip TLS certificate verification. May alternatively be set via the `GRAFANA_INSECURE_SKIP_VERIFY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#insecure_skip_verify GrafanaProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The k6 Cloud API token. May alternatively be set via the `GRAFANA_K6_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#k6_access_token GrafanaProvider#k6_access_token}
  */
  readonly k6AccessToken?: string;
  /**
  * The k6 Cloud API url. May alternatively be set via the `GRAFANA_K6_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#k6_url GrafanaProvider#k6_url}
  */
  readonly k6Url?: string;
  /**
  * A Grafana OnCall access token. May alternatively be set via the `GRAFANA_ONCALL_ACCESS_TOKEN` environment variable. This is only required when using a dedicated OnCall API token. When using Grafana Cloud, OnCall can be accessed through the `auth` and `url` provider attributes instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#oncall_access_token GrafanaProvider#oncall_access_token}
  */
  readonly oncallAccessToken?: string;
  /**
  * A Grafana OnCall backend address. May alternatively be set via the `GRAFANA_ONCALL_URL` environment variable. This is only required when using Grafana OnCall OSS. In Grafana Cloud, the OnCall URL is automatically inferred from the Grafana instance URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#oncall_url GrafanaProvider#oncall_url}
  */
  readonly oncallUrl?: string;
  /**
  * The Grafana org ID, if you are using a self-hosted OSS or enterprise Grafana instance. May alternatively be set via the `GRAFANA_ORG_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#org_id GrafanaProvider#org_id}
  */
  readonly orgId?: number;
  /**
  * The amount of retries to use for Grafana API and Grafana Cloud API calls. May alternatively be set via the `GRAFANA_RETRIES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#retries GrafanaProvider#retries}
  */
  readonly retries?: number;
  /**
  * The status codes to retry on for Grafana API and Grafana Cloud API calls. Use `x` as a digit wildcard. Defaults to 429 and 5xx. May alternatively be set via the `GRAFANA_RETRY_STATUS_CODES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#retry_status_codes GrafanaProvider#retry_status_codes}
  */
  readonly retryStatusCodes?: string[];
  /**
  * The amount of time in seconds to wait between retries for Grafana API and Grafana Cloud API calls. May alternatively be set via the `GRAFANA_RETRY_WAIT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#retry_wait GrafanaProvider#retry_wait}
  */
  readonly retryWait?: number;
  /**
  * A Synthetic Monitoring access token. May alternatively be set via the `GRAFANA_SM_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#sm_access_token GrafanaProvider#sm_access_token}
  */
  readonly smAccessToken?: string;
  /**
  * Synthetic monitoring backend address. May alternatively be set via the `GRAFANA_SM_URL` environment variable. The correct value for each service region is cited in the [Synthetic Monitoring documentation](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/set-up/set-up-private-probes/#probe-api-server-url). Note the `sm_url` value is optional, but it must correspond with the value specified as the `region_slug` in the `grafana_cloud_stack` resource. Also note that when a Terraform configuration contains multiple provider instances managing SM resources associated with the same Grafana stack, specifying an explicit `sm_url` set to the same value for each provider ensures all providers interact with the same SM API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#sm_url GrafanaProvider#sm_url}
  */
  readonly smUrl?: string;
  /**
  * The Grafana stack ID, if you are using a Grafana Cloud stack. May alternatively be set via the `GRAFANA_STACK_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#stack_id GrafanaProvider#stack_id}
  */
  readonly stackId?: number;
  /**
  * Set to true if you want to save only the sha256sum instead of complete dashboard model JSON in the tfstate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#store_dashboard_sha256 GrafanaProvider#store_dashboard_sha256}
  */
  readonly storeDashboardSha256?: boolean | cdktf.IResolvable;
  /**
  * Client TLS certificate (file path or literal value) to use to authenticate to the Grafana server. May alternatively be set via the `GRAFANA_TLS_CERT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#tls_cert GrafanaProvider#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Client TLS key (file path or literal value) to use to authenticate to the Grafana server. May alternatively be set via the `GRAFANA_TLS_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#tls_key GrafanaProvider#tls_key}
  */
  readonly tlsKey?: string;
  /**
  * The root URL of a Grafana server. May alternatively be set via the `GRAFANA_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#url GrafanaProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#alias GrafanaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs grafana}
*/
export class GrafanaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrafanaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaProvider to import
  * @param importFromId The id of the existing GrafanaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs grafana} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GrafanaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      terraformProviderSource: 'grafana/grafana'
    });
    this._auth = config.auth;
    this._caCert = config.caCert;
    this._cloudAccessPolicyToken = config.cloudAccessPolicyToken;
    this._cloudApiUrl = config.cloudApiUrl;
    this._cloudProviderAccessToken = config.cloudProviderAccessToken;
    this._cloudProviderUrl = config.cloudProviderUrl;
    this._connectionsApiAccessToken = config.connectionsApiAccessToken;
    this._connectionsApiUrl = config.connectionsApiUrl;
    this._fleetManagementAuth = config.fleetManagementAuth;
    this._fleetManagementUrl = config.fleetManagementUrl;
    this._frontendO11YApiAccessToken = config.frontendO11YApiAccessToken;
    this._frontendO11YApiUrl = config.frontendO11YApiUrl;
    this._httpHeaders = config.httpHeaders;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._k6AccessToken = config.k6AccessToken;
    this._k6Url = config.k6Url;
    this._oncallAccessToken = config.oncallAccessToken;
    this._oncallUrl = config.oncallUrl;
    this._orgId = config.orgId;
    this._retries = config.retries;
    this._retryStatusCodes = config.retryStatusCodes;
    this._retryWait = config.retryWait;
    this._smAccessToken = config.smAccessToken;
    this._smUrl = config.smUrl;
    this._stackId = config.stackId;
    this._storeDashboardSha256 = config.storeDashboardSha256;
    this._tlsCert = config.tlsCert;
    this._tlsKey = config.tlsKey;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this._auth;
  }
  public set auth(value: string | undefined) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this._caCert;
  }
  public set caCert(value: string | undefined) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cloud_access_policy_token - computed: false, optional: true, required: false
  private _cloudAccessPolicyToken?: string; 
  public get cloudAccessPolicyToken() {
    return this._cloudAccessPolicyToken;
  }
  public set cloudAccessPolicyToken(value: string | undefined) {
    this._cloudAccessPolicyToken = value;
  }
  public resetCloudAccessPolicyToken() {
    this._cloudAccessPolicyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccessPolicyTokenInput() {
    return this._cloudAccessPolicyToken;
  }

  // cloud_api_url - computed: false, optional: true, required: false
  private _cloudApiUrl?: string; 
  public get cloudApiUrl() {
    return this._cloudApiUrl;
  }
  public set cloudApiUrl(value: string | undefined) {
    this._cloudApiUrl = value;
  }
  public resetCloudApiUrl() {
    this._cloudApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiUrlInput() {
    return this._cloudApiUrl;
  }

  // cloud_provider_access_token - computed: false, optional: true, required: false
  private _cloudProviderAccessToken?: string; 
  public get cloudProviderAccessToken() {
    return this._cloudProviderAccessToken;
  }
  public set cloudProviderAccessToken(value: string | undefined) {
    this._cloudProviderAccessToken = value;
  }
  public resetCloudProviderAccessToken() {
    this._cloudProviderAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderAccessTokenInput() {
    return this._cloudProviderAccessToken;
  }

  // cloud_provider_url - computed: false, optional: true, required: false
  private _cloudProviderUrl?: string; 
  public get cloudProviderUrl() {
    return this._cloudProviderUrl;
  }
  public set cloudProviderUrl(value: string | undefined) {
    this._cloudProviderUrl = value;
  }
  public resetCloudProviderUrl() {
    this._cloudProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderUrlInput() {
    return this._cloudProviderUrl;
  }

  // connections_api_access_token - computed: false, optional: true, required: false
  private _connectionsApiAccessToken?: string; 
  public get connectionsApiAccessToken() {
    return this._connectionsApiAccessToken;
  }
  public set connectionsApiAccessToken(value: string | undefined) {
    this._connectionsApiAccessToken = value;
  }
  public resetConnectionsApiAccessToken() {
    this._connectionsApiAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsApiAccessTokenInput() {
    return this._connectionsApiAccessToken;
  }

  // connections_api_url - computed: false, optional: true, required: false
  private _connectionsApiUrl?: string; 
  public get connectionsApiUrl() {
    return this._connectionsApiUrl;
  }
  public set connectionsApiUrl(value: string | undefined) {
    this._connectionsApiUrl = value;
  }
  public resetConnectionsApiUrl() {
    this._connectionsApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsApiUrlInput() {
    return this._connectionsApiUrl;
  }

  // fleet_management_auth - computed: false, optional: true, required: false
  private _fleetManagementAuth?: string; 
  public get fleetManagementAuth() {
    return this._fleetManagementAuth;
  }
  public set fleetManagementAuth(value: string | undefined) {
    this._fleetManagementAuth = value;
  }
  public resetFleetManagementAuth() {
    this._fleetManagementAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetManagementAuthInput() {
    return this._fleetManagementAuth;
  }

  // fleet_management_url - computed: false, optional: true, required: false
  private _fleetManagementUrl?: string; 
  public get fleetManagementUrl() {
    return this._fleetManagementUrl;
  }
  public set fleetManagementUrl(value: string | undefined) {
    this._fleetManagementUrl = value;
  }
  public resetFleetManagementUrl() {
    this._fleetManagementUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetManagementUrlInput() {
    return this._fleetManagementUrl;
  }

  // frontend_o11y_api_access_token - computed: false, optional: true, required: false
  private _frontendO11YApiAccessToken?: string; 
  public get frontendO11YApiAccessToken() {
    return this._frontendO11YApiAccessToken;
  }
  public set frontendO11YApiAccessToken(value: string | undefined) {
    this._frontendO11YApiAccessToken = value;
  }
  public resetFrontendO11YApiAccessToken() {
    this._frontendO11YApiAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendO11YApiAccessTokenInput() {
    return this._frontendO11YApiAccessToken;
  }

  // frontend_o11y_api_url - computed: false, optional: true, required: false
  private _frontendO11YApiUrl?: string; 
  public get frontendO11YApiUrl() {
    return this._frontendO11YApiUrl;
  }
  public set frontendO11YApiUrl(value: string | undefined) {
    this._frontendO11YApiUrl = value;
  }
  public resetFrontendO11YApiUrl() {
    this._frontendO11YApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendO11YApiUrlInput() {
    return this._frontendO11YApiUrl;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public set httpHeaders(value: { [key: string]: string } | undefined) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this._insecureSkipVerify;
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // k6_access_token - computed: false, optional: true, required: false
  private _k6AccessToken?: string; 
  public get k6AccessToken() {
    return this._k6AccessToken;
  }
  public set k6AccessToken(value: string | undefined) {
    this._k6AccessToken = value;
  }
  public resetK6AccessToken() {
    this._k6AccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k6AccessTokenInput() {
    return this._k6AccessToken;
  }

  // k6_url - computed: false, optional: true, required: false
  private _k6Url?: string; 
  public get k6Url() {
    return this._k6Url;
  }
  public set k6Url(value: string | undefined) {
    this._k6Url = value;
  }
  public resetK6Url() {
    this._k6Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k6UrlInput() {
    return this._k6Url;
  }

  // oncall_access_token - computed: false, optional: true, required: false
  private _oncallAccessToken?: string; 
  public get oncallAccessToken() {
    return this._oncallAccessToken;
  }
  public set oncallAccessToken(value: string | undefined) {
    this._oncallAccessToken = value;
  }
  public resetOncallAccessToken() {
    this._oncallAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oncallAccessTokenInput() {
    return this._oncallAccessToken;
  }

  // oncall_url - computed: false, optional: true, required: false
  private _oncallUrl?: string; 
  public get oncallUrl() {
    return this._oncallUrl;
  }
  public set oncallUrl(value: string | undefined) {
    this._oncallUrl = value;
  }
  public resetOncallUrl() {
    this._oncallUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oncallUrlInput() {
    return this._oncallUrl;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: number | undefined) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_status_codes - computed: false, optional: true, required: false
  private _retryStatusCodes?: string[]; 
  public get retryStatusCodes() {
    return this._retryStatusCodes;
  }
  public set retryStatusCodes(value: string[] | undefined) {
    this._retryStatusCodes = value;
  }
  public resetRetryStatusCodes() {
    this._retryStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStatusCodesInput() {
    return this._retryStatusCodes;
  }

  // retry_wait - computed: false, optional: true, required: false
  private _retryWait?: number; 
  public get retryWait() {
    return this._retryWait;
  }
  public set retryWait(value: number | undefined) {
    this._retryWait = value;
  }
  public resetRetryWait() {
    this._retryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitInput() {
    return this._retryWait;
  }

  // sm_access_token - computed: false, optional: true, required: false
  private _smAccessToken?: string; 
  public get smAccessToken() {
    return this._smAccessToken;
  }
  public set smAccessToken(value: string | undefined) {
    this._smAccessToken = value;
  }
  public resetSmAccessToken() {
    this._smAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smAccessTokenInput() {
    return this._smAccessToken;
  }

  // sm_url - computed: false, optional: true, required: false
  private _smUrl?: string; 
  public get smUrl() {
    return this._smUrl;
  }
  public set smUrl(value: string | undefined) {
    this._smUrl = value;
  }
  public resetSmUrl() {
    this._smUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smUrlInput() {
    return this._smUrl;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: number; 
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: number | undefined) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // store_dashboard_sha256 - computed: false, optional: true, required: false
  private _storeDashboardSha256?: boolean | cdktf.IResolvable; 
  public get storeDashboardSha256() {
    return this._storeDashboardSha256;
  }
  public set storeDashboardSha256(value: boolean | cdktf.IResolvable | undefined) {
    this._storeDashboardSha256 = value;
  }
  public resetStoreDashboardSha256() {
    this._storeDashboardSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeDashboardSha256Input() {
    return this._storeDashboardSha256;
  }

  // tls_cert - computed: false, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this._tlsCert;
  }
  public set tlsCert(value: string | undefined) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // tls_key - computed: false, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this._tlsKey;
  }
  public set tlsKey(value: string | undefined) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      cloud_access_policy_token: cdktf.stringToTerraform(this._cloudAccessPolicyToken),
      cloud_api_url: cdktf.stringToTerraform(this._cloudApiUrl),
      cloud_provider_access_token: cdktf.stringToTerraform(this._cloudProviderAccessToken),
      cloud_provider_url: cdktf.stringToTerraform(this._cloudProviderUrl),
      connections_api_access_token: cdktf.stringToTerraform(this._connectionsApiAccessToken),
      connections_api_url: cdktf.stringToTerraform(this._connectionsApiUrl),
      fleet_management_auth: cdktf.stringToTerraform(this._fleetManagementAuth),
      fleet_management_url: cdktf.stringToTerraform(this._fleetManagementUrl),
      frontend_o11y_api_access_token: cdktf.stringToTerraform(this._frontendO11YApiAccessToken),
      frontend_o11y_api_url: cdktf.stringToTerraform(this._frontendO11YApiUrl),
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      k6_access_token: cdktf.stringToTerraform(this._k6AccessToken),
      k6_url: cdktf.stringToTerraform(this._k6Url),
      oncall_access_token: cdktf.stringToTerraform(this._oncallAccessToken),
      oncall_url: cdktf.stringToTerraform(this._oncallUrl),
      org_id: cdktf.numberToTerraform(this._orgId),
      retries: cdktf.numberToTerraform(this._retries),
      retry_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retryStatusCodes),
      retry_wait: cdktf.numberToTerraform(this._retryWait),
      sm_access_token: cdktf.stringToTerraform(this._smAccessToken),
      sm_url: cdktf.stringToTerraform(this._smUrl),
      stack_id: cdktf.numberToTerraform(this._stackId),
      store_dashboard_sha256: cdktf.booleanToTerraform(this._storeDashboardSha256),
      tls_cert: cdktf.stringToTerraform(this._tlsCert),
      tls_key: cdktf.stringToTerraform(this._tlsKey),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_access_policy_token: {
        value: cdktf.stringToHclTerraform(this._cloudAccessPolicyToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_api_url: {
        value: cdktf.stringToHclTerraform(this._cloudApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider_access_token: {
        value: cdktf.stringToHclTerraform(this._cloudProviderAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider_url: {
        value: cdktf.stringToHclTerraform(this._cloudProviderUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connections_api_access_token: {
        value: cdktf.stringToHclTerraform(this._connectionsApiAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connections_api_url: {
        value: cdktf.stringToHclTerraform(this._connectionsApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_management_auth: {
        value: cdktf.stringToHclTerraform(this._fleetManagementAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_management_url: {
        value: cdktf.stringToHclTerraform(this._fleetManagementUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_o11y_api_access_token: {
        value: cdktf.stringToHclTerraform(this._frontendO11YApiAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_o11y_api_url: {
        value: cdktf.stringToHclTerraform(this._frontendO11YApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._httpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k6_access_token: {
        value: cdktf.stringToHclTerraform(this._k6AccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k6_url: {
        value: cdktf.stringToHclTerraform(this._k6Url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oncall_access_token: {
        value: cdktf.stringToHclTerraform(this._oncallAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oncall_url: {
        value: cdktf.stringToHclTerraform(this._oncallUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.numberToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_status_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retryStatusCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      retry_wait: {
        value: cdktf.numberToHclTerraform(this._retryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sm_access_token: {
        value: cdktf.stringToHclTerraform(this._smAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sm_url: {
        value: cdktf.stringToHclTerraform(this._smUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.numberToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      store_dashboard_sha256: {
        value: cdktf.booleanToHclTerraform(this._storeDashboardSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_cert: {
        value: cdktf.stringToHclTerraform(this._tlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_key: {
        value: cdktf.stringToHclTerraform(this._tlsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
