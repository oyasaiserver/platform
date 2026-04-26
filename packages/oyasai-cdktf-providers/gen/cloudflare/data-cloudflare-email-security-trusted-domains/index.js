"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains
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
exports.DataCloudflareEmailSecurityTrustedDomains = exports.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference = void 0;
exports.dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform = dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform;
exports.dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform = dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        is_recent: cdktf.booleanToTerraform(struct.isRecent),
        is_similarity: cdktf.booleanToTerraform(struct.isSimilarity),
        order: cdktf.stringToTerraform(struct.order),
        pattern: cdktf.stringToTerraform(struct.pattern),
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_recent: {
            value: cdktf.booleanToHclTerraform(struct.isRecent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_similarity: {
            value: cdktf.booleanToHclTerraform(struct.isSimilarity),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
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
}
var DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._isRecent !== undefined) {
                hasAnyValues = true;
                internalValueResult.isRecent = this._isRecent;
            }
            if (this._isSimilarity !== undefined) {
                hasAnyValues = true;
                internalValueResult.isSimilarity = this._isSimilarity;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._isRecent = undefined;
                this._isSimilarity = undefined;
                this._order = undefined;
                this._pattern = undefined;
                this._search = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._isRecent = value.isRecent;
                this._isSimilarity = value.isSimilarity;
                this._order = value.order;
                this._pattern = value.pattern;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "isRecent", {
        get: function () {
            return this.getBooleanAttribute('is_recent');
        },
        set: function (value) {
            this._isRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype.resetIsRecent = function () {
        this._isRecent = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "isRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "isSimilarity", {
        get: function () {
            return this.getBooleanAttribute('is_similarity');
        },
        set: function (value) {
            this._isSimilarity = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype.resetIsSimilarity = function () {
        this._isSimilarity = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "isSimilarityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isSimilarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype.resetPattern = function () {
        this._pattern = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference = DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
var DataCloudflareEmailSecurityTrustedDomains = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityTrustedDomains, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityTrustedDomainsConfig = {}
    */
    function DataCloudflareEmailSecurityTrustedDomains(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_trusted_domains',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._trustedDomainId = config.trustedDomainId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomains to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomains to import is found
    */
    DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomains.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "comments", {
        // comments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomains.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareEmailSecurityTrustedDomains.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "isRecent", {
        // is_recent - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_recent');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "isRegex", {
        // is_regex - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "isSimilarity", {
        // is_similarity - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_similarity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "pattern", {
        // pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "trustedDomainId", {
        get: function () {
            return this.getNumberAttribute('trusted_domain_id');
        },
        set: function (value) {
            this._trustedDomainId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityTrustedDomains.prototype.resetTrustedDomainId = function () {
        this._trustedDomainId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityTrustedDomains.prototype, "trustedDomainIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trustedDomainId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailSecurityTrustedDomains.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(this._filter.internalValue),
            trusted_domain_id: cdktf.numberToTerraform(this._trustedDomainId),
        };
    };
    DataCloudflareEmailSecurityTrustedDomains.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareEmailSecurityTrustedDomainsFilter",
            },
            trusted_domain_id: {
                value: cdktf.numberToHclTerraform(this._trustedDomainId),
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
    DataCloudflareEmailSecurityTrustedDomains.tfResourceType = "cloudflare_email_security_trusted_domains";
    return DataCloudflareEmailSecurityTrustedDomains;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailSecurityTrustedDomains = DataCloudflareEmailSecurityTrustedDomains;
