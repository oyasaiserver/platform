"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry
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
exports.ZeroTrustDlpPredefinedEntry = exports.ZeroTrustDlpPredefinedEntryVariantOutputReference = exports.ZeroTrustDlpPredefinedEntryProfilesList = exports.ZeroTrustDlpPredefinedEntryProfilesOutputReference = exports.ZeroTrustDlpPredefinedEntryPatternOutputReference = exports.ZeroTrustDlpPredefinedEntryConfidenceOutputReference = void 0;
exports.zeroTrustDlpPredefinedEntryConfidenceToTerraform = zeroTrustDlpPredefinedEntryConfidenceToTerraform;
exports.zeroTrustDlpPredefinedEntryConfidenceToHclTerraform = zeroTrustDlpPredefinedEntryConfidenceToHclTerraform;
exports.zeroTrustDlpPredefinedEntryPatternToTerraform = zeroTrustDlpPredefinedEntryPatternToTerraform;
exports.zeroTrustDlpPredefinedEntryPatternToHclTerraform = zeroTrustDlpPredefinedEntryPatternToHclTerraform;
exports.zeroTrustDlpPredefinedEntryProfilesToTerraform = zeroTrustDlpPredefinedEntryProfilesToTerraform;
exports.zeroTrustDlpPredefinedEntryProfilesToHclTerraform = zeroTrustDlpPredefinedEntryProfilesToHclTerraform;
exports.zeroTrustDlpPredefinedEntryVariantToTerraform = zeroTrustDlpPredefinedEntryVariantToTerraform;
exports.zeroTrustDlpPredefinedEntryVariantToHclTerraform = zeroTrustDlpPredefinedEntryVariantToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDlpPredefinedEntryConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpPredefinedEntryConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpPredefinedEntryConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedEntryConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpPredefinedEntryConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpPredefinedEntryConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpPredefinedEntryConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntryConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpPredefinedEntryConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpPredefinedEntryConfidenceOutputReference = ZeroTrustDlpPredefinedEntryConfidenceOutputReference;
function zeroTrustDlpPredefinedEntryPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpPredefinedEntryPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpPredefinedEntryPatternOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedEntryPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpPredefinedEntryPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpPredefinedEntryPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpPredefinedEntryPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntryPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpPredefinedEntryPatternOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpPredefinedEntryPatternOutputReference = ZeroTrustDlpPredefinedEntryPatternOutputReference;
function zeroTrustDlpPredefinedEntryProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpPredefinedEntryProfilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpPredefinedEntryProfilesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedEntryProfilesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpPredefinedEntryProfilesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpPredefinedEntryProfilesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpPredefinedEntryProfilesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntryProfilesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpPredefinedEntryProfilesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpPredefinedEntryProfilesOutputReference = ZeroTrustDlpPredefinedEntryProfilesOutputReference;
var ZeroTrustDlpPredefinedEntryProfilesList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedEntryProfilesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpPredefinedEntryProfilesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpPredefinedEntryProfilesList.prototype.get = function (index) {
        return new ZeroTrustDlpPredefinedEntryProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpPredefinedEntryProfilesList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpPredefinedEntryProfilesList = ZeroTrustDlpPredefinedEntryProfilesList;
function zeroTrustDlpPredefinedEntryVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpPredefinedEntryVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpPredefinedEntryVariantOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedEntryVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpPredefinedEntryVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpPredefinedEntryVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpPredefinedEntryVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntryVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntryVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpPredefinedEntryVariantOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpPredefinedEntryVariantOutputReference = ZeroTrustDlpPredefinedEntryVariantOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}
*/
var ZeroTrustDlpPredefinedEntry = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpPredefinedEntry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpPredefinedEntryConfig
    */
    function ZeroTrustDlpPredefinedEntry(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_predefined_entry',
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
        // confidence - computed: true, optional: false, required: false
        _this._confidence = new ZeroTrustDlpPredefinedEntryConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new ZeroTrustDlpPredefinedEntryPatternOutputReference(_this, "pattern");
        // profiles - computed: true, optional: false, required: false
        _this._profiles = new ZeroTrustDlpPredefinedEntryProfilesList(_this, "profiles", false);
        // variant - computed: true, optional: false, required: false
        _this._variant = new ZeroTrustDlpPredefinedEntryVariantOutputReference(_this, "variant");
        _this._accountId = config.accountId;
        _this._enabled = config.enabled;
        _this._entryId = config.entryId;
        _this._profileId = config.profileId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpPredefinedEntry to import
    * @param importFromId The id of the existing ZeroTrustDlpPredefinedEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpPredefinedEntry to import is found
    */
    ZeroTrustDlpPredefinedEntry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_predefined_entry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedEntry.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "entryId", {
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        set: function (value) {
            this._entryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "entryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "profileId", {
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        set: function (value) {
            this._profileId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpPredefinedEntry.prototype.resetProfileId = function () {
        this._profileId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "profileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "profiles", {
        get: function () {
            return this._profiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpPredefinedEntry.prototype, "wordList", {
        // word_list - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('word_list');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDlpPredefinedEntry.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            enabled: cdktf.booleanToTerraform(this._enabled),
            entry_id: cdktf.stringToTerraform(this._entryId),
            profile_id: cdktf.stringToTerraform(this._profileId),
        };
    };
    ZeroTrustDlpPredefinedEntry.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            entry_id: {
                value: cdktf.stringToHclTerraform(this._entryId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    ZeroTrustDlpPredefinedEntry.tfResourceType = "cloudflare_zero_trust_dlp_predefined_entry";
    return ZeroTrustDlpPredefinedEntry;
}(cdktf.TerraformResource));
exports.ZeroTrustDlpPredefinedEntry = ZeroTrustDlpPredefinedEntry;
