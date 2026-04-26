import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomSslsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to match all search requirements or at least one (any).
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls#match DataCloudflareCustomSsls#match}
    */
    readonly match?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls#max_items DataCloudflareCustomSsls#max_items}
    */
    readonly maxItems?: number;
    /**
    * Status of the zone's custom SSL.
    * Available values: "active", "expired", "deleted", "pending", "initializing".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls#status DataCloudflareCustomSsls#status}
    */
    readonly status?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls#zone_id DataCloudflareCustomSsls#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCustomSslsResultGeoRestrictions {
}
export declare function dataCloudflareCustomSslsResultGeoRestrictionsToTerraform(struct?: DataCloudflareCustomSslsResultGeoRestrictions): any;
export declare function dataCloudflareCustomSslsResultGeoRestrictionsToHclTerraform(struct?: DataCloudflareCustomSslsResultGeoRestrictions): any;
export declare class DataCloudflareCustomSslsResultGeoRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslsResultGeoRestrictions | undefined;
    set internalValue(value: DataCloudflareCustomSslsResultGeoRestrictions | undefined);
    get label(): any;
}
export interface DataCloudflareCustomSslsResultKeylessServerTunnel {
}
export declare function dataCloudflareCustomSslsResultKeylessServerTunnelToTerraform(struct?: DataCloudflareCustomSslsResultKeylessServerTunnel): any;
export declare function dataCloudflareCustomSslsResultKeylessServerTunnelToHclTerraform(struct?: DataCloudflareCustomSslsResultKeylessServerTunnel): any;
export declare class DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslsResultKeylessServerTunnel | undefined;
    set internalValue(value: DataCloudflareCustomSslsResultKeylessServerTunnel | undefined);
    get privateIp(): any;
    get vnetId(): any;
}
export interface DataCloudflareCustomSslsResultKeylessServer {
}
export declare function dataCloudflareCustomSslsResultKeylessServerToTerraform(struct?: DataCloudflareCustomSslsResultKeylessServer): any;
export declare function dataCloudflareCustomSslsResultKeylessServerToHclTerraform(struct?: DataCloudflareCustomSslsResultKeylessServer): any;
export declare class DataCloudflareCustomSslsResultKeylessServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslsResultKeylessServer | undefined;
    set internalValue(value: DataCloudflareCustomSslsResultKeylessServer | undefined);
    get createdOn(): any;
    get enabled(): any;
    get host(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    get permissions(): any;
    get port(): any;
    get status(): any;
    private _tunnel;
    get tunnel(): DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference;
}
export interface DataCloudflareCustomSslsResult {
}
export declare function dataCloudflareCustomSslsResultToTerraform(struct?: DataCloudflareCustomSslsResult): any;
export declare function dataCloudflareCustomSslsResultToHclTerraform(struct?: DataCloudflareCustomSslsResult): any;
export declare class DataCloudflareCustomSslsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomSslsResult | undefined;
    set internalValue(value: DataCloudflareCustomSslsResult | undefined);
    get bundleMethod(): any;
    get customCsrId(): any;
    get expiresOn(): any;
    private _geoRestrictions;
    get geoRestrictions(): DataCloudflareCustomSslsResultGeoRestrictionsOutputReference;
    get hosts(): any;
    get id(): any;
    get issuer(): any;
    private _keylessServer;
    get keylessServer(): DataCloudflareCustomSslsResultKeylessServerOutputReference;
    get modifiedOn(): any;
    get policyRestrictions(): any;
    get priority(): any;
    get signature(): any;
    get status(): any;
    get uploadedOn(): any;
    get zoneId(): any;
}
export declare class DataCloudflareCustomSslsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomSslsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls cloudflare_custom_ssls}
*/
export declare class DataCloudflareCustomSsls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_ssls";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomSsls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomSsls to import
    * @param importFromId The id of the existing DataCloudflareCustomSsls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomSsls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls cloudflare_custom_ssls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomSslsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomSslsConfig);
    private _match?;
    get match(): string;
    set match(value: string);
    resetMatch(): void;
    get matchInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareCustomSslsResultList;
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
