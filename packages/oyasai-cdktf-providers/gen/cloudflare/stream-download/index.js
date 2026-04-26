"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download
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
exports.StreamDownload = exports.StreamDownloadDefaultOutputReference = exports.StreamDownloadAudioOutputReference = void 0;
exports.streamDownloadAudioToTerraform = streamDownloadAudioToTerraform;
exports.streamDownloadAudioToHclTerraform = streamDownloadAudioToHclTerraform;
exports.streamDownloadDefaultToTerraform = streamDownloadDefaultToTerraform;
exports.streamDownloadDefaultToHclTerraform = streamDownloadDefaultToHclTerraform;
var cdktf = require("cdktf");
function streamDownloadAudioToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamDownloadAudioToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamDownloadAudioOutputReference = /** @class */ (function (_super) {
    __extends(StreamDownloadAudioOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamDownloadAudioOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamDownloadAudioOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamDownloadAudioOutputReference.prototype, "percentComplete", {
        // percent_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('percent_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownloadAudioOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownloadAudioOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamDownloadAudioOutputReference;
}(cdktf.ComplexObject));
exports.StreamDownloadAudioOutputReference = StreamDownloadAudioOutputReference;
function streamDownloadDefaultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function streamDownloadDefaultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var StreamDownloadDefaultOutputReference = /** @class */ (function (_super) {
    __extends(StreamDownloadDefaultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function StreamDownloadDefaultOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(StreamDownloadDefaultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(StreamDownloadDefaultOutputReference.prototype, "percentComplete", {
        // percent_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('percent_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownloadDefaultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownloadDefaultOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return StreamDownloadDefaultOutputReference;
}(cdktf.ComplexObject));
exports.StreamDownloadDefaultOutputReference = StreamDownloadDefaultOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download cloudflare_stream_download}
*/
var StreamDownload = /** @class */ (function (_super) {
    __extends(StreamDownload, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download cloudflare_stream_download} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamDownloadConfig
    */
    function StreamDownload(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream_download',
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
        // audio - computed: true, optional: false, required: false
        _this._audio = new StreamDownloadAudioOutputReference(_this, "audio");
        // default - computed: true, optional: false, required: false
        _this._default = new StreamDownloadDefaultOutputReference(_this, "default");
        _this._accountId = config.accountId;
        _this._identifier = config.identifier;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamDownload resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamDownload to import
    * @param importFromId The id of the existing StreamDownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamDownload to import is found
    */
    StreamDownload.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_download", importId: importFromId, provider: provider });
    };
    Object.defineProperty(StreamDownload.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamDownload.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(StreamDownload.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownload.prototype, "audio", {
        get: function () {
            return this._audio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownload.prototype, "default", {
        get: function () {
            return this._default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownload.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamDownload.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StreamDownload.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            identifier: cdktf.stringToTerraform(this._identifier),
        };
    };
    StreamDownload.prototype.synthesizeHclAttributes = function () {
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
    StreamDownload.tfResourceType = "cloudflare_stream_download";
    return StreamDownload;
}(cdktf.TerraformResource));
exports.StreamDownload = StreamDownload;
