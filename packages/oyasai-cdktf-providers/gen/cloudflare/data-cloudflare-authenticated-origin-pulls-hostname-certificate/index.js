"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate
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
exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}
*/
var DataCloudflareAuthenticatedOriginPullsHostnameCertificate = /** @class */ (function (_super) {
    __extends(DataCloudflareAuthenticatedOriginPullsHostnameCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig
    */
    function DataCloudflareAuthenticatedOriginPullsHostnameCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_authenticated_origin_pulls_hostname_certificate',
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
        _this._certificateId = config.certificateId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import is found
    */
    DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_authenticated_origin_pulls_hostname_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "certificate", {
        // ==========
        // ATTRIBUTES
        // ==========
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype, "zoneIdInput", {
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
    DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_id: cdktf.stringToTerraform(this._certificateId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareAuthenticatedOriginPullsHostnameCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareAuthenticatedOriginPullsHostnameCertificate.tfResourceType = "cloudflare_authenticated_origin_pulls_hostname_certificate";
    return DataCloudflareAuthenticatedOriginPullsHostnameCertificate;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificate = DataCloudflareAuthenticatedOriginPullsHostnameCertificate;
