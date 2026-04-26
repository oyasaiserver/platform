"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag
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
exports.DataInfisicalSecretTag = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag infisical_secret_tag}
*/
var DataInfisicalSecretTag = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretTag, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag infisical_secret_tag} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretTagConfig
    */
    function DataInfisicalSecretTag(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_tag',
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
        _this._projectId = config.projectId;
        _this._slug = config.slug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalSecretTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecretTag to import
    * @param importFromId The id of the existing DataInfisicalSecretTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecretTag to import is found
    */
    DataInfisicalSecretTag.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_tag", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalSecretTag.prototype, "color", {
        // ==========
        // ATTRIBUTES
        // ==========
        // color - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('color');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretTag.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretTag.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretTag.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretTag.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretTag.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretTag.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalSecretTag.prototype.synthesizeAttributes = function () {
        return {
            project_id: cdktf.stringToTerraform(this._projectId),
            slug: cdktf.stringToTerraform(this._slug),
        };
    };
    DataInfisicalSecretTag.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
    DataInfisicalSecretTag.tfResourceType = "infisical_secret_tag";
    return DataInfisicalSecretTag;
}(cdktf.TerraformDataSource));
exports.DataInfisicalSecretTag = DataInfisicalSecretTag;
