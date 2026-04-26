import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareResourceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group#account_id DataCloudflareResourceGroup#account_id}
    */
    readonly accountId?: string;
    /**
    * Resource Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group#resource_group_id DataCloudflareResourceGroup#resource_group_id}
    */
    readonly resourceGroupId: string;
}
export interface DataCloudflareResourceGroupMeta {
}
export declare function dataCloudflareResourceGroupMetaToTerraform(struct?: DataCloudflareResourceGroupMeta): any;
export declare function dataCloudflareResourceGroupMetaToHclTerraform(struct?: DataCloudflareResourceGroupMeta): any;
export declare class DataCloudflareResourceGroupMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareResourceGroupMeta | undefined;
    set internalValue(value: DataCloudflareResourceGroupMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareResourceGroupScopeObjects {
}
export declare function dataCloudflareResourceGroupScopeObjectsToTerraform(struct?: DataCloudflareResourceGroupScopeObjects): any;
export declare function dataCloudflareResourceGroupScopeObjectsToHclTerraform(struct?: DataCloudflareResourceGroupScopeObjects): any;
export declare class DataCloudflareResourceGroupScopeObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareResourceGroupScopeObjects | undefined;
    set internalValue(value: DataCloudflareResourceGroupScopeObjects | undefined);
    get key(): any;
}
export declare class DataCloudflareResourceGroupScopeObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareResourceGroupScopeObjectsOutputReference;
}
export interface DataCloudflareResourceGroupScope {
}
export declare function dataCloudflareResourceGroupScopeToTerraform(struct?: DataCloudflareResourceGroupScope): any;
export declare function dataCloudflareResourceGroupScopeToHclTerraform(struct?: DataCloudflareResourceGroupScope): any;
export declare class DataCloudflareResourceGroupScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareResourceGroupScope | undefined;
    set internalValue(value: DataCloudflareResourceGroupScope | undefined);
    get key(): any;
    private _objects;
    get objects(): DataCloudflareResourceGroupScopeObjectsList;
}
export declare class DataCloudflareResourceGroupScopeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareResourceGroupScopeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group cloudflare_resource_group}
*/
export declare class DataCloudflareResourceGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_resource_group";
    /**
    * Generates CDKTF code for importing a DataCloudflareResourceGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareResourceGroup to import
    * @param importFromId The id of the existing DataCloudflareResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareResourceGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group cloudflare_resource_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareResourceGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareResourceGroupConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _meta;
    get meta(): DataCloudflareResourceGroupMetaOutputReference;
    get name(): any;
    private _resourceGroupId?;
    get resourceGroupId(): string;
    set resourceGroupId(value: string);
    get resourceGroupIdInput(): string;
    private _scope;
    get scope(): DataCloudflareResourceGroupScopeList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
