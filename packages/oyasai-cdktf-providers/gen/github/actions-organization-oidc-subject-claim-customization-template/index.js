"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_oidc_subject_claim_customization_template
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
exports.ActionsOrganizationOidcSubjectClaimCustomizationTemplate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}
*/
var ActionsOrganizationOidcSubjectClaimCustomizationTemplate = /** @class */ (function (_super) {
    __extends(ActionsOrganizationOidcSubjectClaimCustomizationTemplate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig
    */
    function ActionsOrganizationOidcSubjectClaimCustomizationTemplate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_organization_oidc_subject_claim_customization_template',
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
        _this._id = config.id;
        _this._includeClaimKeys = config.includeClaimKeys;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationOidcSubjectClaimCustomizationTemplate to import
    * @param importFromId The id of the existing ActionsOrganizationOidcSubjectClaimCustomizationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationOidcSubjectClaimCustomizationTemplate to import is found
    */
    ActionsOrganizationOidcSubjectClaimCustomizationTemplate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_oidc_subject_claim_customization_template", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype, "includeClaimKeys", {
        get: function () {
            return this.getListAttribute('include_claim_keys');
        },
        set: function (value) {
            this._includeClaimKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype, "includeClaimKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeClaimKeys;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            include_claim_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeClaimKeys),
        };
    };
    ActionsOrganizationOidcSubjectClaimCustomizationTemplate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include_claim_keys: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeClaimKeys),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
    ActionsOrganizationOidcSubjectClaimCustomizationTemplate.tfResourceType = "github_actions_organization_oidc_subject_claim_customization_template";
    return ActionsOrganizationOidcSubjectClaimCustomizationTemplate;
}(cdktf.TerraformResource));
exports.ActionsOrganizationOidcSubjectClaimCustomizationTemplate = ActionsOrganizationOidcSubjectClaimCustomizationTemplate;
