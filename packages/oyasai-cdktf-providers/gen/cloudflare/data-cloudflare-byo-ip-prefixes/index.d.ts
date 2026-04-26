import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareByoIpPrefixesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier of a Cloudflare account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes#account_id DataCloudflareByoIpPrefixes#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes#max_items DataCloudflareByoIpPrefixes#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareByoIpPrefixesResult {
}
export declare function dataCloudflareByoIpPrefixesResultToTerraform(struct?: DataCloudflareByoIpPrefixesResult): any;
export declare function dataCloudflareByoIpPrefixesResultToHclTerraform(struct?: DataCloudflareByoIpPrefixesResult): any;
export declare class DataCloudflareByoIpPrefixesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareByoIpPrefixesResult | undefined;
    set internalValue(value: DataCloudflareByoIpPrefixesResult | undefined);
    get accountId(): any;
    get advertised(): any;
    get advertisedModifiedAt(): any;
    get approved(): any;
    get asn(): any;
    get cidr(): any;
    get createdAt(): any;
    get delegateLoaCreation(): any;
    get description(): any;
    get id(): any;
    get irrValidationState(): any;
    get loaDocumentId(): any;
    get modifiedAt(): any;
    get onDemandEnabled(): any;
    get onDemandLocked(): any;
    get ownershipValidationState(): any;
    get ownershipValidationToken(): any;
    get rpkiValidationState(): any;
}
export declare class DataCloudflareByoIpPrefixesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareByoIpPrefixesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes cloudflare_byo_ip_prefixes}
*/
export declare class DataCloudflareByoIpPrefixes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_byo_ip_prefixes";
    /**
    * Generates CDKTF code for importing a DataCloudflareByoIpPrefixes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareByoIpPrefixes to import
    * @param importFromId The id of the existing DataCloudflareByoIpPrefixes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareByoIpPrefixes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes cloudflare_byo_ip_prefixes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareByoIpPrefixesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareByoIpPrefixesConfig);
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
    get result(): DataCloudflareByoIpPrefixesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
