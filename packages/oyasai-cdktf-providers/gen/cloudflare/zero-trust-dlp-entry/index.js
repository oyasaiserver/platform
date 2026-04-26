"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry
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
exports.ZeroTrustDlpEntry = exports.ZeroTrustDlpEntryVariantOutputReference = exports.ZeroTrustDlpEntryProfilesList = exports.ZeroTrustDlpEntryProfilesOutputReference = exports.ZeroTrustDlpEntryPatternOutputReference = exports.ZeroTrustDlpEntryConfidenceOutputReference = void 0;
exports.zeroTrustDlpEntryConfidenceToTerraform = zeroTrustDlpEntryConfidenceToTerraform;
exports.zeroTrustDlpEntryConfidenceToHclTerraform = zeroTrustDlpEntryConfidenceToHclTerraform;
exports.zeroTrustDlpEntryPatternToTerraform = zeroTrustDlpEntryPatternToTerraform;
exports.zeroTrustDlpEntryPatternToHclTerraform = zeroTrustDlpEntryPatternToHclTerraform;
exports.zeroTrustDlpEntryProfilesToTerraform = zeroTrustDlpEntryProfilesToTerraform;
exports.zeroTrustDlpEntryProfilesToHclTerraform = zeroTrustDlpEntryProfilesToHclTerraform;
exports.zeroTrustDlpEntryVariantToTerraform = zeroTrustDlpEntryVariantToTerraform;
exports.zeroTrustDlpEntryVariantToHclTerraform = zeroTrustDlpEntryVariantToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDlpEntryConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpEntryConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpEntryConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpEntryConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpEntryConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpEntryConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpEntryConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpEntryConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpEntryConfidenceOutputReference = ZeroTrustDlpEntryConfidenceOutputReference;
function zeroTrustDlpEntryPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        regex: cdktf.stringToTerraform(struct.regex),
        validation: cdktf.stringToTerraform(struct.validation),
    };
}
function zeroTrustDlpEntryPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        regex: {
            value: cdktf.stringToHclTerraform(struct.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: cdktf.stringToHclTerraform(struct.validation),
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
var ZeroTrustDlpEntryPatternOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpEntryPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpEntryPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpEntryPatternOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._regex !== undefined) {
                hasAnyValues = true;
                internalValueResult.regex = this._regex;
            }
            if (this._validation !== undefined) {
                hasAnyValues = true;
                internalValueResult.validation = this._validation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._regex = undefined;
                this._validation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._regex = value.regex;
                this._validation = value.validation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryPatternOutputReference.prototype, "regex", {
        get: function () {
            return this.getStringAttribute('regex');
        },
        set: function (value) {
            this._regex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryPatternOutputReference.prototype, "regexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryPatternOutputReference.prototype, "validation", {
        get: function () {
            return this.getStringAttribute('validation');
        },
        set: function (value) {
            this._validation = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpEntryPatternOutputReference.prototype.resetValidation = function () {
        this._validation = undefined;
    };
    Object.defineProperty(ZeroTrustDlpEntryPatternOutputReference.prototype, "validationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validation;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpEntryPatternOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpEntryPatternOutputReference = ZeroTrustDlpEntryPatternOutputReference;
function zeroTrustDlpEntryProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpEntryProfilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpEntryProfilesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpEntryProfilesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpEntryProfilesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpEntryProfilesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpEntryProfilesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryProfilesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpEntryProfilesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpEntryProfilesOutputReference = ZeroTrustDlpEntryProfilesOutputReference;
var ZeroTrustDlpEntryProfilesList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpEntryProfilesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpEntryProfilesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpEntryProfilesList.prototype.get = function (index) {
        return new ZeroTrustDlpEntryProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpEntryProfilesList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpEntryProfilesList = ZeroTrustDlpEntryProfilesList;
function zeroTrustDlpEntryVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpEntryVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpEntryVariantOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpEntryVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpEntryVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpEntryVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpEntryVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntryVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpEntryVariantOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpEntryVariantOutputReference = ZeroTrustDlpEntryVariantOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry cloudflare_zero_trust_dlp_entry}
*/
var ZeroTrustDlpEntry = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpEntry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry cloudflare_zero_trust_dlp_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpEntryConfig
    */
    function ZeroTrustDlpEntry(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_entry',
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
        _this._confidence = new ZeroTrustDlpEntryConfidenceOutputReference(_this, "confidence");
        // pattern - computed: false, optional: false, required: true
        _this._pattern = new ZeroTrustDlpEntryPatternOutputReference(_this, "pattern");
        // profiles - computed: true, optional: false, required: false
        _this._profiles = new ZeroTrustDlpEntryProfilesList(_this, "profiles", false);
        // variant - computed: true, optional: false, required: false
        _this._variant = new ZeroTrustDlpEntryVariantOutputReference(_this, "variant");
        _this._accountId = config.accountId;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._name = config.name;
        _this._pattern.internalValue = config.pattern;
        _this._profileId = config.profileId;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpEntry to import
    * @param importFromId The id of the existing ZeroTrustDlpEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpEntry to import is found
    */
    ZeroTrustDlpEntry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_entry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpEntry.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpEntry.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpEntry.prototype.putPattern = function (value) {
        this._pattern.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "profileId", {
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        set: function (value) {
            this._profileId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpEntry.prototype.resetProfileId = function () {
        this._profileId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "profileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "profiles", {
        get: function () {
            return this._profiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpEntry.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpEntry.prototype, "wordList", {
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
    ZeroTrustDlpEntry.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            name: cdktf.stringToTerraform(this._name),
            pattern: zeroTrustDlpEntryPatternToTerraform(this._pattern.internalValue),
            profile_id: cdktf.stringToTerraform(this._profileId),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    ZeroTrustDlpEntry.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pattern: {
                value: zeroTrustDlpEntryPatternToHclTerraform(this._pattern.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDlpEntryPattern",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
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
    ZeroTrustDlpEntry.tfResourceType = "cloudflare_zero_trust_dlp_entry";
    return ZeroTrustDlpEntry;
}(cdktf.TerraformResource));
exports.ZeroTrustDlpEntry = ZeroTrustDlpEntry;
