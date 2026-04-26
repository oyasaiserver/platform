// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareMagicTransitConnectorsResultDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitConnectorsResultDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitConnectorsResultDeviceOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareMagicTransitConnectorsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitConnectorsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitConnectorsResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // activated - computed: true, optional: false, required: false
    get activated() {
        return this.getBooleanAttribute('activated');
    }
    // device - computed: true, optional: false, required: false
    _device = new DataCloudflareMagicTransitConnectorsResultDeviceOutputReference(this, "device");
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
}
export class DataCloudflareMagicTransitConnectorsResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareMagicTransitConnectorsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors cloudflare_magic_transit_connectors}
*/
export class DataCloudflareMagicTransitConnectors extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_connectors";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connectors", importId: importFromId, provider });
    }
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
    constructor(scope, id, config = {}) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._maxItems = config.maxItems;
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareMagicTransitConnectorsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
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
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
