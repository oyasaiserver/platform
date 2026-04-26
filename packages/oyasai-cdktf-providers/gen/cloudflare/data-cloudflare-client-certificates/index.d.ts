import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareClientCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Limit to the number of records returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#limit DataCloudflareClientCertificates#limit}
    */
    readonly limit?: number;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#max_items DataCloudflareClientCertificates#max_items}
    */
    readonly maxItems?: number;
    /**
    * Offset the results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#offset DataCloudflareClientCertificates#offset}
    */
    readonly offset?: number;
    /**
    * Client Certitifcate Status to filter results by.
    * Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#status DataCloudflareClientCertificates#status}
    */
    readonly status?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#zone_id DataCloudflareClientCertificates#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareClientCertificatesResultCertificateAuthority {
}
export declare function dataCloudflareClientCertificatesResultCertificateAuthorityToTerraform(struct?: DataCloudflareClientCertificatesResultCertificateAuthority): any;
export declare function dataCloudflareClientCertificatesResultCertificateAuthorityToHclTerraform(struct?: DataCloudflareClientCertificatesResultCertificateAuthority): any;
export declare class DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareClientCertificatesResultCertificateAuthority | undefined;
    set internalValue(value: DataCloudflareClientCertificatesResultCertificateAuthority | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareClientCertificatesResult {
}
export declare function dataCloudflareClientCertificatesResultToTerraform(struct?: DataCloudflareClientCertificatesResult): any;
export declare function dataCloudflareClientCertificatesResultToHclTerraform(struct?: DataCloudflareClientCertificatesResult): any;
export declare class DataCloudflareClientCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareClientCertificatesResult | undefined;
    set internalValue(value: DataCloudflareClientCertificatesResult | undefined);
    get certificate(): any;
    private _certificateAuthority;
    get certificateAuthority(): DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference;
    get commonName(): any;
    get country(): any;
    get csr(): any;
    get expiresOn(): any;
    get fingerprintSha256(): any;
    get id(): any;
    get issuedOn(): any;
    get location(): any;
    get organization(): any;
    get organizationalUnit(): any;
    get serialNumber(): any;
    get signature(): any;
    get ski(): any;
    get state(): any;
    get status(): any;
    get validityDays(): any;
}
export declare class DataCloudflareClientCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareClientCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates cloudflare_client_certificates}
*/
export declare class DataCloudflareClientCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_client_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareClientCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareClientCertificates to import
    * @param importFromId The id of the existing DataCloudflareClientCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareClientCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates cloudflare_client_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareClientCertificatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareClientCertificatesConfig);
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
    get result(): DataCloudflareClientCertificatesResultList;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
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
