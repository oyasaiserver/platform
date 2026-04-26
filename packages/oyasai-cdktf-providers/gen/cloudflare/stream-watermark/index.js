"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark
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
exports.StreamWatermarkA = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark cloudflare_stream_watermark}
*/
var StreamWatermarkA = /** @class */ (function (_super) {
    __extends(StreamWatermarkA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark cloudflare_stream_watermark} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamWatermarkAConfig = {}
    */
    function StreamWatermarkA(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream_watermark',
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
        _this._identifier = config.identifier;
        _this._name = config.name;
        _this._opacity = config.opacity;
        _this._padding = config.padding;
        _this._position = config.position;
        _this._scale = config.scale;
        _this._url = config.url;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamWatermarkA to import
    * @param importFromId The id of the existing StreamWatermarkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamWatermarkA to import is found
    */
    StreamWatermarkA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_watermark", importId: importFromId, provider: provider });
    };
    Object.defineProperty(StreamWatermarkA.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "downloadedFrom", {
        // downloaded_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('downloaded_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "opacity", {
        get: function () {
            return this.getNumberAttribute('opacity');
        },
        set: function (value) {
            this._opacity = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetOpacity = function () {
        this._opacity = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "opacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._opacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "padding", {
        get: function () {
            return this.getNumberAttribute('padding');
        },
        set: function (value) {
            this._padding = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetPadding = function () {
        this._padding = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "paddingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._padding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "position", {
        get: function () {
            return this.getStringAttribute('position');
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetPosition = function () {
        this._position = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "positionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "scale", {
        get: function () {
            return this.getNumberAttribute('scale');
        },
        set: function (value) {
            this._scale = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetScale = function () {
        this._scale = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "scaleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWatermarkA.prototype.resetUrl = function () {
        this._url = undefined;
    };
    Object.defineProperty(StreamWatermarkA.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkA.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StreamWatermarkA.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            identifier: cdktf.stringToTerraform(this._identifier),
            name: cdktf.stringToTerraform(this._name),
            opacity: cdktf.numberToTerraform(this._opacity),
            padding: cdktf.numberToTerraform(this._padding),
            position: cdktf.stringToTerraform(this._position),
            scale: cdktf.numberToTerraform(this._scale),
            url: cdktf.stringToTerraform(this._url),
        };
    };
    StreamWatermarkA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identifier: {
                value: cdktf.stringToHclTerraform(this._identifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            opacity: {
                value: cdktf.numberToHclTerraform(this._opacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            padding: {
                value: cdktf.numberToHclTerraform(this._padding),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            position: {
                value: cdktf.stringToHclTerraform(this._position),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scale: {
                value: cdktf.numberToHclTerraform(this._scale),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    StreamWatermarkA.tfResourceType = "cloudflare_stream_watermark";
    return StreamWatermarkA;
}(cdktf.TerraformResource));
exports.StreamWatermarkA = StreamWatermarkA;
