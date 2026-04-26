"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections
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
exports.DataCloudflarePageShieldConnections = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections cloudflare_page_shield_connections}
*/
var DataCloudflarePageShieldConnections = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldConnections, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections cloudflare_page_shield_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldConnectionsConfig
    */
    function DataCloudflarePageShieldConnections(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_page_shield_connections',
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
        _this._connectionId = config.connectionId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldConnections resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldConnections to import
    * @param importFromId The id of the existing DataCloudflarePageShieldConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldConnections to import is found
    */
    DataCloudflarePageShieldConnections.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_connections", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "addedAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // added_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('added_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "domainReportedMalicious", {
        // domain_reported_malicious - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('domain_reported_malicious');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "firstPageUrl", {
        // first_page_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_page_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "firstSeenAt", {
        // first_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "lastSeenAt", {
        // last_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "maliciousDomainCategories", {
        // malicious_domain_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('malicious_domain_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "maliciousUrlCategories", {
        // malicious_url_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('malicious_url_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "pageUrls", {
        // page_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('page_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "urlContainsCdnCgiPath", {
        // url_contains_cdn_cgi_path - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_contains_cdn_cgi_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "urlReportedMalicious", {
        // url_reported_malicious - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_reported_malicious');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnections.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnections.prototype, "zoneIdInput", {
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
    DataCloudflarePageShieldConnections.prototype.synthesizeAttributes = function () {
        return {
            connection_id: cdktf.stringToTerraform(this._connectionId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflarePageShieldConnections.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            connection_id: {
                value: cdktf.stringToHclTerraform(this._connectionId),
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
    DataCloudflarePageShieldConnections.tfResourceType = "cloudflare_page_shield_connections";
    return DataCloudflarePageShieldConnections;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePageShieldConnections = DataCloudflarePageShieldConnections;
