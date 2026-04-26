"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam
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
exports.DynamicSecretAwsIam = exports.DynamicSecretAwsIamMetadataList = exports.DynamicSecretAwsIamMetadataOutputReference = exports.DynamicSecretAwsIamConfigurationOutputReference = exports.DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference = exports.DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference = void 0;
exports.dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform = dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform;
exports.dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform = dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform;
exports.dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform = dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform;
exports.dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform = dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform;
exports.dynamicSecretAwsIamConfigurationToTerraform = dynamicSecretAwsIamConfigurationToTerraform;
exports.dynamicSecretAwsIamConfigurationToHclTerraform = dynamicSecretAwsIamConfigurationToHclTerraform;
exports.dynamicSecretAwsIamMetadataToTerraform = dynamicSecretAwsIamMetadataToTerraform;
exports.dynamicSecretAwsIamMetadataToHclTerraform = dynamicSecretAwsIamMetadataToHclTerraform;
var cdktf = require("cdktf");
function dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
function dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key: {
            value: cdktf.stringToHclTerraform(struct.accessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
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
var DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKey = this._accessKey;
            }
            if (this._secretAccessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretAccessKey = this._secretAccessKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKey = undefined;
                this._secretAccessKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKey = value.accessKey;
                this._secretAccessKey = value.secretAccessKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference.prototype, "accessKey", {
        get: function () {
            return this.getStringAttribute('access_key');
        },
        set: function (value) {
            this._accessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference.prototype, "accessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference = DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference;
function dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
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
var DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._roleArn !== undefined) {
                hasAnyValues = true;
                internalValueResult.roleArn = this._roleArn;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._roleArn = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._roleArn = value.roleArn;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference = DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference;
function dynamicSecretAwsIamConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_config: dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct.accessKeyConfig),
        assume_role_config: dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct.assumeRoleConfig),
        aws_path: cdktf.stringToTerraform(struct.awsPath),
        method: cdktf.stringToTerraform(struct.method),
        permission_boundary_policy_arn: cdktf.stringToTerraform(struct.permissionBoundaryPolicyArn),
        policy_arns: cdktf.stringToTerraform(struct.policyArns),
        policy_document: cdktf.stringToTerraform(struct.policyDocument),
        region: cdktf.stringToTerraform(struct.region),
        user_groups: cdktf.stringToTerraform(struct.userGroups),
    };
}
function dynamicSecretAwsIamConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key_config: {
            value: dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct.accessKeyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretAwsIamConfigurationAccessKeyConfig",
        },
        assume_role_config: {
            value: dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct.assumeRoleConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretAwsIamConfigurationAssumeRoleConfig",
        },
        aws_path: {
            value: cdktf.stringToHclTerraform(struct.awsPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission_boundary_policy_arn: {
            value: cdktf.stringToHclTerraform(struct.permissionBoundaryPolicyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_arns: {
            value: cdktf.stringToHclTerraform(struct.policyArns),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_document: {
            value: cdktf.stringToHclTerraform(struct.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_groups: {
            value: cdktf.stringToHclTerraform(struct.userGroups),
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
var DynamicSecretAwsIamConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretAwsIamConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretAwsIamConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // access_key_config - computed: false, optional: true, required: false
        _this._accessKeyConfig = new DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference(_this, "access_key_config");
        // assume_role_config - computed: false, optional: true, required: false
        _this._assumeRoleConfig = new DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference(_this, "assume_role_config");
        return _this;
    }
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._accessKeyConfig) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKeyConfig = (_b = this._accessKeyConfig) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._assumeRoleConfig) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.assumeRoleConfig = (_d = this._assumeRoleConfig) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._awsPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.awsPath = this._awsPath;
            }
            if (this._method !== undefined) {
                hasAnyValues = true;
                internalValueResult.method = this._method;
            }
            if (this._permissionBoundaryPolicyArn !== undefined) {
                hasAnyValues = true;
                internalValueResult.permissionBoundaryPolicyArn = this._permissionBoundaryPolicyArn;
            }
            if (this._policyArns !== undefined) {
                hasAnyValues = true;
                internalValueResult.policyArns = this._policyArns;
            }
            if (this._policyDocument !== undefined) {
                hasAnyValues = true;
                internalValueResult.policyDocument = this._policyDocument;
            }
            if (this._region !== undefined) {
                hasAnyValues = true;
                internalValueResult.region = this._region;
            }
            if (this._userGroups !== undefined) {
                hasAnyValues = true;
                internalValueResult.userGroups = this._userGroups;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKeyConfig.internalValue = undefined;
                this._assumeRoleConfig.internalValue = undefined;
                this._awsPath = undefined;
                this._method = undefined;
                this._permissionBoundaryPolicyArn = undefined;
                this._policyArns = undefined;
                this._policyDocument = undefined;
                this._region = undefined;
                this._userGroups = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKeyConfig.internalValue = value.accessKeyConfig;
                this._assumeRoleConfig.internalValue = value.assumeRoleConfig;
                this._awsPath = value.awsPath;
                this._method = value.method;
                this._permissionBoundaryPolicyArn = value.permissionBoundaryPolicyArn;
                this._policyArns = value.policyArns;
                this._policyDocument = value.policyDocument;
                this._region = value.region;
                this._userGroups = value.userGroups;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "accessKeyConfig", {
        get: function () {
            return this._accessKeyConfig;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.putAccessKeyConfig = function (value) {
        this._accessKeyConfig.internalValue = value;
    };
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetAccessKeyConfig = function () {
        this._accessKeyConfig.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "accessKeyConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "assumeRoleConfig", {
        get: function () {
            return this._assumeRoleConfig;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.putAssumeRoleConfig = function (value) {
        this._assumeRoleConfig.internalValue = value;
    };
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetAssumeRoleConfig = function () {
        this._assumeRoleConfig.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "assumeRoleConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assumeRoleConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "awsPath", {
        get: function () {
            return this.getStringAttribute('aws_path');
        },
        set: function (value) {
            this._awsPath = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetAwsPath = function () {
        this._awsPath = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "awsPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "permissionBoundaryPolicyArn", {
        get: function () {
            return this.getStringAttribute('permission_boundary_policy_arn');
        },
        set: function (value) {
            this._permissionBoundaryPolicyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetPermissionBoundaryPolicyArn = function () {
        this._permissionBoundaryPolicyArn = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "permissionBoundaryPolicyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionBoundaryPolicyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "policyArns", {
        get: function () {
            return this.getStringAttribute('policy_arns');
        },
        set: function (value) {
            this._policyArns = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetPolicyArns = function () {
        this._policyArns = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "policyArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "policyDocument", {
        get: function () {
            return this.getStringAttribute('policy_document');
        },
        set: function (value) {
            this._policyDocument = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetPolicyDocument = function () {
        this._policyDocument = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "policyDocumentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyDocument;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "userGroups", {
        get: function () {
            return this.getStringAttribute('user_groups');
        },
        set: function (value) {
            this._userGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIamConfigurationOutputReference.prototype.resetUserGroups = function () {
        this._userGroups = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIamConfigurationOutputReference.prototype, "userGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userGroups;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretAwsIamConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretAwsIamConfigurationOutputReference = DynamicSecretAwsIamConfigurationOutputReference;
function dynamicSecretAwsIamMetadataToTerraform(struct) {
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
function dynamicSecretAwsIamMetadataToHclTerraform(struct) {
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
var DynamicSecretAwsIamMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretAwsIamMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretAwsIamMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretAwsIamMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DynamicSecretAwsIamMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIamMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretAwsIamMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretAwsIamMetadataOutputReference = DynamicSecretAwsIamMetadataOutputReference;
var DynamicSecretAwsIamMetadataList = /** @class */ (function (_super) {
    __extends(DynamicSecretAwsIamMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretAwsIamMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretAwsIamMetadataList.prototype.get = function (index) {
        return new DynamicSecretAwsIamMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretAwsIamMetadataList;
}(cdktf.ComplexList));
exports.DynamicSecretAwsIamMetadataList = DynamicSecretAwsIamMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam}
*/
var DynamicSecretAwsIam = /** @class */ (function (_super) {
    __extends(DynamicSecretAwsIam, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretAwsIamConfig
    */
    function DynamicSecretAwsIam(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_aws_iam',
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
        _this._configuration = new DynamicSecretAwsIamConfigurationOutputReference(_this, "configuration");
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new DynamicSecretAwsIamMetadataList(_this, "metadata", true);
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
    * Generates CDKTF code for importing a DynamicSecretAwsIam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretAwsIam to import
    * @param importFromId The id of the existing DynamicSecretAwsIam that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretAwsIam to import is found
    */
    DynamicSecretAwsIam.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_aws_iam", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DynamicSecretAwsIam.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIam.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    Object.defineProperty(DynamicSecretAwsIam.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "defaultTtl", {
        get: function () {
            return this.getStringAttribute('default_ttl');
        },
        set: function (value) {
            this._defaultTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "defaultTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "maxTtl", {
        get: function () {
            return this.getStringAttribute('max_ttl');
        },
        set: function (value) {
            this._maxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIam.prototype.resetMaxTtl = function () {
        this._maxTtl = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIam.prototype, "maxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIam.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    DynamicSecretAwsIam.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIam.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretAwsIam.prototype, "usernameTemplate", {
        get: function () {
            return this.getStringAttribute('username_template');
        },
        set: function (value) {
            this._usernameTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretAwsIam.prototype.resetUsernameTemplate = function () {
        this._usernameTemplate = undefined;
    };
    Object.defineProperty(DynamicSecretAwsIam.prototype, "usernameTemplateInput", {
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
    DynamicSecretAwsIam.prototype.synthesizeAttributes = function () {
        return {
            configuration: dynamicSecretAwsIamConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretAwsIamMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    };
    DynamicSecretAwsIam.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configuration: {
                value: dynamicSecretAwsIamConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretAwsIamConfiguration",
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
                value: cdktf.listMapperHcl(dynamicSecretAwsIamMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretAwsIamMetadataList",
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
    DynamicSecretAwsIam.tfResourceType = "infisical_dynamic_secret_aws_iam";
    return DynamicSecretAwsIam;
}(cdktf.TerraformResource));
exports.DynamicSecretAwsIam = DynamicSecretAwsIam;
