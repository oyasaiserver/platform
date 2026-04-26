"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_workflow_permissions
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
exports.ActionsOrganizationWorkflowPermissions = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_workflow_permissions github_actions_organization_workflow_permissions}
*/
var ActionsOrganizationWorkflowPermissions = /** @class */ (function (_super) {
    __extends(ActionsOrganizationWorkflowPermissions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_workflow_permissions github_actions_organization_workflow_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationWorkflowPermissionsConfig
    */
    function ActionsOrganizationWorkflowPermissions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_organization_workflow_permissions',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._canApprovePullRequestReviews = config.canApprovePullRequestReviews;
        _this._defaultWorkflowPermissions = config.defaultWorkflowPermissions;
        _this._id = config.id;
        _this._organizationSlug = config.organizationSlug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationWorkflowPermissions to import
    * @param importFromId The id of the existing ActionsOrganizationWorkflowPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_workflow_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationWorkflowPermissions to import is found
    */
    ActionsOrganizationWorkflowPermissions.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_workflow_permissions", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "canApprovePullRequestReviews", {
        get: function () {
            return this.getBooleanAttribute('can_approve_pull_request_reviews');
        },
        set: function (value) {
            this._canApprovePullRequestReviews = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationWorkflowPermissions.prototype.resetCanApprovePullRequestReviews = function () {
        this._canApprovePullRequestReviews = undefined;
    };
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "canApprovePullRequestReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._canApprovePullRequestReviews;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "defaultWorkflowPermissions", {
        get: function () {
            return this.getStringAttribute('default_workflow_permissions');
        },
        set: function (value) {
            this._defaultWorkflowPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationWorkflowPermissions.prototype.resetDefaultWorkflowPermissions = function () {
        this._defaultWorkflowPermissions = undefined;
    };
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "defaultWorkflowPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultWorkflowPermissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationWorkflowPermissions.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "organizationSlug", {
        get: function () {
            return this.getStringAttribute('organization_slug');
        },
        set: function (value) {
            this._organizationSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationWorkflowPermissions.prototype, "organizationSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organizationSlug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsOrganizationWorkflowPermissions.prototype.synthesizeAttributes = function () {
        return {
            can_approve_pull_request_reviews: cdktf.booleanToTerraform(this._canApprovePullRequestReviews),
            default_workflow_permissions: cdktf.stringToTerraform(this._defaultWorkflowPermissions),
            id: cdktf.stringToTerraform(this._id),
            organization_slug: cdktf.stringToTerraform(this._organizationSlug),
        };
    };
    ActionsOrganizationWorkflowPermissions.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            can_approve_pull_request_reviews: {
                value: cdktf.booleanToHclTerraform(this._canApprovePullRequestReviews),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            default_workflow_permissions: {
                value: cdktf.stringToHclTerraform(this._defaultWorkflowPermissions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_slug: {
                value: cdktf.stringToHclTerraform(this._organizationSlug),
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
    ActionsOrganizationWorkflowPermissions.tfResourceType = "github_actions_organization_workflow_permissions";
    return ActionsOrganizationWorkflowPermissions;
}(cdktf.TerraformResource));
exports.ActionsOrganizationWorkflowPermissions = ActionsOrganizationWorkflowPermissions;
