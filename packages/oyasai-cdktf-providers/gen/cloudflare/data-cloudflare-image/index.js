"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image
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
exports.DataCloudflareImage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image cloudflare_image}
*/
var DataCloudflareImage = /** @class */ (function (_super) {
    __extends(DataCloudflareImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image cloudflare_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareImageConfig
    */
    function DataCloudflareImage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_image',
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
        _this._imageId = config.imageId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareImage to import
    * @param importFromId The id of the existing DataCloudflareImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareImage to import is found
    */
    DataCloudflareImage.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareImage.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareImage.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareImage.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "creator", {
        // creator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "filename", {
        // filename - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('filename');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "imageId", {
        get: function () {
            return this.getStringAttribute('image_id');
        },
        set: function (value) {
            this._imageId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "imageIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "requireSignedUrls", {
        // require_signed_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "uploaded", {
        // uploaded - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImage.prototype, "variants", {
        // variants - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('variants');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareImage.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            image_id: cdktf.stringToTerraform(this._imageId),
        };
    };
    DataCloudflareImage.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_id: {
                value: cdktf.stringToHclTerraform(this._imageId),
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
    DataCloudflareImage.tfResourceType = "cloudflare_image";
    return DataCloudflareImage;
}(cdktf.TerraformDataSource));
exports.DataCloudflareImage = DataCloudflareImage;
