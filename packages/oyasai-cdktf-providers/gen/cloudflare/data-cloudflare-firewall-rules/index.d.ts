import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareFirewallRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The action to search for. Must be an exact match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#action DataCloudflareFirewallRules#action}
    */
    readonly action?: string;
    /**
    * A case-insensitive string to find in the description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#description DataCloudflareFirewallRules#description}
    */
    readonly description?: string;
    /**
    * The unique identifier of the firewall rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#id DataCloudflareFirewallRules#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#max_items DataCloudflareFirewallRules#max_items}
    */
    readonly maxItems?: number;
    /**
    * When true, indicates that the firewall rule is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#paused DataCloudflareFirewallRules#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#zone_id DataCloudflareFirewallRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareFirewallRulesResultFilter {
}
export declare function dataCloudflareFirewallRulesResultFilterToTerraform(struct?: DataCloudflareFirewallRulesResultFilter): any;
export declare function dataCloudflareFirewallRulesResultFilterToHclTerraform(struct?: DataCloudflareFirewallRulesResultFilter): any;
export declare class DataCloudflareFirewallRulesResultFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareFirewallRulesResultFilter | undefined;
    set internalValue(value: DataCloudflareFirewallRulesResultFilter | undefined);
    get deleted(): any;
    get description(): any;
    get expression(): any;
    get id(): any;
    get paused(): any;
    get ref(): any;
}
export interface DataCloudflareFirewallRulesResult {
}
export declare function dataCloudflareFirewallRulesResultToTerraform(struct?: DataCloudflareFirewallRulesResult): any;
export declare function dataCloudflareFirewallRulesResultToHclTerraform(struct?: DataCloudflareFirewallRulesResult): any;
export declare class DataCloudflareFirewallRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareFirewallRulesResult | undefined;
    set internalValue(value: DataCloudflareFirewallRulesResult | undefined);
    get action(): any;
    get description(): any;
    private _filter;
    get filter(): DataCloudflareFirewallRulesResultFilterOutputReference;
    get id(): any;
    get paused(): any;
    get priority(): any;
    get products(): any;
    get ref(): any;
}
export declare class DataCloudflareFirewallRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareFirewallRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules cloudflare_firewall_rules}
*/
export declare class DataCloudflareFirewallRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_firewall_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareFirewallRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareFirewallRules to import
    * @param importFromId The id of the existing DataCloudflareFirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareFirewallRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules cloudflare_firewall_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareFirewallRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareFirewallRulesConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    private _result;
    get result(): DataCloudflareFirewallRulesResultList;
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
