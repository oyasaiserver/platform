// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustDevicePostureRuleInputLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareZeroTrustDevicePostureRuleInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRuleInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRuleInputOutputReference extends cdktf.ComplexObject {
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
    _locations = new DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference(this, "locations");
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
export function dataCloudflareZeroTrustDevicePostureRuleMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustDevicePostureRuleMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareZeroTrustDevicePostureRuleMatchList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
export class DataCloudflareZeroTrustDevicePostureRule extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_posture_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRule to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_rule',
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
        this._ruleId = config.ruleId;
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
    _input = new DataCloudflareZeroTrustDevicePostureRuleInputOutputReference(this, "input");
    get input() {
        return this._input;
    }
    // match - computed: true, optional: false, required: false
    _match = new DataCloudflareZeroTrustDevicePostureRuleMatchList(this, "match", false);
    get match() {
        return this._match;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // rule_id - computed: false, optional: false, required: true
    _ruleId;
    get ruleId() {
        return this.getStringAttribute('rule_id');
    }
    set ruleId(value) {
        this._ruleId = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleIdInput() {
        return this._ruleId;
    }
    // schedule - computed: true, optional: false, required: false
    get schedule() {
        return this.getStringAttribute('schedule');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
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
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
