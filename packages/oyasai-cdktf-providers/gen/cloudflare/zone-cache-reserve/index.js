"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve
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
exports.ZoneCacheReserve = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve cloudflare_zone_cache_reserve}
*/
var ZoneCacheReserve = /** @class */ (function (_super) {
    __extends(ZoneCacheReserve, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve cloudflare_zone_cache_reserve} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneCacheReserveConfig
    */
    function ZoneCacheReserve(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_cache_reserve',
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
        _this._value = config.value;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneCacheReserve resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneCacheReserve to import
    * @param importFromId The id of the existing ZoneCacheReserve that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneCacheReserve to import is found
    */
    ZoneCacheReserve.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_cache_reserve", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZoneCacheReserve.prototype, "editable", {
        // ==========
        // ATTRIBUTES
        // ==========
        // editable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('editable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheReserve.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheReserve.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheReserve.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheReserve.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(ZoneCacheReserve.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheReserve.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheReserve.prototype, "zoneIdInput", {
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
    ZoneCacheReserve.prototype.synthesizeAttributes = function () {
        return {
            value: cdktf.stringToTerraform(this._value),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZoneCacheReserve.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            value: {
                value: cdktf.stringToHclTerraform(this._value),
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
    ZoneCacheReserve.tfResourceType = "cloudflare_zone_cache_reserve";
    return ZoneCacheReserve;
}(cdktf.TerraformResource));
exports.ZoneCacheReserve = ZoneCacheReserve;
