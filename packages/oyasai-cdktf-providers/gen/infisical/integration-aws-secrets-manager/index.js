"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager
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
exports.IntegrationAwsSecretsManager = exports.IntegrationAwsSecretsManagerOptionsOutputReference = exports.IntegrationAwsSecretsManagerOptionsAwsTagsList = exports.IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference = void 0;
exports.integrationAwsSecretsManagerOptionsAwsTagsToTerraform = integrationAwsSecretsManagerOptionsAwsTagsToTerraform;
exports.integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform = integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform;
exports.integrationAwsSecretsManagerOptionsToTerraform = integrationAwsSecretsManagerOptionsToTerraform;
exports.integrationAwsSecretsManagerOptionsToHclTerraform = integrationAwsSecretsManagerOptionsToHclTerraform;
var cdktf = require("cdktf");
function integrationAwsSecretsManagerOptionsAwsTagsToTerraform(struct) {
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
function integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform(struct) {
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
var IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference = /** @class */ (function (_super) {
    __extends(IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype.resetKey = function () {
        this._key = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference;
}(cdktf.ComplexObject));
exports.IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference = IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference;
var IntegrationAwsSecretsManagerOptionsAwsTagsList = /** @class */ (function (_super) {
    __extends(IntegrationAwsSecretsManagerOptionsAwsTagsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IntegrationAwsSecretsManagerOptionsAwsTagsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IntegrationAwsSecretsManagerOptionsAwsTagsList.prototype.get = function (index) {
        return new IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IntegrationAwsSecretsManagerOptionsAwsTagsList;
}(cdktf.ComplexList));
exports.IntegrationAwsSecretsManagerOptionsAwsTagsList = IntegrationAwsSecretsManagerOptionsAwsTagsList;
function integrationAwsSecretsManagerOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_tags: cdktf.listMapper(integrationAwsSecretsManagerOptionsAwsTagsToTerraform, false)(struct.awsTags),
        metadata_sync_mode: cdktf.stringToTerraform(struct.metadataSyncMode),
        secret_prefix: cdktf.stringToTerraform(struct.secretPrefix),
    };
}
function integrationAwsSecretsManagerOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aws_tags: {
            value: cdktf.listMapperHcl(integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform, false)(struct.awsTags),
            isBlock: true,
            type: "set",
            storageClassType: "IntegrationAwsSecretsManagerOptionsAwsTagsList",
        },
        metadata_sync_mode: {
            value: cdktf.stringToHclTerraform(struct.metadataSyncMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_prefix: {
            value: cdktf.stringToHclTerraform(struct.secretPrefix),
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
var IntegrationAwsSecretsManagerOptionsOutputReference = /** @class */ (function (_super) {
    __extends(IntegrationAwsSecretsManagerOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function IntegrationAwsSecretsManagerOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // aws_tags - computed: true, optional: true, required: false
        _this._awsTags = new IntegrationAwsSecretsManagerOptionsAwsTagsList(_this, "aws_tags", true);
        return _this;
    }
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._awsTags) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.awsTags = (_b = this._awsTags) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._metadataSyncMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.metadataSyncMode = this._metadataSyncMode;
            }
            if (this._secretPrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretPrefix = this._secretPrefix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._awsTags.internalValue = undefined;
                this._metadataSyncMode = undefined;
                this._secretPrefix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._awsTags.internalValue = value.awsTags;
                this._metadataSyncMode = value.metadataSyncMode;
                this._secretPrefix = value.secretPrefix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "awsTags", {
        get: function () {
            return this._awsTags;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManagerOptionsOutputReference.prototype.putAwsTags = function (value) {
        this._awsTags.internalValue = value;
    };
    IntegrationAwsSecretsManagerOptionsOutputReference.prototype.resetAwsTags = function () {
        this._awsTags.internalValue = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "awsTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsTags.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "metadataSyncMode", {
        get: function () {
            return this.getStringAttribute('metadata_sync_mode');
        },
        set: function (value) {
            this._metadataSyncMode = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManagerOptionsOutputReference.prototype.resetMetadataSyncMode = function () {
        this._metadataSyncMode = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "metadataSyncModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataSyncMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "secretPrefix", {
        get: function () {
            return this.getStringAttribute('secret_prefix');
        },
        set: function (value) {
            this._secretPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManagerOptionsOutputReference.prototype.resetSecretPrefix = function () {
        this._secretPrefix = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManagerOptionsOutputReference.prototype, "secretPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPrefix;
        },
        enumerable: false,
        configurable: true
    });
    return IntegrationAwsSecretsManagerOptionsOutputReference;
}(cdktf.ComplexObject));
exports.IntegrationAwsSecretsManagerOptionsOutputReference = IntegrationAwsSecretsManagerOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager infisical_integration_aws_secrets_manager}
*/
var IntegrationAwsSecretsManager = /** @class */ (function (_super) {
    __extends(IntegrationAwsSecretsManager, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager infisical_integration_aws_secrets_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationAwsSecretsManagerConfig
    */
    function IntegrationAwsSecretsManager(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_integration_aws_secrets_manager',
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
        // options - computed: true, optional: true, required: false
        _this._options = new IntegrationAwsSecretsManagerOptionsOutputReference(_this, "options");
        _this._accessKeyId = config.accessKeyId;
        _this._assumeRoleArn = config.assumeRoleArn;
        _this._awsRegion = config.awsRegion;
        _this._environment = config.environment;
        _this._mappingBehavior = config.mappingBehavior;
        _this._options.internalValue = config.options;
        _this._projectId = config.projectId;
        _this._secretAccessKey = config.secretAccessKey;
        _this._secretPath = config.secretPath;
        _this._secretsManagerPath = config.secretsManagerPath;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationAwsSecretsManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationAwsSecretsManager to import
    * @param importFromId The id of the existing IntegrationAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationAwsSecretsManager to import is found
    */
    IntegrationAwsSecretsManager.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_aws_secrets_manager", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManager.prototype.resetAccessKeyId = function () {
        this._accessKeyId = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "assumeRoleArn", {
        get: function () {
            return this.getStringAttribute('assume_role_arn');
        },
        set: function (value) {
            this._assumeRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManager.prototype.resetAssumeRoleArn = function () {
        this._assumeRoleArn = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "assumeRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assumeRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "awsRegion", {
        get: function () {
            return this.getStringAttribute('aws_region');
        },
        set: function (value) {
            this._awsRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "awsRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "integrationAuthId", {
        // integration_auth_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_auth_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "integrationId", {
        // integration_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "mappingBehavior", {
        get: function () {
            return this.getStringAttribute('mapping_behavior');
        },
        set: function (value) {
            this._mappingBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManager.prototype.resetMappingBehavior = function () {
        this._mappingBehavior = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "mappingBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mappingBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManager.prototype.putOptions = function (value) {
        this._options.internalValue = value;
    };
    IntegrationAwsSecretsManager.prototype.resetOptions = function () {
        this._options.internalValue = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManager.prototype.resetSecretAccessKey = function () {
        this._secretAccessKey = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "secretsManagerPath", {
        get: function () {
            return this.getStringAttribute('secrets_manager_path');
        },
        set: function (value) {
            this._secretsManagerPath = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsSecretsManager.prototype.resetSecretsManagerPath = function () {
        this._secretsManagerPath = undefined;
    };
    Object.defineProperty(IntegrationAwsSecretsManager.prototype, "secretsManagerPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretsManagerPath;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IntegrationAwsSecretsManager.prototype.synthesizeAttributes = function () {
        return {
            access_key_id: cdktf.stringToTerraform(this._accessKeyId),
            assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
            aws_region: cdktf.stringToTerraform(this._awsRegion),
            environment: cdktf.stringToTerraform(this._environment),
            mapping_behavior: cdktf.stringToTerraform(this._mappingBehavior),
            options: integrationAwsSecretsManagerOptionsToTerraform(this._options.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_manager_path: cdktf.stringToTerraform(this._secretsManagerPath),
        };
    };
    IntegrationAwsSecretsManager.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            access_key_id: {
                value: cdktf.stringToHclTerraform(this._accessKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assume_role_arn: {
                value: cdktf.stringToHclTerraform(this._assumeRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aws_region: {
                value: cdktf.stringToHclTerraform(this._awsRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mapping_behavior: {
                value: cdktf.stringToHclTerraform(this._mappingBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            options: {
                value: integrationAwsSecretsManagerOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "IntegrationAwsSecretsManagerOptions",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_access_key: {
                value: cdktf.stringToHclTerraform(this._secretAccessKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secrets_manager_path: {
                value: cdktf.stringToHclTerraform(this._secretsManagerPath),
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
    IntegrationAwsSecretsManager.tfResourceType = "infisical_integration_aws_secrets_manager";
    return IntegrationAwsSecretsManager;
}(cdktf.TerraformResource));
exports.IntegrationAwsSecretsManager = IntegrationAwsSecretsManager;
