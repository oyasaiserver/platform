import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLoadBalancerMonitorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors#account_id DataCloudflareLoadBalancerMonitors#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors#max_items DataCloudflareLoadBalancerMonitors#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareLoadBalancerMonitorsResult {
}
export declare function dataCloudflareLoadBalancerMonitorsResultToTerraform(struct?: DataCloudflareLoadBalancerMonitorsResult): any;
export declare function dataCloudflareLoadBalancerMonitorsResultToHclTerraform(struct?: DataCloudflareLoadBalancerMonitorsResult): any;
export declare class DataCloudflareLoadBalancerMonitorsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancerMonitorsResult | undefined;
    set internalValue(value: DataCloudflareLoadBalancerMonitorsResult | undefined);
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
    get path(): any;
    get port(): any;
    get probeZone(): any;
    get retries(): any;
    get timeout(): any;
    get type(): any;
}
export declare class DataCloudflareLoadBalancerMonitorsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareLoadBalancerMonitorsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors cloudflare_load_balancer_monitors}
*/
export declare class DataCloudflareLoadBalancerMonitors extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_load_balancer_monitors";
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerMonitors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerMonitors to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerMonitors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerMonitors to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors cloudflare_load_balancer_monitors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerMonitorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLoadBalancerMonitorsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareLoadBalancerMonitorsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
