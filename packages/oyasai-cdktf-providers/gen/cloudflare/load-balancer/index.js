// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function loadBalancerAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        failover_across_pools: cdktf.booleanToTerraform(struct.failoverAcrossPools),
    };
}
export function loadBalancerAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        failover_across_pools: {
            value: cdktf.booleanToHclTerraform(struct.failoverAcrossPools),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._failoverAcrossPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failoverAcrossPools = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failoverAcrossPools = value.failoverAcrossPools;
        }
    }
    // failover_across_pools - computed: true, optional: true, required: false
    _failoverAcrossPools;
    get failoverAcrossPools() {
        return this.getBooleanAttribute('failover_across_pools');
    }
    set failoverAcrossPools(value) {
        this._failoverAcrossPools = value;
    }
    resetFailoverAcrossPools() {
        this._failoverAcrossPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failoverAcrossPoolsInput() {
        return this._failoverAcrossPools;
    }
}
export function loadBalancerLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        prefer_ecs: cdktf.stringToTerraform(struct.preferEcs),
    };
}
export function loadBalancerLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefer_ecs: {
            value: cdktf.stringToHclTerraform(struct.preferEcs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerLocationStrategyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._preferEcs !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferEcs = this._preferEcs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._preferEcs = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._preferEcs = value.preferEcs;
        }
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // prefer_ecs - computed: true, optional: true, required: false
    _preferEcs;
    get preferEcs() {
        return this.getStringAttribute('prefer_ecs');
    }
    set preferEcs(value) {
        this._preferEcs = value;
    }
    resetPreferEcs() {
        this._preferEcs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferEcsInput() {
        return this._preferEcs;
    }
}
export function loadBalancerRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_weight: cdktf.numberToTerraform(struct.defaultWeight),
        pool_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct.poolWeights),
    };
}
export function loadBalancerRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_weight: {
            value: cdktf.numberToHclTerraform(struct.defaultWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pool_weights: {
            value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct.poolWeights),
            isBlock: false,
            type: "map",
            storageClassType: "numberMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._defaultWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultWeight = this._defaultWeight;
        }
        if (this._poolWeights !== undefined) {
            hasAnyValues = true;
            internalValueResult.poolWeights = this._poolWeights;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultWeight = undefined;
            this._poolWeights = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultWeight = value.defaultWeight;
            this._poolWeights = value.poolWeights;
        }
    }
    // default_weight - computed: true, optional: true, required: false
    _defaultWeight;
    get defaultWeight() {
        return this.getNumberAttribute('default_weight');
    }
    set defaultWeight(value) {
        this._defaultWeight = value;
    }
    resetDefaultWeight() {
        this._defaultWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultWeightInput() {
        return this._defaultWeight;
    }
    // pool_weights - computed: true, optional: true, required: false
    _poolWeights;
    get poolWeights() {
        return this.getNumberMapAttribute('pool_weights');
    }
    set poolWeights(value) {
        this._poolWeights = value;
    }
    resetPoolWeights() {
        this._poolWeights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolWeightsInput() {
        return this._poolWeights;
    }
}
export function loadBalancerRulesFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        location: cdktf.stringToTerraform(struct.location),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.numberToTerraform(struct.statusCode),
    };
}
export function loadBalancerRulesFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location: {
            value: cdktf.stringToHclTerraform(struct.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_body: {
            value: cdktf.stringToHclTerraform(struct.messageBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._messageBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageBody = this._messageBody;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._location = undefined;
            this._messageBody = undefined;
            this._statusCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._location = value.location;
            this._messageBody = value.messageBody;
            this._statusCode = value.statusCode;
        }
    }
    // content_type - computed: true, optional: true, required: false
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // location - computed: true, optional: true, required: false
    _location;
    get location() {
        return this.getStringAttribute('location');
    }
    set location(value) {
        this._location = value;
    }
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationInput() {
        return this._location;
    }
    // message_body - computed: true, optional: true, required: false
    _messageBody;
    get messageBody() {
        return this.getStringAttribute('message_body');
    }
    set messageBody(value) {
        this._messageBody = value;
    }
    resetMessageBody() {
        this._messageBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageBodyInput() {
        return this._messageBody;
    }
    // status_code - computed: true, optional: true, required: false
    _statusCode;
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
}
export function loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        failover_across_pools: cdktf.booleanToTerraform(struct.failoverAcrossPools),
    };
}
export function loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        failover_across_pools: {
            value: cdktf.booleanToHclTerraform(struct.failoverAcrossPools),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._failoverAcrossPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failoverAcrossPools = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failoverAcrossPools = value.failoverAcrossPools;
        }
    }
    // failover_across_pools - computed: true, optional: true, required: false
    _failoverAcrossPools;
    get failoverAcrossPools() {
        return this.getBooleanAttribute('failover_across_pools');
    }
    set failoverAcrossPools(value) {
        this._failoverAcrossPools = value;
    }
    resetFailoverAcrossPools() {
        this._failoverAcrossPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failoverAcrossPoolsInput() {
        return this._failoverAcrossPools;
    }
}
export function loadBalancerRulesOverridesLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        prefer_ecs: cdktf.stringToTerraform(struct.preferEcs),
    };
}
export function loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefer_ecs: {
            value: cdktf.stringToHclTerraform(struct.preferEcs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._preferEcs !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferEcs = this._preferEcs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._preferEcs = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._preferEcs = value.preferEcs;
        }
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // prefer_ecs - computed: true, optional: true, required: false
    _preferEcs;
    get preferEcs() {
        return this.getStringAttribute('prefer_ecs');
    }
    set preferEcs(value) {
        this._preferEcs = value;
    }
    resetPreferEcs() {
        this._preferEcs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferEcsInput() {
        return this._preferEcs;
    }
}
export function loadBalancerRulesOverridesRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_weight: cdktf.numberToTerraform(struct.defaultWeight),
        pool_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct.poolWeights),
    };
}
export function loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_weight: {
            value: cdktf.numberToHclTerraform(struct.defaultWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pool_weights: {
            value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct.poolWeights),
            isBlock: false,
            type: "map",
            storageClassType: "numberMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._defaultWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultWeight = this._defaultWeight;
        }
        if (this._poolWeights !== undefined) {
            hasAnyValues = true;
            internalValueResult.poolWeights = this._poolWeights;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultWeight = undefined;
            this._poolWeights = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultWeight = value.defaultWeight;
            this._poolWeights = value.poolWeights;
        }
    }
    // default_weight - computed: true, optional: true, required: false
    _defaultWeight;
    get defaultWeight() {
        return this.getNumberAttribute('default_weight');
    }
    set defaultWeight(value) {
        this._defaultWeight = value;
    }
    resetDefaultWeight() {
        this._defaultWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultWeightInput() {
        return this._defaultWeight;
    }
    // pool_weights - computed: true, optional: true, required: false
    _poolWeights;
    get poolWeights() {
        return this.getNumberMapAttribute('pool_weights');
    }
    set poolWeights(value) {
        this._poolWeights = value;
    }
    resetPoolWeights() {
        this._poolWeights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolWeightsInput() {
        return this._poolWeights;
    }
}
export function loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
        headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.headers),
        require_all_headers: cdktf.booleanToTerraform(struct.requireAllHeaders),
        samesite: cdktf.stringToTerraform(struct.samesite),
        secure: cdktf.stringToTerraform(struct.secure),
        zero_downtime_failover: cdktf.stringToTerraform(struct.zeroDowntimeFailover),
    };
}
export function loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct) {
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
        headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        require_all_headers: {
            value: cdktf.booleanToHclTerraform(struct.requireAllHeaders),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        samesite: {
            value: cdktf.stringToHclTerraform(struct.samesite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secure: {
            value: cdktf.stringToHclTerraform(struct.secure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zero_downtime_failover: {
            value: cdktf.stringToHclTerraform(struct.zeroDowntimeFailover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._drainDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.drainDuration = this._drainDuration;
        }
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._requireAllHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireAllHeaders = this._requireAllHeaders;
        }
        if (this._samesite !== undefined) {
            hasAnyValues = true;
            internalValueResult.samesite = this._samesite;
        }
        if (this._secure !== undefined) {
            hasAnyValues = true;
            internalValueResult.secure = this._secure;
        }
        if (this._zeroDowntimeFailover !== undefined) {
            hasAnyValues = true;
            internalValueResult.zeroDowntimeFailover = this._zeroDowntimeFailover;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._drainDuration = undefined;
            this._headers = undefined;
            this._requireAllHeaders = undefined;
            this._samesite = undefined;
            this._secure = undefined;
            this._zeroDowntimeFailover = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._drainDuration = value.drainDuration;
            this._headers = value.headers;
            this._requireAllHeaders = value.requireAllHeaders;
            this._samesite = value.samesite;
            this._secure = value.secure;
            this._zeroDowntimeFailover = value.zeroDowntimeFailover;
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
    // headers - computed: true, optional: true, required: false
    _headers;
    get headers() {
        return this.getListAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // require_all_headers - computed: true, optional: true, required: false
    _requireAllHeaders;
    get requireAllHeaders() {
        return this.getBooleanAttribute('require_all_headers');
    }
    set requireAllHeaders(value) {
        this._requireAllHeaders = value;
    }
    resetRequireAllHeaders() {
        this._requireAllHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireAllHeadersInput() {
        return this._requireAllHeaders;
    }
    // samesite - computed: true, optional: true, required: false
    _samesite;
    get samesite() {
        return this.getStringAttribute('samesite');
    }
    set samesite(value) {
        this._samesite = value;
    }
    resetSamesite() {
        this._samesite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samesiteInput() {
        return this._samesite;
    }
    // secure - computed: true, optional: true, required: false
    _secure;
    get secure() {
        return this.getStringAttribute('secure');
    }
    set secure(value) {
        this._secure = value;
    }
    resetSecure() {
        this._secure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secureInput() {
        return this._secure;
    }
    // zero_downtime_failover - computed: true, optional: true, required: false
    _zeroDowntimeFailover;
    get zeroDowntimeFailover() {
        return this.getStringAttribute('zero_downtime_failover');
    }
    set zeroDowntimeFailover(value) {
        this._zeroDowntimeFailover = value;
    }
    resetZeroDowntimeFailover() {
        this._zeroDowntimeFailover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zeroDowntimeFailoverInput() {
        return this._zeroDowntimeFailover;
    }
}
export function loadBalancerRulesOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        adaptive_routing: loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct.adaptiveRouting),
        country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.countryPools),
        default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.defaultPools),
        fallback_pool: cdktf.stringToTerraform(struct.fallbackPool),
        location_strategy: loadBalancerRulesOverridesLocationStrategyToTerraform(struct.locationStrategy),
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
        random_steering: loadBalancerRulesOverridesRandomSteeringToTerraform(struct.randomSteering),
        region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.regionPools),
        session_affinity: cdktf.stringToTerraform(struct.sessionAffinity),
        session_affinity_attributes: loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct.sessionAffinityAttributes),
        session_affinity_ttl: cdktf.numberToTerraform(struct.sessionAffinityTtl),
        steering_policy: cdktf.stringToTerraform(struct.steeringPolicy),
        ttl: cdktf.numberToTerraform(struct.ttl),
    };
}
export function loadBalancerRulesOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        adaptive_routing: {
            value: loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct.adaptiveRouting),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesAdaptiveRouting",
        },
        country_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.countryPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        default_pools: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.defaultPools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        fallback_pool: {
            value: cdktf.stringToHclTerraform(struct.fallbackPool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location_strategy: {
            value: loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct.locationStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesLocationStrategy",
        },
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        random_steering: {
            value: loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct.randomSteering),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesRandomSteering",
        },
        region_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.regionPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        session_affinity: {
            value: cdktf.stringToHclTerraform(struct.sessionAffinity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_affinity_attributes: {
            value: loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct.sessionAffinityAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesSessionAffinityAttributes",
        },
        session_affinity_ttl: {
            value: cdktf.numberToHclTerraform(struct.sessionAffinityTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        steering_policy: {
            value: cdktf.stringToHclTerraform(struct.steeringPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._adaptiveRouting?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.adaptiveRouting = this._adaptiveRouting?.internalValue;
        }
        if (this._countryPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryPools = this._countryPools;
        }
        if (this._defaultPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultPools = this._defaultPools;
        }
        if (this._fallbackPool !== undefined) {
            hasAnyValues = true;
            internalValueResult.fallbackPool = this._fallbackPool;
        }
        if (this._locationStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationStrategy = this._locationStrategy?.internalValue;
        }
        if (this._popPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.popPools = this._popPools;
        }
        if (this._randomSteering?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.randomSteering = this._randomSteering?.internalValue;
        }
        if (this._regionPools !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionPools = this._regionPools;
        }
        if (this._sessionAffinity !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionAffinity = this._sessionAffinity;
        }
        if (this._sessionAffinityAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionAffinityAttributes = this._sessionAffinityAttributes?.internalValue;
        }
        if (this._sessionAffinityTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionAffinityTtl = this._sessionAffinityTtl;
        }
        if (this._steeringPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.steeringPolicy = this._steeringPolicy;
        }
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adaptiveRouting.internalValue = undefined;
            this._countryPools = undefined;
            this._defaultPools = undefined;
            this._fallbackPool = undefined;
            this._locationStrategy.internalValue = undefined;
            this._popPools = undefined;
            this._randomSteering.internalValue = undefined;
            this._regionPools = undefined;
            this._sessionAffinity = undefined;
            this._sessionAffinityAttributes.internalValue = undefined;
            this._sessionAffinityTtl = undefined;
            this._steeringPolicy = undefined;
            this._ttl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adaptiveRouting.internalValue = value.adaptiveRouting;
            this._countryPools = value.countryPools;
            this._defaultPools = value.defaultPools;
            this._fallbackPool = value.fallbackPool;
            this._locationStrategy.internalValue = value.locationStrategy;
            this._popPools = value.popPools;
            this._randomSteering.internalValue = value.randomSteering;
            this._regionPools = value.regionPools;
            this._sessionAffinity = value.sessionAffinity;
            this._sessionAffinityAttributes.internalValue = value.sessionAffinityAttributes;
            this._sessionAffinityTtl = value.sessionAffinityTtl;
            this._steeringPolicy = value.steeringPolicy;
            this._ttl = value.ttl;
        }
    }
    // adaptive_routing - computed: true, optional: true, required: false
    _adaptiveRouting = new LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(this, "adaptive_routing");
    get adaptiveRouting() {
        return this._adaptiveRouting;
    }
    putAdaptiveRouting(value) {
        this._adaptiveRouting.internalValue = value;
    }
    resetAdaptiveRouting() {
        this._adaptiveRouting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get adaptiveRoutingInput() {
        return this._adaptiveRouting.internalValue;
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
    // default_pools - computed: true, optional: true, required: false
    _defaultPools;
    get defaultPools() {
        return this.getListAttribute('default_pools');
    }
    set defaultPools(value) {
        this._defaultPools = value;
    }
    resetDefaultPools() {
        this._defaultPools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultPoolsInput() {
        return this._defaultPools;
    }
    // fallback_pool - computed: true, optional: true, required: false
    _fallbackPool;
    get fallbackPool() {
        return this.getStringAttribute('fallback_pool');
    }
    set fallbackPool(value) {
        this._fallbackPool = value;
    }
    resetFallbackPool() {
        this._fallbackPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackPoolInput() {
        return this._fallbackPool;
    }
    // location_strategy - computed: true, optional: true, required: false
    _locationStrategy = new LoadBalancerRulesOverridesLocationStrategyOutputReference(this, "location_strategy");
    get locationStrategy() {
        return this._locationStrategy;
    }
    putLocationStrategy(value) {
        this._locationStrategy.internalValue = value;
    }
    resetLocationStrategy() {
        this._locationStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationStrategyInput() {
        return this._locationStrategy.internalValue;
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
    // random_steering - computed: true, optional: true, required: false
    _randomSteering = new LoadBalancerRulesOverridesRandomSteeringOutputReference(this, "random_steering");
    get randomSteering() {
        return this._randomSteering;
    }
    putRandomSteering(value) {
        this._randomSteering.internalValue = value;
    }
    resetRandomSteering() {
        this._randomSteering.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get randomSteeringInput() {
        return this._randomSteering.internalValue;
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
    // session_affinity - computed: true, optional: true, required: false
    _sessionAffinity;
    get sessionAffinity() {
        return this.getStringAttribute('session_affinity');
    }
    set sessionAffinity(value) {
        this._sessionAffinity = value;
    }
    resetSessionAffinity() {
        this._sessionAffinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionAffinityInput() {
        return this._sessionAffinity;
    }
    // session_affinity_attributes - computed: true, optional: true, required: false
    _sessionAffinityAttributes = new LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
    get sessionAffinityAttributes() {
        return this._sessionAffinityAttributes;
    }
    putSessionAffinityAttributes(value) {
        this._sessionAffinityAttributes.internalValue = value;
    }
    resetSessionAffinityAttributes() {
        this._sessionAffinityAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionAffinityAttributesInput() {
        return this._sessionAffinityAttributes.internalValue;
    }
    // session_affinity_ttl - computed: true, optional: true, required: false
    _sessionAffinityTtl;
    get sessionAffinityTtl() {
        return this.getNumberAttribute('session_affinity_ttl');
    }
    set sessionAffinityTtl(value) {
        this._sessionAffinityTtl = value;
    }
    resetSessionAffinityTtl() {
        this._sessionAffinityTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionAffinityTtlInput() {
        return this._sessionAffinityTtl;
    }
    // steering_policy - computed: true, optional: true, required: false
    _steeringPolicy;
    get steeringPolicy() {
        return this.getStringAttribute('steering_policy');
    }
    set steeringPolicy(value) {
        this._steeringPolicy = value;
    }
    resetSteeringPolicy() {
        this._steeringPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get steeringPolicyInput() {
        return this._steeringPolicy;
    }
    // ttl - computed: true, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
}
export function loadBalancerRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        disabled: cdktf.booleanToTerraform(struct.disabled),
        fixed_response: loadBalancerRulesFixedResponseToTerraform(struct.fixedResponse),
        name: cdktf.stringToTerraform(struct.name),
        overrides: loadBalancerRulesOverridesToTerraform(struct.overrides),
        priority: cdktf.numberToTerraform(struct.priority),
        terminates: cdktf.booleanToTerraform(struct.terminates),
    };
}
export function loadBalancerRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        condition: {
            value: cdktf.stringToHclTerraform(struct.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        fixed_response: {
            value: loadBalancerRulesFixedResponseToHclTerraform(struct.fixedResponse),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesFixedResponse",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overrides: {
            value: loadBalancerRulesOverridesToHclTerraform(struct.overrides),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverrides",
        },
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        terminates: {
            value: cdktf.booleanToHclTerraform(struct.terminates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerRulesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._disabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabled = this._disabled;
        }
        if (this._fixedResponse?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._terminates !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminates = this._terminates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition = undefined;
            this._disabled = undefined;
            this._fixedResponse.internalValue = undefined;
            this._name = undefined;
            this._overrides.internalValue = undefined;
            this._priority = undefined;
            this._terminates = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition = value.condition;
            this._disabled = value.disabled;
            this._fixedResponse.internalValue = value.fixedResponse;
            this._name = value.name;
            this._overrides.internalValue = value.overrides;
            this._priority = value.priority;
            this._terminates = value.terminates;
        }
    }
    // condition - computed: true, optional: true, required: false
    _condition;
    get condition() {
        return this.getStringAttribute('condition');
    }
    set condition(value) {
        this._condition = value;
    }
    resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition;
    }
    // disabled - computed: true, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
    // fixed_response - computed: true, optional: true, required: false
    _fixedResponse = new LoadBalancerRulesFixedResponseOutputReference(this, "fixed_response");
    get fixedResponse() {
        return this._fixedResponse;
    }
    putFixedResponse(value) {
        this._fixedResponse.internalValue = value;
    }
    resetFixedResponse() {
        this._fixedResponse.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fixedResponseInput() {
        return this._fixedResponse.internalValue;
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // overrides - computed: true, optional: true, required: false
    _overrides = new LoadBalancerRulesOverridesOutputReference(this, "overrides");
    get overrides() {
        return this._overrides;
    }
    putOverrides(value) {
        this._overrides.internalValue = value;
    }
    resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overridesInput() {
        return this._overrides.internalValue;
    }
    // priority - computed: true, optional: true, required: false
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // terminates - computed: true, optional: true, required: false
    _terminates;
    get terminates() {
        return this.getBooleanAttribute('terminates');
    }
    set terminates(value) {
        this._terminates = value;
    }
    resetTerminates() {
        this._terminates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminatesInput() {
        return this._terminates;
    }
}
export class LoadBalancerRulesList extends cdktf.ComplexList {
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
        return new LoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function loadBalancerSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
        headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.headers),
        require_all_headers: cdktf.booleanToTerraform(struct.requireAllHeaders),
        samesite: cdktf.stringToTerraform(struct.samesite),
        secure: cdktf.stringToTerraform(struct.secure),
        zero_downtime_failover: cdktf.stringToTerraform(struct.zeroDowntimeFailover),
    };
}
export function loadBalancerSessionAffinityAttributesToHclTerraform(struct) {
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
        headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        require_all_headers: {
            value: cdktf.booleanToHclTerraform(struct.requireAllHeaders),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        samesite: {
            value: cdktf.stringToHclTerraform(struct.samesite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secure: {
            value: cdktf.stringToHclTerraform(struct.secure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zero_downtime_failover: {
            value: cdktf.stringToHclTerraform(struct.zeroDowntimeFailover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._drainDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.drainDuration = this._drainDuration;
        }
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._requireAllHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireAllHeaders = this._requireAllHeaders;
        }
        if (this._samesite !== undefined) {
            hasAnyValues = true;
            internalValueResult.samesite = this._samesite;
        }
        if (this._secure !== undefined) {
            hasAnyValues = true;
            internalValueResult.secure = this._secure;
        }
        if (this._zeroDowntimeFailover !== undefined) {
            hasAnyValues = true;
            internalValueResult.zeroDowntimeFailover = this._zeroDowntimeFailover;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._drainDuration = undefined;
            this._headers = undefined;
            this._requireAllHeaders = undefined;
            this._samesite = undefined;
            this._secure = undefined;
            this._zeroDowntimeFailover = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._drainDuration = value.drainDuration;
            this._headers = value.headers;
            this._requireAllHeaders = value.requireAllHeaders;
            this._samesite = value.samesite;
            this._secure = value.secure;
            this._zeroDowntimeFailover = value.zeroDowntimeFailover;
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
    // headers - computed: true, optional: true, required: false
    _headers;
    get headers() {
        return this.getListAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // require_all_headers - computed: true, optional: true, required: false
    _requireAllHeaders;
    get requireAllHeaders() {
        return this.getBooleanAttribute('require_all_headers');
    }
    set requireAllHeaders(value) {
        this._requireAllHeaders = value;
    }
    resetRequireAllHeaders() {
        this._requireAllHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireAllHeadersInput() {
        return this._requireAllHeaders;
    }
    // samesite - computed: true, optional: true, required: false
    _samesite;
    get samesite() {
        return this.getStringAttribute('samesite');
    }
    set samesite(value) {
        this._samesite = value;
    }
    resetSamesite() {
        this._samesite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samesiteInput() {
        return this._samesite;
    }
    // secure - computed: true, optional: true, required: false
    _secure;
    get secure() {
        return this.getStringAttribute('secure');
    }
    set secure(value) {
        this._secure = value;
    }
    resetSecure() {
        this._secure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secureInput() {
        return this._secure;
    }
    // zero_downtime_failover - computed: true, optional: true, required: false
    _zeroDowntimeFailover;
    get zeroDowntimeFailover() {
        return this.getStringAttribute('zero_downtime_failover');
    }
    set zeroDowntimeFailover(value) {
        this._zeroDowntimeFailover = value;
    }
    resetZeroDowntimeFailover() {
        this._zeroDowntimeFailover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zeroDowntimeFailoverInput() {
        return this._zeroDowntimeFailover;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer cloudflare_load_balancer}
*/
export class LoadBalancer extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_load_balancer";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancer to import
    * @param importFromId The id of the existing LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancer to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer cloudflare_load_balancer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerConfig
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
        this._adaptiveRouting.internalValue = config.adaptiveRouting;
        this._countryPools = config.countryPools;
        this._defaultPools = config.defaultPools;
        this._description = config.description;
        this._enabled = config.enabled;
        this._fallbackPool = config.fallbackPool;
        this._locationStrategy.internalValue = config.locationStrategy;
        this._name = config.name;
        this._networks = config.networks;
        this._popPools = config.popPools;
        this._proxied = config.proxied;
        this._randomSteering.internalValue = config.randomSteering;
        this._regionPools = config.regionPools;
        this._rules.internalValue = config.rules;
        this._sessionAffinity = config.sessionAffinity;
        this._sessionAffinityAttributes.internalValue = config.sessionAffinityAttributes;
        this._sessionAffinityTtl = config.sessionAffinityTtl;
        this._steeringPolicy = config.steeringPolicy;
        this._ttl = config.ttl;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // adaptive_routing - computed: true, optional: true, required: false
    _adaptiveRouting = new LoadBalancerAdaptiveRoutingOutputReference(this, "adaptive_routing");
    get adaptiveRouting() {
        return this._adaptiveRouting;
    }
    putAdaptiveRouting(value) {
        this._adaptiveRouting.internalValue = value;
    }
    resetAdaptiveRouting() {
        this._adaptiveRouting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get adaptiveRoutingInput() {
        return this._adaptiveRouting.internalValue;
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
    // default_pools - computed: false, optional: false, required: true
    _defaultPools;
    get defaultPools() {
        return this.getListAttribute('default_pools');
    }
    set defaultPools(value) {
        this._defaultPools = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultPoolsInput() {
        return this._defaultPools;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // fallback_pool - computed: false, optional: false, required: true
    _fallbackPool;
    get fallbackPool() {
        return this.getStringAttribute('fallback_pool');
    }
    set fallbackPool(value) {
        this._fallbackPool = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackPoolInput() {
        return this._fallbackPool;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // location_strategy - computed: true, optional: true, required: false
    _locationStrategy = new LoadBalancerLocationStrategyOutputReference(this, "location_strategy");
    get locationStrategy() {
        return this._locationStrategy;
    }
    putLocationStrategy(value) {
        this._locationStrategy.internalValue = value;
    }
    resetLocationStrategy() {
        this._locationStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationStrategyInput() {
        return this._locationStrategy.internalValue;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // networks - computed: true, optional: true, required: false
    _networks;
    get networks() {
        return this.getListAttribute('networks');
    }
    set networks(value) {
        this._networks = value;
    }
    resetNetworks() {
        this._networks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksInput() {
        return this._networks;
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
    // proxied - computed: true, optional: true, required: false
    _proxied;
    get proxied() {
        return this.getBooleanAttribute('proxied');
    }
    set proxied(value) {
        this._proxied = value;
    }
    resetProxied() {
        this._proxied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxiedInput() {
        return this._proxied;
    }
    // random_steering - computed: true, optional: true, required: false
    _randomSteering = new LoadBalancerRandomSteeringOutputReference(this, "random_steering");
    get randomSteering() {
        return this._randomSteering;
    }
    putRandomSteering(value) {
        this._randomSteering.internalValue = value;
    }
    resetRandomSteering() {
        this._randomSteering.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get randomSteeringInput() {
        return this._randomSteering.internalValue;
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
    // rules - computed: true, optional: true, required: false
    _rules = new LoadBalancerRulesList(this, "rules", false);
    get rules() {
        return this._rules;
    }
    putRules(value) {
        this._rules.internalValue = value;
    }
    resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesInput() {
        return this._rules.internalValue;
    }
    // session_affinity - computed: true, optional: true, required: false
    _sessionAffinity;
    get sessionAffinity() {
        return this.getStringAttribute('session_affinity');
    }
    set sessionAffinity(value) {
        this._sessionAffinity = value;
    }
    resetSessionAffinity() {
        this._sessionAffinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionAffinityInput() {
        return this._sessionAffinity;
    }
    // session_affinity_attributes - computed: true, optional: true, required: false
    _sessionAffinityAttributes = new LoadBalancerSessionAffinityAttributesOutputReference(this, "session_affinity_attributes");
    get sessionAffinityAttributes() {
        return this._sessionAffinityAttributes;
    }
    putSessionAffinityAttributes(value) {
        this._sessionAffinityAttributes.internalValue = value;
    }
    resetSessionAffinityAttributes() {
        this._sessionAffinityAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionAffinityAttributesInput() {
        return this._sessionAffinityAttributes.internalValue;
    }
    // session_affinity_ttl - computed: true, optional: true, required: false
    _sessionAffinityTtl;
    get sessionAffinityTtl() {
        return this.getNumberAttribute('session_affinity_ttl');
    }
    set sessionAffinityTtl(value) {
        this._sessionAffinityTtl = value;
    }
    resetSessionAffinityTtl() {
        this._sessionAffinityTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionAffinityTtlInput() {
        return this._sessionAffinityTtl;
    }
    // steering_policy - computed: true, optional: true, required: false
    _steeringPolicy;
    get steeringPolicy() {
        return this.getStringAttribute('steering_policy');
    }
    set steeringPolicy(value) {
        this._steeringPolicy = value;
    }
    resetSteeringPolicy() {
        this._steeringPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get steeringPolicyInput() {
        return this._steeringPolicy;
    }
    // ttl - computed: true, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
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
    // zone_name - computed: true, optional: false, required: false
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            adaptive_routing: loadBalancerAdaptiveRoutingToTerraform(this._adaptiveRouting.internalValue),
            country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._countryPools),
            default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPools),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            fallback_pool: cdktf.stringToTerraform(this._fallbackPool),
            location_strategy: loadBalancerLocationStrategyToTerraform(this._locationStrategy.internalValue),
            name: cdktf.stringToTerraform(this._name),
            networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
            pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._popPools),
            proxied: cdktf.booleanToTerraform(this._proxied),
            random_steering: loadBalancerRandomSteeringToTerraform(this._randomSteering.internalValue),
            region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._regionPools),
            rules: cdktf.listMapper(loadBalancerRulesToTerraform, false)(this._rules.internalValue),
            session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
            session_affinity_attributes: loadBalancerSessionAffinityAttributesToTerraform(this._sessionAffinityAttributes.internalValue),
            session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
            steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
            ttl: cdktf.numberToTerraform(this._ttl),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            adaptive_routing: {
                value: loadBalancerAdaptiveRoutingToHclTerraform(this._adaptiveRouting.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerAdaptiveRouting",
            },
            country_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._countryPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            default_pools: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPools),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            fallback_pool: {
                value: cdktf.stringToHclTerraform(this._fallbackPool),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location_strategy: {
                value: loadBalancerLocationStrategyToHclTerraform(this._locationStrategy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerLocationStrategy",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            networks: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            pop_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._popPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            proxied: {
                value: cdktf.booleanToHclTerraform(this._proxied),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            random_steering: {
                value: loadBalancerRandomSteeringToHclTerraform(this._randomSteering.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerRandomSteering",
            },
            region_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._regionPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            rules: {
                value: cdktf.listMapperHcl(loadBalancerRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LoadBalancerRulesList",
            },
            session_affinity: {
                value: cdktf.stringToHclTerraform(this._sessionAffinity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_affinity_attributes: {
                value: loadBalancerSessionAffinityAttributesToHclTerraform(this._sessionAffinityAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerSessionAffinityAttributes",
            },
            session_affinity_ttl: {
                value: cdktf.numberToHclTerraform(this._sessionAffinityTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            steering_policy: {
                value: cdktf.stringToHclTerraform(this._steeringPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
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
