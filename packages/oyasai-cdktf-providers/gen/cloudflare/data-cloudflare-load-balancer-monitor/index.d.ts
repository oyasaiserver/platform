import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLoadBalancerMonitorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor#account_id DataCloudflareLoadBalancerMonitor#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor#monitor_id DataCloudflareLoadBalancerMonitor#monitor_id}
    */
    readonly monitorId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
export declare class DataCloudflareLoadBalancerMonitor extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_load_balancer_monitor";
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerMonitor to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerMonitor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor cloudflare_load_balancer_monitor} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerMonitorConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareLoadBalancerMonitorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowInsecure(): any;
    get consecutiveDown(): any;
    get consecutiveUp(): any;
    get createdOn(): any;
    get description(): any;
    get expectedBody(): any;
    get expectedCodes(): any;
    get followRedirects(): any;
    private _header;
    get header(): any;
    get id(): any;
    get interval(): any;
    get method(): any;
    get modifiedOn(): any;
    private _monitorId?;
    get monitorId(): string;
    set monitorId(value: string);
    get monitorIdInput(): string;
    get path(): any;
    get port(): any;
    get probeZone(): any;
    get retries(): any;
    get timeout(): any;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
