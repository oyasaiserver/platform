"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream
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
exports.Stream = exports.StreamWatermarkOutputReference = exports.StreamStatusOutputReference = exports.StreamPublicDetailsOutputReference = exports.StreamPlaybackOutputReference = exports.StreamInputOutputReference = void 0;
exports.streamInputToTerraform = streamInputToTerraform;
exports.streamInputToHclTerraform = streamInputToHclTerraform;
exports.streamPlaybackToTerraform = streamPlaybackToTerraform;
exports.streamPlaybackToHclTerraform = streamPlaybackToHclTerraform;
exports.streamPublicDetailsToTerraform = streamPublicDetailsToTerraform;
exports.streamPublicDetailsToHclTerraform = streamPublicDetailsToHclTerraform;
exports.streamStatusToTerraform = streamStatusToTerraform;
exports.streamStatusToHclTerraform = streamStatusToHclTerraform;
exports.streamWatermarkToTerraform = streamWatermarkToTerraform;
exports.streamWatermarkToHclTerraform = streamWatermarkToHclTerraform;
var cdktf = require("cdktf");
function streamInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamInputOutputReference = /** @class */ (function (_super) {
    __extends(StreamInputOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamInputOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamInputOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamInputOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamInputOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return StreamInputOutputReference;
}(cdktf.ComplexObject));
exports.StreamInputOutputReference = StreamInputOutputReference;
function streamPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(StreamPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamPlaybackOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamPlaybackOutputReference.prototype, "dash", {
        // dash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamPlaybackOutputReference.prototype, "hls", {
        // hls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hls');
        },
        enumerable: false,
        configurable: true
    });
    return StreamPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.StreamPlaybackOutputReference = StreamPlaybackOutputReference;
function streamPublicDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        channel_link: cdktf.stringToTerraform(struct.channelLink),
        logo: cdktf.stringToTerraform(struct.logo),
        share_link: cdktf.stringToTerraform(struct.shareLink),
        title: cdktf.stringToTerraform(struct.title),
    };
}
function streamPublicDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        channel_link: {
            value: cdktf.stringToHclTerraform(struct.channelLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logo: {
            value: cdktf.stringToHclTerraform(struct.logo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_link: {
            value: cdktf.stringToHclTerraform(struct.shareLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktf.stringToHclTerraform(struct.title),
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
}
var StreamPublicDetailsOutputReference = /** @class */ (function (_super) {
    __extends(StreamPublicDetailsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamPublicDetailsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._channelLink !== undefined) {
                hasAnyValues = true;
                internalValueResult.channelLink = this._channelLink;
            }
            if (this._logo !== undefined) {
                hasAnyValues = true;
                internalValueResult.logo = this._logo;
            }
            if (this._shareLink !== undefined) {
                hasAnyValues = true;
                internalValueResult.shareLink = this._shareLink;
            }
            if (this._title !== undefined) {
                hasAnyValues = true;
                internalValueResult.title = this._title;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._channelLink = undefined;
                this._logo = undefined;
                this._shareLink = undefined;
                this._title = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._channelLink = value.channelLink;
                this._logo = value.logo;
                this._shareLink = value.shareLink;
                this._title = value.title;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "channelLink", {
        get: function () {
            return this.getStringAttribute('channel_link');
        },
        set: function (value) {
            this._channelLink = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamPublicDetailsOutputReference.prototype.resetChannelLink = function () {
        this._channelLink = undefined;
    };
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "channelLinkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._channelLink;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "logo", {
        get: function () {
            return this.getStringAttribute('logo');
        },
        set: function (value) {
            this._logo = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamPublicDetailsOutputReference.prototype.resetLogo = function () {
        this._logo = undefined;
    };
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "logoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "shareLink", {
        get: function () {
            return this.getStringAttribute('share_link');
        },
        set: function (value) {
            this._shareLink = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamPublicDetailsOutputReference.prototype.resetShareLink = function () {
        this._shareLink = undefined;
    };
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "shareLinkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shareLink;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "title", {
        get: function () {
            return this.getStringAttribute('title');
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamPublicDetailsOutputReference.prototype.resetTitle = function () {
        this._title = undefined;
    };
    Object.defineProperty(StreamPublicDetailsOutputReference.prototype, "titleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    return StreamPublicDetailsOutputReference;
}(cdktf.ComplexObject));
exports.StreamPublicDetailsOutputReference = StreamPublicDetailsOutputReference;
function streamStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamStatusOutputReference = /** @class */ (function (_super) {
    __extends(StreamStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamStatusOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamStatusOutputReference.prototype, "errorReasonCode", {
        // error_reason_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_reason_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamStatusOutputReference.prototype, "errorReasonText", {
        // error_reason_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_reason_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamStatusOutputReference.prototype, "pctComplete", {
        // pct_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pct_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return StreamStatusOutputReference;
}(cdktf.ComplexObject));
exports.StreamStatusOutputReference = StreamStatusOutputReference;
function streamWatermarkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamWatermarkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamWatermarkOutputReference = /** @class */ (function (_super) {
    __extends(StreamWatermarkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamWatermarkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "downloadedFrom", {
        // downloaded_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('downloaded_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "opacity", {
        // opacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "padding", {
        // padding - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('padding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "position", {
        // position - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('position');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "scale", {
        // scale - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('scale');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWatermarkOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return StreamWatermarkOutputReference;
}(cdktf.ComplexObject));
exports.StreamWatermarkOutputReference = StreamWatermarkOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream cloudflare_stream}
*/
var Stream = /** @class */ (function (_super) {
    __extends(Stream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream cloudflare_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamConfig = {}
    */
    function Stream(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream',
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
        // input - computed: true, optional: false, required: false
        _this._input = new StreamInputOutputReference(_this, "input");
        // playback - computed: true, optional: false, required: false
        _this._playback = new StreamPlaybackOutputReference(_this, "playback");
        // public_details - computed: false, optional: true, required: false
        _this._publicDetails = new StreamPublicDetailsOutputReference(_this, "public_details");
        // status - computed: true, optional: false, required: false
        _this._status = new StreamStatusOutputReference(_this, "status");
        // watermark - computed: true, optional: false, required: false
        _this._watermark = new StreamWatermarkOutputReference(_this, "watermark");
        _this._accountId = config.accountId;
        _this._allowedOrigins = config.allowedOrigins;
        _this._creator = config.creator;
        _this._identifier = config.identifier;
        _this._maxDurationSeconds = config.maxDurationSeconds;
        _this._meta = config.meta;
        _this._publicDetails.internalValue = config.publicDetails;
        _this._requireSignedUrls = config.requireSignedUrls;
        _this._scheduledDeletion = config.scheduledDeletion;
        _this._thumbnailTimestampPct = config.thumbnailTimestampPct;
        _this._uid = config.uid;
        _this._uploadExpiry = config.uploadExpiry;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Stream to import
    * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Stream to import is found
    */
    Stream.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Stream.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Stream.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "allowedOrigins", {
        get: function () {
            return this.getListAttribute('allowed_origins');
        },
        set: function (value) {
            this._allowedOrigins = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetAllowedOrigins = function () {
        this._allowedOrigins = undefined;
    };
    Object.defineProperty(Stream.prototype, "allowedOriginsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedOrigins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "clippedFrom", {
        // clipped_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clipped_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "creator", {
        get: function () {
            return this.getStringAttribute('creator');
        },
        set: function (value) {
            this._creator = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetCreator = function () {
        this._creator = undefined;
    };
    Object.defineProperty(Stream.prototype, "creatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(Stream.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "liveInput", {
        // live_input - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('live_input');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "maxDurationSeconds", {
        get: function () {
            return this.getNumberAttribute('max_duration_seconds');
        },
        set: function (value) {
            this._maxDurationSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetMaxDurationSeconds = function () {
        this._maxDurationSeconds = undefined;
    };
    Object.defineProperty(Stream.prototype, "maxDurationSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxDurationSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "maxSizeBytes", {
        // max_size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "meta", {
        get: function () {
            return this.getStringAttribute('meta');
        },
        set: function (value) {
            this._meta = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetMeta = function () {
        this._meta = undefined;
    };
    Object.defineProperty(Stream.prototype, "metaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "playback", {
        get: function () {
            return this._playback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "preview", {
        // preview - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "publicDetails", {
        get: function () {
            return this._publicDetails;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.putPublicDetails = function (value) {
        this._publicDetails.internalValue = value;
    };
    Stream.prototype.resetPublicDetails = function () {
        this._publicDetails.internalValue = undefined;
    };
    Object.defineProperty(Stream.prototype, "publicDetailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicDetails.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "readyToStream", {
        // ready_to_stream - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ready_to_stream');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "readyToStreamAt", {
        // ready_to_stream_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ready_to_stream_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "requireSignedUrls", {
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        set: function (value) {
            this._requireSignedUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetRequireSignedUrls = function () {
        this._requireSignedUrls = undefined;
    };
    Object.defineProperty(Stream.prototype, "requireSignedUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireSignedUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "scheduledDeletion", {
        get: function () {
            return this.getStringAttribute('scheduled_deletion');
        },
        set: function (value) {
            this._scheduledDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetScheduledDeletion = function () {
        this._scheduledDeletion = undefined;
    };
    Object.defineProperty(Stream.prototype, "scheduledDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduledDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "thumbnail", {
        // thumbnail - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbnail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "thumbnailTimestampPct", {
        get: function () {
            return this.getNumberAttribute('thumbnail_timestamp_pct');
        },
        set: function (value) {
            this._thumbnailTimestampPct = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetThumbnailTimestampPct = function () {
        this._thumbnailTimestampPct = undefined;
    };
    Object.defineProperty(Stream.prototype, "thumbnailTimestampPctInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thumbnailTimestampPct;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "uid", {
        get: function () {
            return this.getStringAttribute('uid');
        },
        set: function (value) {
            this._uid = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetUid = function () {
        this._uid = undefined;
    };
    Object.defineProperty(Stream.prototype, "uidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "uploadExpiry", {
        get: function () {
            return this.getStringAttribute('upload_expiry');
        },
        set: function (value) {
            this._uploadExpiry = value;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.resetUploadExpiry = function () {
        this._uploadExpiry = undefined;
    };
    Object.defineProperty(Stream.prototype, "uploadExpiryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uploadExpiry;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "uploaded", {
        // uploaded - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "watermark", {
        get: function () {
            return this._watermark;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Stream.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
            creator: cdktf.stringToTerraform(this._creator),
            identifier: cdktf.stringToTerraform(this._identifier),
            max_duration_seconds: cdktf.numberToTerraform(this._maxDurationSeconds),
            meta: cdktf.stringToTerraform(this._meta),
            public_details: streamPublicDetailsToTerraform(this._publicDetails.internalValue),
            require_signed_urls: cdktf.booleanToTerraform(this._requireSignedUrls),
            scheduled_deletion: cdktf.stringToTerraform(this._scheduledDeletion),
            thumbnail_timestamp_pct: cdktf.numberToTerraform(this._thumbnailTimestampPct),
            uid: cdktf.stringToTerraform(this._uid),
            upload_expiry: cdktf.stringToTerraform(this._uploadExpiry),
        };
    };
    Stream.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allowed_origins: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            creator: {
                value: cdktf.stringToHclTerraform(this._creator),
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
            max_duration_seconds: {
                value: cdktf.numberToHclTerraform(this._maxDurationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            meta: {
                value: cdktf.stringToHclTerraform(this._meta),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_details: {
                value: streamPublicDetailsToHclTerraform(this._publicDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "StreamPublicDetails",
            },
            require_signed_urls: {
                value: cdktf.booleanToHclTerraform(this._requireSignedUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            scheduled_deletion: {
                value: cdktf.stringToHclTerraform(this._scheduledDeletion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thumbnail_timestamp_pct: {
                value: cdktf.numberToHclTerraform(this._thumbnailTimestampPct),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            uid: {
                value: cdktf.stringToHclTerraform(this._uid),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upload_expiry: {
                value: cdktf.stringToHclTerraform(this._uploadExpiry),
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
    Stream.tfResourceType = "cloudflare_stream";
    return Stream;
}(cdktf.TerraformResource));
exports.Stream = Stream;
