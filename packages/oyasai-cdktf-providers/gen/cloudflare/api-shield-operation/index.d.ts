import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiShieldOperationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-normalized upon insertion. See: https://developers.cloudflare.com/rules/normalization/how-it-works/.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#endpoint ApiShieldOperation#endpoint}
    */
    readonly endpoint: string;
    /**
    * RFC3986-compliant host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#host ApiShieldOperation#host}
    */
    readonly host: string;
    /**
    * The HTTP method used to access the endpoint.
    * Available values: "GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE", "CONNECT", "PATCH", "TRACE".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#method ApiShieldOperation#method}
    */
    readonly method: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#zone_id ApiShieldOperation#zone_id}
    */
    readonly zoneId?: string;
}
export interface ApiShieldOperationFeaturesApiRouting {
}
export declare function apiShieldOperationFeaturesApiRoutingToTerraform(struct?: ApiShieldOperationFeaturesApiRouting): any;
export declare function apiShieldOperationFeaturesApiRoutingToHclTerraform(struct?: ApiShieldOperationFeaturesApiRouting): any;
export declare class ApiShieldOperationFeaturesApiRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesApiRouting | undefined;
    set internalValue(value: ApiShieldOperationFeaturesApiRouting | undefined);
    get lastUpdated(): any;
    get route(): any;
}
export interface ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 {
}
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any;
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90): any;
export declare class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined;
    set internalValue(value: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 {
}
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any;
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95): any;
export declare class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined;
    set internalValue(value: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 {
}
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any;
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99): any;
export declare class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined;
    set internalValue(value: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 | undefined);
    get lower(): any;
    get upper(): any;
}
export interface ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals {
}
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any;
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals): any;
export declare class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined;
    set internalValue(value: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals | undefined);
    private _p90;
    get p90(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
    private _p95;
    get p95(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
    private _p99;
    get p99(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
}
export interface ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold {
}
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold): any;
export declare function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold): any;
export declare class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold | undefined;
    set internalValue(value: ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold | undefined);
    private _confidenceIntervals;
    get confidenceIntervals(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
    get mean(): any;
}
export interface ApiShieldOperationFeaturesConfidenceIntervals {
}
export declare function apiShieldOperationFeaturesConfidenceIntervalsToTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervals): any;
export declare function apiShieldOperationFeaturesConfidenceIntervalsToHclTerraform(struct?: ApiShieldOperationFeaturesConfidenceIntervals): any;
export declare class ApiShieldOperationFeaturesConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesConfidenceIntervals | undefined;
    set internalValue(value: ApiShieldOperationFeaturesConfidenceIntervals | undefined);
    get lastUpdated(): any;
    private _suggestedThreshold;
    get suggestedThreshold(): ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
}
export interface ApiShieldOperationFeaturesParameterSchemasParameterSchemas {
}
export declare function apiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform(struct?: ApiShieldOperationFeaturesParameterSchemasParameterSchemas): any;
export declare function apiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform(struct?: ApiShieldOperationFeaturesParameterSchemasParameterSchemas): any;
export declare class ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesParameterSchemasParameterSchemas | undefined;
    set internalValue(value: ApiShieldOperationFeaturesParameterSchemasParameterSchemas | undefined);
    get parameters(): any;
    get responses(): any;
}
export interface ApiShieldOperationFeaturesParameterSchemas {
}
export declare function apiShieldOperationFeaturesParameterSchemasToTerraform(struct?: ApiShieldOperationFeaturesParameterSchemas): any;
export declare function apiShieldOperationFeaturesParameterSchemasToHclTerraform(struct?: ApiShieldOperationFeaturesParameterSchemas): any;
export declare class ApiShieldOperationFeaturesParameterSchemasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesParameterSchemas | undefined;
    set internalValue(value: ApiShieldOperationFeaturesParameterSchemas | undefined);
    get lastUpdated(): any;
    private _parameterSchemas;
    get parameterSchemas(): ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference;
}
export interface ApiShieldOperationFeaturesSchemaInfoActiveSchema {
}
export declare function apiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform(struct?: ApiShieldOperationFeaturesSchemaInfoActiveSchema): any;
export declare function apiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform(struct?: ApiShieldOperationFeaturesSchemaInfoActiveSchema): any;
export declare class ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesSchemaInfoActiveSchema | undefined;
    set internalValue(value: ApiShieldOperationFeaturesSchemaInfoActiveSchema | undefined);
    get createdAt(): any;
    get id(): any;
    get isLearned(): any;
    get name(): any;
}
export interface ApiShieldOperationFeaturesSchemaInfo {
}
export declare function apiShieldOperationFeaturesSchemaInfoToTerraform(struct?: ApiShieldOperationFeaturesSchemaInfo): any;
export declare function apiShieldOperationFeaturesSchemaInfoToHclTerraform(struct?: ApiShieldOperationFeaturesSchemaInfo): any;
export declare class ApiShieldOperationFeaturesSchemaInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesSchemaInfo | undefined;
    set internalValue(value: ApiShieldOperationFeaturesSchemaInfo | undefined);
    private _activeSchema;
    get activeSchema(): ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference;
    get learnedAvailable(): any;
    get mitigationAction(): any;
}
export interface ApiShieldOperationFeaturesThresholds {
}
export declare function apiShieldOperationFeaturesThresholdsToTerraform(struct?: ApiShieldOperationFeaturesThresholds): any;
export declare function apiShieldOperationFeaturesThresholdsToHclTerraform(struct?: ApiShieldOperationFeaturesThresholds): any;
export declare class ApiShieldOperationFeaturesThresholdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeaturesThresholds | undefined;
    set internalValue(value: ApiShieldOperationFeaturesThresholds | undefined);
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
export interface ApiShieldOperationFeatures {
}
export declare function apiShieldOperationFeaturesToTerraform(struct?: ApiShieldOperationFeatures): any;
export declare function apiShieldOperationFeaturesToHclTerraform(struct?: ApiShieldOperationFeatures): any;
export declare class ApiShieldOperationFeaturesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldOperationFeatures | undefined;
    set internalValue(value: ApiShieldOperationFeatures | undefined);
    private _apiRouting;
    get apiRouting(): ApiShieldOperationFeaturesApiRoutingOutputReference;
    private _confidenceIntervals;
    get confidenceIntervals(): ApiShieldOperationFeaturesConfidenceIntervalsOutputReference;
    private _parameterSchemas;
    get parameterSchemas(): ApiShieldOperationFeaturesParameterSchemasOutputReference;
    private _schemaInfo;
    get schemaInfo(): ApiShieldOperationFeaturesSchemaInfoOutputReference;
    private _thresholds;
    get thresholds(): ApiShieldOperationFeaturesThresholdsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation cloudflare_api_shield_operation}
*/
export declare class ApiShieldOperation extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_shield_operation";
    /**
    * Generates CDKTF code for importing a ApiShieldOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldOperation to import
    * @param importFromId The id of the existing ApiShieldOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldOperation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation cloudflare_api_shield_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldOperationConfig
    */
    constructor(scope: Construct, id: string, config: ApiShieldOperationConfig);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string;
    private _features;
    get features(): ApiShieldOperationFeaturesOutputReference;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    get id(): any;
    get lastUpdated(): any;
    private _method?;
    get method(): string;
    set method(value: string);
    get methodInput(): string;
    get operationId(): any;
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
