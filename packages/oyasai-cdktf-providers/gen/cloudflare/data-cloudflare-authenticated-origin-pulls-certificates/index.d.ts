import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAuthenticatedOriginPullsCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_certificates#max_items DataCloudflareAuthenticatedOriginPullsCertificates#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_certificates#zone_id DataCloudflareAuthenticatedOriginPullsCertificates#zone_id}
    */
    readonly zoneId: string;
}
export interface DataCloudflareAuthenticatedOriginPullsCertificatesResult {
}
export declare function dataCloudflareAuthenticatedOriginPullsCertificatesResultToTerraform(struct?: DataCloudflareAuthenticatedOriginPullsCertificatesResult): any;
export declare function dataCloudflareAuthenticatedOriginPullsCertificatesResultToHclTerraform(struct?: DataCloudflareAuthenticatedOriginPullsCertificatesResult): any;
export declare class DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAuthenticatedOriginPullsCertificatesResult | undefined;
    set internalValue(value: DataCloudflareAuthenticatedOriginPullsCertificatesResult | undefined);
    get certificate(): any;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    get serialNumber(): any;
    get signature(): any;
    get status(): any;
    get uploadedOn(): any;
}
export declare class DataCloudflareAuthenticatedOriginPullsCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_certificates cloudflare_authenticated_origin_pulls_certificates}
*/
export declare class DataCloudflareAuthenticatedOriginPullsCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsCertificates to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_certificates cloudflare_authenticated_origin_pulls_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsCertificatesConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsCertificatesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareAuthenticatedOriginPullsCertificatesResultList;
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
