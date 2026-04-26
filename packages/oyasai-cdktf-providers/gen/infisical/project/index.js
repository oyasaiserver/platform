"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project
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
exports.Project = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project infisical_project}
*/
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project infisical_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectConfig
    */
    function Project(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_project',
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
        _this._auditLogRetentionDays = config.auditLogRetentionDays;
        _this._description = config.description;
        _this._hasDeleteProtection = config.hasDeleteProtection;
        _this._kmsSecretManagerKeyId = config.kmsSecretManagerKeyId;
        _this._name = config.name;
        _this._shouldCreateDefaultEnvs = config.shouldCreateDefaultEnvs;
        _this._slug = config.slug;
        _this._templateName = config.templateName;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Project to import
    * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Project to import is found
    */
    Project.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Project.prototype, "auditLogRetentionDays", {
        get: function () {
            return this.getNumberAttribute('audit_log_retention_days');
        },
        set: function (value) {
            this._auditLogRetentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetAuditLogRetentionDays = function () {
        this._auditLogRetentionDays = undefined;
    };
    Object.defineProperty(Project.prototype, "auditLogRetentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditLogRetentionDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Project.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "hasDeleteProtection", {
        get: function () {
            return this.getBooleanAttribute('has_delete_protection');
        },
        set: function (value) {
            this._hasDeleteProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetHasDeleteProtection = function () {
        this._hasDeleteProtection = undefined;
    };
    Object.defineProperty(Project.prototype, "hasDeleteProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasDeleteProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "kmsSecretManagerKeyId", {
        get: function () {
            return this.getStringAttribute('kms_secret_manager_key_id');
        },
        set: function (value) {
            this._kmsSecretManagerKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetKmsSecretManagerKeyId = function () {
        this._kmsSecretManagerKeyId = undefined;
    };
    Object.defineProperty(Project.prototype, "kmsSecretManagerKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsSecretManagerKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "shouldCreateDefaultEnvs", {
        get: function () {
            return this.getBooleanAttribute('should_create_default_envs');
        },
        set: function (value) {
            this._shouldCreateDefaultEnvs = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetShouldCreateDefaultEnvs = function () {
        this._shouldCreateDefaultEnvs = undefined;
    };
    Object.defineProperty(Project.prototype, "shouldCreateDefaultEnvsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shouldCreateDefaultEnvs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "templateName", {
        get: function () {
            return this.getStringAttribute('template_name');
        },
        set: function (value) {
            this._templateName = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetTemplateName = function () {
        this._templateName = undefined;
    };
    Object.defineProperty(Project.prototype, "templateNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(Project.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Project.prototype.synthesizeAttributes = function () {
        return {
            audit_log_retention_days: cdktf.numberToTerraform(this._auditLogRetentionDays),
            description: cdktf.stringToTerraform(this._description),
            has_delete_protection: cdktf.booleanToTerraform(this._hasDeleteProtection),
            kms_secret_manager_key_id: cdktf.stringToTerraform(this._kmsSecretManagerKeyId),
            name: cdktf.stringToTerraform(this._name),
            should_create_default_envs: cdktf.booleanToTerraform(this._shouldCreateDefaultEnvs),
            slug: cdktf.stringToTerraform(this._slug),
            template_name: cdktf.stringToTerraform(this._templateName),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    Project.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            audit_log_retention_days: {
                value: cdktf.numberToHclTerraform(this._auditLogRetentionDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            has_delete_protection: {
                value: cdktf.booleanToHclTerraform(this._hasDeleteProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_secret_manager_key_id: {
                value: cdktf.stringToHclTerraform(this._kmsSecretManagerKeyId),
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
            should_create_default_envs: {
                value: cdktf.booleanToHclTerraform(this._shouldCreateDefaultEnvs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_name: {
                value: cdktf.stringToHclTerraform(this._templateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    Project.tfResourceType = "infisical_project";
    return Project;
}(cdktf.TerraformResource));
exports.Project = Project;
