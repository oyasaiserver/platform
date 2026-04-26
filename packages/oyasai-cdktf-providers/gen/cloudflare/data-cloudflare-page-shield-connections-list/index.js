"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list
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
exports.DataCloudflarePageShieldConnectionsList = exports.DataCloudflarePageShieldConnectionsListResultList = exports.DataCloudflarePageShieldConnectionsListResultOutputReference = void 0;
exports.dataCloudflarePageShieldConnectionsListResultToTerraform = dataCloudflarePageShieldConnectionsListResultToTerraform;
exports.dataCloudflarePageShieldConnectionsListResultToHclTerraform = dataCloudflarePageShieldConnectionsListResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePageShieldConnectionsListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePageShieldConnectionsListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePageShieldConnectionsListResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldConnectionsListResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePageShieldConnectionsListResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "addedAt", {
        // added_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('added_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "domainReportedMalicious", {
        // domain_reported_malicious - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('domain_reported_malicious');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "firstPageUrl", {
        // first_page_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_page_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "firstSeenAt", {
        // first_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "lastSeenAt", {
        // last_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "maliciousDomainCategories", {
        // malicious_domain_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('malicious_domain_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "maliciousUrlCategories", {
        // malicious_url_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('malicious_url_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "pageUrls", {
        // page_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('page_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "urlContainsCdnCgiPath", {
        // url_contains_cdn_cgi_path - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_contains_cdn_cgi_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsListResultOutputReference.prototype, "urlReportedMalicious", {
        // url_reported_malicious - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_reported_malicious');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePageShieldConnectionsListResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePageShieldConnectionsListResultOutputReference = DataCloudflarePageShieldConnectionsListResultOutputReference;
var DataCloudflarePageShieldConnectionsListResultList = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldConnectionsListResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePageShieldConnectionsListResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePageShieldConnectionsListResultList.prototype.get = function (index) {
        return new DataCloudflarePageShieldConnectionsListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePageShieldConnectionsListResultList;
}(cdktf.ComplexList));
exports.DataCloudflarePageShieldConnectionsListResultList = DataCloudflarePageShieldConnectionsListResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list}
*/
var DataCloudflarePageShieldConnectionsList = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldConnectionsList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldConnectionsListConfig = {}
    */
    function DataCloudflarePageShieldConnectionsList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_page_shield_connections_list',
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
        _this._result = new DataCloudflarePageShieldConnectionsListResultList(_this, "result", false);
        _this._direction = config.direction;
        _this._excludeCdnCgi = config.excludeCdnCgi;
        _this._excludeUrls = config.excludeUrls;
        _this._export = config.export;
        _this._hosts = config.hosts;
        _this._maxItems = config.maxItems;
        _this._orderBy = config.orderBy;
        _this._page = config.page;
        _this._pageUrl = config.pageUrl;
        _this._perPage = config.perPage;
        _this._prioritizeMalicious = config.prioritizeMalicious;
        _this._status = config.status;
        _this._urls = config.urls;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldConnectionsList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldConnectionsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldConnectionsList to import is found
    */
    DataCloudflarePageShieldConnectionsList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_connections_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "excludeCdnCgi", {
        get: function () {
            return this.getBooleanAttribute('exclude_cdn_cgi');
        },
        set: function (value) {
            this._excludeCdnCgi = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetExcludeCdnCgi = function () {
        this._excludeCdnCgi = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "excludeCdnCgiInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeCdnCgi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "excludeUrls", {
        get: function () {
            return this.getStringAttribute('exclude_urls');
        },
        set: function (value) {
            this._excludeUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetExcludeUrls = function () {
        this._excludeUrls = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "excludeUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "export", {
        get: function () {
            return this.getStringAttribute('export');
        },
        set: function (value) {
            this._export = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetExport = function () {
        this._export = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "exportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._export;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "hosts", {
        get: function () {
            return this.getStringAttribute('hosts');
        },
        set: function (value) {
            this._hosts = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetHosts = function () {
        this._hosts = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "hostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hosts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "page", {
        get: function () {
            return this.getStringAttribute('page');
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetPage = function () {
        this._page = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "pageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "pageUrl", {
        get: function () {
            return this.getStringAttribute('page_url');
        },
        set: function (value) {
            this._pageUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetPageUrl = function () {
        this._pageUrl = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "pageUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetPerPage = function () {
        this._perPage = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "prioritizeMalicious", {
        get: function () {
            return this.getBooleanAttribute('prioritize_malicious');
        },
        set: function (value) {
            this._prioritizeMalicious = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetPrioritizeMalicious = function () {
        this._prioritizeMalicious = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "prioritizeMaliciousInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prioritizeMalicious;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "urls", {
        get: function () {
            return this.getStringAttribute('urls');
        },
        set: function (value) {
            this._urls = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetUrls = function () {
        this._urls = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "urlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._urls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldConnectionsList.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldConnectionsList.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePageShieldConnectionsList.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            exclude_cdn_cgi: cdktf.booleanToTerraform(this._excludeCdnCgi),
            exclude_urls: cdktf.stringToTerraform(this._excludeUrls),
            export: cdktf.stringToTerraform(this._export),
            hosts: cdktf.stringToTerraform(this._hosts),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order_by: cdktf.stringToTerraform(this._orderBy),
            page: cdktf.stringToTerraform(this._page),
            page_url: cdktf.stringToTerraform(this._pageUrl),
            per_page: cdktf.numberToTerraform(this._perPage),
            prioritize_malicious: cdktf.booleanToTerraform(this._prioritizeMalicious),
            status: cdktf.stringToTerraform(this._status),
            urls: cdktf.stringToTerraform(this._urls),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflarePageShieldConnectionsList.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude_cdn_cgi: {
                value: cdktf.booleanToHclTerraform(this._excludeCdnCgi),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude_urls: {
                value: cdktf.stringToHclTerraform(this._excludeUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            export: {
                value: cdktf.stringToHclTerraform(this._export),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosts: {
                value: cdktf.stringToHclTerraform(this._hosts),
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
            order_by: {
                value: cdktf.stringToHclTerraform(this._orderBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            page: {
                value: cdktf.stringToHclTerraform(this._page),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            page_url: {
                value: cdktf.stringToHclTerraform(this._pageUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            per_page: {
                value: cdktf.numberToHclTerraform(this._perPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            prioritize_malicious: {
                value: cdktf.booleanToHclTerraform(this._prioritizeMalicious),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            urls: {
                value: cdktf.stringToHclTerraform(this._urls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflarePageShieldConnectionsList.tfResourceType = "cloudflare_page_shield_connections_list";
    return DataCloudflarePageShieldConnectionsList;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePageShieldConnectionsList = DataCloudflarePageShieldConnectionsList;
