import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicWanGreTunnelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}
    */
    readonly accountId: string;
    /**
    * True if automatic stateful return routing should be enabled for a tunnel, false otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#automatic_return_routing MagicWanGreTunnel#automatic_return_routing}
    */
    readonly automaticReturnRouting?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#bgp MagicWanGreTunnel#bgp}
    */
    readonly bgp?: MagicWanGreTunnelBgp;
    /**
    * The IP address assigned to the Cloudflare side of the GRE tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}
    */
    readonly cloudflareGreEndpoint: string;
    /**
    * The IP address assigned to the customer side of the GRE tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}
    */
    readonly customerGreEndpoint: string;
    /**
    * An optional description of the GRE tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}
    */
    readonly healthCheck?: MagicWanGreTunnelHealthCheck;
    /**
    * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}
    */
    readonly interfaceAddress: string;
    /**
    * A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#interface_address6 MagicWanGreTunnel#interface_address6}
    */
    readonly interfaceAddress6?: string;
    /**
    * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}
    */
    readonly mtu?: number;
    /**
    * The name of the tunnel. The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}
    */
    readonly name: string;
    /**
    * Time To Live (TTL) in number of hops of the GRE tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}
    */
    readonly ttl?: number;
}
export interface MagicWanGreTunnelBgp {
    /**
    * ASN used on the customer end of the BGP session
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#customer_asn MagicWanGreTunnel#customer_asn}
    */
    readonly customerAsn: number;
    /**
    * Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#extra_prefixes MagicWanGreTunnel#extra_prefixes}
    */
    readonly extraPrefixes?: string[];
    /**
    * MD5 key to use for session authentication.
    *
    * Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the
    * key is not treated as a secret value. This is *only* supported for preventing
    * misconfiguration, not for defending against malicious attacks.
    *
    * The MD5 key, if set, must be of non-zero length and consist only of the following types of
    * character:
    *
    * * ASCII alphanumerics: `[a-zA-Z0-9]`
    * * Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= \|`
    *
    * In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),
    * quotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed
    * (0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of
    * these disallowed characters will be rejected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#md5_key MagicWanGreTunnel#md5_key}
    */
    readonly md5Key?: string;
}
export declare function magicWanGreTunnelBgpToTerraform(struct?: MagicWanGreTunnelBgp | cdktf.IResolvable): any;
export declare function magicWanGreTunnelBgpToHclTerraform(struct?: MagicWanGreTunnelBgp | cdktf.IResolvable): any;
export declare class MagicWanGreTunnelBgpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanGreTunnelBgp | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanGreTunnelBgp | cdktf.IResolvable | undefined);
    private _customerAsn?;
    get customerAsn(): number;
    set customerAsn(value: number);
    get customerAsnInput(): number;
    private _extraPrefixes?;
    get extraPrefixes(): string[];
    set extraPrefixes(value: string[]);
    resetExtraPrefixes(): void;
    get extraPrefixesInput(): string[];
    private _md5Key?;
    get md5Key(): string;
    set md5Key(value: string);
    resetMd5Key(): void;
    get md5KeyInput(): string;
}
export interface MagicWanGreTunnelBgpStatus {
}
export declare function magicWanGreTunnelBgpStatusToTerraform(struct?: MagicWanGreTunnelBgpStatus): any;
export declare function magicWanGreTunnelBgpStatusToHclTerraform(struct?: MagicWanGreTunnelBgpStatus): any;
export declare class MagicWanGreTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanGreTunnelBgpStatus | undefined;
    set internalValue(value: MagicWanGreTunnelBgpStatus | undefined);
    get bgpState(): any;
    get cfSpeakerIp(): any;
    get cfSpeakerPort(): any;
    get customerSpeakerIp(): any;
    get customerSpeakerPort(): any;
    get state(): any;
    get tcpEstablished(): any;
    get updatedAt(): any;
}
export interface MagicWanGreTunnelHealthCheckTarget {
    /**
    * The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}
    */
    readonly saved?: string;
}
export declare function magicWanGreTunnelHealthCheckTargetToTerraform(struct?: MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable): any;
export declare function magicWanGreTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable): any;
export declare class MagicWanGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanGreTunnelHealthCheckTarget | cdktf.IResolvable | undefined);
    get effective(): any;
    private _saved?;
    get saved(): string;
    set saved(value: string);
    resetSaved(): void;
    get savedInput(): string;
}
export interface MagicWanGreTunnelHealthCheck {
    /**
    * The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
    * Available values: "unidirectional", "bidirectional".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}
    */
    readonly direction?: string;
    /**
    * Determines whether to run healthchecks for a tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * How frequent the health check is run. The default value is `mid`.
    * Available values: "low", "mid", "high".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}
    */
    readonly rate?: string;
    /**
    * The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}
    */
    readonly target?: MagicWanGreTunnelHealthCheckTarget;
    /**
    * The type of healthcheck to run, reply or request. The default value is `reply`.
    * Available values: "reply", "request".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}
    */
    readonly type?: string;
}
export declare function magicWanGreTunnelHealthCheckToTerraform(struct?: MagicWanGreTunnelHealthCheck | cdktf.IResolvable): any;
export declare function magicWanGreTunnelHealthCheckToHclTerraform(struct?: MagicWanGreTunnelHealthCheck | cdktf.IResolvable): any;
export declare class MagicWanGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanGreTunnelHealthCheck | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanGreTunnelHealthCheck | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _rate?;
    get rate(): string;
    set rate(value: string);
    resetRate(): void;
    get rateInput(): string;
    private _target;
    get target(): MagicWanGreTunnelHealthCheckTargetOutputReference;
    putTarget(value: MagicWanGreTunnelHealthCheckTarget): void;
    resetTarget(): void;
    get targetInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
export declare class MagicWanGreTunnel extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_wan_gre_tunnel";
    /**
    * Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanGreTunnel to import
    * @param importFromId The id of the existing MagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanGreTunnel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanGreTunnelConfig
    */
    constructor(scope: Construct, id: string, config: MagicWanGreTunnelConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _automaticReturnRouting?;
    get automaticReturnRouting(): boolean | cdktf.IResolvable;
    set automaticReturnRouting(value: boolean | cdktf.IResolvable);
    resetAutomaticReturnRouting(): void;
    get automaticReturnRoutingInput(): any;
    private _bgp;
    get bgp(): MagicWanGreTunnelBgpOutputReference;
    putBgp(value: MagicWanGreTunnelBgp): void;
    resetBgp(): void;
    get bgpInput(): any;
    private _bgpStatus;
    get bgpStatus(): MagicWanGreTunnelBgpStatusOutputReference;
    private _cloudflareGreEndpoint?;
    get cloudflareGreEndpoint(): string;
    set cloudflareGreEndpoint(value: string);
    get cloudflareGreEndpointInput(): string;
    get createdOn(): any;
    private _customerGreEndpoint?;
    get customerGreEndpoint(): string;
    set customerGreEndpoint(value: string);
    get customerGreEndpointInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _healthCheck;
    get healthCheck(): MagicWanGreTunnelHealthCheckOutputReference;
    putHealthCheck(value: MagicWanGreTunnelHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): any;
    get id(): any;
    private _interfaceAddress?;
    get interfaceAddress(): string;
    set interfaceAddress(value: string);
    get interfaceAddressInput(): string;
    private _interfaceAddress6?;
    get interfaceAddress6(): string;
    set interfaceAddress6(value: string);
    resetInterfaceAddress6(): void;
    get interfaceAddress6Input(): string;
    get modifiedOn(): any;
    private _mtu?;
    get mtu(): number;
    set mtu(value: number);
    resetMtu(): void;
    get mtuInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
