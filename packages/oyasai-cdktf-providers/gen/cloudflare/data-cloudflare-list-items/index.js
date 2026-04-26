"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items
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
exports.DataCloudflareListItemsA = exports.DataCloudflareListItemsResultList = exports.DataCloudflareListItemsResultOutputReference = exports.DataCloudflareListItemsResultRedirectOutputReference = exports.DataCloudflareListItemsResultHostnameOutputReference = void 0;
exports.dataCloudflareListItemsResultHostnameToTerraform = dataCloudflareListItemsResultHostnameToTerraform;
exports.dataCloudflareListItemsResultHostnameToHclTerraform = dataCloudflareListItemsResultHostnameToHclTerraform;
exports.dataCloudflareListItemsResultRedirectToTerraform = dataCloudflareListItemsResultRedirectToTerraform;
exports.dataCloudflareListItemsResultRedirectToHclTerraform = dataCloudflareListItemsResultRedirectToHclTerraform;
exports.dataCloudflareListItemsResultToTerraform = dataCloudflareListItemsResultToTerraform;
exports.dataCloudflareListItemsResultToHclTerraform = dataCloudflareListItemsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareListItemsResultHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemsResultHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemsResultHostnameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsResultHostnameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareListItemsResultHostnameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemsResultHostnameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemsResultHostnameOutputReference.prototype, "excludeExactHostname", {
        // exclude_exact_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_exact_hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultHostnameOutputReference.prototype, "urlHostname", {
        // url_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url_hostname');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemsResultHostnameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemsResultHostnameOutputReference = DataCloudflareListItemsResultHostnameOutputReference;
function dataCloudflareListItemsResultRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemsResultRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemsResultRedirectOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsResultRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareListItemsResultRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "includeSubdomains", {
        // include_subdomains - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "preservePathSuffix", {
        // preserve_path_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_path_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "preserveQueryString", {
        // preserve_query_string - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_query_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "sourceUrl", {
        // source_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "subpathMatching", {
        // subpath_matching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('subpath_matching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultRedirectOutputReference.prototype, "targetUrl", {
        // target_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemsResultRedirectOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemsResultRedirectOutputReference = DataCloudflareListItemsResultRedirectOutputReference;
function dataCloudflareListItemsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareListItemsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // hostname - computed: true, optional: false, required: false
        _this._hostname = new DataCloudflareListItemsResultHostnameOutputReference(_this, "hostname");
        // redirect - computed: true, optional: false, required: false
        _this._redirect = new DataCloudflareListItemsResultRedirectOutputReference(_this, "redirect");
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "asn", {
        // asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "hostname", {
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsResultOutputReference.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemsResultOutputReference = DataCloudflareListItemsResultOutputReference;
var DataCloudflareListItemsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareListItemsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareListItemsResultList.prototype.get = function (index) {
        return new DataCloudflareListItemsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareListItemsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareListItemsResultList = DataCloudflareListItemsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items cloudflare_list_items}
*/
var DataCloudflareListItemsA = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items cloudflare_list_items} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListItemsAConfig
    */
    function DataCloudflareListItemsA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_list_items',
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
        _this._result = new DataCloudflareListItemsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._listId = config.listId;
        _this._maxItems = config.maxItems;
        _this._perPage = config.perPage;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareListItemsA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareListItemsA to import
    * @param importFromId The id of the existing DataCloudflareListItemsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareListItemsA to import is found
    */
    DataCloudflareListItemsA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list_items", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareListItemsA.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareListItemsA.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareListItemsA.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsA.prototype, "listId", {
        get: function () {
            return this.getStringAttribute('list_id');
        },
        set: function (value) {
            this._listId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsA.prototype, "listIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsA.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareListItemsA.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareListItemsA.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsA.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareListItemsA.prototype.resetPerPage = function () {
        this._perPage = undefined;
    };
    Object.defineProperty(DataCloudflareListItemsA.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsA.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsA.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareListItemsA.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareListItemsA.prototype, "searchInput", {
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
    DataCloudflareListItemsA.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            list_id: cdktf.stringToTerraform(this._listId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            per_page: cdktf.numberToTerraform(this._perPage),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareListItemsA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            list_id: {
                value: cdktf.stringToHclTerraform(this._listId),
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
            per_page: {
                value: cdktf.numberToHclTerraform(this._perPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareListItemsA.tfResourceType = "cloudflare_list_items";
    return DataCloudflareListItemsA;
}(cdktf.TerraformDataSource));
exports.DataCloudflareListItemsA = DataCloudflareListItemsA;
