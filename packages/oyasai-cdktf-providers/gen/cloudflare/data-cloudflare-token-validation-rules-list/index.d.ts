import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTokenValidationRulesListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Action to take on requests that match operations included in `selector` and fail `expression`.
    * Available values: "log", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#action DataCloudflareTokenValidationRulesList#action}
    */
    readonly action?: string;
    /**
    * Toggle rule on or off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#enabled DataCloudflareTokenValidationRulesList#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Select rules with this host in `include`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#host DataCloudflareTokenValidationRulesList#host}
    */
    readonly host?: string;
    /**
    * Select rules with this host in `include`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#hostname DataCloudflareTokenValidationRulesList#hostname}
    */
    readonly hostname?: string;
    /**
    * Select rules with these IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#id DataCloudflareTokenValidationRulesList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#max_items DataCloudflareTokenValidationRulesList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Select rules with these IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#rule_id DataCloudflareTokenValidationRulesList#rule_id}
    */
    readonly ruleId?: string;
    /**
    * Select rules using any of these token configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#token_configuration DataCloudflareTokenValidationRulesList#token_configuration}
    */
    readonly tokenConfiguration?: string[];
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#zone_id DataCloudflareTokenValidationRulesList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareTokenValidationRulesListResultSelectorExclude {
}
export declare function dataCloudflareTokenValidationRulesListResultSelectorExcludeToTerraform(struct?: DataCloudflareTokenValidationRulesListResultSelectorExclude): any;
export declare function dataCloudflareTokenValidationRulesListResultSelectorExcludeToHclTerraform(struct?: DataCloudflareTokenValidationRulesListResultSelectorExclude): any;
export declare class DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationRulesListResultSelectorExclude | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesListResultSelectorExclude | undefined);
    get operationIds(): any;
}
export declare class DataCloudflareTokenValidationRulesListResultSelectorExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference;
}
export interface DataCloudflareTokenValidationRulesListResultSelectorInclude {
}
export declare function dataCloudflareTokenValidationRulesListResultSelectorIncludeToTerraform(struct?: DataCloudflareTokenValidationRulesListResultSelectorInclude): any;
export declare function dataCloudflareTokenValidationRulesListResultSelectorIncludeToHclTerraform(struct?: DataCloudflareTokenValidationRulesListResultSelectorInclude): any;
export declare class DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationRulesListResultSelectorInclude | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesListResultSelectorInclude | undefined);
    get host(): any;
}
export declare class DataCloudflareTokenValidationRulesListResultSelectorIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference;
}
export interface DataCloudflareTokenValidationRulesListResultSelector {
}
export declare function dataCloudflareTokenValidationRulesListResultSelectorToTerraform(struct?: DataCloudflareTokenValidationRulesListResultSelector): any;
export declare function dataCloudflareTokenValidationRulesListResultSelectorToHclTerraform(struct?: DataCloudflareTokenValidationRulesListResultSelector): any;
export declare class DataCloudflareTokenValidationRulesListResultSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareTokenValidationRulesListResultSelector | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesListResultSelector | undefined);
    private _exclude;
    get exclude(): DataCloudflareTokenValidationRulesListResultSelectorExcludeList;
    private _include;
    get include(): DataCloudflareTokenValidationRulesListResultSelectorIncludeList;
}
export interface DataCloudflareTokenValidationRulesListResult {
}
export declare function dataCloudflareTokenValidationRulesListResultToTerraform(struct?: DataCloudflareTokenValidationRulesListResult): any;
export declare function dataCloudflareTokenValidationRulesListResultToHclTerraform(struct?: DataCloudflareTokenValidationRulesListResult): any;
export declare class DataCloudflareTokenValidationRulesListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationRulesListResult | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesListResult | undefined);
    get action(): any;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get expression(): any;
    get id(): any;
    get lastUpdated(): any;
    private _selector;
    get selector(): DataCloudflareTokenValidationRulesListResultSelectorOutputReference;
    get title(): any;
}
export declare class DataCloudflareTokenValidationRulesListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationRulesListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list cloudflare_token_validation_rules_list}
*/
export declare class DataCloudflareTokenValidationRulesList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_token_validation_rules_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationRulesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationRulesList to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationRulesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationRulesList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list cloudflare_token_validation_rules_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationRulesListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTokenValidationRulesListConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
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
    private _result;
    get result(): DataCloudflareTokenValidationRulesListResultList;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    resetRuleId(): void;
    get ruleIdInput(): string;
    private _tokenConfiguration?;
    get tokenConfiguration(): string[];
    set tokenConfiguration(value: string[]);
    resetTokenConfiguration(): void;
    get tokenConfigurationInput(): string[];
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
