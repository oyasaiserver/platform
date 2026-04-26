import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUserAgentBlockingRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * A string to search for in the description of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#description DataCloudflareUserAgentBlockingRules#description}
    */
    readonly description?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#max_items DataCloudflareUserAgentBlockingRules#max_items}
    */
    readonly maxItems?: number;
    /**
    * When true, indicates that the rule is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#paused DataCloudflareUserAgentBlockingRules#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * A string to search for in the user agent values of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#user_agent DataCloudflareUserAgentBlockingRules#user_agent}
    */
    readonly userAgent?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#zone_id DataCloudflareUserAgentBlockingRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareUserAgentBlockingRulesResultConfiguration {
}
export declare function dataCloudflareUserAgentBlockingRulesResultConfigurationToTerraform(struct?: DataCloudflareUserAgentBlockingRulesResultConfiguration): any;
export declare function dataCloudflareUserAgentBlockingRulesResultConfigurationToHclTerraform(struct?: DataCloudflareUserAgentBlockingRulesResultConfiguration): any;
export declare class DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserAgentBlockingRulesResultConfiguration | undefined;
    set internalValue(value: DataCloudflareUserAgentBlockingRulesResultConfiguration | undefined);
    get target(): any;
    get value(): any;
}
export interface DataCloudflareUserAgentBlockingRulesResult {
}
export declare function dataCloudflareUserAgentBlockingRulesResultToTerraform(struct?: DataCloudflareUserAgentBlockingRulesResult): any;
export declare function dataCloudflareUserAgentBlockingRulesResultToHclTerraform(struct?: DataCloudflareUserAgentBlockingRulesResult): any;
export declare class DataCloudflareUserAgentBlockingRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserAgentBlockingRulesResult | undefined;
    set internalValue(value: DataCloudflareUserAgentBlockingRulesResult | undefined);
    private _configuration;
    get configuration(): DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference;
    get description(): any;
    get id(): any;
    get mode(): any;
    get paused(): any;
}
export declare class DataCloudflareUserAgentBlockingRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserAgentBlockingRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules cloudflare_user_agent_blocking_rules}
*/
export declare class DataCloudflareUserAgentBlockingRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_user_agent_blocking_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserAgentBlockingRules to import
    * @param importFromId The id of the existing DataCloudflareUserAgentBlockingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserAgentBlockingRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules cloudflare_user_agent_blocking_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserAgentBlockingRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareUserAgentBlockingRulesConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
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
    get result(): DataCloudflareUserAgentBlockingRulesResultList;
    private _userAgent?;
    get userAgent(): string;
    set userAgent(value: string);
    resetUserAgent(): void;
    get userAgentInput(): string;
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
