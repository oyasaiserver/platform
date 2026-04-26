// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function aiGatewayDynamicRoutingDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingDeploymentOutputReference extends cdktf.ComplexObject {
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
    // deployment_id - computed: true, optional: false, required: false
    get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
}
export function aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        element_id: cdktf.stringToTerraform(struct.elementId),
    };
}
export function aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
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
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
        }
    }
    // element_id - computed: false, optional: false, required: true
    _elementId;
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    set elementId(value) {
        this._elementId = value;
    }
    // Temporarily expose input value. Use with caution.
    get elementIdInput() {
        return this._elementId;
    }
}
export function aiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        element_id: cdktf.stringToTerraform(struct.elementId),
    };
}
export function aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
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
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
        }
    }
    // element_id - computed: false, optional: false, required: true
    _elementId;
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    set elementId(value) {
        this._elementId = value;
    }
    // Temporarily expose input value. Use with caution.
    get elementIdInput() {
        return this._elementId;
    }
}
export function aiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        element_id: cdktf.stringToTerraform(struct.elementId),
    };
}
export function aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputsNextOutputReference extends cdktf.ComplexObject {
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
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
        }
    }
    // element_id - computed: false, optional: false, required: true
    _elementId;
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    set elementId(value) {
        this._elementId = value;
    }
    // Temporarily expose input value. Use with caution.
    get elementIdInput() {
        return this._elementId;
    }
}
export function aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        element_id: cdktf.stringToTerraform(struct.elementId),
    };
}
export function aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
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
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
        }
    }
    // element_id - computed: false, optional: false, required: true
    _elementId;
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    set elementId(value) {
        this._elementId = value;
    }
    // Temporarily expose input value. Use with caution.
    get elementIdInput() {
        return this._elementId;
    }
}
export function aiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        element_id: cdktf.stringToTerraform(struct.elementId),
    };
}
export function aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
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
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
        }
    }
    // element_id - computed: false, optional: false, required: true
    _elementId;
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    set elementId(value) {
        this._elementId = value;
    }
    // Temporarily expose input value. Use with caution.
    get elementIdInput() {
        return this._elementId;
    }
}
export function aiGatewayDynamicRoutingElementsOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        element_id: cdktf.stringToTerraform(struct.elementId),
        fallback: aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct.fallback),
        false: aiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct.false),
        next: aiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct.next),
        success: aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct.success),
        true: aiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct.true),
    };
}
export function aiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fallback: {
            value: aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct.fallback),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsOutputsFallback",
        },
        false: {
            value: aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct.false),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsOutputsFalse",
        },
        next: {
            value: aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct.next),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsOutputsNext",
        },
        success: {
            value: aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct.success),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsOutputsSuccess",
        },
        true: {
            value: aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct.true),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsOutputsTrue",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputsOutputReference extends cdktf.ComplexObject {
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
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        if (this._fallback?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fallback = this._fallback?.internalValue;
        }
        if (this._false?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.false = this._false?.internalValue;
        }
        if (this._next?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.next = this._next?.internalValue;
        }
        if (this._success?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.success = this._success?.internalValue;
        }
        if (this._true?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.true = this._true?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
            this._fallback.internalValue = undefined;
            this._false.internalValue = undefined;
            this._next.internalValue = undefined;
            this._success.internalValue = undefined;
            this._true.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
            this._fallback.internalValue = value.fallback;
            this._false.internalValue = value.false;
            this._next.internalValue = value.next;
            this._success.internalValue = value.success;
            this._true.internalValue = value.true;
        }
    }
    // element_id - computed: false, optional: true, required: false
    _elementId;
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    set elementId(value) {
        this._elementId = value;
    }
    resetElementId() {
        this._elementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elementIdInput() {
        return this._elementId;
    }
    // fallback - computed: false, optional: true, required: false
    _fallback = new AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(this, "fallback");
    get fallback() {
        return this._fallback;
    }
    putFallback(value) {
        this._fallback.internalValue = value;
    }
    resetFallback() {
        this._fallback.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackInput() {
        return this._fallback.internalValue;
    }
    // false - computed: false, optional: true, required: false
    _false = new AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(this, "false");
    get false() {
        return this._false;
    }
    putFalse(value) {
        this._false.internalValue = value;
    }
    resetFalse() {
        this._false.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get falseInput() {
        return this._false.internalValue;
    }
    // next - computed: false, optional: true, required: false
    _next = new AiGatewayDynamicRoutingElementsOutputsNextOutputReference(this, "next");
    get next() {
        return this._next;
    }
    putNext(value) {
        this._next.internalValue = value;
    }
    resetNext() {
        this._next.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nextInput() {
        return this._next.internalValue;
    }
    // success - computed: false, optional: true, required: false
    _success = new AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(this, "success");
    get success() {
        return this._success;
    }
    putSuccess(value) {
        this._success.internalValue = value;
    }
    resetSuccess() {
        this._success.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get successInput() {
        return this._success.internalValue;
    }
    // true - computed: false, optional: true, required: false
    _true = new AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(this, "true");
    get true() {
        return this._true;
    }
    putTrue(value) {
        this._true.internalValue = value;
    }
    resetTrue() {
        this._true.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trueInput() {
        return this._true.internalValue;
    }
}
export function aiGatewayDynamicRoutingElementsPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ai_gateway_dynamic_routing_provider: cdktf.stringToTerraform(struct.aiGatewayDynamicRoutingProvider),
        conditions: cdktf.stringToTerraform(struct.conditions),
        key: cdktf.stringToTerraform(struct.key),
        limit: cdktf.numberToTerraform(struct.limit),
        limit_type: cdktf.stringToTerraform(struct.limitType),
        model: cdktf.stringToTerraform(struct.model),
        retries: cdktf.numberToTerraform(struct.retries),
        timeout: cdktf.numberToTerraform(struct.timeout),
        window: cdktf.numberToTerraform(struct.window),
    };
}
export function aiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ai_gateway_dynamic_routing_provider: {
            value: cdktf.stringToHclTerraform(struct.aiGatewayDynamicRoutingProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditions: {
            value: cdktf.stringToHclTerraform(struct.conditions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        limit: {
            value: cdktf.numberToHclTerraform(struct.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        limit_type: {
            value: cdktf.stringToHclTerraform(struct.limitType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model: {
            value: cdktf.stringToHclTerraform(struct.model),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retries: {
            value: cdktf.numberToHclTerraform(struct.retries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout: {
            value: cdktf.numberToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        window: {
            value: cdktf.numberToHclTerraform(struct.window),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._aiGatewayDynamicRoutingProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.aiGatewayDynamicRoutingProvider = this._aiGatewayDynamicRoutingProvider;
        }
        if (this._conditions !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._limit !== undefined) {
            hasAnyValues = true;
            internalValueResult.limit = this._limit;
        }
        if (this._limitType !== undefined) {
            hasAnyValues = true;
            internalValueResult.limitType = this._limitType;
        }
        if (this._model !== undefined) {
            hasAnyValues = true;
            internalValueResult.model = this._model;
        }
        if (this._retries !== undefined) {
            hasAnyValues = true;
            internalValueResult.retries = this._retries;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        if (this._window !== undefined) {
            hasAnyValues = true;
            internalValueResult.window = this._window;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aiGatewayDynamicRoutingProvider = undefined;
            this._conditions = undefined;
            this._key = undefined;
            this._limit = undefined;
            this._limitType = undefined;
            this._model = undefined;
            this._retries = undefined;
            this._timeout = undefined;
            this._window = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aiGatewayDynamicRoutingProvider = value.aiGatewayDynamicRoutingProvider;
            this._conditions = value.conditions;
            this._key = value.key;
            this._limit = value.limit;
            this._limitType = value.limitType;
            this._model = value.model;
            this._retries = value.retries;
            this._timeout = value.timeout;
            this._window = value.window;
        }
    }
    // ai_gateway_dynamic_routing_provider - computed: false, optional: true, required: false
    _aiGatewayDynamicRoutingProvider;
    get aiGatewayDynamicRoutingProvider() {
        return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
    }
    set aiGatewayDynamicRoutingProvider(value) {
        this._aiGatewayDynamicRoutingProvider = value;
    }
    resetAiGatewayDynamicRoutingProvider() {
        this._aiGatewayDynamicRoutingProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiGatewayDynamicRoutingProviderInput() {
        return this._aiGatewayDynamicRoutingProvider;
    }
    // conditions - computed: false, optional: true, required: false
    _conditions;
    get conditions() {
        return this.getStringAttribute('conditions');
    }
    set conditions(value) {
        this._conditions = value;
    }
    resetConditions() {
        this._conditions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionsInput() {
        return this._conditions;
    }
    // key - computed: false, optional: true, required: false
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // limit - computed: false, optional: true, required: false
    _limit;
    get limit() {
        return this.getNumberAttribute('limit');
    }
    set limit(value) {
        this._limit = value;
    }
    resetLimit() {
        this._limit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitInput() {
        return this._limit;
    }
    // limit_type - computed: false, optional: true, required: false
    _limitType;
    get limitType() {
        return this.getStringAttribute('limit_type');
    }
    set limitType(value) {
        this._limitType = value;
    }
    resetLimitType() {
        this._limitType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitTypeInput() {
        return this._limitType;
    }
    // model - computed: false, optional: true, required: false
    _model;
    get model() {
        return this.getStringAttribute('model');
    }
    set model(value) {
        this._model = value;
    }
    resetModel() {
        this._model = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modelInput() {
        return this._model;
    }
    // retries - computed: false, optional: true, required: false
    _retries;
    get retries() {
        return this.getNumberAttribute('retries');
    }
    set retries(value) {
        this._retries = value;
    }
    resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retriesInput() {
        return this._retries;
    }
    // timeout - computed: false, optional: true, required: false
    _timeout;
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
    // window - computed: false, optional: true, required: false
    _window;
    get window() {
        return this.getNumberAttribute('window');
    }
    set window(value) {
        this._window = value;
    }
    resetWindow() {
        this._window = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get windowInput() {
        return this._window;
    }
}
export function aiGatewayDynamicRoutingElementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        outputs: aiGatewayDynamicRoutingElementsOutputsToTerraform(struct.outputs),
        properties: aiGatewayDynamicRoutingElementsPropertiesToTerraform(struct.properties),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function aiGatewayDynamicRoutingElementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outputs: {
            value: aiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct.outputs),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsOutputs",
        },
        properties: {
            value: aiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct.properties),
            isBlock: true,
            type: "struct",
            storageClassType: "AiGatewayDynamicRoutingElementsProperties",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiGatewayDynamicRoutingElementsOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._outputs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputs = this._outputs?.internalValue;
        }
        if (this._properties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._outputs.internalValue = undefined;
            this._properties.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._outputs.internalValue = value.outputs;
            this._properties.internalValue = value.properties;
            this._type = value.type;
        }
    }
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // outputs - computed: false, optional: false, required: true
    _outputs = new AiGatewayDynamicRoutingElementsOutputsOutputReference(this, "outputs");
    get outputs() {
        return this._outputs;
    }
    putOutputs(value) {
        this._outputs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get outputsInput() {
        return this._outputs.internalValue;
    }
    // properties - computed: false, optional: true, required: false
    _properties = new AiGatewayDynamicRoutingElementsPropertiesOutputReference(this, "properties");
    get properties() {
        return this._properties;
    }
    putProperties(value) {
        this._properties.internalValue = value;
    }
    resetProperties() {
        this._properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propertiesInput() {
        return this._properties.internalValue;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
export class AiGatewayDynamicRoutingElementsList extends cdktf.ComplexList {
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
        return new AiGatewayDynamicRoutingElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiGatewayDynamicRoutingRouteDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteDeploymentOutputReference extends cdktf.ComplexObject {
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
    // deployment_id - computed: true, optional: false, required: false
    get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
}
export function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
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
    // element_id - computed: true, optional: false, required: false
    get elementId() {
        return this.getStringAttribute('element_id');
    }
}
export function aiGatewayDynamicRoutingRouteElementsOutputsFalseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsOutputsFalseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
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
    // element_id - computed: true, optional: false, required: false
    get elementId() {
        return this.getStringAttribute('element_id');
    }
}
export function aiGatewayDynamicRoutingRouteElementsOutputsNextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsOutputsNextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference extends cdktf.ComplexObject {
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
    // element_id - computed: true, optional: false, required: false
    get elementId() {
        return this.getStringAttribute('element_id');
    }
}
export function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
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
    // element_id - computed: true, optional: false, required: false
    get elementId() {
        return this.getStringAttribute('element_id');
    }
}
export function aiGatewayDynamicRoutingRouteElementsOutputsTrueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsOutputsTrueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
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
    // element_id - computed: true, optional: false, required: false
    get elementId() {
        return this.getStringAttribute('element_id');
    }
}
export function aiGatewayDynamicRoutingRouteElementsOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsOutputsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputsOutputReference extends cdktf.ComplexObject {
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
    // element_id - computed: true, optional: false, required: false
    get elementId() {
        return this.getStringAttribute('element_id');
    }
    // fallback - computed: true, optional: false, required: false
    _fallback = new AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(this, "fallback");
    get fallback() {
        return this._fallback;
    }
    // false - computed: true, optional: false, required: false
    _false = new AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(this, "false");
    get false() {
        return this._false;
    }
    // next - computed: true, optional: false, required: false
    _next = new AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(this, "next");
    get next() {
        return this._next;
    }
    // success - computed: true, optional: false, required: false
    _success = new AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(this, "success");
    get success() {
        return this._success;
    }
    // true - computed: true, optional: false, required: false
    _true = new AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(this, "true");
    get true() {
        return this._true;
    }
}
export function aiGatewayDynamicRoutingRouteElementsPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference extends cdktf.ComplexObject {
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
    // ai_gateway_dynamic_routing_provider - computed: true, optional: false, required: false
    get aiGatewayDynamicRoutingProvider() {
        return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
    }
    // conditions - computed: true, optional: false, required: false
    get conditions() {
        return this.getStringAttribute('conditions');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // limit - computed: true, optional: false, required: false
    get limit() {
        return this.getNumberAttribute('limit');
    }
    // limit_type - computed: true, optional: false, required: false
    get limitType() {
        return this.getStringAttribute('limit_type');
    }
    // model - computed: true, optional: false, required: false
    get model() {
        return this.getStringAttribute('model');
    }
    // retries - computed: true, optional: false, required: false
    get retries() {
        return this.getNumberAttribute('retries');
    }
    // timeout - computed: true, optional: false, required: false
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    // window - computed: true, optional: false, required: false
    get window() {
        return this.getNumberAttribute('window');
    }
}
export function aiGatewayDynamicRoutingRouteElementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteElementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteElementsOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // outputs - computed: true, optional: false, required: false
    _outputs = new AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(this, "outputs");
    get outputs() {
        return this._outputs;
    }
    // properties - computed: true, optional: false, required: false
    _properties = new AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(this, "properties");
    get properties() {
        return this._properties;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class AiGatewayDynamicRoutingRouteElementsList extends cdktf.ComplexList {
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
        return new AiGatewayDynamicRoutingRouteElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiGatewayDynamicRoutingRouteVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteVersionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteVersionOutputReference extends cdktf.ComplexObject {
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
    // active - computed: true, optional: false, required: false
    get active() {
        return this.getStringAttribute('active');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // data - computed: true, optional: false, required: false
    get data() {
        return this.getStringAttribute('data');
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
}
export function aiGatewayDynamicRoutingRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingRouteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingRouteOutputReference extends cdktf.ComplexObject {
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
    // account_tag - computed: true, optional: false, required: false
    get accountTag() {
        return this.getStringAttribute('account_tag');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // deployment - computed: true, optional: false, required: false
    _deployment = new AiGatewayDynamicRoutingRouteDeploymentOutputReference(this, "deployment");
    get deployment() {
        return this._deployment;
    }
    // elements - computed: true, optional: false, required: false
    _elements = new AiGatewayDynamicRoutingRouteElementsList(this, "elements", false);
    get elements() {
        return this._elements;
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // version - computed: true, optional: false, required: false
    _version = new AiGatewayDynamicRoutingRouteVersionOutputReference(this, "version");
    get version() {
        return this._version;
    }
}
export function aiGatewayDynamicRoutingVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function aiGatewayDynamicRoutingVersionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AiGatewayDynamicRoutingVersionOutputReference extends cdktf.ComplexObject {
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
    // active - computed: true, optional: false, required: false
    get active() {
        return this.getStringAttribute('active');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // data - computed: true, optional: false, required: false
    get data() {
        return this.getStringAttribute('data');
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
export class AiGatewayDynamicRouting extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ai_gateway_dynamic_routing";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiGatewayDynamicRouting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiGatewayDynamicRouting to import
    * @param importFromId The id of the existing AiGatewayDynamicRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiGatewayDynamicRouting to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway_dynamic_routing", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiGatewayDynamicRoutingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ai_gateway_dynamic_routing',
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
        this._elements.internalValue = config.elements;
        this._gatewayId = config.gatewayId;
        this._name = config.name;
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // deployment - computed: true, optional: false, required: false
    _deployment = new AiGatewayDynamicRoutingDeploymentOutputReference(this, "deployment");
    get deployment() {
        return this._deployment;
    }
    // elements - computed: false, optional: false, required: true
    _elements = new AiGatewayDynamicRoutingElementsList(this, "elements", false);
    get elements() {
        return this._elements;
    }
    putElements(value) {
        this._elements.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get elementsInput() {
        return this._elements.internalValue;
    }
    // gateway_id - computed: false, optional: false, required: true
    _gatewayId;
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
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
    // route - computed: true, optional: false, required: false
    _route = new AiGatewayDynamicRoutingRouteOutputReference(this, "route");
    get route() {
        return this._route;
    }
    // success - computed: true, optional: false, required: false
    get success() {
        return this.getBooleanAttribute('success');
    }
    // version - computed: true, optional: false, required: false
    _version = new AiGatewayDynamicRoutingVersionOutputReference(this, "version");
    get version() {
        return this._version;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            elements: cdktf.listMapper(aiGatewayDynamicRoutingElementsToTerraform, false)(this._elements.internalValue),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            name: cdktf.stringToTerraform(this._name),
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
            elements: {
                value: cdktf.listMapperHcl(aiGatewayDynamicRoutingElementsToHclTerraform, false)(this._elements.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AiGatewayDynamicRoutingElementsList",
            },
            gateway_id: {
                value: cdktf.stringToHclTerraform(this._gatewayId),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
