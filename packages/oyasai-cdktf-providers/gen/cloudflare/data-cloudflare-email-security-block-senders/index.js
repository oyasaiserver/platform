"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders
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
exports.DataCloudflareEmailSecurityBlockSenders = exports.DataCloudflareEmailSecurityBlockSendersResultList = exports.DataCloudflareEmailSecurityBlockSendersResultOutputReference = void 0;
exports.dataCloudflareEmailSecurityBlockSendersResultToTerraform = dataCloudflareEmailSecurityBlockSendersResultToTerraform;
exports.dataCloudflareEmailSecurityBlockSendersResultToHclTerraform = dataCloudflareEmailSecurityBlockSendersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailSecurityBlockSendersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailSecurityBlockSendersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailSecurityBlockSendersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityBlockSendersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailSecurityBlockSendersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "comments", {
        // comments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "isRegex", {
        // is_regex - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "pattern", {
        // pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSendersResultOutputReference.prototype, "patternType", {
        // pattern_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailSecurityBlockSendersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailSecurityBlockSendersResultOutputReference = DataCloudflareEmailSecurityBlockSendersResultOutputReference;
var DataCloudflareEmailSecurityBlockSendersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityBlockSendersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailSecurityBlockSendersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailSecurityBlockSendersResultList.prototype.get = function (index) {
        return new DataCloudflareEmailSecurityBlockSendersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailSecurityBlockSendersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailSecurityBlockSendersResultList = DataCloudflareEmailSecurityBlockSendersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders cloudflare_email_security_block_senders}
*/
var DataCloudflareEmailSecurityBlockSenders = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityBlockSenders, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders cloudflare_email_security_block_senders} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityBlockSendersConfig = {}
    */
    function DataCloudflareEmailSecurityBlockSenders(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_block_senders',
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
        _this._result = new DataCloudflareEmailSecurityBlockSendersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        _this._pattern = config.pattern;
        _this._patternType = config.patternType;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSenders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSenders to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityBlockSenders that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSenders to import is found
    */
    DataCloudflareEmailSecurityBlockSenders.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_block_senders", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetPattern = function () {
        this._pattern = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "patternType", {
        get: function () {
            return this.getStringAttribute('pattern_type');
        },
        set: function (value) {
            this._patternType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetPatternType = function () {
        this._patternType = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "patternTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenders.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenders.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailSecurityBlockSenders.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
            pattern: cdktf.stringToTerraform(this._pattern),
            pattern_type: cdktf.stringToTerraform(this._patternType),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareEmailSecurityBlockSenders.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
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
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pattern: {
                value: cdktf.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pattern_type: {
                value: cdktf.stringToHclTerraform(this._patternType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
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
    DataCloudflareEmailSecurityBlockSenders.tfResourceType = "cloudflare_email_security_block_senders";
    return DataCloudflareEmailSecurityBlockSenders;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailSecurityBlockSenders = DataCloudflareEmailSecurityBlockSenders;
