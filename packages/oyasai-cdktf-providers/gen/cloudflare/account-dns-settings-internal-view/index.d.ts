import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountDnsSettingsInternalViewConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings_internal_view#account_id AccountDnsSettingsInternalView#account_id}
    */
    readonly accountId?: string;
    /**
    * The name of the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings_internal_view#name AccountDnsSettingsInternalView#name}
    */
    readonly name: string;
    /**
    * The list of zones linked to this view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings_internal_view#zones AccountDnsSettingsInternalView#zones}
    */
    readonly zones: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}
*/
export declare class AccountDnsSettingsInternalView extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_account_dns_settings_internal_view";
    /**
    * Generates CDKTF code for importing a AccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountDnsSettingsInternalView to import
    * @param importFromId The id of the existing AccountDnsSettingsInternalView that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountDnsSettingsInternalView to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountDnsSettingsInternalViewConfig
    */
    constructor(scope: Construct, id: string, config: AccountDnsSettingsInternalViewConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdTime(): any;
    get id(): any;
    get modifiedTime(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _zones?;
    get zones(): string[];
    set zones(value: string[]);
    get zonesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
