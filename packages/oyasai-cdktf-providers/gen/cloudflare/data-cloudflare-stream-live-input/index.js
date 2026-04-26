"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input
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
exports.DataCloudflareStreamLiveInput = exports.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference = exports.DataCloudflareStreamLiveInputWebRtcOutputReference = exports.DataCloudflareStreamLiveInputSrtPlaybackOutputReference = exports.DataCloudflareStreamLiveInputSrtOutputReference = exports.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference = exports.DataCloudflareStreamLiveInputRtmpsOutputReference = exports.DataCloudflareStreamLiveInputRecordingOutputReference = void 0;
exports.dataCloudflareStreamLiveInputRecordingToTerraform = dataCloudflareStreamLiveInputRecordingToTerraform;
exports.dataCloudflareStreamLiveInputRecordingToHclTerraform = dataCloudflareStreamLiveInputRecordingToHclTerraform;
exports.dataCloudflareStreamLiveInputRtmpsToTerraform = dataCloudflareStreamLiveInputRtmpsToTerraform;
exports.dataCloudflareStreamLiveInputRtmpsToHclTerraform = dataCloudflareStreamLiveInputRtmpsToHclTerraform;
exports.dataCloudflareStreamLiveInputRtmpsPlaybackToTerraform = dataCloudflareStreamLiveInputRtmpsPlaybackToTerraform;
exports.dataCloudflareStreamLiveInputRtmpsPlaybackToHclTerraform = dataCloudflareStreamLiveInputRtmpsPlaybackToHclTerraform;
exports.dataCloudflareStreamLiveInputSrtToTerraform = dataCloudflareStreamLiveInputSrtToTerraform;
exports.dataCloudflareStreamLiveInputSrtToHclTerraform = dataCloudflareStreamLiveInputSrtToHclTerraform;
exports.dataCloudflareStreamLiveInputSrtPlaybackToTerraform = dataCloudflareStreamLiveInputSrtPlaybackToTerraform;
exports.dataCloudflareStreamLiveInputSrtPlaybackToHclTerraform = dataCloudflareStreamLiveInputSrtPlaybackToHclTerraform;
exports.dataCloudflareStreamLiveInputWebRtcToTerraform = dataCloudflareStreamLiveInputWebRtcToTerraform;
exports.dataCloudflareStreamLiveInputWebRtcToHclTerraform = dataCloudflareStreamLiveInputWebRtcToHclTerraform;
exports.dataCloudflareStreamLiveInputWebRtcPlaybackToTerraform = dataCloudflareStreamLiveInputWebRtcPlaybackToTerraform;
exports.dataCloudflareStreamLiveInputWebRtcPlaybackToHclTerraform = dataCloudflareStreamLiveInputWebRtcPlaybackToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareStreamLiveInputRecordingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputRecordingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputRecordingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputRecordingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputRecordingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputRecordingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputRecordingOutputReference.prototype, "allowedOrigins", {
        // allowed_origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputRecordingOutputReference.prototype, "hideLiveViewerCount", {
        // hide_live_viewer_count - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('hide_live_viewer_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputRecordingOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputRecordingOutputReference.prototype, "requireSignedUrls", {
        // require_signed_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_signed_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputRecordingOutputReference.prototype, "timeoutSeconds", {
        // timeout_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout_seconds');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputRecordingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputRecordingOutputReference = DataCloudflareStreamLiveInputRecordingOutputReference;
function dataCloudflareStreamLiveInputRtmpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputRtmpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputRtmpsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputRtmpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputRtmpsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputRtmpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputRtmpsOutputReference.prototype, "streamKey", {
        // stream_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputRtmpsOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputRtmpsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputRtmpsOutputReference = DataCloudflareStreamLiveInputRtmpsOutputReference;
function dataCloudflareStreamLiveInputRtmpsPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputRtmpsPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.prototype, "streamKey", {
        // stream_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference = DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference;
function dataCloudflareStreamLiveInputSrtToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputSrtToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputSrtOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputSrtOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputSrtOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputSrtOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputSrtOutputReference.prototype, "passphrase", {
        // passphrase - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('passphrase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputSrtOutputReference.prototype, "streamId", {
        // stream_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputSrtOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputSrtOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputSrtOutputReference = DataCloudflareStreamLiveInputSrtOutputReference;
function dataCloudflareStreamLiveInputSrtPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputSrtPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputSrtPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputSrtPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputSrtPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputSrtPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputSrtPlaybackOutputReference.prototype, "passphrase", {
        // passphrase - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('passphrase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputSrtPlaybackOutputReference.prototype, "streamId", {
        // stream_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInputSrtPlaybackOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputSrtPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputSrtPlaybackOutputReference = DataCloudflareStreamLiveInputSrtPlaybackOutputReference;
function dataCloudflareStreamLiveInputWebRtcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputWebRtcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputWebRtcOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputWebRtcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputWebRtcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputWebRtcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputWebRtcOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputWebRtcOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputWebRtcOutputReference = DataCloudflareStreamLiveInputWebRtcOutputReference;
function dataCloudflareStreamLiveInputWebRtcPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamLiveInputWebRtcPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference = DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input cloudflare_stream_live_input}
*/
var DataCloudflareStreamLiveInput = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamLiveInput, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input cloudflare_stream_live_input} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamLiveInputConfig
    */
    function DataCloudflareStreamLiveInput(scope, id, config) {
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
        // recording - computed: true, optional: false, required: false
        _this._recording = new DataCloudflareStreamLiveInputRecordingOutputReference(_this, "recording");
        // rtmps - computed: true, optional: false, required: false
        _this._rtmps = new DataCloudflareStreamLiveInputRtmpsOutputReference(_this, "rtmps");
        // rtmps_playback - computed: true, optional: false, required: false
        _this._rtmpsPlayback = new DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference(_this, "rtmps_playback");
        // srt - computed: true, optional: false, required: false
        _this._srt = new DataCloudflareStreamLiveInputSrtOutputReference(_this, "srt");
        // srt_playback - computed: true, optional: false, required: false
        _this._srtPlayback = new DataCloudflareStreamLiveInputSrtPlaybackOutputReference(_this, "srt_playback");
        // web_rtc - computed: true, optional: false, required: false
        _this._webRtc = new DataCloudflareStreamLiveInputWebRtcOutputReference(_this, "web_rtc");
        // web_rtc_playback - computed: true, optional: false, required: false
        _this._webRtcPlayback = new DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference(_this, "web_rtc_playback");
        _this._accountId = config.accountId;
        _this._liveInputIdentifier = config.liveInputIdentifier;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamLiveInput to import
    * @param importFromId The id of the existing DataCloudflareStreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamLiveInput to import is found
    */
    DataCloudflareStreamLiveInput.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_live_input", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreamLiveInput.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "deleteRecordingAfterDays", {
        // delete_recording_after_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('delete_recording_after_days');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "liveInputIdentifier", {
        get: function () {
            return this.getStringAttribute('live_input_identifier');
        },
        set: function (value) {
            this._liveInputIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "liveInputIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._liveInputIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "recording", {
        get: function () {
            return this._recording;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "rtmps", {
        get: function () {
            return this._rtmps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "rtmpsPlayback", {
        get: function () {
            return this._rtmpsPlayback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "srt", {
        get: function () {
            return this._srt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "srtPlayback", {
        get: function () {
            return this._srtPlayback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "webRtc", {
        get: function () {
            return this._webRtc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamLiveInput.prototype, "webRtcPlayback", {
        get: function () {
            return this._webRtcPlayback;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareStreamLiveInput.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            live_input_identifier: cdktf.stringToTerraform(this._liveInputIdentifier),
        };
    };
    DataCloudflareStreamLiveInput.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            live_input_identifier: {
                value: cdktf.stringToHclTerraform(this._liveInputIdentifier),
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
    DataCloudflareStreamLiveInput.tfResourceType = "cloudflare_stream_live_input";
    return DataCloudflareStreamLiveInput;
}(cdktf.TerraformDataSource));
exports.DataCloudflareStreamLiveInput = DataCloudflareStreamLiveInput;
