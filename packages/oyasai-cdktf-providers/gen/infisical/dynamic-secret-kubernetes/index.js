"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes
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
exports.DynamicSecretKubernetes = exports.DynamicSecretKubernetesMetadataList = exports.DynamicSecretKubernetesMetadataOutputReference = exports.DynamicSecretKubernetesConfigurationOutputReference = exports.DynamicSecretKubernetesConfigurationStaticConfigOutputReference = exports.DynamicSecretKubernetesConfigurationDynamicConfigOutputReference = exports.DynamicSecretKubernetesConfigurationApiConfigOutputReference = void 0;
exports.dynamicSecretKubernetesConfigurationApiConfigToTerraform = dynamicSecretKubernetesConfigurationApiConfigToTerraform;
exports.dynamicSecretKubernetesConfigurationApiConfigToHclTerraform = dynamicSecretKubernetesConfigurationApiConfigToHclTerraform;
exports.dynamicSecretKubernetesConfigurationDynamicConfigToTerraform = dynamicSecretKubernetesConfigurationDynamicConfigToTerraform;
exports.dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform = dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform;
exports.dynamicSecretKubernetesConfigurationStaticConfigToTerraform = dynamicSecretKubernetesConfigurationStaticConfigToTerraform;
exports.dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform = dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform;
exports.dynamicSecretKubernetesConfigurationToTerraform = dynamicSecretKubernetesConfigurationToTerraform;
exports.dynamicSecretKubernetesConfigurationToHclTerraform = dynamicSecretKubernetesConfigurationToHclTerraform;
exports.dynamicSecretKubernetesMetadataToTerraform = dynamicSecretKubernetesMetadataToTerraform;
exports.dynamicSecretKubernetesMetadataToHclTerraform = dynamicSecretKubernetesMetadataToHclTerraform;
var cdktf = require("cdktf");
function dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca: cdktf.stringToTerraform(struct.ca),
        cluster_token: cdktf.stringToTerraform(struct.clusterToken),
        cluster_url: cdktf.stringToTerraform(struct.clusterUrl),
        enable_ssl: cdktf.booleanToTerraform(struct.enableSsl),
    };
}
function dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ca: {
            value: cdktf.stringToHclTerraform(struct.ca),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_token: {
            value: cdktf.stringToHclTerraform(struct.clusterToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_url: {
            value: cdktf.stringToHclTerraform(struct.clusterUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_ssl: {
            value: cdktf.booleanToHclTerraform(struct.enableSsl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DynamicSecretKubernetesConfigurationApiConfigOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetesConfigurationApiConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretKubernetesConfigurationApiConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ca !== undefined) {
                hasAnyValues = true;
                internalValueResult.ca = this._ca;
            }
            if (this._clusterToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.clusterToken = this._clusterToken;
            }
            if (this._clusterUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.clusterUrl = this._clusterUrl;
            }
            if (this._enableSsl !== undefined) {
                hasAnyValues = true;
                internalValueResult.enableSsl = this._enableSsl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ca = undefined;
                this._clusterToken = undefined;
                this._clusterUrl = undefined;
                this._enableSsl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ca = value.ca;
                this._clusterToken = value.clusterToken;
                this._clusterUrl = value.clusterUrl;
                this._enableSsl = value.enableSsl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "ca", {
        get: function () {
            return this.getStringAttribute('ca');
        },
        set: function (value) {
            this._ca = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype.resetCa = function () {
        this._ca = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "caInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "clusterToken", {
        get: function () {
            return this.getStringAttribute('cluster_token');
        },
        set: function (value) {
            this._clusterToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "clusterTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "clusterUrl", {
        get: function () {
            return this.getStringAttribute('cluster_url');
        },
        set: function (value) {
            this._clusterUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "clusterUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "enableSsl", {
        get: function () {
            return this.getBooleanAttribute('enable_ssl');
        },
        set: function (value) {
            this._enableSsl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype.resetEnableSsl = function () {
        this._enableSsl = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationApiConfigOutputReference.prototype, "enableSslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableSsl;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretKubernetesConfigurationApiConfigOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretKubernetesConfigurationApiConfigOutputReference = DynamicSecretKubernetesConfigurationApiConfigOutputReference;
function dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_namespaces: cdktf.stringToTerraform(struct.allowedNamespaces),
        role: cdktf.stringToTerraform(struct.role),
        role_type: cdktf.stringToTerraform(struct.roleType),
    };
}
function dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_namespaces: {
            value: cdktf.stringToHclTerraform(struct.allowedNamespaces),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role: {
            value: cdktf.stringToHclTerraform(struct.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_type: {
            value: cdktf.stringToHclTerraform(struct.roleType),
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
var DynamicSecretKubernetesConfigurationDynamicConfigOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretKubernetesConfigurationDynamicConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedNamespaces !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedNamespaces = this._allowedNamespaces;
            }
            if (this._role !== undefined) {
                hasAnyValues = true;
                internalValueResult.role = this._role;
            }
            if (this._roleType !== undefined) {
                hasAnyValues = true;
                internalValueResult.roleType = this._roleType;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowedNamespaces = undefined;
                this._role = undefined;
                this._roleType = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowedNamespaces = value.allowedNamespaces;
                this._role = value.role;
                this._roleType = value.roleType;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "allowedNamespaces", {
        get: function () {
            return this.getStringAttribute('allowed_namespaces');
        },
        set: function (value) {
            this._allowedNamespaces = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "allowedNamespacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "roleType", {
        get: function () {
            return this.getStringAttribute('role_type');
        },
        set: function (value) {
            this._roleType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationDynamicConfigOutputReference.prototype, "roleTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleType;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretKubernetesConfigurationDynamicConfigOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretKubernetesConfigurationDynamicConfigOutputReference = DynamicSecretKubernetesConfigurationDynamicConfigOutputReference;
function dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace),
        service_account_name: cdktf.stringToTerraform(struct.serviceAccountName),
    };
}
function dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_name: {
            value: cdktf.stringToHclTerraform(struct.serviceAccountName),
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
var DynamicSecretKubernetesConfigurationStaticConfigOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetesConfigurationStaticConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretKubernetesConfigurationStaticConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretKubernetesConfigurationStaticConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._namespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespace = this._namespace;
            }
            if (this._serviceAccountName !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceAccountName = this._serviceAccountName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._namespace = undefined;
                this._serviceAccountName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._namespace = value.namespace;
                this._serviceAccountName = value.serviceAccountName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationStaticConfigOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationStaticConfigOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationStaticConfigOutputReference.prototype, "serviceAccountName", {
        get: function () {
            return this.getStringAttribute('service_account_name');
        },
        set: function (value) {
            this._serviceAccountName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationStaticConfigOutputReference.prototype, "serviceAccountNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceAccountName;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretKubernetesConfigurationStaticConfigOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretKubernetesConfigurationStaticConfigOutputReference = DynamicSecretKubernetesConfigurationStaticConfigOutputReference;
function dynamicSecretKubernetesConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        api_config: dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct.apiConfig),
        audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.audiences),
        auth_method: cdktf.stringToTerraform(struct.authMethod),
        credential_type: cdktf.stringToTerraform(struct.credentialType),
        dynamic_config: dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct.dynamicConfig),
        gateway_id: cdktf.stringToTerraform(struct.gatewayId),
        static_config: dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct.staticConfig),
    };
}
function dynamicSecretKubernetesConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        api_config: {
            value: dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct.apiConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretKubernetesConfigurationApiConfig",
        },
        audiences: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.audiences),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credential_type: {
            value: cdktf.stringToHclTerraform(struct.credentialType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamic_config: {
            value: dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct.dynamicConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretKubernetesConfigurationDynamicConfig",
        },
        gateway_id: {
            value: cdktf.stringToHclTerraform(struct.gatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        static_config: {
            value: dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct.staticConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretKubernetesConfigurationStaticConfig",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DynamicSecretKubernetesConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetesConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretKubernetesConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // api_config - computed: false, optional: true, required: false
        _this._apiConfig = new DynamicSecretKubernetesConfigurationApiConfigOutputReference(_this, "api_config");
        // dynamic_config - computed: false, optional: true, required: false
        _this._dynamicConfig = new DynamicSecretKubernetesConfigurationDynamicConfigOutputReference(_this, "dynamic_config");
        // static_config - computed: false, optional: true, required: false
        _this._staticConfig = new DynamicSecretKubernetesConfigurationStaticConfigOutputReference(_this, "static_config");
        return _this;
    }
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._apiConfig) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.apiConfig = (_b = this._apiConfig) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._audiences !== undefined) {
                hasAnyValues = true;
                internalValueResult.audiences = this._audiences;
            }
            if (this._authMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.authMethod = this._authMethod;
            }
            if (this._credentialType !== undefined) {
                hasAnyValues = true;
                internalValueResult.credentialType = this._credentialType;
            }
            if (((_c = this._dynamicConfig) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dynamicConfig = (_d = this._dynamicConfig) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._gatewayId !== undefined) {
                hasAnyValues = true;
                internalValueResult.gatewayId = this._gatewayId;
            }
            if (((_e = this._staticConfig) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.staticConfig = (_f = this._staticConfig) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._apiConfig.internalValue = undefined;
                this._audiences = undefined;
                this._authMethod = undefined;
                this._credentialType = undefined;
                this._dynamicConfig.internalValue = undefined;
                this._gatewayId = undefined;
                this._staticConfig.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._apiConfig.internalValue = value.apiConfig;
                this._audiences = value.audiences;
                this._authMethod = value.authMethod;
                this._credentialType = value.credentialType;
                this._dynamicConfig.internalValue = value.dynamicConfig;
                this._gatewayId = value.gatewayId;
                this._staticConfig.internalValue = value.staticConfig;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "apiConfig", {
        get: function () {
            return this._apiConfig;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationOutputReference.prototype.putApiConfig = function (value) {
        this._apiConfig.internalValue = value;
    };
    DynamicSecretKubernetesConfigurationOutputReference.prototype.resetApiConfig = function () {
        this._apiConfig.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "apiConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "audiences", {
        get: function () {
            return this.getListAttribute('audiences');
        },
        set: function (value) {
            this._audiences = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationOutputReference.prototype.resetAudiences = function () {
        this._audiences = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "audiencesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._audiences;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "authMethod", {
        get: function () {
            return this.getStringAttribute('auth_method');
        },
        set: function (value) {
            this._authMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "authMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "credentialType", {
        get: function () {
            return this.getStringAttribute('credential_type');
        },
        set: function (value) {
            this._credentialType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "credentialTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentialType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "dynamicConfig", {
        get: function () {
            return this._dynamicConfig;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationOutputReference.prototype.putDynamicConfig = function (value) {
        this._dynamicConfig.internalValue = value;
    };
    DynamicSecretKubernetesConfigurationOutputReference.prototype.resetDynamicConfig = function () {
        this._dynamicConfig.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "dynamicConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dynamicConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationOutputReference.prototype.resetGatewayId = function () {
        this._gatewayId = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "staticConfig", {
        get: function () {
            return this._staticConfig;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetesConfigurationOutputReference.prototype.putStaticConfig = function (value) {
        this._staticConfig.internalValue = value;
    };
    DynamicSecretKubernetesConfigurationOutputReference.prototype.resetStaticConfig = function () {
        this._staticConfig.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetesConfigurationOutputReference.prototype, "staticConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretKubernetesConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretKubernetesConfigurationOutputReference = DynamicSecretKubernetesConfigurationOutputReference;
function dynamicSecretKubernetesMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function dynamicSecretKubernetesMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var DynamicSecretKubernetesMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetesMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretKubernetesMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretKubernetesMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._key = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._key = value.key;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetesMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretKubernetesMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretKubernetesMetadataOutputReference = DynamicSecretKubernetesMetadataOutputReference;
var DynamicSecretKubernetesMetadataList = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetesMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretKubernetesMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretKubernetesMetadataList.prototype.get = function (index) {
        return new DynamicSecretKubernetesMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretKubernetesMetadataList;
}(cdktf.ComplexList));
exports.DynamicSecretKubernetesMetadataList = DynamicSecretKubernetesMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes}
*/
var DynamicSecretKubernetes = /** @class */ (function (_super) {
    __extends(DynamicSecretKubernetes, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretKubernetesConfig
    */
    function DynamicSecretKubernetes(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_kubernetes',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // ==========
        // ATTRIBUTES
        // ==========
        // configuration - computed: false, optional: false, required: true
        _this._configuration = new DynamicSecretKubernetesConfigurationOutputReference(_this, "configuration");
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new DynamicSecretKubernetesMetadataList(_this, "metadata", true);
        _this._configuration.internalValue = config.configuration;
        _this._defaultTtl = config.defaultTtl;
        _this._environmentSlug = config.environmentSlug;
        _this._maxTtl = config.maxTtl;
        _this._metadata.internalValue = config.metadata;
        _this._name = config.name;
        _this._path = config.path;
        _this._projectSlug = config.projectSlug;
        _this._usernameTemplate = config.usernameTemplate;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DynamicSecretKubernetes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretKubernetes to import
    * @param importFromId The id of the existing DynamicSecretKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretKubernetes to import is found
    */
    DynamicSecretKubernetes.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_kubernetes", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DynamicSecretKubernetes.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetes.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    Object.defineProperty(DynamicSecretKubernetes.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "defaultTtl", {
        get: function () {
            return this.getStringAttribute('default_ttl');
        },
        set: function (value) {
            this._defaultTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "defaultTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "maxTtl", {
        get: function () {
            return this.getStringAttribute('max_ttl');
        },
        set: function (value) {
            this._maxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetes.prototype.resetMaxTtl = function () {
        this._maxTtl = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetes.prototype, "maxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetes.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    DynamicSecretKubernetes.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetes.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretKubernetes.prototype, "usernameTemplate", {
        get: function () {
            return this.getStringAttribute('username_template');
        },
        set: function (value) {
            this._usernameTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretKubernetes.prototype.resetUsernameTemplate = function () {
        this._usernameTemplate = undefined;
    };
    Object.defineProperty(DynamicSecretKubernetes.prototype, "usernameTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamicSecretKubernetes.prototype.synthesizeAttributes = function () {
        return {
            configuration: dynamicSecretKubernetesConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretKubernetesMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    };
    DynamicSecretKubernetes.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configuration: {
                value: dynamicSecretKubernetesConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretKubernetesConfiguration",
            },
            default_ttl: {
                value: cdktf.stringToHclTerraform(this._defaultTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_ttl: {
                value: cdktf.stringToHclTerraform(this._maxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.listMapperHcl(dynamicSecretKubernetesMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretKubernetesMetadataList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username_template: {
                value: cdktf.stringToHclTerraform(this._usernameTemplate),
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
    DynamicSecretKubernetes.tfResourceType = "infisical_dynamic_secret_kubernetes";
    return DynamicSecretKubernetes;
}(cdktf.TerraformResource));
exports.DynamicSecretKubernetes = DynamicSecretKubernetes;
