import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSpectrumApplicationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Sets the direction by which results are ordered.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications#direction DataCloudflareSpectrumApplications#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications#max_items DataCloudflareSpectrumApplications#max_items}
    */
    readonly maxItems?: number;
    /**
    * Application field by which results are ordered.
    * Available values: "protocol", "app_id", "created_on", "modified_on", "dns".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications#order DataCloudflareSpectrumApplications#order}
    */
    readonly order?: string;
    /**
    * Zone identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications#zone_id DataCloudflareSpectrumApplications#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareSpectrumApplicationsResultDns {
}
export declare function dataCloudflareSpectrumApplicationsResultDnsToTerraform(struct?: DataCloudflareSpectrumApplicationsResultDns): any;
export declare function dataCloudflareSpectrumApplicationsResultDnsToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResultDns): any;
export declare class DataCloudflareSpectrumApplicationsResultDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationsResultDns | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationsResultDns | undefined);
    get name(): any;
    get type(): any;
}
export interface DataCloudflareSpectrumApplicationsResultEdgeIps {
}
export declare function dataCloudflareSpectrumApplicationsResultEdgeIpsToTerraform(struct?: DataCloudflareSpectrumApplicationsResultEdgeIps): any;
export declare function dataCloudflareSpectrumApplicationsResultEdgeIpsToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResultEdgeIps): any;
export declare class DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationsResultEdgeIps | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationsResultEdgeIps | undefined);
    get connectivity(): any;
    get ips(): any;
    get type(): any;
}
export interface DataCloudflareSpectrumApplicationsResultOriginDns {
}
export declare function dataCloudflareSpectrumApplicationsResultOriginDnsToTerraform(struct?: DataCloudflareSpectrumApplicationsResultOriginDns): any;
export declare function dataCloudflareSpectrumApplicationsResultOriginDnsToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResultOriginDns): any;
export declare class DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationsResultOriginDns | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationsResultOriginDns | undefined);
    get name(): any;
    get ttl(): any;
    get type(): any;
}
export interface DataCloudflareSpectrumApplicationsResult {
}
export declare function dataCloudflareSpectrumApplicationsResultToTerraform(struct?: DataCloudflareSpectrumApplicationsResult): any;
export declare function dataCloudflareSpectrumApplicationsResultToHclTerraform(struct?: DataCloudflareSpectrumApplicationsResult): any;
export declare class DataCloudflareSpectrumApplicationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareSpectrumApplicationsResult | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationsResult | undefined);
    get argoSmartRouting(): any;
    get createdOn(): any;
    private _dns;
    get dns(): DataCloudflareSpectrumApplicationsResultDnsOutputReference;
    private _edgeIps;
    get edgeIps(): DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference;
    get id(): any;
    get ipFirewall(): any;
    get modifiedOn(): any;
    get originDirect(): any;
    private _originDns;
    get originDns(): DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference;
    private _originPort;
    get originPort(): any;
    get protocol(): any;
    get proxyProtocol(): any;
    get tls(): any;
    get trafficType(): any;
}
export declare class DataCloudflareSpectrumApplicationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareSpectrumApplicationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications}
*/
export declare class DataCloudflareSpectrumApplications extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_spectrum_applications";
    /**
    * Generates CDKTF code for importing a DataCloudflareSpectrumApplications resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSpectrumApplications to import
    * @param importFromId The id of the existing DataCloudflareSpectrumApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSpectrumApplications to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSpectrumApplicationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSpectrumApplicationsConfig);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _result;
    get result(): DataCloudflareSpectrumApplicationsResultList;
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
