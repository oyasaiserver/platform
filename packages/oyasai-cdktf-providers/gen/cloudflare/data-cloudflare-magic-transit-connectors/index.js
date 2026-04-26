"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors
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
exports.DataCloudflareMagicTransitConnectors = exports.DataCloudflareMagicTransitConnectorsResultList = exports.DataCloudflareMagicTransitConnectorsResultOutputReference = exports.DataCloudflareMagicTransitConnectorsResultDeviceOutputReference = void 0;
exports.dataCloudflareMagicTransitConnectorsResultDeviceToTerraform = dataCloudflareMagicTransitConnectorsResultDeviceToTerraform;
exports.dataCloudflareMagicTransitConnectorsResultDeviceToHclTerraform = dataCloudflareMagicTransitConnectorsResultDeviceToHclTerraform;
exports.dataCloudflareMagicTransitConnectorsResultToTerraform = dataCloudflareMagicTransitConnectorsResultToTerraform;
exports.dataCloudflareMagicTransitConnectorsResultToHclTerraform = dataCloudflareMagicTransitConnectorsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitConnectorsResultDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitConnectorsResultDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitConnectorsResultDeviceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitConnectorsResultDeviceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitConnectorsResultDeviceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultDeviceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultDeviceOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultDeviceOutputReference.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitConnectorsResultDeviceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitConnectorsResultDeviceOutputReference = DataCloudflareMagicTransitConnectorsResultDeviceOutputReference;
function dataCloudflareMagicTransitConnectorsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitConnectorsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitConnectorsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitConnectorsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitConnectorsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // device - computed: true, optional: false, required: false
        _this._device = new DataCloudflareMagicTransitConnectorsResultDeviceOutputReference(_this, "device");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "activated", {
        // activated - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('activated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "device", {
        get: function () {
            return this._device;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "interruptWindowDaysOfWeek", {
        // interrupt_window_days_of_week - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('interrupt_window_days_of_week');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "interruptWindowDurationHours", {
        // interrupt_window_duration_hours - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interrupt_window_duration_hours');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "interruptWindowEmbargoDates", {
        // interrupt_window_embargo_dates - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('interrupt_window_embargo_dates');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "interruptWindowHourOfDay", {
        // interrupt_window_hour_of_day - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interrupt_window_hour_of_day');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "lastHeartbeat", {
        // last_heartbeat - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_heartbeat');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "lastSeenVersion", {
        // last_seen_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "licenseKey", {
        // license_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "notes", {
        // notes - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorsResultOutputReference.prototype, "timezone", {
        // timezone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timezone');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitConnectorsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitConnectorsResultOutputReference = DataCloudflareMagicTransitConnectorsResultOutputReference;
var DataCloudflareMagicTransitConnectorsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitConnectorsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitConnectorsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicTransitConnectorsResultList.prototype.get = function (index) {
        return new DataCloudflareMagicTransitConnectorsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicTransitConnectorsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicTransitConnectorsResultList = DataCloudflareMagicTransitConnectorsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors cloudflare_magic_transit_connectors}
*/
var DataCloudflareMagicTransitConnectors = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitConnectors, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors cloudflare_magic_transit_connectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitConnectorsConfig = {}
    */
    function DataCloudflareMagicTransitConnectors(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_connectors',
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
        _this._result = new DataCloudflareMagicTransitConnectorsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitConnectors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitConnectors to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitConnectors to import is found
    */
    DataCloudflareMagicTransitConnectors.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connectors", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitConnectors.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitConnectors.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitConnectors.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectors.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitConnectors.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitConnectors.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectors.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitConnectors.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareMagicTransitConnectors.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareMagicTransitConnectors.tfResourceType = "cloudflare_magic_transit_connectors";
    return DataCloudflareMagicTransitConnectors;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitConnectors = DataCloudflareMagicTransitConnectors;
