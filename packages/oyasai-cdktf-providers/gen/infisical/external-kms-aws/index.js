"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws
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
exports.ExternalKmsAws = exports.ExternalKmsAwsConfigurationOutputReference = exports.ExternalKmsAwsConfigurationCredentialOutputReference = void 0;
exports.externalKmsAwsConfigurationCredentialToTerraform = externalKmsAwsConfigurationCredentialToTerraform;
exports.externalKmsAwsConfigurationCredentialToHclTerraform = externalKmsAwsConfigurationCredentialToHclTerraform;
exports.externalKmsAwsConfigurationToTerraform = externalKmsAwsConfigurationToTerraform;
exports.externalKmsAwsConfigurationToHclTerraform = externalKmsAwsConfigurationToHclTerraform;
var cdktf = require("cdktf");
function externalKmsAwsConfigurationCredentialToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        role_external_id: cdktf.stringToTerraform(struct.roleExternalId),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
function externalKmsAwsConfigurationCredentialToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_external_id: {
            value: cdktf.stringToHclTerraform(struct.roleExternalId),
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
var ExternalKmsAwsConfigurationCredentialOutputReference = /** @class */ (function (_super) {
    __extends(ExternalKmsAwsConfigurationCredentialOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ExternalKmsAwsConfigurationCredentialOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKeyId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKeyId = this._accessKeyId;
            }
            if (this._roleArn !== undefined) {
                hasAnyValues = true;
                internalValueResult.roleArn = this._roleArn;
            }
            if (this._roleExternalId !== undefined) {
                hasAnyValues = true;
                internalValueResult.roleExternalId = this._roleExternalId;
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
                this._accessKeyId = undefined;
                this._roleArn = undefined;
                this._roleExternalId = undefined;
                this._secretAccessKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKeyId = value.accessKeyId;
                this._roleArn = value.roleArn;
                this._roleExternalId = value.roleExternalId;
                this._secretAccessKey = value.secretAccessKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAwsConfigurationCredentialOutputReference.prototype.resetAccessKeyId = function () {
        this._accessKeyId = undefined;
    };
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAwsConfigurationCredentialOutputReference.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "roleExternalId", {
        get: function () {
            return this.getStringAttribute('role_external_id');
        },
        set: function (value) {
            this._roleExternalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAwsConfigurationCredentialOutputReference.prototype.resetRoleExternalId = function () {
        this._roleExternalId = undefined;
    };
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "roleExternalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleExternalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAwsConfigurationCredentialOutputReference.prototype.resetSecretAccessKey = function () {
        this._secretAccessKey = undefined;
    };
    Object.defineProperty(ExternalKmsAwsConfigurationCredentialOutputReference.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    return ExternalKmsAwsConfigurationCredentialOutputReference;
}(cdktf.ComplexObject));
exports.ExternalKmsAwsConfigurationCredentialOutputReference = ExternalKmsAwsConfigurationCredentialOutputReference;
function externalKmsAwsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        credential: externalKmsAwsConfigurationCredentialToTerraform(struct.credential),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function externalKmsAwsConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aws_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.awsKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktf.stringToHclTerraform(struct.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credential: {
            value: externalKmsAwsConfigurationCredentialToHclTerraform(struct.credential),
            isBlock: true,
            type: "struct",
            storageClassType: "ExternalKmsAwsConfigurationCredential",
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
var ExternalKmsAwsConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(ExternalKmsAwsConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ExternalKmsAwsConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // credential - computed: false, optional: false, required: true
        _this._credential = new ExternalKmsAwsConfigurationCredentialOutputReference(_this, "credential");
        return _this;
    }
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._awsKmsKeyId !== undefined) {
                hasAnyValues = true;
                internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
            }
            if (this._awsRegion !== undefined) {
                hasAnyValues = true;
                internalValueResult.awsRegion = this._awsRegion;
            }
            if (((_a = this._credential) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.credential = (_b = this._credential) === null || _b === void 0 ? void 0 : _b.internalValue;
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
                this._awsKmsKeyId = undefined;
                this._awsRegion = undefined;
                this._credential.internalValue = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._awsKmsKeyId = value.awsKmsKeyId;
                this._awsRegion = value.awsRegion;
                this._credential.internalValue = value.credential;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "awsKmsKeyId", {
        get: function () {
            return this.getStringAttribute('aws_kms_key_id');
        },
        set: function (value) {
            this._awsKmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "awsKmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsKmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "awsRegion", {
        get: function () {
            return this.getStringAttribute('aws_region');
        },
        set: function (value) {
            this._awsRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "awsRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "credential", {
        get: function () {
            return this._credential;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAwsConfigurationOutputReference.prototype.putCredential = function (value) {
        this._credential.internalValue = value;
    };
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "credentialInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credential.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAwsConfigurationOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return ExternalKmsAwsConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.ExternalKmsAwsConfigurationOutputReference = ExternalKmsAwsConfigurationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws infisical_external_kms_aws}
*/
var ExternalKmsAws = /** @class */ (function (_super) {
    __extends(ExternalKmsAws, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws infisical_external_kms_aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ExternalKmsAwsConfig
    */
    function ExternalKmsAws(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_external_kms_aws',
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
        _this._configuration = new ExternalKmsAwsConfigurationOutputReference(_this, "configuration");
        _this._configuration.internalValue = config.configuration;
        _this._description = config.description;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ExternalKmsAws resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ExternalKmsAws to import
    * @param importFromId The id of the existing ExternalKmsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ExternalKmsAws to import is found
    */
    ExternalKmsAws.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_external_kms_aws", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ExternalKmsAws.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAws.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    Object.defineProperty(ExternalKmsAws.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAws.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAws.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ExternalKmsAws.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ExternalKmsAws.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAws.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAws.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExternalKmsAws.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ExternalKmsAws.prototype.synthesizeAttributes = function () {
        return {
            configuration: externalKmsAwsConfigurationToTerraform(this._configuration.internalValue),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    ExternalKmsAws.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configuration: {
                value: externalKmsAwsConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ExternalKmsAwsConfiguration",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
    ExternalKmsAws.tfResourceType = "infisical_external_kms_aws";
    return ExternalKmsAws;
}(cdktf.TerraformResource));
exports.ExternalKmsAws = ExternalKmsAws;
