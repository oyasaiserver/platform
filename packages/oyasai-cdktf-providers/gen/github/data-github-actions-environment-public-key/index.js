"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key
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
exports.DataGithubActionsEnvironmentPublicKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key github_actions_environment_public_key}
*/
var DataGithubActionsEnvironmentPublicKey = /** @class */ (function (_super) {
    __extends(DataGithubActionsEnvironmentPublicKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key github_actions_environment_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsEnvironmentPublicKeyConfig
    */
    function DataGithubActionsEnvironmentPublicKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_environment_public_key',
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
        _this._environment = config.environment;
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubActionsEnvironmentPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsEnvironmentPublicKey to import
    * @param importFromId The id of the existing DataGithubActionsEnvironmentPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsEnvironmentPublicKey to import is found
    */
    DataGithubActionsEnvironmentPublicKey.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_environment_public_key", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubActionsEnvironmentPublicKey.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "keyId", {
        // key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentPublicKey.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubActionsEnvironmentPublicKey.prototype.synthesizeAttributes = function () {
        return {
            environment: cdktf.stringToTerraform(this._environment),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubActionsEnvironmentPublicKey.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
    DataGithubActionsEnvironmentPublicKey.tfResourceType = "github_actions_environment_public_key";
    return DataGithubActionsEnvironmentPublicKey;
}(cdktf.TerraformDataSource));
exports.DataGithubActionsEnvironmentPublicKey = DataGithubActionsEnvironmentPublicKey;
