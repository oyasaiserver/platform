"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups
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
exports.DataCloudflareUserGroups = exports.DataCloudflareUserGroupsResultList = exports.DataCloudflareUserGroupsResultOutputReference = exports.DataCloudflareUserGroupsResultPoliciesList = exports.DataCloudflareUserGroupsResultPoliciesOutputReference = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsList = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference = exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference = exports.DataCloudflareUserGroupsResultPoliciesPermissionGroupsList = exports.DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference = exports.DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference = void 0;
exports.dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToTerraform = dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareUserGroupsResultPoliciesPermissionGroupsToTerraform = dataCloudflareUserGroupsResultPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesPermissionGroupsToHclTerraform = dataCloudflareUserGroupsResultPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToHclTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToHclTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToHclTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToHclTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToHclTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToHclTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsToTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesResourceGroupsToHclTerraform = dataCloudflareUserGroupsResultPoliciesResourceGroupsToHclTerraform;
exports.dataCloudflareUserGroupsResultPoliciesToTerraform = dataCloudflareUserGroupsResultPoliciesToTerraform;
exports.dataCloudflareUserGroupsResultPoliciesToHclTerraform = dataCloudflareUserGroupsResultPoliciesToHclTerraform;
exports.dataCloudflareUserGroupsResultToTerraform = dataCloudflareUserGroupsResultToTerraform;
exports.dataCloudflareUserGroupsResultToHclTerraform = dataCloudflareUserGroupsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference = DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareUserGroupsResultPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference = DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference;
var DataCloudflareUserGroupsResultPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupsResultPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupsResultPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupsResultPoliciesPermissionGroupsList = DataCloudflareUserGroupsResultPoliciesPermissionGroupsList;
function dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference = DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference;
function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference = DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference;
var DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList.prototype.get = function (index) {
        return new DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList = DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList;
function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // objects - computed: true, optional: false, required: false
        _this._objects = new DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList(_this, "objects", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference = DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference;
var DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList.prototype.get = function (index) {
        return new DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList = DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList;
function dataCloudflareUserGroupsResultPoliciesResourceGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesResourceGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference(_this, "meta");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList(_this, "scope", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference = DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference;
var DataCloudflareUserGroupsResultPoliciesResourceGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesResourceGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesResourceGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupsResultPoliciesResourceGroupsList.prototype.get = function (index) {
        return new DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupsResultPoliciesResourceGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupsResultPoliciesResourceGroupsList = DataCloudflareUserGroupsResultPoliciesResourceGroupsList;
function dataCloudflareUserGroupsResultPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareUserGroupsResultPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resource_groups - computed: true, optional: false, required: false
        _this._resourceGroups = new DataCloudflareUserGroupsResultPoliciesResourceGroupsList(_this, "resource_groups", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesOutputReference.prototype, "access", {
        // access - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultPoliciesOutputReference.prototype, "resourceGroups", {
        get: function () {
            return this._resourceGroups;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultPoliciesOutputReference = DataCloudflareUserGroupsResultPoliciesOutputReference;
var DataCloudflareUserGroupsResultPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupsResultPoliciesList.prototype.get = function (index) {
        return new DataCloudflareUserGroupsResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupsResultPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupsResultPoliciesList = DataCloudflareUserGroupsResultPoliciesList;
function dataCloudflareUserGroupsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareUserGroupsResultPoliciesList(_this, "policies", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupsResultOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupsResultOutputReference = DataCloudflareUserGroupsResultOutputReference;
var DataCloudflareUserGroupsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupsResultList.prototype.get = function (index) {
        return new DataCloudflareUserGroupsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupsResultList = DataCloudflareUserGroupsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups cloudflare_user_groups}
*/
var DataCloudflareUserGroups = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups cloudflare_user_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupsConfig
    */
    function DataCloudflareUserGroups(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_groups',
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
        _this._result = new DataCloudflareUserGroupsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._fuzzyName = config.fuzzyName;
        _this._id = config.id;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroups to import
    * @param importFromId The id of the existing DataCloudflareUserGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroups to import is found
    */
    DataCloudflareUserGroups.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_groups", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareUserGroups.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroups.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroups.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "fuzzyName", {
        get: function () {
            return this.getStringAttribute('fuzzy_name');
        },
        set: function (value) {
            this._fuzzyName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroups.prototype.resetFuzzyName = function () {
        this._fuzzyName = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroups.prototype, "fuzzyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fuzzyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroups.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroups.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroups.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroups.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroups.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroups.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroups.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareUserGroups.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            fuzzy_name: cdktf.stringToTerraform(this._fuzzyName),
            id: cdktf.stringToTerraform(this._id),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataCloudflareUserGroups.prototype.synthesizeHclAttributes = function () {
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
            fuzzy_name: {
                value: cdktf.stringToHclTerraform(this._fuzzyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    DataCloudflareUserGroups.tfResourceType = "cloudflare_user_groups";
    return DataCloudflareUserGroups;
}(cdktf.TerraformDataSource));
exports.DataCloudflareUserGroups = DataCloudflareUserGroups;
