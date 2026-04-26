import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessShortLivedCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_short_lived_certificates#account_id DataCloudflareZeroTrustAccessShortLivedCertificates#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_short_lived_certificates#max_items DataCloudflareZeroTrustAccessShortLivedCertificates#max_items}
    */
    readonly maxItems?: number;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_short_lived_certificates#zone_id DataCloudflareZeroTrustAccessShortLivedCertificates#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessShortLivedCertificatesResult {
}
export declare function dataCloudflareZeroTrustAccessShortLivedCertificatesResultToTerraform(struct?: DataCloudflareZeroTrustAccessShortLivedCertificatesResult): any;
export declare function dataCloudflareZeroTrustAccessShortLivedCertificatesResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessShortLivedCertificatesResult): any;
export declare class DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessShortLivedCertificatesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessShortLivedCertificatesResult | undefined);
    get aud(): any;
    get id(): any;
    get publicKey(): any;
}
export declare class DataCloudflareZeroTrustAccessShortLivedCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_short_lived_certificates cloudflare_zero_trust_access_short_lived_certificates}
*/
export declare class DataCloudflareZeroTrustAccessShortLivedCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_short_lived_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessShortLivedCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessShortLivedCertificates to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessShortLivedCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_short_lived_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessShortLivedCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_short_lived_certificates cloudflare_zero_trust_access_short_lived_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessShortLivedCertificatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessShortLivedCertificatesConfig);
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
    get result(): DataCloudflareZeroTrustAccessShortLivedCertificatesResultList;
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
