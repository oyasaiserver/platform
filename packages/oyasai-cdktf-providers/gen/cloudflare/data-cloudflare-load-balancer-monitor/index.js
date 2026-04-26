"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor
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
exports.DataCloudflareLoadBalancerMonitor = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
var DataCloudflareLoadBalancerMonitor = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerMonitor, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor cloudflare_load_balancer_monitor} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerMonitorConfig
    */
    function DataCloudflareLoadBalancerMonitor(scope, id, config) {
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
        // header - computed: true, optional: false, required: false
        _this._header = new cdktf.StringListMap(_this, "header");
        _this._accountId = config.accountId;
        _this._monitorId = config.monitorId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerMonitor to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerMonitor to import is found
    */
    DataCloudflareLoadBalancerMonitor.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitor", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerMonitor.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "allowInsecure", {
        // allow_insecure - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_insecure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "consecutiveDown", {
        // consecutive_down - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_down');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "consecutiveUp", {
        // consecutive_up - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_up');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "expectedBody", {
        // expected_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expected_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "expectedCodes", {
        // expected_codes - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expected_codes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "followRedirects", {
        // follow_redirects - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('follow_redirects');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "monitorId", {
        get: function () {
            return this.getStringAttribute('monitor_id');
        },
        set: function (value) {
            this._monitorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "monitorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "probeZone", {
        // probe_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('probe_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitor.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareLoadBalancerMonitor.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            monitor_id: cdktf.stringToTerraform(this._monitorId),
        };
    };
    DataCloudflareLoadBalancerMonitor.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_id: {
                value: cdktf.stringToHclTerraform(this._monitorId),
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
    DataCloudflareLoadBalancerMonitor.tfResourceType = "cloudflare_load_balancer_monitor";
    return DataCloudflareLoadBalancerMonitor;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLoadBalancerMonitor = DataCloudflareLoadBalancerMonitor;
