"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations
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
exports.DataCloudflareApiShieldDiscoveryOperations = exports.DataCloudflareApiShieldDiscoveryOperationsResultList = exports.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference = exports.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference = exports.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference = void 0;
exports.dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToTerraform = dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToTerraform;
exports.dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToHclTerraform = dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToHclTerraform;
exports.dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToTerraform = dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToTerraform;
exports.dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToHclTerraform = dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToHclTerraform;
exports.dataCloudflareApiShieldDiscoveryOperationsResultToTerraform = dataCloudflareApiShieldDiscoveryOperationsResultToTerraform;
exports.dataCloudflareApiShieldDiscoveryOperationsResultToHclTerraform = dataCloudflareApiShieldDiscoveryOperationsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.prototype, "periodSeconds", {
        // period_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.prototype, "requests", {
        // requests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference = DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference;
function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // traffic_stats - computed: true, optional: false, required: false
        _this._trafficStats = new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(_this, "traffic_stats");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.prototype, "trafficStats", {
        get: function () {
            return this._trafficStats;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference = DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference;
function dataCloudflareApiShieldDiscoveryOperationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldDiscoveryOperationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldDiscoveryOperationsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // features - computed: true, optional: false, required: false
        _this._features = new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(_this, "features");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "features", {
        get: function () {
            return this._features;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "origin", {
        // origin - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldDiscoveryOperationsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference = DataCloudflareApiShieldDiscoveryOperationsResultOutputReference;
var DataCloudflareApiShieldDiscoveryOperationsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldDiscoveryOperationsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldDiscoveryOperationsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiShieldDiscoveryOperationsResultList.prototype.get = function (index) {
        return new DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiShieldDiscoveryOperationsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareApiShieldDiscoveryOperationsResultList = DataCloudflareApiShieldDiscoveryOperationsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}
*/
var DataCloudflareApiShieldDiscoveryOperations = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldDiscoveryOperations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldDiscoveryOperationsConfig = {}
    */
    function DataCloudflareApiShieldDiscoveryOperations(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_discovery_operations',
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
        _this._result = new DataCloudflareApiShieldDiscoveryOperationsResultList(_this, "result", false);
        _this._diff = config.diff;
        _this._direction = config.direction;
        _this._endpoint = config.endpoint;
        _this._host = config.host;
        _this._maxItems = config.maxItems;
        _this._method = config.method;
        _this._order = config.order;
        _this._origin = config.origin;
        _this._state = config.state;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import
    * @param importFromId The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found
    */
    DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_discovery_operations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "diff", {
        get: function () {
            return this.getBooleanAttribute('diff');
        },
        set: function (value) {
            this._diff = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetDiff = function () {
        this._diff = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "diffInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diff;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetEndpoint = function () {
        this._endpoint = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "host", {
        get: function () {
            return this.getListAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "method", {
        get: function () {
            return this.getListAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "origin", {
        get: function () {
            return this.getStringAttribute('origin');
        },
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetOrigin = function () {
        this._origin = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "originInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldDiscoveryOperations.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldDiscoveryOperations.prototype, "zoneIdInput", {
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
    DataCloudflareApiShieldDiscoveryOperations.prototype.synthesizeAttributes = function () {
        return {
            diff: cdktf.booleanToTerraform(this._diff),
            direction: cdktf.stringToTerraform(this._direction),
            endpoint: cdktf.stringToTerraform(this._endpoint),
            host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._host),
            max_items: cdktf.numberToTerraform(this._maxItems),
            method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._method),
            order: cdktf.stringToTerraform(this._order),
            origin: cdktf.stringToTerraform(this._origin),
            state: cdktf.stringToTerraform(this._state),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShieldDiscoveryOperations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            diff: {
                value: cdktf.booleanToHclTerraform(this._diff),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._host),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            method: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._method),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            origin: {
                value: cdktf.stringToHclTerraform(this._origin),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktf.stringToHclTerraform(this._state),
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
    DataCloudflareApiShieldDiscoveryOperations.tfResourceType = "cloudflare_api_shield_discovery_operations";
    return DataCloudflareApiShieldDiscoveryOperations;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShieldDiscoveryOperations = DataCloudflareApiShieldDiscoveryOperations;
