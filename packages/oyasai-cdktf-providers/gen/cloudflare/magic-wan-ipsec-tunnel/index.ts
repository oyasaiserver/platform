// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicWanIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}
  */
  readonly accountId: string;
  /**
  * True if automatic stateful return routing should be enabled for a tunnel, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#automatic_return_routing MagicWanIpsecTunnel#automatic_return_routing}
  */
  readonly automaticReturnRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}
  */
  readonly bgp?: MagicWanIpsecTunnelBgp;
  /**
  * The IP address assigned to the Cloudflare side of the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}
  */
  readonly cloudflareEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}
  */
  readonly customRemoteIdentities?: MagicWanIpsecTunnelCustomRemoteIdentities;
  /**
  * The IP address assigned to the customer side of the IPsec tunnel. Not required, but must be set for proactive traceroutes to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}
  */
  readonly customerEndpoint?: string;
  /**
  * An optional description forthe IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}
  */
  readonly healthCheck?: MagicWanIpsecTunnelHealthCheck;
  /**
  * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}
  */
  readonly interfaceAddress: string;
  /**
  * A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#interface_address6 MagicWanIpsecTunnel#interface_address6}
  */
  readonly interfaceAddress6?: string;
  /**
  * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}
  */
  readonly name: string;
  /**
  * A randomly generated or provided string for use in the IPsec tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}
  */
  readonly psk?: string;
  /**
  * If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}
  */
  readonly replayProtection?: boolean | cdktf.IResolvable;
}
export interface MagicWanIpsecTunnelBgp {
  /**
  * ASN used on the customer end of the BGP session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#customer_asn MagicWanIpsecTunnel#customer_asn}
  */
  readonly customerAsn: number;
  /**
  * Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#extra_prefixes MagicWanIpsecTunnel#extra_prefixes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#md5_key MagicWanIpsecTunnel#md5_key}
  */
  readonly md5Key?: string;
}

export function magicWanIpsecTunnelBgpToTerraform(struct?: MagicWanIpsecTunnelBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    extra_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraPrefixes),
    md5_key: cdktf.stringToTerraform(struct!.md5Key),
  }
}


export function magicWanIpsecTunnelBgpToHclTerraform(struct?: MagicWanIpsecTunnelBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    md5_key: {
      value: cdktf.stringToHclTerraform(struct!.md5Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanIpsecTunnelBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._extraPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraPrefixes = this._extraPrefixes;
    }
    if (this._md5Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Key = this._md5Key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerAsn = undefined;
      this._extraPrefixes = undefined;
      this._md5Key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerAsn = value.customerAsn;
      this._extraPrefixes = value.extraPrefixes;
      this._md5Key = value.md5Key;
    }
  }

  // customer_asn - computed: false, optional: false, required: true
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // extra_prefixes - computed: true, optional: true, required: false
  private _extraPrefixes?: string[]; 
  public get extraPrefixes() {
    return this.getListAttribute('extra_prefixes');
  }
  public set extraPrefixes(value: string[]) {
    this._extraPrefixes = value;
  }
  public resetExtraPrefixes() {
    this._extraPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPrefixesInput() {
    return this._extraPrefixes;
  }

  // md5_key - computed: false, optional: true, required: false
  private _md5Key?: string; 
  public get md5Key() {
    return this.getStringAttribute('md5_key');
  }
  public set md5Key(value: string) {
    this._md5Key = value;
  }
  public resetMd5Key() {
    this._md5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeyInput() {
    return this._md5Key;
  }
}
export interface MagicWanIpsecTunnelBgpStatus {
}

export function magicWanIpsecTunnelBgpStatusToTerraform(struct?: MagicWanIpsecTunnelBgpStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanIpsecTunnelBgpStatusToHclTerraform(struct?: MagicWanIpsecTunnelBgpStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanIpsecTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelBgpStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelBgpStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_state - computed: true, optional: false, required: false
  public get bgpState() {
    return this.getStringAttribute('bgp_state');
  }

  // cf_speaker_ip - computed: true, optional: false, required: false
  public get cfSpeakerIp() {
    return this.getStringAttribute('cf_speaker_ip');
  }

  // cf_speaker_port - computed: true, optional: false, required: false
  public get cfSpeakerPort() {
    return this.getNumberAttribute('cf_speaker_port');
  }

  // customer_speaker_ip - computed: true, optional: false, required: false
  public get customerSpeakerIp() {
    return this.getStringAttribute('customer_speaker_ip');
  }

  // customer_speaker_port - computed: true, optional: false, required: false
  public get customerSpeakerPort() {
    return this.getNumberAttribute('customer_speaker_port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tcp_established - computed: true, optional: false, required: false
  public get tcpEstablished() {
    return this.getBooleanAttribute('tcp_established');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}
  */
  readonly fqdnId?: string;
}

export function magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(struct?: MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_id: cdktf.stringToTerraform(struct!.fqdnId),
  }
}


export function magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct?: MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_id: {
      value: cdktf.stringToHclTerraform(struct!.fqdnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnId = this._fqdnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelCustomRemoteIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdnId = value.fqdnId;
    }
  }

  // fqdn_id - computed: false, optional: true, required: false
  private _fqdnId?: string; 
  public get fqdnId() {
    return this.getStringAttribute('fqdn_id');
  }
  public set fqdnId(value: string) {
    this._fqdnId = value;
  }
  public resetFqdnId() {
    this._fqdnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnIdInput() {
    return this._fqdnId;
  }
}
export interface MagicWanIpsecTunnelHealthCheckTarget {
  /**
  * The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}
  */
  readonly saved?: string;
}

export function magicWanIpsecTunnelHealthCheckTargetToTerraform(struct?: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saved: cdktf.stringToTerraform(struct!.saved),
  }
}


export function magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct?: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saved: {
      value: cdktf.stringToHclTerraform(struct!.saved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saved !== undefined) {
      hasAnyValues = true;
      internalValueResult.saved = this._saved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelHealthCheckTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saved = value.saved;
    }
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getStringAttribute('effective');
  }

  // saved - computed: true, optional: true, required: false
  private _saved?: string; 
  public get saved() {
    return this.getStringAttribute('saved');
  }
  public set saved(value: string) {
    this._saved = value;
  }
  public resetSaved() {
    this._saved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedInput() {
    return this._saved;
  }
}
export interface MagicWanIpsecTunnelHealthCheck {
  /**
  * The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
  * Available values: "unidirectional", "bidirectional".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}
  */
  readonly direction?: string;
  /**
  * Determines whether to run healthchecks for a tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How frequent the health check is run. The default value is `mid`.
  * Available values: "low", "mid", "high".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}
  */
  readonly rate?: string;
  /**
  * The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}
  */
  readonly target?: MagicWanIpsecTunnelHealthCheckTarget;
  /**
  * The type of healthcheck to run, reply or request. The default value is `reply`.
  * Available values: "reply", "request".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}
  */
  readonly type?: string;
}

export function magicWanIpsecTunnelHealthCheckToTerraform(struct?: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rate: cdktf.stringToTerraform(struct!.rate),
    target: magicWanIpsecTunnelHealthCheckTargetToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function magicWanIpsecTunnelHealthCheckToHclTerraform(struct?: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicWanIpsecTunnelHealthCheckTarget",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicWanIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._enabled = undefined;
      this._rate = undefined;
      this._target.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._enabled = value.enabled;
      this._rate = value.rate;
      this._target.internalValue = value.target;
      this._type = value.type;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rate - computed: true, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // target - computed: true, optional: true, required: false
  private _target = new MagicWanIpsecTunnelHealthCheckTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: MagicWanIpsecTunnelHealthCheckTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MagicWanIpsecTunnelPskMetadata {
}

export function magicWanIpsecTunnelPskMetadataToTerraform(struct?: MagicWanIpsecTunnelPskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicWanIpsecTunnelPskMetadataToHclTerraform(struct?: MagicWanIpsecTunnelPskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicWanIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicWanIpsecTunnelPskMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicWanIpsecTunnelPskMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_generated_on - computed: true, optional: false, required: false
  public get lastGeneratedOn() {
    return this.getStringAttribute('last_generated_on');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export class MagicWanIpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicWanIpsecTunnel to import
  * @param importFromId The id of the existing MagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicWanIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicWanIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: MagicWanIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_wan_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._automaticReturnRouting = config.automaticReturnRouting;
    this._bgp.internalValue = config.bgp;
    this._cloudflareEndpoint = config.cloudflareEndpoint;
    this._customRemoteIdentities.internalValue = config.customRemoteIdentities;
    this._customerEndpoint = config.customerEndpoint;
    this._description = config.description;
    this._healthCheck.internalValue = config.healthCheck;
    this._interfaceAddress = config.interfaceAddress;
    this._interfaceAddress6 = config.interfaceAddress6;
    this._name = config.name;
    this._psk = config.psk;
    this._replayProtection = config.replayProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allow_null_cipher - computed: true, optional: false, required: false
  public get allowNullCipher() {
    return this.getBooleanAttribute('allow_null_cipher');
  }

  // automatic_return_routing - computed: true, optional: true, required: false
  private _automaticReturnRouting?: boolean | cdktf.IResolvable; 
  public get automaticReturnRouting() {
    return this.getBooleanAttribute('automatic_return_routing');
  }
  public set automaticReturnRouting(value: boolean | cdktf.IResolvable) {
    this._automaticReturnRouting = value;
  }
  public resetAutomaticReturnRouting() {
    this._automaticReturnRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticReturnRoutingInput() {
    return this._automaticReturnRouting;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new MagicWanIpsecTunnelBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: MagicWanIpsecTunnelBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // bgp_status - computed: true, optional: false, required: false
  private _bgpStatus = new MagicWanIpsecTunnelBgpStatusOutputReference(this, "bgp_status");
  public get bgpStatus() {
    return this._bgpStatus;
  }

  // cloudflare_endpoint - computed: false, optional: false, required: true
  private _cloudflareEndpoint?: string; 
  public get cloudflareEndpoint() {
    return this.getStringAttribute('cloudflare_endpoint');
  }
  public set cloudflareEndpoint(value: string) {
    this._cloudflareEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareEndpointInput() {
    return this._cloudflareEndpoint;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // custom_remote_identities - computed: false, optional: true, required: false
  private _customRemoteIdentities = new MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(this, "custom_remote_identities");
  public get customRemoteIdentities() {
    return this._customRemoteIdentities;
  }
  public putCustomRemoteIdentities(value: MagicWanIpsecTunnelCustomRemoteIdentities) {
    this._customRemoteIdentities.internalValue = value;
  }
  public resetCustomRemoteIdentities() {
    this._customRemoteIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRemoteIdentitiesInput() {
    return this._customRemoteIdentities.internalValue;
  }

  // customer_endpoint - computed: false, optional: true, required: false
  private _customerEndpoint?: string; 
  public get customerEndpoint() {
    return this.getStringAttribute('customer_endpoint');
  }
  public set customerEndpoint(value: string) {
    this._customerEndpoint = value;
  }
  public resetCustomerEndpoint() {
    this._customerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEndpointInput() {
    return this._customerEndpoint;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck = new MagicWanIpsecTunnelHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: MagicWanIpsecTunnelHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_address - computed: false, optional: false, required: true
  private _interfaceAddress?: string; 
  public get interfaceAddress() {
    return this.getStringAttribute('interface_address');
  }
  public set interfaceAddress(value: string) {
    this._interfaceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAddressInput() {
    return this._interfaceAddress;
  }

  // interface_address6 - computed: false, optional: true, required: false
  private _interfaceAddress6?: string; 
  public get interfaceAddress6() {
    return this.getStringAttribute('interface_address6');
  }
  public set interfaceAddress6(value: string) {
    this._interfaceAddress6 = value;
  }
  public resetInterfaceAddress6() {
    this._interfaceAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAddress6Input() {
    return this._interfaceAddress6;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // psk_metadata - computed: true, optional: false, required: false
  private _pskMetadata = new MagicWanIpsecTunnelPskMetadataOutputReference(this, "psk_metadata");
  public get pskMetadata() {
    return this._pskMetadata;
  }

  // replay_protection - computed: true, optional: true, required: false
  private _replayProtection?: boolean | cdktf.IResolvable; 
  public get replayProtection() {
    return this.getBooleanAttribute('replay_protection');
  }
  public set replayProtection(value: boolean | cdktf.IResolvable) {
    this._replayProtection = value;
  }
  public resetReplayProtection() {
    this._replayProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayProtectionInput() {
    return this._replayProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      automatic_return_routing: cdktf.booleanToTerraform(this._automaticReturnRouting),
      bgp: magicWanIpsecTunnelBgpToTerraform(this._bgp.internalValue),
      cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
      custom_remote_identities: magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(this._customRemoteIdentities.internalValue),
      customer_endpoint: cdktf.stringToTerraform(this._customerEndpoint),
      description: cdktf.stringToTerraform(this._description),
      health_check: magicWanIpsecTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
      interface_address: cdktf.stringToTerraform(this._interfaceAddress),
      interface_address6: cdktf.stringToTerraform(this._interfaceAddress6),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      replay_protection: cdktf.booleanToTerraform(this._replayProtection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_return_routing: {
        value: cdktf.booleanToHclTerraform(this._automaticReturnRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp: {
        value: magicWanIpsecTunnelBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanIpsecTunnelBgp",
      },
      cloudflare_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudflareEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_remote_identities: {
        value: magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(this._customRemoteIdentities.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanIpsecTunnelCustomRemoteIdentities",
      },
      customer_endpoint: {
        value: cdktf.stringToHclTerraform(this._customerEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: magicWanIpsecTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicWanIpsecTunnelHealthCheck",
      },
      interface_address: {
        value: cdktf.stringToHclTerraform(this._interfaceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_address6: {
        value: cdktf.stringToHclTerraform(this._interfaceAddress6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_protection: {
        value: cdktf.booleanToHclTerraform(this._replayProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
