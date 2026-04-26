"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin
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
exports.Plugin = exports.PluginGrantPermissionsList = exports.PluginGrantPermissionsOutputReference = void 0;
exports.pluginGrantPermissionsToTerraform = pluginGrantPermissionsToTerraform;
exports.pluginGrantPermissionsToHclTerraform = pluginGrantPermissionsToHclTerraform;
var cdktf = require("cdktf");
function pluginGrantPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.value),
    };
}
function pluginGrantPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.value),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PluginGrantPermissionsOutputReference = /** @class */ (function (_super) {
    __extends(PluginGrantPermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PluginGrantPermissionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PluginGrantPermissionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginGrantPermissionsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginGrantPermissionsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginGrantPermissionsOutputReference.prototype, "value", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('value'));
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginGrantPermissionsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return PluginGrantPermissionsOutputReference;
}(cdktf.ComplexObject));
exports.PluginGrantPermissionsOutputReference = PluginGrantPermissionsOutputReference;
var PluginGrantPermissionsList = /** @class */ (function (_super) {
    __extends(PluginGrantPermissionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PluginGrantPermissionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    PluginGrantPermissionsList.prototype.get = function (index) {
        return new PluginGrantPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return PluginGrantPermissionsList;
}(cdktf.ComplexList));
exports.PluginGrantPermissionsList = PluginGrantPermissionsList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin docker_plugin}
*/
var Plugin = /** @class */ (function (_super) {
    __extends(Plugin, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin docker_plugin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PluginConfig
    */
    function Plugin(scope, id, config) {
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
        // grant_permissions - computed: false, optional: true, required: false
        _this._grantPermissions = new PluginGrantPermissionsList(_this, "grant_permissions", true);
        _this._alias = config.alias;
        _this._enableTimeout = config.enableTimeout;
        _this._enabled = config.enabled;
        _this._env = config.env;
        _this._forceDestroy = config.forceDestroy;
        _this._forceDisable = config.forceDisable;
        _this._grantAllPermissions = config.grantAllPermissions;
        _this._id = config.id;
        _this._name = config.name;
        _this._grantPermissions.internalValue = config.grantPermissions;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Plugin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Plugin to import
    * @param importFromId The id of the existing Plugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Plugin to import is found
    */
    Plugin.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_plugin", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Plugin.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(Plugin.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "enableTimeout", {
        get: function () {
            return this.getNumberAttribute('enable_timeout');
        },
        set: function (value) {
            this._enableTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetEnableTimeout = function () {
        this._enableTimeout = undefined;
    };
    Object.defineProperty(Plugin.prototype, "enableTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(Plugin.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "env", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('env'));
        },
        set: function (value) {
            this._env = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetEnv = function () {
        this._env = undefined;
    };
    Object.defineProperty(Plugin.prototype, "envInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._env;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(Plugin.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "forceDisable", {
        get: function () {
            return this.getBooleanAttribute('force_disable');
        },
        set: function (value) {
            this._forceDisable = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetForceDisable = function () {
        this._forceDisable = undefined;
    };
    Object.defineProperty(Plugin.prototype, "forceDisableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDisable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "grantAllPermissions", {
        get: function () {
            return this.getBooleanAttribute('grant_all_permissions');
        },
        set: function (value) {
            this._grantAllPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetGrantAllPermissions = function () {
        this._grantAllPermissions = undefined;
    };
    Object.defineProperty(Plugin.prototype, "grantAllPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grantAllPermissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Plugin.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "pluginReference", {
        // plugin_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('plugin_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "grantPermissions", {
        get: function () {
            return this._grantPermissions;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.putGrantPermissions = function (value) {
        this._grantPermissions.internalValue = value;
    };
    Plugin.prototype.resetGrantPermissions = function () {
        this._grantPermissions.internalValue = undefined;
    };
    Object.defineProperty(Plugin.prototype, "grantPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grantPermissions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Plugin.prototype.synthesizeAttributes = function () {
        return {
            alias: cdktf.stringToTerraform(this._alias),
            enable_timeout: cdktf.numberToTerraform(this._enableTimeout),
            enabled: cdktf.booleanToTerraform(this._enabled),
            env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            force_disable: cdktf.booleanToTerraform(this._forceDisable),
            grant_all_permissions: cdktf.booleanToTerraform(this._grantAllPermissions),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            grant_permissions: cdktf.listMapper(pluginGrantPermissionsToTerraform, true)(this._grantPermissions.internalValue),
        };
    };
    Plugin.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_timeout: {
                value: cdktf.numberToHclTerraform(this._enableTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            env: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            force_destroy: {
                value: cdktf.booleanToHclTerraform(this._forceDestroy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            force_disable: {
                value: cdktf.booleanToHclTerraform(this._forceDisable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            grant_all_permissions: {
                value: cdktf.booleanToHclTerraform(this._grantAllPermissions),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            grant_permissions: {
                value: cdktf.listMapperHcl(pluginGrantPermissionsToHclTerraform, true)(this._grantPermissions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "PluginGrantPermissionsList",
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
    Plugin.tfResourceType = "docker_plugin";
    return Plugin;
}(cdktf.TerraformResource));
exports.Plugin = Plugin;
