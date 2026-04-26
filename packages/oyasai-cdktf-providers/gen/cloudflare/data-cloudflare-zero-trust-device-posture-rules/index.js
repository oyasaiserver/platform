// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference extends cdktf.ComplexObject {
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
    // paths - computed: true, optional: false, required: false
    get paths() {
        return this.getListAttribute('paths');
    }
    // trust_stores - computed: true, optional: false, required: false
    get trustStores() {
        return this.getListAttribute('trust_stores');
    }
}
export function dataCloudflareZeroTrustDevicePostureRulesResultInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRulesResultInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference extends cdktf.ComplexObject {
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
    // active_threats - computed: true, optional: false, required: false
    get activeThreats() {
        return this.getNumberAttribute('active_threats');
    }
    // auth_state - computed: true, optional: false, required: false
    get authState() {
        return this.getListAttribute('auth_state');
    }
    // certificate_id - computed: true, optional: false, required: false
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    // check_disks - computed: true, optional: false, required: false
    get checkDisks() {
        return this.getListAttribute('check_disks');
    }
    // check_private_key - computed: true, optional: false, required: false
    get checkPrivateKey() {
        return this.getBooleanAttribute('check_private_key');
    }
    // cn - computed: true, optional: false, required: false
    get cn() {
        return this.getStringAttribute('cn');
    }
    // compliance_status - computed: true, optional: false, required: false
    get complianceStatus() {
        return this.getStringAttribute('compliance_status');
    }
    // connection_id - computed: true, optional: false, required: false
    get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    // count_operator - computed: true, optional: false, required: false
    get countOperator() {
        return this.getStringAttribute('count_operator');
    }
    // domain - computed: true, optional: false, required: false
    get domain() {
        return this.getStringAttribute('domain');
    }
    // eid_last_seen - computed: true, optional: false, required: false
    get eidLastSeen() {
        return this.getStringAttribute('eid_last_seen');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // exists - computed: true, optional: false, required: false
    get exists() {
        return this.getBooleanAttribute('exists');
    }
    // extended_key_usage - computed: true, optional: false, required: false
    get extendedKeyUsage() {
        return this.getListAttribute('extended_key_usage');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // infected - computed: true, optional: false, required: false
    get infected() {
        return this.getBooleanAttribute('infected');
    }
    // is_active - computed: true, optional: false, required: false
    get isActive() {
        return this.getBooleanAttribute('is_active');
    }
    // issue_count - computed: true, optional: false, required: false
    get issueCount() {
        return this.getStringAttribute('issue_count');
    }
    // last_seen - computed: true, optional: false, required: false
    get lastSeen() {
        return this.getStringAttribute('last_seen');
    }
    // locations - computed: true, optional: false, required: false
    _locations = new DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference(this, "locations");
    get locations() {
        return this._locations;
    }
    // network_status - computed: true, optional: false, required: false
    get networkStatus() {
        return this.getStringAttribute('network_status');
    }
    // operating_system - computed: true, optional: false, required: false
    get operatingSystem() {
        return this.getStringAttribute('operating_system');
    }
    // operational_state - computed: true, optional: false, required: false
    get operationalState() {
        return this.getStringAttribute('operational_state');
    }
    // operator - computed: true, optional: false, required: false
    get operator() {
        return this.getStringAttribute('operator');
    }
    // os - computed: true, optional: false, required: false
    get os() {
        return this.getStringAttribute('os');
    }
    // os_distro_name - computed: true, optional: false, required: false
    get osDistroName() {
        return this.getStringAttribute('os_distro_name');
    }
    // os_distro_revision - computed: true, optional: false, required: false
    get osDistroRevision() {
        return this.getStringAttribute('os_distro_revision');
    }
    // os_version_extra - computed: true, optional: false, required: false
    get osVersionExtra() {
        return this.getStringAttribute('os_version_extra');
    }
    // overall - computed: true, optional: false, required: false
    get overall() {
        return this.getStringAttribute('overall');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // require_all - computed: true, optional: false, required: false
    get requireAll() {
        return this.getBooleanAttribute('require_all');
    }
    // risk_level - computed: true, optional: false, required: false
    get riskLevel() {
        return this.getStringAttribute('risk_level');
    }
    // score - computed: true, optional: false, required: false
    get score() {
        return this.getNumberAttribute('score');
    }
    // score_operator - computed: true, optional: false, required: false
    get scoreOperator() {
        return this.getStringAttribute('score_operator');
    }
    // sensor_config - computed: true, optional: false, required: false
    get sensorConfig() {
        return this.getStringAttribute('sensor_config');
    }
    // sha256 - computed: true, optional: false, required: false
    get sha256() {
        return this.getStringAttribute('sha256');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // subject_alternative_names - computed: true, optional: false, required: false
    get subjectAlternativeNames() {
        return this.getListAttribute('subject_alternative_names');
    }
    // thumbprint - computed: true, optional: false, required: false
    get thumbprint() {
        return this.getStringAttribute('thumbprint');
    }
    // total_score - computed: true, optional: false, required: false
    get totalScore() {
        return this.getNumberAttribute('total_score');
    }
    // update_window_days - computed: true, optional: false, required: false
    get updateWindowDays() {
        return this.getNumberAttribute('update_window_days');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
    // version_operator - computed: true, optional: false, required: false
    get versionOperator() {
        return this.getStringAttribute('version_operator');
    }
}
export function dataCloudflareZeroTrustDevicePostureRulesResultMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRulesResultMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference extends cdktf.ComplexObject {
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
    // platform - computed: true, optional: false, required: false
    get platform() {
        return this.getStringAttribute('platform');
    }
}
export class DataCloudflareZeroTrustDevicePostureRulesResultMatchList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustDevicePostureRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRulesResultOutputReference extends cdktf.ComplexObject {
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
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // expiration - computed: true, optional: false, required: false
    get expiration() {
        return this.getStringAttribute('expiration');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // input - computed: true, optional: false, required: false
    _input = new DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference(this, "input");
    get input() {
        return this._input;
    }
    // match - computed: true, optional: false, required: false
    _match = new DataCloudflareZeroTrustDevicePostureRulesResultMatchList(this, "match", false);
    get match() {
        return this._match;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // schedule - computed: true, optional: false, required: false
    get schedule() {
        return this.getStringAttribute('schedule');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class DataCloudflareZeroTrustDevicePostureRulesResultList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustDevicePostureRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules}
*/
export class DataCloudflareZeroTrustDevicePostureRules extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_posture_rules";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRules to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRules to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rules", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureRulesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_rules',
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
    _result = new DataCloudflareZeroTrustDevicePostureRulesResultList(this, "result", false);
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
