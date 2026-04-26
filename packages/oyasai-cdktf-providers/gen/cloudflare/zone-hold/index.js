"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold
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
exports.ZoneHold = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold cloudflare_zone_hold}
*/
var ZoneHold = /** @class */ (function (_super) {
    __extends(ZoneHold, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold cloudflare_zone_hold} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneHoldConfig
    */
    function ZoneHold(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_hold',
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
        _this._holdAfter = config.holdAfter;
        _this._includeSubdomains = config.includeSubdomains;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneHold resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneHold to import
    * @param importFromId The id of the existing ZoneHold that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneHold to import is found
    */
    ZoneHold.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_hold", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZoneHold.prototype, "hold", {
        // ==========
        // ATTRIBUTES
        // ==========
        // hold - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('hold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneHold.prototype, "holdAfter", {
        get: function () {
            return this.getStringAttribute('hold_after');
        },
        set: function (value) {
            this._holdAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneHold.prototype.resetHoldAfter = function () {
        this._holdAfter = undefined;
    };
    Object.defineProperty(ZoneHold.prototype, "holdAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._holdAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneHold.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneHold.prototype, "includeSubdomains", {
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        set: function (value) {
            this._includeSubdomains = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneHold.prototype.resetIncludeSubdomains = function () {
        this._includeSubdomains = undefined;
    };
    Object.defineProperty(ZoneHold.prototype, "includeSubdomainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeSubdomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneHold.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneHold.prototype, "zoneIdInput", {
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
    ZoneHold.prototype.synthesizeAttributes = function () {
        return {
            hold_after: cdktf.stringToTerraform(this._holdAfter),
            include_subdomains: cdktf.booleanToTerraform(this._includeSubdomains),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZoneHold.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            hold_after: {
                value: cdktf.stringToHclTerraform(this._holdAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include_subdomains: {
                value: cdktf.booleanToHclTerraform(this._includeSubdomains),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    ZoneHold.tfResourceType = "cloudflare_zone_hold";
    return ZoneHold;
}(cdktf.TerraformResource));
exports.ZoneHold = ZoneHold;
