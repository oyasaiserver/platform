"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls
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
exports.TotalTls = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls cloudflare_total_tls}
*/
var TotalTls = /** @class */ (function (_super) {
    __extends(TotalTls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls cloudflare_total_tls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TotalTlsConfig
    */
    function TotalTls(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_total_tls',
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
        _this._certificateAuthority = config.certificateAuthority;
        _this._enabled = config.enabled;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TotalTls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TotalTls to import
    * @param importFromId The id of the existing TotalTls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TotalTls to import is found
    */
    TotalTls.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_total_tls", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TotalTls.prototype, "certificateAuthority", {
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        set: function (value) {
            this._certificateAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    TotalTls.prototype.resetCertificateAuthority = function () {
        this._certificateAuthority = undefined;
    };
    Object.defineProperty(TotalTls.prototype, "certificateAuthorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TotalTls.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TotalTls.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TotalTls.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TotalTls.prototype, "validityPeriod", {
        // validity_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('validity_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TotalTls.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TotalTls.prototype, "zoneIdInput", {
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
    TotalTls.prototype.synthesizeAttributes = function () {
        return {
            certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
            enabled: cdktf.booleanToTerraform(this._enabled),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    TotalTls.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            certificate_authority: {
                value: cdktf.stringToHclTerraform(this._certificateAuthority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
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
    TotalTls.tfResourceType = "cloudflare_total_tls";
    return TotalTls;
}(cdktf.TerraformResource));
exports.TotalTls = TotalTls;
