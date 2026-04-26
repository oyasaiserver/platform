"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Healthcheck = exports.HealthcheckTcpConfigOutputReference = exports.HealthcheckHttpConfigOutputReference = void 0;
exports.healthcheckHttpConfigToTerraform = healthcheckHttpConfigToTerraform;
exports.healthcheckHttpConfigToHclTerraform = healthcheckHttpConfigToHclTerraform;
exports.healthcheckTcpConfigToTerraform = healthcheckTcpConfigToTerraform;
exports.healthcheckTcpConfigToHclTerraform = healthcheckTcpConfigToHclTerraform;
var cdktf = require("cdktf");
function healthcheckHttpConfigToTerraform(struct) {
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
function healthcheckHttpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var HealthcheckHttpConfigOutputReference = /** @class */ (function (_super) {
    __extends(HealthcheckHttpConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function HealthcheckHttpConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "allowInsecure", {
        get: function () {
            return this.getBooleanAttribute('allow_insecure');
        },
        set: function (value) {
            this._allowInsecure = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetAllowInsecure = function () {
        this._allowInsecure = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "allowInsecureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowInsecure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "expectedBody", {
        get: function () {
            return this.getStringAttribute('expected_body');
        },
        set: function (value) {
            this._expectedBody = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetExpectedBody = function () {
        this._expectedBody = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "expectedBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expectedBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "expectedCodes", {
        get: function () {
            return this.getListAttribute('expected_codes');
        },
        set: function (value) {
            this._expectedCodes = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetExpectedCodes = function () {
        this._expectedCodes = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "expectedCodesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expectedCodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "followRedirects", {
        get: function () {
            return this.getBooleanAttribute('follow_redirects');
        },
        set: function (value) {
            this._followRedirects = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetFollowRedirects = function () {
        this._followRedirects = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "followRedirectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._followRedirects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "header", {
        get: function () {
            return this.interpolationForAttribute('header');
        },
        set: function (value) {
            this._header = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetHeader = function () {
        this._header = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "headerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckHttpConfigOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(HealthcheckHttpConfigOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return HealthcheckHttpConfigOutputReference;
}(cdktf.ComplexObject));
exports.HealthcheckHttpConfigOutputReference = HealthcheckHttpConfigOutputReference;
function healthcheckTcpConfigToTerraform(struct) {
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
function healthcheckTcpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var HealthcheckTcpConfigOutputReference = /** @class */ (function (_super) {
    __extends(HealthcheckTcpConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function HealthcheckTcpConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(HealthcheckTcpConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._method !== undefined) {
                hasAnyValues = true;
                internalValueResult.method = this._method;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckTcpConfigOutputReference.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckTcpConfigOutputReference.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(HealthcheckTcpConfigOutputReference.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthcheckTcpConfigOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    HealthcheckTcpConfigOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(HealthcheckTcpConfigOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return HealthcheckTcpConfigOutputReference;
}(cdktf.ComplexObject));
exports.HealthcheckTcpConfigOutputReference = HealthcheckTcpConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck cloudflare_healthcheck}
*/
var Healthcheck = /** @class */ (function (_super) {
    __extends(Healthcheck, _super);
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
    function Healthcheck(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // http_config - computed: true, optional: true, required: false
        _this._httpConfig = new HealthcheckHttpConfigOutputReference(_this, "http_config");
        // tcp_config - computed: true, optional: true, required: false
        _this._tcpConfig = new HealthcheckTcpConfigOutputReference(_this, "tcp_config");
        _this._address = config.address;
        _this._checkRegions = config.checkRegions;
        _this._consecutiveFails = config.consecutiveFails;
        _this._consecutiveSuccesses = config.consecutiveSuccesses;
        _this._description = config.description;
        _this._httpConfig.internalValue = config.httpConfig;
        _this._interval = config.interval;
        _this._name = config.name;
        _this._retries = config.retries;
        _this._suspended = config.suspended;
        _this._tcpConfig.internalValue = config.tcpConfig;
        _this._timeout = config.timeout;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        return _this;
    }
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
    Healthcheck.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthcheck", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Healthcheck.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "checkRegions", {
        get: function () {
            return this.getListAttribute('check_regions');
        },
        set: function (value) {
            this._checkRegions = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetCheckRegions = function () {
        this._checkRegions = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "checkRegionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkRegions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "consecutiveFails", {
        get: function () {
            return this.getNumberAttribute('consecutive_fails');
        },
        set: function (value) {
            this._consecutiveFails = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetConsecutiveFails = function () {
        this._consecutiveFails = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "consecutiveFailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._consecutiveFails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "consecutiveSuccesses", {
        get: function () {
            return this.getNumberAttribute('consecutive_successes');
        },
        set: function (value) {
            this._consecutiveSuccesses = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetConsecutiveSuccesses = function () {
        this._consecutiveSuccesses = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "consecutiveSuccessesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._consecutiveSuccesses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "httpConfig", {
        get: function () {
            return this._httpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.putHttpConfig = function (value) {
        this._httpConfig.internalValue = value;
    };
    Healthcheck.prototype.resetHttpConfig = function () {
        this._httpConfig.internalValue = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "httpConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "interval", {
        get: function () {
            return this.getNumberAttribute('interval');
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetInterval = function () {
        this._interval = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "intervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "retries", {
        get: function () {
            return this.getNumberAttribute('retries');
        },
        set: function (value) {
            this._retries = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetRetries = function () {
        this._retries = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "retriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "suspended", {
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        set: function (value) {
            this._suspended = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetSuspended = function () {
        this._suspended = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "suspendedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suspended;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "tcpConfig", {
        get: function () {
            return this._tcpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.putTcpConfig = function (value) {
        this._tcpConfig.internalValue = value;
    };
    Healthcheck.prototype.resetTcpConfig = function () {
        this._tcpConfig.internalValue = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "tcpConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tcpConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Healthcheck.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Healthcheck.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(Healthcheck.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Healthcheck.prototype.synthesizeAttributes = function () {
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
    };
    Healthcheck.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Healthcheck.tfResourceType = "cloudflare_healthcheck";
    return Healthcheck;
}(cdktf.TerraformResource));
exports.Healthcheck = Healthcheck;
