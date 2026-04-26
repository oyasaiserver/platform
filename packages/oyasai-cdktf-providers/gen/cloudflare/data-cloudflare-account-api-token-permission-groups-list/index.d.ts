import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountApiTokenPermissionGroupsListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list#account_id DataCloudflareAccountApiTokenPermissionGroupsList#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list#max_items DataCloudflareAccountApiTokenPermissionGroupsList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter by the name of the permission group.
    * The value must be URL-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list#name DataCloudflareAccountApiTokenPermissionGroupsList#name}
    */
    readonly name?: string;
    /**
    * Filter by the scope of the permission group.
    * The value must be URL-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list#scope DataCloudflareAccountApiTokenPermissionGroupsList#scope}
    */
    readonly scope?: string;
}
export interface DataCloudflareAccountApiTokenPermissionGroupsListResult {
}
export declare function dataCloudflareAccountApiTokenPermissionGroupsListResultToTerraform(struct?: DataCloudflareAccountApiTokenPermissionGroupsListResult): any;
export declare function dataCloudflareAccountApiTokenPermissionGroupsListResultToHclTerraform(struct?: DataCloudflareAccountApiTokenPermissionGroupsListResult): any;
export declare class DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountApiTokenPermissionGroupsListResult | undefined;
    set internalValue(value: DataCloudflareAccountApiTokenPermissionGroupsListResult | undefined);
    get id(): any;
    get name(): any;
    get scopes(): any;
}
export declare class DataCloudflareAccountApiTokenPermissionGroupsListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list cloudflare_account_api_token_permission_groups_list}
*/
export declare class DataCloudflareAccountApiTokenPermissionGroupsList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_api_token_permission_groups_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroupsList to import
    * @param importFromId The id of the existing DataCloudflareAccountApiTokenPermissionGroupsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroupsList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups_list cloudflare_account_api_token_permission_groups_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountApiTokenPermissionGroupsListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountApiTokenPermissionGroupsListConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    get result(): DataCloudflareAccountApiTokenPermissionGroupsListResultList;
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
