import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountPermissionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group#account_id DataCloudflareAccountPermissionGroup#account_id}
    */
    readonly accountId?: string;
    /**
    * Permission Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group#permission_group_id DataCloudflareAccountPermissionGroup#permission_group_id}
    */
    readonly permissionGroupId: string;
}
export interface DataCloudflareAccountPermissionGroupMeta {
}
export declare function dataCloudflareAccountPermissionGroupMetaToTerraform(struct?: DataCloudflareAccountPermissionGroupMeta): any;
export declare function dataCloudflareAccountPermissionGroupMetaToHclTerraform(struct?: DataCloudflareAccountPermissionGroupMeta): any;
export declare class DataCloudflareAccountPermissionGroupMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountPermissionGroupMeta | undefined;
    set internalValue(value: DataCloudflareAccountPermissionGroupMeta | undefined);
    get key(): any;
    get value(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group cloudflare_account_permission_group}
*/
export declare class DataCloudflareAccountPermissionGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_permission_group";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountPermissionGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountPermissionGroup to import
    * @param importFromId The id of the existing DataCloudflareAccountPermissionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountPermissionGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group cloudflare_account_permission_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountPermissionGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAccountPermissionGroupConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountPermissionGroupMetaOutputReference;
    get name(): any;
    private _permissionGroupId?;
    get permissionGroupId(): string;
    set permissionGroupId(value: string);
    get permissionGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
