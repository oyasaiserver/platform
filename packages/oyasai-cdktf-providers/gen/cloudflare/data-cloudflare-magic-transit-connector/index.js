"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector
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
exports.DataCloudflareMagicTransitConnector = exports.DataCloudflareMagicTransitConnectorDeviceOutputReference = void 0;
exports.dataCloudflareMagicTransitConnectorDeviceToTerraform = dataCloudflareMagicTransitConnectorDeviceToTerraform;
exports.dataCloudflareMagicTransitConnectorDeviceToHclTerraform = dataCloudflareMagicTransitConnectorDeviceToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitConnectorDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitConnectorDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitConnectorDeviceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitConnectorDeviceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitConnectorDeviceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitConnectorDeviceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitConnectorDeviceOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnectorDeviceOutputReference.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitConnectorDeviceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitConnectorDeviceOutputReference = DataCloudflareMagicTransitConnectorDeviceOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector cloudflare_magic_transit_connector}
*/
var DataCloudflareMagicTransitConnector = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitConnector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector cloudflare_magic_transit_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitConnectorConfig
    */
    function DataCloudflareMagicTransitConnector(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_connector',
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
        // device - computed: true, optional: false, required: false
        _this._device = new DataCloudflareMagicTransitConnectorDeviceOutputReference(_this, "device");
        _this._accountId = config.accountId;
        _this._connectorId = config.connectorId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitConnector to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitConnector to import is found
    */
    DataCloudflareMagicTransitConnector.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connector", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitConnector.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "activated", {
        // activated - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('activated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "connectorId", {
        get: function () {
            return this.getStringAttribute('connector_id');
        },
        set: function (value) {
            this._connectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "connectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "device", {
        get: function () {
            return this._device;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "interruptWindowDaysOfWeek", {
        // interrupt_window_days_of_week - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('interrupt_window_days_of_week');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "interruptWindowDurationHours", {
        // interrupt_window_duration_hours - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interrupt_window_duration_hours');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "interruptWindowEmbargoDates", {
        // interrupt_window_embargo_dates - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('interrupt_window_embargo_dates');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "interruptWindowHourOfDay", {
        // interrupt_window_hour_of_day - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interrupt_window_hour_of_day');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "lastHeartbeat", {
        // last_heartbeat - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_heartbeat');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "lastSeenVersion", {
        // last_seen_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "licenseKey", {
        // license_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "notes", {
        // notes - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitConnector.prototype, "timezone", {
        // timezone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timezone');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitConnector.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            connector_id: cdktf.stringToTerraform(this._connectorId),
        };
    };
    DataCloudflareMagicTransitConnector.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_id: {
                value: cdktf.stringToHclTerraform(this._connectorId),
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
    DataCloudflareMagicTransitConnector.tfResourceType = "cloudflare_magic_transit_connector";
    return DataCloudflareMagicTransitConnector;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitConnector = DataCloudflareMagicTransitConnector;
