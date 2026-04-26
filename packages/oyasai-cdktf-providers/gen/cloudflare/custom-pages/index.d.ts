import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomPagesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages#account_id CustomPages#account_id}
    */
    readonly accountId?: string;
    /**
    * Error Page Types
    * Available values: "1000_errors", "500_errors", "basic_challenge", "country_challenge", "ip_block", "managed_challenge", "ratelimit_block", "under_attack", "waf_block", "waf_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages#identifier CustomPages#identifier}
    */
    readonly identifier: string;
    /**
    * The custom page state.
    * Available values: "default", "customized".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages#state CustomPages#state}
    */
    readonly state: string;
    /**
    * The URL associated with the custom page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages#url CustomPages#url}
    */
    readonly url?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages#zone_id CustomPages#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages cloudflare_custom_pages}
*/
export declare class CustomPages extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_custom_pages";
    /**
    * Generates CDKTF code for importing a CustomPages resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomPages to import
    * @param importFromId The id of the existing CustomPages that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomPages to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_pages cloudflare_custom_pages} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomPagesConfig
    */
    constructor(scope: Construct, id: string, config: CustomPagesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    get description(): any;
    get id(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    get modifiedOn(): any;
    get previewTarget(): any;
    get requiredTokens(): any;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
