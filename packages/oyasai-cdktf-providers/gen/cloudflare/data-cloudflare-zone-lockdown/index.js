"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown
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
exports.DataCloudflareZoneLockdown = exports.DataCloudflareZoneLockdownFilterOutputReference = exports.DataCloudflareZoneLockdownConfigurationsList = exports.DataCloudflareZoneLockdownConfigurationsOutputReference = void 0;
exports.dataCloudflareZoneLockdownConfigurationsToTerraform = dataCloudflareZoneLockdownConfigurationsToTerraform;
exports.dataCloudflareZoneLockdownConfigurationsToHclTerraform = dataCloudflareZoneLockdownConfigurationsToHclTerraform;
exports.dataCloudflareZoneLockdownFilterToTerraform = dataCloudflareZoneLockdownFilterToTerraform;
exports.dataCloudflareZoneLockdownFilterToHclTerraform = dataCloudflareZoneLockdownFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZoneLockdownConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneLockdownConfigurationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneLockdownConfigurationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownConfigurationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZoneLockdownConfigurationsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneLockdownConfigurationsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownConfigurationsOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownConfigurationsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneLockdownConfigurationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneLockdownConfigurationsOutputReference = DataCloudflareZoneLockdownConfigurationsOutputReference;
var DataCloudflareZoneLockdownConfigurationsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownConfigurationsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZoneLockdownConfigurationsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZoneLockdownConfigurationsList.prototype.get = function (index) {
        return new DataCloudflareZoneLockdownConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZoneLockdownConfigurationsList;
}(cdktf.ComplexList));
exports.DataCloudflareZoneLockdownConfigurationsList = DataCloudflareZoneLockdownConfigurationsList;
function dataCloudflareZoneLockdownFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        created_on: cdktf.stringToTerraform(struct.createdOn),
        description: cdktf.stringToTerraform(struct.description),
        description_search: cdktf.stringToTerraform(struct.descriptionSearch),
        ip: cdktf.stringToTerraform(struct.ip),
        ip_range_search: cdktf.stringToTerraform(struct.ipRangeSearch),
        ip_search: cdktf.stringToTerraform(struct.ipSearch),
        modified_on: cdktf.stringToTerraform(struct.modifiedOn),
        priority: cdktf.numberToTerraform(struct.priority),
        uri_search: cdktf.stringToTerraform(struct.uriSearch),
    };
}
function dataCloudflareZoneLockdownFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        created_on: {
            value: cdktf.stringToHclTerraform(struct.createdOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description_search: {
            value: cdktf.stringToHclTerraform(struct.descriptionSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_range_search: {
            value: cdktf.stringToHclTerraform(struct.ipRangeSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_search: {
            value: cdktf.stringToHclTerraform(struct.ipSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_on: {
            value: cdktf.stringToHclTerraform(struct.modifiedOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uri_search: {
            value: cdktf.stringToHclTerraform(struct.uriSearch),
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
var DataCloudflareZoneLockdownFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneLockdownFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._createdOn !== undefined) {
                hasAnyValues = true;
                internalValueResult.createdOn = this._createdOn;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._descriptionSearch !== undefined) {
                hasAnyValues = true;
                internalValueResult.descriptionSearch = this._descriptionSearch;
            }
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            if (this._ipRangeSearch !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipRangeSearch = this._ipRangeSearch;
            }
            if (this._ipSearch !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipSearch = this._ipSearch;
            }
            if (this._modifiedOn !== undefined) {
                hasAnyValues = true;
                internalValueResult.modifiedOn = this._modifiedOn;
            }
            if (this._priority !== undefined) {
                hasAnyValues = true;
                internalValueResult.priority = this._priority;
            }
            if (this._uriSearch !== undefined) {
                hasAnyValues = true;
                internalValueResult.uriSearch = this._uriSearch;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._createdOn = undefined;
                this._description = undefined;
                this._descriptionSearch = undefined;
                this._ip = undefined;
                this._ipRangeSearch = undefined;
                this._ipSearch = undefined;
                this._modifiedOn = undefined;
                this._priority = undefined;
                this._uriSearch = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._createdOn = value.createdOn;
                this._description = value.description;
                this._descriptionSearch = value.descriptionSearch;
                this._ip = value.ip;
                this._ipRangeSearch = value.ipRangeSearch;
                this._ipSearch = value.ipSearch;
                this._modifiedOn = value.modifiedOn;
                this._priority = value.priority;
                this._uriSearch = value.uriSearch;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "createdOn", {
        get: function () {
            return this.getStringAttribute('created_on');
        },
        set: function (value) {
            this._createdOn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetCreatedOn = function () {
        this._createdOn = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "createdOnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "descriptionSearch", {
        get: function () {
            return this.getStringAttribute('description_search');
        },
        set: function (value) {
            this._descriptionSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetDescriptionSearch = function () {
        this._descriptionSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "descriptionSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._descriptionSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetIp = function () {
        this._ip = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "ipRangeSearch", {
        get: function () {
            return this.getStringAttribute('ip_range_search');
        },
        set: function (value) {
            this._ipRangeSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetIpRangeSearch = function () {
        this._ipRangeSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "ipRangeSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipRangeSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "ipSearch", {
        get: function () {
            return this.getStringAttribute('ip_search');
        },
        set: function (value) {
            this._ipSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetIpSearch = function () {
        this._ipSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "ipSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "modifiedOn", {
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        set: function (value) {
            this._modifiedOn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetModifiedOn = function () {
        this._modifiedOn = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "modifiedOnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modifiedOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "uriSearch", {
        get: function () {
            return this.getStringAttribute('uri_search');
        },
        set: function (value) {
            this._uriSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdownFilterOutputReference.prototype.resetUriSearch = function () {
        this._uriSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdownFilterOutputReference.prototype, "uriSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uriSearch;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneLockdownFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneLockdownFilterOutputReference = DataCloudflareZoneLockdownFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}
*/
var DataCloudflareZoneLockdown = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdown, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneLockdownConfig = {}
    */
    function DataCloudflareZoneLockdown(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // configurations - computed: true, optional: false, required: false
        _this._configurations = new DataCloudflareZoneLockdownConfigurationsList(_this, "configurations", false);
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZoneLockdownFilterOutputReference(_this, "filter");
        _this._filter.internalValue = config.filter;
        _this._lockDownsId = config.lockDownsId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdown to import
    * @param importFromId The id of the existing DataCloudflareZoneLockdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found
    */
    DataCloudflareZoneLockdown.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdown", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "configurations", {
        get: function () {
            return this._configurations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdown.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZoneLockdown.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "lockDownsId", {
        get: function () {
            return this.getStringAttribute('lock_downs_id');
        },
        set: function (value) {
            this._lockDownsId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdown.prototype.resetLockDownsId = function () {
        this._lockDownsId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "lockDownsIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lockDownsId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "urls", {
        // urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdown.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdown.prototype, "zoneIdInput", {
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
    DataCloudflareZoneLockdown.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareZoneLockdownFilterToTerraform(this._filter.internalValue),
            lock_downs_id: cdktf.stringToTerraform(this._lockDownsId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZoneLockdown.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareZoneLockdownFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZoneLockdownFilter",
            },
            lock_downs_id: {
                value: cdktf.stringToHclTerraform(this._lockDownsId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareZoneLockdown.tfResourceType = "cloudflare_zone_lockdown";
    return DataCloudflareZoneLockdown;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZoneLockdown = DataCloudflareZoneLockdown;
