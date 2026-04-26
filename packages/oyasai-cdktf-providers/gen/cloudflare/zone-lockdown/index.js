"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown
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
exports.ZoneLockdown = exports.ZoneLockdownConfigurationsList = exports.ZoneLockdownConfigurationsOutputReference = void 0;
exports.zoneLockdownConfigurationsToTerraform = zoneLockdownConfigurationsToTerraform;
exports.zoneLockdownConfigurationsToHclTerraform = zoneLockdownConfigurationsToHclTerraform;
var cdktf = require("cdktf");
function zoneLockdownConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target: cdktf.stringToTerraform(struct.target),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function zoneLockdownConfigurationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
}
var ZoneLockdownConfigurationsOutputReference = /** @class */ (function (_super) {
    __extends(ZoneLockdownConfigurationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZoneLockdownConfigurationsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneLockdownConfigurationsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
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
                this._target = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._target = value.target;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdownConfigurationsOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdownConfigurationsOutputReference.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(ZoneLockdownConfigurationsOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdownConfigurationsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdownConfigurationsOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(ZoneLockdownConfigurationsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ZoneLockdownConfigurationsOutputReference;
}(cdktf.ComplexObject));
exports.ZoneLockdownConfigurationsOutputReference = ZoneLockdownConfigurationsOutputReference;
var ZoneLockdownConfigurationsList = /** @class */ (function (_super) {
    __extends(ZoneLockdownConfigurationsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZoneLockdownConfigurationsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZoneLockdownConfigurationsList.prototype.get = function (index) {
        return new ZoneLockdownConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZoneLockdownConfigurationsList;
}(cdktf.ComplexList));
exports.ZoneLockdownConfigurationsList = ZoneLockdownConfigurationsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown cloudflare_zone_lockdown}
*/
var ZoneLockdown = /** @class */ (function (_super) {
    __extends(ZoneLockdown, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown cloudflare_zone_lockdown} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneLockdownConfig
    */
    function ZoneLockdown(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_lockdown',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // ==========
        // ATTRIBUTES
        // ==========
        // configurations - computed: false, optional: false, required: true
        _this._configurations = new ZoneLockdownConfigurationsList(_this, "configurations", false);
        _this._configurations.internalValue = config.configurations;
        _this._description = config.description;
        _this._paused = config.paused;
        _this._priority = config.priority;
        _this._urls = config.urls;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneLockdown resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneLockdown to import
    * @param importFromId The id of the existing ZoneLockdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneLockdown to import is found
    */
    ZoneLockdown.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdown", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZoneLockdown.prototype, "configurations", {
        get: function () {
            return this._configurations;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdown.prototype.putConfigurations = function (value) {
        this._configurations.internalValue = value;
    };
    Object.defineProperty(ZoneLockdown.prototype, "configurationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdown.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZoneLockdown.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdown.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(ZoneLockdown.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdown.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(ZoneLockdown.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "urls", {
        get: function () {
            return this.getListAttribute('urls');
        },
        set: function (value) {
            this._urls = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "urlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._urls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneLockdown.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneLockdown.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZoneLockdown.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZoneLockdown.prototype.synthesizeAttributes = function () {
        return {
            configurations: cdktf.listMapper(zoneLockdownConfigurationsToTerraform, false)(this._configurations.internalValue),
            description: cdktf.stringToTerraform(this._description),
            paused: cdktf.booleanToTerraform(this._paused),
            priority: cdktf.numberToTerraform(this._priority),
            urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZoneLockdown.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configurations: {
                value: cdktf.listMapperHcl(zoneLockdownConfigurationsToHclTerraform, false)(this._configurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZoneLockdownConfigurationsList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            urls: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    ZoneLockdown.tfResourceType = "cloudflare_zone_lockdown";
    return ZoneLockdown;
}(cdktf.TerraformResource));
exports.ZoneLockdown = ZoneLockdown;
