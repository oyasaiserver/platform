import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Filter by enabled routing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules#enabled DataCloudflareEmailRoutingRules#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules#max_items DataCloudflareEmailRoutingRules#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules#zone_id DataCloudflareEmailRoutingRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareEmailRoutingRulesResultActions {
}
export declare function dataCloudflareEmailRoutingRulesResultActionsToTerraform(struct?: DataCloudflareEmailRoutingRulesResultActions): any;
export declare function dataCloudflareEmailRoutingRulesResultActionsToHclTerraform(struct?: DataCloudflareEmailRoutingRulesResultActions): any;
export declare class DataCloudflareEmailRoutingRulesResultActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingRulesResultActions | undefined;
    set internalValue(value: DataCloudflareEmailRoutingRulesResultActions | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflareEmailRoutingRulesResultActionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingRulesResultActionsOutputReference;
}
export interface DataCloudflareEmailRoutingRulesResultMatchers {
}
export declare function dataCloudflareEmailRoutingRulesResultMatchersToTerraform(struct?: DataCloudflareEmailRoutingRulesResultMatchers): any;
export declare function dataCloudflareEmailRoutingRulesResultMatchersToHclTerraform(struct?: DataCloudflareEmailRoutingRulesResultMatchers): any;
export declare class DataCloudflareEmailRoutingRulesResultMatchersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingRulesResultMatchers | undefined;
    set internalValue(value: DataCloudflareEmailRoutingRulesResultMatchers | undefined);
    get field(): any;
    get type(): any;
    get value(): any;
}
export declare class DataCloudflareEmailRoutingRulesResultMatchersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingRulesResultMatchersOutputReference;
}
export interface DataCloudflareEmailRoutingRulesResult {
}
export declare function dataCloudflareEmailRoutingRulesResultToTerraform(struct?: DataCloudflareEmailRoutingRulesResult): any;
export declare function dataCloudflareEmailRoutingRulesResultToHclTerraform(struct?: DataCloudflareEmailRoutingRulesResult): any;
export declare class DataCloudflareEmailRoutingRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingRulesResult | undefined;
    set internalValue(value: DataCloudflareEmailRoutingRulesResult | undefined);
    private _actions;
    get actions(): DataCloudflareEmailRoutingRulesResultActionsList;
    get enabled(): any;
    get id(): any;
    private _matchers;
    get matchers(): DataCloudflareEmailRoutingRulesResultMatchersList;
    get name(): any;
    get priority(): any;
    get tag(): any;
}
export declare class DataCloudflareEmailRoutingRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules cloudflare_email_routing_rules}
*/
export declare class DataCloudflareEmailRoutingRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingRules to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules cloudflare_email_routing_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingRulesConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareEmailRoutingRulesResultList;
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
