// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function healthcheckHttpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_insecure: cdktf.booleanToTerraform(struct.allowInsecure),
        expected_body: cdktf.stringToTerraform(struct.expectedBody),
        expected_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.expectedCodes),
        follow_redirects: cdktf.booleanToTerraform(struct.followRedirects),
        header: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.header),
        method: cdktf.stringToTerraform(struct.method),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.numberToTerraform(struct.port),
    };
}
export function healthcheckHttpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_insecure: {
            value: cdktf.booleanToHclTerraform(struct.allowInsecure),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        expected_body: {
            value: cdktf.stringToHclTerraform(struct.expectedBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_codes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.expectedCodes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        follow_redirects: {
            value: cdktf.booleanToHclTerraform(struct.followRedirects),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        header: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.header),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class HealthcheckHttpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowInsecure !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowInsecure = this._allowInsecure;
        }
        if (this._expectedBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBody = this._expectedBody;
        }
        if (this._expectedCodes !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedCodes = this._expectedCodes;
        }
        if (this._followRedirects !== undefined) {
            hasAnyValues = true;
            internalValueResult.followRedirects = this._followRedirects;
        }
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowInsecure = undefined;
            this._expectedBody = undefined;
            this._expectedCodes = undefined;
            this._followRedirects = undefined;
            this._header = undefined;
            this._method = undefined;
            this._path = undefined;
            this._port = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowInsecure = value.allowInsecure;
            this._expectedBody = value.expectedBody;
            this._expectedCodes = value.expectedCodes;
            this._followRedirects = value.followRedirects;
            this._header = value.header;
            this._method = value.method;
            this._path = value.path;
            this._port = value.port;
        }
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
        return this.getListAttribute('expected_codes');
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
    // header - computed: true, optional: true, required: false
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
    // port - computed: true, optional: true, required: false
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
}
export function healthcheckTcpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        port: cdktf.numberToTerraform(struct.port),
    };
}
export function healthcheckTcpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class HealthcheckTcpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._method = undefined;
            this._port = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._method = value.method;
            this._port = value.port;
        }
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
    // port - computed: true, optional: true, required: false
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck cloudflare_healthcheck}
*/
export class Healthcheck extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_healthcheck";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Healthcheck to import
    * @param importFromId The id of the existing Healthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Healthcheck to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthcheck", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck cloudflare_healthcheck} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HealthcheckConfig
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
        this._address = config.address;
        this._checkRegions = config.checkRegions;
        this._consecutiveFails = config.consecutiveFails;
        this._consecutiveSuccesses = config.consecutiveSuccesses;
        this._description = config.description;
        this._httpConfig.internalValue = config.httpConfig;
        this._interval = config.interval;
        this._name = config.name;
        this._retries = config.retries;
        this._suspended = config.suspended;
        this._tcpConfig.internalValue = config.tcpConfig;
        this._timeout = config.timeout;
        this._type = config.type;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // address - computed: false, optional: false, required: true
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // check_regions - computed: false, optional: true, required: false
    _checkRegions;
    get checkRegions() {
        return this.getListAttribute('check_regions');
    }
    set checkRegions(value) {
        this._checkRegions = value;
    }
    resetCheckRegions() {
        this._checkRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkRegionsInput() {
        return this._checkRegions;
    }
    // consecutive_fails - computed: true, optional: true, required: false
    _consecutiveFails;
    get consecutiveFails() {
        return this.getNumberAttribute('consecutive_fails');
    }
    set consecutiveFails(value) {
        this._consecutiveFails = value;
    }
    resetConsecutiveFails() {
        this._consecutiveFails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get consecutiveFailsInput() {
        return this._consecutiveFails;
    }
    // consecutive_successes - computed: true, optional: true, required: false
    _consecutiveSuccesses;
    get consecutiveSuccesses() {
        return this.getNumberAttribute('consecutive_successes');
    }
    set consecutiveSuccesses(value) {
        this._consecutiveSuccesses = value;
    }
    resetConsecutiveSuccesses() {
        this._consecutiveSuccesses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get consecutiveSuccessesInput() {
        return this._consecutiveSuccesses;
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
    // failure_reason - computed: true, optional: false, required: false
    get failureReason() {
        return this.getStringAttribute('failure_reason');
    }
    // http_config - computed: true, optional: true, required: false
    _httpConfig = new HealthcheckHttpConfigOutputReference(this, "http_config");
    get httpConfig() {
        return this._httpConfig;
    }
    putHttpConfig(value) {
        this._httpConfig.internalValue = value;
    }
    resetHttpConfig() {
        this._httpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpConfigInput() {
        return this._httpConfig.internalValue;
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
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
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
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // suspended - computed: true, optional: true, required: false
    _suspended;
    get suspended() {
        return this.getBooleanAttribute('suspended');
    }
    set suspended(value) {
        this._suspended = value;
    }
    resetSuspended() {
        this._suspended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suspendedInput() {
        return this._suspended;
    }
    // tcp_config - computed: true, optional: true, required: false
    _tcpConfig = new HealthcheckTcpConfigOutputReference(this, "tcp_config");
    get tcpConfig() {
        return this._tcpConfig;
    }
    putTcpConfig(value) {
        this._tcpConfig.internalValue = value;
    }
    resetTcpConfig() {
        this._tcpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tcpConfigInput() {
        return this._tcpConfig.internalValue;
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
            address: cdktf.stringToTerraform(this._address),
            check_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._checkRegions),
            consecutive_fails: cdktf.numberToTerraform(this._consecutiveFails),
            consecutive_successes: cdktf.numberToTerraform(this._consecutiveSuccesses),
            description: cdktf.stringToTerraform(this._description),
            http_config: healthcheckHttpConfigToTerraform(this._httpConfig.internalValue),
            interval: cdktf.numberToTerraform(this._interval),
            name: cdktf.stringToTerraform(this._name),
            retries: cdktf.numberToTerraform(this._retries),
            suspended: cdktf.booleanToTerraform(this._suspended),
            tcp_config: healthcheckTcpConfigToTerraform(this._tcpConfig.internalValue),
            timeout: cdktf.numberToTerraform(this._timeout),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            address: {
                value: cdktf.stringToHclTerraform(this._address),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            check_regions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._checkRegions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            consecutive_fails: {
                value: cdktf.numberToHclTerraform(this._consecutiveFails),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            consecutive_successes: {
                value: cdktf.numberToHclTerraform(this._consecutiveSuccesses),
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
            http_config: {
                value: healthcheckHttpConfigToHclTerraform(this._httpConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HealthcheckHttpConfig",
            },
            interval: {
                value: cdktf.numberToHclTerraform(this._interval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            suspended: {
                value: cdktf.booleanToHclTerraform(this._suspended),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tcp_config: {
                value: healthcheckTcpConfigToHclTerraform(this._tcpConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HealthcheckTcpConfig",
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
