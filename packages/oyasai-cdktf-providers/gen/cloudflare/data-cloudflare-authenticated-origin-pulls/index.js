"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls
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
exports.DataCloudflareAuthenticatedOriginPulls = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}
*/
var DataCloudflareAuthenticatedOriginPulls = /** @class */ (function (_super) {
    __extends(DataCloudflareAuthenticatedOriginPulls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsConfig
    */
    function DataCloudflareAuthenticatedOriginPulls(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_authenticated_origin_pulls',
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
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPulls to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPulls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPulls to import is found
    */
    DataCloudflareAuthenticatedOriginPulls.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_authenticated_origin_pulls", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "certId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // cert_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "certStatus", {
        // cert_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "certUpdatedAt", {
        // cert_updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "certUploadedOn", {
        // cert_uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPulls.prototype, "zoneIdInput", {
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
    DataCloudflareAuthenticatedOriginPulls.prototype.synthesizeAttributes = function () {
        return {
            hostname: cdktf.stringToTerraform(this._hostname),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareAuthenticatedOriginPulls.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
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
    DataCloudflareAuthenticatedOriginPulls.tfResourceType = "cloudflare_authenticated_origin_pulls";
    return DataCloudflareAuthenticatedOriginPulls;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAuthenticatedOriginPulls = DataCloudflareAuthenticatedOriginPulls;
