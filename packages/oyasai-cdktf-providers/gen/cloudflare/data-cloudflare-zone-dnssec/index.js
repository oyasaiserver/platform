"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec
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
exports.DataCloudflareZoneDnssec = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec}
*/
var DataCloudflareZoneDnssec = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneDnssec, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneDnssecConfig = {}
    */
    function DataCloudflareZoneDnssec(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneDnssec resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneDnssec to import
    * @param importFromId The id of the existing DataCloudflareZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneDnssec to import is found
    */
    DataCloudflareZoneDnssec.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dnssec", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "algorithm", {
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
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "digest", {
        // digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "digestAlgorithm", {
        // digest_algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest_algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "digestType", {
        // digest_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "dnssecMultiSigner", {
        // dnssec_multi_signer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dnssec_multi_signer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "dnssecPresigned", {
        // dnssec_presigned - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dnssec_presigned');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "dnssecUseNsec3", {
        // dnssec_use_nsec3 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dnssec_use_nsec3');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "ds", {
        // ds - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "flags", {
        // flags - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('flags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "keyTag", {
        // key_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('key_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "keyType", {
        // key_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneDnssec.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneDnssec.prototype, "zoneIdInput", {
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
    DataCloudflareZoneDnssec.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZoneDnssec.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareZoneDnssec.tfResourceType = "cloudflare_zone_dnssec";
    return DataCloudflareZoneDnssec;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZoneDnssec = DataCloudflareZoneDnssec;
