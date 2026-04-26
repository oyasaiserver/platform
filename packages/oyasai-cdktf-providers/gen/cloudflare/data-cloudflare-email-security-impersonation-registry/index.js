"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry
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
exports.DataCloudflareEmailSecurityImpersonationRegistry = exports.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference = void 0;
exports.dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform = dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform;
exports.dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform = dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        order: cdktf.stringToTerraform(struct.order),
        provenance: cdktf.stringToTerraform(struct.provenance),
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform(struct) {
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
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provenance: {
            value: cdktf.stringToHclTerraform(struct.provenance),
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
var DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "internalValue", {
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
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._provenance !== undefined) {
                hasAnyValues = true;
                internalValueResult.provenance = this._provenance;
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
                this._order = undefined;
                this._provenance = undefined;
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
                this._order = value.order;
                this._provenance = value.provenance;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "provenance", {
        get: function () {
            return this.getStringAttribute('provenance');
        },
        set: function (value) {
            this._provenance = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype.resetProvenance = function () {
        this._provenance = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "provenanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provenance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference = DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
var DataCloudflareEmailSecurityImpersonationRegistry = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityImpersonationRegistry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityImpersonationRegistryConfig = {}
    */
    function DataCloudflareEmailSecurityImpersonationRegistry(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_impersonation_registry',
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
        _this._filter = new DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._displayNameId = config.displayNameId;
        _this._filter.internalValue = config.filter;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistry to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistry to import is found
    */
    DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_impersonation_registry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistry.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "comments", {
        // comments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "directoryId", {
        // directory_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('directory_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "directoryNodeId", {
        // directory_node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('directory_node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "displayNameId", {
        get: function () {
            return this.getNumberAttribute('display_name_id');
        },
        set: function (value) {
            this._displayNameId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistry.prototype.resetDisplayNameId = function () {
        this._displayNameId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "displayNameIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayNameId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "externalDirectoryNodeId", {
        // external_directory_node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_directory_node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityImpersonationRegistry.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareEmailSecurityImpersonationRegistry.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "isEmailRegex", {
        // is_email_regex - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_email_regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityImpersonationRegistry.prototype, "provenance", {
        // provenance - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provenance');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailSecurityImpersonationRegistry.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            display_name_id: cdktf.numberToTerraform(this._displayNameId),
            filter: dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform(this._filter.internalValue),
        };
    };
    DataCloudflareEmailSecurityImpersonationRegistry.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name_id: {
                value: cdktf.numberToHclTerraform(this._displayNameId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            filter: {
                value: dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareEmailSecurityImpersonationRegistryFilter",
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
    DataCloudflareEmailSecurityImpersonationRegistry.tfResourceType = "cloudflare_email_security_impersonation_registry";
    return DataCloudflareEmailSecurityImpersonationRegistry;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailSecurityImpersonationRegistry = DataCloudflareEmailSecurityImpersonationRegistry;
