// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MoqRelayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#account_id MoqRelay#account_id}
  */
  readonly accountId: string;
  /**
  * upstreams and lingering_subscribe are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#config MoqRelay#config}
  */
  readonly config?: MoqRelayConfigA;
  /**
  * Human-readable name for the relay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#name MoqRelay#name}
  */
  readonly name: string;
}
export interface MoqRelayConfigLingeringSubscribe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#max_timeout_ms MoqRelay#max_timeout_ms}
  */
  readonly maxTimeoutMs?: number;
}

export function moqRelayConfigLingeringSubscribeToTerraform(struct?: MoqRelayConfigLingeringSubscribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_timeout_ms: cdktf.numberToTerraform(struct!.maxTimeoutMs),
  }
}


export function moqRelayConfigLingeringSubscribeToHclTerraform(struct?: MoqRelayConfigLingeringSubscribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MoqRelayConfigLingeringSubscribeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MoqRelayConfigLingeringSubscribe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeoutMs = this._maxTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MoqRelayConfigLingeringSubscribe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxTimeoutMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxTimeoutMs = value.maxTimeoutMs;
    }
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

  // max_timeout_ms - computed: true, optional: true, required: false
  private _maxTimeoutMs?: number; 
  public get maxTimeoutMs() {
    return this.getNumberAttribute('max_timeout_ms');
  }
  public set maxTimeoutMs(value: number) {
    this._maxTimeoutMs = value;
  }
  public resetMaxTimeoutMs() {
    this._maxTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutMsInput() {
    return this._maxTimeoutMs;
  }
}
export interface MoqRelayConfigUpstreamsUpstreams {
  /**
  * Upstream MOQT server publisher URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#url MoqRelay#url}
  */
  readonly url?: string;
}

export function moqRelayConfigUpstreamsUpstreamsToTerraform(struct?: MoqRelayConfigUpstreamsUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function moqRelayConfigUpstreamsUpstreamsToHclTerraform(struct?: MoqRelayConfigUpstreamsUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MoqRelayConfigUpstreamsUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MoqRelayConfigUpstreamsUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MoqRelayConfigUpstreamsUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MoqRelayConfigUpstreamsUpstreamsList extends cdktf.ComplexList {
  public internalValue? : MoqRelayConfigUpstreamsUpstreams[] | cdktf.IResolvable

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
  public get(index: number): MoqRelayConfigUpstreamsUpstreamsOutputReference {
    return new MoqRelayConfigUpstreamsUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MoqRelayConfigUpstreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Ordered list of upstream MOQT server publishers. Each entry is an
  * object (not a bare string) so per-upstream configuration can be
  * added in the future without another breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}
  */
  readonly upstreams?: MoqRelayConfigUpstreamsUpstreams[] | cdktf.IResolvable;
}

export function moqRelayConfigUpstreamsToTerraform(struct?: MoqRelayConfigUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    upstreams: cdktf.listMapper(moqRelayConfigUpstreamsUpstreamsToTerraform, false)(struct!.upstreams),
  }
}


export function moqRelayConfigUpstreamsToHclTerraform(struct?: MoqRelayConfigUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upstreams: {
      value: cdktf.listMapperHcl(moqRelayConfigUpstreamsUpstreamsToHclTerraform, false)(struct!.upstreams),
      isBlock: true,
      type: "list",
      storageClassType: "MoqRelayConfigUpstreamsUpstreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MoqRelayConfigUpstreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MoqRelayConfigUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._upstreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreams = this._upstreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MoqRelayConfigUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._upstreams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._upstreams.internalValue = value.upstreams;
    }
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

  // upstreams - computed: true, optional: true, required: false
  private _upstreams = new MoqRelayConfigUpstreamsUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: MoqRelayConfigUpstreamsUpstreams[] | cdktf.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }
}
export interface MoqRelayConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}
  */
  readonly lingeringSubscribe?: MoqRelayConfigLingeringSubscribe;
  /**
  * Upstreams are external MOQT server publishers that a relay falls back
  * to when it has no local publisher for a requested namespace/track.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}
  */
  readonly upstreams?: MoqRelayConfigUpstreams;
}

export function moqRelayConfigAToTerraform(struct?: MoqRelayConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lingering_subscribe: moqRelayConfigLingeringSubscribeToTerraform(struct!.lingeringSubscribe),
    upstreams: moqRelayConfigUpstreamsToTerraform(struct!.upstreams),
  }
}


export function moqRelayConfigAToHclTerraform(struct?: MoqRelayConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lingering_subscribe: {
      value: moqRelayConfigLingeringSubscribeToHclTerraform(struct!.lingeringSubscribe),
      isBlock: true,
      type: "struct",
      storageClassType: "MoqRelayConfigLingeringSubscribe",
    },
    upstreams: {
      value: moqRelayConfigUpstreamsToHclTerraform(struct!.upstreams),
      isBlock: true,
      type: "struct",
      storageClassType: "MoqRelayConfigUpstreams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MoqRelayConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MoqRelayConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lingeringSubscribe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lingeringSubscribe = this._lingeringSubscribe?.internalValue;
    }
    if (this._upstreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreams = this._upstreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MoqRelayConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lingeringSubscribe.internalValue = undefined;
      this._upstreams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lingeringSubscribe.internalValue = value.lingeringSubscribe;
      this._upstreams.internalValue = value.upstreams;
    }
  }

  // lingering_subscribe - computed: true, optional: true, required: false
  private _lingeringSubscribe = new MoqRelayConfigLingeringSubscribeOutputReference(this, "lingering_subscribe");
  public get lingeringSubscribe() {
    return this._lingeringSubscribe;
  }
  public putLingeringSubscribe(value: MoqRelayConfigLingeringSubscribe) {
    this._lingeringSubscribe.internalValue = value;
  }
  public resetLingeringSubscribe() {
    this._lingeringSubscribe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lingeringSubscribeInput() {
    return this._lingeringSubscribe.internalValue;
  }

  // upstreams - computed: true, optional: true, required: false
  private _upstreams = new MoqRelayConfigUpstreamsOutputReference(this, "upstreams");
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: MoqRelayConfigUpstreams) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay cloudflare_moq_relay}
*/
export class MoqRelay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_moq_relay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MoqRelay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MoqRelay to import
  * @param importFromId The id of the existing MoqRelay that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MoqRelay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_moq_relay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay cloudflare_moq_relay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MoqRelayConfig
  */
  public constructor(scope: Construct, id: string, config: MoqRelayConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_moq_relay',
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
    this._config.internalValue = config.config;
    this._name = config.name;
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

  // config - computed: true, optional: true, required: false
  private _config = new MoqRelayConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MoqRelayConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // token_publish_subscribe - computed: true, optional: false, required: false
  public get tokenPublishSubscribe() {
    return this.getStringAttribute('token_publish_subscribe');
  }

  // token_subscribe - computed: true, optional: false, required: false
  public get tokenSubscribe() {
    return this.getStringAttribute('token_subscribe');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      config: moqRelayConfigAToTerraform(this._config.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
        value: moqRelayConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MoqRelayConfigA",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
