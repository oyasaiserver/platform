import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRulesetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rulesets#account_id DataCloudflareRulesets#account_id}
    */
    readonly accountId?: string;
    /**
    * Maximum number of rulesets to fetch (defaults to 1000).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rulesets#max_items DataCloudflareRulesets#max_items}
    */
    readonly maxItems?: number;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rulesets#zone_id DataCloudflareRulesets#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareRulesetsResult {
}
export declare function dataCloudflareRulesetsResultToTerraform(struct?: DataCloudflareRulesetsResult): any;
export declare function dataCloudflareRulesetsResultToHclTerraform(struct?: DataCloudflareRulesetsResult): any;
export declare class DataCloudflareRulesetsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetsResult | undefined;
    set internalValue(value: DataCloudflareRulesetsResult | undefined);
    get description(): any;
    get id(): any;
    get kind(): any;
    get lastUpdated(): any;
    get name(): any;
    get phase(): any;
    get version(): any;
}
export declare class DataCloudflareRulesetsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetsResultOutputReference;
}
export interface DataCloudflareRulesetsRulesets {
}
export declare function dataCloudflareRulesetsRulesetsToTerraform(struct?: DataCloudflareRulesetsRulesets): any;
export declare function dataCloudflareRulesetsRulesetsToHclTerraform(struct?: DataCloudflareRulesetsRulesets): any;
export declare class DataCloudflareRulesetsRulesetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRulesetsRulesets | undefined;
    set internalValue(value: DataCloudflareRulesetsRulesets | undefined);
    get description(): any;
    get id(): any;
    get kind(): any;
    get lastUpdated(): any;
    get name(): any;
    get phase(): any;
    get version(): any;
}
export declare class DataCloudflareRulesetsRulesetsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRulesetsRulesetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rulesets cloudflare_rulesets}
*/
export declare class DataCloudflareRulesets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_rulesets";
    /**
    * Generates CDKTF code for importing a DataCloudflareRulesets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRulesets to import
    * @param importFromId The id of the existing DataCloudflareRulesets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rulesets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRulesets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rulesets cloudflare_rulesets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRulesetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareRulesetsConfig);
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
    get result(): DataCloudflareRulesetsResultList;
    private _rulesets;
    get rulesets(): DataCloudflareRulesetsRulesetsList;
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
