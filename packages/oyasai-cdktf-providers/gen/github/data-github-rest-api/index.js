"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api
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
exports.DataGithubRestApi = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api github_rest_api}
*/
var DataGithubRestApi = /** @class */ (function (_super) {
    __extends(DataGithubRestApi, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api github_rest_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRestApiConfig
    */
    function DataGithubRestApi(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_rest_api',
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
        _this._endpoint = config.endpoint;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRestApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRestApi to import
    * @param importFromId The id of the existing DataGithubRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRestApi to import is found
    */
    DataGithubRestApi.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_rest_api", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRestApi.prototype, "body", {
        // ==========
        // ATTRIBUTES
        // ==========
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRestApi.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRestApi.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRestApi.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRestApi.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRestApi.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRestApi.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRestApi.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRestApi.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubRestApi.prototype.synthesizeAttributes = function () {
        return {
            endpoint: cdktf.stringToTerraform(this._endpoint),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubRestApi.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
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
    DataGithubRestApi.tfResourceType = "github_rest_api";
    return DataGithubRestApi;
}(cdktf.TerraformDataSource));
exports.DataGithubRestApi = DataGithubRestApi;
