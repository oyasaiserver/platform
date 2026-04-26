"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries
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
exports.DataCloudflareEmailSecurityImpersonationRegistries = exports.DataCloudflareEmailSecurityImpersonationRegistriesResultList = exports.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference = void 0;
exports.dataCloudflareEmailSecurityImpersonationRegistriesResultToTerraform = dataCloudflareEmailSecurityImpersonationRegistriesResultToTerraform;
exports.dataCloudflareEmailSecurityImpersonationRegistriesResultToHclTerraform = dataCloudflareEmailSecurityImpersonationRegistriesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailSecurityImpersonationRegistriesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailSecurityImpersonationRegistriesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "comments", {
        // comments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "directoryId", {
        // directory_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('directory_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "directoryNodeId", {
        // directory_node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('directory_node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "externalDirectoryNodeId", {
        // external_directory_node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_directory_node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "isEmailRegex", {
        // is_email_regex - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_email_regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference.prototype, "provenance", {
        // provenance - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provenance');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference = DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference;
var DataCloudflareEmailSecurityImpersonationRegistriesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityImpersonationRegistriesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailSecurityImpersonationRegistriesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailSecurityImpersonationRegistriesResultList.prototype.get = function (index) {
        return new DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailSecurityImpersonationRegistriesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailSecurityImpersonationRegistriesResultList = DataCloudflareEmailSecurityImpersonationRegistriesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries cloudflare_email_security_impersonation_registries}
*/
var DataCloudflareEmailSecurityImpersonationRegistries = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityImpersonationRegistries, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries cloudflare_email_security_impersonation_registries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityImpersonationRegistriesConfig = {}
    */
    function DataCloudflareEmailSecurityImpersonationRegistries(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_impersonation_registries',
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
        _this._result = new DataCloudflareEmailSecurityImpersonationRegistriesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        _this._provenance = config.provenance;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistries to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityImpersonationRegistries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistries to import is found
    */
    DataCloudflareEmailSecurityImpersonationRegistries.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_impersonation_registries", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "provenance", {
        get: function () {
            return this.getStringAttribute('provenance');
        },
        set: function (value) {
            this._provenance = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.resetProvenance = function () {
        this._provenance = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "provenanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provenance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistries.prototype, "searchInput", {
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
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
            provenance: cdktf.stringToTerraform(this._provenance),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareEmailSecurityImpersonationRegistries.prototype.synthesizeHclAttributes = function () {
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
            provenance: {
                value: cdktf.stringToHclTerraform(this._provenance),
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
    DataCloudflareEmailSecurityImpersonationRegistries.tfResourceType = "cloudflare_email_security_impersonation_registries";
    return DataCloudflareEmailSecurityImpersonationRegistries;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailSecurityImpersonationRegistries = DataCloudflareEmailSecurityImpersonationRegistries;
