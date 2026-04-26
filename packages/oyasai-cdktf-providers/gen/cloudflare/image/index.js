"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image
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
exports.Image = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image cloudflare_image}
*/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image cloudflare_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageConfig
    */
    function Image(scope, id, config) {
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
        _this._creator = config.creator;
        _this._file = config.file;
        _this._id = config.id;
        _this._metadata = config.metadata;
        _this._requireSignedUrls = config.requireSignedUrls;
        _this._url = config.url;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Image to import
    * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Image to import is found
    */
    Image.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Image.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Image.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "creator", {
        get: function () {
            return this.getStringAttribute('creator');
        },
        set: function (value) {
            this._creator = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetCreator = function () {
        this._creator = undefined;
    };
    Object.defineProperty(Image.prototype, "creatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "file", {
        get: function () {
            return this.getStringAttribute('file');
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetFile = function () {
        this._file = undefined;
    };
    Object.defineProperty(Image.prototype, "fileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._file;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "filename", {
        // filename - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('filename');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "metadata", {
        get: function () {
            return this.getStringAttribute('metadata');
        },
        set: function (value) {
            this._metadata = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetMetadata = function () {
        this._metadata = undefined;
    };
    Object.defineProperty(Image.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "requireSignedUrls", {
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        set: function (value) {
            this._requireSignedUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetRequireSignedUrls = function () {
        this._requireSignedUrls = undefined;
    };
    Object.defineProperty(Image.prototype, "requireSignedUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireSignedUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "uploaded", {
        // uploaded - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetUrl = function () {
        this._url = undefined;
    };
    Object.defineProperty(Image.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "variants", {
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
    Image.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            creator: cdktf.stringToTerraform(this._creator),
            file: cdktf.stringToTerraform(this._file),
            id: cdktf.stringToTerraform(this._id),
            metadata: cdktf.stringToTerraform(this._metadata),
            require_signed_urls: cdktf.booleanToTerraform(this._requireSignedUrls),
            url: cdktf.stringToTerraform(this._url),
        };
    };
    Image.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            creator: {
                value: cdktf.stringToHclTerraform(this._creator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file: {
                value: cdktf.stringToHclTerraform(this._file),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.stringToHclTerraform(this._metadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            require_signed_urls: {
                value: cdktf.booleanToHclTerraform(this._requireSignedUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            url: {
                value: cdktf.stringToHclTerraform(this._url),
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
    Image.tfResourceType = "cloudflare_image";
    return Image;
}(cdktf.TerraformResource));
exports.Image = Image;
