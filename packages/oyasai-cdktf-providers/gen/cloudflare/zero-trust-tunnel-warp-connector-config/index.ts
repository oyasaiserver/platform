// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustTunnelWarpConnectorConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#account_id ZeroTrustTunnelWarpConnectorConfigA#account_id}
  */
  readonly accountId: string;
  /**
  * Provider-specific configuration. Required shape depends on ha_mode. For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#config ZeroTrustTunnelWarpConnectorConfigA#config}
  */
  readonly config?: ZeroTrustTunnelWarpConnectorConfigConfig;
  /**
  * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
  * Available values: "none", "disabled", "aws", "local".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#ha_mode ZeroTrustTunnelWarpConnectorConfigA#ha_mode}
  */
  readonly haMode: string;
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#tunnel_id ZeroTrustTunnelWarpConnectorConfigA#tunnel_id}
  */
  readonly tunnelId: string;
}
export interface ZeroTrustTunnelWarpConnectorConfigConfigVips {
  /**
  * Virtual IP address (IPv4 or IPv6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}
  */
  readonly address: string;
}

export function zeroTrustTunnelWarpConnectorConfigConfigVipsToTerraform(struct?: ZeroTrustTunnelWarpConnectorConfigConfigVips | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function zeroTrustTunnelWarpConnectorConfigConfigVipsToHclTerraform(struct?: ZeroTrustTunnelWarpConnectorConfigConfigVips | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustTunnelWarpConnectorConfigConfigVips | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelWarpConnectorConfigConfigVips | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class ZeroTrustTunnelWarpConnectorConfigConfigVipsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustTunnelWarpConnectorConfigConfigVips[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference {
    return new ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious {
  /**
  * Virtual IP address (IPv4 or IPv6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}
  */
  readonly address: string;
}

export function zeroTrustTunnelWarpConnectorConfigConfigVipsPreviousToTerraform(struct?: ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function zeroTrustTunnelWarpConnectorConfigConfigVipsPreviousToHclTerraform(struct?: ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference {
    return new ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustTunnelWarpConnectorConfigConfig {
  /**
  * Floating Network Resource ID — the secondary ENI that is moved between nodes on failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#fnr_id ZeroTrustTunnelWarpConnectorConfigA#fnr_id}
  */
  readonly fnrId?: string;
  /**
  * VIPs to assign on the CloudflareWARP interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#vips ZeroTrustTunnelWarpConnectorConfigA#vips}
  */
  readonly vips?: ZeroTrustTunnelWarpConnectorConfigConfigVips[] | cdktf.IResolvable;
  /**
  * VIPs to clean up on demotion or version drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#vips_previous ZeroTrustTunnelWarpConnectorConfigA#vips_previous}
  */
  readonly vipsPrevious?: ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] | cdktf.IResolvable;
}

export function zeroTrustTunnelWarpConnectorConfigConfigToTerraform(struct?: ZeroTrustTunnelWarpConnectorConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fnr_id: cdktf.stringToTerraform(struct!.fnrId),
    vips: cdktf.listMapper(zeroTrustTunnelWarpConnectorConfigConfigVipsToTerraform, false)(struct!.vips),
    vips_previous: cdktf.listMapper(zeroTrustTunnelWarpConnectorConfigConfigVipsPreviousToTerraform, false)(struct!.vipsPrevious),
  }
}


export function zeroTrustTunnelWarpConnectorConfigConfigToHclTerraform(struct?: ZeroTrustTunnelWarpConnectorConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fnr_id: {
      value: cdktf.stringToHclTerraform(struct!.fnrId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vips: {
      value: cdktf.listMapperHcl(zeroTrustTunnelWarpConnectorConfigConfigVipsToHclTerraform, false)(struct!.vips),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustTunnelWarpConnectorConfigConfigVipsList",
    },
    vips_previous: {
      value: cdktf.listMapperHcl(zeroTrustTunnelWarpConnectorConfigConfigVipsPreviousToHclTerraform, false)(struct!.vipsPrevious),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelWarpConnectorConfigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelWarpConnectorConfigConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fnrId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnrId = this._fnrId;
    }
    if (this._vips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vips = this._vips?.internalValue;
    }
    if (this._vipsPrevious?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipsPrevious = this._vipsPrevious?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelWarpConnectorConfigConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fnrId = undefined;
      this._vips.internalValue = undefined;
      this._vipsPrevious.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fnrId = value.fnrId;
      this._vips.internalValue = value.vips;
      this._vipsPrevious.internalValue = value.vipsPrevious;
    }
  }

  // fnr_id - computed: false, optional: true, required: false
  private _fnrId?: string; 
  public get fnrId() {
    return this.getStringAttribute('fnr_id');
  }
  public set fnrId(value: string) {
    this._fnrId = value;
  }
  public resetFnrId() {
    this._fnrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnrIdInput() {
    return this._fnrId;
  }

  // vips - computed: false, optional: true, required: false
  private _vips = new ZeroTrustTunnelWarpConnectorConfigConfigVipsList(this, "vips", false);
  public get vips() {
    return this._vips;
  }
  public putVips(value: ZeroTrustTunnelWarpConnectorConfigConfigVips[] | cdktf.IResolvable) {
    this._vips.internalValue = value;
  }
  public resetVips() {
    this._vips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipsInput() {
    return this._vips.internalValue;
  }

  // vips_previous - computed: false, optional: true, required: false
  private _vipsPrevious = new ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(this, "vips_previous", false);
  public get vipsPrevious() {
    return this._vipsPrevious;
  }
  public putVipsPrevious(value: ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] | cdktf.IResolvable) {
    this._vipsPrevious.internalValue = value;
  }
  public resetVipsPrevious() {
    this._vipsPrevious.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipsPreviousInput() {
    return this._vipsPrevious.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}
*/
export class ZeroTrustTunnelWarpConnectorConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_warp_connector_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustTunnelWarpConnectorConfigA to import
  * @param importFromId The id of the existing ZeroTrustTunnelWarpConnectorConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustTunnelWarpConnectorConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_warp_connector_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustTunnelWarpConnectorConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustTunnelWarpConnectorConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_warp_connector_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
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
    this._config.internalValue = config.config;
    this._haMode = config.haMode;
    this._tunnelId = config.tunnelId;
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

  // config - computed: false, optional: true, required: false
  private _config = new ZeroTrustTunnelWarpConnectorConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ZeroTrustTunnelWarpConnectorConfigConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // configuration_version - computed: true, optional: false, required: false
  public get configurationVersion() {
    return this.getNumberAttribute('configuration_version');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ha_mode - computed: false, optional: false, required: true
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      config: zeroTrustTunnelWarpConnectorConfigConfigToTerraform(this._config.internalValue),
      ha_mode: cdktf.stringToTerraform(this._haMode),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
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
      config: {
        value: zeroTrustTunnelWarpConnectorConfigConfigToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustTunnelWarpConnectorConfigConfig",
      },
      ha_mode: {
        value: cdktf.stringToHclTerraform(this._haMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
