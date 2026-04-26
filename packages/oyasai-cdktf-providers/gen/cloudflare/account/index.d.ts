import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Parent container details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#managed_by Account#managed_by}
    */
    readonly managedBy?: AccountManagedBy;
    /**
    * Account name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#name Account#name}
    */
    readonly name: string;
    /**
    * Account settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#settings Account#settings}
    */
    readonly settings?: AccountSettings;
    /**
    * Available values: "standard", "enterprise".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#type Account#type}
    */
    readonly type?: string;
    /**
    * information related to the tenant unit, and optionally, an id of the unit to create the account on. see https://developers.cloudflare.com/tenant/how-to/manage-accounts/
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#unit Account#unit}
    */
    readonly unit?: AccountUnit;
}
export interface AccountManagedBy {
}
export declare function accountManagedByToTerraform(struct?: AccountManagedBy | cdktf.IResolvable): any;
export declare function accountManagedByToHclTerraform(struct?: AccountManagedBy | cdktf.IResolvable): any;
export declare class AccountManagedByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountManagedBy | cdktf.IResolvable | undefined;
    set internalValue(value: AccountManagedBy | cdktf.IResolvable | undefined);
    get parentOrgId(): any;
    get parentOrgName(): any;
}
export interface AccountSettings {
    /**
    * Sets an abuse contact email to notify for abuse reports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#abuse_contact_email Account#abuse_contact_email}
    */
    readonly abuseContactEmail?: string;
    /**
    * Indicates whether membership in this account requires that
    * Two-Factor Authentication is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#enforce_twofactor Account#enforce_twofactor}
    */
    readonly enforceTwofactor?: boolean | cdktf.IResolvable;
}
export declare function accountSettingsToTerraform(struct?: AccountSettings | cdktf.IResolvable): any;
export declare function accountSettingsToHclTerraform(struct?: AccountSettings | cdktf.IResolvable): any;
export declare class AccountSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountSettings | cdktf.IResolvable | undefined;
    set internalValue(value: AccountSettings | cdktf.IResolvable | undefined);
    private _abuseContactEmail?;
    get abuseContactEmail(): string;
    set abuseContactEmail(value: string);
    resetAbuseContactEmail(): void;
    get abuseContactEmailInput(): string;
    private _enforceTwofactor?;
    get enforceTwofactor(): boolean | cdktf.IResolvable;
    set enforceTwofactor(value: boolean | cdktf.IResolvable);
    resetEnforceTwofactor(): void;
    get enforceTwofactorInput(): any;
}
export interface AccountUnit {
    /**
    * Tenant unit ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#id Account#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function accountUnitToTerraform(struct?: AccountUnit | cdktf.IResolvable): any;
export declare function accountUnitToHclTerraform(struct?: AccountUnit | cdktf.IResolvable): any;
export declare class AccountUnitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountUnit | cdktf.IResolvable | undefined;
    set internalValue(value: AccountUnit | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account cloudflare_account}
*/
export declare class Account extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_account";
    /**
    * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Account to import
    * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Account to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account cloudflare_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountConfig
    */
    constructor(scope: Construct, id: string, config: AccountConfig);
    get createdOn(): any;
    get id(): any;
    private _managedBy;
    get managedBy(): AccountManagedByOutputReference;
    putManagedBy(value: AccountManagedBy): void;
    resetManagedBy(): void;
    get managedByInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _settings;
    get settings(): AccountSettingsOutputReference;
    putSettings(value: AccountSettings): void;
    resetSettings(): void;
    get settingsInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _unit;
    get unit(): AccountUnitOutputReference;
    putUnit(value: AccountUnit): void;
    resetUnit(): void;
    get unitInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
