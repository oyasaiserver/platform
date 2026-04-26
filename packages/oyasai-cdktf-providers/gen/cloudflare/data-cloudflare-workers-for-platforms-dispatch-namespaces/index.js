"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespaces
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
exports.DataCloudflareWorkersForPlatformsDispatchNamespaces = exports.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList = exports.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference = void 0;
exports.dataCloudflareWorkersForPlatformsDispatchNamespacesResultToTerraform = dataCloudflareWorkersForPlatformsDispatchNamespacesResultToTerraform;
exports.dataCloudflareWorkersForPlatformsDispatchNamespacesResultToHclTerraform = dataCloudflareWorkersForPlatformsDispatchNamespacesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersForPlatformsDispatchNamespacesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersForPlatformsDispatchNamespacesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "scriptCount", {
        // script_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('script_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.prototype, "trustedWorkers", {
        // trusted_workers - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('trusted_workers');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference = DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference;
var DataCloudflareWorkersForPlatformsDispatchNamespacesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersForPlatformsDispatchNamespacesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersForPlatformsDispatchNamespacesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.prototype.get = function (index) {
        return new DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersForPlatformsDispatchNamespacesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList = DataCloudflareWorkersForPlatformsDispatchNamespacesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespaces cloudflare_workers_for_platforms_dispatch_namespaces}
*/
var DataCloudflareWorkersForPlatformsDispatchNamespaces = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersForPlatformsDispatchNamespaces, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespaces cloudflare_workers_for_platforms_dispatch_namespaces} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersForPlatformsDispatchNamespacesConfig = {}
    */
    function DataCloudflareWorkersForPlatformsDispatchNamespaces(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_for_platforms_dispatch_namespaces',
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
        _this._result = new DataCloudflareWorkersForPlatformsDispatchNamespacesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespaces to import
    * @param importFromId The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespaces to import is found
    */
    DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_for_platforms_dispatch_namespaces", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareWorkersForPlatformsDispatchNamespaces.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareWorkersForPlatformsDispatchNamespaces.tfResourceType = "cloudflare_workers_for_platforms_dispatch_namespaces";
    return DataCloudflareWorkersForPlatformsDispatchNamespaces;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersForPlatformsDispatchNamespaces = DataCloudflareWorkersForPlatformsDispatchNamespaces;
