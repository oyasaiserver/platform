"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset
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
exports.DataCloudflareCustomPageAsset = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset cloudflare_custom_page_asset}
*/
var DataCloudflareCustomPageAsset = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomPageAsset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset cloudflare_custom_page_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomPageAssetConfig
    */
    function DataCloudflareCustomPageAsset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_page_asset',
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
        _this._assetName = config.assetName;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomPageAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomPageAsset to import
    * @param importFromId The id of the existing DataCloudflareCustomPageAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomPageAsset to import is found
    */
    DataCloudflareCustomPageAsset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_page_asset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomPageAsset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "assetName", {
        get: function () {
            return this.getStringAttribute('asset_name');
        },
        set: function (value) {
            this._assetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "assetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "sizeBytes", {
        // size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomPageAsset.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomPageAsset.prototype, "zoneIdInput", {
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
    DataCloudflareCustomPageAsset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            asset_name: cdktf.stringToTerraform(this._assetName),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCustomPageAsset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_name: {
                value: cdktf.stringToHclTerraform(this._assetName),
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
    DataCloudflareCustomPageAsset.tfResourceType = "cloudflare_custom_page_asset";
    return DataCloudflareCustomPageAsset;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCustomPageAsset = DataCloudflareCustomPageAsset;
