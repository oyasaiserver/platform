// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
export class LoadBalancerMonitor extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_load_balancer_monitor";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerMonitor to import
    * @param importFromId The id of the existing LoadBalancerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerMonitor to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitor", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerMonitorConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_load_balancer_monitor',
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
        this._allowInsecure = config.allowInsecure;
        this._consecutiveDown = config.consecutiveDown;
        this._consecutiveUp = config.consecutiveUp;
        this._description = config.description;
        this._expectedBody = config.expectedBody;
        this._expectedCodes = config.expectedCodes;
        this._followRedirects = config.followRedirects;
        this._header = config.header;
        this._interval = config.interval;
        this._method = config.method;
        this._path = config.path;
        this._port = config.port;
        this._probeZone = config.probeZone;
        this._retries = config.retries;
        this._timeout = config.timeout;
        this._type = config.type;
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
    // allow_insecure - computed: true, optional: true, required: false
    _allowInsecure;
    get allowInsecure() {
        return this.getBooleanAttribute('allow_insecure');
    }
    set allowInsecure(value) {
        this._allowInsecure = value;
    }
    resetAllowInsecure() {
        this._allowInsecure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowInsecureInput() {
        return this._allowInsecure;
    }
    // consecutive_down - computed: false, optional: true, required: false
    _consecutiveDown;
    get consecutiveDown() {
        return this.getNumberAttribute('consecutive_down');
    }
    set consecutiveDown(value) {
        this._consecutiveDown = value;
    }
    resetConsecutiveDown() {
        this._consecutiveDown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get consecutiveDownInput() {
        return this._consecutiveDown;
    }
    // consecutive_up - computed: false, optional: true, required: false
    _consecutiveUp;
    get consecutiveUp() {
        return this.getNumberAttribute('consecutive_up');
    }
    set consecutiveUp(value) {
        this._consecutiveUp = value;
    }
    resetConsecutiveUp() {
        this._consecutiveUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get consecutiveUpInput() {
        return this._consecutiveUp;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // expected_body - computed: true, optional: true, required: false
    _expectedBody;
    get expectedBody() {
        return this.getStringAttribute('expected_body');
    }
    set expectedBody(value) {
        this._expectedBody = value;
    }
    resetExpectedBody() {
        this._expectedBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedBodyInput() {
        return this._expectedBody;
    }
    // expected_codes - computed: true, optional: true, required: false
    _expectedCodes;
    get expectedCodes() {
        return this.getStringAttribute('expected_codes');
    }
    set expectedCodes(value) {
        this._expectedCodes = value;
    }
    resetExpectedCodes() {
        this._expectedCodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedCodesInput() {
        return this._expectedCodes;
    }
    // follow_redirects - computed: true, optional: true, required: false
    _followRedirects;
    get followRedirects() {
        return this.getBooleanAttribute('follow_redirects');
    }
    set followRedirects(value) {
        this._followRedirects = value;
    }
    resetFollowRedirects() {
        this._followRedirects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get followRedirectsInput() {
        return this._followRedirects;
    }
    // header - computed: false, optional: true, required: false
    _header;
    get header() {
        return this.interpolationForAttribute('header');
    }
    set header(value) {
        this._header = value;
    }
    resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerInput() {
        return this._header;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interval - computed: true, optional: true, required: false
    _interval;
    get interval() {
        return this.getNumberAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
    }
    // method - computed: true, optional: true, required: false
    _method;
    get method() {
        return this.getStringAttribute('method');
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
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // path - computed: true, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // port - computed: false, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // probe_zone - computed: true, optional: true, required: false
    _probeZone;
    get probeZone() {
        return this.getStringAttribute('probe_zone');
    }
    set probeZone(value) {
        this._probeZone = value;
    }
    resetProbeZone() {
        this._probeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get probeZoneInput() {
        return this._probeZone;
    }
    // retries - computed: true, optional: true, required: false
    _retries;
    get retries() {
        return this.getNumberAttribute('retries');
    }
    set retries(value) {
        this._retries = value;
    }
    resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retriesInput() {
        return this._retries;
    }
    // timeout - computed: true, optional: true, required: false
    _timeout;
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
    // type - computed: true, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_insecure: cdktf.booleanToTerraform(this._allowInsecure),
            consecutive_down: cdktf.numberToTerraform(this._consecutiveDown),
            consecutive_up: cdktf.numberToTerraform(this._consecutiveUp),
            description: cdktf.stringToTerraform(this._description),
            expected_body: cdktf.stringToTerraform(this._expectedBody),
            expected_codes: cdktf.stringToTerraform(this._expectedCodes),
            follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
            header: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._header),
            interval: cdktf.numberToTerraform(this._interval),
            method: cdktf.stringToTerraform(this._method),
            path: cdktf.stringToTerraform(this._path),
            port: cdktf.numberToTerraform(this._port),
            probe_zone: cdktf.stringToTerraform(this._probeZone),
            retries: cdktf.numberToTerraform(this._retries),
            timeout: cdktf.numberToTerraform(this._timeout),
            type: cdktf.stringToTerraform(this._type),
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
            allow_insecure: {
                value: cdktf.booleanToHclTerraform(this._allowInsecure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            consecutive_down: {
                value: cdktf.numberToHclTerraform(this._consecutiveDown),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            consecutive_up: {
                value: cdktf.numberToHclTerraform(this._consecutiveUp),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expected_body: {
                value: cdktf.stringToHclTerraform(this._expectedBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expected_codes: {
                value: cdktf.stringToHclTerraform(this._expectedCodes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            follow_redirects: {
                value: cdktf.booleanToHclTerraform(this._followRedirects),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            header: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._header),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            interval: {
                value: cdktf.numberToHclTerraform(this._interval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            method: {
                value: cdktf.stringToHclTerraform(this._method),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktf.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            probe_zone: {
                value: cdktf.stringToHclTerraform(this._probeZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retries: {
                value: cdktf.numberToHclTerraform(this._retries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            timeout: {
                value: cdktf.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
