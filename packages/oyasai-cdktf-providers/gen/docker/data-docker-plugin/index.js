"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin
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
exports.DataDockerPlugin = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin docker_plugin}
*/
var DataDockerPlugin = /** @class */ (function (_super) {
    __extends(DataDockerPlugin, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin docker_plugin} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerPluginConfig = {}
    */
    function DataDockerPlugin(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_plugin',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._alias = config.alias;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerPlugin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerPlugin to import
    * @param importFromId The id of the existing DataDockerPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerPlugin to import is found
    */
    DataDockerPlugin.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_plugin", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerPlugin.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerPlugin.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(DataDockerPlugin.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerPlugin.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerPlugin.prototype, "env", {
        // env - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('env'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerPlugin.prototype, "grantAllPermissions", {
        // grant_all_permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('grant_all_permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerPlugin.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerPlugin.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataDockerPlugin.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerPlugin.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerPlugin.prototype, "pluginReference", {
        // plugin_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('plugin_reference');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerPlugin.prototype.synthesizeAttributes = function () {
        return {
            alias: cdktf.stringToTerraform(this._alias),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataDockerPlugin.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
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
    DataDockerPlugin.tfResourceType = "docker_plugin";
    return DataDockerPlugin;
}(cdktf.TerraformDataSource));
exports.DataDockerPlugin = DataDockerPlugin;
