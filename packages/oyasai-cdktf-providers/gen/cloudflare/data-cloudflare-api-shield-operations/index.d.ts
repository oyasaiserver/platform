import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldOperationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#direction DataCloudflareApiShieldOperations#direction}
    */
    readonly direction?: string;
    /**
    * Filter results to only include endpoints containing this pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#endpoint DataCloudflareApiShieldOperations#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#feature DataCloudflareApiShieldOperations#feature}
    */
    readonly feature?: string[];
    /**
    * Filter results to only include the specified hosts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#host DataCloudflareApiShieldOperations#host}
    */
    readonly host?: string[];
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#max_items DataCloudflareApiShieldOperations#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter results to only include the specified HTTP methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#method DataCloudflareApiShieldOperations#method}
    */
    readonly method?: string[];
    /**
    * Field to order by. When requesting a feature, the feature keys are available for ordering as well, e.g., `thresholds.suggested_threshold`.
    * Available values: "method", "host", "endpoint", "thresholds.$key".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#order DataCloudflareApiShieldOperations#order}
    */
    readonly order?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#zone_id DataCloudflareApiShieldOperations#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesApiRouting {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesApiRouting): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesApiRouting): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesApiRouting | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesApiRouting | undefined);
    get lastUpdated(): any;
    get route(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined);
    private _p90;
    get p90(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
    private _p95;
    get p95(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
    private _p99;
    get p99(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThreshold | undefined);
    private _confidenceIntervals;
    get confidenceIntervals(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
    get mean(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervals | undefined);
    get lastUpdated(): any;
    private _suggestedThreshold;
    get suggestedThreshold(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemas | undefined);
    get parameters(): any;
    get responses(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesParameterSchemas | undefined);
    get lastUpdated(): any;
    private _parameterSchemas;
    get parameterSchemas(): DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchema | undefined);
    get createdAt(): any;
    get id(): any;
    get isLearned(): any;
    get name(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesSchemaInfo | undefined);
    private _activeSchema;
    get activeSchema(): DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference;
    get learnedAvailable(): any;
    get mitigationAction(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeaturesThresholds {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesThresholdsToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesThresholds): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesThresholdsToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeaturesThresholds): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeaturesThresholds | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeaturesThresholds | undefined);
    get authIdTokens(): any;
    get dataPoints(): any;
    get lastUpdated(): any;
    get p50(): any;
    get p90(): any;
    get p99(): any;
    get periodSeconds(): any;
    get requests(): any;
    get suggestedThreshold(): any;
}
export interface DataCloudflareApiShieldOperationsResultFeatures {
}
export declare function dataCloudflareApiShieldOperationsResultFeaturesToTerraform(struct?: DataCloudflareApiShieldOperationsResultFeatures): any;
export declare function dataCloudflareApiShieldOperationsResultFeaturesToHclTerraform(struct?: DataCloudflareApiShieldOperationsResultFeatures): any;
export declare class DataCloudflareApiShieldOperationsResultFeaturesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationsResultFeatures | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResultFeatures | undefined);
    private _apiRouting;
    get apiRouting(): DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference;
    private _confidenceIntervals;
    get confidenceIntervals(): DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference;
    private _parameterSchemas;
    get parameterSchemas(): DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference;
    private _schemaInfo;
    get schemaInfo(): DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference;
    private _thresholds;
    get thresholds(): DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference;
}
export interface DataCloudflareApiShieldOperationsResult {
}
export declare function dataCloudflareApiShieldOperationsResultToTerraform(struct?: DataCloudflareApiShieldOperationsResult): any;
export declare function dataCloudflareApiShieldOperationsResultToHclTerraform(struct?: DataCloudflareApiShieldOperationsResult): any;
export declare class DataCloudflareApiShieldOperationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiShieldOperationsResult | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationsResult | undefined);
    get endpoint(): any;
    private _features;
    get features(): DataCloudflareApiShieldOperationsResultFeaturesOutputReference;
    get host(): any;
    get id(): any;
    get lastUpdated(): any;
    get method(): any;
    get operationId(): any;
}
export declare class DataCloudflareApiShieldOperationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiShieldOperationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations cloudflare_api_shield_operations}
*/
export declare class DataCloudflareApiShieldOperations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_operations";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldOperations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperations to import
    * @param importFromId The id of the existing DataCloudflareApiShieldOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations cloudflare_api_shield_operations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldOperationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiShieldOperationsConfig);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string;
    private _feature?;
    get feature(): string[];
    set feature(value: string[]);
    resetFeature(): void;
    get featureInput(): string[];
    private _host?;
    get host(): string[];
    set host(value: string[]);
    resetHost(): void;
    get hostInput(): string[];
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _method?;
    get method(): string[];
    set method(value: string[]);
    resetMethod(): void;
    get methodInput(): string[];
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _result;
    get result(): DataCloudflareApiShieldOperationsResultList;
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
