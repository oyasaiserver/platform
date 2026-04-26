"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry
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
exports.DataCloudflareZeroTrustDlpIntegrationEntry = exports.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference = exports.DataCloudflareZeroTrustDlpIntegrationEntryProfilesList = exports.DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference = exports.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference = exports.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToTerraform = dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToHclTerraform = dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToHclTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryPatternToTerraform = dataCloudflareZeroTrustDlpIntegrationEntryPatternToTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryPatternToHclTerraform = dataCloudflareZeroTrustDlpIntegrationEntryPatternToHclTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryProfilesToTerraform = dataCloudflareZeroTrustDlpIntegrationEntryProfilesToTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryProfilesToHclTerraform = dataCloudflareZeroTrustDlpIntegrationEntryProfilesToHclTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryVariantToTerraform = dataCloudflareZeroTrustDlpIntegrationEntryVariantToTerraform;
exports.dataCloudflareZeroTrustDlpIntegrationEntryVariantToHclTerraform = dataCloudflareZeroTrustDlpIntegrationEntryVariantToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference = DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference;
function dataCloudflareZeroTrustDlpIntegrationEntryPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpIntegrationEntryPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference = DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference;
function dataCloudflareZeroTrustDlpIntegrationEntryProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpIntegrationEntryProfilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference = DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference;
var DataCloudflareZeroTrustDlpIntegrationEntryProfilesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpIntegrationEntryProfilesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpIntegrationEntryProfilesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpIntegrationEntryProfilesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpIntegrationEntryProfilesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpIntegrationEntryProfilesList = DataCloudflareZeroTrustDlpIntegrationEntryProfilesList;
function dataCloudflareZeroTrustDlpIntegrationEntryVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpIntegrationEntryVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference = DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}
*/
var DataCloudflareZeroTrustDlpIntegrationEntry = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpIntegrationEntry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpIntegrationEntryConfig
    */
    function DataCloudflareZeroTrustDlpIntegrationEntry(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_integration_entry',
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
        _this._confidence = new DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference(_this, "pattern");
        // profiles - computed: true, optional: false, required: false
        _this._profiles = new DataCloudflareZeroTrustDlpIntegrationEntryProfilesList(_this, "profiles", false);
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference(_this, "variant");
        _this._accountId = config.accountId;
        _this._entryId = config.entryId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpIntegrationEntry to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpIntegrationEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpIntegrationEntry to import is found
    */
    DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_integration_entry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpIntegrationEntry.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "entryId", {
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        set: function (value) {
            this._entryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "entryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "profileId", {
        // profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "profiles", {
        get: function () {
            return this._profiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpIntegrationEntry.prototype, "wordList", {
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
    DataCloudflareZeroTrustDlpIntegrationEntry.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            entry_id: cdktf.stringToTerraform(this._entryId),
        };
    };
    DataCloudflareZeroTrustDlpIntegrationEntry.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDlpIntegrationEntry.tfResourceType = "cloudflare_zero_trust_dlp_integration_entry";
    return DataCloudflareZeroTrustDlpIntegrationEntry;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpIntegrationEntry = DataCloudflareZeroTrustDlpIntegrationEntry;
