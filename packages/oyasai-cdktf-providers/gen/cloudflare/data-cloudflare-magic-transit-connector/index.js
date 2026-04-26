// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareMagicTransitConnectorDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitConnectorDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitConnectorDeviceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector cloudflare_magic_transit_connector}
*/
export class DataCloudflareMagicTransitConnector extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_connector";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connector", importId: importFromId, provider });
    }
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
        this._connectorId = config.connectorId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // activated - computed: true, optional: false, required: false
    get activated() {
        return this.getBooleanAttribute('activated');
    }
    // connector_id - computed: false, optional: false, required: true
    _connectorId;
    get connectorId() {
        return this.getStringAttribute('connector_id');
    }
    set connectorId(value) {
        this._connectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    get connectorIdInput() {
        return this._connectorId;
    }
    // device - computed: true, optional: false, required: false
    _device = new DataCloudflareMagicTransitConnectorDeviceOutputReference(this, "device");
    get device() {
        return this._device;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interrupt_window_days_of_week - computed: true, optional: false, required: false
    get interruptWindowDaysOfWeek() {
        return this.getListAttribute('interrupt_window_days_of_week');
    }
    // interrupt_window_duration_hours - computed: true, optional: false, required: false
    get interruptWindowDurationHours() {
        return this.getNumberAttribute('interrupt_window_duration_hours');
    }
    // interrupt_window_embargo_dates - computed: true, optional: false, required: false
    get interruptWindowEmbargoDates() {
        return this.getListAttribute('interrupt_window_embargo_dates');
    }
    // interrupt_window_hour_of_day - computed: true, optional: false, required: false
    get interruptWindowHourOfDay() {
        return this.getNumberAttribute('interrupt_window_hour_of_day');
    }
    // last_heartbeat - computed: true, optional: false, required: false
    get lastHeartbeat() {
        return this.getStringAttribute('last_heartbeat');
    }
    // last_seen_version - computed: true, optional: false, required: false
    get lastSeenVersion() {
        return this.getStringAttribute('last_seen_version');
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // license_key - computed: true, optional: false, required: false
    get licenseKey() {
        return this.getStringAttribute('license_key');
    }
    // notes - computed: true, optional: false, required: false
    get notes() {
        return this.getStringAttribute('notes');
    }
    // timezone - computed: true, optional: false, required: false
    get timezone() {
        return this.getStringAttribute('timezone');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            connector_id: cdktf.stringToTerraform(this._connectorId),
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
            connector_id: {
                value: cdktf.stringToHclTerraform(this._connectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
