"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream
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
exports.DataCloudflareStream = exports.DataCloudflareStreamWatermarkOutputReference = exports.DataCloudflareStreamStatusOutputReference = exports.DataCloudflareStreamPublicDetailsOutputReference = exports.DataCloudflareStreamPlaybackOutputReference = exports.DataCloudflareStreamInputOutputReference = void 0;
exports.dataCloudflareStreamInputToTerraform = dataCloudflareStreamInputToTerraform;
exports.dataCloudflareStreamInputToHclTerraform = dataCloudflareStreamInputToHclTerraform;
exports.dataCloudflareStreamPlaybackToTerraform = dataCloudflareStreamPlaybackToTerraform;
exports.dataCloudflareStreamPlaybackToHclTerraform = dataCloudflareStreamPlaybackToHclTerraform;
exports.dataCloudflareStreamPublicDetailsToTerraform = dataCloudflareStreamPublicDetailsToTerraform;
exports.dataCloudflareStreamPublicDetailsToHclTerraform = dataCloudflareStreamPublicDetailsToHclTerraform;
exports.dataCloudflareStreamStatusToTerraform = dataCloudflareStreamStatusToTerraform;
exports.dataCloudflareStreamStatusToHclTerraform = dataCloudflareStreamStatusToHclTerraform;
exports.dataCloudflareStreamWatermarkToTerraform = dataCloudflareStreamWatermarkToTerraform;
exports.dataCloudflareStreamWatermarkToHclTerraform = dataCloudflareStreamWatermarkToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareStreamInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamInputOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamInputOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamInputOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamInputOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamInputOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamInputOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamInputOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamInputOutputReference = DataCloudflareStreamInputOutputReference;
function dataCloudflareStreamPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamPlaybackOutputReference.prototype, "dash", {
        // dash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamPlaybackOutputReference.prototype, "hls", {
        // hls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hls');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamPlaybackOutputReference = DataCloudflareStreamPlaybackOutputReference;
function dataCloudflareStreamPublicDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamPublicDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamPublicDetailsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamPublicDetailsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamPublicDetailsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamPublicDetailsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamPublicDetailsOutputReference.prototype, "channelLink", {
        // channel_link - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('channel_link');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamPublicDetailsOutputReference.prototype, "logo", {
        // logo - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamPublicDetailsOutputReference.prototype, "mediaId", {
        // media_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('media_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamPublicDetailsOutputReference.prototype, "shareLink", {
        // share_link - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_link');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamPublicDetailsOutputReference.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamPublicDetailsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamPublicDetailsOutputReference = DataCloudflareStreamPublicDetailsOutputReference;
function dataCloudflareStreamStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamStatusOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamStatusOutputReference.prototype, "errorReasonCode", {
        // error_reason_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_reason_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamStatusOutputReference.prototype, "errorReasonText", {
        // error_reason_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_reason_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamStatusOutputReference.prototype, "pctComplete", {
        // pct_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pct_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamStatusOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamStatusOutputReference = DataCloudflareStreamStatusOutputReference;
function dataCloudflareStreamWatermarkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamWatermarkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamWatermarkOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamWatermarkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamWatermarkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "downloadedFrom", {
        // downloaded_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('downloaded_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "opacity", {
        // opacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "padding", {
        // padding - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('padding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "position", {
        // position - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('position');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "scale", {
        // scale - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('scale');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarkOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamWatermarkOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamWatermarkOutputReference = DataCloudflareStreamWatermarkOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream cloudflare_stream}
*/
var DataCloudflareStream = /** @class */ (function (_super) {
    __extends(DataCloudflareStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream cloudflare_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamConfig
    */
    function DataCloudflareStream(scope, id, config) {
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
        _this._input = new DataCloudflareStreamInputOutputReference(_this, "input");
        // playback - computed: true, optional: false, required: false
        _this._playback = new DataCloudflareStreamPlaybackOutputReference(_this, "playback");
        // public_details - computed: true, optional: false, required: false
        _this._publicDetails = new DataCloudflareStreamPublicDetailsOutputReference(_this, "public_details");
        // status - computed: true, optional: false, required: false
        _this._status = new DataCloudflareStreamStatusOutputReference(_this, "status");
        // watermark - computed: true, optional: false, required: false
        _this._watermark = new DataCloudflareStreamWatermarkOutputReference(_this, "watermark");
        _this._accountId = config.accountId;
        _this._identifier = config.identifier;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStream to import
    * @param importFromId The id of the existing DataCloudflareStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStream to import is found
    */
    DataCloudflareStream.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareStream.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStream.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareStream.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "allowedOrigins", {
        // allowed_origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "clippedFrom", {
        // clipped_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clipped_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "creator", {
        // creator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "liveInput", {
        // live_input - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('live_input');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "maxDurationSeconds", {
        // max_duration_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_duration_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "maxSizeBytes", {
        // max_size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "playback", {
        get: function () {
            return this._playback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "preview", {
        // preview - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "publicDetails", {
        get: function () {
            return this._publicDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "readyToStream", {
        // ready_to_stream - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ready_to_stream');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "readyToStreamAt", {
        // ready_to_stream_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ready_to_stream_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "requireSignedUrls", {
        // require_signed_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "scheduledDeletion", {
        // scheduled_deletion - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scheduled_deletion');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "thumbnail", {
        // thumbnail - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbnail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "thumbnailTimestampPct", {
        // thumbnail_timestamp_pct - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('thumbnail_timestamp_pct');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "uploadExpiry", {
        // upload_expiry - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_expiry');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "uploaded", {
        // uploaded - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStream.prototype, "watermark", {
        get: function () {
            return this._watermark;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareStream.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            identifier: cdktf.stringToTerraform(this._identifier),
        };
    };
    DataCloudflareStream.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareStream.tfResourceType = "cloudflare_stream";
    return DataCloudflareStream;
}(cdktf.TerraformDataSource));
exports.DataCloudflareStream = DataCloudflareStream;
