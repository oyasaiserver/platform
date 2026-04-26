import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDexRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#account_id DataCloudflareZeroTrustDexRules#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#max_items DataCloudflareZeroTrustDexRules#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter results by rule name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#name DataCloudflareZeroTrustDexRules#name}
    */
    readonly name?: string;
    /**
    * Which property to sort results by
    * Available values: "name", "created_at", "updated_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#sort_by DataCloudflareZeroTrustDexRules#sort_by}
    */
    readonly sortBy?: string;
    /**
    * Sort direction for sort_by property
    * Available values: "ASC", "DESC".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#sort_order DataCloudflareZeroTrustDexRules#sort_order}
    */
    readonly sortOrder?: string;
}
export interface DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsData {
}
export declare function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToTerraform(struct?: DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsData): any;
export declare function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToHclTerraform(struct?: DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsData): any;
export declare class DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsData | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsData | undefined);
    get host(): any;
    get kind(): any;
    get method(): any;
}
export interface DataCloudflareZeroTrustDexRulesResultRulesTargetedTests {
}
export declare function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToTerraform(struct?: DataCloudflareZeroTrustDexRulesResultRulesTargetedTests): any;
export declare function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToHclTerraform(struct?: DataCloudflareZeroTrustDexRulesResultRulesTargetedTests): any;
export declare class DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexRulesResultRulesTargetedTests | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexRulesResultRulesTargetedTests | undefined);
    private _data;
    get data(): DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference;
    get enabled(): any;
    get name(): any;
    get testId(): any;
}
export declare class DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference;
}
export interface DataCloudflareZeroTrustDexRulesResultRules {
}
export declare function dataCloudflareZeroTrustDexRulesResultRulesToTerraform(struct?: DataCloudflareZeroTrustDexRulesResultRules): any;
export declare function dataCloudflareZeroTrustDexRulesResultRulesToHclTerraform(struct?: DataCloudflareZeroTrustDexRulesResultRules): any;
export declare class DataCloudflareZeroTrustDexRulesResultRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexRulesResultRules | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexRulesResultRules | undefined);
    get createdAt(): any;
    get description(): any;
    get id(): any;
    get match(): any;
    get name(): any;
    private _targetedTests;
    get targetedTests(): DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList;
    get updatedAt(): any;
}
export declare class DataCloudflareZeroTrustDexRulesResultRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDexRulesResultRulesOutputReference;
}
export interface DataCloudflareZeroTrustDexRulesResult {
}
export declare function dataCloudflareZeroTrustDexRulesResultToTerraform(struct?: DataCloudflareZeroTrustDexRulesResult): any;
export declare function dataCloudflareZeroTrustDexRulesResultToHclTerraform(struct?: DataCloudflareZeroTrustDexRulesResult): any;
export declare class DataCloudflareZeroTrustDexRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexRulesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexRulesResult | undefined);
    private _rules;
    get rules(): DataCloudflareZeroTrustDexRulesResultRulesList;
}
export declare class DataCloudflareZeroTrustDexRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDexRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules cloudflare_zero_trust_dex_rules}
*/
export declare class DataCloudflareZeroTrustDexRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dex_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexRules to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules cloudflare_zero_trust_dex_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDexRulesConfig);
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
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareZeroTrustDexRulesResultList;
    private _sortBy?;
    get sortBy(): string;
    set sortBy(value: string);
    resetSortBy(): void;
    get sortByInput(): string;
    private _sortOrder?;
    get sortOrder(): string;
    set sortOrder(value: string);
    resetSortOrder(): void;
    get sortOrderInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
