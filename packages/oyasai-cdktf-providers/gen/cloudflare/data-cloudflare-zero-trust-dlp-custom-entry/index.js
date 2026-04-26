"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry
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
exports.DataCloudflareZeroTrustDlpCustomEntry = exports.DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference = exports.DataCloudflareZeroTrustDlpCustomEntryProfilesList = exports.DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference = exports.DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference = exports.DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpCustomEntryConfidenceToTerraform = dataCloudflareZeroTrustDlpCustomEntryConfidenceToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryConfidenceToHclTerraform = dataCloudflareZeroTrustDlpCustomEntryConfidenceToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryPatternToTerraform = dataCloudflareZeroTrustDlpCustomEntryPatternToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryPatternToHclTerraform = dataCloudflareZeroTrustDlpCustomEntryPatternToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryProfilesToTerraform = dataCloudflareZeroTrustDlpCustomEntryProfilesToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryProfilesToHclTerraform = dataCloudflareZeroTrustDlpCustomEntryProfilesToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryVariantToTerraform = dataCloudflareZeroTrustDlpCustomEntryVariantToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntryVariantToHclTerraform = dataCloudflareZeroTrustDlpCustomEntryVariantToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpCustomEntryConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntryConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference = DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference;
function dataCloudflareZeroTrustDlpCustomEntryPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntryPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference = DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference;
function dataCloudflareZeroTrustDlpCustomEntryProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntryProfilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference = DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference;
var DataCloudflareZeroTrustDlpCustomEntryProfilesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntryProfilesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomEntryProfilesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpCustomEntryProfilesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpCustomEntryProfilesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpCustomEntryProfilesList = DataCloudflareZeroTrustDlpCustomEntryProfilesList;
function dataCloudflareZeroTrustDlpCustomEntryVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntryVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference = DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry}
*/
var DataCloudflareZeroTrustDlpCustomEntry = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpCustomEntryConfig
    */
    function DataCloudflareZeroTrustDlpCustomEntry(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_custom_entry',
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
        _this._confidence = new DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference(_this, "pattern");
        // profiles - computed: true, optional: false, required: false
        _this._profiles = new DataCloudflareZeroTrustDlpCustomEntryProfilesList(_this, "profiles", false);
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference(_this, "variant");
        _this._accountId = config.accountId;
        _this._entryId = config.entryId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomEntry to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpCustomEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomEntry to import is found
    */
    DataCloudflareZeroTrustDlpCustomEntry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_custom_entry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpCustomEntry.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "entryId", {
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        set: function (value) {
            this._entryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "entryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "profileId", {
        // profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "profiles", {
        get: function () {
            return this._profiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntry.prototype, "wordList", {
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
    DataCloudflareZeroTrustDlpCustomEntry.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            entry_id: cdktf.stringToTerraform(this._entryId),
        };
    };
    DataCloudflareZeroTrustDlpCustomEntry.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entry_id: {
                value: cdktf.stringToHclTerraform(this._entryId),
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
    DataCloudflareZeroTrustDlpCustomEntry.tfResourceType = "cloudflare_zero_trust_dlp_custom_entry";
    return DataCloudflareZeroTrustDlpCustomEntry;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpCustomEntry = DataCloudflareZeroTrustDlpCustomEntry;
