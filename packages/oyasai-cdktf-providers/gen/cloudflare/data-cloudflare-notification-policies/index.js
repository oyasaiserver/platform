// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareNotificationPoliciesResultFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPoliciesResultFiltersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPoliciesResultFiltersOutputReference extends cdktf.ComplexObject {
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
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // affected_asns - computed: true, optional: false, required: false
    get affectedAsns() {
        return this.getListAttribute('affected_asns');
    }
    // affected_components - computed: true, optional: false, required: false
    get affectedComponents() {
        return this.getListAttribute('affected_components');
    }
    // affected_locations - computed: true, optional: false, required: false
    get affectedLocations() {
        return this.getListAttribute('affected_locations');
    }
    // airport_code - computed: true, optional: false, required: false
    get airportCode() {
        return this.getListAttribute('airport_code');
    }
    // alert_trigger_preferences - computed: true, optional: false, required: false
    get alertTriggerPreferences() {
        return this.getListAttribute('alert_trigger_preferences');
    }
    // alert_trigger_preferences_value - computed: true, optional: false, required: false
    get alertTriggerPreferencesValue() {
        return this.getListAttribute('alert_trigger_preferences_value');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getListAttribute('enabled');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.getListAttribute('environment');
    }
    // event - computed: true, optional: false, required: false
    get event() {
        return this.getListAttribute('event');
    }
    // event_source - computed: true, optional: false, required: false
    get eventSource() {
        return this.getListAttribute('event_source');
    }
    // event_type - computed: true, optional: false, required: false
    get eventType() {
        return this.getListAttribute('event_type');
    }
    // group_by - computed: true, optional: false, required: false
    get groupBy() {
        return this.getListAttribute('group_by');
    }
    // health_check_id - computed: true, optional: false, required: false
    get healthCheckId() {
        return this.getListAttribute('health_check_id');
    }
    // incident_impact - computed: true, optional: false, required: false
    get incidentImpact() {
        return this.getListAttribute('incident_impact');
    }
    // input_id - computed: true, optional: false, required: false
    get inputId() {
        return this.getListAttribute('input_id');
    }
    // insight_class - computed: true, optional: false, required: false
    get insightClass() {
        return this.getListAttribute('insight_class');
    }
    // limit - computed: true, optional: false, required: false
    get limit() {
        return this.getListAttribute('limit');
    }
    // logo_tag - computed: true, optional: false, required: false
    get logoTag() {
        return this.getListAttribute('logo_tag');
    }
    // megabits_per_second - computed: true, optional: false, required: false
    get megabitsPerSecond() {
        return this.getListAttribute('megabits_per_second');
    }
    // new_health - computed: true, optional: false, required: false
    get newHealth() {
        return this.getListAttribute('new_health');
    }
    // new_status - computed: true, optional: false, required: false
    get newStatus() {
        return this.getListAttribute('new_status');
    }
    // packets_per_second - computed: true, optional: false, required: false
    get packetsPerSecond() {
        return this.getListAttribute('packets_per_second');
    }
    // pool_id - computed: true, optional: false, required: false
    get poolId() {
        return this.getListAttribute('pool_id');
    }
    // pop_names - computed: true, optional: false, required: false
    get popNames() {
        return this.getListAttribute('pop_names');
    }
    // product - computed: true, optional: false, required: false
    get product() {
        return this.getListAttribute('product');
    }
    // project_id - computed: true, optional: false, required: false
    get projectId() {
        return this.getListAttribute('project_id');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getListAttribute('protocol');
    }
    // query_tag - computed: true, optional: false, required: false
    get queryTag() {
        return this.getListAttribute('query_tag');
    }
    // requests_per_second - computed: true, optional: false, required: false
    get requestsPerSecond() {
        return this.getListAttribute('requests_per_second');
    }
    // selectors - computed: true, optional: false, required: false
    get selectors() {
        return this.getListAttribute('selectors');
    }
    // services - computed: true, optional: false, required: false
    get services() {
        return this.getListAttribute('services');
    }
    // slo - computed: true, optional: false, required: false
    get slo() {
        return this.getListAttribute('slo');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getListAttribute('status');
    }
    // target_hostname - computed: true, optional: false, required: false
    get targetHostname() {
        return this.getListAttribute('target_hostname');
    }
    // target_ip - computed: true, optional: false, required: false
    get targetIp() {
        return this.getListAttribute('target_ip');
    }
    // target_zone_name - computed: true, optional: false, required: false
    get targetZoneName() {
        return this.getListAttribute('target_zone_name');
    }
    // traffic_exclusions - computed: true, optional: false, required: false
    get trafficExclusions() {
        return this.getListAttribute('traffic_exclusions');
    }
    // tunnel_id - computed: true, optional: false, required: false
    get tunnelId() {
        return this.getListAttribute('tunnel_id');
    }
    // tunnel_name - computed: true, optional: false, required: false
    get tunnelName() {
        return this.getListAttribute('tunnel_name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getListAttribute('type');
    }
    // where - computed: true, optional: false, required: false
    get where() {
        return this.getListAttribute('where');
    }
    // zones - computed: true, optional: false, required: false
    get zones() {
        return this.getListAttribute('zones');
    }
}
export function dataCloudflareNotificationPoliciesResultMechanismsEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPoliciesResultMechanismsEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
export class DataCloudflareNotificationPoliciesResultMechanismsEmailList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
export class DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareNotificationPoliciesResultMechanismsWebhooksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPoliciesResultMechanismsWebhooksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
export class DataCloudflareNotificationPoliciesResultMechanismsWebhooksList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareNotificationPoliciesResultMechanismsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPoliciesResultMechanismsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPoliciesResultMechanismsOutputReference extends cdktf.ComplexObject {
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
    // email - computed: true, optional: false, required: false
    _email = new DataCloudflareNotificationPoliciesResultMechanismsEmailList(this, "email", false);
    get email() {
        return this._email;
    }
    // pagerduty - computed: true, optional: false, required: false
    _pagerduty = new DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList(this, "pagerduty", false);
    get pagerduty() {
        return this._pagerduty;
    }
    // webhooks - computed: true, optional: false, required: false
    _webhooks = new DataCloudflareNotificationPoliciesResultMechanismsWebhooksList(this, "webhooks", false);
    get webhooks() {
        return this._webhooks;
    }
}
export function dataCloudflareNotificationPoliciesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPoliciesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPoliciesResultOutputReference extends cdktf.ComplexObject {
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
    // alert_interval - computed: true, optional: false, required: false
    get alertInterval() {
        return this.getStringAttribute('alert_interval');
    }
    // alert_type - computed: true, optional: false, required: false
    get alertType() {
        return this.getStringAttribute('alert_type');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // filters - computed: true, optional: false, required: false
    _filters = new DataCloudflareNotificationPoliciesResultFiltersOutputReference(this, "filters");
    get filters() {
        return this._filters;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // mechanisms - computed: true, optional: false, required: false
    _mechanisms = new DataCloudflareNotificationPoliciesResultMechanismsOutputReference(this, "mechanisms");
    get mechanisms() {
        return this._mechanisms;
    }
    // modified - computed: true, optional: false, required: false
    get modified() {
        return this.getStringAttribute('modified');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class DataCloudflareNotificationPoliciesResultList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPoliciesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies cloudflare_notification_policies}
*/
export class DataCloudflareNotificationPolicies extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_notification_policies";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicies to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicies to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policies", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies cloudflare_notification_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPoliciesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_notification_policies',
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
    _result = new DataCloudflareNotificationPoliciesResultList(this, "result", false);
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
