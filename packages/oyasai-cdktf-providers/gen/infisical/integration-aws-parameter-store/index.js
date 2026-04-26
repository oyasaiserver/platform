"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store
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
exports.IntegrationAwsParameterStore = exports.IntegrationAwsParameterStoreOptionsOutputReference = exports.IntegrationAwsParameterStoreOptionsAwsTagsList = exports.IntegrationAwsParameterStoreOptionsAwsTagsOutputReference = void 0;
exports.integrationAwsParameterStoreOptionsAwsTagsToTerraform = integrationAwsParameterStoreOptionsAwsTagsToTerraform;
exports.integrationAwsParameterStoreOptionsAwsTagsToHclTerraform = integrationAwsParameterStoreOptionsAwsTagsToHclTerraform;
exports.integrationAwsParameterStoreOptionsToTerraform = integrationAwsParameterStoreOptionsToTerraform;
exports.integrationAwsParameterStoreOptionsToHclTerraform = integrationAwsParameterStoreOptionsToHclTerraform;
var cdktf = require("cdktf");
function integrationAwsParameterStoreOptionsAwsTagsToTerraform(struct) {
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
function integrationAwsParameterStoreOptionsAwsTagsToHclTerraform(struct) {
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
var IntegrationAwsParameterStoreOptionsAwsTagsOutputReference = /** @class */ (function (_super) {
    __extends(IntegrationAwsParameterStoreOptionsAwsTagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IntegrationAwsParameterStoreOptionsAwsTagsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype.resetKey = function () {
        this._key = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStoreOptionsAwsTagsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return IntegrationAwsParameterStoreOptionsAwsTagsOutputReference;
}(cdktf.ComplexObject));
exports.IntegrationAwsParameterStoreOptionsAwsTagsOutputReference = IntegrationAwsParameterStoreOptionsAwsTagsOutputReference;
var IntegrationAwsParameterStoreOptionsAwsTagsList = /** @class */ (function (_super) {
    __extends(IntegrationAwsParameterStoreOptionsAwsTagsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IntegrationAwsParameterStoreOptionsAwsTagsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IntegrationAwsParameterStoreOptionsAwsTagsList.prototype.get = function (index) {
        return new IntegrationAwsParameterStoreOptionsAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IntegrationAwsParameterStoreOptionsAwsTagsList;
}(cdktf.ComplexList));
exports.IntegrationAwsParameterStoreOptionsAwsTagsList = IntegrationAwsParameterStoreOptionsAwsTagsList;
function integrationAwsParameterStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_tags: cdktf.listMapper(integrationAwsParameterStoreOptionsAwsTagsToTerraform, false)(struct.awsTags),
        should_disable_delete: cdktf.booleanToTerraform(struct.shouldDisableDelete),
    };
}
function integrationAwsParameterStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aws_tags: {
            value: cdktf.listMapperHcl(integrationAwsParameterStoreOptionsAwsTagsToHclTerraform, false)(struct.awsTags),
            isBlock: true,
            type: "set",
            storageClassType: "IntegrationAwsParameterStoreOptionsAwsTagsList",
        },
        should_disable_delete: {
            value: cdktf.booleanToHclTerraform(struct.shouldDisableDelete),
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
var IntegrationAwsParameterStoreOptionsOutputReference = /** @class */ (function (_super) {
    __extends(IntegrationAwsParameterStoreOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function IntegrationAwsParameterStoreOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // aws_tags - computed: true, optional: true, required: false
        _this._awsTags = new IntegrationAwsParameterStoreOptionsAwsTagsList(_this, "aws_tags", true);
        return _this;
    }
    Object.defineProperty(IntegrationAwsParameterStoreOptionsOutputReference.prototype, "internalValue", {
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
            if (this._shouldDisableDelete !== undefined) {
                hasAnyValues = true;
                internalValueResult.shouldDisableDelete = this._shouldDisableDelete;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._awsTags.internalValue = undefined;
                this._shouldDisableDelete = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._awsTags.internalValue = value.awsTags;
                this._shouldDisableDelete = value.shouldDisableDelete;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStoreOptionsOutputReference.prototype, "awsTags", {
        get: function () {
            return this._awsTags;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStoreOptionsOutputReference.prototype.putAwsTags = function (value) {
        this._awsTags.internalValue = value;
    };
    IntegrationAwsParameterStoreOptionsOutputReference.prototype.resetAwsTags = function () {
        this._awsTags.internalValue = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStoreOptionsOutputReference.prototype, "awsTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsTags.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStoreOptionsOutputReference.prototype, "shouldDisableDelete", {
        get: function () {
            return this.getBooleanAttribute('should_disable_delete');
        },
        set: function (value) {
            this._shouldDisableDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStoreOptionsOutputReference.prototype.resetShouldDisableDelete = function () {
        this._shouldDisableDelete = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStoreOptionsOutputReference.prototype, "shouldDisableDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shouldDisableDelete;
        },
        enumerable: false,
        configurable: true
    });
    return IntegrationAwsParameterStoreOptionsOutputReference;
}(cdktf.ComplexObject));
exports.IntegrationAwsParameterStoreOptionsOutputReference = IntegrationAwsParameterStoreOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store}
*/
var IntegrationAwsParameterStore = /** @class */ (function (_super) {
    __extends(IntegrationAwsParameterStore, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationAwsParameterStoreConfig
    */
    function IntegrationAwsParameterStore(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_integration_aws_parameter_store',
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
        _this._options = new IntegrationAwsParameterStoreOptionsOutputReference(_this, "options");
        _this._accessKeyId = config.accessKeyId;
        _this._assumeRoleArn = config.assumeRoleArn;
        _this._awsRegion = config.awsRegion;
        _this._environment = config.environment;
        _this._options.internalValue = config.options;
        _this._parameterStorePath = config.parameterStorePath;
        _this._projectId = config.projectId;
        _this._secretAccessKey = config.secretAccessKey;
        _this._secretPath = config.secretPath;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationAwsParameterStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationAwsParameterStore to import
    * @param importFromId The id of the existing IntegrationAwsParameterStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationAwsParameterStore to import is found
    */
    IntegrationAwsParameterStore.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_aws_parameter_store", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStore.prototype.resetAccessKeyId = function () {
        this._accessKeyId = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "assumeRoleArn", {
        get: function () {
            return this.getStringAttribute('assume_role_arn');
        },
        set: function (value) {
            this._assumeRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStore.prototype.resetAssumeRoleArn = function () {
        this._assumeRoleArn = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "assumeRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assumeRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "awsRegion", {
        get: function () {
            return this.getStringAttribute('aws_region');
        },
        set: function (value) {
            this._awsRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "awsRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "integrationAuthId", {
        // integration_auth_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_auth_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "integrationId", {
        // integration_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStore.prototype.putOptions = function (value) {
        this._options.internalValue = value;
    };
    IntegrationAwsParameterStore.prototype.resetOptions = function () {
        this._options.internalValue = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "parameterStorePath", {
        get: function () {
            return this.getStringAttribute('parameter_store_path');
        },
        set: function (value) {
            this._parameterStorePath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "parameterStorePathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterStorePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationAwsParameterStore.prototype.resetSecretAccessKey = function () {
        this._secretAccessKey = undefined;
    };
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationAwsParameterStore.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IntegrationAwsParameterStore.prototype.synthesizeAttributes = function () {
        return {
            access_key_id: cdktf.stringToTerraform(this._accessKeyId),
            assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
            aws_region: cdktf.stringToTerraform(this._awsRegion),
            environment: cdktf.stringToTerraform(this._environment),
            options: integrationAwsParameterStoreOptionsToTerraform(this._options.internalValue),
            parameter_store_path: cdktf.stringToTerraform(this._parameterStorePath),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    };
    IntegrationAwsParameterStore.prototype.synthesizeHclAttributes = function () {
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
            options: {
                value: integrationAwsParameterStoreOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "IntegrationAwsParameterStoreOptions",
            },
            parameter_store_path: {
                value: cdktf.stringToHclTerraform(this._parameterStorePath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    IntegrationAwsParameterStore.tfResourceType = "infisical_integration_aws_parameter_store";
    return IntegrationAwsParameterStore;
}(cdktf.TerraformResource));
exports.IntegrationAwsParameterStore = IntegrationAwsParameterStore;
