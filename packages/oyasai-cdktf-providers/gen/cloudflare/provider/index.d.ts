import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudflareProviderConfig {
    /**
    * The API key for operations. Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#api_key CloudflareProvider#api_key}
    */
    readonly apiKey?: string;
    /**
    * The API Token for operations. Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#api_token CloudflareProvider#api_token}
    */
    readonly apiToken?: string;
    /**
    * A special Cloudflare API key good for a restricted set of endpoints. Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#api_user_service_key CloudflareProvider#api_user_service_key}
    */
    readonly apiUserServiceKey?: string;
    /**
    * Value to override the default HTTP client base URL. Alternatively, can be configured using the `base_url` environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#base_url CloudflareProvider#base_url}
    */
    readonly baseUrl?: string;
    /**
    * A registered Cloudflare email address. Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#email CloudflareProvider#email}
    */
    readonly email?: string;
    /**
    * A value to append to the HTTP User Agent for all API calls. This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}
    */
    readonly userAgentOperatorSuffix?: string;
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#alias CloudflareProvider#alias}
    */
    readonly alias?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs cloudflare}
*/
export declare class CloudflareProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType = "cloudflare";
    /**
    * Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudflareProvider to import
    * @param importFromId The id of the existing CloudflareProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudflareProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs cloudflare} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudflareProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudflareProviderConfig);
    private _apiKey?;
    get apiKey(): string | undefined;
    set apiKey(value: string | undefined);
    resetApiKey(): void;
    get apiKeyInput(): string;
    private _apiToken?;
    get apiToken(): string | undefined;
    set apiToken(value: string | undefined);
    resetApiToken(): void;
    get apiTokenInput(): string;
    private _apiUserServiceKey?;
    get apiUserServiceKey(): string | undefined;
    set apiUserServiceKey(value: string | undefined);
    resetApiUserServiceKey(): void;
    get apiUserServiceKeyInput(): string;
    private _baseUrl?;
    get baseUrl(): string | undefined;
    set baseUrl(value: string | undefined);
    resetBaseUrl(): void;
    get baseUrlInput(): string;
    private _email?;
    get email(): string | undefined;
    set email(value: string | undefined);
    resetEmail(): void;
    get emailInput(): string;
    private _userAgentOperatorSuffix?;
    get userAgentOperatorSuffix(): string | undefined;
    set userAgentOperatorSuffix(value: string | undefined);
    resetUserAgentOperatorSuffix(): void;
    get userAgentOperatorSuffixInput(): string;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
