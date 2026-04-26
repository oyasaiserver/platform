import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWebAnalyticsSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site#account_id DataCloudflareWebAnalyticsSite#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}
    */
    readonly filter?: DataCloudflareWebAnalyticsSiteFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site#site_id DataCloudflareWebAnalyticsSite#site_id}
    */
    readonly siteId?: string;
}
export interface DataCloudflareWebAnalyticsSiteFilter {
    /**
    * The property used to sort the list of results.
    * Available values: "host", "created".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site#order_by DataCloudflareWebAnalyticsSite#order_by}
    */
    readonly orderBy?: string;
}
export declare function dataCloudflareWebAnalyticsSiteFilterToTerraform(struct?: DataCloudflareWebAnalyticsSiteFilter | cdktf.IResolvable): any;
export declare function dataCloudflareWebAnalyticsSiteFilterToHclTerraform(struct?: DataCloudflareWebAnalyticsSiteFilter | cdktf.IResolvable): any;
export declare class DataCloudflareWebAnalyticsSiteFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWebAnalyticsSiteFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareWebAnalyticsSiteFilter | cdktf.IResolvable | undefined);
    private _orderBy?;
    get orderBy(): string;
    set orderBy(value: string);
    resetOrderBy(): void;
    get orderByInput(): string;
}
export interface DataCloudflareWebAnalyticsSiteRules {
}
export declare function dataCloudflareWebAnalyticsSiteRulesToTerraform(struct?: DataCloudflareWebAnalyticsSiteRules): any;
export declare function dataCloudflareWebAnalyticsSiteRulesToHclTerraform(struct?: DataCloudflareWebAnalyticsSiteRules): any;
export declare class DataCloudflareWebAnalyticsSiteRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWebAnalyticsSiteRules | undefined;
    set internalValue(value: DataCloudflareWebAnalyticsSiteRules | undefined);
    get created(): any;
    get host(): any;
    get id(): any;
    get inclusive(): any;
    get isPaused(): any;
    get paths(): any;
    get priority(): any;
}
export declare class DataCloudflareWebAnalyticsSiteRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWebAnalyticsSiteRulesOutputReference;
}
export interface DataCloudflareWebAnalyticsSiteRuleset {
}
export declare function dataCloudflareWebAnalyticsSiteRulesetToTerraform(struct?: DataCloudflareWebAnalyticsSiteRuleset): any;
export declare function dataCloudflareWebAnalyticsSiteRulesetToHclTerraform(struct?: DataCloudflareWebAnalyticsSiteRuleset): any;
export declare class DataCloudflareWebAnalyticsSiteRulesetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWebAnalyticsSiteRuleset | undefined;
    set internalValue(value: DataCloudflareWebAnalyticsSiteRuleset | undefined);
    get enabled(): any;
    get id(): any;
    get zoneName(): any;
    get zoneTag(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site}
*/
export declare class DataCloudflareWebAnalyticsSite extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_web_analytics_site";
    /**
    * Generates CDKTF code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWebAnalyticsSite to import
    * @param importFromId The id of the existing DataCloudflareWebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWebAnalyticsSite to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWebAnalyticsSiteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWebAnalyticsSiteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get autoInstall(): any;
    get created(): any;
    private _filter;
    get filter(): DataCloudflareWebAnalyticsSiteFilterOutputReference;
    putFilter(value: DataCloudflareWebAnalyticsSiteFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _rules;
    get rules(): DataCloudflareWebAnalyticsSiteRulesList;
    private _ruleset;
    get ruleset(): DataCloudflareWebAnalyticsSiteRulesetOutputReference;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string;
    get siteTag(): any;
    get siteToken(): any;
    get snippet(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
