import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#max_items DataCloudflareAuthenticatedOriginPullsHostnameCertificates#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificates#zone_id}
    */
    readonly zoneId: string;
}
export interface DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult {
}
export declare function dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToTerraform(struct?: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult): any;
export declare function dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToHclTerraform(struct?: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult): any;
export declare class DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult | undefined;
    set internalValue(value: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult | undefined);
    get certificate(): any;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    get serialNumber(): any;
    get signature(): any;
    get status(): any;
    get uploadedOn(): any;
}
export declare class DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates}
*/
export declare class DataCloudflareAuthenticatedOriginPullsHostnameCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_hostname_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
