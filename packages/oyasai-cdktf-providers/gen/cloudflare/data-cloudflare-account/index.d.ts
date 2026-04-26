import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account#account_id DataCloudflareAccount#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account#filter DataCloudflareAccount#filter}
    */
    readonly filter?: DataCloudflareAccountFilter;
}
export interface DataCloudflareAccountFilter {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account#direction DataCloudflareAccount#direction}
    */
    readonly direction?: string;
    /**
    * Name of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account#name DataCloudflareAccount#name}
    */
    readonly name?: string;
}
export declare function dataCloudflareAccountFilterToTerraform(struct?: DataCloudflareAccountFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAccountFilterToHclTerraform(struct?: DataCloudflareAccountFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAccountFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccountFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export interface DataCloudflareAccountManagedBy {
}
export declare function dataCloudflareAccountManagedByToTerraform(struct?: DataCloudflareAccountManagedBy): any;
export declare function dataCloudflareAccountManagedByToHclTerraform(struct?: DataCloudflareAccountManagedBy): any;
export declare class DataCloudflareAccountManagedByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountManagedBy | undefined;
    set internalValue(value: DataCloudflareAccountManagedBy | undefined);
    get parentOrgId(): any;
    get parentOrgName(): any;
}
export interface DataCloudflareAccountSettings {
}
export declare function dataCloudflareAccountSettingsToTerraform(struct?: DataCloudflareAccountSettings): any;
export declare function dataCloudflareAccountSettingsToHclTerraform(struct?: DataCloudflareAccountSettings): any;
export declare class DataCloudflareAccountSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountSettings | undefined;
    set internalValue(value: DataCloudflareAccountSettings | undefined);
    get abuseContactEmail(): any;
    get enforceTwofactor(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account cloudflare_account}
*/
export declare class DataCloudflareAccount extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccount to import
    * @param importFromId The id of the existing DataCloudflareAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account cloudflare_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    private _filter;
    get filter(): DataCloudflareAccountFilterOutputReference;
    putFilter(value: DataCloudflareAccountFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _managedBy;
    get managedBy(): DataCloudflareAccountManagedByOutputReference;
    get name(): any;
    private _settings;
    get settings(): DataCloudflareAccountSettingsOutputReference;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
