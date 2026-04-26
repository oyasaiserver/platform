"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns
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
exports.DataCloudflareZoneLockdowns = exports.DataCloudflareZoneLockdownsResultList = exports.DataCloudflareZoneLockdownsResultOutputReference = exports.DataCloudflareZoneLockdownsResultConfigurationsList = exports.DataCloudflareZoneLockdownsResultConfigurationsOutputReference = void 0;
exports.dataCloudflareZoneLockdownsResultConfigurationsToTerraform = dataCloudflareZoneLockdownsResultConfigurationsToTerraform;
exports.dataCloudflareZoneLockdownsResultConfigurationsToHclTerraform = dataCloudflareZoneLockdownsResultConfigurationsToHclTerraform;
exports.dataCloudflareZoneLockdownsResultToTerraform = dataCloudflareZoneLockdownsResultToTerraform;
exports.dataCloudflareZoneLockdownsResultToHclTerraform = dataCloudflareZoneLockdownsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZoneLockdownsResultConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneLockdownsResultConfigurationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneLockdownsResultConfigurationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownsResultConfigurationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZoneLockdownsResultConfigurationsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneLockdownsResultConfigurationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneLockdownsResultConfigurationsOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultConfigurationsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneLockdownsResultConfigurationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneLockdownsResultConfigurationsOutputReference = DataCloudflareZoneLockdownsResultConfigurationsOutputReference;
var DataCloudflareZoneLockdownsResultConfigurationsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownsResultConfigurationsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZoneLockdownsResultConfigurationsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZoneLockdownsResultConfigurationsList.prototype.get = function (index) {
        return new DataCloudflareZoneLockdownsResultConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZoneLockdownsResultConfigurationsList;
}(cdktf.ComplexList));
exports.DataCloudflareZoneLockdownsResultConfigurationsList = DataCloudflareZoneLockdownsResultConfigurationsList;
function dataCloudflareZoneLockdownsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneLockdownsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneLockdownsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZoneLockdownsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // configurations - computed: true, optional: false, required: false
        _this._configurations = new DataCloudflareZoneLockdownsResultConfigurationsList(_this, "configurations", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "configurations", {
        get: function () {
            return this._configurations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdownsResultOutputReference.prototype, "urls", {
        // urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('urls');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneLockdownsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneLockdownsResultOutputReference = DataCloudflareZoneLockdownsResultOutputReference;
var DataCloudflareZoneLockdownsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdownsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZoneLockdownsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZoneLockdownsResultList.prototype.get = function (index) {
        return new DataCloudflareZoneLockdownsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZoneLockdownsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZoneLockdownsResultList = DataCloudflareZoneLockdownsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}
*/
var DataCloudflareZoneLockdowns = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneLockdowns, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneLockdownsConfig = {}
    */
    function DataCloudflareZoneLockdowns(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_lockdowns',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZoneLockdownsResultList(_this, "result", false);
        _this._createdOn = config.createdOn;
        _this._description = config.description;
        _this._descriptionSearch = config.descriptionSearch;
        _this._ip = config.ip;
        _this._ipRangeSearch = config.ipRangeSearch;
        _this._ipSearch = config.ipSearch;
        _this._maxItems = config.maxItems;
        _this._modifiedOn = config.modifiedOn;
        _this._priority = config.priority;
        _this._uriSearch = config.uriSearch;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdowns to import
    * @param importFromId The id of the existing DataCloudflareZoneLockdowns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found
    */
    DataCloudflareZoneLockdowns.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdowns", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "createdOn", {
        get: function () {
            return this.getStringAttribute('created_on');
        },
        set: function (value) {
            this._createdOn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetCreatedOn = function () {
        this._createdOn = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "createdOnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "descriptionSearch", {
        get: function () {
            return this.getStringAttribute('description_search');
        },
        set: function (value) {
            this._descriptionSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetDescriptionSearch = function () {
        this._descriptionSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "descriptionSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._descriptionSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetIp = function () {
        this._ip = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "ipRangeSearch", {
        get: function () {
            return this.getStringAttribute('ip_range_search');
        },
        set: function (value) {
            this._ipRangeSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetIpRangeSearch = function () {
        this._ipRangeSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "ipRangeSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipRangeSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "ipSearch", {
        get: function () {
            return this.getStringAttribute('ip_search');
        },
        set: function (value) {
            this._ipSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetIpSearch = function () {
        this._ipSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "ipSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "modifiedOn", {
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        set: function (value) {
            this._modifiedOn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetModifiedOn = function () {
        this._modifiedOn = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "modifiedOnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modifiedOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "uriSearch", {
        get: function () {
            return this.getStringAttribute('uri_search');
        },
        set: function (value) {
            this._uriSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetUriSearch = function () {
        this._uriSearch = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "uriSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uriSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneLockdowns.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneLockdowns.prototype, "zoneIdInput", {
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
    DataCloudflareZoneLockdowns.prototype.synthesizeAttributes = function () {
        return {
            created_on: cdktf.stringToTerraform(this._createdOn),
            description: cdktf.stringToTerraform(this._description),
            description_search: cdktf.stringToTerraform(this._descriptionSearch),
            ip: cdktf.stringToTerraform(this._ip),
            ip_range_search: cdktf.stringToTerraform(this._ipRangeSearch),
            ip_search: cdktf.stringToTerraform(this._ipSearch),
            max_items: cdktf.numberToTerraform(this._maxItems),
            modified_on: cdktf.stringToTerraform(this._modifiedOn),
            priority: cdktf.numberToTerraform(this._priority),
            uri_search: cdktf.stringToTerraform(this._uriSearch),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZoneLockdowns.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            created_on: {
                value: cdktf.stringToHclTerraform(this._createdOn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description_search: {
                value: cdktf.stringToHclTerraform(this._descriptionSearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip: {
                value: cdktf.stringToHclTerraform(this._ip),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_range_search: {
                value: cdktf.stringToHclTerraform(this._ipRangeSearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_search: {
                value: cdktf.stringToHclTerraform(this._ipSearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            modified_on: {
                value: cdktf.stringToHclTerraform(this._modifiedOn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            uri_search: {
                value: cdktf.stringToHclTerraform(this._uriSearch),
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
    DataCloudflareZoneLockdowns.tfResourceType = "cloudflare_zone_lockdowns";
    return DataCloudflareZoneLockdowns;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZoneLockdowns = DataCloudflareZoneLockdowns;
