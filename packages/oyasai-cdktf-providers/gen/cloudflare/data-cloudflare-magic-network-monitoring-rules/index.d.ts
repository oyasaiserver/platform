import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicNetworkMonitoringRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules#account_id DataCloudflareMagicNetworkMonitoringRules#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules#max_items DataCloudflareMagicNetworkMonitoringRules#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareMagicNetworkMonitoringRulesResult {
}
export declare function dataCloudflareMagicNetworkMonitoringRulesResultToTerraform(struct?: DataCloudflareMagicNetworkMonitoringRulesResult): any;
export declare function dataCloudflareMagicNetworkMonitoringRulesResultToHclTerraform(struct?: DataCloudflareMagicNetworkMonitoringRulesResult): any;
export declare class DataCloudflareMagicNetworkMonitoringRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicNetworkMonitoringRulesResult | undefined;
    set internalValue(value: DataCloudflareMagicNetworkMonitoringRulesResult | undefined);
    get automaticAdvertisement(): any;
    get bandwidthThreshold(): any;
    get duration(): any;
    get id(): any;
    get name(): any;
    get packetThreshold(): any;
    get prefixMatch(): any;
    get prefixes(): any;
    get type(): any;
    get zscoreSensitivity(): any;
    get zscoreTarget(): any;
}
export declare class DataCloudflareMagicNetworkMonitoringRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicNetworkMonitoringRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules cloudflare_magic_network_monitoring_rules}
*/
export declare class DataCloudflareMagicNetworkMonitoringRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_network_monitoring_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRules to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules cloudflare_magic_network_monitoring_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareMagicNetworkMonitoringRulesConfig);
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
    get result(): DataCloudflareMagicNetworkMonitoringRulesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
