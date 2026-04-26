import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountApiTokenPermissionGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups#account_id DataCloudflareAccountApiTokenPermissionGroups#account_id}
    */
    readonly accountId?: string;
    /**
    * Filter by the name of the permission group.
    * The value must be URL-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups#name DataCloudflareAccountApiTokenPermissionGroups#name}
    */
    readonly name?: string;
    /**
    * Filter by the scope of the permission group.
    * The value must be URL-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups#scope DataCloudflareAccountApiTokenPermissionGroups#scope}
    */
    readonly scope?: string;
}
export interface DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups {
}
export declare function dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToTerraform(struct?: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups): any;
export declare function dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToHclTerraform(struct?: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups): any;
export declare class DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups | undefined;
    set internalValue(value: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups | undefined);
    get id(): any;
    get name(): any;
    get scopes(): any;
}
export declare class DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups cloudflare_account_api_token_permission_groups}
*/
export declare class DataCloudflareAccountApiTokenPermissionGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_api_token_permission_groups";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroups to import
    * @param importFromId The id of the existing DataCloudflareAccountApiTokenPermissionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups cloudflare_account_api_token_permission_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountApiTokenPermissionGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountApiTokenPermissionGroupsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList;
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
