"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks
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
exports.IntegrationDatabricks = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks infisical_integration_databricks}
*/
var IntegrationDatabricks = /** @class */ (function (_super) {
    __extends(IntegrationDatabricks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks infisical_integration_databricks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationDatabricksConfig
    */
    function IntegrationDatabricks(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_integration_databricks',
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
        _this._databricksHost = config.databricksHost;
        _this._databricksSecretScope = config.databricksSecretScope;
        _this._databricksToken = config.databricksToken;
        _this._environment = config.environment;
        _this._projectId = config.projectId;
        _this._secretPath = config.secretPath;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationDatabricks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationDatabricks to import
    * @param importFromId The id of the existing IntegrationDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationDatabricks to import is found
    */
    IntegrationDatabricks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_databricks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IntegrationDatabricks.prototype, "databricksHost", {
        get: function () {
            return this.getStringAttribute('databricks_host');
        },
        set: function (value) {
            this._databricksHost = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "databricksHostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databricksHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "databricksSecretScope", {
        get: function () {
            return this.getStringAttribute('databricks_secret_scope');
        },
        set: function (value) {
            this._databricksSecretScope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "databricksSecretScopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databricksSecretScope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "databricksToken", {
        get: function () {
            return this.getStringAttribute('databricks_token');
        },
        set: function (value) {
            this._databricksToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "databricksTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databricksToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "integrationAuthId", {
        // integration_auth_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_auth_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "integrationId", {
        // integration_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationDatabricks.prototype, "secretPathInput", {
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
    IntegrationDatabricks.prototype.synthesizeAttributes = function () {
        return {
            databricks_host: cdktf.stringToTerraform(this._databricksHost),
            databricks_secret_scope: cdktf.stringToTerraform(this._databricksSecretScope),
            databricks_token: cdktf.stringToTerraform(this._databricksToken),
            environment: cdktf.stringToTerraform(this._environment),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    };
    IntegrationDatabricks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            databricks_host: {
                value: cdktf.stringToHclTerraform(this._databricksHost),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            databricks_secret_scope: {
                value: cdktf.stringToHclTerraform(this._databricksSecretScope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            databricks_token: {
                value: cdktf.stringToHclTerraform(this._databricksToken),
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
    IntegrationDatabricks.tfResourceType = "infisical_integration_databricks";
    return IntegrationDatabricks;
}(cdktf.TerraformResource));
exports.IntegrationDatabricks = IntegrationDatabricks;
