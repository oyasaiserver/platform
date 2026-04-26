import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule#filter DataCloudflareEmailRoutingRule#filter}
    */
    readonly filter?: DataCloudflareEmailRoutingRuleFilter;
    /**
    * Routing rule identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule#rule_identifier DataCloudflareEmailRoutingRule#rule_identifier}
    */
    readonly ruleIdentifier?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule#zone_id DataCloudflareEmailRoutingRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareEmailRoutingRuleActions {
}
export declare function dataCloudflareEmailRoutingRuleActionsToTerraform(struct?: DataCloudflareEmailRoutingRuleActions): any;
export declare function dataCloudflareEmailRoutingRuleActionsToHclTerraform(struct?: DataCloudflareEmailRoutingRuleActions): any;
export declare class DataCloudflareEmailRoutingRuleActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingRuleActions | undefined;
    set internalValue(value: DataCloudflareEmailRoutingRuleActions | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflareEmailRoutingRuleActionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingRuleActionsOutputReference;
}
export interface DataCloudflareEmailRoutingRuleFilter {
    /**
    * Filter by enabled routing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule#enabled DataCloudflareEmailRoutingRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function dataCloudflareEmailRoutingRuleFilterToTerraform(struct?: DataCloudflareEmailRoutingRuleFilter | cdktf.IResolvable): any;
export declare function dataCloudflareEmailRoutingRuleFilterToHclTerraform(struct?: DataCloudflareEmailRoutingRuleFilter | cdktf.IResolvable): any;
export declare class DataCloudflareEmailRoutingRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareEmailRoutingRuleFilter | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface DataCloudflareEmailRoutingRuleMatchers {
}
export declare function dataCloudflareEmailRoutingRuleMatchersToTerraform(struct?: DataCloudflareEmailRoutingRuleMatchers): any;
export declare function dataCloudflareEmailRoutingRuleMatchersToHclTerraform(struct?: DataCloudflareEmailRoutingRuleMatchers): any;
export declare class DataCloudflareEmailRoutingRuleMatchersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingRuleMatchers | undefined;
    set internalValue(value: DataCloudflareEmailRoutingRuleMatchers | undefined);
    get field(): any;
    get type(): any;
    get value(): any;
}
export declare class DataCloudflareEmailRoutingRuleMatchersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingRuleMatchersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule cloudflare_email_routing_rule}
*/
export declare class DataCloudflareEmailRoutingRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingRule to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule cloudflare_email_routing_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingRuleConfig);
    private _actions;
    get actions(): DataCloudflareEmailRoutingRuleActionsList;
    get enabled(): any;
    private _filter;
    get filter(): DataCloudflareEmailRoutingRuleFilterOutputReference;
    putFilter(value: DataCloudflareEmailRoutingRuleFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _matchers;
    get matchers(): DataCloudflareEmailRoutingRuleMatchersList;
    get name(): any;
    get priority(): any;
    private _ruleIdentifier?;
    get ruleIdentifier(): string;
    set ruleIdentifier(value: string);
    resetRuleIdentifier(): void;
    get ruleIdentifierInput(): string;
    get tag(): any;
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
