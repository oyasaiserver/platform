"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list
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
exports.DataCloudflarePageShieldCookiesList = exports.DataCloudflarePageShieldCookiesListResultList = exports.DataCloudflarePageShieldCookiesListResultOutputReference = void 0;
exports.dataCloudflarePageShieldCookiesListResultToTerraform = dataCloudflarePageShieldCookiesListResultToTerraform;
exports.dataCloudflarePageShieldCookiesListResultToHclTerraform = dataCloudflarePageShieldCookiesListResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePageShieldCookiesListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePageShieldCookiesListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePageShieldCookiesListResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldCookiesListResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePageShieldCookiesListResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "domainAttribute", {
        // domain_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "expiresAttribute", {
        // expires_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "firstSeenAt", {
        // first_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "httpOnlyAttribute", {
        // http_only_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('http_only_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "lastSeenAt", {
        // last_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "maxAgeAttribute", {
        // max_age_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "pageUrls", {
        // page_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('page_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "pathAttribute", {
        // path_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "sameSiteAttribute", {
        // same_site_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('same_site_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "secureAttribute", {
        // secure_attribute - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secure_attribute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesListResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePageShieldCookiesListResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePageShieldCookiesListResultOutputReference = DataCloudflarePageShieldCookiesListResultOutputReference;
var DataCloudflarePageShieldCookiesListResultList = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldCookiesListResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePageShieldCookiesListResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePageShieldCookiesListResultList.prototype.get = function (index) {
        return new DataCloudflarePageShieldCookiesListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePageShieldCookiesListResultList;
}(cdktf.ComplexList));
exports.DataCloudflarePageShieldCookiesListResultList = DataCloudflarePageShieldCookiesListResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}
*/
var DataCloudflarePageShieldCookiesList = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldCookiesList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldCookiesListConfig = {}
    */
    function DataCloudflarePageShieldCookiesList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_page_shield_cookies_list',
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
        _this._result = new DataCloudflarePageShieldCookiesListResultList(_this, "result", false);
        _this._direction = config.direction;
        _this._domain = config.domain;
        _this._export = config.export;
        _this._hosts = config.hosts;
        _this._httpOnly = config.httpOnly;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        _this._orderBy = config.orderBy;
        _this._page = config.page;
        _this._pageUrl = config.pageUrl;
        _this._path = config.path;
        _this._perPage = config.perPage;
        _this._sameSite = config.sameSite;
        _this._secure = config.secure;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldCookiesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found
    */
    DataCloudflarePageShieldCookiesList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_cookies_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetDomain = function () {
        this._domain = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "export", {
        get: function () {
            return this.getStringAttribute('export');
        },
        set: function (value) {
            this._export = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetExport = function () {
        this._export = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "exportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._export;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "hosts", {
        get: function () {
            return this.getStringAttribute('hosts');
        },
        set: function (value) {
            this._hosts = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetHosts = function () {
        this._hosts = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "hostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hosts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "httpOnly", {
        get: function () {
            return this.getBooleanAttribute('http_only');
        },
        set: function (value) {
            this._httpOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetHttpOnly = function () {
        this._httpOnly = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "httpOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "page", {
        get: function () {
            return this.getStringAttribute('page');
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetPage = function () {
        this._page = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "pageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "pageUrl", {
        get: function () {
            return this.getStringAttribute('page_url');
        },
        set: function (value) {
            this._pageUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetPageUrl = function () {
        this._pageUrl = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "pageUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetPerPage = function () {
        this._perPage = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "sameSite", {
        get: function () {
            return this.getStringAttribute('same_site');
        },
        set: function (value) {
            this._sameSite = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetSameSite = function () {
        this._sameSite = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "sameSiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sameSite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "secure", {
        get: function () {
            return this.getBooleanAttribute('secure');
        },
        set: function (value) {
            this._secure = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetSecure = function () {
        this._secure = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "secureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldCookiesList.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldCookiesList.prototype, "zoneIdInput", {
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
    DataCloudflarePageShieldCookiesList.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            domain: cdktf.stringToTerraform(this._domain),
            export: cdktf.stringToTerraform(this._export),
            hosts: cdktf.stringToTerraform(this._hosts),
            http_only: cdktf.booleanToTerraform(this._httpOnly),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            order_by: cdktf.stringToTerraform(this._orderBy),
            page: cdktf.stringToTerraform(this._page),
            page_url: cdktf.stringToTerraform(this._pageUrl),
            path: cdktf.stringToTerraform(this._path),
            per_page: cdktf.numberToTerraform(this._perPage),
            same_site: cdktf.stringToTerraform(this._sameSite),
            secure: cdktf.booleanToTerraform(this._secure),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflarePageShieldCookiesList.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain: {
                value: cdktf.stringToHclTerraform(this._domain),
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
            http_only: {
                value: cdktf.booleanToHclTerraform(this._httpOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            path: {
                value: cdktf.stringToHclTerraform(this._path),
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
            same_site: {
                value: cdktf.stringToHclTerraform(this._sameSite),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secure: {
                value: cdktf.booleanToHclTerraform(this._secure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    DataCloudflarePageShieldCookiesList.tfResourceType = "cloudflare_page_shield_cookies_list";
    return DataCloudflarePageShieldCookiesList;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePageShieldCookiesList = DataCloudflarePageShieldCookiesList;
