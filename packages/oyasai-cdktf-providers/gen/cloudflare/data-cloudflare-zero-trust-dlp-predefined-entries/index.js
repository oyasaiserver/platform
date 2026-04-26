"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries
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
exports.DataCloudflareZeroTrustDlpPredefinedEntries = exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultList = exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference = exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference = exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference = exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToHclTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToHclTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToHclTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToHclTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToHclTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToHclTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultToTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultToTerraform;
exports.dataCloudflareZeroTrustDlpPredefinedEntriesResultToHclTerraform = dataCloudflareZeroTrustDlpPredefinedEntriesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference = DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference;
function dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference = DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference;
function dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference = DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference;
function dataCloudflareZeroTrustDlpPredefinedEntriesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpPredefinedEntriesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // confidence - computed: true, optional: false, required: false
        _this._confidence = new DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference(_this, "pattern");
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference(_this, "variant");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "profileId", {
        // profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.prototype, "wordList", {
        // word_list - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('word_list');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference = DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference;
var DataCloudflareZeroTrustDlpPredefinedEntriesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpPredefinedEntriesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpPredefinedEntriesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpPredefinedEntriesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpPredefinedEntriesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpPredefinedEntriesResultList = DataCloudflareZeroTrustDlpPredefinedEntriesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries cloudflare_zero_trust_dlp_predefined_entries}
*/
var DataCloudflareZeroTrustDlpPredefinedEntries = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpPredefinedEntries, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries cloudflare_zero_trust_dlp_predefined_entries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpPredefinedEntriesConfig = {}
    */
    function DataCloudflareZeroTrustDlpPredefinedEntries(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_predefined_entries',
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
        _this._result = new DataCloudflareZeroTrustDlpPredefinedEntriesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedEntries to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpPredefinedEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedEntries to import is found
    */
    DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_predefined_entries", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntries.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpPredefinedEntries.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntries.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntries.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpPredefinedEntries.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntries.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpPredefinedEntries.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDlpPredefinedEntries.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDlpPredefinedEntries.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareZeroTrustDlpPredefinedEntries.tfResourceType = "cloudflare_zero_trust_dlp_predefined_entries";
    return DataCloudflareZeroTrustDlpPredefinedEntries;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpPredefinedEntries = DataCloudflareZeroTrustDlpPredefinedEntries;
