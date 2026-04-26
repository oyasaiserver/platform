"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec
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
exports.ZoneDnssec = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec cloudflare_zone_dnssec}
*/
var ZoneDnssec = /** @class */ (function (_super) {
    __extends(ZoneDnssec, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec cloudflare_zone_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneDnssecConfig
    */
    function ZoneDnssec(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_dnssec',
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
        _this._dnssecMultiSigner = config.dnssecMultiSigner;
        _this._dnssecPresigned = config.dnssecPresigned;
        _this._dnssecUseNsec3 = config.dnssecUseNsec3;
        _this._status = config.status;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneDnssec resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneDnssec to import
    * @param importFromId The id of the existing ZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneDnssec to import is found
    */
    ZoneDnssec.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dnssec", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZoneDnssec.prototype, "algorithm", {
        // ==========
        // ATTRIBUTES
        // ==========
        // algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "digest", {
        // digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "digestAlgorithm", {
        // digest_algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest_algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "digestType", {
        // digest_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "dnssecMultiSigner", {
        get: function () {
            return this.getBooleanAttribute('dnssec_multi_signer');
        },
        set: function (value) {
            this._dnssecMultiSigner = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnssec.prototype.resetDnssecMultiSigner = function () {
        this._dnssecMultiSigner = undefined;
    };
    Object.defineProperty(ZoneDnssec.prototype, "dnssecMultiSignerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnssecMultiSigner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "dnssecPresigned", {
        get: function () {
            return this.getBooleanAttribute('dnssec_presigned');
        },
        set: function (value) {
            this._dnssecPresigned = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnssec.prototype.resetDnssecPresigned = function () {
        this._dnssecPresigned = undefined;
    };
    Object.defineProperty(ZoneDnssec.prototype, "dnssecPresignedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnssecPresigned;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "dnssecUseNsec3", {
        get: function () {
            return this.getBooleanAttribute('dnssec_use_nsec3');
        },
        set: function (value) {
            this._dnssecUseNsec3 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnssec.prototype.resetDnssecUseNsec3 = function () {
        this._dnssecUseNsec3 = undefined;
    };
    Object.defineProperty(ZoneDnssec.prototype, "dnssecUseNsec3Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnssecUseNsec3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "ds", {
        // ds - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "flags", {
        // flags - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('flags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "keyTag", {
        // key_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('key_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "keyType", {
        // key_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnssec.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(ZoneDnssec.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnssec.prototype, "zoneIdInput", {
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
    ZoneDnssec.prototype.synthesizeAttributes = function () {
        return {
            dnssec_multi_signer: cdktf.booleanToTerraform(this._dnssecMultiSigner),
            dnssec_presigned: cdktf.booleanToTerraform(this._dnssecPresigned),
            dnssec_use_nsec3: cdktf.booleanToTerraform(this._dnssecUseNsec3),
            status: cdktf.stringToTerraform(this._status),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZoneDnssec.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            dnssec_multi_signer: {
                value: cdktf.booleanToHclTerraform(this._dnssecMultiSigner),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dnssec_presigned: {
                value: cdktf.booleanToHclTerraform(this._dnssecPresigned),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dnssec_use_nsec3: {
                value: cdktf.booleanToHclTerraform(this._dnssecUseNsec3),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    ZoneDnssec.tfResourceType = "cloudflare_zone_dnssec";
    return ZoneDnssec;
}(cdktf.TerraformResource));
exports.ZoneDnssec = ZoneDnssec;
