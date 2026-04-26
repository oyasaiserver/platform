import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAddressMapsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier of a Cloudflare account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_maps#account_id DataCloudflareAddressMaps#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_maps#max_items DataCloudflareAddressMaps#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareAddressMapsResult {
}
export declare function dataCloudflareAddressMapsResultToTerraform(struct?: DataCloudflareAddressMapsResult): any;
export declare function dataCloudflareAddressMapsResultToHclTerraform(struct?: DataCloudflareAddressMapsResult): any;
export declare class DataCloudflareAddressMapsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAddressMapsResult | undefined;
    set internalValue(value: DataCloudflareAddressMapsResult | undefined);
    get canDelete(): any;
    get canModifyIps(): any;
    get createdAt(): any;
    get defaultSni(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get modifiedAt(): any;
}
export declare class DataCloudflareAddressMapsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAddressMapsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_maps cloudflare_address_maps}
*/
export declare class DataCloudflareAddressMaps extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_address_maps";
    /**
    * Generates CDKTF code for importing a DataCloudflareAddressMaps resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAddressMaps to import
    * @param importFromId The id of the existing DataCloudflareAddressMaps that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_maps#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAddressMaps to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_maps cloudflare_address_maps} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAddressMapsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAddressMapsConfig);
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
    private _result;
    get result(): DataCloudflareAddressMapsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
