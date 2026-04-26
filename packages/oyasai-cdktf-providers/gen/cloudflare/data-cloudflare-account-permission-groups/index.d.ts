import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountPermissionGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups#account_id DataCloudflareAccountPermissionGroups#account_id}
    */
    readonly accountId?: string;
    /**
    * ID of the permission group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups#id DataCloudflareAccountPermissionGroups#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Label of the permission group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups#label DataCloudflareAccountPermissionGroups#label}
    */
    readonly label?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups#max_items DataCloudflareAccountPermissionGroups#max_items}
    */
    readonly maxItems?: number;
    /**
    * Name of the permission group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups#name DataCloudflareAccountPermissionGroups#name}
    */
    readonly name?: string;
}
export interface DataCloudflareAccountPermissionGroupsResultMeta {
}
export declare function dataCloudflareAccountPermissionGroupsResultMetaToTerraform(struct?: DataCloudflareAccountPermissionGroupsResultMeta): any;
export declare function dataCloudflareAccountPermissionGroupsResultMetaToHclTerraform(struct?: DataCloudflareAccountPermissionGroupsResultMeta): any;
export declare class DataCloudflareAccountPermissionGroupsResultMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountPermissionGroupsResultMeta | undefined;
    set internalValue(value: DataCloudflareAccountPermissionGroupsResultMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountPermissionGroupsResult {
}
export declare function dataCloudflareAccountPermissionGroupsResultToTerraform(struct?: DataCloudflareAccountPermissionGroupsResult): any;
export declare function dataCloudflareAccountPermissionGroupsResultToHclTerraform(struct?: DataCloudflareAccountPermissionGroupsResult): any;
export declare class DataCloudflareAccountPermissionGroupsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountPermissionGroupsResult | undefined;
    set internalValue(value: DataCloudflareAccountPermissionGroupsResult | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountPermissionGroupsResultMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareAccountPermissionGroupsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountPermissionGroupsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups cloudflare_account_permission_groups}
*/
export declare class DataCloudflareAccountPermissionGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_permission_groups";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountPermissionGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountPermissionGroups to import
    * @param importFromId The id of the existing DataCloudflareAccountPermissionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountPermissionGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_groups cloudflare_account_permission_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountPermissionGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountPermissionGroupsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string;
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
    get result(): DataCloudflareAccountPermissionGroupsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
