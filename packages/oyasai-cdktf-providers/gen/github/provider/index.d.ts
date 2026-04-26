import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GithubProviderConfig {
    /**
    * The GitHub Base API URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#base_url GithubProvider#base_url}
    */
    readonly baseUrl?: string;
    /**
    * Enable `insecure` mode for testing purposes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#insecure GithubProvider#insecure}
    */
    readonly insecure?: boolean | cdktf.IResolvable;
    /**
    * Number of items per page for paginationDefaults to 100
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#max_per_page GithubProvider#max_per_page}
    */
    readonly maxPerPage?: number;
    /**
    * Number of times to retry a request after receiving an error status codeDefaults to 3
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#max_retries GithubProvider#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#organization GithubProvider#organization}
    */
    readonly organization?: string;
    /**
    * The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#owner GithubProvider#owner}
    */
    readonly owner?: string;
    /**
    * Allow the provider to make parallel API calls to GitHub. You may want to set it to true when you have a private Github Enterprise without strict rate limits. While it is possible to enable this setting on github.com, github.com's best practices recommend using serialization to avoid hitting abuse rate limitsDefaults to false if not set
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#parallel_requests GithubProvider#parallel_requests}
    */
    readonly parallelRequests?: boolean | cdktf.IResolvable;
    /**
    * Amount of time in milliseconds to sleep in between non-write requests to GitHub API. Defaults to 0ms if not set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#read_delay_ms GithubProvider#read_delay_ms}
    */
    readonly readDelayMs?: number;
    /**
    * Amount of time in milliseconds to sleep in between requests to GitHub API after an error response. Defaults to 1000ms or 1s if not set, the max_retries must be set to greater than zero.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#retry_delay_ms GithubProvider#retry_delay_ms}
    */
    readonly retryDelayMs?: number;
    /**
    * Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#retryable_errors GithubProvider#retryable_errors}
    */
    readonly retryableErrors?: number[];
    /**
    * The OAuth token used to connect to GitHub. Anonymous mode is enabled if both `token` and `app_auth` are not set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#token GithubProvider#token}
    */
    readonly token?: string;
    /**
    * Amount of time in milliseconds to sleep in between writes to GitHub API. Defaults to 1000ms or 1s if not set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#write_delay_ms GithubProvider#write_delay_ms}
    */
    readonly writeDelayMs?: number;
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#alias GithubProvider#alias}
    */
    readonly alias?: string;
    /**
    * app_auth block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#app_auth GithubProvider#app_auth}
    */
    readonly appAuth?: GithubProviderAppAuth;
}
export interface GithubProviderAppAuth {
    /**
    * The GitHub App ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#id GithubProvider#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The GitHub App installation instance ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#installation_id GithubProvider#installation_id}
    */
    readonly installationId: string;
    /**
    * The GitHub App PEM file contents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#pem_file GithubProvider#pem_file}
    */
    readonly pemFile: string;
}
export declare function githubProviderAppAuthToTerraform(struct?: GithubProviderAppAuth): any;
export declare function githubProviderAppAuthToHclTerraform(struct?: GithubProviderAppAuth): any;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs github}
*/
export declare class GithubProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType = "github";
    /**
    * Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GithubProvider to import
    * @param importFromId The id of the existing GithubProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GithubProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs github} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GithubProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: GithubProviderConfig);
    private _baseUrl?;
    get baseUrl(): string | undefined;
    set baseUrl(value: string | undefined);
    resetBaseUrl(): void;
    get baseUrlInput(): string;
    private _insecure?;
    get insecure(): boolean | cdktf.IResolvable | undefined;
    set insecure(value: boolean | cdktf.IResolvable | undefined);
    resetInsecure(): void;
    get insecureInput(): any;
    private _maxPerPage?;
    get maxPerPage(): number | undefined;
    set maxPerPage(value: number | undefined);
    resetMaxPerPage(): void;
    get maxPerPageInput(): number;
    private _maxRetries?;
    get maxRetries(): number | undefined;
    set maxRetries(value: number | undefined);
    resetMaxRetries(): void;
    get maxRetriesInput(): number;
    private _organization?;
    get organization(): string | undefined;
    set organization(value: string | undefined);
    resetOrganization(): void;
    get organizationInput(): string;
    private _owner?;
    get owner(): string | undefined;
    set owner(value: string | undefined);
    resetOwner(): void;
    get ownerInput(): string;
    private _parallelRequests?;
    get parallelRequests(): boolean | cdktf.IResolvable | undefined;
    set parallelRequests(value: boolean | cdktf.IResolvable | undefined);
    resetParallelRequests(): void;
    get parallelRequestsInput(): any;
    private _readDelayMs?;
    get readDelayMs(): number | undefined;
    set readDelayMs(value: number | undefined);
    resetReadDelayMs(): void;
    get readDelayMsInput(): number;
    private _retryDelayMs?;
    get retryDelayMs(): number | undefined;
    set retryDelayMs(value: number | undefined);
    resetRetryDelayMs(): void;
    get retryDelayMsInput(): number;
    private _retryableErrors?;
    get retryableErrors(): number[] | undefined;
    set retryableErrors(value: number[] | undefined);
    resetRetryableErrors(): void;
    get retryableErrorsInput(): number[];
    private _token?;
    get token(): string | undefined;
    set token(value: string | undefined);
    resetToken(): void;
    get tokenInput(): string;
    private _writeDelayMs?;
    get writeDelayMs(): number | undefined;
    set writeDelayMs(value: number | undefined);
    resetWriteDelayMs(): void;
    get writeDelayMsInput(): number;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string;
    private _appAuth?;
    get appAuth(): GithubProviderAppAuth | undefined;
    set appAuth(value: GithubProviderAppAuth | undefined);
    resetAppAuth(): void;
    get appAuthInput(): GithubProviderAppAuth;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
