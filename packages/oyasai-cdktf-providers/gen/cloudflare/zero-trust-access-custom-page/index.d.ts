import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessCustomPageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page#account_id ZeroTrustAccessCustomPage#account_id}
    */
    readonly accountId?: string;
    /**
    * Custom page HTML.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page#custom_html ZeroTrustAccessCustomPage#custom_html}
    */
    readonly customHtml: string;
    /**
    * Custom page name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page#name ZeroTrustAccessCustomPage#name}
    */
    readonly name: string;
    /**
    * Custom page type.
    * Available values: "identity_denied", "forbidden".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page#type ZeroTrustAccessCustomPage#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page cloudflare_zero_trust_access_custom_page}
*/
export declare class ZeroTrustAccessCustomPage extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_custom_page";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessCustomPage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessCustomPage to import
    * @param importFromId The id of the existing ZeroTrustAccessCustomPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessCustomPage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_custom_page cloudflare_zero_trust_access_custom_page} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessCustomPageConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessCustomPageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _customHtml?;
    get customHtml(): string;
    set customHtml(value: string);
    get customHtmlInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    get uid(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
