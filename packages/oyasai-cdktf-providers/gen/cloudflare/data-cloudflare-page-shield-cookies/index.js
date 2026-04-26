"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies
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
exports.DataCloudflarePageShieldCookies = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies}
*/
var DataCloudflarePageShieldCookies = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldCookies, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldCookiesConfig
    */
    function DataCloudflarePageShieldCookies(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_page_shield_cookies',
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
        _this._cookieId = config.cookieId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldCookies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookies to import
    * @param importFromId The id of the existing DataCloudflarePageShieldCookies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookies to import is found
    */
    DataCloudflarePageShieldCookies.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_cookies", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "cookieId", {
        get: function () {
            return this.getStringAttribute('cookie_id');
        },
        set: function (value) {
            this._cookieId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "cookieIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookieId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "domainAttribute", {
        // domain_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "expiresAttribute", {
        // expires_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "firstSeenAt", {
        // first_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "httpOnlyAttribute", {
        // http_only_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('http_only_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "lastSeenAt", {
        // last_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "maxAgeAttribute", {
        // max_age_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "pageUrls", {
        // page_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('page_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "pathAttribute", {
        // path_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "sameSiteAttribute", {
        // same_site_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('same_site_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "secureAttribute", {
        // secure_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secure_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookies.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookies.prototype, "zoneIdInput", {
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
    DataCloudflarePageShieldCookies.prototype.synthesizeAttributes = function () {
        return {
            cookie_id: cdktf.stringToTerraform(this._cookieId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflarePageShieldCookies.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            cookie_id: {
                value: cdktf.stringToHclTerraform(this._cookieId),
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
    DataCloudflarePageShieldCookies.tfResourceType = "cloudflare_page_shield_cookies";
    return DataCloudflarePageShieldCookies;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePageShieldCookies = DataCloudflarePageShieldCookies;
