import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicWanIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}
    */
    readonly accountId: string;
    /**
    * True if automatic stateful return routing should be enabled for a tunnel, false otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#automatic_return_routing MagicWanIpsecTunnel#automatic_return_routing}
    */
    readonly automaticReturnRouting?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}
    */
    readonly bgp?: MagicWanIpsecTunnelBgp;
    /**
    * The IP address assigned to the Cloudflare side of the IPsec tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}
    */
    readonly cloudflareEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}
    */
    readonly customRemoteIdentities?: MagicWanIpsecTunnelCustomRemoteIdentities;
    /**
    * The IP address assigned to the customer side of the IPsec tunnel. Not required, but must be set for proactive traceroutes to work.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}
    */
    readonly customerEndpoint?: string;
    /**
    * An optional description forthe IPsec tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}
    */
    readonly healthCheck?: MagicWanIpsecTunnelHealthCheck;
    /**
    * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}
    */
    readonly interfaceAddress: string;
    /**
    * A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#interface_address6 MagicWanIpsecTunnel#interface_address6}
    */
    readonly interfaceAddress6?: string;
    /**
    * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}
    */
    readonly name: string;
    /**
    * A randomly generated or provided string for use in the IPsec tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}
    */
    readonly psk?: string;
    /**
    * If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}
    */
    readonly replayProtection?: boolean | cdktf.IResolvable;
}
export interface MagicWanIpsecTunnelBgp {
    /**
    * ASN used on the customer end of the BGP session
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#customer_asn MagicWanIpsecTunnel#customer_asn}
    */
    readonly customerAsn: number;
    /**
    * Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#extra_prefixes MagicWanIpsecTunnel#extra_prefixes}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#md5_key MagicWanIpsecTunnel#md5_key}
    */
    readonly md5Key?: string;
}
export declare function magicWanIpsecTunnelBgpToTerraform(struct?: MagicWanIpsecTunnelBgp | cdktf.IResolvable): any;
export declare function magicWanIpsecTunnelBgpToHclTerraform(struct?: MagicWanIpsecTunnelBgp | cdktf.IResolvable): any;
export declare class MagicWanIpsecTunnelBgpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanIpsecTunnelBgp | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanIpsecTunnelBgp | cdktf.IResolvable | undefined);
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
export interface MagicWanIpsecTunnelBgpStatus {
}
export declare function magicWanIpsecTunnelBgpStatusToTerraform(struct?: MagicWanIpsecTunnelBgpStatus): any;
export declare function magicWanIpsecTunnelBgpStatusToHclTerraform(struct?: MagicWanIpsecTunnelBgpStatus): any;
export declare class MagicWanIpsecTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanIpsecTunnelBgpStatus | undefined;
    set internalValue(value: MagicWanIpsecTunnelBgpStatus | undefined);
    get bgpState(): any;
    get cfSpeakerIp(): any;
    get cfSpeakerPort(): any;
    get customerSpeakerIp(): any;
    get customerSpeakerPort(): any;
    get state(): any;
    get tcpEstablished(): any;
    get updatedAt(): any;
}
export interface MagicWanIpsecTunnelCustomRemoteIdentities {
    /**
    * A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel. The
    * generated IKE IDs can still be used even if this custom value is specified.
    *
    * Must be of the form `<custom label>.<account ID>.custom.ipsec.cloudflare.com`.
    *
    * This custom ID does not need to be unique. Two IPsec tunnels may have the same custom
    * fqdn_id. However, if another IPsec tunnel has the same value then the two tunnels
    * cannot have the same cloudflare_endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}
    */
    readonly fqdnId?: string;
}
export declare function magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(struct?: MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable): any;
export declare function magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct?: MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable): any;
export declare class MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable | undefined);
    private _fqdnId?;
    get fqdnId(): string;
    set fqdnId(value: string);
    resetFqdnId(): void;
    get fqdnIdInput(): string;
}
export interface MagicWanIpsecTunnelHealthCheckTarget {
    /**
    * The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}
    */
    readonly saved?: string;
}
export declare function magicWanIpsecTunnelHealthCheckTargetToTerraform(struct?: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable): any;
export declare function magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable): any;
export declare class MagicWanIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable | undefined);
    get effective(): any;
    private _saved?;
    get saved(): string;
    set saved(value: string);
    resetSaved(): void;
    get savedInput(): string;
}
export interface MagicWanIpsecTunnelHealthCheck {
    /**
    * The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
    * Available values: "unidirectional", "bidirectional".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}
    */
    readonly direction?: string;
    /**
    * Determines whether to run healthchecks for a tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * How frequent the health check is run. The default value is `mid`.
    * Available values: "low", "mid", "high".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}
    */
    readonly rate?: string;
    /**
    * The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}
    */
    readonly target?: MagicWanIpsecTunnelHealthCheckTarget;
    /**
    * The type of healthcheck to run, reply or request. The default value is `reply`.
    * Available values: "reply", "request".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}
    */
    readonly type?: string;
}
export declare function magicWanIpsecTunnelHealthCheckToTerraform(struct?: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable): any;
export declare function magicWanIpsecTunnelHealthCheckToHclTerraform(struct?: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable): any;
export declare class MagicWanIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable | undefined);
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
    get target(): MagicWanIpsecTunnelHealthCheckTargetOutputReference;
    putTarget(value: MagicWanIpsecTunnelHealthCheckTarget): void;
    resetTarget(): void;
    get targetInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface MagicWanIpsecTunnelPskMetadata {
}
export declare function magicWanIpsecTunnelPskMetadataToTerraform(struct?: MagicWanIpsecTunnelPskMetadata): any;
export declare function magicWanIpsecTunnelPskMetadataToHclTerraform(struct?: MagicWanIpsecTunnelPskMetadata): any;
export declare class MagicWanIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanIpsecTunnelPskMetadata | undefined;
    set internalValue(value: MagicWanIpsecTunnelPskMetadata | undefined);
    get lastGeneratedOn(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export declare class MagicWanIpsecTunnel extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";
    /**
    * Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanIpsecTunnel to import
    * @param importFromId The id of the existing MagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanIpsecTunnel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanIpsecTunnelConfig
    */
    constructor(scope: Construct, id: string, config: MagicWanIpsecTunnelConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get allowNullCipher(): any;
    private _automaticReturnRouting?;
    get automaticReturnRouting(): boolean | cdktf.IResolvable;
    set automaticReturnRouting(value: boolean | cdktf.IResolvable);
    resetAutomaticReturnRouting(): void;
    get automaticReturnRoutingInput(): any;
    private _bgp;
    get bgp(): MagicWanIpsecTunnelBgpOutputReference;
    putBgp(value: MagicWanIpsecTunnelBgp): void;
    resetBgp(): void;
    get bgpInput(): any;
    private _bgpStatus;
    get bgpStatus(): MagicWanIpsecTunnelBgpStatusOutputReference;
    private _cloudflareEndpoint?;
    get cloudflareEndpoint(): string;
    set cloudflareEndpoint(value: string);
    get cloudflareEndpointInput(): string;
    get createdOn(): any;
    private _customRemoteIdentities;
    get customRemoteIdentities(): MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference;
    putCustomRemoteIdentities(value: MagicWanIpsecTunnelCustomRemoteIdentities): void;
    resetCustomRemoteIdentities(): void;
    get customRemoteIdentitiesInput(): any;
    private _customerEndpoint?;
    get customerEndpoint(): string;
    set customerEndpoint(value: string);
    resetCustomerEndpoint(): void;
    get customerEndpointInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _healthCheck;
    get healthCheck(): MagicWanIpsecTunnelHealthCheckOutputReference;
    putHealthCheck(value: MagicWanIpsecTunnelHealthCheck): void;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _psk?;
    get psk(): string;
    set psk(value: string);
    resetPsk(): void;
    get pskInput(): string;
    private _pskMetadata;
    get pskMetadata(): MagicWanIpsecTunnelPskMetadataOutputReference;
    private _replayProtection?;
    get replayProtection(): boolean | cdktf.IResolvable;
    set replayProtection(value: boolean | cdktf.IResolvable);
    resetReplayProtection(): void;
    get replayProtectionInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
