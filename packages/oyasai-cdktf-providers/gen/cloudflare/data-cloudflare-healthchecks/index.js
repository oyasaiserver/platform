// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareHealthchecksResultHttpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareHealthchecksResultHttpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareHealthchecksResultHttpConfigOutputReference extends cdktf.ComplexObject {
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
    // allow_insecure - computed: true, optional: false, required: false
    get allowInsecure() {
        return this.getBooleanAttribute('allow_insecure');
    }
    // expected_body - computed: true, optional: false, required: false
    get expectedBody() {
        return this.getStringAttribute('expected_body');
    }
    // expected_codes - computed: true, optional: false, required: false
    get expectedCodes() {
        return this.getListAttribute('expected_codes');
    }
    // follow_redirects - computed: true, optional: false, required: false
    get followRedirects() {
        return this.getBooleanAttribute('follow_redirects');
    }
    // header - computed: true, optional: false, required: false
    _header = new cdktf.StringListMap(this, "header");
    get header() {
        return this._header;
    }
    // method - computed: true, optional: false, required: false
    get method() {
        return this.getStringAttribute('method');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
export function dataCloudflareHealthchecksResultTcpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareHealthchecksResultTcpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareHealthchecksResultTcpConfigOutputReference extends cdktf.ComplexObject {
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
    // method - computed: true, optional: false, required: false
    get method() {
        return this.getStringAttribute('method');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
export function dataCloudflareHealthchecksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareHealthchecksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareHealthchecksResultOutputReference extends cdktf.ComplexObject {
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
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // check_regions - computed: true, optional: false, required: false
    get checkRegions() {
        return this.getListAttribute('check_regions');
    }
    // consecutive_fails - computed: true, optional: false, required: false
    get consecutiveFails() {
        return this.getNumberAttribute('consecutive_fails');
    }
    // consecutive_successes - computed: true, optional: false, required: false
    get consecutiveSuccesses() {
        return this.getNumberAttribute('consecutive_successes');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // failure_reason - computed: true, optional: false, required: false
    get failureReason() {
        return this.getStringAttribute('failure_reason');
    }
    // http_config - computed: true, optional: false, required: false
    _httpConfig = new DataCloudflareHealthchecksResultHttpConfigOutputReference(this, "http_config");
    get httpConfig() {
        return this._httpConfig;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getNumberAttribute('interval');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // retries - computed: true, optional: false, required: false
    get retries() {
        return this.getNumberAttribute('retries');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // suspended - computed: true, optional: false, required: false
    get suspended() {
        return this.getBooleanAttribute('suspended');
    }
    // tcp_config - computed: true, optional: false, required: false
    _tcpConfig = new DataCloudflareHealthchecksResultTcpConfigOutputReference(this, "tcp_config");
    get tcpConfig() {
        return this._tcpConfig;
    }
    // timeout - computed: true, optional: false, required: false
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class DataCloudflareHealthchecksResultList extends cdktf.ComplexList {
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
        return new DataCloudflareHealthchecksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks cloudflare_healthchecks}
*/
export class DataCloudflareHealthchecks extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_healthchecks";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareHealthchecks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHealthchecks to import
    * @param importFromId The id of the existing DataCloudflareHealthchecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHealthchecks to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthchecks", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks cloudflare_healthchecks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHealthchecksConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_healthchecks',
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
        this._maxItems = config.maxItems;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    _result = new DataCloudflareHealthchecksResultList(this, "result", false);
    get result() {
        return this._result;
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
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
