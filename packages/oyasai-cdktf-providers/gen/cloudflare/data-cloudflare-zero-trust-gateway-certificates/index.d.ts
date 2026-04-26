import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_certificates#account_id DataCloudflareZeroTrustGatewayCertificates#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_certificates#max_items DataCloudflareZeroTrustGatewayCertificates#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustGatewayCertificatesResult {
}
export declare function dataCloudflareZeroTrustGatewayCertificatesResultToTerraform(struct?: DataCloudflareZeroTrustGatewayCertificatesResult): any;
export declare function dataCloudflareZeroTrustGatewayCertificatesResultToHclTerraform(struct?: DataCloudflareZeroTrustGatewayCertificatesResult): any;
export declare class DataCloudflareZeroTrustGatewayCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayCertificatesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayCertificatesResult | undefined);
    get bindingStatus(): any;
    get certificate(): any;
    get createdAt(): any;
    get expiresOn(): any;
    get fingerprint(): any;
    get id(): any;
    get inUse(): any;
    get issuerOrg(): any;
    get issuerRaw(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadedOn(): any;
}
export declare class DataCloudflareZeroTrustGatewayCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_certificates cloudflare_zero_trust_gateway_certificates}
*/
export declare class DataCloudflareZeroTrustGatewayCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayCertificates to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_certificates cloudflare_zero_trust_gateway_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayCertificatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustGatewayCertificatesConfig);
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
    get result(): DataCloudflareZeroTrustGatewayCertificatesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
