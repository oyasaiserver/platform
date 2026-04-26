"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning
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
exports.ProjectIdentityProvisioning = exports.ProjectIdentityProvisioningMetadataList = exports.ProjectIdentityProvisioningMetadataOutputReference = void 0;
exports.projectIdentityProvisioningMetadataToTerraform = projectIdentityProvisioningMetadataToTerraform;
exports.projectIdentityProvisioningMetadataToHclTerraform = projectIdentityProvisioningMetadataToHclTerraform;
var cdktf = require("cdktf");
function projectIdentityProvisioningMetadataToTerraform(struct) {
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
function projectIdentityProvisioningMetadataToHclTerraform(struct) {
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
var ProjectIdentityProvisioningMetadataOutputReference = /** @class */ (function (_super) {
    __extends(ProjectIdentityProvisioningMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectIdentityProvisioningMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectIdentityProvisioningMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ProjectIdentityProvisioningMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioningMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioningMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioningMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectIdentityProvisioningMetadataOutputReference;
}(cdktf.ComplexObject));
exports.ProjectIdentityProvisioningMetadataOutputReference = ProjectIdentityProvisioningMetadataOutputReference;
var ProjectIdentityProvisioningMetadataList = /** @class */ (function (_super) {
    __extends(ProjectIdentityProvisioningMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectIdentityProvisioningMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectIdentityProvisioningMetadataList.prototype.get = function (index) {
        return new ProjectIdentityProvisioningMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectIdentityProvisioningMetadataList;
}(cdktf.ComplexList));
exports.ProjectIdentityProvisioningMetadataList = ProjectIdentityProvisioningMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning infisical_project_identity_provisioning}
*/
var ProjectIdentityProvisioning = /** @class */ (function (_super) {
    __extends(ProjectIdentityProvisioning, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning infisical_project_identity_provisioning} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectIdentityProvisioningConfig
    */
    function ProjectIdentityProvisioning(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_project_identity_provisioning',
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
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new ProjectIdentityProvisioningMetadataList(_this, "metadata", true);
        _this._hasDeleteProtection = config.hasDeleteProtection;
        _this._metadata.internalValue = config.metadata;
        _this._name = config.name;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectIdentityProvisioning resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectIdentityProvisioning to import
    * @param importFromId The id of the existing ProjectIdentityProvisioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectIdentityProvisioning to import is found
    */
    ProjectIdentityProvisioning.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity_provisioning", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "authMethods", {
        // ==========
        // ATTRIBUTES
        // ==========
        // auth_methods - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('auth_methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "hasDeleteProtection", {
        get: function () {
            return this.getBooleanAttribute('has_delete_protection');
        },
        set: function (value) {
            this._hasDeleteProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityProvisioning.prototype.resetHasDeleteProtection = function () {
        this._hasDeleteProtection = undefined;
    };
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "hasDeleteProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasDeleteProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityProvisioning.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    ProjectIdentityProvisioning.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityProvisioning.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectIdentityProvisioning.prototype.synthesizeAttributes = function () {
        return {
            has_delete_protection: cdktf.booleanToTerraform(this._hasDeleteProtection),
            metadata: cdktf.listMapper(projectIdentityProvisioningMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    ProjectIdentityProvisioning.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            has_delete_protection: {
                value: cdktf.booleanToHclTerraform(this._hasDeleteProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            metadata: {
                value: cdktf.listMapperHcl(projectIdentityProvisioningMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ProjectIdentityProvisioningMetadataList",
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
    ProjectIdentityProvisioning.tfResourceType = "infisical_project_identity_provisioning";
    return ProjectIdentityProvisioning;
}(cdktf.TerraformResource));
exports.ProjectIdentityProvisioning = ProjectIdentityProvisioning;
