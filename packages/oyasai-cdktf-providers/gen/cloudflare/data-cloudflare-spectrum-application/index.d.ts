import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSpectrumApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * App identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#app_id DataCloudflareSpectrumApplication#app_id}
    */
    readonly appId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#filter DataCloudflareSpectrumApplication#filter}
    */
    readonly filter?: DataCloudflareSpectrumApplicationFilter;
    /**
    * Zone identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#zone_id DataCloudflareSpectrumApplication#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareSpectrumApplicationDns {
}
export declare function dataCloudflareSpectrumApplicationDnsToTerraform(struct?: DataCloudflareSpectrumApplicationDns): any;
export declare function dataCloudflareSpectrumApplicationDnsToHclTerraform(struct?: DataCloudflareSpectrumApplicationDns): any;
export declare class DataCloudflareSpectrumApplicationDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationDns | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationDns | undefined);
    get name(): any;
    get type(): any;
}
export interface DataCloudflareSpectrumApplicationEdgeIps {
}
export declare function dataCloudflareSpectrumApplicationEdgeIpsToTerraform(struct?: DataCloudflareSpectrumApplicationEdgeIps): any;
export declare function dataCloudflareSpectrumApplicationEdgeIpsToHclTerraform(struct?: DataCloudflareSpectrumApplicationEdgeIps): any;
export declare class DataCloudflareSpectrumApplicationEdgeIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationEdgeIps | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationEdgeIps | undefined);
    get connectivity(): any;
    get ips(): any;
    get type(): any;
}
export interface DataCloudflareSpectrumApplicationFilter {
    /**
    * Sets the direction by which results are ordered.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#direction DataCloudflareSpectrumApplication#direction}
    */
    readonly direction?: string;
    /**
    * Application field by which results are ordered.
    * Available values: "protocol", "app_id", "created_on", "modified_on", "dns".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#order DataCloudflareSpectrumApplication#order}
    */
    readonly order?: string;
}
export declare function dataCloudflareSpectrumApplicationFilterToTerraform(struct?: DataCloudflareSpectrumApplicationFilter | cdktf.IResolvable): any;
export declare function dataCloudflareSpectrumApplicationFilterToHclTerraform(struct?: DataCloudflareSpectrumApplicationFilter | cdktf.IResolvable): any;
export declare class DataCloudflareSpectrumApplicationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
}
export interface DataCloudflareSpectrumApplicationOriginDns {
}
export declare function dataCloudflareSpectrumApplicationOriginDnsToTerraform(struct?: DataCloudflareSpectrumApplicationOriginDns): any;
export declare function dataCloudflareSpectrumApplicationOriginDnsToHclTerraform(struct?: DataCloudflareSpectrumApplicationOriginDns): any;
export declare class DataCloudflareSpectrumApplicationOriginDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSpectrumApplicationOriginDns | undefined;
    set internalValue(value: DataCloudflareSpectrumApplicationOriginDns | undefined);
    get name(): any;
    get ttl(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application cloudflare_spectrum_application}
*/
export declare class DataCloudflareSpectrumApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_spectrum_application";
    /**
    * Generates CDKTF code for importing a DataCloudflareSpectrumApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSpectrumApplication to import
    * @param importFromId The id of the existing DataCloudflareSpectrumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSpectrumApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application cloudflare_spectrum_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSpectrumApplicationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSpectrumApplicationConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    resetAppId(): void;
    get appIdInput(): string;
    get argoSmartRouting(): any;
    get createdOn(): any;
    private _dns;
    get dns(): DataCloudflareSpectrumApplicationDnsOutputReference;
    private _edgeIps;
    get edgeIps(): DataCloudflareSpectrumApplicationEdgeIpsOutputReference;
    private _filter;
    get filter(): DataCloudflareSpectrumApplicationFilterOutputReference;
    putFilter(value: DataCloudflareSpectrumApplicationFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get ipFirewall(): any;
    get modifiedOn(): any;
    get originDirect(): any;
    private _originDns;
    get originDns(): DataCloudflareSpectrumApplicationOriginDnsOutputReference;
    private _originPort;
    get originPort(): any;
    get protocol(): any;
    get proxyProtocol(): any;
    get tls(): any;
    get trafficType(): any;
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
