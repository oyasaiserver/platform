"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item
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
exports.DataCloudflareListItem = exports.DataCloudflareListItemRedirectOutputReference = exports.DataCloudflareListItemHostnameOutputReference = void 0;
exports.dataCloudflareListItemHostnameToTerraform = dataCloudflareListItemHostnameToTerraform;
exports.dataCloudflareListItemHostnameToHclTerraform = dataCloudflareListItemHostnameToHclTerraform;
exports.dataCloudflareListItemRedirectToTerraform = dataCloudflareListItemRedirectToTerraform;
exports.dataCloudflareListItemRedirectToHclTerraform = dataCloudflareListItemRedirectToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareListItemHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemHostnameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemHostnameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareListItemHostnameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemHostnameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemHostnameOutputReference.prototype, "excludeExactHostname", {
        // exclude_exact_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_exact_hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemHostnameOutputReference.prototype, "urlHostname", {
        // url_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url_hostname');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemHostnameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemHostnameOutputReference = DataCloudflareListItemHostnameOutputReference;
function dataCloudflareListItemRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareListItemRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareListItemRedirectOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareListItemRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareListItemRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "includeSubdomains", {
        // include_subdomains - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "preservePathSuffix", {
        // preserve_path_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_path_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "preserveQueryString", {
        // preserve_query_string - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_query_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "sourceUrl", {
        // source_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "subpathMatching", {
        // subpath_matching - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('subpath_matching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItemRedirectOutputReference.prototype, "targetUrl", {
        // target_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareListItemRedirectOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareListItemRedirectOutputReference = DataCloudflareListItemRedirectOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item cloudflare_list_item}
*/
var DataCloudflareListItem = /** @class */ (function (_super) {
    __extends(DataCloudflareListItem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item cloudflare_list_item} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListItemConfig
    */
    function DataCloudflareListItem(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_list_item',
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
        // hostname - computed: true, optional: false, required: false
        _this._hostname = new DataCloudflareListItemHostnameOutputReference(_this, "hostname");
        // redirect - computed: true, optional: false, required: false
        _this._redirect = new DataCloudflareListItemRedirectOutputReference(_this, "redirect");
        _this._accountId = config.accountId;
        _this._itemId = config.itemId;
        _this._listId = config.listId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareListItem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareListItem to import
    * @param importFromId The id of the existing DataCloudflareListItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareListItem to import is found
    */
    DataCloudflareListItem.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list_item", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareListItem.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareListItem.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareListItem.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "asn", {
        // asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "hostname", {
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "itemId", {
        get: function () {
            return this.getStringAttribute('item_id');
        },
        set: function (value) {
            this._itemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "itemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._itemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "listId", {
        get: function () {
            return this.getStringAttribute('list_id');
        },
        set: function (value) {
            this._listId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "listIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareListItem.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareListItem.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            item_id: cdktf.stringToTerraform(this._itemId),
            list_id: cdktf.stringToTerraform(this._listId),
        };
    };
    DataCloudflareListItem.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            item_id: {
                value: cdktf.stringToHclTerraform(this._itemId),
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
    DataCloudflareListItem.tfResourceType = "cloudflare_list_item";
    return DataCloudflareListItem;
}(cdktf.TerraformDataSource));
exports.DataCloudflareListItem = DataCloudflareListItem;
