"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing
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
exports.DataCloudflareAiGatewayDynamicRouting = exports.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsList = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference = exports.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference = void 0;
exports.dataCloudflareAiGatewayDynamicRoutingDeploymentToTerraform = dataCloudflareAiGatewayDynamicRoutingDeploymentToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingDeploymentToHclTerraform = dataCloudflareAiGatewayDynamicRoutingDeploymentToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsOutputsToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsOutputsToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsToTerraform = dataCloudflareAiGatewayDynamicRoutingElementsToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingElementsToHclTerraform = dataCloudflareAiGatewayDynamicRoutingElementsToHclTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingVersionToTerraform = dataCloudflareAiGatewayDynamicRoutingVersionToTerraform;
exports.dataCloudflareAiGatewayDynamicRoutingVersionToHclTerraform = dataCloudflareAiGatewayDynamicRoutingVersionToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAiGatewayDynamicRoutingDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.prototype, "deploymentId", {
        // deployment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference = DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fallback - computed: true, optional: false, required: false
        _this._fallback = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(_this, "fallback");
        // false - computed: true, optional: false, required: false
        _this._false = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference(_this, "false");
        // next - computed: true, optional: false, required: false
        _this._next = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference(_this, "next");
        // success - computed: true, optional: false, required: false
        _this._success = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(_this, "success");
        // true - computed: true, optional: false, required: false
        _this._true = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference(_this, "true");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "elementId", {
        // element_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('element_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "fallback", {
        get: function () {
            return this._fallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "false", {
        get: function () {
            return this._false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "next", {
        get: function () {
            return this._next;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "success", {
        get: function () {
            return this._success;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.prototype, "true", {
        get: function () {
            return this._true;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "aiGatewayDynamicRoutingProvider", {
        // ai_gateway_dynamic_routing_provider - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "conditions", {
        // conditions - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conditions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "limit", {
        // limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "limitType", {
        // limit_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('limit_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "model", {
        // model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.prototype, "window", {
        // window - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('window');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference;
function dataCloudflareAiGatewayDynamicRoutingElementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingElementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingElementsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outputs - computed: true, optional: false, required: false
        _this._outputs = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference(_this, "outputs");
        // properties - computed: true, optional: false, required: false
        _this._properties = new DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference(_this, "properties");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.prototype, "outputs", {
        get: function () {
            return this._outputs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingElementsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference = DataCloudflareAiGatewayDynamicRoutingElementsOutputReference;
var DataCloudflareAiGatewayDynamicRoutingElementsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingElementsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayDynamicRoutingElementsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewayDynamicRoutingElementsList.prototype.get = function (index) {
        return new DataCloudflareAiGatewayDynamicRoutingElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewayDynamicRoutingElementsList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewayDynamicRoutingElementsList = DataCloudflareAiGatewayDynamicRoutingElementsList;
function dataCloudflareAiGatewayDynamicRoutingVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDynamicRoutingVersionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDynamicRoutingVersionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRoutingVersionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDynamicRoutingVersionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.prototype, "active", {
        // active - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.prototype, "data", {
        // data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDynamicRoutingVersionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference = DataCloudflareAiGatewayDynamicRoutingVersionOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
var DataCloudflareAiGatewayDynamicRouting = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDynamicRouting, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiGatewayDynamicRoutingConfig
    */
    function DataCloudflareAiGatewayDynamicRouting(scope, id, config) {
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
        _this._deployment = new DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference(_this, "deployment");
        // elements - computed: true, optional: false, required: false
        _this._elements = new DataCloudflareAiGatewayDynamicRoutingElementsList(_this, "elements", false);
        // version - computed: true, optional: false, required: false
        _this._version = new DataCloudflareAiGatewayDynamicRoutingVersionOutputReference(_this, "version");
        _this._accountId = config.accountId;
        _this._gatewayId = config.gatewayId;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiGatewayDynamicRouting to import
    * @param importFromId The id of the existing DataCloudflareAiGatewayDynamicRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiGatewayDynamicRouting to import is found
    */
    DataCloudflareAiGatewayDynamicRouting.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway_dynamic_routing", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGatewayDynamicRouting.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "deployment", {
        get: function () {
            return this._deployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDynamicRouting.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAiGatewayDynamicRouting.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataCloudflareAiGatewayDynamicRouting.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_id: {
                value: cdktf.stringToHclTerraform(this._gatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataCloudflareAiGatewayDynamicRouting.tfResourceType = "cloudflare_ai_gateway_dynamic_routing";
    return DataCloudflareAiGatewayDynamicRouting;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAiGatewayDynamicRouting = DataCloudflareAiGatewayDynamicRouting;
