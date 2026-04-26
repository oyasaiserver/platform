import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTokenValidationRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#filter DataCloudflareTokenValidationRules#filter}
    */
    readonly filter?: DataCloudflareTokenValidationRulesFilter;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#rule_id DataCloudflareTokenValidationRules#rule_id}
    */
    readonly ruleId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#zone_id DataCloudflareTokenValidationRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareTokenValidationRulesFilter {
    /**
    * Action to take on requests that match operations included in `selector` and fail `expression`.
    * Available values: "log", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#action DataCloudflareTokenValidationRules#action}
    */
    readonly action?: string;
    /**
    * Toggle rule on or off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#enabled DataCloudflareTokenValidationRules#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Select rules with this host in `include`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#host DataCloudflareTokenValidationRules#host}
    */
    readonly host?: string;
    /**
    * Select rules with this host in `include`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#hostname DataCloudflareTokenValidationRules#hostname}
    */
    readonly hostname?: string;
    /**
    * Select rules with these IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#id DataCloudflareTokenValidationRules#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Select rules using any of these token configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#token_configuration DataCloudflareTokenValidationRules#token_configuration}
    */
    readonly tokenConfiguration?: string[];
}
export declare function dataCloudflareTokenValidationRulesFilterToTerraform(struct?: DataCloudflareTokenValidationRulesFilter | cdktf.IResolvable): any;
export declare function dataCloudflareTokenValidationRulesFilterToHclTerraform(struct?: DataCloudflareTokenValidationRulesFilter | cdktf.IResolvable): any;
export declare class DataCloudflareTokenValidationRulesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareTokenValidationRulesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesFilter | cdktf.IResolvable | undefined);
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
    private _tokenConfiguration?;
    get tokenConfiguration(): string[];
    set tokenConfiguration(value: string[]);
    resetTokenConfiguration(): void;
    get tokenConfigurationInput(): string[];
}
export interface DataCloudflareTokenValidationRulesSelectorExclude {
}
export declare function dataCloudflareTokenValidationRulesSelectorExcludeToTerraform(struct?: DataCloudflareTokenValidationRulesSelectorExclude): any;
export declare function dataCloudflareTokenValidationRulesSelectorExcludeToHclTerraform(struct?: DataCloudflareTokenValidationRulesSelectorExclude): any;
export declare class DataCloudflareTokenValidationRulesSelectorExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationRulesSelectorExclude | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesSelectorExclude | undefined);
    get operationIds(): any;
}
export declare class DataCloudflareTokenValidationRulesSelectorExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationRulesSelectorExcludeOutputReference;
}
export interface DataCloudflareTokenValidationRulesSelectorInclude {
}
export declare function dataCloudflareTokenValidationRulesSelectorIncludeToTerraform(struct?: DataCloudflareTokenValidationRulesSelectorInclude): any;
export declare function dataCloudflareTokenValidationRulesSelectorIncludeToHclTerraform(struct?: DataCloudflareTokenValidationRulesSelectorInclude): any;
export declare class DataCloudflareTokenValidationRulesSelectorIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTokenValidationRulesSelectorInclude | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesSelectorInclude | undefined);
    get host(): any;
}
export declare class DataCloudflareTokenValidationRulesSelectorIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTokenValidationRulesSelectorIncludeOutputReference;
}
export interface DataCloudflareTokenValidationRulesSelector {
}
export declare function dataCloudflareTokenValidationRulesSelectorToTerraform(struct?: DataCloudflareTokenValidationRulesSelector): any;
export declare function dataCloudflareTokenValidationRulesSelectorToHclTerraform(struct?: DataCloudflareTokenValidationRulesSelector): any;
export declare class DataCloudflareTokenValidationRulesSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareTokenValidationRulesSelector | undefined;
    set internalValue(value: DataCloudflareTokenValidationRulesSelector | undefined);
    private _exclude;
    get exclude(): DataCloudflareTokenValidationRulesSelectorExcludeList;
    private _include;
    get include(): DataCloudflareTokenValidationRulesSelectorIncludeList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules cloudflare_token_validation_rules}
*/
export declare class DataCloudflareTokenValidationRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_token_validation_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationRules to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules cloudflare_token_validation_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTokenValidationRulesConfig);
    get action(): any;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get expression(): any;
    private _filter;
    get filter(): DataCloudflareTokenValidationRulesFilterOutputReference;
    putFilter(value: DataCloudflareTokenValidationRulesFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get lastUpdated(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    resetRuleId(): void;
    get ruleIdInput(): string;
    private _selector;
    get selector(): DataCloudflareTokenValidationRulesSelectorOutputReference;
    get title(): any;
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
