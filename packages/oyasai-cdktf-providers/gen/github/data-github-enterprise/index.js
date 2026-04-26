"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/enterprise
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
exports.DataGithubEnterprise = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/enterprise github_enterprise}
*/
var DataGithubEnterprise = /** @class */ (function (_super) {
    __extends(DataGithubEnterprise, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/enterprise github_enterprise} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubEnterpriseConfig
    */
    function DataGithubEnterprise(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_enterprise',
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
        _this._slug = config.slug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubEnterprise resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubEnterprise to import
    * @param importFromId The id of the existing DataGithubEnterprise that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/enterprise#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubEnterprise to import is found
    */
    DataGithubEnterprise.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubEnterprise.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "databaseId", {
        // database_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('database_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubEnterprise.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubEnterprise.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubEnterprise.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubEnterprise.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            slug: cdktf.stringToTerraform(this._slug),
        };
    };
    DataGithubEnterprise.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
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
    DataGithubEnterprise.tfResourceType = "github_enterprise";
    return DataGithubEnterprise;
}(cdktf.TerraformDataSource));
exports.DataGithubEnterprise = DataGithubEnterprise;
