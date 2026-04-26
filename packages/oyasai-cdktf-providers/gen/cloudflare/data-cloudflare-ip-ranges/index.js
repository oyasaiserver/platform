"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges
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
exports.DataCloudflareIpRanges = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges cloudflare_ip_ranges}
*/
var DataCloudflareIpRanges = /** @class */ (function (_super) {
    __extends(DataCloudflareIpRanges, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges cloudflare_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareIpRangesConfig = {}
    */
    function DataCloudflareIpRanges(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ip_ranges',
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
        _this._networks = config.networks;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareIpRanges resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareIpRanges to import
    * @param importFromId The id of the existing DataCloudflareIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareIpRanges to import is found
    */
    DataCloudflareIpRanges.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ip_ranges", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareIpRanges.prototype, "etag", {
        // ==========
        // ATTRIBUTES
        // ==========
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareIpRanges.prototype, "ipv4Cidrs", {
        // ipv4_cidrs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv4_cidrs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareIpRanges.prototype, "ipv6Cidrs", {
        // ipv6_cidrs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv6_cidrs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareIpRanges.prototype, "jdcloudCidrs", {
        // jdcloud_cidrs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('jdcloud_cidrs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareIpRanges.prototype, "networks", {
        get: function () {
            return this.getStringAttribute('networks');
        },
        set: function (value) {
            this._networks = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareIpRanges.prototype.resetNetworks = function () {
        this._networks = undefined;
    };
    Object.defineProperty(DataCloudflareIpRanges.prototype, "networksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareIpRanges.prototype.synthesizeAttributes = function () {
        return {
            networks: cdktf.stringToTerraform(this._networks),
        };
    };
    DataCloudflareIpRanges.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            networks: {
                value: cdktf.stringToHclTerraform(this._networks),
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
    DataCloudflareIpRanges.tfResourceType = "cloudflare_ip_ranges";
    return DataCloudflareIpRanges;
}(cdktf.TerraformDataSource));
exports.DataCloudflareIpRanges = DataCloudflareIpRanges;
