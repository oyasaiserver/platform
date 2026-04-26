// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareLoadBalancerAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerLocationStrategyOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRulesFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerRulesFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct) {
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
export function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct) {
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
export class DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareLoadBalancerRulesOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
    };
}
export function dataCloudflareLoadBalancerRulesOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareLoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
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
        if (this._popPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.popPools = this._popPools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._popPools = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._popPools = value.popPools;
        }
    }
    // adaptive_routing - computed: true, optional: false, required: false
    _adaptiveRouting = new DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference(this, "adaptive_routing");
    get adaptiveRouting() {
        return this._adaptiveRouting;
    }
    // country_pools - computed: true, optional: false, required: false
    _countryPools = new cdktf.StringListMap(this, "country_pools");
    get countryPools() {
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
    _locationStrategy = new DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference(this, "location_strategy");
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
    _randomSteering = new DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference(this, "random_steering");
    get randomSteering() {
        return this._randomSteering;
    }
    // region_pools - computed: true, optional: false, required: false
    _regionPools = new cdktf.StringListMap(this, "region_pools");
    get regionPools() {
        return this._regionPools;
    }
    // session_affinity - computed: true, optional: false, required: false
    get sessionAffinity() {
        return this.getStringAttribute('session_affinity');
    }
    // session_affinity_attributes - computed: true, optional: false, required: false
    _sessionAffinityAttributes = new DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
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
export function dataCloudflareLoadBalancerRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLoadBalancerRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLoadBalancerRulesOutputReference extends cdktf.ComplexObject {
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
    _fixedResponse = new DataCloudflareLoadBalancerRulesFixedResponseOutputReference(this, "fixed_response");
    get fixedResponse() {
        return this._fixedResponse;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // overrides - computed: true, optional: false, required: false
    _overrides = new DataCloudflareLoadBalancerRulesOverridesOutputReference(this, "overrides");
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
export class DataCloudflareLoadBalancerRulesList extends cdktf.ComplexList {
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
        return new DataCloudflareLoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareLoadBalancerSessionAffinityAttributesToTerraform(struct) {
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
export function dataCloudflareLoadBalancerSessionAffinityAttributesToHclTerraform(struct) {
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
export class DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer cloudflare_load_balancer}
*/
export class DataCloudflareLoadBalancer extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_load_balancer";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancer to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancer to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer cloudflare_load_balancer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_load_balancer',
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
        this._loadBalancerId = config.loadBalancerId;
        this._popPools = config.popPools;
        this._regionPools = config.regionPools;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // adaptive_routing - computed: true, optional: false, required: false
    _adaptiveRouting = new DataCloudflareLoadBalancerAdaptiveRoutingOutputReference(this, "adaptive_routing");
    get adaptiveRouting() {
        return this._adaptiveRouting;
    }
    // country_pools - computed: true, optional: false, required: false
    _countryPools = new cdktf.StringListMap(this, "country_pools");
    get countryPools() {
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
    // load_balancer_id - computed: false, optional: false, required: true
    _loadBalancerId;
    get loadBalancerId() {
        return this.getStringAttribute('load_balancer_id');
    }
    set loadBalancerId(value) {
        this._loadBalancerId = value;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerIdInput() {
        return this._loadBalancerId;
    }
    // location_strategy - computed: true, optional: false, required: false
    _locationStrategy = new DataCloudflareLoadBalancerLocationStrategyOutputReference(this, "location_strategy");
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
    _randomSteering = new DataCloudflareLoadBalancerRandomSteeringOutputReference(this, "random_steering");
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
    _rules = new DataCloudflareLoadBalancerRulesList(this, "rules", false);
    get rules() {
        return this._rules;
    }
    // session_affinity - computed: true, optional: false, required: false
    get sessionAffinity() {
        return this.getStringAttribute('session_affinity');
    }
    // session_affinity_attributes - computed: true, optional: false, required: false
    _sessionAffinityAttributes = new DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
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
            load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
            pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._popPools),
            region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._regionPools),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            load_balancer_id: {
                value: cdktf.stringToHclTerraform(this._loadBalancerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pop_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._popPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            region_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._regionPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
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
