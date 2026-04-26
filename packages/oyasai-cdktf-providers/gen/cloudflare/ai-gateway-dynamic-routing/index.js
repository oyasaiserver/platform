"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiGatewayDynamicRouting = exports.AiGatewayDynamicRoutingVersionOutputReference = exports.AiGatewayDynamicRoutingRouteOutputReference = exports.AiGatewayDynamicRoutingRouteVersionOutputReference = exports.AiGatewayDynamicRoutingRouteElementsList = exports.AiGatewayDynamicRoutingRouteElementsOutputReference = exports.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference = exports.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference = exports.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference = exports.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference = exports.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference = exports.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference = exports.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference = exports.AiGatewayDynamicRoutingRouteDeploymentOutputReference = exports.AiGatewayDynamicRoutingElementsList = exports.AiGatewayDynamicRoutingElementsOutputReference = exports.AiGatewayDynamicRoutingElementsPropertiesOutputReference = exports.AiGatewayDynamicRoutingElementsOutputsOutputReference = exports.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference = exports.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference = exports.AiGatewayDynamicRoutingElementsOutputsNextOutputReference = exports.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference = exports.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference = exports.AiGatewayDynamicRoutingDeploymentOutputReference = void 0;
exports.aiGatewayDynamicRoutingDeploymentToTerraform = aiGatewayDynamicRoutingDeploymentToTerraform;
exports.aiGatewayDynamicRoutingDeploymentToHclTerraform = aiGatewayDynamicRoutingDeploymentToHclTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform = aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform = aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsFalseToTerraform = aiGatewayDynamicRoutingElementsOutputsFalseToTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform = aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsNextToTerraform = aiGatewayDynamicRoutingElementsOutputsNextToTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform = aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform = aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform = aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsTrueToTerraform = aiGatewayDynamicRoutingElementsOutputsTrueToTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform = aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsToTerraform = aiGatewayDynamicRoutingElementsOutputsToTerraform;
exports.aiGatewayDynamicRoutingElementsOutputsToHclTerraform = aiGatewayDynamicRoutingElementsOutputsToHclTerraform;
exports.aiGatewayDynamicRoutingElementsPropertiesToTerraform = aiGatewayDynamicRoutingElementsPropertiesToTerraform;
exports.aiGatewayDynamicRoutingElementsPropertiesToHclTerraform = aiGatewayDynamicRoutingElementsPropertiesToHclTerraform;
exports.aiGatewayDynamicRoutingElementsToTerraform = aiGatewayDynamicRoutingElementsToTerraform;
exports.aiGatewayDynamicRoutingElementsToHclTerraform = aiGatewayDynamicRoutingElementsToHclTerraform;
exports.aiGatewayDynamicRoutingRouteDeploymentToTerraform = aiGatewayDynamicRoutingRouteDeploymentToTerraform;
exports.aiGatewayDynamicRoutingRouteDeploymentToHclTerraform = aiGatewayDynamicRoutingRouteDeploymentToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsFallbackToTerraform = aiGatewayDynamicRoutingRouteElementsOutputsFallbackToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsFallbackToHclTerraform = aiGatewayDynamicRoutingRouteElementsOutputsFallbackToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsFalseToTerraform = aiGatewayDynamicRoutingRouteElementsOutputsFalseToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsFalseToHclTerraform = aiGatewayDynamicRoutingRouteElementsOutputsFalseToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsNextToTerraform = aiGatewayDynamicRoutingRouteElementsOutputsNextToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsNextToHclTerraform = aiGatewayDynamicRoutingRouteElementsOutputsNextToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsSuccessToTerraform = aiGatewayDynamicRoutingRouteElementsOutputsSuccessToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsSuccessToHclTerraform = aiGatewayDynamicRoutingRouteElementsOutputsSuccessToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsTrueToTerraform = aiGatewayDynamicRoutingRouteElementsOutputsTrueToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsTrueToHclTerraform = aiGatewayDynamicRoutingRouteElementsOutputsTrueToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsToTerraform = aiGatewayDynamicRoutingRouteElementsOutputsToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsOutputsToHclTerraform = aiGatewayDynamicRoutingRouteElementsOutputsToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsPropertiesToTerraform = aiGatewayDynamicRoutingRouteElementsPropertiesToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsPropertiesToHclTerraform = aiGatewayDynamicRoutingRouteElementsPropertiesToHclTerraform;
exports.aiGatewayDynamicRoutingRouteElementsToTerraform = aiGatewayDynamicRoutingRouteElementsToTerraform;
exports.aiGatewayDynamicRoutingRouteElementsToHclTerraform = aiGatewayDynamicRoutingRouteElementsToHclTerraform;
exports.aiGatewayDynamicRoutingRouteVersionToTerraform = aiGatewayDynamicRoutingRouteVersionToTerraform;
exports.aiGatewayDynamicRoutingRouteVersionToHclTerraform = aiGatewayDynamicRoutingRouteVersionToHclTerraform;
exports.aiGatewayDynamicRoutingRouteToTerraform = aiGatewayDynamicRoutingRouteToTerraform;
exports.aiGatewayDynamicRoutingRouteToHclTerraform = aiGatewayDynamicRoutingRouteToHclTerraform;
exports.aiGatewayDynamicRoutingVersionToTerraform = aiGatewayDynamicRoutingVersionToTerraform;
exports.aiGatewayDynamicRoutingVersionToHclTerraform = aiGatewayDynamicRoutingVersionToHclTerraform;
var cdktf = require("cdktf");
function aiGatewayDynamicRoutingDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingDeploymentOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingDeploymentOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingDeploymentOutputReference.prototype, "deploymentId", {
        // deployment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingDeploymentOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingDeploymentOutputReference = AiGatewayDynamicRoutingDeploymentOutputReference;
function aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._elementId !== undefined) {
                hasAnyValues = true;
                internalValueResult.elementId = this._elementId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.prototype, "elementId", {
        get: function () {
            return this.getStringAttribute('element_id');
        },
        set: function (value) {
            this._elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.prototype, "elementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elementId;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference = AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
function aiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputsFalseOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputsFalseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._elementId !== undefined) {
                hasAnyValues = true;
                internalValueResult.elementId = this._elementId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.prototype, "elementId", {
        get: function () {
            return this.getStringAttribute('element_id');
        },
        set: function (value) {
            this._elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.prototype, "elementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elementId;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference = AiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
function aiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputsNextOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputsNextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsOutputsNextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsNextOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._elementId !== undefined) {
                hasAnyValues = true;
                internalValueResult.elementId = this._elementId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsNextOutputReference.prototype, "elementId", {
        get: function () {
            return this.getStringAttribute('element_id');
        },
        set: function (value) {
            this._elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsNextOutputReference.prototype, "elementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elementId;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputsNextOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputsNextOutputReference = AiGatewayDynamicRoutingElementsOutputsNextOutputReference;
function aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._elementId !== undefined) {
                hasAnyValues = true;
                internalValueResult.elementId = this._elementId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.prototype, "elementId", {
        get: function () {
            return this.getStringAttribute('element_id');
        },
        set: function (value) {
            this._elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.prototype, "elementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elementId;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference = AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
function aiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        element_id: {
            value: cdktf.stringToHclTerraform(struct.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputsTrueOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputsTrueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._elementId !== undefined) {
                hasAnyValues = true;
                internalValueResult.elementId = this._elementId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.prototype, "elementId", {
        get: function () {
            return this.getStringAttribute('element_id');
        },
        set: function (value) {
            this._elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.prototype, "elementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elementId;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference = AiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
function aiGatewayDynamicRoutingElementsOutputsToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputsOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsOutputsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fallback - computed: false, optional: true, required: false
        _this._fallback = new AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(_this, "fallback");
        // false - computed: false, optional: true, required: false
        _this._false = new AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(_this, "false");
        // next - computed: false, optional: true, required: false
        _this._next = new AiGatewayDynamicRoutingElementsOutputsNextOutputReference(_this, "next");
        // success - computed: false, optional: true, required: false
        _this._success = new AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(_this, "success");
        // true - computed: false, optional: true, required: false
        _this._true = new AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(_this, "true");
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._elementId !== undefined) {
                hasAnyValues = true;
                internalValueResult.elementId = this._elementId;
            }
            if (((_a = this._fallback) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fallback = (_b = this._fallback) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._false) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.false = (_d = this._false) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._next) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.next = (_f = this._next) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._success) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.success = (_h = this._success) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._true) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.true = (_k = this._true) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "elementId", {
        get: function () {
            return this.getStringAttribute('element_id');
        },
        set: function (value) {
            this._elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.resetElementId = function () {
        this._elementId = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "elementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elementId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "fallback", {
        get: function () {
            return this._fallback;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.putFallback = function (value) {
        this._fallback.internalValue = value;
    };
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.resetFallback = function () {
        this._fallback.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "fallbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fallback.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "false", {
        get: function () {
            return this._false;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.putFalse = function (value) {
        this._false.internalValue = value;
    };
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.resetFalse = function () {
        this._false.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "falseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._false.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "next", {
        get: function () {
            return this._next;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.putNext = function (value) {
        this._next.internalValue = value;
    };
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.resetNext = function () {
        this._next.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "nextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._next.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "success", {
        get: function () {
            return this._success;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.putSuccess = function (value) {
        this._success.internalValue = value;
    };
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.resetSuccess = function () {
        this._success.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "successInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._success.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "true", {
        get: function () {
            return this._true;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.putTrue = function (value) {
        this._true.internalValue = value;
    };
    AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype.resetTrue = function () {
        this._true.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "trueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._true.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputsOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputsOutputReference = AiGatewayDynamicRoutingElementsOutputsOutputReference;
function aiGatewayDynamicRoutingElementsPropertiesToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsPropertiesOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsPropertiesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingElementsPropertiesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "aiGatewayDynamicRoutingProvider", {
        get: function () {
            return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
        },
        set: function (value) {
            this._aiGatewayDynamicRoutingProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetAiGatewayDynamicRoutingProvider = function () {
        this._aiGatewayDynamicRoutingProvider = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "aiGatewayDynamicRoutingProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiGatewayDynamicRoutingProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "conditions", {
        get: function () {
            return this.getStringAttribute('conditions');
        },
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetConditions = function () {
        this._conditions = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetKey = function () {
        this._key = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "limitType", {
        get: function () {
            return this.getStringAttribute('limit_type');
        },
        set: function (value) {
            this._limitType = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetLimitType = function () {
        this._limitType = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "limitTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limitType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "model", {
        get: function () {
            return this.getStringAttribute('model');
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetModel = function () {
        this._model = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "modelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "retries", {
        get: function () {
            return this.getNumberAttribute('retries');
        },
        set: function (value) {
            this._retries = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetRetries = function () {
        this._retries = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "retriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "window", {
        get: function () {
            return this.getNumberAttribute('window');
        },
        set: function (value) {
            this._window = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype.resetWindow = function () {
        this._window = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "windowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._window;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsPropertiesOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsPropertiesOutputReference = AiGatewayDynamicRoutingElementsPropertiesOutputReference;
function aiGatewayDynamicRoutingElementsToTerraform(struct) {
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
function aiGatewayDynamicRoutingElementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDynamicRoutingElementsOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayDynamicRoutingElementsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outputs - computed: false, optional: false, required: true
        _this._outputs = new AiGatewayDynamicRoutingElementsOutputsOutputReference(_this, "outputs");
        // properties - computed: false, optional: true, required: false
        _this._properties = new AiGatewayDynamicRoutingElementsPropertiesOutputReference(_this, "properties");
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (((_a = this._outputs) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.outputs = (_b = this._outputs) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._properties) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.properties = (_d = this._properties) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "outputs", {
        get: function () {
            return this._outputs;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputReference.prototype.putOutputs = function (value) {
        this._outputs.internalValue = value;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "outputsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputs.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRoutingElementsOutputReference.prototype.putProperties = function (value) {
        this._properties.internalValue = value;
    };
    AiGatewayDynamicRoutingElementsOutputReference.prototype.resetProperties = function () {
        this._properties.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "propertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._properties.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingElementsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingElementsOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingElementsOutputReference = AiGatewayDynamicRoutingElementsOutputReference;
var AiGatewayDynamicRoutingElementsList = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingElementsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayDynamicRoutingElementsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiGatewayDynamicRoutingElementsList.prototype.get = function (index) {
        return new AiGatewayDynamicRoutingElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiGatewayDynamicRoutingElementsList;
}(cdktf.ComplexList));
exports.AiGatewayDynamicRoutingElementsList = AiGatewayDynamicRoutingElementsList;
function aiGatewayDynamicRoutingRouteDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteDeploymentOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteDeploymentOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteDeploymentOutputReference.prototype, "deploymentId", {
        // deployment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteDeploymentOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteDeploymentOutputReference = AiGatewayDynamicRoutingRouteDeploymentOutputReference;
function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference = AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference;
function aiGatewayDynamicRoutingRouteElementsOutputsFalseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsOutputsFalseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference = AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference;
function aiGatewayDynamicRoutingRouteElementsOutputsNextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsOutputsNextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference = AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference;
function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference = AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference;
function aiGatewayDynamicRoutingRouteElementsOutputsTrueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsOutputsTrueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference = AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference;
function aiGatewayDynamicRoutingRouteElementsOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsOutputsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputsOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fallback - computed: true, optional: false, required: false
        _this._fallback = new AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(_this, "fallback");
        // false - computed: true, optional: false, required: false
        _this._false = new AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(_this, "false");
        // next - computed: true, optional: false, required: false
        _this._next = new AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(_this, "next");
        // success - computed: true, optional: false, required: false
        _this._success = new AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(_this, "success");
        // true - computed: true, optional: false, required: false
        _this._true = new AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(_this, "true");
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "fallback", {
        get: function () {
            return this._fallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "false", {
        get: function () {
            return this._false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "next", {
        get: function () {
            return this._next;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "success", {
        get: function () {
            return this._success;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.prototype, "true", {
        get: function () {
            return this._true;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputsOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference = AiGatewayDynamicRoutingRouteElementsOutputsOutputReference;
function aiGatewayDynamicRoutingRouteElementsPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "aiGatewayDynamicRoutingProvider", {
        // ai_gateway_dynamic_routing_provider - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "conditions", {
        // conditions - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conditions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "limit", {
        // limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "limitType", {
        // limit_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('limit_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "model", {
        // model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.prototype, "window", {
        // window - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('window');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference = AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference;
function aiGatewayDynamicRoutingRouteElementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteElementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteElementsOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayDynamicRoutingRouteElementsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outputs - computed: true, optional: false, required: false
        _this._outputs = new AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(_this, "outputs");
        // properties - computed: true, optional: false, required: false
        _this._properties = new AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(_this, "properties");
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputReference.prototype, "outputs", {
        get: function () {
            return this._outputs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputReference.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteElementsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteElementsOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteElementsOutputReference = AiGatewayDynamicRoutingRouteElementsOutputReference;
var AiGatewayDynamicRoutingRouteElementsList = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteElementsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayDynamicRoutingRouteElementsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiGatewayDynamicRoutingRouteElementsList.prototype.get = function (index) {
        return new AiGatewayDynamicRoutingRouteElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiGatewayDynamicRoutingRouteElementsList;
}(cdktf.ComplexList));
exports.AiGatewayDynamicRoutingRouteElementsList = AiGatewayDynamicRoutingRouteElementsList;
function aiGatewayDynamicRoutingRouteVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteVersionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteVersionOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteVersionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteVersionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteVersionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteVersionOutputReference.prototype, "active", {
        // active - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteVersionOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteVersionOutputReference.prototype, "data", {
        // data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteVersionOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteVersionOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteVersionOutputReference = AiGatewayDynamicRoutingRouteVersionOutputReference;
function aiGatewayDynamicRoutingRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingRouteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingRouteOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingRouteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingRouteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // deployment - computed: true, optional: false, required: false
        _this._deployment = new AiGatewayDynamicRoutingRouteDeploymentOutputReference(_this, "deployment");
        // elements - computed: true, optional: false, required: false
        _this._elements = new AiGatewayDynamicRoutingRouteElementsList(_this, "elements", false);
        // version - computed: true, optional: false, required: false
        _this._version = new AiGatewayDynamicRoutingRouteVersionOutputReference(_this, "version");
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "deployment", {
        get: function () {
            return this._deployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "gatewayId", {
        // gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingRouteOutputReference.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingRouteOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingRouteOutputReference = AiGatewayDynamicRoutingRouteOutputReference;
function aiGatewayDynamicRoutingVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function aiGatewayDynamicRoutingVersionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AiGatewayDynamicRoutingVersionOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRoutingVersionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDynamicRoutingVersionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDynamicRoutingVersionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingVersionOutputReference.prototype, "active", {
        // active - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingVersionOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingVersionOutputReference.prototype, "data", {
        // data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRoutingVersionOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDynamicRoutingVersionOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDynamicRoutingVersionOutputReference = AiGatewayDynamicRoutingVersionOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
var AiGatewayDynamicRouting = /** @class */ (function (_super) {
    __extends(AiGatewayDynamicRouting, _super);
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
    function AiGatewayDynamicRouting(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // deployment - computed: true, optional: false, required: false
        _this._deployment = new AiGatewayDynamicRoutingDeploymentOutputReference(_this, "deployment");
        // elements - computed: false, optional: false, required: true
        _this._elements = new AiGatewayDynamicRoutingElementsList(_this, "elements", false);
        // route - computed: true, optional: false, required: false
        _this._route = new AiGatewayDynamicRoutingRouteOutputReference(_this, "route");
        // version - computed: true, optional: false, required: false
        _this._version = new AiGatewayDynamicRoutingVersionOutputReference(_this, "version");
        _this._accountId = config.accountId;
        _this._elements.internalValue = config.elements;
        _this._gatewayId = config.gatewayId;
        _this._name = config.name;
        return _this;
    }
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
    AiGatewayDynamicRouting.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway_dynamic_routing", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRouting.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "deployment", {
        get: function () {
            return this._deployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDynamicRouting.prototype.putElements = function (value) {
        this._elements.internalValue = value;
    };
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "elementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elements.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "route", {
        get: function () {
            return this._route;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "success", {
        // success - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('success');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDynamicRouting.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AiGatewayDynamicRouting.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            elements: cdktf.listMapper(aiGatewayDynamicRoutingElementsToTerraform, false)(this._elements.internalValue),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    AiGatewayDynamicRouting.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AiGatewayDynamicRouting.tfResourceType = "cloudflare_ai_gateway_dynamic_routing";
    return AiGatewayDynamicRouting;
}(cdktf.TerraformResource));
exports.AiGatewayDynamicRouting = AiGatewayDynamicRouting;
