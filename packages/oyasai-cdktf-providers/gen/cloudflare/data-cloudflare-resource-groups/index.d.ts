import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareResourceGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups#account_id DataCloudflareResourceGroups#account_id}
    */
    readonly accountId?: string;
    /**
    * ID of the resource group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups#id DataCloudflareResourceGroups#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups#max_items DataCloudflareResourceGroups#max_items}
    */
    readonly maxItems?: number;
    /**
    * Name of the resource group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups#name DataCloudflareResourceGroups#name}
    */
    readonly name?: string;
}
export interface DataCloudflareResourceGroupsResultMeta {
}
export declare function dataCloudflareResourceGroupsResultMetaToTerraform(struct?: DataCloudflareResourceGroupsResultMeta): any;
export declare function dataCloudflareResourceGroupsResultMetaToHclTerraform(struct?: DataCloudflareResourceGroupsResultMeta): any;
export declare class DataCloudflareResourceGroupsResultMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareResourceGroupsResultMeta | undefined;
    set internalValue(value: DataCloudflareResourceGroupsResultMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareResourceGroupsResultScopeObjects {
}
export declare function dataCloudflareResourceGroupsResultScopeObjectsToTerraform(struct?: DataCloudflareResourceGroupsResultScopeObjects): any;
export declare function dataCloudflareResourceGroupsResultScopeObjectsToHclTerraform(struct?: DataCloudflareResourceGroupsResultScopeObjects): any;
export declare class DataCloudflareResourceGroupsResultScopeObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareResourceGroupsResultScopeObjects | undefined;
    set internalValue(value: DataCloudflareResourceGroupsResultScopeObjects | undefined);
    get key(): any;
}
export declare class DataCloudflareResourceGroupsResultScopeObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareResourceGroupsResultScopeObjectsOutputReference;
}
export interface DataCloudflareResourceGroupsResultScope {
}
export declare function dataCloudflareResourceGroupsResultScopeToTerraform(struct?: DataCloudflareResourceGroupsResultScope): any;
export declare function dataCloudflareResourceGroupsResultScopeToHclTerraform(struct?: DataCloudflareResourceGroupsResultScope): any;
export declare class DataCloudflareResourceGroupsResultScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareResourceGroupsResultScope | undefined;
    set internalValue(value: DataCloudflareResourceGroupsResultScope | undefined);
    get key(): any;
    private _objects;
    get objects(): DataCloudflareResourceGroupsResultScopeObjectsList;
}
export declare class DataCloudflareResourceGroupsResultScopeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareResourceGroupsResultScopeOutputReference;
}
export interface DataCloudflareResourceGroupsResult {
}
export declare function dataCloudflareResourceGroupsResultToTerraform(struct?: DataCloudflareResourceGroupsResult): any;
export declare function dataCloudflareResourceGroupsResultToHclTerraform(struct?: DataCloudflareResourceGroupsResult): any;
export declare class DataCloudflareResourceGroupsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareResourceGroupsResult | undefined;
    set internalValue(value: DataCloudflareResourceGroupsResult | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareResourceGroupsResultMetaOutputReference;
    get name(): any;
    private _scope;
    get scope(): DataCloudflareResourceGroupsResultScopeList;
}
export declare class DataCloudflareResourceGroupsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareResourceGroupsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups cloudflare_resource_groups}
*/
export declare class DataCloudflareResourceGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_resource_groups";
    /**
    * Generates CDKTF code for importing a DataCloudflareResourceGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareResourceGroups to import
    * @param importFromId The id of the existing DataCloudflareResourceGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareResourceGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_groups cloudflare_resource_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareResourceGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareResourceGroupsConfig);
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
    get result(): DataCloudflareResourceGroupsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
