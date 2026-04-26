"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list
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
exports.DataCloudflareList = exports.DataCloudflareListItemsList = exports.DataCloudflareListItemsOutputReference = exports.DataCloudflareListItemsRedirectOutputReference = exports.DataCloudflareListItemsHostnameOutputReference = void 0;
exports.dataCloudflareListItemsHostnameToTerraform = dataCloudflareListItemsHostnameToTerraform;
exports.dataCloudflareListItemsHostnameToHclTerraform = dataCloudflareListItemsHostnameToHclTerraform;
exports.dataCloudflareListItemsRedirectToTerraform = dataCloudflareListItemsRedirectToTerraform;
exports.dataCloudflareListItemsRedirectToHclTerraform = dataCloudflareListItemsRedirectToHclTerraform;
exports.dataCloudflareListItemsToTerraform = dataCloudflareListItemsToTerraform;
exports.dataCloudflareListItemsToHclTerraform = dataCloudflareListItemsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareListItemsHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemsHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemsHostnameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsHostnameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareListItemsHostnameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemsHostnameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemsHostnameOutputReference.prototype, "excludeExactHostname", {
        // exclude_exact_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_exact_hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsHostnameOutputReference.prototype, "urlHostname", {
        // url_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url_hostname');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemsHostnameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemsHostnameOutputReference = DataCloudflareListItemsHostnameOutputReference;
function dataCloudflareListItemsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemsRedirectOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareListItemsRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "includeSubdomains", {
        // include_subdomains - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "preservePathSuffix", {
        // preserve_path_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_path_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "preserveQueryString", {
        // preserve_query_string - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_query_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "sourceUrl", {
        // source_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "subpathMatching", {
        // subpath_matching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('subpath_matching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsRedirectOutputReference.prototype, "targetUrl", {
        // target_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemsRedirectOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemsRedirectOutputReference = DataCloudflareListItemsRedirectOutputReference;
function dataCloudflareListItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareListItemsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // hostname - computed: true, optional: false, required: false
        _this._hostname = new DataCloudflareListItemsHostnameOutputReference(_this, "hostname");
        // redirect - computed: true, optional: false, required: false
        _this._redirect = new DataCloudflareListItemsRedirectOutputReference(_this, "redirect");
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemsOutputReference.prototype, "asn", {
        // asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsOutputReference.prototype, "hostname", {
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemsOutputReference.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemsOutputReference = DataCloudflareListItemsOutputReference;
var DataCloudflareListItemsList = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareListItemsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareListItemsList.prototype.get = function (index) {
        return new DataCloudflareListItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareListItemsList;
}(cdktf.ComplexList));
exports.DataCloudflareListItemsList = DataCloudflareListItemsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list cloudflare_list}
*/
var DataCloudflareList = /** @class */ (function (_super) {
    __extends(DataCloudflareList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list cloudflare_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListConfig
    */
    function DataCloudflareList(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_list',
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
        // items - computed: true, optional: false, required: false
        _this._items = new DataCloudflareListItemsList(_this, "items", true);
        _this._accountId = config.accountId;
        _this._listId = config.listId;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareList to import
    * @param importFromId The id of the existing DataCloudflareList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareList to import is found
    */
    DataCloudflareList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareList.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareList.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareList.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "listId", {
        get: function () {
            return this.getStringAttribute('list_id');
        },
        set: function (value) {
            this._listId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "listIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "numItems", {
        // num_items - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_items');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "numReferencingFilters", {
        // num_referencing_filters - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_referencing_filters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareList.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareList.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareList.prototype, "searchInput", {
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
    DataCloudflareList.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            list_id: cdktf.stringToTerraform(this._listId),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareList.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareList.tfResourceType = "cloudflare_list";
    return DataCloudflareList;
}(cdktf.TerraformDataSource));
exports.DataCloudflareList = DataCloudflareList;
