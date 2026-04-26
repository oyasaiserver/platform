// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference extends cdktf.ComplexObject {
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
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // period_seconds - computed: true, optional: false, required: false
    get periodSeconds() {
        return this.getNumberAttribute('period_seconds');
    }
    // requests - computed: true, optional: false, required: false
    get requests() {
        return this.getNumberAttribute('requests');
    }
}
export function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference extends cdktf.ComplexObject {
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
    // traffic_stats - computed: true, optional: false, required: false
    _trafficStats = new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(this, "traffic_stats");
    get trafficStats() {
        return this._trafficStats;
    }
}
export function dataCloudflareApiShieldDiscoveryOperationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareApiShieldDiscoveryOperationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareApiShieldDiscoveryOperationsResultOutputReference extends cdktf.ComplexObject {
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
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // features - computed: true, optional: false, required: false
    _features = new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(this, "features");
    get features() {
        return this._features;
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // method - computed: true, optional: false, required: false
    get method() {
        return this.getStringAttribute('method');
    }
    // origin - computed: true, optional: false, required: false
    get origin() {
        return this.getListAttribute('origin');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
}
export class DataCloudflareApiShieldDiscoveryOperationsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}
*/
export class DataCloudflareApiShieldDiscoveryOperations extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_api_shield_discovery_operations";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_discovery_operations", importId: importFromId, provider });
    }
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
    constructor(scope, id, config = {}) {
        super(scope, id, {
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
        });
        this._diff = config.diff;
        this._direction = config.direction;
        this._endpoint = config.endpoint;
        this._host = config.host;
        this._maxItems = config.maxItems;
        this._method = config.method;
        this._order = config.order;
        this._origin = config.origin;
        this._state = config.state;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // diff - computed: false, optional: true, required: false
    _diff;
    get diff() {
        return this.getBooleanAttribute('diff');
    }
    set diff(value) {
        this._diff = value;
    }
    resetDiff() {
        this._diff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get diffInput() {
        return this._diff;
    }
    // direction - computed: false, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // endpoint - computed: false, optional: true, required: false
    _endpoint;
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    set endpoint(value) {
        this._endpoint = value;
    }
    resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointInput() {
        return this._endpoint;
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getListAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
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
    // method - computed: false, optional: true, required: false
    _method;
    get method() {
        return this.getListAttribute('method');
    }
    set method(value) {
        this._method = value;
    }
    resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method;
    }
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    // origin - computed: false, optional: true, required: false
    _origin;
    get origin() {
        return this.getStringAttribute('origin');
    }
    set origin(value) {
        this._origin = value;
    }
    resetOrigin() {
        this._origin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originInput() {
        return this._origin;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareApiShieldDiscoveryOperationsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // state - computed: false, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
