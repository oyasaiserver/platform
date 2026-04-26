// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicTransitConnectorDeviceToTerraform(struct) {
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
export function magicTransitConnectorDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitConnectorDeviceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // provision_license - computed: false, optional: true, required: false
    _provisionLicense;
    get provisionLicense() {
        return this.getBooleanAttribute('provision_license');
    }
    set provisionLicense(value) {
        this._provisionLicense = value;
    }
    resetProvisionLicense() {
        this._provisionLicense = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get provisionLicenseInput() {
        return this._provisionLicense;
    }
    // serial_number - computed: true, optional: true, required: false
    _serialNumber;
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    set serialNumber(value) {
        this._serialNumber = value;
    }
    resetSerialNumber() {
        this._serialNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serialNumberInput() {
        return this._serialNumber;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector}
*/
export class MagicTransitConnector extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_connector";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connector", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._activated = config.activated;
        this._device.internalValue = config.device;
        this._interruptWindowDurationHours = config.interruptWindowDurationHours;
        this._interruptWindowHourOfDay = config.interruptWindowHourOfDay;
        this._notes = config.notes;
        this._timezone = config.timezone;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // activated - computed: true, optional: true, required: false
    _activated;
    get activated() {
        return this.getBooleanAttribute('activated');
    }
    set activated(value) {
        this._activated = value;
    }
    resetActivated() {
        this._activated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activatedInput() {
        return this._activated;
    }
    // device - computed: false, optional: false, required: true
    _device = new MagicTransitConnectorDeviceOutputReference(this, "device");
    get device() {
        return this._device;
    }
    putDevice(value) {
        this._device.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get deviceInput() {
        return this._device.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interrupt_window_duration_hours - computed: true, optional: true, required: false
    _interruptWindowDurationHours;
    get interruptWindowDurationHours() {
        return this.getNumberAttribute('interrupt_window_duration_hours');
    }
    set interruptWindowDurationHours(value) {
        this._interruptWindowDurationHours = value;
    }
    resetInterruptWindowDurationHours() {
        this._interruptWindowDurationHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get interruptWindowDurationHoursInput() {
        return this._interruptWindowDurationHours;
    }
    // interrupt_window_hour_of_day - computed: true, optional: true, required: false
    _interruptWindowHourOfDay;
    get interruptWindowHourOfDay() {
        return this.getNumberAttribute('interrupt_window_hour_of_day');
    }
    set interruptWindowHourOfDay(value) {
        this._interruptWindowHourOfDay = value;
    }
    resetInterruptWindowHourOfDay() {
        this._interruptWindowHourOfDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get interruptWindowHourOfDayInput() {
        return this._interruptWindowHourOfDay;
    }
    // license_key - computed: true, optional: false, required: false
    get licenseKey() {
        return this.getStringAttribute('license_key');
    }
    // notes - computed: true, optional: true, required: false
    _notes;
    get notes() {
        return this.getStringAttribute('notes');
    }
    set notes(value) {
        this._notes = value;
    }
    resetNotes() {
        this._notes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notesInput() {
        return this._notes;
    }
    // timezone - computed: true, optional: true, required: false
    _timezone;
    get timezone() {
        return this.getStringAttribute('timezone');
    }
    set timezone(value) {
        this._timezone = value;
    }
    resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timezoneInput() {
        return this._timezone;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            activated: cdktf.booleanToTerraform(this._activated),
            device: magicTransitConnectorDeviceToTerraform(this._device.internalValue),
            interrupt_window_duration_hours: cdktf.numberToTerraform(this._interruptWindowDurationHours),
            interrupt_window_hour_of_day: cdktf.numberToTerraform(this._interruptWindowHourOfDay),
            notes: cdktf.stringToTerraform(this._notes),
            timezone: cdktf.stringToTerraform(this._timezone),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
