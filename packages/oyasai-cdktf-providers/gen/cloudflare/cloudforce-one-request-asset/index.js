"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset
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
exports.CloudforceOneRequestAsset = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
var CloudforceOneRequestAsset = /** @class */ (function (_super) {
    __extends(CloudforceOneRequestAsset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestAssetConfig
    */
    function CloudforceOneRequestAsset(scope, id, config) {
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
        _this._page = config.page;
        _this._perPage = config.perPage;
        _this._requestId = config.requestId;
        _this._source = config.source;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestAsset to import
    * @param importFromId The id of the existing CloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestAsset to import is found
    */
    CloudforceOneRequestAsset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequestAsset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "fileType", {
        // file_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "page", {
        get: function () {
            return this.getNumberAttribute('page');
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "pageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "requestId", {
        get: function () {
            return this.getStringAttribute('request_id');
        },
        set: function (value) {
            this._requestId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "requestIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequestAsset.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(CloudforceOneRequestAsset.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudforceOneRequestAsset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            page: cdktf.numberToTerraform(this._page),
            per_page: cdktf.numberToTerraform(this._perPage),
            request_id: cdktf.stringToTerraform(this._requestId),
            source: cdktf.stringToTerraform(this._source),
        };
    };
    CloudforceOneRequestAsset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            page: {
                value: cdktf.numberToHclTerraform(this._page),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            per_page: {
                value: cdktf.numberToHclTerraform(this._perPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktf.stringToHclTerraform(this._source),
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
    CloudforceOneRequestAsset.tfResourceType = "cloudflare_cloudforce_one_request_asset";
    return CloudforceOneRequestAsset;
}(cdktf.TerraformResource));
exports.CloudforceOneRequestAsset = CloudforceOneRequestAsset;
