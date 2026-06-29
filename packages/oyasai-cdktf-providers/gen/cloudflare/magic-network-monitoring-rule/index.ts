// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicNetworkMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}
  */
  readonly accountId: string;
  /**
  * Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}
  */
  readonly automaticAdvertisement: boolean | cdktf.IResolvable;
  /**
  * The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#bandwidth_threshold MagicNetworkMonitoringRule#bandwidth_threshold}
  */
  readonly bandwidthThreshold?: number;
  /**
  * The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
  * Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}
  */
  readonly duration?: string;
  /**
  * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}
  */
  readonly name: string;
  /**
  * The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}
  */
  readonly packetThreshold?: number;
  /**
  * Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
  * Available values: "exact", "subnet", "supernet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#prefix_match MagicNetworkMonitoringRule#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}
  */
  readonly prefixes: string[];
  /**
  * MNM rule type.
  * Available values: "threshold", "zscore", "advanced_ddos".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#type MagicNetworkMonitoringRule#type}
  */
  readonly type: string;
  /**
  * Level of sensitivity set for zscore rules.
  * Available values: "low", "medium", "high".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#zscore_sensitivity MagicNetworkMonitoringRule#zscore_sensitivity}
  */
  readonly zscoreSensitivity?: string;
  /**
  * Target of the zscore rule analysis.
  * Available values: "bits", "packets".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#zscore_target MagicNetworkMonitoringRule#zscore_target}
  */
  readonly zscoreTarget?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export class MagicNetworkMonitoringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_network_monitoring_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringRule to import
  * @param importFromId The id of the existing MagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicNetworkMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MagicNetworkMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_network_monitoring_rule',
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
    this._automaticAdvertisement = config.automaticAdvertisement;
    this._bandwidthThreshold = config.bandwidthThreshold;
    this._duration = config.duration;
    this._name = config.name;
    this._packetThreshold = config.packetThreshold;
    this._prefixMatch = config.prefixMatch;
    this._prefixes = config.prefixes;
    this._type = config.type;
    this._zscoreSensitivity = config.zscoreSensitivity;
    this._zscoreTarget = config.zscoreTarget;
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

  // automatic_advertisement - computed: false, optional: false, required: true
  private _automaticAdvertisement?: boolean | cdktf.IResolvable; 
  public get automaticAdvertisement() {
    return this.getBooleanAttribute('automatic_advertisement');
  }
  public set automaticAdvertisement(value: boolean | cdktf.IResolvable) {
    this._automaticAdvertisement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticAdvertisementInput() {
    return this._automaticAdvertisement;
  }

  // bandwidth_threshold - computed: false, optional: true, required: false
  private _bandwidthThreshold?: number; 
  public get bandwidthThreshold() {
    return this.getNumberAttribute('bandwidth_threshold');
  }
  public set bandwidthThreshold(value: number) {
    this._bandwidthThreshold = value;
  }
  public resetBandwidthThreshold() {
    this._bandwidthThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthThresholdInput() {
    return this._bandwidthThreshold;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // packet_threshold - computed: false, optional: true, required: false
  private _packetThreshold?: number; 
  public get packetThreshold() {
    return this.getNumberAttribute('packet_threshold');
  }
  public set packetThreshold(value: number) {
    this._packetThreshold = value;
  }
  public resetPacketThreshold() {
    this._packetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetThresholdInput() {
    return this._packetThreshold;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zscore_sensitivity - computed: false, optional: true, required: false
  private _zscoreSensitivity?: string; 
  public get zscoreSensitivity() {
    return this.getStringAttribute('zscore_sensitivity');
  }
  public set zscoreSensitivity(value: string) {
    this._zscoreSensitivity = value;
  }
  public resetZscoreSensitivity() {
    this._zscoreSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscoreSensitivityInput() {
    return this._zscoreSensitivity;
  }

  // zscore_target - computed: false, optional: true, required: false
  private _zscoreTarget?: string; 
  public get zscoreTarget() {
    return this.getStringAttribute('zscore_target');
  }
  public set zscoreTarget(value: string) {
    this._zscoreTarget = value;
  }
  public resetZscoreTarget() {
    this._zscoreTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscoreTargetInput() {
    return this._zscoreTarget;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      automatic_advertisement: cdktf.booleanToTerraform(this._automaticAdvertisement),
      bandwidth_threshold: cdktf.numberToTerraform(this._bandwidthThreshold),
      duration: cdktf.stringToTerraform(this._duration),
      name: cdktf.stringToTerraform(this._name),
      packet_threshold: cdktf.numberToTerraform(this._packetThreshold),
      prefix_match: cdktf.stringToTerraform(this._prefixMatch),
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
      type: cdktf.stringToTerraform(this._type),
      zscore_sensitivity: cdktf.stringToTerraform(this._zscoreSensitivity),
      zscore_target: cdktf.stringToTerraform(this._zscoreTarget),
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
      automatic_advertisement: {
        value: cdktf.booleanToHclTerraform(this._automaticAdvertisement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth_threshold: {
        value: cdktf.numberToHclTerraform(this._bandwidthThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      packet_threshold: {
        value: cdktf.numberToHclTerraform(this._packetThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_match: {
        value: cdktf.stringToHclTerraform(this._prefixMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscore_sensitivity: {
        value: cdktf.stringToHclTerraform(this._zscoreSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscore_target: {
        value: cdktf.stringToHclTerraform(this._zscoreTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
