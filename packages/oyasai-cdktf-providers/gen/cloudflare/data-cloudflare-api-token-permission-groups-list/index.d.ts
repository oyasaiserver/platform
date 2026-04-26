import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiTokenPermissionGroupsListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token_permission_groups_list#max_items DataCloudflareApiTokenPermissionGroupsList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter by the name of the permission group.
    * The value must be URL-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token_permission_groups_list#name DataCloudflareApiTokenPermissionGroupsList#name}
    */
    readonly name?: string;
    /**
    * Filter by the scope of the permission group.
    * The value must be URL-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token_permission_groups_list#scope DataCloudflareApiTokenPermissionGroupsList#scope}
    */
    readonly scope?: string;
}
export interface DataCloudflareApiTokenPermissionGroupsListResult {
}
export declare function dataCloudflareApiTokenPermissionGroupsListResultToTerraform(struct?: DataCloudflareApiTokenPermissionGroupsListResult): any;
export declare function dataCloudflareApiTokenPermissionGroupsListResultToHclTerraform(struct?: DataCloudflareApiTokenPermissionGroupsListResult): any;
export declare class DataCloudflareApiTokenPermissionGroupsListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiTokenPermissionGroupsListResult | undefined;
    set internalValue(value: DataCloudflareApiTokenPermissionGroupsListResult | undefined);
    get id(): any;
    get name(): any;
    get scopes(): any;
}
export declare class DataCloudflareApiTokenPermissionGroupsListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiTokenPermissionGroupsListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token_permission_groups_list cloudflare_api_token_permission_groups_list}
*/
export declare class DataCloudflareApiTokenPermissionGroupsList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_token_permission_groups_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiTokenPermissionGroupsList to import
    * @param importFromId The id of the existing DataCloudflareApiTokenPermissionGroupsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token_permission_groups_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiTokenPermissionGroupsList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token_permission_groups_list cloudflare_api_token_permission_groups_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiTokenPermissionGroupsListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiTokenPermissionGroupsListConfig);
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
    get result(): DataCloudflareApiTokenPermissionGroupsListResultList;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
