import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicNetworkMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}
    */
    readonly accountId?: string;
    /**
    * Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}
    */
    readonly automaticAdvertisement: boolean | cdktf.IResolvable;
    /**
    * The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#bandwidth_threshold MagicNetworkMonitoringRule#bandwidth_threshold}
    */
    readonly bandwidthThreshold?: number;
    /**
    * The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
    * Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}
    */
    readonly duration?: string;
    /**
    * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}
    */
    readonly name: string;
    /**
    * The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}
    */
    readonly packetThreshold?: number;
    /**
    * Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
    * Available values: "exact", "subnet", "supernet".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#prefix_match MagicNetworkMonitoringRule#prefix_match}
    */
    readonly prefixMatch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}
    */
    readonly prefixes: string[];
    /**
    * MNM rule type.
    * Available values: "threshold", "zscore", "advanced_ddos".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#type MagicNetworkMonitoringRule#type}
    */
    readonly type: string;
    /**
    * Level of sensitivity set for zscore rules.
    * Available values: "low", "medium", "high".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#zscore_sensitivity MagicNetworkMonitoringRule#zscore_sensitivity}
    */
    readonly zscoreSensitivity?: string;
    /**
    * Target of the zscore rule analysis.
    * Available values: "bits", "packets".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#zscore_target MagicNetworkMonitoringRule#zscore_target}
    */
    readonly zscoreTarget?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export declare class MagicNetworkMonitoringRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_network_monitoring_rule";
    /**
    * Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringRule to import
    * @param importFromId The id of the existing MagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicNetworkMonitoringRuleConfig
    */
    constructor(scope: Construct, id: string, config: MagicNetworkMonitoringRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _automaticAdvertisement?;
    get automaticAdvertisement(): boolean | cdktf.IResolvable;
    set automaticAdvertisement(value: boolean | cdktf.IResolvable);
    get automaticAdvertisementInput(): any;
    private _bandwidthThreshold?;
    get bandwidthThreshold(): number;
    set bandwidthThreshold(value: number);
    resetBandwidthThreshold(): void;
    get bandwidthThresholdInput(): number;
    private _duration?;
    get duration(): string;
    set duration(value: string);
    resetDuration(): void;
    get durationInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _packetThreshold?;
    get packetThreshold(): number;
    set packetThreshold(value: number);
    resetPacketThreshold(): void;
    get packetThresholdInput(): number;
    private _prefixMatch?;
    get prefixMatch(): string;
    set prefixMatch(value: string);
    resetPrefixMatch(): void;
    get prefixMatchInput(): string;
    private _prefixes?;
    get prefixes(): string[];
    set prefixes(value: string[]);
    get prefixesInput(): string[];
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _zscoreSensitivity?;
    get zscoreSensitivity(): string;
    set zscoreSensitivity(value: string);
    resetZscoreSensitivity(): void;
    get zscoreSensitivityInput(): string;
    private _zscoreTarget?;
    get zscoreTarget(): string;
    set zscoreTarget(value: string);
    resetZscoreTarget(): void;
    get zscoreTargetInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
