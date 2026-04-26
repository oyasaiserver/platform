import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomOriginTrustStoresConfig extends cdktf.TerraformMetaArguments {
    /**
    * Limit to the number of records returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores#limit DataCloudflareCustomOriginTrustStores#limit}
    */
    readonly limit?: number;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores#max_items DataCloudflareCustomOriginTrustStores#max_items}
    */
    readonly maxItems?: number;
    /**
    * Offset the results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores#offset DataCloudflareCustomOriginTrustStores#offset}
    */
    readonly offset?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores#zone_id DataCloudflareCustomOriginTrustStores#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCustomOriginTrustStoresResult {
}
export declare function dataCloudflareCustomOriginTrustStoresResultToTerraform(struct?: DataCloudflareCustomOriginTrustStoresResult): any;
export declare function dataCloudflareCustomOriginTrustStoresResultToHclTerraform(struct?: DataCloudflareCustomOriginTrustStoresResult): any;
export declare class DataCloudflareCustomOriginTrustStoresResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomOriginTrustStoresResult | undefined;
    set internalValue(value: DataCloudflareCustomOriginTrustStoresResult | undefined);
    get certificate(): any;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    get signature(): any;
    get status(): any;
    get updatedAt(): any;
    get uploadedOn(): any;
}
export declare class DataCloudflareCustomOriginTrustStoresResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomOriginTrustStoresResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores cloudflare_custom_origin_trust_stores}
*/
export declare class DataCloudflareCustomOriginTrustStores extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_origin_trust_stores";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomOriginTrustStores resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomOriginTrustStores to import
    * @param importFromId The id of the existing DataCloudflareCustomOriginTrustStores that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomOriginTrustStores to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores cloudflare_custom_origin_trust_stores} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomOriginTrustStoresConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomOriginTrustStoresConfig);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    resetLimit(): void;
    get limitInput(): number;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _offset?;
    get offset(): number;
    set offset(value: number);
    resetOffset(): void;
    get offsetInput(): number;
    private _result;
    get result(): DataCloudflareCustomOriginTrustStoresResultList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
