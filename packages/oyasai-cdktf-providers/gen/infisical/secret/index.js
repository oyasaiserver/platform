"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret
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
exports.Secret = exports.SecretSecretReminderOutputReference = void 0;
exports.secretSecretReminderToTerraform = secretSecretReminderToTerraform;
exports.secretSecretReminderToHclTerraform = secretSecretReminderToHclTerraform;
var cdktf = require("cdktf");
function secretSecretReminderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        note: cdktf.stringToTerraform(struct.note),
        repeat_days: cdktf.numberToTerraform(struct.repeatDays),
    };
}
function secretSecretReminderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        note: {
            value: cdktf.stringToHclTerraform(struct.note),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repeat_days: {
            value: cdktf.numberToHclTerraform(struct.repeatDays),
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
var SecretSecretReminderOutputReference = /** @class */ (function (_super) {
    __extends(SecretSecretReminderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSecretReminderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSecretReminderOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._note !== undefined) {
                hasAnyValues = true;
                internalValueResult.note = this._note;
            }
            if (this._repeatDays !== undefined) {
                hasAnyValues = true;
                internalValueResult.repeatDays = this._repeatDays;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._note = undefined;
                this._repeatDays = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._note = value.note;
                this._repeatDays = value.repeatDays;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSecretReminderOutputReference.prototype, "note", {
        get: function () {
            return this.getStringAttribute('note');
        },
        set: function (value) {
            this._note = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSecretReminderOutputReference.prototype.resetNote = function () {
        this._note = undefined;
    };
    Object.defineProperty(SecretSecretReminderOutputReference.prototype, "noteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._note;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSecretReminderOutputReference.prototype, "repeatDays", {
        get: function () {
            return this.getNumberAttribute('repeat_days');
        },
        set: function (value) {
            this._repeatDays = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSecretReminderOutputReference.prototype, "repeatDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repeatDays;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSecretReminderOutputReference;
}(cdktf.ComplexObject));
exports.SecretSecretReminderOutputReference = SecretSecretReminderOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret infisical_secret}
*/
var Secret = /** @class */ (function (_super) {
    __extends(Secret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret infisical_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretConfig
    */
    function Secret(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret',
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
        // secret_reminder - computed: false, optional: true, required: false
        _this._secretReminder = new SecretSecretReminderOutputReference(_this, "secret_reminder");
        _this._envSlug = config.envSlug;
        _this._folderPath = config.folderPath;
        _this._metadata = config.metadata;
        _this._name = config.name;
        _this._secretReminder.internalValue = config.secretReminder;
        _this._tagIds = config.tagIds;
        _this._value = config.value;
        _this._valueWo = config.valueWo;
        _this._valueWoVersion = config.valueWoVersion;
        _this._workspaceId = config.workspaceId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Secret to import
    * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Secret to import is found
    */
    Secret.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Secret.prototype, "envSlug", {
        get: function () {
            return this.getStringAttribute('env_slug');
        },
        set: function (value) {
            this._envSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "envSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._envSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "folderPath", {
        get: function () {
            return this.getStringAttribute('folder_path');
        },
        set: function (value) {
            this._folderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "folderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._folderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "metadata", {
        get: function () {
            return this.getStringMapAttribute('metadata');
        },
        set: function (value) {
            this._metadata = value;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.resetMetadata = function () {
        this._metadata = undefined;
    };
    Object.defineProperty(Secret.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "secretReminder", {
        get: function () {
            return this._secretReminder;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.putSecretReminder = function (value) {
        this._secretReminder.internalValue = value;
    };
    Secret.prototype.resetSecretReminder = function () {
        this._secretReminder.internalValue = undefined;
    };
    Object.defineProperty(Secret.prototype, "secretReminderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretReminder.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "tagIds", {
        get: function () {
            return this.getListAttribute('tag_ids');
        },
        set: function (value) {
            this._tagIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.resetTagIds = function () {
        this._tagIds = undefined;
    };
    Object.defineProperty(Secret.prototype, "tagIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(Secret.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "valueWo", {
        get: function () {
            return this.getStringAttribute('value_wo');
        },
        set: function (value) {
            this._valueWo = value;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.resetValueWo = function () {
        this._valueWo = undefined;
    };
    Object.defineProperty(Secret.prototype, "valueWoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valueWo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "valueWoVersion", {
        get: function () {
            return this.getNumberAttribute('value_wo_version');
        },
        set: function (value) {
            this._valueWoVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.resetValueWoVersion = function () {
        this._valueWoVersion = undefined;
    };
    Object.defineProperty(Secret.prototype, "valueWoVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valueWoVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Secret.prototype, "workspaceId", {
        get: function () {
            return this.getStringAttribute('workspace_id');
        },
        set: function (value) {
            this._workspaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Secret.prototype.resetWorkspaceId = function () {
        this._workspaceId = undefined;
    };
    Object.defineProperty(Secret.prototype, "workspaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Secret.prototype.synthesizeAttributes = function () {
        return {
            env_slug: cdktf.stringToTerraform(this._envSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
            name: cdktf.stringToTerraform(this._name),
            secret_reminder: secretSecretReminderToTerraform(this._secretReminder.internalValue),
            tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
            value: cdktf.stringToTerraform(this._value),
            value_wo: cdktf.stringToTerraform(this._valueWo),
            value_wo_version: cdktf.numberToTerraform(this._valueWoVersion),
            workspace_id: cdktf.stringToTerraform(this._workspaceId),
        };
    };
    Secret.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            env_slug: {
                value: cdktf.stringToHclTerraform(this._envSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_path: {
                value: cdktf.stringToHclTerraform(this._folderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_reminder: {
                value: secretSecretReminderToHclTerraform(this._secretReminder.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSecretReminder",
            },
            tag_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value_wo: {
                value: cdktf.stringToHclTerraform(this._valueWo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value_wo_version: {
                value: cdktf.numberToHclTerraform(this._valueWoVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            workspace_id: {
                value: cdktf.stringToHclTerraform(this._workspaceId),
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
    Secret.tfResourceType = "infisical_secret";
    return Secret;
}(cdktf.TerraformResource));
exports.Secret = Secret;
