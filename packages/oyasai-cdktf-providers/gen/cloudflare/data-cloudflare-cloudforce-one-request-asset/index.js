"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset
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
exports.DataCloudflareCloudforceOneRequestAsset = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
var DataCloudflareCloudforceOneRequestAsset = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequestAsset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestAssetConfig
    */
    function DataCloudflareCloudforceOneRequestAsset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_asset',
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
        _this._assetId = config.assetId;
        _this._requestId = config.requestId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestAsset to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found
    */
    DataCloudflareCloudforceOneRequestAsset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestAsset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "assetId", {
        get: function () {
            return this.getStringAttribute('asset_id');
        },
        set: function (value) {
            this._assetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "assetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "fileType", {
        // file_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "requestId", {
        get: function () {
            return this.getStringAttribute('request_id');
        },
        set: function (value) {
            this._requestId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestAsset.prototype, "requestIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareCloudforceOneRequestAsset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            asset_id: cdktf.stringToTerraform(this._assetId),
            request_id: cdktf.stringToTerraform(this._requestId),
        };
    };
    DataCloudflareCloudforceOneRequestAsset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_id: {
                value: cdktf.stringToHclTerraform(this._assetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
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
    DataCloudflareCloudforceOneRequestAsset.tfResourceType = "cloudflare_cloudforce_one_request_asset";
    return DataCloudflareCloudforceOneRequestAsset;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCloudforceOneRequestAsset = DataCloudflareCloudforceOneRequestAsset;
