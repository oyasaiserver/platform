import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomSslConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#custom_certificate_id DataCloudflareCustomSsl#custom_certificate_id}
    */
    readonly customCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#filter DataCloudflareCustomSsl#filter}
    */
    readonly filter?: DataCloudflareCustomSslFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#zone_id DataCloudflareCustomSsl#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCustomSslFilter {
    /**
    * Whether to match all search requirements or at least one (any).
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#match DataCloudflareCustomSsl#match}
    */
    readonly match?: string;
    /**
    * Status of the zone's custom SSL.
    * Available values: "active", "expired", "deleted", "pending", "initializing".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#status DataCloudflareCustomSsl#status}
    */
    readonly status?: string;
}
export declare function dataCloudflareCustomSslFilterToTerraform(struct?: DataCloudflareCustomSslFilter | cdktf.IResolvable): any;
export declare function dataCloudflareCustomSslFilterToHclTerraform(struct?: DataCloudflareCustomSslFilter | cdktf.IResolvable): any;
export declare class DataCloudflareCustomSslFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCustomSslFilter | cdktf.IResolvable | undefined);
    private _match?;
    get match(): string;
    set match(value: string);
    resetMatch(): void;
    get matchInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
export interface DataCloudflareCustomSslGeoRestrictions {
}
export declare function dataCloudflareCustomSslGeoRestrictionsToTerraform(struct?: DataCloudflareCustomSslGeoRestrictions): any;
export declare function dataCloudflareCustomSslGeoRestrictionsToHclTerraform(struct?: DataCloudflareCustomSslGeoRestrictions): any;
export declare class DataCloudflareCustomSslGeoRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslGeoRestrictions | undefined;
    set internalValue(value: DataCloudflareCustomSslGeoRestrictions | undefined);
    get label(): any;
}
export interface DataCloudflareCustomSslKeylessServerTunnel {
}
export declare function dataCloudflareCustomSslKeylessServerTunnelToTerraform(struct?: DataCloudflareCustomSslKeylessServerTunnel): any;
export declare function dataCloudflareCustomSslKeylessServerTunnelToHclTerraform(struct?: DataCloudflareCustomSslKeylessServerTunnel): any;
export declare class DataCloudflareCustomSslKeylessServerTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslKeylessServerTunnel | undefined;
    set internalValue(value: DataCloudflareCustomSslKeylessServerTunnel | undefined);
    get privateIp(): any;
    get vnetId(): any;
}
export interface DataCloudflareCustomSslKeylessServer {
}
export declare function dataCloudflareCustomSslKeylessServerToTerraform(struct?: DataCloudflareCustomSslKeylessServer): any;
export declare function dataCloudflareCustomSslKeylessServerToHclTerraform(struct?: DataCloudflareCustomSslKeylessServer): any;
export declare class DataCloudflareCustomSslKeylessServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomSslKeylessServer | undefined;
    set internalValue(value: DataCloudflareCustomSslKeylessServer | undefined);
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
    get tunnel(): DataCloudflareCustomSslKeylessServerTunnelOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl cloudflare_custom_ssl}
*/
export declare class DataCloudflareCustomSsl extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_ssl";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomSsl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomSsl to import
    * @param importFromId The id of the existing DataCloudflareCustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomSsl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl cloudflare_custom_ssl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomSslConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomSslConfig);
    get bundleMethod(): any;
    private _customCertificateId?;
    get customCertificateId(): string;
    set customCertificateId(value: string);
    resetCustomCertificateId(): void;
    get customCertificateIdInput(): string;
    get customCsrId(): any;
    get expiresOn(): any;
    private _filter;
    get filter(): DataCloudflareCustomSslFilterOutputReference;
    putFilter(value: DataCloudflareCustomSslFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _geoRestrictions;
    get geoRestrictions(): DataCloudflareCustomSslGeoRestrictionsOutputReference;
    get hosts(): any;
    get id(): any;
    get issuer(): any;
    private _keylessServer;
    get keylessServer(): DataCloudflareCustomSslKeylessServerOutputReference;
    get modifiedOn(): any;
    get policyRestrictions(): any;
    get priority(): any;
    get signature(): any;
    get status(): any;
    get uploadedOn(): any;
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
