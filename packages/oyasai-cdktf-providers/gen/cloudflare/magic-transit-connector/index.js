"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector
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
exports.MagicTransitConnector = exports.MagicTransitConnectorDeviceOutputReference = void 0;
exports.magicTransitConnectorDeviceToTerraform = magicTransitConnectorDeviceToTerraform;
exports.magicTransitConnectorDeviceToHclTerraform = magicTransitConnectorDeviceToHclTerraform;
var cdktf = require("cdktf");
function magicTransitConnectorDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        provision_license: cdktf.booleanToTerraform(struct.provisionLicense),
        serial_number: cdktf.stringToTerraform(struct.serialNumber),
    };
}
function magicTransitConnectorDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provision_license: {
            value: cdktf.booleanToHclTerraform(struct.provisionLicense),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        serial_number: {
            value: cdktf.stringToHclTerraform(struct.serialNumber),
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
var MagicTransitConnectorDeviceOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitConnectorDeviceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitConnectorDeviceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._provisionLicense !== undefined) {
                hasAnyValues = true;
                internalValueResult.provisionLicense = this._provisionLicense;
            }
            if (this._serialNumber !== undefined) {
                hasAnyValues = true;
                internalValueResult.serialNumber = this._serialNumber;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._provisionLicense = undefined;
                this._serialNumber = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._provisionLicense = value.provisionLicense;
                this._serialNumber = value.serialNumber;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnectorDeviceOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "provisionLicense", {
        get: function () {
            return this.getBooleanAttribute('provision_license');
        },
        set: function (value) {
            this._provisionLicense = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnectorDeviceOutputReference.prototype.resetProvisionLicense = function () {
        this._provisionLicense = undefined;
    };
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "provisionLicenseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisionLicense;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "serialNumber", {
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        set: function (value) {
            this._serialNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnectorDeviceOutputReference.prototype.resetSerialNumber = function () {
        this._serialNumber = undefined;
    };
    Object.defineProperty(MagicTransitConnectorDeviceOutputReference.prototype, "serialNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serialNumber;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitConnectorDeviceOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitConnectorDeviceOutputReference = MagicTransitConnectorDeviceOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector}
*/
var MagicTransitConnector = /** @class */ (function (_super) {
    __extends(MagicTransitConnector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitConnectorConfig
    */
    function MagicTransitConnector(scope, id, config) {
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
        // device - computed: false, optional: false, required: true
        _this._device = new MagicTransitConnectorDeviceOutputReference(_this, "device");
        _this._accountId = config.accountId;
        _this._activated = config.activated;
        _this._device.internalValue = config.device;
        _this._interruptWindowDurationHours = config.interruptWindowDurationHours;
        _this._interruptWindowHourOfDay = config.interruptWindowHourOfDay;
        _this._notes = config.notes;
        _this._timezone = config.timezone;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitConnector to import
    * @param importFromId The id of the existing MagicTransitConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitConnector to import is found
    */
    MagicTransitConnector.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connector", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicTransitConnector.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "activated", {
        get: function () {
            return this.getBooleanAttribute('activated');
        },
        set: function (value) {
            this._activated = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnector.prototype.resetActivated = function () {
        this._activated = undefined;
    };
    Object.defineProperty(MagicTransitConnector.prototype, "activatedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "device", {
        get: function () {
            return this._device;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnector.prototype.putDevice = function (value) {
        this._device.internalValue = value;
    };
    Object.defineProperty(MagicTransitConnector.prototype, "deviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._device.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "interruptWindowDurationHours", {
        get: function () {
            return this.getNumberAttribute('interrupt_window_duration_hours');
        },
        set: function (value) {
            this._interruptWindowDurationHours = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnector.prototype.resetInterruptWindowDurationHours = function () {
        this._interruptWindowDurationHours = undefined;
    };
    Object.defineProperty(MagicTransitConnector.prototype, "interruptWindowDurationHoursInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interruptWindowDurationHours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "interruptWindowHourOfDay", {
        get: function () {
            return this.getNumberAttribute('interrupt_window_hour_of_day');
        },
        set: function (value) {
            this._interruptWindowHourOfDay = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnector.prototype.resetInterruptWindowHourOfDay = function () {
        this._interruptWindowHourOfDay = undefined;
    };
    Object.defineProperty(MagicTransitConnector.prototype, "interruptWindowHourOfDayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interruptWindowHourOfDay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "licenseKey", {
        // license_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "notes", {
        get: function () {
            return this.getStringAttribute('notes');
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnector.prototype.resetNotes = function () {
        this._notes = undefined;
    };
    Object.defineProperty(MagicTransitConnector.prototype, "notesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitConnector.prototype, "timezone", {
        get: function () {
            return this.getStringAttribute('timezone');
        },
        set: function (value) {
            this._timezone = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitConnector.prototype.resetTimezone = function () {
        this._timezone = undefined;
    };
    Object.defineProperty(MagicTransitConnector.prototype, "timezoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timezone;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicTransitConnector.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            activated: cdktf.booleanToTerraform(this._activated),
            device: magicTransitConnectorDeviceToTerraform(this._device.internalValue),
            interrupt_window_duration_hours: cdktf.numberToTerraform(this._interruptWindowDurationHours),
            interrupt_window_hour_of_day: cdktf.numberToTerraform(this._interruptWindowHourOfDay),
            notes: cdktf.stringToTerraform(this._notes),
            timezone: cdktf.stringToTerraform(this._timezone),
        };
    };
    MagicTransitConnector.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            activated: {
                value: cdktf.booleanToHclTerraform(this._activated),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            device: {
                value: magicTransitConnectorDeviceToHclTerraform(this._device.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitConnectorDevice",
            },
            interrupt_window_duration_hours: {
                value: cdktf.numberToHclTerraform(this._interruptWindowDurationHours),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            interrupt_window_hour_of_day: {
                value: cdktf.numberToHclTerraform(this._interruptWindowHourOfDay),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            notes: {
                value: cdktf.stringToHclTerraform(this._notes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timezone: {
                value: cdktf.stringToHclTerraform(this._timezone),
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
    MagicTransitConnector.tfResourceType = "cloudflare_magic_transit_connector";
    return MagicTransitConnector;
}(cdktf.TerraformResource));
exports.MagicTransitConnector = MagicTransitConnector;
