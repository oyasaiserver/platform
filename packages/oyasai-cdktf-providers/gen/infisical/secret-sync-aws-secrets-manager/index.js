"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager
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
exports.SecretSyncAwsSecretsManager = exports.SecretSyncAwsSecretsManagerSyncOptionsOutputReference = exports.SecretSyncAwsSecretsManagerSyncOptionsTagsList = exports.SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference = exports.SecretSyncAwsSecretsManagerDestinationConfigOutputReference = void 0;
exports.secretSyncAwsSecretsManagerDestinationConfigToTerraform = secretSyncAwsSecretsManagerDestinationConfigToTerraform;
exports.secretSyncAwsSecretsManagerDestinationConfigToHclTerraform = secretSyncAwsSecretsManagerDestinationConfigToHclTerraform;
exports.secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform = secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform;
exports.secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform = secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform;
exports.secretSyncAwsSecretsManagerSyncOptionsToTerraform = secretSyncAwsSecretsManagerSyncOptionsToTerraform;
exports.secretSyncAwsSecretsManagerSyncOptionsToHclTerraform = secretSyncAwsSecretsManagerSyncOptionsToHclTerraform;
var cdktf = require("cdktf");
function secretSyncAwsSecretsManagerDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        aws_secrets_manager_secret_name: cdktf.stringToTerraform(struct.awsSecretsManagerSecretName),
        mapping_behavior: cdktf.stringToTerraform(struct.mappingBehavior),
    };
}
function secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aws_region: {
            value: cdktf.stringToHclTerraform(struct.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_secrets_manager_secret_name: {
            value: cdktf.stringToHclTerraform(struct.awsSecretsManagerSecretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mapping_behavior: {
            value: cdktf.stringToHclTerraform(struct.mappingBehavior),
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
var SecretSyncAwsSecretsManagerDestinationConfigOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncAwsSecretsManagerDestinationConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncAwsSecretsManagerDestinationConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._awsRegion !== undefined) {
                hasAnyValues = true;
                internalValueResult.awsRegion = this._awsRegion;
            }
            if (this._awsSecretsManagerSecretName !== undefined) {
                hasAnyValues = true;
                internalValueResult.awsSecretsManagerSecretName = this._awsSecretsManagerSecretName;
            }
            if (this._mappingBehavior !== undefined) {
                hasAnyValues = true;
                internalValueResult.mappingBehavior = this._mappingBehavior;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._awsRegion = undefined;
                this._awsSecretsManagerSecretName = undefined;
                this._mappingBehavior = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._awsRegion = value.awsRegion;
                this._awsSecretsManagerSecretName = value.awsSecretsManagerSecretName;
                this._mappingBehavior = value.mappingBehavior;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "awsRegion", {
        get: function () {
            return this.getStringAttribute('aws_region');
        },
        set: function (value) {
            this._awsRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "awsRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "awsSecretsManagerSecretName", {
        get: function () {
            return this.getStringAttribute('aws_secrets_manager_secret_name');
        },
        set: function (value) {
            this._awsSecretsManagerSecretName = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype.resetAwsSecretsManagerSecretName = function () {
        this._awsSecretsManagerSecretName = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "awsSecretsManagerSecretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsSecretsManagerSecretName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "mappingBehavior", {
        get: function () {
            return this.getStringAttribute('mapping_behavior');
        },
        set: function (value) {
            this._mappingBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype.resetMappingBehavior = function () {
        this._mappingBehavior = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerDestinationConfigOutputReference.prototype, "mappingBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mappingBehavior;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncAwsSecretsManagerDestinationConfigOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncAwsSecretsManagerDestinationConfigOutputReference = SecretSyncAwsSecretsManagerDestinationConfigOutputReference;
function secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform(struct) {
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
function secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform(struct) {
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
var SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference = SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference;
var SecretSyncAwsSecretsManagerSyncOptionsTagsList = /** @class */ (function (_super) {
    __extends(SecretSyncAwsSecretsManagerSyncOptionsTagsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SecretSyncAwsSecretsManagerSyncOptionsTagsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    SecretSyncAwsSecretsManagerSyncOptionsTagsList.prototype.get = function (index) {
        return new SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return SecretSyncAwsSecretsManagerSyncOptionsTagsList;
}(cdktf.ComplexList));
exports.SecretSyncAwsSecretsManagerSyncOptionsTagsList = SecretSyncAwsSecretsManagerSyncOptionsTagsList;
function secretSyncAwsSecretsManagerSyncOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        disable_secret_deletion: cdktf.booleanToTerraform(struct.disableSecretDeletion),
        initial_sync_behavior: cdktf.stringToTerraform(struct.initialSyncBehavior),
        key_schema: cdktf.stringToTerraform(struct.keySchema),
        sync_secret_metadata_as_tags: cdktf.booleanToTerraform(struct.syncSecretMetadataAsTags),
        tags: cdktf.listMapper(secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform, false)(struct.tags),
    };
}
function secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(struct) {
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
        disable_secret_deletion: {
            value: cdktf.booleanToHclTerraform(struct.disableSecretDeletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        initial_sync_behavior: {
            value: cdktf.stringToHclTerraform(struct.initialSyncBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_schema: {
            value: cdktf.stringToHclTerraform(struct.keySchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sync_secret_metadata_as_tags: {
            value: cdktf.booleanToHclTerraform(struct.syncSecretMetadataAsTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tags: {
            value: cdktf.listMapperHcl(secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform, false)(struct.tags),
            isBlock: true,
            type: "set",
            storageClassType: "SecretSyncAwsSecretsManagerSyncOptionsTagsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretSyncAwsSecretsManagerSyncOptionsOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncAwsSecretsManagerSyncOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncAwsSecretsManagerSyncOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // tags - computed: false, optional: true, required: false
        _this._tags = new SecretSyncAwsSecretsManagerSyncOptionsTagsList(_this, "tags", true);
        return _this;
    }
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "internalValue", {
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
            if (this._disableSecretDeletion !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
            }
            if (this._initialSyncBehavior !== undefined) {
                hasAnyValues = true;
                internalValueResult.initialSyncBehavior = this._initialSyncBehavior;
            }
            if (this._keySchema !== undefined) {
                hasAnyValues = true;
                internalValueResult.keySchema = this._keySchema;
            }
            if (this._syncSecretMetadataAsTags !== undefined) {
                hasAnyValues = true;
                internalValueResult.syncSecretMetadataAsTags = this._syncSecretMetadataAsTags;
            }
            if (((_a = this._tags) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tags = (_b = this._tags) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._awsKmsKeyId = undefined;
                this._disableSecretDeletion = undefined;
                this._initialSyncBehavior = undefined;
                this._keySchema = undefined;
                this._syncSecretMetadataAsTags = undefined;
                this._tags.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._awsKmsKeyId = value.awsKmsKeyId;
                this._disableSecretDeletion = value.disableSecretDeletion;
                this._initialSyncBehavior = value.initialSyncBehavior;
                this._keySchema = value.keySchema;
                this._syncSecretMetadataAsTags = value.syncSecretMetadataAsTags;
                this._tags.internalValue = value.tags;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "awsKmsKeyId", {
        get: function () {
            return this.getStringAttribute('aws_kms_key_id');
        },
        set: function (value) {
            this._awsKmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype.resetAwsKmsKeyId = function () {
        this._awsKmsKeyId = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "awsKmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsKmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "disableSecretDeletion", {
        get: function () {
            return this.getBooleanAttribute('disable_secret_deletion');
        },
        set: function (value) {
            this._disableSecretDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype.resetDisableSecretDeletion = function () {
        this._disableSecretDeletion = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "disableSecretDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSecretDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "initialSyncBehavior", {
        get: function () {
            return this.getStringAttribute('initial_sync_behavior');
        },
        set: function (value) {
            this._initialSyncBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "initialSyncBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialSyncBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "keySchema", {
        get: function () {
            return this.getStringAttribute('key_schema');
        },
        set: function (value) {
            this._keySchema = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype.resetKeySchema = function () {
        this._keySchema = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "keySchemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keySchema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "syncSecretMetadataAsTags", {
        get: function () {
            return this.getBooleanAttribute('sync_secret_metadata_as_tags');
        },
        set: function (value) {
            this._syncSecretMetadataAsTags = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype.resetSyncSecretMetadataAsTags = function () {
        this._syncSecretMetadataAsTags = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "syncSecretMetadataAsTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._syncSecretMetadataAsTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype.putTags = function (value) {
        this._tags.internalValue = value;
    };
    SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype.resetTags = function () {
        this._tags.internalValue = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManagerSyncOptionsOutputReference.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncAwsSecretsManagerSyncOptionsOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncAwsSecretsManagerSyncOptionsOutputReference = SecretSyncAwsSecretsManagerSyncOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager}
*/
var SecretSyncAwsSecretsManager = /** @class */ (function (_super) {
    __extends(SecretSyncAwsSecretsManager, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAwsSecretsManagerConfig
    */
    function SecretSyncAwsSecretsManager(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_sync_aws_secrets_manager',
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
        // destination_config - computed: false, optional: false, required: true
        _this._destinationConfig = new SecretSyncAwsSecretsManagerDestinationConfigOutputReference(_this, "destination_config");
        // sync_options - computed: false, optional: false, required: true
        _this._syncOptions = new SecretSyncAwsSecretsManagerSyncOptionsOutputReference(_this, "sync_options");
        _this._autoSyncEnabled = config.autoSyncEnabled;
        _this._connectionId = config.connectionId;
        _this._description = config.description;
        _this._destinationConfig.internalValue = config.destinationConfig;
        _this._environment = config.environment;
        _this._name = config.name;
        _this._projectId = config.projectId;
        _this._secretPath = config.secretPath;
        _this._syncOptions.internalValue = config.syncOptions;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretSyncAwsSecretsManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAwsSecretsManager to import
    * @param importFromId The id of the existing SecretSyncAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAwsSecretsManager to import is found
    */
    SecretSyncAwsSecretsManager.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_aws_secrets_manager", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "autoSyncEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_sync_enabled');
        },
        set: function (value) {
            this._autoSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManager.prototype.resetAutoSyncEnabled = function () {
        this._autoSyncEnabled = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "autoSyncEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoSyncEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManager.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "destinationConfig", {
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManager.prototype.putDestinationConfig = function (value) {
        this._destinationConfig.internalValue = value;
    };
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "syncOptions", {
        get: function () {
            return this._syncOptions;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAwsSecretsManager.prototype.putSyncOptions = function (value) {
        this._syncOptions.internalValue = value;
    };
    Object.defineProperty(SecretSyncAwsSecretsManager.prototype, "syncOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._syncOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretSyncAwsSecretsManager.prototype.synthesizeAttributes = function () {
        return {
            auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            destination_config: secretSyncAwsSecretsManagerDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncAwsSecretsManagerSyncOptionsToTerraform(this._syncOptions.internalValue),
        };
    };
    SecretSyncAwsSecretsManager.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            auto_sync_enabled: {
                value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            connection_id: {
                value: cdktf.stringToHclTerraform(this._connectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_config: {
                value: secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAwsSecretsManagerDestinationConfig",
            },
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
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
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
            sync_options: {
                value: secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAwsSecretsManagerSyncOptions",
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
    SecretSyncAwsSecretsManager.tfResourceType = "infisical_secret_sync_aws_secrets_manager";
    return SecretSyncAwsSecretsManager;
}(cdktf.TerraformResource));
exports.SecretSyncAwsSecretsManager = SecretSyncAwsSecretsManager;
