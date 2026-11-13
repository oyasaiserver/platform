// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneTracingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Up to 100 OpenTelemetry destination identifiers that receive traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#destinations ZoneTracing#destinations}
  */
  readonly destinations?: string[];
  /**
  * Whether Cloudflare Traces is enabled for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#enabled ZoneTracing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether trace context is sent externally or across a zone boundary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#forward_context ZoneTracing#forward_context}
  */
  readonly forwardContext?: boolean | cdktf.IResolvable;
  /**
  * Whether traces are persisted in Cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#persist ZoneTracing#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
  /**
  * When inbound trace context may be continued. Authenticated propagation is not supported yet.
  * Available values: "accept", "authenticated", "reject".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#propagation_policy ZoneTracing#propagation_policy}
  */
  readonly propagationPolicy?: string;
  /**
  * The ratio of requests sampled for tracing, from 0 to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#sampling_ratio ZoneTracing#sampling_ratio}
  */
  readonly samplingRatio?: number;
  /**
  * Specify the zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#zone_id ZoneTracing#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing cloudflare_zone_tracing}
*/
export class ZoneTracing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_tracing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneTracing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneTracing to import
  * @param importFromId The id of the existing ZoneTracing that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneTracing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_tracing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zone_tracing cloudflare_zone_tracing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneTracingConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneTracingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_tracing',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinations = config.destinations;
    this._enabled = config.enabled;
    this._forwardContext = config.forwardContext;
    this._persist = config.persist;
    this._propagationPolicy = config.propagationPolicy;
    this._samplingRatio = config.samplingRatio;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // enabled - computed: false, optional: true, required: false
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

  // forward_context - computed: false, optional: true, required: false
  private _forwardContext?: boolean | cdktf.IResolvable; 
  public get forwardContext() {
    return this.getBooleanAttribute('forward_context');
  }
  public set forwardContext(value: boolean | cdktf.IResolvable) {
    this._forwardContext = value;
  }
  public resetForwardContext() {
    this._forwardContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardContextInput() {
    return this._forwardContext;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // persist - computed: false, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // propagation_policy - computed: false, optional: true, required: false
  private _propagationPolicy?: string; 
  public get propagationPolicy() {
    return this.getStringAttribute('propagation_policy');
  }
  public set propagationPolicy(value: string) {
    this._propagationPolicy = value;
  }
  public resetPropagationPolicy() {
    this._propagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationPolicyInput() {
    return this._propagationPolicy;
  }

  // sampling_ratio - computed: false, optional: true, required: false
  private _samplingRatio?: number; 
  public get samplingRatio() {
    return this.getNumberAttribute('sampling_ratio');
  }
  public set samplingRatio(value: number) {
    this._samplingRatio = value;
  }
  public resetSamplingRatio() {
    this._samplingRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRatioInput() {
    return this._samplingRatio;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinations),
      enabled: cdktf.booleanToTerraform(this._enabled),
      forward_context: cdktf.booleanToTerraform(this._forwardContext),
      persist: cdktf.booleanToTerraform(this._persist),
      propagation_policy: cdktf.stringToTerraform(this._propagationPolicy),
      sampling_ratio: cdktf.numberToTerraform(this._samplingRatio),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_context: {
        value: cdktf.booleanToHclTerraform(this._forwardContext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persist: {
        value: cdktf.booleanToHclTerraform(this._persist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      propagation_policy: {
        value: cdktf.stringToHclTerraform(this._propagationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_ratio: {
        value: cdktf.numberToHclTerraform(this._samplingRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
