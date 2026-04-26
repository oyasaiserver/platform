import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpectrumApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Enables Argo Smart Routing for this application.
    * Notes: Only available for TCP applications with traffic_type set to "direct".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}
    */
    readonly argoSmartRouting?: boolean | cdktf.IResolvable;
    /**
    * The name and type of DNS record for the Spectrum application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#dns SpectrumApplication#dns}
    */
    readonly dns: SpectrumApplicationDns;
    /**
    * The anycast edge IP configuration for the hostname of this application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}
    */
    readonly edgeIps?: SpectrumApplicationEdgeIps;
    /**
    * Enables IP Access Rules for this application.
    * Notes: Only available for TCP applications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}
    */
    readonly ipFirewall?: boolean | cdktf.IResolvable;
    /**
    * List of origin IP addresses. Array may contain multiple IP addresses for load balancing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}
    */
    readonly originDirect?: string[];
    /**
    * The name and type of DNS record for the Spectrum application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}
    */
    readonly originDns?: SpectrumApplicationOriginDns;
    /**
    * The destination port at the origin. Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.
    * Notes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}
    */
    readonly originPort?: {
        [key: string]: any;
    };
    /**
    * The port configuration at Cloudflare's edge. May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}
    */
    readonly protocol: string;
    /**
    * Enables Proxy Protocol to the origin. Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.
    * Available values: "off", "v1", "v2", "simple".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}
    */
    readonly proxyProtocol?: string;
    /**
    * The type of TLS termination associated with the application.
    * Available values: "off", "flexible", "full", "strict".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#tls SpectrumApplication#tls}
    */
    readonly tls?: string;
    /**
    * Determines how data travels from the edge to your origin. When set to "direct", Spectrum will send traffic directly to your origin, and the application's type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.
    * Available values: "direct", "http", "https".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}
    */
    readonly trafficType?: string;
    /**
    * Zone identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}
    */
    readonly zoneId?: string;
}
export interface SpectrumApplicationDns {
    /**
    * The name of the DNS record associated with the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#name SpectrumApplication#name}
    */
    readonly name?: string;
    /**
    * The type of DNS record associated with the application.
    * Available values: "CNAME", "ADDRESS".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#type SpectrumApplication#type}
    */
    readonly type?: string;
}
export declare function spectrumApplicationDnsToTerraform(struct?: SpectrumApplicationDns | cdktf.IResolvable): any;
export declare function spectrumApplicationDnsToHclTerraform(struct?: SpectrumApplicationDns | cdktf.IResolvable): any;
export declare class SpectrumApplicationDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpectrumApplicationDns | cdktf.IResolvable | undefined;
    set internalValue(value: SpectrumApplicationDns | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface SpectrumApplicationEdgeIps {
    /**
    * The IP versions supported for inbound connections on Spectrum anycast IPs.
    * Available values: "all", "ipv4", "ipv6".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#connectivity SpectrumApplication#connectivity}
    */
    readonly connectivity?: string;
    /**
    * The array of customer owned IPs we broadcast via anycast for this hostname and application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#ips SpectrumApplication#ips}
    */
    readonly ips?: string[];
    /**
    * The type of edge IP configuration specified. Dynamically allocated edge IPs use Spectrum anycast IPs in accordance with the connectivity you specify. Only valid with CNAME DNS names.
    * Available values: "dynamic", "static".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#type SpectrumApplication#type}
    */
    readonly type?: string;
}
export declare function spectrumApplicationEdgeIpsToTerraform(struct?: SpectrumApplicationEdgeIps | cdktf.IResolvable): any;
export declare function spectrumApplicationEdgeIpsToHclTerraform(struct?: SpectrumApplicationEdgeIps | cdktf.IResolvable): any;
export declare class SpectrumApplicationEdgeIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpectrumApplicationEdgeIps | cdktf.IResolvable | undefined;
    set internalValue(value: SpectrumApplicationEdgeIps | cdktf.IResolvable | undefined);
    private _connectivity?;
    get connectivity(): string;
    set connectivity(value: string);
    resetConnectivity(): void;
    get connectivityInput(): string;
    private _ips?;
    get ips(): string[];
    set ips(value: string[]);
    resetIps(): void;
    get ipsInput(): string[];
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface SpectrumApplicationOriginDns {
    /**
    * The name of the DNS record associated with the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#name SpectrumApplication#name}
    */
    readonly name?: string;
    /**
    * The TTL of our resolution of your DNS record in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#ttl SpectrumApplication#ttl}
    */
    readonly ttl?: number;
    /**
    * The type of DNS record associated with the origin. "" is used to specify a combination of A/AAAA records.
    * Available values: "", "A", "AAAA", "SRV".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#type SpectrumApplication#type}
    */
    readonly type?: string;
}
export declare function spectrumApplicationOriginDnsToTerraform(struct?: SpectrumApplicationOriginDns | cdktf.IResolvable): any;
export declare function spectrumApplicationOriginDnsToHclTerraform(struct?: SpectrumApplicationOriginDns | cdktf.IResolvable): any;
export declare class SpectrumApplicationOriginDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpectrumApplicationOriginDns | cdktf.IResolvable | undefined;
    set internalValue(value: SpectrumApplicationOriginDns | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application cloudflare_spectrum_application}
*/
export declare class SpectrumApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_spectrum_application";
    /**
    * Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpectrumApplication to import
    * @param importFromId The id of the existing SpectrumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpectrumApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application cloudflare_spectrum_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpectrumApplicationConfig
    */
    constructor(scope: Construct, id: string, config: SpectrumApplicationConfig);
    private _argoSmartRouting?;
    get argoSmartRouting(): boolean | cdktf.IResolvable;
    set argoSmartRouting(value: boolean | cdktf.IResolvable);
    resetArgoSmartRouting(): void;
    get argoSmartRoutingInput(): any;
    get createdOn(): any;
    private _dns;
    get dns(): SpectrumApplicationDnsOutputReference;
    putDns(value: SpectrumApplicationDns): void;
    get dnsInput(): any;
    private _edgeIps;
    get edgeIps(): SpectrumApplicationEdgeIpsOutputReference;
    putEdgeIps(value: SpectrumApplicationEdgeIps): void;
    resetEdgeIps(): void;
    get edgeIpsInput(): any;
    get id(): any;
    private _ipFirewall?;
    get ipFirewall(): boolean | cdktf.IResolvable;
    set ipFirewall(value: boolean | cdktf.IResolvable);
    resetIpFirewall(): void;
    get ipFirewallInput(): any;
    get modifiedOn(): any;
    private _originDirect?;
    get originDirect(): string[];
    set originDirect(value: string[]);
    resetOriginDirect(): void;
    get originDirectInput(): string[];
    private _originDns;
    get originDns(): SpectrumApplicationOriginDnsOutputReference;
    putOriginDns(value: SpectrumApplicationOriginDns): void;
    resetOriginDns(): void;
    get originDnsInput(): any;
    private _originPort?;
    get originPort(): {
        [key: string]: any;
    };
    set originPort(value: {
        [key: string]: any;
    });
    resetOriginPort(): void;
    get originPortInput(): {
        [key: string]: any;
    };
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _proxyProtocol?;
    get proxyProtocol(): string;
    set proxyProtocol(value: string);
    resetProxyProtocol(): void;
    get proxyProtocolInput(): string;
    private _tls?;
    get tls(): string;
    set tls(value: string);
    resetTls(): void;
    get tlsInput(): string;
    private _trafficType?;
    get trafficType(): string;
    set trafficType(value: string);
    resetTrafficType(): void;
    get trafficTypeInput(): string;
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
