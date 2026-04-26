import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts#direction DataCloudflareAccounts#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts#max_items DataCloudflareAccounts#max_items}
    */
    readonly maxItems?: number;
    /**
    * Name of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts#name DataCloudflareAccounts#name}
    */
    readonly name?: string;
}
export interface DataCloudflareAccountsResultManagedBy {
}
export declare function dataCloudflareAccountsResultManagedByToTerraform(struct?: DataCloudflareAccountsResultManagedBy): any;
export declare function dataCloudflareAccountsResultManagedByToHclTerraform(struct?: DataCloudflareAccountsResultManagedBy): any;
export declare class DataCloudflareAccountsResultManagedByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountsResultManagedBy | undefined;
    set internalValue(value: DataCloudflareAccountsResultManagedBy | undefined);
    get parentOrgId(): any;
    get parentOrgName(): any;
}
export interface DataCloudflareAccountsResultSettings {
}
export declare function dataCloudflareAccountsResultSettingsToTerraform(struct?: DataCloudflareAccountsResultSettings): any;
export declare function dataCloudflareAccountsResultSettingsToHclTerraform(struct?: DataCloudflareAccountsResultSettings): any;
export declare class DataCloudflareAccountsResultSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountsResultSettings | undefined;
    set internalValue(value: DataCloudflareAccountsResultSettings | undefined);
    get abuseContactEmail(): any;
    get enforceTwofactor(): any;
}
export interface DataCloudflareAccountsResult {
}
export declare function dataCloudflareAccountsResultToTerraform(struct?: DataCloudflareAccountsResult): any;
export declare function dataCloudflareAccountsResultToHclTerraform(struct?: DataCloudflareAccountsResult): any;
export declare class DataCloudflareAccountsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountsResult | undefined;
    set internalValue(value: DataCloudflareAccountsResult | undefined);
    get createdOn(): any;
    get id(): any;
    private _managedBy;
    get managedBy(): DataCloudflareAccountsResultManagedByOutputReference;
    get name(): any;
    private _settings;
    get settings(): DataCloudflareAccountsResultSettingsOutputReference;
    get type(): any;
}
export declare class DataCloudflareAccountsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareAccountsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts cloudflare_accounts}
*/
export declare class DataCloudflareAccounts extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_accounts";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccounts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccounts to import
    * @param importFromId The id of the existing DataCloudflareAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccounts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts cloudflare_accounts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountsConfig);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareAccountsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
