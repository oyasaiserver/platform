import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldOperationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#feature DataCloudflareApiShieldOperation#feature}
    */
    readonly feature?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#filter DataCloudflareApiShieldOperation#filter}
    */
    readonly filter?: DataCloudflareApiShieldOperationFilter;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#operation_id DataCloudflareApiShieldOperation#operation_id}
    */
    readonly operationId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#zone_id DataCloudflareApiShieldOperation#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareApiShieldOperationFeaturesApiRouting {
}
export declare function dataCloudflareApiShieldOperationFeaturesApiRoutingToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesApiRouting): any;
export declare function dataCloudflareApiShieldOperationFeaturesApiRoutingToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesApiRouting): any;
export declare class DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesApiRouting | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesApiRouting | undefined);
    get lastUpdated(): any;
    get route(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 {
}
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any;
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any;
export declare class DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 {
}
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any;
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any;
export declare class DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 {
}
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any;
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any;
export declare class DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals {
}
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any;
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any;
export declare class DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined);
    private _p90;
    get p90(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
    private _p95;
    get p95(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
    private _p99;
    get p99(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
}
export interface DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold {
}
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold): any;
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold): any;
export declare class DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold | undefined);
    private _confidenceIntervals;
    get confidenceIntervals(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
    get mean(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesConfidenceIntervals {
}
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervals): any;
export declare function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesConfidenceIntervals): any;
export declare class DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervals | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesConfidenceIntervals | undefined);
    get lastUpdated(): any;
    private _suggestedThreshold;
    get suggestedThreshold(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
}
export interface DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas {
}
export declare function dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas): any;
export declare function dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas): any;
export declare class DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas | undefined);
    get parameters(): any;
    get responses(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesParameterSchemas {
}
export declare function dataCloudflareApiShieldOperationFeaturesParameterSchemasToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesParameterSchemas): any;
export declare function dataCloudflareApiShieldOperationFeaturesParameterSchemasToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesParameterSchemas): any;
export declare class DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesParameterSchemas | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesParameterSchemas | undefined);
    get lastUpdated(): any;
    private _parameterSchemas;
    get parameterSchemas(): DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference;
}
export interface DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema {
}
export declare function dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema): any;
export declare function dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema): any;
export declare class DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema | undefined);
    get createdAt(): any;
    get id(): any;
    get isLearned(): any;
    get name(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesSchemaInfo {
}
export declare function dataCloudflareApiShieldOperationFeaturesSchemaInfoToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesSchemaInfo): any;
export declare function dataCloudflareApiShieldOperationFeaturesSchemaInfoToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesSchemaInfo): any;
export declare class DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesSchemaInfo | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesSchemaInfo | undefined);
    private _activeSchema;
    get activeSchema(): DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference;
    get learnedAvailable(): any;
    get mitigationAction(): any;
}
export interface DataCloudflareApiShieldOperationFeaturesThresholds {
}
export declare function dataCloudflareApiShieldOperationFeaturesThresholdsToTerraform(struct?: DataCloudflareApiShieldOperationFeaturesThresholds): any;
export declare function dataCloudflareApiShieldOperationFeaturesThresholdsToHclTerraform(struct?: DataCloudflareApiShieldOperationFeaturesThresholds): any;
export declare class DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeaturesThresholds | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeaturesThresholds | undefined);
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
export interface DataCloudflareApiShieldOperationFeatures {
}
export declare function dataCloudflareApiShieldOperationFeaturesToTerraform(struct?: DataCloudflareApiShieldOperationFeatures): any;
export declare function dataCloudflareApiShieldOperationFeaturesToHclTerraform(struct?: DataCloudflareApiShieldOperationFeatures): any;
export declare class DataCloudflareApiShieldOperationFeaturesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFeatures | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFeatures | undefined);
    private _apiRouting;
    get apiRouting(): DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference;
    private _confidenceIntervals;
    get confidenceIntervals(): DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference;
    private _parameterSchemas;
    get parameterSchemas(): DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference;
    private _schemaInfo;
    get schemaInfo(): DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference;
    private _thresholds;
    get thresholds(): DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference;
}
export interface DataCloudflareApiShieldOperationFilter {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#direction DataCloudflareApiShieldOperation#direction}
    */
    readonly direction?: string;
    /**
    * Filter results to only include endpoints containing this pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#endpoint DataCloudflareApiShieldOperation#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#feature DataCloudflareApiShieldOperation#feature}
    */
    readonly feature?: string[];
    /**
    * Filter results to only include the specified hosts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#host DataCloudflareApiShieldOperation#host}
    */
    readonly host?: string[];
    /**
    * Filter results to only include the specified HTTP methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#method DataCloudflareApiShieldOperation#method}
    */
    readonly method?: string[];
    /**
    * Field to order by. When requesting a feature, the feature keys are available for ordering as well, e.g., `thresholds.suggested_threshold`.
    * Available values: "method", "host", "endpoint", "thresholds.$key".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#order DataCloudflareApiShieldOperation#order}
    */
    readonly order?: string;
}
export declare function dataCloudflareApiShieldOperationFilterToTerraform(struct?: DataCloudflareApiShieldOperationFilter | cdktf.IResolvable): any;
export declare function dataCloudflareApiShieldOperationFilterToHclTerraform(struct?: DataCloudflareApiShieldOperationFilter | cdktf.IResolvable): any;
export declare class DataCloudflareApiShieldOperationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldOperationFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareApiShieldOperationFilter | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation cloudflare_api_shield_operation}
*/
export declare class DataCloudflareApiShieldOperation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_operation";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperation to import
    * @param importFromId The id of the existing DataCloudflareApiShieldOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation cloudflare_api_shield_operation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldOperationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiShieldOperationConfig);
    get endpoint(): any;
    private _feature?;
    get feature(): string[];
    set feature(value: string[]);
    resetFeature(): void;
    get featureInput(): string[];
    private _features;
    get features(): DataCloudflareApiShieldOperationFeaturesOutputReference;
    private _filter;
    get filter(): DataCloudflareApiShieldOperationFilterOutputReference;
    putFilter(value: DataCloudflareApiShieldOperationFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get host(): any;
    get id(): any;
    get lastUpdated(): any;
    get method(): any;
    private _operationId?;
    get operationId(): string;
    set operationId(value: string);
    resetOperationId(): void;
    get operationIdInput(): string;
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
