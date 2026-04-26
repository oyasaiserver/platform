"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store
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
exports.CustomOriginTrustStore = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store cloudflare_custom_origin_trust_store}
*/
var CustomOriginTrustStore = /** @class */ (function (_super) {
    __extends(CustomOriginTrustStore, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store cloudflare_custom_origin_trust_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomOriginTrustStoreConfig
    */
    function CustomOriginTrustStore(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_origin_trust_store',
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
        _this._certificate = config.certificate;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CustomOriginTrustStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomOriginTrustStore to import
    * @param importFromId The id of the existing CustomOriginTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomOriginTrustStore to import is found
    */
    CustomOriginTrustStore.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_origin_trust_store", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CustomOriginTrustStore.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomOriginTrustStore.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomOriginTrustStore.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(CustomOriginTrustStore.prototype, "zoneIdInput", {
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
    CustomOriginTrustStore.prototype.synthesizeAttributes = function () {
        return {
            certificate: cdktf.stringToTerraform(this._certificate),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CustomOriginTrustStore.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            certificate: {
                value: cdktf.stringToHclTerraform(this._certificate),
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
    CustomOriginTrustStore.tfResourceType = "cloudflare_custom_origin_trust_store";
    return CustomOriginTrustStore;
}(cdktf.TerraformResource));
exports.CustomOriginTrustStore = CustomOriginTrustStore;
