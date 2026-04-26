"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token
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
exports.DataGithubAppToken = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token github_app_token}
*/
var DataGithubAppToken = /** @class */ (function (_super) {
    __extends(DataGithubAppToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token github_app_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubAppTokenConfig
    */
    function DataGithubAppToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_app_token',
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
        _this._appId = config.appId;
        _this._id = config.id;
        _this._installationId = config.installationId;
        _this._pemFile = config.pemFile;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubAppToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubAppToken to import
    * @param importFromId The id of the existing DataGithubAppToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubAppToken to import is found
    */
    DataGithubAppToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_app_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubAppToken.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubAppToken.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubAppToken.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "installationId", {
        get: function () {
            return this.getStringAttribute('installation_id');
        },
        set: function (value) {
            this._installationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "installationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._installationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "pemFile", {
        get: function () {
            return this.getStringAttribute('pem_file');
        },
        set: function (value) {
            this._pemFile = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "pemFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pemFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubAppToken.prototype, "token", {
        // token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubAppToken.prototype.synthesizeAttributes = function () {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            id: cdktf.stringToTerraform(this._id),
            installation_id: cdktf.stringToTerraform(this._installationId),
            pem_file: cdktf.stringToTerraform(this._pemFile),
        };
    };
    DataGithubAppToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            app_id: {
                value: cdktf.stringToHclTerraform(this._appId),
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
            installation_id: {
                value: cdktf.stringToHclTerraform(this._installationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pem_file: {
                value: cdktf.stringToHclTerraform(this._pemFile),
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
    DataGithubAppToken.tfResourceType = "github_app_token";
    return DataGithubAppToken;
}(cdktf.TerraformDataSource));
exports.DataGithubAppToken = DataGithubAppToken;
