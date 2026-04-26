"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci
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
exports.IntegrationCircleci = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci infisical_integration_circleci}
*/
var IntegrationCircleci = /** @class */ (function (_super) {
    __extends(IntegrationCircleci, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci infisical_integration_circleci} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationCircleciConfig
    */
    function IntegrationCircleci(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_integration_circleci',
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
        _this._circleciOrgSlug = config.circleciOrgSlug;
        _this._circleciProjectId = config.circleciProjectId;
        _this._circleciToken = config.circleciToken;
        _this._environment = config.environment;
        _this._projectId = config.projectId;
        _this._secretPath = config.secretPath;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationCircleci resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationCircleci to import
    * @param importFromId The id of the existing IntegrationCircleci that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationCircleci to import is found
    */
    IntegrationCircleci.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_circleci", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IntegrationCircleci.prototype, "circleciOrgSlug", {
        get: function () {
            return this.getStringAttribute('circleci_org_slug');
        },
        set: function (value) {
            this._circleciOrgSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "circleciOrgSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._circleciOrgSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "circleciProjectId", {
        get: function () {
            return this.getStringAttribute('circleci_project_id');
        },
        set: function (value) {
            this._circleciProjectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "circleciProjectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._circleciProjectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "circleciToken", {
        get: function () {
            return this.getStringAttribute('circleci_token');
        },
        set: function (value) {
            this._circleciToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "circleciTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._circleciToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "integrationAuthId", {
        // integration_auth_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_auth_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "integrationId", {
        // integration_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationCircleci.prototype, "secretPathInput", {
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
    IntegrationCircleci.prototype.synthesizeAttributes = function () {
        return {
            circleci_org_slug: cdktf.stringToTerraform(this._circleciOrgSlug),
            circleci_project_id: cdktf.stringToTerraform(this._circleciProjectId),
            circleci_token: cdktf.stringToTerraform(this._circleciToken),
            environment: cdktf.stringToTerraform(this._environment),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    };
    IntegrationCircleci.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            circleci_org_slug: {
                value: cdktf.stringToHclTerraform(this._circleciOrgSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            circleci_project_id: {
                value: cdktf.stringToHclTerraform(this._circleciProjectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            circleci_token: {
                value: cdktf.stringToHclTerraform(this._circleciToken),
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
    IntegrationCircleci.tfResourceType = "infisical_integration_circleci";
    return IntegrationCircleci;
}(cdktf.TerraformResource));
exports.IntegrationCircleci = IntegrationCircleci;
