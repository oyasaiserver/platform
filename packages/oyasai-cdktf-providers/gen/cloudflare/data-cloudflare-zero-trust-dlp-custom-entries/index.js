"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries
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
exports.DataCloudflareZeroTrustDlpCustomEntries = exports.DataCloudflareZeroTrustDlpCustomEntriesResultList = exports.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference = exports.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference = exports.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference = exports.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToHclTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultPatternToTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultPatternToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultPatternToHclTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultPatternToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultVariantToTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultVariantToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultVariantToHclTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultVariantToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultToTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultToTerraform;
exports.dataCloudflareZeroTrustDlpCustomEntriesResultToHclTerraform = dataCloudflareZeroTrustDlpCustomEntriesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference = DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference;
function dataCloudflareZeroTrustDlpCustomEntriesResultPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntriesResultPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference = DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference;
function dataCloudflareZeroTrustDlpCustomEntriesResultVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntriesResultVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference = DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference;
function dataCloudflareZeroTrustDlpCustomEntriesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomEntriesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // confidence - computed: true, optional: false, required: false
        _this._confidence = new DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference(_this, "pattern");
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference(_this, "variant");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "profileId", {
        // profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference.prototype, "wordList", {
        // word_list - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('word_list');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference = DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference;
var DataCloudflareZeroTrustDlpCustomEntriesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntriesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomEntriesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpCustomEntriesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpCustomEntriesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpCustomEntriesResultList = DataCloudflareZeroTrustDlpCustomEntriesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries cloudflare_zero_trust_dlp_custom_entries}
*/
var DataCloudflareZeroTrustDlpCustomEntries = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomEntries, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries cloudflare_zero_trust_dlp_custom_entries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpCustomEntriesConfig = {}
    */
    function DataCloudflareZeroTrustDlpCustomEntries(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_custom_entries',
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
        _this._result = new DataCloudflareZeroTrustDlpCustomEntriesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomEntries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomEntries to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpCustomEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomEntries to import is found
    */
    DataCloudflareZeroTrustDlpCustomEntries.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_custom_entries", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntries.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpCustomEntries.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntries.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntries.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpCustomEntries.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntries.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomEntries.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDlpCustomEntries.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDlpCustomEntries.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDlpCustomEntries.tfResourceType = "cloudflare_zero_trust_dlp_custom_entries";
    return DataCloudflareZeroTrustDlpCustomEntries;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpCustomEntries = DataCloudflareZeroTrustDlpCustomEntries;
