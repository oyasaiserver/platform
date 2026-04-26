// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareHealthcheckHttpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareHealthcheckHttpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareHealthcheckHttpConfigOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareHealthcheckTcpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareHealthcheckTcpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareHealthcheckTcpConfigOutputReference extends cdktf.ComplexObject {
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck cloudflare_healthcheck}
*/
export class DataCloudflareHealthcheck extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_healthcheck";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareHealthcheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHealthcheck to import
    * @param importFromId The id of the existing DataCloudflareHealthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHealthcheck to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthcheck", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck cloudflare_healthcheck} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHealthcheckConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_healthcheck',
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
        this._healthcheckId = config.healthcheckId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // healthcheck_id - computed: false, optional: false, required: true
    _healthcheckId;
    get healthcheckId() {
        return this.getStringAttribute('healthcheck_id');
    }
    set healthcheckId(value) {
        this._healthcheckId = value;
    }
    // Temporarily expose input value. Use with caution.
    get healthcheckIdInput() {
        return this._healthcheckId;
    }
    // http_config - computed: true, optional: false, required: false
    _httpConfig = new DataCloudflareHealthcheckHttpConfigOutputReference(this, "http_config");
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
    _tcpConfig = new DataCloudflareHealthcheckTcpConfigOutputReference(this, "tcp_config");
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
            healthcheck_id: cdktf.stringToTerraform(this._healthcheckId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            healthcheck_id: {
                value: cdktf.stringToHclTerraform(this._healthcheckId),
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
