import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareFirewallRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique identifier of the firewall rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rule#rule_id DataCloudflareFirewallRule#rule_id}
    */
    readonly ruleId?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rule#zone_id DataCloudflareFirewallRule#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rule cloudflare_firewall_rule}
*/
export declare class DataCloudflareFirewallRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_firewall_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareFirewallRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareFirewallRule to import
    * @param importFromId The id of the existing DataCloudflareFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareFirewallRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rule cloudflare_firewall_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareFirewallRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareFirewallRuleConfig);
    get action(): any;
    get description(): any;
    get id(): any;
    get paused(): any;
    get priority(): any;
    get products(): any;
    get ref(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    resetRuleId(): void;
    get ruleIdInput(): string;
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
