// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareLoadBalancersResultAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
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
    // failover_across_pools - computed: true, optional: false, required: false
    get failoverAcrossPools() {
        return this.getBooleanAttribute('failover_across_pools');
    }
}
export function dataCloudflareLoadBalancersResultLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultLocationStrategyOutputReference extends cdktf.ComplexObject {
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
    // mode - computed: true, optional: false, required: false
    get mode() {
        return this.getStringAttribute('mode');
    }
    // prefer_ecs - computed: true, optional: false, required: false
    get preferEcs() {
        return this.getStringAttribute('prefer_ecs');
    }
}
export function dataCloudflareLoadBalancersResultRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultRandomSteeringOutputReference extends cdktf.ComplexObject {
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
    // default_weight - computed: true, optional: false, required: false
    get defaultWeight() {
        return this.getNumberAttribute('default_weight');
    }
    // pool_weights - computed: true, optional: false, required: false
    _poolWeights = new cdktf.NumberMap(this, "pool_weights");
    get poolWeights() {
        return this._poolWeights;
    }
}
export function dataCloudflareLoadBalancersResultRulesFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultRulesFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference extends cdktf.ComplexObject {
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
    // content_type - computed: true, optional: false, required: false
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    // location - computed: true, optional: false, required: false
    get location() {
        return this.getStringAttribute('location');
    }
    // message_body - computed: true, optional: false, required: false
    get messageBody() {
        return this.getStringAttribute('message_body');
    }
    // status_code - computed: true, optional: false, required: false
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
}
export function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
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
    // failover_across_pools - computed: true, optional: false, required: false
    get failoverAcrossPools() {
        return this.getBooleanAttribute('failover_across_pools');
    }
}
export function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
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
    // mode - computed: true, optional: false, required: false
    get mode() {
        return this.getStringAttribute('mode');
    }
    // prefer_ecs - computed: true, optional: false, required: false
    get preferEcs() {
        return this.getStringAttribute('prefer_ecs');
    }
}
export function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
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
    // default_weight - computed: true, optional: false, required: false
    get defaultWeight() {
        return this.getNumberAttribute('default_weight');
    }
    // pool_weights - computed: true, optional: false, required: false
    _poolWeights = new cdktf.NumberMap(this, "pool_weights");
    get poolWeights() {
        return this._poolWeights;
    }
}
export function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
    };
}
export function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        drain_duration: {
            value: cdktf.numberToHclTerraform(struct.drainDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._drainDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.drainDuration = this._drainDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._drainDuration = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._drainDuration = value.drainDuration;
        }
    }
    // drain_duration - computed: true, optional: true, required: false
    _drainDuration;
    get drainDuration() {
        return this.getNumberAttribute('drain_duration');
    }
    set drainDuration(value) {
        this._drainDuration = value;
    }
    resetDrainDuration() {
        this._drainDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get drainDurationInput() {
        return this._drainDuration;
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.getListAttribute('headers');
    }
    // require_all_headers - computed: true, optional: false, required: false
    get requireAllHeaders() {
        return this.getBooleanAttribute('require_all_headers');
    }
    // samesite - computed: true, optional: false, required: false
    get samesite() {
        return this.getStringAttribute('samesite');
    }
    // secure - computed: true, optional: false, required: false
    get secure() {
        return this.getStringAttribute('secure');
    }
    // zero_downtime_failover - computed: true, optional: false, required: false
    get zeroDowntimeFailover() {
        return this.getStringAttribute('zero_downtime_failover');
    }
}
export function dataCloudflareLoadBalancersResultRulesOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.countryPools),
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
        region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.regionPools),
    };
}
export function dataCloudflareLoadBalancersResultRulesOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.countryPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        region_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.regionPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareLoadBalancersResultRulesOverridesOutputReference extends cdktf.ComplexObject {
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
        if (this._countryPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryPools = this._countryPools;
        }
        if (this._popPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.popPools = this._popPools;
        }
        if (this._regionPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionPools = this._regionPools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryPools = undefined;
            this._popPools = undefined;
            this._regionPools = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryPools = value.countryPools;
            this._popPools = value.popPools;
            this._regionPools = value.regionPools;
        }
    }
    // adaptive_routing - computed: true, optional: false, required: false
    _adaptiveRouting = new DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(this, "adaptive_routing");
    get adaptiveRouting() {
        return this._adaptiveRouting;
    }
    // country_pools - computed: true, optional: true, required: false
    _countryPools;
    get countryPools() {
        return this.interpolationForAttribute('country_pools');
    }
    set countryPools(value) {
        this._countryPools = value;
    }
    resetCountryPools() {
        this._countryPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countryPoolsInput() {
        return this._countryPools;
    }
    // default_pools - computed: true, optional: false, required: false
    get defaultPools() {
        return this.getListAttribute('default_pools');
    }
    // fallback_pool - computed: true, optional: false, required: false
    get fallbackPool() {
        return this.getStringAttribute('fallback_pool');
    }
    // location_strategy - computed: true, optional: false, required: false
    _locationStrategy = new DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(this, "location_strategy");
    get locationStrategy() {
        return this._locationStrategy;
    }
    // pop_pools - computed: true, optional: true, required: false
    _popPools;
    get popPools() {
        return this.interpolationForAttribute('pop_pools');
    }
    set popPools(value) {
        this._popPools = value;
    }
    resetPopPools() {
        this._popPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get popPoolsInput() {
        return this._popPools;
    }
    // random_steering - computed: true, optional: false, required: false
    _randomSteering = new DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(this, "random_steering");
    get randomSteering() {
        return this._randomSteering;
    }
    // region_pools - computed: true, optional: true, required: false
    _regionPools;
    get regionPools() {
        return this.interpolationForAttribute('region_pools');
    }
    set regionPools(value) {
        this._regionPools = value;
    }
    resetRegionPools() {
        this._regionPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionPoolsInput() {
        return this._regionPools;
    }
    // session_affinity - computed: true, optional: false, required: false
    get sessionAffinity() {
        return this.getStringAttribute('session_affinity');
    }
    // session_affinity_attributes - computed: true, optional: false, required: false
    _sessionAffinityAttributes = new DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
    get sessionAffinityAttributes() {
        return this._sessionAffinityAttributes;
    }
    // session_affinity_ttl - computed: true, optional: false, required: false
    get sessionAffinityTtl() {
        return this.getNumberAttribute('session_affinity_ttl');
    }
    // steering_policy - computed: true, optional: false, required: false
    get steeringPolicy() {
        return this.getStringAttribute('steering_policy');
    }
    // ttl - computed: true, optional: false, required: false
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
}
export function dataCloudflareLoadBalancersResultRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancersResultRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancersResultRulesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // condition - computed: true, optional: false, required: false
    get condition() {
        return this.getStringAttribute('condition');
    }
    // disabled - computed: true, optional: false, required: false
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    // fixed_response - computed: true, optional: false, required: false
    _fixedResponse = new DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(this, "fixed_response");
    get fixedResponse() {
        return this._fixedResponse;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // overrides - computed: true, optional: false, required: false
    _overrides = new DataCloudflareLoadBalancersResultRulesOverridesOutputReference(this, "overrides");
    get overrides() {
        return this._overrides;
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // terminates - computed: true, optional: false, required: false
    get terminates() {
        return this.getBooleanAttribute('terminates');
    }
}
export class DataCloudflareLoadBalancersResultRulesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareLoadBalancersResultRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareLoadBalancersResultSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
    };
}
export function dataCloudflareLoadBalancersResultSessionAffinityAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        drain_duration: {
            value: cdktf.numberToHclTerraform(struct.drainDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._drainDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.drainDuration = this._drainDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._drainDuration = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._drainDuration = value.drainDuration;
        }
    }
    // drain_duration - computed: true, optional: true, required: false
    _drainDuration;
    get drainDuration() {
        return this.getNumberAttribute('drain_duration');
    }
    set drainDuration(value) {
        this._drainDuration = value;
    }
    resetDrainDuration() {
        this._drainDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get drainDurationInput() {
        return this._drainDuration;
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.getListAttribute('headers');
    }
    // require_all_headers - computed: true, optional: false, required: false
    get requireAllHeaders() {
        return this.getBooleanAttribute('require_all_headers');
    }
    // samesite - computed: true, optional: false, required: false
    get samesite() {
        return this.getStringAttribute('samesite');
    }
    // secure - computed: true, optional: false, required: false
    get secure() {
        return this.getStringAttribute('secure');
    }
    // zero_downtime_failover - computed: true, optional: false, required: false
    get zeroDowntimeFailover() {
        return this.getStringAttribute('zero_downtime_failover');
    }
}
export function dataCloudflareLoadBalancersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.countryPools),
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
        region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.regionPools),
    };
}
export function dataCloudflareLoadBalancersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.countryPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        region_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.regionPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareLoadBalancersResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryPools = this._countryPools;
        }
        if (this._popPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.popPools = this._popPools;
        }
        if (this._regionPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionPools = this._regionPools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryPools = undefined;
            this._popPools = undefined;
            this._regionPools = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryPools = value.countryPools;
            this._popPools = value.popPools;
            this._regionPools = value.regionPools;
        }
    }
    // adaptive_routing - computed: true, optional: false, required: false
    _adaptiveRouting = new DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(this, "adaptive_routing");
    get adaptiveRouting() {
        return this._adaptiveRouting;
    }
    // country_pools - computed: true, optional: true, required: false
    _countryPools;
    get countryPools() {
        return this.interpolationForAttribute('country_pools');
    }
    set countryPools(value) {
        this._countryPools = value;
    }
    resetCountryPools() {
        this._countryPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countryPoolsInput() {
        return this._countryPools;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // default_pools - computed: true, optional: false, required: false
    get defaultPools() {
        return this.getListAttribute('default_pools');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // fallback_pool - computed: true, optional: false, required: false
    get fallbackPool() {
        return this.getStringAttribute('fallback_pool');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // location_strategy - computed: true, optional: false, required: false
    _locationStrategy = new DataCloudflareLoadBalancersResultLocationStrategyOutputReference(this, "location_strategy");
    get locationStrategy() {
        return this._locationStrategy;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // networks - computed: true, optional: false, required: false
    get networks() {
        return this.getListAttribute('networks');
    }
    // pop_pools - computed: true, optional: true, required: false
    _popPools;
    get popPools() {
        return this.interpolationForAttribute('pop_pools');
    }
    set popPools(value) {
        this._popPools = value;
    }
    resetPopPools() {
        this._popPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get popPoolsInput() {
        return this._popPools;
    }
    // proxied - computed: true, optional: false, required: false
    get proxied() {
        return this.getBooleanAttribute('proxied');
    }
    // random_steering - computed: true, optional: false, required: false
    _randomSteering = new DataCloudflareLoadBalancersResultRandomSteeringOutputReference(this, "random_steering");
    get randomSteering() {
        return this._randomSteering;
    }
    // region_pools - computed: true, optional: true, required: false
    _regionPools;
    get regionPools() {
        return this.interpolationForAttribute('region_pools');
    }
    set regionPools(value) {
        this._regionPools = value;
    }
    resetRegionPools() {
        this._regionPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionPoolsInput() {
        return this._regionPools;
    }
    // rules - computed: true, optional: false, required: false
    _rules = new DataCloudflareLoadBalancersResultRulesList(this, "rules", false);
    get rules() {
        return this._rules;
    }
    // session_affinity - computed: true, optional: false, required: false
    get sessionAffinity() {
        return this.getStringAttribute('session_affinity');
    }
    // session_affinity_attributes - computed: true, optional: false, required: false
    _sessionAffinityAttributes = new DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
    get sessionAffinityAttributes() {
        return this._sessionAffinityAttributes;
    }
    // session_affinity_ttl - computed: true, optional: false, required: false
    get sessionAffinityTtl() {
        return this.getNumberAttribute('session_affinity_ttl');
    }
    // steering_policy - computed: true, optional: false, required: false
    get steeringPolicy() {
        return this.getStringAttribute('steering_policy');
    }
    // ttl - computed: true, optional: false, required: false
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    // zone_name - computed: true, optional: false, required: false
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
}
export class DataCloudflareLoadBalancersResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareLoadBalancersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers cloudflare_load_balancers}
*/
export class DataCloudflareLoadBalancers extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_load_balancers";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancers to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancers", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers cloudflare_load_balancers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancersConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_load_balancers',
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
        this._maxItems = config.maxItems;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareLoadBalancersResultList(this, "result", false);
    get result() {
        return this._result;
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
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
