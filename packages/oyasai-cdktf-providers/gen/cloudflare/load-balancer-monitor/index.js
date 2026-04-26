"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor
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
exports.LoadBalancerMonitor = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
var LoadBalancerMonitor = /** @class */ (function (_super) {
    __extends(LoadBalancerMonitor, _super);
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
    function LoadBalancerMonitor(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        _this._accountId = config.accountId;
        _this._allowInsecure = config.allowInsecure;
        _this._consecutiveDown = config.consecutiveDown;
        _this._consecutiveUp = config.consecutiveUp;
        _this._description = config.description;
        _this._expectedBody = config.expectedBody;
        _this._expectedCodes = config.expectedCodes;
        _this._followRedirects = config.followRedirects;
        _this._header = config.header;
        _this._interval = config.interval;
        _this._method = config.method;
        _this._path = config.path;
        _this._port = config.port;
        _this._probeZone = config.probeZone;
        _this._retries = config.retries;
        _this._timeout = config.timeout;
        _this._type = config.type;
        return _this;
    }
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
    LoadBalancerMonitor.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitor", importId: importFromId, provider: provider });
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "allowInsecure", {
        get: function () {
            return this.getBooleanAttribute('allow_insecure');
        },
        set: function (value) {
            this._allowInsecure = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetAllowInsecure = function () {
        this._allowInsecure = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "allowInsecureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowInsecure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "consecutiveDown", {
        get: function () {
            return this.getNumberAttribute('consecutive_down');
        },
        set: function (value) {
            this._consecutiveDown = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetConsecutiveDown = function () {
        this._consecutiveDown = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "consecutiveDownInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._consecutiveDown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "consecutiveUp", {
        get: function () {
            return this.getNumberAttribute('consecutive_up');
        },
        set: function (value) {
            this._consecutiveUp = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetConsecutiveUp = function () {
        this._consecutiveUp = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "consecutiveUpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._consecutiveUp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "expectedBody", {
        get: function () {
            return this.getStringAttribute('expected_body');
        },
        set: function (value) {
            this._expectedBody = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetExpectedBody = function () {
        this._expectedBody = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "expectedBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expectedBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "expectedCodes", {
        get: function () {
            return this.getStringAttribute('expected_codes');
        },
        set: function (value) {
            this._expectedCodes = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetExpectedCodes = function () {
        this._expectedCodes = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "expectedCodesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expectedCodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "followRedirects", {
        get: function () {
            return this.getBooleanAttribute('follow_redirects');
        },
        set: function (value) {
            this._followRedirects = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetFollowRedirects = function () {
        this._followRedirects = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "followRedirectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._followRedirects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "header", {
        get: function () {
            return this.interpolationForAttribute('header');
        },
        set: function (value) {
            this._header = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetHeader = function () {
        this._header = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "headerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "interval", {
        get: function () {
            return this.getNumberAttribute('interval');
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetInterval = function () {
        this._interval = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "intervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "probeZone", {
        get: function () {
            return this.getStringAttribute('probe_zone');
        },
        set: function (value) {
            this._probeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetProbeZone = function () {
        this._probeZone = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "probeZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._probeZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "retries", {
        get: function () {
            return this.getNumberAttribute('retries');
        },
        set: function (value) {
            this._retries = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetRetries = function () {
        this._retries = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "retriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerMonitor.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerMonitor.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(LoadBalancerMonitor.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LoadBalancerMonitor.prototype.synthesizeAttributes = function () {
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
    };
    LoadBalancerMonitor.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LoadBalancerMonitor.tfResourceType = "cloudflare_load_balancer_monitor";
    return LoadBalancerMonitor;
}(cdktf.TerraformResource));
exports.LoadBalancerMonitor = LoadBalancerMonitor;
