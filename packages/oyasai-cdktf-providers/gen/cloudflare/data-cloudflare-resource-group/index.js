"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group
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
exports.DataCloudflareResourceGroup = exports.DataCloudflareResourceGroupScopeList = exports.DataCloudflareResourceGroupScopeOutputReference = exports.DataCloudflareResourceGroupScopeObjectsList = exports.DataCloudflareResourceGroupScopeObjectsOutputReference = exports.DataCloudflareResourceGroupMetaOutputReference = void 0;
exports.dataCloudflareResourceGroupMetaToTerraform = dataCloudflareResourceGroupMetaToTerraform;
exports.dataCloudflareResourceGroupMetaToHclTerraform = dataCloudflareResourceGroupMetaToHclTerraform;
exports.dataCloudflareResourceGroupScopeObjectsToTerraform = dataCloudflareResourceGroupScopeObjectsToTerraform;
exports.dataCloudflareResourceGroupScopeObjectsToHclTerraform = dataCloudflareResourceGroupScopeObjectsToHclTerraform;
exports.dataCloudflareResourceGroupScopeToTerraform = dataCloudflareResourceGroupScopeToTerraform;
exports.dataCloudflareResourceGroupScopeToHclTerraform = dataCloudflareResourceGroupScopeToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareResourceGroupMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareResourceGroupMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareResourceGroupMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareResourceGroupMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareResourceGroupMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareResourceGroupMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareResourceGroupMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroupMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareResourceGroupMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareResourceGroupMetaOutputReference = DataCloudflareResourceGroupMetaOutputReference;
function dataCloudflareResourceGroupScopeObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareResourceGroupScopeObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareResourceGroupScopeObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareResourceGroupScopeObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareResourceGroupScopeObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareResourceGroupScopeObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareResourceGroupScopeObjectsOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareResourceGroupScopeObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareResourceGroupScopeObjectsOutputReference = DataCloudflareResourceGroupScopeObjectsOutputReference;
var DataCloudflareResourceGroupScopeObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareResourceGroupScopeObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareResourceGroupScopeObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareResourceGroupScopeObjectsList.prototype.get = function (index) {
        return new DataCloudflareResourceGroupScopeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareResourceGroupScopeObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareResourceGroupScopeObjectsList = DataCloudflareResourceGroupScopeObjectsList;
function dataCloudflareResourceGroupScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareResourceGroupScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareResourceGroupScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareResourceGroupScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareResourceGroupScopeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // objects - computed: true, optional: false, required: false
        _this._objects = new DataCloudflareResourceGroupScopeObjectsList(_this, "objects", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareResourceGroupScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareResourceGroupScopeOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroupScopeOutputReference.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareResourceGroupScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareResourceGroupScopeOutputReference = DataCloudflareResourceGroupScopeOutputReference;
var DataCloudflareResourceGroupScopeList = /** @class */ (function (_super) {
    __extends(DataCloudflareResourceGroupScopeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareResourceGroupScopeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareResourceGroupScopeList.prototype.get = function (index) {
        return new DataCloudflareResourceGroupScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareResourceGroupScopeList;
}(cdktf.ComplexList));
exports.DataCloudflareResourceGroupScopeList = DataCloudflareResourceGroupScopeList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group cloudflare_resource_group}
*/
var DataCloudflareResourceGroup = /** @class */ (function (_super) {
    __extends(DataCloudflareResourceGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group cloudflare_resource_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareResourceGroupConfig
    */
    function DataCloudflareResourceGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_resource_group',
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
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareResourceGroupMetaOutputReference(_this, "meta");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareResourceGroupScopeList(_this, "scope", false);
        _this._accountId = config.accountId;
        _this._resourceGroupId = config.resourceGroupId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareResourceGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareResourceGroup to import
    * @param importFromId The id of the existing DataCloudflareResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/resource_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareResourceGroup to import is found
    */
    DataCloudflareResourceGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_resource_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareResourceGroup.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "resourceGroupId", {
        get: function () {
            return this.getStringAttribute('resource_group_id');
        },
        set: function (value) {
            this._resourceGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "resourceGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareResourceGroup.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareResourceGroup.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
        };
    };
    DataCloudflareResourceGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_group_id: {
                value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
    DataCloudflareResourceGroup.tfResourceType = "cloudflare_resource_group";
    return DataCloudflareResourceGroup;
}(cdktf.TerraformDataSource));
exports.DataCloudflareResourceGroup = DataCloudflareResourceGroup;
