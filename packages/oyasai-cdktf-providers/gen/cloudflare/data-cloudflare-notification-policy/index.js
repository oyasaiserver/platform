// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareNotificationPolicyFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPolicyFiltersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareNotificationPolicyMechanismsEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPolicyMechanismsEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPolicyMechanismsEmailOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareNotificationPolicyMechanismsEmailList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPolicyMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareNotificationPolicyMechanismsPagerdutyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPolicyMechanismsPagerdutyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareNotificationPolicyMechanismsPagerdutyList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareNotificationPolicyMechanismsWebhooksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPolicyMechanismsWebhooksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareNotificationPolicyMechanismsWebhooksList extends cdktf.ComplexList {
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
        return new DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareNotificationPolicyMechanismsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareNotificationPolicyMechanismsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareNotificationPolicyMechanismsOutputReference extends cdktf.ComplexObject {
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
    _email = new DataCloudflareNotificationPolicyMechanismsEmailList(this, "email", false);
    get email() {
        return this._email;
    }
    // pagerduty - computed: true, optional: false, required: false
    _pagerduty = new DataCloudflareNotificationPolicyMechanismsPagerdutyList(this, "pagerduty", false);
    get pagerduty() {
        return this._pagerduty;
    }
    // webhooks - computed: true, optional: false, required: false
    _webhooks = new DataCloudflareNotificationPolicyMechanismsWebhooksList(this, "webhooks", false);
    get webhooks() {
        return this._webhooks;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy cloudflare_notification_policy}
*/
export class DataCloudflareNotificationPolicy extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_notification_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicy to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy cloudflare_notification_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_notification_policy',
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
        this._policyId = config.policyId;
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
    _filters = new DataCloudflareNotificationPolicyFiltersOutputReference(this, "filters");
    get filters() {
        return this._filters;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // mechanisms - computed: true, optional: false, required: false
    _mechanisms = new DataCloudflareNotificationPolicyMechanismsOutputReference(this, "mechanisms");
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
    // policy_id - computed: false, optional: false, required: true
    _policyId;
    get policyId() {
        return this.getStringAttribute('policy_id');
    }
    set policyId(value) {
        this._policyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get policyIdInput() {
        return this._policyId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            policy_id: cdktf.stringToTerraform(this._policyId),
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
            policy_id: {
                value: cdktf.stringToHclTerraform(this._policyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
