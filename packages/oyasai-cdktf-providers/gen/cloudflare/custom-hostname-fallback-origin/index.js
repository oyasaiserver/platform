"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin
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
exports.CustomHostnameFallbackOrigin = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}
*/
var CustomHostnameFallbackOrigin = /** @class */ (function (_super) {
    __extends(CustomHostnameFallbackOrigin, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomHostnameFallbackOriginConfig
    */
    function CustomHostnameFallbackOrigin(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_hostname_fallback_origin',
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
        _this._origin = config.origin;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomHostnameFallbackOrigin to import
    * @param importFromId The id of the existing CustomHostnameFallbackOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomHostnameFallbackOrigin to import is found
    */
    CustomHostnameFallbackOrigin.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname_fallback_origin", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "errors", {
        // errors - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('errors');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "origin", {
        get: function () {
            return this.getStringAttribute('origin');
        },
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "originInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameFallbackOrigin.prototype, "zoneIdInput", {
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
    CustomHostnameFallbackOrigin.prototype.synthesizeAttributes = function () {
        return {
            origin: cdktf.stringToTerraform(this._origin),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CustomHostnameFallbackOrigin.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            origin: {
                value: cdktf.stringToHclTerraform(this._origin),
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
    CustomHostnameFallbackOrigin.tfResourceType = "cloudflare_custom_hostname_fallback_origin";
    return CustomHostnameFallbackOrigin;
}(cdktf.TerraformResource));
exports.CustomHostnameFallbackOrigin = CustomHostnameFallbackOrigin;
