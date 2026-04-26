"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_certificate
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
exports.DataCloudflareZeroTrustAccessMtlsCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate}
*/
var DataCloudflareZeroTrustAccessMtlsCertificate = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessMtlsCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessMtlsCertificateConfig
    */
    function DataCloudflareZeroTrustAccessMtlsCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_mtls_certificate',
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
        _this._certificateId = config.certificateId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessMtlsCertificate to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessMtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessMtlsCertificate to import is found
    */
    DataCloudflareZeroTrustAccessMtlsCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_mtls_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessMtlsCertificate.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "associatedHostnames", {
        // associated_hostnames - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('associated_hostnames');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessMtlsCertificate.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessMtlsCertificate.prototype, "zoneIdInput", {
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
    DataCloudflareZeroTrustAccessMtlsCertificate.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            certificate_id: cdktf.stringToTerraform(this._certificateId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZeroTrustAccessMtlsCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_id: {
                value: cdktf.stringToHclTerraform(this._certificateId),
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
    DataCloudflareZeroTrustAccessMtlsCertificate.tfResourceType = "cloudflare_zero_trust_access_mtls_certificate";
    return DataCloudflareZeroTrustAccessMtlsCertificate;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessMtlsCertificate = DataCloudflareZeroTrustAccessMtlsCertificate;
