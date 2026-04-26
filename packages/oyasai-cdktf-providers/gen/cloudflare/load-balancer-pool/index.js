// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function loadBalancerPoolLoadSheddingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_percent: cdktf.numberToTerraform(struct.defaultPercent),
        default_policy: cdktf.stringToTerraform(struct.defaultPolicy),
        session_percent: cdktf.numberToTerraform(struct.sessionPercent),
        session_policy: cdktf.stringToTerraform(struct.sessionPolicy),
    };
}
export function loadBalancerPoolLoadSheddingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_percent: {
            value: cdktf.numberToHclTerraform(struct.defaultPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_policy: {
            value: cdktf.stringToHclTerraform(struct.defaultPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_percent: {
            value: cdktf.numberToHclTerraform(struct.sessionPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        session_policy: {
            value: cdktf.stringToHclTerraform(struct.sessionPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolLoadSheddingOutputReference extends cdktf.ComplexObject {
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
        if (this._defaultPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultPercent = this._defaultPercent;
        }
        if (this._defaultPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultPolicy = this._defaultPolicy;
        }
        if (this._sessionPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionPercent = this._sessionPercent;
        }
        if (this._sessionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionPolicy = this._sessionPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultPercent = undefined;
            this._defaultPolicy = undefined;
            this._sessionPercent = undefined;
            this._sessionPolicy = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultPercent = value.defaultPercent;
            this._defaultPolicy = value.defaultPolicy;
            this._sessionPercent = value.sessionPercent;
            this._sessionPolicy = value.sessionPolicy;
        }
    }
    // default_percent - computed: true, optional: true, required: false
    _defaultPercent;
    get defaultPercent() {
        return this.getNumberAttribute('default_percent');
    }
    set defaultPercent(value) {
        this._defaultPercent = value;
    }
    resetDefaultPercent() {
        this._defaultPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultPercentInput() {
        return this._defaultPercent;
    }
    // default_policy - computed: true, optional: true, required: false
    _defaultPolicy;
    get defaultPolicy() {
        return this.getStringAttribute('default_policy');
    }
    set defaultPolicy(value) {
        this._defaultPolicy = value;
    }
    resetDefaultPolicy() {
        this._defaultPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultPolicyInput() {
        return this._defaultPolicy;
    }
    // session_percent - computed: true, optional: true, required: false
    _sessionPercent;
    get sessionPercent() {
        return this.getNumberAttribute('session_percent');
    }
    set sessionPercent(value) {
        this._sessionPercent = value;
    }
    resetSessionPercent() {
        this._sessionPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionPercentInput() {
        return this._sessionPercent;
    }
    // session_policy - computed: true, optional: true, required: false
    _sessionPolicy;
    get sessionPolicy() {
        return this.getStringAttribute('session_policy');
    }
    set sessionPolicy(value) {
        this._sessionPolicy = value;
    }
    resetSessionPolicy() {
        this._sessionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionPolicyInput() {
        return this._sessionPolicy;
    }
}
export function loadBalancerPoolNotificationFilterOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable: cdktf.booleanToTerraform(struct.disable),
        healthy: cdktf.booleanToTerraform(struct.healthy),
    };
}
export function loadBalancerPoolNotificationFilterOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable: {
            value: cdktf.booleanToHclTerraform(struct.disable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        healthy: {
            value: cdktf.booleanToHclTerraform(struct.healthy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolNotificationFilterOriginOutputReference extends cdktf.ComplexObject {
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
        if (this._disable !== undefined) {
            hasAnyValues = true;
            internalValueResult.disable = this._disable;
        }
        if (this._healthy !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthy = this._healthy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disable = undefined;
            this._healthy = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disable = value.disable;
            this._healthy = value.healthy;
        }
    }
    // disable - computed: true, optional: true, required: false
    _disable;
    get disable() {
        return this.getBooleanAttribute('disable');
    }
    set disable(value) {
        this._disable = value;
    }
    resetDisable() {
        this._disable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableInput() {
        return this._disable;
    }
    // healthy - computed: true, optional: true, required: false
    _healthy;
    get healthy() {
        return this.getBooleanAttribute('healthy');
    }
    set healthy(value) {
        this._healthy = value;
    }
    resetHealthy() {
        this._healthy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthyInput() {
        return this._healthy;
    }
}
export function loadBalancerPoolNotificationFilterPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable: cdktf.booleanToTerraform(struct.disable),
        healthy: cdktf.booleanToTerraform(struct.healthy),
    };
}
export function loadBalancerPoolNotificationFilterPoolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable: {
            value: cdktf.booleanToHclTerraform(struct.disable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        healthy: {
            value: cdktf.booleanToHclTerraform(struct.healthy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolNotificationFilterPoolOutputReference extends cdktf.ComplexObject {
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
        if (this._disable !== undefined) {
            hasAnyValues = true;
            internalValueResult.disable = this._disable;
        }
        if (this._healthy !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthy = this._healthy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disable = undefined;
            this._healthy = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disable = value.disable;
            this._healthy = value.healthy;
        }
    }
    // disable - computed: true, optional: true, required: false
    _disable;
    get disable() {
        return this.getBooleanAttribute('disable');
    }
    set disable(value) {
        this._disable = value;
    }
    resetDisable() {
        this._disable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableInput() {
        return this._disable;
    }
    // healthy - computed: true, optional: true, required: false
    _healthy;
    get healthy() {
        return this.getBooleanAttribute('healthy');
    }
    set healthy(value) {
        this._healthy = value;
    }
    resetHealthy() {
        this._healthy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthyInput() {
        return this._healthy;
    }
}
export function loadBalancerPoolNotificationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin: loadBalancerPoolNotificationFilterOriginToTerraform(struct.origin),
        pool: loadBalancerPoolNotificationFilterPoolToTerraform(struct.pool),
    };
}
export function loadBalancerPoolNotificationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        origin: {
            value: loadBalancerPoolNotificationFilterOriginToHclTerraform(struct.origin),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerPoolNotificationFilterOrigin",
        },
        pool: {
            value: loadBalancerPoolNotificationFilterPoolToHclTerraform(struct.pool),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerPoolNotificationFilterPool",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolNotificationFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._origin?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.origin = this._origin?.internalValue;
        }
        if (this._pool?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pool = this._pool?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._origin.internalValue = undefined;
            this._pool.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._origin.internalValue = value.origin;
            this._pool.internalValue = value.pool;
        }
    }
    // origin - computed: true, optional: true, required: false
    _origin = new LoadBalancerPoolNotificationFilterOriginOutputReference(this, "origin");
    get origin() {
        return this._origin;
    }
    putOrigin(value) {
        this._origin.internalValue = value;
    }
    resetOrigin() {
        this._origin.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originInput() {
        return this._origin.internalValue;
    }
    // pool - computed: true, optional: true, required: false
    _pool = new LoadBalancerPoolNotificationFilterPoolOutputReference(this, "pool");
    get pool() {
        return this._pool;
    }
    putPool(value) {
        this._pool.internalValue = value;
    }
    resetPool() {
        this._pool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolInput() {
        return this._pool.internalValue;
    }
}
export function loadBalancerPoolOriginSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        policy: cdktf.stringToTerraform(struct.policy),
    };
}
export function loadBalancerPoolOriginSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        policy: {
            value: cdktf.stringToHclTerraform(struct.policy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolOriginSteeringOutputReference extends cdktf.ComplexObject {
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
        if (this._policy !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy = value.policy;
        }
    }
    // policy - computed: true, optional: true, required: false
    _policy;
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
}
export function loadBalancerPoolOriginsHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.host),
    };
}
export function loadBalancerPoolOriginsHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.host),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolOriginsHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
        }
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getListAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
}
export function loadBalancerPoolOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        flatten_cname: cdktf.booleanToTerraform(struct.flattenCname),
        header: loadBalancerPoolOriginsHeaderToTerraform(struct.header),
        name: cdktf.stringToTerraform(struct.name),
        port: cdktf.numberToTerraform(struct.port),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
export function loadBalancerPoolOriginsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        flatten_cname: {
            value: cdktf.booleanToHclTerraform(struct.flattenCname),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        header: {
            value: loadBalancerPoolOriginsHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerPoolOriginsHeader",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktf.numberToHclTerraform(struct.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LoadBalancerPoolOriginsOutputReference extends cdktf.ComplexObject {
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
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._flattenCname !== undefined) {
            hasAnyValues = true;
            internalValueResult.flattenCname = this._flattenCname;
        }
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._virtualNetworkId !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualNetworkId = this._virtualNetworkId;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._enabled = undefined;
            this._flattenCname = undefined;
            this._header.internalValue = undefined;
            this._name = undefined;
            this._port = undefined;
            this._virtualNetworkId = undefined;
            this._weight = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._enabled = value.enabled;
            this._flattenCname = value.flattenCname;
            this._header.internalValue = value.header;
            this._name = value.name;
            this._port = value.port;
            this._virtualNetworkId = value.virtualNetworkId;
            this._weight = value.weight;
        }
    }
    // address - computed: false, optional: true, required: false
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // disabled_at - computed: true, optional: false, required: false
    get disabledAt() {
        return this.getStringAttribute('disabled_at');
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
    // flatten_cname - computed: true, optional: true, required: false
    _flattenCname;
    get flattenCname() {
        return this.getBooleanAttribute('flatten_cname');
    }
    set flattenCname(value) {
        this._flattenCname = value;
    }
    resetFlattenCname() {
        this._flattenCname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get flattenCnameInput() {
        return this._flattenCname;
    }
    // header - computed: false, optional: true, required: false
    _header = new LoadBalancerPoolOriginsHeaderOutputReference(this, "header");
    get header() {
        return this._header;
    }
    putHeader(value) {
        this._header.internalValue = value;
    }
    resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerInput() {
        return this._header.internalValue;
    }
    // name - computed: false, optional: true, required: false
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
    // port - computed: true, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // virtual_network_id - computed: false, optional: true, required: false
    _virtualNetworkId;
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
    set virtualNetworkId(value) {
        this._virtualNetworkId = value;
    }
    resetVirtualNetworkId() {
        this._virtualNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualNetworkIdInput() {
        return this._virtualNetworkId;
    }
    // weight - computed: true, optional: true, required: false
    _weight;
    get weight() {
        return this.getNumberAttribute('weight');
    }
    set weight(value) {
        this._weight = value;
    }
    resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightInput() {
        return this._weight;
    }
}
export class LoadBalancerPoolOriginsList extends cdktf.ComplexList {
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
        return new LoadBalancerPoolOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}
*/
export class LoadBalancerPool extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_load_balancer_pool";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerPool to import
    * @param importFromId The id of the existing LoadBalancerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerPool to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_pool", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPoolConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_load_balancer_pool',
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
        this._accountId = config.accountId;
        this._checkRegions = config.checkRegions;
        this._description = config.description;
        this._enabled = config.enabled;
        this._latitude = config.latitude;
        this._loadShedding.internalValue = config.loadShedding;
        this._longitude = config.longitude;
        this._minimumOrigins = config.minimumOrigins;
        this._monitor = config.monitor;
        this._monitorGroup = config.monitorGroup;
        this._name = config.name;
        this._notificationEmail = config.notificationEmail;
        this._notificationFilter.internalValue = config.notificationFilter;
        this._originSteering.internalValue = config.originSteering;
        this._origins.internalValue = config.origins;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // check_regions - computed: false, optional: true, required: false
    _checkRegions;
    get checkRegions() {
        return this.getListAttribute('check_regions');
    }
    set checkRegions(value) {
        this._checkRegions = value;
    }
    resetCheckRegions() {
        this._checkRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkRegionsInput() {
        return this._checkRegions;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
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
    // disabled_at - computed: true, optional: false, required: false
    get disabledAt() {
        return this.getStringAttribute('disabled_at');
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // latitude - computed: false, optional: true, required: false
    _latitude;
    get latitude() {
        return this.getNumberAttribute('latitude');
    }
    set latitude(value) {
        this._latitude = value;
    }
    resetLatitude() {
        this._latitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latitudeInput() {
        return this._latitude;
    }
    // load_shedding - computed: true, optional: true, required: false
    _loadShedding = new LoadBalancerPoolLoadSheddingOutputReference(this, "load_shedding");
    get loadShedding() {
        return this._loadShedding;
    }
    putLoadShedding(value) {
        this._loadShedding.internalValue = value;
    }
    resetLoadShedding() {
        this._loadShedding.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadSheddingInput() {
        return this._loadShedding.internalValue;
    }
    // longitude - computed: false, optional: true, required: false
    _longitude;
    get longitude() {
        return this.getNumberAttribute('longitude');
    }
    set longitude(value) {
        this._longitude = value;
    }
    resetLongitude() {
        this._longitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get longitudeInput() {
        return this._longitude;
    }
    // minimum_origins - computed: true, optional: true, required: false
    _minimumOrigins;
    get minimumOrigins() {
        return this.getNumberAttribute('minimum_origins');
    }
    set minimumOrigins(value) {
        this._minimumOrigins = value;
    }
    resetMinimumOrigins() {
        this._minimumOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumOriginsInput() {
        return this._minimumOrigins;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // monitor - computed: false, optional: true, required: false
    _monitor;
    get monitor() {
        return this.getStringAttribute('monitor');
    }
    set monitor(value) {
        this._monitor = value;
    }
    resetMonitor() {
        this._monitor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitorInput() {
        return this._monitor;
    }
    // monitor_group - computed: false, optional: true, required: false
    _monitorGroup;
    get monitorGroup() {
        return this.getStringAttribute('monitor_group');
    }
    set monitorGroup(value) {
        this._monitorGroup = value;
    }
    resetMonitorGroup() {
        this._monitorGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitorGroupInput() {
        return this._monitorGroup;
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
    // networks - computed: true, optional: false, required: false
    get networks() {
        return this.getListAttribute('networks');
    }
    // notification_email - computed: true, optional: true, required: false
    _notificationEmail;
    get notificationEmail() {
        return this.getStringAttribute('notification_email');
    }
    set notificationEmail(value) {
        this._notificationEmail = value;
    }
    resetNotificationEmail() {
        this._notificationEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationEmailInput() {
        return this._notificationEmail;
    }
    // notification_filter - computed: true, optional: true, required: false
    _notificationFilter = new LoadBalancerPoolNotificationFilterOutputReference(this, "notification_filter");
    get notificationFilter() {
        return this._notificationFilter;
    }
    putNotificationFilter(value) {
        this._notificationFilter.internalValue = value;
    }
    resetNotificationFilter() {
        this._notificationFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationFilterInput() {
        return this._notificationFilter.internalValue;
    }
    // origin_steering - computed: true, optional: true, required: false
    _originSteering = new LoadBalancerPoolOriginSteeringOutputReference(this, "origin_steering");
    get originSteering() {
        return this._originSteering;
    }
    putOriginSteering(value) {
        this._originSteering.internalValue = value;
    }
    resetOriginSteering() {
        this._originSteering.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originSteeringInput() {
        return this._originSteering.internalValue;
    }
    // origins - computed: false, optional: false, required: true
    _origins = new LoadBalancerPoolOriginsList(this, "origins", false);
    get origins() {
        return this._origins;
    }
    putOrigins(value) {
        this._origins.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get originsInput() {
        return this._origins.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            check_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._checkRegions),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            latitude: cdktf.numberToTerraform(this._latitude),
            load_shedding: loadBalancerPoolLoadSheddingToTerraform(this._loadShedding.internalValue),
            longitude: cdktf.numberToTerraform(this._longitude),
            minimum_origins: cdktf.numberToTerraform(this._minimumOrigins),
            monitor: cdktf.stringToTerraform(this._monitor),
            monitor_group: cdktf.stringToTerraform(this._monitorGroup),
            name: cdktf.stringToTerraform(this._name),
            notification_email: cdktf.stringToTerraform(this._notificationEmail),
            notification_filter: loadBalancerPoolNotificationFilterToTerraform(this._notificationFilter.internalValue),
            origin_steering: loadBalancerPoolOriginSteeringToTerraform(this._originSteering.internalValue),
            origins: cdktf.listMapper(loadBalancerPoolOriginsToTerraform, false)(this._origins.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            check_regions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._checkRegions),
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
            latitude: {
                value: cdktf.numberToHclTerraform(this._latitude),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            load_shedding: {
                value: loadBalancerPoolLoadSheddingToHclTerraform(this._loadShedding.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerPoolLoadShedding",
            },
            longitude: {
                value: cdktf.numberToHclTerraform(this._longitude),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            minimum_origins: {
                value: cdktf.numberToHclTerraform(this._minimumOrigins),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            monitor: {
                value: cdktf.stringToHclTerraform(this._monitor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_group: {
                value: cdktf.stringToHclTerraform(this._monitorGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_email: {
                value: cdktf.stringToHclTerraform(this._notificationEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_filter: {
                value: loadBalancerPoolNotificationFilterToHclTerraform(this._notificationFilter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerPoolNotificationFilter",
            },
            origin_steering: {
                value: loadBalancerPoolOriginSteeringToHclTerraform(this._originSteering.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerPoolOriginSteering",
            },
            origins: {
                value: cdktf.listMapperHcl(loadBalancerPoolOriginsToHclTerraform, false)(this._origins.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LoadBalancerPoolOriginsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
