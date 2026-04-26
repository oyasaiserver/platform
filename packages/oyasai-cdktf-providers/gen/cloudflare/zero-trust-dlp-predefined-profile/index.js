"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile
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
exports.ZeroTrustDlpPredefinedProfile = exports.ZeroTrustDlpPredefinedProfileEntriesList = exports.ZeroTrustDlpPredefinedProfileEntriesOutputReference = void 0;
exports.zeroTrustDlpPredefinedProfileEntriesToTerraform = zeroTrustDlpPredefinedProfileEntriesToTerraform;
exports.zeroTrustDlpPredefinedProfileEntriesToHclTerraform = zeroTrustDlpPredefinedProfileEntriesToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDlpPredefinedProfileEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
    };
}
function zeroTrustDlpPredefinedProfileEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var ZeroTrustDlpPredefinedProfileEntriesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedProfileEntriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpPredefinedProfileEntriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpPredefinedProfileEntriesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfileEntriesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfileEntriesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfileEntriesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfileEntriesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpPredefinedProfileEntriesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpPredefinedProfileEntriesOutputReference = ZeroTrustDlpPredefinedProfileEntriesOutputReference;
var ZeroTrustDlpPredefinedProfileEntriesList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedProfileEntriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpPredefinedProfileEntriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpPredefinedProfileEntriesList.prototype.get = function (index) {
        return new ZeroTrustDlpPredefinedProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpPredefinedProfileEntriesList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpPredefinedProfileEntriesList = ZeroTrustDlpPredefinedProfileEntriesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}
*/
var ZeroTrustDlpPredefinedProfile = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpPredefinedProfileConfig
    */
    function ZeroTrustDlpPredefinedProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_predefined_profile',
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
        // entries - computed: true, optional: true, required: false
        _this._entries = new ZeroTrustDlpPredefinedProfileEntriesList(_this, "entries", false);
        _this._accountId = config.accountId;
        _this._aiContextEnabled = config.aiContextEnabled;
        _this._allowedMatchCount = config.allowedMatchCount;
        _this._confidenceThreshold = config.confidenceThreshold;
        _this._enabledEntries = config.enabledEntries;
        _this._entries.internalValue = config.entries;
        _this._ocrEnabled = config.ocrEnabled;
        _this._profileId = config.profileId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import
    * @param importFromId The id of the existing ZeroTrustDlpPredefinedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found
    */
    ZeroTrustDlpPredefinedProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_predefined_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "aiContextEnabled", {
        get: function () {
            return this.getBooleanAttribute('ai_context_enabled');
        },
        set: function (value) {
            this._aiContextEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.resetAiContextEnabled = function () {
        this._aiContextEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "aiContextEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiContextEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "allowedMatchCount", {
        get: function () {
            return this.getNumberAttribute('allowed_match_count');
        },
        set: function (value) {
            this._allowedMatchCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.resetAllowedMatchCount = function () {
        this._allowedMatchCount = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "allowedMatchCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedMatchCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "confidenceThreshold", {
        get: function () {
            return this.getStringAttribute('confidence_threshold');
        },
        set: function (value) {
            this._confidenceThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.resetConfidenceThreshold = function () {
        this._confidenceThreshold = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "confidenceThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._confidenceThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "enabledEntries", {
        get: function () {
            return this.getListAttribute('enabled_entries');
        },
        set: function (value) {
            this._enabledEntries = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.resetEnabledEntries = function () {
        this._enabledEntries = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "enabledEntriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledEntries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "entries", {
        get: function () {
            return this._entries;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.putEntries = function (value) {
        this._entries.internalValue = value;
    };
    ZeroTrustDlpPredefinedProfile.prototype.resetEntries = function () {
        this._entries.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "entriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entries.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "ocrEnabled", {
        get: function () {
            return this.getBooleanAttribute('ocr_enabled');
        },
        set: function (value) {
            this._ocrEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedProfile.prototype.resetOcrEnabled = function () {
        this._ocrEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "ocrEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ocrEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "openAccess", {
        // open_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('open_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "profileId", {
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        set: function (value) {
            this._profileId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedProfile.prototype, "profileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDlpPredefinedProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_context_enabled: cdktf.booleanToTerraform(this._aiContextEnabled),
            allowed_match_count: cdktf.numberToTerraform(this._allowedMatchCount),
            confidence_threshold: cdktf.stringToTerraform(this._confidenceThreshold),
            enabled_entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledEntries),
            entries: cdktf.listMapper(zeroTrustDlpPredefinedProfileEntriesToTerraform, false)(this._entries.internalValue),
            ocr_enabled: cdktf.booleanToTerraform(this._ocrEnabled),
            profile_id: cdktf.stringToTerraform(this._profileId),
        };
    };
    ZeroTrustDlpPredefinedProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ai_context_enabled: {
                value: cdktf.booleanToHclTerraform(this._aiContextEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_match_count: {
                value: cdktf.numberToHclTerraform(this._allowedMatchCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            confidence_threshold: {
                value: cdktf.stringToHclTerraform(this._confidenceThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled_entries: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledEntries),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            entries: {
                value: cdktf.listMapperHcl(zeroTrustDlpPredefinedProfileEntriesToHclTerraform, false)(this._entries.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDlpPredefinedProfileEntriesList",
            },
            ocr_enabled: {
                value: cdktf.booleanToHclTerraform(this._ocrEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
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
    ZeroTrustDlpPredefinedProfile.tfResourceType = "cloudflare_zero_trust_dlp_predefined_profile";
    return ZeroTrustDlpPredefinedProfile;
}(cdktf.TerraformResource));
exports.ZeroTrustDlpPredefinedProfile = ZeroTrustDlpPredefinedProfile;
