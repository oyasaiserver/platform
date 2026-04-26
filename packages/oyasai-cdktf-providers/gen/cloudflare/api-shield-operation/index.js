// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function apiShieldOperationFeaturesApiRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesApiRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesApiRoutingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // route - computed: true, optional: false, required: false
    get route() {
        return this.getStringAttribute('route');
    }
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // lower - computed: true, optional: false, required: false
    get lower() {
        return this.getNumberAttribute('lower');
    }
    // upper - computed: true, optional: false, required: false
    get upper() {
        return this.getNumberAttribute('upper');
    }
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // lower - computed: true, optional: false, required: false
    get lower() {
        return this.getNumberAttribute('lower');
    }
    // upper - computed: true, optional: false, required: false
    get upper() {
        return this.getNumberAttribute('upper');
    }
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // lower - computed: true, optional: false, required: false
    get lower() {
        return this.getNumberAttribute('lower');
    }
    // upper - computed: true, optional: false, required: false
    get upper() {
        return this.getNumberAttribute('upper');
    }
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // p90 - computed: true, optional: false, required: false
    _p90 = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(this, "p90");
    get p90() {
        return this._p90;
    }
    // p95 - computed: true, optional: false, required: false
    _p95 = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(this, "p95");
    get p95() {
        return this._p95;
    }
    // p99 - computed: true, optional: false, required: false
    _p99 = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(this, "p99");
    get p99() {
        return this._p99;
    }
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // confidence_intervals - computed: true, optional: false, required: false
    _confidenceIntervals = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(this, "confidence_intervals");
    get confidenceIntervals() {
        return this._confidenceIntervals;
    }
    // mean - computed: true, optional: false, required: false
    get mean() {
        return this.getNumberAttribute('mean');
    }
}
export function apiShieldOperationFeaturesConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesConfidenceIntervalsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // suggested_threshold - computed: true, optional: false, required: false
    _suggestedThreshold = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(this, "suggested_threshold");
    get suggestedThreshold() {
        return this._suggestedThreshold;
    }
}
export function apiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.getListAttribute('parameters');
    }
    // responses - computed: true, optional: false, required: false
    get responses() {
        return this.getStringAttribute('responses');
    }
}
export function apiShieldOperationFeaturesParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesParameterSchemasOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // parameter_schemas - computed: true, optional: false, required: false
    _parameterSchemas = new ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(this, "parameter_schemas");
    get parameterSchemas() {
        return this._parameterSchemas;
    }
}
export function apiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_learned - computed: true, optional: false, required: false
    get isLearned() {
        return this.getBooleanAttribute('is_learned');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export function apiShieldOperationFeaturesSchemaInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesSchemaInfoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesSchemaInfoOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // active_schema - computed: true, optional: false, required: false
    _activeSchema = new ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(this, "active_schema");
    get activeSchema() {
        return this._activeSchema;
    }
    // learned_available - computed: true, optional: false, required: false
    get learnedAvailable() {
        return this.getBooleanAttribute('learned_available');
    }
    // mitigation_action - computed: true, optional: false, required: false
    get mitigationAction() {
        return this.getStringAttribute('mitigation_action');
    }
}
export function apiShieldOperationFeaturesThresholdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesThresholdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesThresholdsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // auth_id_tokens - computed: true, optional: false, required: false
    get authIdTokens() {
        return this.getNumberAttribute('auth_id_tokens');
    }
    // data_points - computed: true, optional: false, required: false
    get dataPoints() {
        return this.getNumberAttribute('data_points');
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // p50 - computed: true, optional: false, required: false
    get p50() {
        return this.getNumberAttribute('p50');
    }
    // p90 - computed: true, optional: false, required: false
    get p90() {
        return this.getNumberAttribute('p90');
    }
    // p99 - computed: true, optional: false, required: false
    get p99() {
        return this.getNumberAttribute('p99');
    }
    // period_seconds - computed: true, optional: false, required: false
    get periodSeconds() {
        return this.getNumberAttribute('period_seconds');
    }
    // requests - computed: true, optional: false, required: false
    get requests() {
        return this.getNumberAttribute('requests');
    }
    // suggested_threshold - computed: true, optional: false, required: false
    get suggestedThreshold() {
        return this.getNumberAttribute('suggested_threshold');
    }
}
export function apiShieldOperationFeaturesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function apiShieldOperationFeaturesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ApiShieldOperationFeaturesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // api_routing - computed: true, optional: false, required: false
    _apiRouting = new ApiShieldOperationFeaturesApiRoutingOutputReference(this, "api_routing");
    get apiRouting() {
        return this._apiRouting;
    }
    // confidence_intervals - computed: true, optional: false, required: false
    _confidenceIntervals = new ApiShieldOperationFeaturesConfidenceIntervalsOutputReference(this, "confidence_intervals");
    get confidenceIntervals() {
        return this._confidenceIntervals;
    }
    // parameter_schemas - computed: true, optional: false, required: false
    _parameterSchemas = new ApiShieldOperationFeaturesParameterSchemasOutputReference(this, "parameter_schemas");
    get parameterSchemas() {
        return this._parameterSchemas;
    }
    // schema_info - computed: true, optional: false, required: false
    _schemaInfo = new ApiShieldOperationFeaturesSchemaInfoOutputReference(this, "schema_info");
    get schemaInfo() {
        return this._schemaInfo;
    }
    // thresholds - computed: true, optional: false, required: false
    _thresholds = new ApiShieldOperationFeaturesThresholdsOutputReference(this, "thresholds");
    get thresholds() {
        return this._thresholds;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation cloudflare_api_shield_operation}
*/
export class ApiShieldOperation extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_api_shield_operation";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiShieldOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldOperation to import
    * @param importFromId The id of the existing ApiShieldOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldOperation to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operation", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation cloudflare_api_shield_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldOperationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_api_shield_operation',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._endpoint = config.endpoint;
        this._host = config.host;
        this._method = config.method;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // endpoint - computed: false, optional: false, required: true
    _endpoint;
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    set endpoint(value) {
        this._endpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointInput() {
        return this._endpoint;
    }
    // features - computed: true, optional: false, required: false
    _features = new ApiShieldOperationFeaturesOutputReference(this, "features");
    get features() {
        return this._features;
    }
    // host - computed: false, optional: false, required: true
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // method - computed: false, optional: false, required: true
    _method;
    get method() {
        return this.getStringAttribute('method');
    }
    set method(value) {
        this._method = value;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method;
    }
    // operation_id - computed: true, optional: false, required: false
    get operationId() {
        return this.getStringAttribute('operation_id');
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            endpoint: cdktf.stringToTerraform(this._endpoint),
            host: cdktf.stringToTerraform(this._host),
            method: cdktf.stringToTerraform(this._method),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            method: {
                value: cdktf.stringToHclTerraform(this._method),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
