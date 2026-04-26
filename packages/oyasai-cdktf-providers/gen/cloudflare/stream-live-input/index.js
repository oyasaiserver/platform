"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input
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
exports.StreamLiveInput = exports.StreamLiveInputWebRtcPlaybackOutputReference = exports.StreamLiveInputWebRtcOutputReference = exports.StreamLiveInputSrtPlaybackOutputReference = exports.StreamLiveInputSrtOutputReference = exports.StreamLiveInputRtmpsPlaybackOutputReference = exports.StreamLiveInputRtmpsOutputReference = exports.StreamLiveInputRecordingOutputReference = void 0;
exports.streamLiveInputRecordingToTerraform = streamLiveInputRecordingToTerraform;
exports.streamLiveInputRecordingToHclTerraform = streamLiveInputRecordingToHclTerraform;
exports.streamLiveInputRtmpsToTerraform = streamLiveInputRtmpsToTerraform;
exports.streamLiveInputRtmpsToHclTerraform = streamLiveInputRtmpsToHclTerraform;
exports.streamLiveInputRtmpsPlaybackToTerraform = streamLiveInputRtmpsPlaybackToTerraform;
exports.streamLiveInputRtmpsPlaybackToHclTerraform = streamLiveInputRtmpsPlaybackToHclTerraform;
exports.streamLiveInputSrtToTerraform = streamLiveInputSrtToTerraform;
exports.streamLiveInputSrtToHclTerraform = streamLiveInputSrtToHclTerraform;
exports.streamLiveInputSrtPlaybackToTerraform = streamLiveInputSrtPlaybackToTerraform;
exports.streamLiveInputSrtPlaybackToHclTerraform = streamLiveInputSrtPlaybackToHclTerraform;
exports.streamLiveInputWebRtcToTerraform = streamLiveInputWebRtcToTerraform;
exports.streamLiveInputWebRtcToHclTerraform = streamLiveInputWebRtcToHclTerraform;
exports.streamLiveInputWebRtcPlaybackToTerraform = streamLiveInputWebRtcPlaybackToTerraform;
exports.streamLiveInputWebRtcPlaybackToHclTerraform = streamLiveInputWebRtcPlaybackToHclTerraform;
var cdktf = require("cdktf");
function streamLiveInputRecordingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedOrigins),
        hide_live_viewer_count: cdktf.booleanToTerraform(struct.hideLiveViewerCount),
        mode: cdktf.stringToTerraform(struct.mode),
        require_signed_urls: cdktf.booleanToTerraform(struct.requireSignedUrls),
        timeout_seconds: cdktf.numberToTerraform(struct.timeoutSeconds),
    };
}
function streamLiveInputRecordingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedOrigins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        hide_live_viewer_count: {
            value: cdktf.booleanToHclTerraform(struct.hideLiveViewerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        require_signed_urls: {
            value: cdktf.booleanToHclTerraform(struct.requireSignedUrls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        timeout_seconds: {
            value: cdktf.numberToHclTerraform(struct.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var StreamLiveInputRecordingOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputRecordingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputRecordingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedOrigins !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedOrigins = this._allowedOrigins;
            }
            if (this._hideLiveViewerCount !== undefined) {
                hasAnyValues = true;
                internalValueResult.hideLiveViewerCount = this._hideLiveViewerCount;
            }
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._requireSignedUrls !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireSignedUrls = this._requireSignedUrls;
            }
            if (this._timeoutSeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeoutSeconds = this._timeoutSeconds;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowedOrigins = undefined;
                this._hideLiveViewerCount = undefined;
                this._mode = undefined;
                this._requireSignedUrls = undefined;
                this._timeoutSeconds = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowedOrigins = value.allowedOrigins;
                this._hideLiveViewerCount = value.hideLiveViewerCount;
                this._mode = value.mode;
                this._requireSignedUrls = value.requireSignedUrls;
                this._timeoutSeconds = value.timeoutSeconds;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "allowedOrigins", {
        get: function () {
            return this.getListAttribute('allowed_origins');
        },
        set: function (value) {
            this._allowedOrigins = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInputRecordingOutputReference.prototype.resetAllowedOrigins = function () {
        this._allowedOrigins = undefined;
    };
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "allowedOriginsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedOrigins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "hideLiveViewerCount", {
        get: function () {
            return this.getBooleanAttribute('hide_live_viewer_count');
        },
        set: function (value) {
            this._hideLiveViewerCount = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInputRecordingOutputReference.prototype.resetHideLiveViewerCount = function () {
        this._hideLiveViewerCount = undefined;
    };
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "hideLiveViewerCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hideLiveViewerCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInputRecordingOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "requireSignedUrls", {
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        set: function (value) {
            this._requireSignedUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInputRecordingOutputReference.prototype.resetRequireSignedUrls = function () {
        this._requireSignedUrls = undefined;
    };
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "requireSignedUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireSignedUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "timeoutSeconds", {
        get: function () {
            return this.getNumberAttribute('timeout_seconds');
        },
        set: function (value) {
            this._timeoutSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInputRecordingOutputReference.prototype.resetTimeoutSeconds = function () {
        this._timeoutSeconds = undefined;
    };
    Object.defineProperty(StreamLiveInputRecordingOutputReference.prototype, "timeoutSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeoutSeconds;
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputRecordingOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputRecordingOutputReference = StreamLiveInputRecordingOutputReference;
function streamLiveInputRtmpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamLiveInputRtmpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamLiveInputRtmpsOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputRtmpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputRtmpsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputRtmpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamLiveInputRtmpsOutputReference.prototype, "streamKey", {
        // stream_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRtmpsOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputRtmpsOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputRtmpsOutputReference = StreamLiveInputRtmpsOutputReference;
function streamLiveInputRtmpsPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamLiveInputRtmpsPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamLiveInputRtmpsPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputRtmpsPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputRtmpsPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputRtmpsPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamLiveInputRtmpsPlaybackOutputReference.prototype, "streamKey", {
        // stream_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputRtmpsPlaybackOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputRtmpsPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputRtmpsPlaybackOutputReference = StreamLiveInputRtmpsPlaybackOutputReference;
function streamLiveInputSrtToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamLiveInputSrtToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamLiveInputSrtOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputSrtOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputSrtOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputSrtOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamLiveInputSrtOutputReference.prototype, "passphrase", {
        // passphrase - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('passphrase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputSrtOutputReference.prototype, "streamId", {
        // stream_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputSrtOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputSrtOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputSrtOutputReference = StreamLiveInputSrtOutputReference;
function streamLiveInputSrtPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamLiveInputSrtPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamLiveInputSrtPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputSrtPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputSrtPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputSrtPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamLiveInputSrtPlaybackOutputReference.prototype, "passphrase", {
        // passphrase - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('passphrase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputSrtPlaybackOutputReference.prototype, "streamId", {
        // stream_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInputSrtPlaybackOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputSrtPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputSrtPlaybackOutputReference = StreamLiveInputSrtPlaybackOutputReference;
function streamLiveInputWebRtcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamLiveInputWebRtcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamLiveInputWebRtcOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputWebRtcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputWebRtcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputWebRtcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamLiveInputWebRtcOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputWebRtcOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputWebRtcOutputReference = StreamLiveInputWebRtcOutputReference;
function streamLiveInputWebRtcPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamLiveInputWebRtcPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamLiveInputWebRtcPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(StreamLiveInputWebRtcPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamLiveInputWebRtcPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamLiveInputWebRtcPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamLiveInputWebRtcPlaybackOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamLiveInputWebRtcPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.StreamLiveInputWebRtcPlaybackOutputReference = StreamLiveInputWebRtcPlaybackOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input cloudflare_stream_live_input}
*/
var StreamLiveInput = /** @class */ (function (_super) {
    __extends(StreamLiveInput, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input cloudflare_stream_live_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamLiveInputConfig = {}
    */
    function StreamLiveInput(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream_live_input',
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
        // recording - computed: true, optional: true, required: false
        _this._recording = new StreamLiveInputRecordingOutputReference(_this, "recording");
        // rtmps - computed: true, optional: false, required: false
        _this._rtmps = new StreamLiveInputRtmpsOutputReference(_this, "rtmps");
        // rtmps_playback - computed: true, optional: false, required: false
        _this._rtmpsPlayback = new StreamLiveInputRtmpsPlaybackOutputReference(_this, "rtmps_playback");
        // srt - computed: true, optional: false, required: false
        _this._srt = new StreamLiveInputSrtOutputReference(_this, "srt");
        // srt_playback - computed: true, optional: false, required: false
        _this._srtPlayback = new StreamLiveInputSrtPlaybackOutputReference(_this, "srt_playback");
        // web_rtc - computed: true, optional: false, required: false
        _this._webRtc = new StreamLiveInputWebRtcOutputReference(_this, "web_rtc");
        // web_rtc_playback - computed: true, optional: false, required: false
        _this._webRtcPlayback = new StreamLiveInputWebRtcPlaybackOutputReference(_this, "web_rtc_playback");
        _this._accountId = config.accountId;
        _this._defaultCreator = config.defaultCreator;
        _this._deleteRecordingAfterDays = config.deleteRecordingAfterDays;
        _this._enabled = config.enabled;
        _this._liveInputIdentifier = config.liveInputIdentifier;
        _this._meta = config.meta;
        _this._recording.internalValue = config.recording;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamLiveInput to import
    * @param importFromId The id of the existing StreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamLiveInput to import is found
    */
    StreamLiveInput.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_live_input", importId: importFromId, provider: provider });
    };
    Object.defineProperty(StreamLiveInput.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "defaultCreator", {
        get: function () {
            return this.getStringAttribute('default_creator');
        },
        set: function (value) {
            this._defaultCreator = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.resetDefaultCreator = function () {
        this._defaultCreator = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "defaultCreatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultCreator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "deleteRecordingAfterDays", {
        get: function () {
            return this.getNumberAttribute('delete_recording_after_days');
        },
        set: function (value) {
            this._deleteRecordingAfterDays = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.resetDeleteRecordingAfterDays = function () {
        this._deleteRecordingAfterDays = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "deleteRecordingAfterDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteRecordingAfterDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "liveInputIdentifier", {
        get: function () {
            return this.getStringAttribute('live_input_identifier');
        },
        set: function (value) {
            this._liveInputIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.resetLiveInputIdentifier = function () {
        this._liveInputIdentifier = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "liveInputIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._liveInputIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "meta", {
        get: function () {
            return this.getStringAttribute('meta');
        },
        set: function (value) {
            this._meta = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.resetMeta = function () {
        this._meta = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "metaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "recording", {
        get: function () {
            return this._recording;
        },
        enumerable: false,
        configurable: true
    });
    StreamLiveInput.prototype.putRecording = function (value) {
        this._recording.internalValue = value;
    };
    StreamLiveInput.prototype.resetRecording = function () {
        this._recording.internalValue = undefined;
    };
    Object.defineProperty(StreamLiveInput.prototype, "recordingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recording.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "rtmps", {
        get: function () {
            return this._rtmps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "rtmpsPlayback", {
        get: function () {
            return this._rtmpsPlayback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "srt", {
        get: function () {
            return this._srt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "srtPlayback", {
        get: function () {
            return this._srtPlayback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "webRtc", {
        get: function () {
            return this._webRtc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamLiveInput.prototype, "webRtcPlayback", {
        get: function () {
            return this._webRtcPlayback;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StreamLiveInput.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            default_creator: cdktf.stringToTerraform(this._defaultCreator),
            delete_recording_after_days: cdktf.numberToTerraform(this._deleteRecordingAfterDays),
            enabled: cdktf.booleanToTerraform(this._enabled),
            live_input_identifier: cdktf.stringToTerraform(this._liveInputIdentifier),
            meta: cdktf.stringToTerraform(this._meta),
            recording: streamLiveInputRecordingToTerraform(this._recording.internalValue),
        };
    };
    StreamLiveInput.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_creator: {
                value: cdktf.stringToHclTerraform(this._defaultCreator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delete_recording_after_days: {
                value: cdktf.numberToHclTerraform(this._deleteRecordingAfterDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            live_input_identifier: {
                value: cdktf.stringToHclTerraform(this._liveInputIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            meta: {
                value: cdktf.stringToHclTerraform(this._meta),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recording: {
                value: streamLiveInputRecordingToHclTerraform(this._recording.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "StreamLiveInputRecording",
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
    StreamLiveInput.tfResourceType = "cloudflare_stream_live_input";
    return StreamLiveInput;
}(cdktf.TerraformResource));
exports.StreamLiveInput = StreamLiveInput;
