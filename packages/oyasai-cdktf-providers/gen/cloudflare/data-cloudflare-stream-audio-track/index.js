"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track
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
exports.DataCloudflareStreamAudioTrack = exports.DataCloudflareStreamAudioTrackAudioList = exports.DataCloudflareStreamAudioTrackAudioOutputReference = void 0;
exports.dataCloudflareStreamAudioTrackAudioToTerraform = dataCloudflareStreamAudioTrackAudioToTerraform;
exports.dataCloudflareStreamAudioTrackAudioToHclTerraform = dataCloudflareStreamAudioTrackAudioToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareStreamAudioTrackAudioToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamAudioTrackAudioToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamAudioTrackAudioOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamAudioTrackAudioOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareStreamAudioTrackAudioOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamAudioTrackAudioOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamAudioTrackAudioOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamAudioTrackAudioOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamAudioTrackAudioOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamAudioTrackAudioOutputReference.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamAudioTrackAudioOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamAudioTrackAudioOutputReference = DataCloudflareStreamAudioTrackAudioOutputReference;
var DataCloudflareStreamAudioTrackAudioList = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamAudioTrackAudioList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareStreamAudioTrackAudioList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareStreamAudioTrackAudioList.prototype.get = function (index) {
        return new DataCloudflareStreamAudioTrackAudioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareStreamAudioTrackAudioList;
}(cdktf.ComplexList));
exports.DataCloudflareStreamAudioTrackAudioList = DataCloudflareStreamAudioTrackAudioList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track cloudflare_stream_audio_track}
*/
var DataCloudflareStreamAudioTrack = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamAudioTrack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track cloudflare_stream_audio_track} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamAudioTrackConfig
    */
    function DataCloudflareStreamAudioTrack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream_audio_track',
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
        _this._audio = new DataCloudflareStreamAudioTrackAudioList(_this, "audio", false);
        _this._accountId = config.accountId;
        _this._identifier = config.identifier;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamAudioTrack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamAudioTrack to import
    * @param importFromId The id of the existing DataCloudflareStreamAudioTrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamAudioTrack to import is found
    */
    DataCloudflareStreamAudioTrack.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_audio_track", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareStreamAudioTrack.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreamAudioTrack.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareStreamAudioTrack.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamAudioTrack.prototype, "audio", {
        get: function () {
            return this._audio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamAudioTrack.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamAudioTrack.prototype, "identifierInput", {
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
    DataCloudflareStreamAudioTrack.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            identifier: cdktf.stringToTerraform(this._identifier),
        };
    };
    DataCloudflareStreamAudioTrack.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareStreamAudioTrack.tfResourceType = "cloudflare_stream_audio_track";
    return DataCloudflareStreamAudioTrack;
}(cdktf.TerraformDataSource));
exports.DataCloudflareStreamAudioTrack = DataCloudflareStreamAudioTrack;
