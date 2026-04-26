import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list#account_id DataCloudflareZeroTrustList#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list#filter DataCloudflareZeroTrustList#filter}
    */
    readonly filter?: DataCloudflareZeroTrustListFilter;
    /**
    * Identify the API resource with a UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list#list_id DataCloudflareZeroTrustList#list_id}
    */
    readonly listId?: string;
}
export interface DataCloudflareZeroTrustListFilter {
    /**
    * Specify the list type.
    * Available values: "SERIAL", "URL", "DOMAIN", "EMAIL", "IP", "CATEGORY", "LOCATION", "DEVICE", "AAGUID".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list#type DataCloudflareZeroTrustList#type}
    */
    readonly type?: string;
}
export declare function dataCloudflareZeroTrustListFilterToTerraform(struct?: DataCloudflareZeroTrustListFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustListFilterToHclTerraform(struct?: DataCloudflareZeroTrustListFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustListFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustListFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustListFilter | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface DataCloudflareZeroTrustListItems {
}
export declare function dataCloudflareZeroTrustListItemsToTerraform(struct?: DataCloudflareZeroTrustListItems): any;
export declare function dataCloudflareZeroTrustListItemsToHclTerraform(struct?: DataCloudflareZeroTrustListItems): any;
export declare class DataCloudflareZeroTrustListItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustListItems | undefined;
    set internalValue(value: DataCloudflareZeroTrustListItems | undefined);
    get createdAt(): any;
    get description(): any;
    get value(): any;
}
export declare class DataCloudflareZeroTrustListItemsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustListItemsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list cloudflare_zero_trust_list}
*/
export declare class DataCloudflareZeroTrustList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustList to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list cloudflare_zero_trust_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustListConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get description(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustListFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustListFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _items;
    get items(): DataCloudflareZeroTrustListItemsList;
    get listCount(): any;
    private _listId?;
    get listId(): string;
    set listId(value: string);
    resetListId(): void;
    get listIdInput(): string;
    get name(): any;
    get type(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
