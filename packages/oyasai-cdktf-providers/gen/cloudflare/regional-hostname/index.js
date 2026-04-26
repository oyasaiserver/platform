"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname
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
exports.RegionalHostname = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname cloudflare_regional_hostname}
*/
var RegionalHostname = /** @class */ (function (_super) {
    __extends(RegionalHostname, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname cloudflare_regional_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegionalHostnameConfig
    */
    function RegionalHostname(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_regional_hostname',
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
        _this._hostname = config.hostname;
        _this._regionKey = config.regionKey;
        _this._routing = config.routing;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RegionalHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegionalHostname to import
    * @param importFromId The id of the existing RegionalHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegionalHostname to import is found
    */
    RegionalHostname.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_regional_hostname", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RegionalHostname.prototype, "createdOn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "regionKey", {
        get: function () {
            return this.getStringAttribute('region_key');
        },
        set: function (value) {
            this._regionKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "regionKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "routing", {
        get: function () {
            return this.getStringAttribute('routing');
        },
        set: function (value) {
            this._routing = value;
        },
        enumerable: false,
        configurable: true
    });
    RegionalHostname.prototype.resetRouting = function () {
        this._routing = undefined;
    };
    Object.defineProperty(RegionalHostname.prototype, "routingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegionalHostname.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    RegionalHostname.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(RegionalHostname.prototype, "zoneIdInput", {
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
    RegionalHostname.prototype.synthesizeAttributes = function () {
        return {
            hostname: cdktf.stringToTerraform(this._hostname),
            region_key: cdktf.stringToTerraform(this._regionKey),
            routing: cdktf.stringToTerraform(this._routing),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    RegionalHostname.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region_key: {
                value: cdktf.stringToHclTerraform(this._regionKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing: {
                value: cdktf.stringToHclTerraform(this._routing),
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
    RegionalHostname.tfResourceType = "cloudflare_regional_hostname";
    return RegionalHostname;
}(cdktf.TerraformResource));
exports.RegionalHostname = RegionalHostname;
