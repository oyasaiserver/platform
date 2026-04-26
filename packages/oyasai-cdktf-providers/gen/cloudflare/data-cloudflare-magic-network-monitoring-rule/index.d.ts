import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicNetworkMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}
    */
    readonly accountId?: string;
    /**
    * The id of the rule. Must be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}
    */
    readonly ruleId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export declare class DataCloudflareMagicNetworkMonitoringRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_network_monitoring_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicNetworkMonitoringRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get automaticAdvertisement(): any;
    get bandwidthThreshold(): any;
    get duration(): any;
    get id(): any;
    get name(): any;
    get packetThreshold(): any;
    get prefixMatch(): any;
    get prefixes(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    get ruleIdInput(): string;
    get type(): any;
    get zscoreSensitivity(): any;
    get zscoreTarget(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
