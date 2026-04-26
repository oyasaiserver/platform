"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams
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
exports.DataCloudflareStreams = exports.DataCloudflareStreamsResultList = exports.DataCloudflareStreamsResultOutputReference = exports.DataCloudflareStreamsResultWatermarkOutputReference = exports.DataCloudflareStreamsResultStatusOutputReference = exports.DataCloudflareStreamsResultPublicDetailsOutputReference = exports.DataCloudflareStreamsResultPlaybackOutputReference = exports.DataCloudflareStreamsResultInputOutputReference = void 0;
exports.dataCloudflareStreamsResultInputToTerraform = dataCloudflareStreamsResultInputToTerraform;
exports.dataCloudflareStreamsResultInputToHclTerraform = dataCloudflareStreamsResultInputToHclTerraform;
exports.dataCloudflareStreamsResultPlaybackToTerraform = dataCloudflareStreamsResultPlaybackToTerraform;
exports.dataCloudflareStreamsResultPlaybackToHclTerraform = dataCloudflareStreamsResultPlaybackToHclTerraform;
exports.dataCloudflareStreamsResultPublicDetailsToTerraform = dataCloudflareStreamsResultPublicDetailsToTerraform;
exports.dataCloudflareStreamsResultPublicDetailsToHclTerraform = dataCloudflareStreamsResultPublicDetailsToHclTerraform;
exports.dataCloudflareStreamsResultStatusToTerraform = dataCloudflareStreamsResultStatusToTerraform;
exports.dataCloudflareStreamsResultStatusToHclTerraform = dataCloudflareStreamsResultStatusToHclTerraform;
exports.dataCloudflareStreamsResultWatermarkToTerraform = dataCloudflareStreamsResultWatermarkToTerraform;
exports.dataCloudflareStreamsResultWatermarkToHclTerraform = dataCloudflareStreamsResultWatermarkToHclTerraform;
exports.dataCloudflareStreamsResultToTerraform = dataCloudflareStreamsResultToTerraform;
exports.dataCloudflareStreamsResultToHclTerraform = dataCloudflareStreamsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareStreamsResultInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamsResultInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamsResultInputOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultInputOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamsResultInputOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamsResultInputOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamsResultInputOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultInputOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamsResultInputOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamsResultInputOutputReference = DataCloudflareStreamsResultInputOutputReference;
function dataCloudflareStreamsResultPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamsResultPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamsResultPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamsResultPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamsResultPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamsResultPlaybackOutputReference.prototype, "dash", {
        // dash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultPlaybackOutputReference.prototype, "hls", {
        // hls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hls');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamsResultPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamsResultPlaybackOutputReference = DataCloudflareStreamsResultPlaybackOutputReference;
function dataCloudflareStreamsResultPublicDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamsResultPublicDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamsResultPublicDetailsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultPublicDetailsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamsResultPublicDetailsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamsResultPublicDetailsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamsResultPublicDetailsOutputReference.prototype, "channelLink", {
        // channel_link - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('channel_link');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultPublicDetailsOutputReference.prototype, "logo", {
        // logo - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultPublicDetailsOutputReference.prototype, "mediaId", {
        // media_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('media_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultPublicDetailsOutputReference.prototype, "shareLink", {
        // share_link - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_link');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultPublicDetailsOutputReference.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamsResultPublicDetailsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamsResultPublicDetailsOutputReference = DataCloudflareStreamsResultPublicDetailsOutputReference;
function dataCloudflareStreamsResultStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamsResultStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamsResultStatusOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamsResultStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamsResultStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamsResultStatusOutputReference.prototype, "errorReasonCode", {
        // error_reason_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_reason_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultStatusOutputReference.prototype, "errorReasonText", {
        // error_reason_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_reason_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultStatusOutputReference.prototype, "pctComplete", {
        // pct_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pct_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamsResultStatusOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamsResultStatusOutputReference = DataCloudflareStreamsResultStatusOutputReference;
function dataCloudflareStreamsResultWatermarkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamsResultWatermarkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamsResultWatermarkOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultWatermarkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamsResultWatermarkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "downloadedFrom", {
        // downloaded_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('downloaded_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "opacity", {
        // opacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "padding", {
        // padding - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('padding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "position", {
        // position - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('position');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "scale", {
        // scale - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('scale');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultWatermarkOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamsResultWatermarkOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamsResultWatermarkOutputReference = DataCloudflareStreamsResultWatermarkOutputReference;
function dataCloudflareStreamsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareStreamsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // input - computed: true, optional: false, required: false
        _this._input = new DataCloudflareStreamsResultInputOutputReference(_this, "input");
        // playback - computed: true, optional: false, required: false
        _this._playback = new DataCloudflareStreamsResultPlaybackOutputReference(_this, "playback");
        // public_details - computed: true, optional: false, required: false
        _this._publicDetails = new DataCloudflareStreamsResultPublicDetailsOutputReference(_this, "public_details");
        // status - computed: true, optional: false, required: false
        _this._status = new DataCloudflareStreamsResultStatusOutputReference(_this, "status");
        // watermark - computed: true, optional: false, required: false
        _this._watermark = new DataCloudflareStreamsResultWatermarkOutputReference(_this, "watermark");
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "allowedOrigins", {
        // allowed_origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "clippedFrom", {
        // clipped_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clipped_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "creator", {
        // creator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "liveInput", {
        // live_input - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('live_input');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "maxDurationSeconds", {
        // max_duration_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_duration_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "maxSizeBytes", {
        // max_size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "playback", {
        get: function () {
            return this._playback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "preview", {
        // preview - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preview');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "publicDetails", {
        get: function () {
            return this._publicDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "readyToStream", {
        // ready_to_stream - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ready_to_stream');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "readyToStreamAt", {
        // ready_to_stream_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ready_to_stream_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "requireSignedUrls", {
        // require_signed_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "scheduledDeletion", {
        // scheduled_deletion - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scheduled_deletion');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "thumbnail", {
        // thumbnail - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbnail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "thumbnailTimestampPct", {
        // thumbnail_timestamp_pct - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('thumbnail_timestamp_pct');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "uploadExpiry", {
        // upload_expiry - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_expiry');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "uploaded", {
        // uploaded - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamsResultOutputReference.prototype, "watermark", {
        get: function () {
            return this._watermark;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamsResultOutputReference = DataCloudflareStreamsResultOutputReference;
var DataCloudflareStreamsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareStreamsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareStreamsResultList.prototype.get = function (index) {
        return new DataCloudflareStreamsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareStreamsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareStreamsResultList = DataCloudflareStreamsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams cloudflare_streams}
*/
var DataCloudflareStreams = /** @class */ (function (_super) {
    __extends(DataCloudflareStreams, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams cloudflare_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamsConfig = {}
    */
    function DataCloudflareStreams(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_streams',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareStreamsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._after = config.after;
        _this._asc = config.asc;
        _this._before = config.before;
        _this._creator = config.creator;
        _this._end = config.end;
        _this._id = config.id;
        _this._includeCounts = config.includeCounts;
        _this._limit = config.limit;
        _this._liveInputId = config.liveInputId;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        _this._search = config.search;
        _this._start = config.start;
        _this._status = config.status;
        _this._type = config.type;
        _this._videoName = config.videoName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStreams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreams to import
    * @param importFromId The id of the existing DataCloudflareStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreams to import is found
    */
    DataCloudflareStreams.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_streams", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "after", {
        get: function () {
            return this.getStringAttribute('after');
        },
        set: function (value) {
            this._after = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetAfter = function () {
        this._after = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "afterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._after;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "asc", {
        get: function () {
            return this.getBooleanAttribute('asc');
        },
        set: function (value) {
            this._asc = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetAsc = function () {
        this._asc = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "ascInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._asc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "before", {
        get: function () {
            return this.getStringAttribute('before');
        },
        set: function (value) {
            this._before = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetBefore = function () {
        this._before = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "beforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._before;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "creator", {
        get: function () {
            return this.getStringAttribute('creator');
        },
        set: function (value) {
            this._creator = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetCreator = function () {
        this._creator = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "creatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "end", {
        get: function () {
            return this.getStringAttribute('end');
        },
        set: function (value) {
            this._end = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetEnd = function () {
        this._end = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "endInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "includeCounts", {
        get: function () {
            return this.getBooleanAttribute('include_counts');
        },
        set: function (value) {
            this._includeCounts = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetIncludeCounts = function () {
        this._includeCounts = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "includeCountsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeCounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "liveInputId", {
        get: function () {
            return this.getStringAttribute('live_input_id');
        },
        set: function (value) {
            this._liveInputId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetLiveInputId = function () {
        this._liveInputId = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "liveInputIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._liveInputId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "start", {
        get: function () {
            return this.getStringAttribute('start');
        },
        set: function (value) {
            this._start = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetStart = function () {
        this._start = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "startInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreams.prototype, "videoName", {
        get: function () {
            return this.getStringAttribute('video_name');
        },
        set: function (value) {
            this._videoName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreams.prototype.resetVideoName = function () {
        this._videoName = undefined;
    };
    Object.defineProperty(DataCloudflareStreams.prototype, "videoNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._videoName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareStreams.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            after: cdktf.stringToTerraform(this._after),
            asc: cdktf.booleanToTerraform(this._asc),
            before: cdktf.stringToTerraform(this._before),
            creator: cdktf.stringToTerraform(this._creator),
            end: cdktf.stringToTerraform(this._end),
            id: cdktf.stringToTerraform(this._id),
            include_counts: cdktf.booleanToTerraform(this._includeCounts),
            limit: cdktf.numberToTerraform(this._limit),
            live_input_id: cdktf.stringToTerraform(this._liveInputId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            search: cdktf.stringToTerraform(this._search),
            start: cdktf.stringToTerraform(this._start),
            status: cdktf.stringToTerraform(this._status),
            type: cdktf.stringToTerraform(this._type),
            video_name: cdktf.stringToTerraform(this._videoName),
        };
    };
    DataCloudflareStreams.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            after: {
                value: cdktf.stringToHclTerraform(this._after),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asc: {
                value: cdktf.booleanToHclTerraform(this._asc),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            before: {
                value: cdktf.stringToHclTerraform(this._before),
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
            end: {
                value: cdktf.stringToHclTerraform(this._end),
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
            include_counts: {
                value: cdktf.booleanToHclTerraform(this._includeCounts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            limit: {
                value: cdktf.numberToHclTerraform(this._limit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            live_input_id: {
                value: cdktf.stringToHclTerraform(this._liveInputId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start: {
                value: cdktf.stringToHclTerraform(this._start),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            video_name: {
                value: cdktf.stringToHclTerraform(this._videoName),
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
    DataCloudflareStreams.tfResourceType = "cloudflare_streams";
    return DataCloudflareStreams;
}(cdktf.TerraformDataSource));
exports.DataCloudflareStreams = DataCloudflareStreams;
