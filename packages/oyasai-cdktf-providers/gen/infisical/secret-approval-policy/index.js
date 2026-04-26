"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy
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
exports.SecretApprovalPolicy = exports.SecretApprovalPolicyApproversList = exports.SecretApprovalPolicyApproversOutputReference = void 0;
exports.secretApprovalPolicyApproversToTerraform = secretApprovalPolicyApproversToTerraform;
exports.secretApprovalPolicyApproversToHclTerraform = secretApprovalPolicyApproversToHclTerraform;
var cdktf = require("cdktf");
function secretApprovalPolicyApproversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        type: cdktf.stringToTerraform(struct.type),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function secretApprovalPolicyApproversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
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
var SecretApprovalPolicyApproversOutputReference = /** @class */ (function (_super) {
    __extends(SecretApprovalPolicyApproversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SecretApprovalPolicyApproversOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._username !== undefined) {
                hasAnyValues = true;
                internalValueResult.username = this._username;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._type = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._type = value.type;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicyApproversOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicyApproversOutputReference.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(SecretApprovalPolicyApproversOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return SecretApprovalPolicyApproversOutputReference;
}(cdktf.ComplexObject));
exports.SecretApprovalPolicyApproversOutputReference = SecretApprovalPolicyApproversOutputReference;
var SecretApprovalPolicyApproversList = /** @class */ (function (_super) {
    __extends(SecretApprovalPolicyApproversList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SecretApprovalPolicyApproversList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    SecretApprovalPolicyApproversList.prototype.get = function (index) {
        return new SecretApprovalPolicyApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return SecretApprovalPolicyApproversList;
}(cdktf.ComplexList));
exports.SecretApprovalPolicyApproversList = SecretApprovalPolicyApproversList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy infisical_secret_approval_policy}
*/
var SecretApprovalPolicy = /** @class */ (function (_super) {
    __extends(SecretApprovalPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy infisical_secret_approval_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretApprovalPolicyConfig
    */
    function SecretApprovalPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_approval_policy',
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
        // approvers - computed: false, optional: false, required: true
        _this._approvers = new SecretApprovalPolicyApproversList(_this, "approvers", true);
        _this._allowSelfApproval = config.allowSelfApproval;
        _this._approvers.internalValue = config.approvers;
        _this._enforcementLevel = config.enforcementLevel;
        _this._environmentSlug = config.environmentSlug;
        _this._environmentSlugs = config.environmentSlugs;
        _this._name = config.name;
        _this._projectId = config.projectId;
        _this._requiredApprovals = config.requiredApprovals;
        _this._secretPath = config.secretPath;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretApprovalPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretApprovalPolicy to import
    * @param importFromId The id of the existing SecretApprovalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretApprovalPolicy to import is found
    */
    SecretApprovalPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_approval_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "allowSelfApproval", {
        get: function () {
            return this.getBooleanAttribute('allow_self_approval');
        },
        set: function (value) {
            this._allowSelfApproval = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicy.prototype.resetAllowSelfApproval = function () {
        this._allowSelfApproval = undefined;
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "allowSelfApprovalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowSelfApproval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "approvers", {
        get: function () {
            return this._approvers;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicy.prototype.putApprovers = function (value) {
        this._approvers.internalValue = value;
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "approversInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "enforcementLevel", {
        get: function () {
            return this.getStringAttribute('enforcement_level');
        },
        set: function (value) {
            this._enforcementLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicy.prototype.resetEnforcementLevel = function () {
        this._enforcementLevel = undefined;
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "enforcementLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforcementLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicy.prototype.resetEnvironmentSlug = function () {
        this._environmentSlug = undefined;
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "environmentSlugs", {
        get: function () {
            return this.getListAttribute('environment_slugs');
        },
        set: function (value) {
            this._environmentSlugs = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicy.prototype.resetEnvironmentSlugs = function () {
        this._environmentSlugs = undefined;
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "environmentSlugsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlugs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretApprovalPolicy.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SecretApprovalPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "requiredApprovals", {
        get: function () {
            return this.getNumberAttribute('required_approvals');
        },
        set: function (value) {
            this._requiredApprovals = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "requiredApprovalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredApprovals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApprovalPolicy.prototype, "secretPathInput", {
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
    SecretApprovalPolicy.prototype.synthesizeAttributes = function () {
        return {
            allow_self_approval: cdktf.booleanToTerraform(this._allowSelfApproval),
            approvers: cdktf.listMapper(secretApprovalPolicyApproversToTerraform, false)(this._approvers.internalValue),
            enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            environment_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentSlugs),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            required_approvals: cdktf.numberToTerraform(this._requiredApprovals),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    };
    SecretApprovalPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allow_self_approval: {
                value: cdktf.booleanToHclTerraform(this._allowSelfApproval),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            approvers: {
                value: cdktf.listMapperHcl(secretApprovalPolicyApproversToHclTerraform, false)(this._approvers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "SecretApprovalPolicyApproversList",
            },
            enforcement_level: {
                value: cdktf.stringToHclTerraform(this._enforcementLevel),
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
            environment_slugs: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentSlugs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
            required_approvals: {
                value: cdktf.numberToHclTerraform(this._requiredApprovals),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    SecretApprovalPolicy.tfResourceType = "infisical_secret_approval_policy";
    return SecretApprovalPolicy;
}(cdktf.TerraformResource));
exports.SecretApprovalPolicy = SecretApprovalPolicy;
