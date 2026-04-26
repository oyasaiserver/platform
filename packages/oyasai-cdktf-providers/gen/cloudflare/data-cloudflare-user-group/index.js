"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group
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
exports.DataCloudflareUserGroup = exports.DataCloudflareUserGroupPoliciesList = exports.DataCloudflareUserGroupPoliciesOutputReference = exports.DataCloudflareUserGroupPoliciesResourceGroupsList = exports.DataCloudflareUserGroupPoliciesResourceGroupsOutputReference = exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeList = exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference = exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList = exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference = exports.DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference = exports.DataCloudflareUserGroupPoliciesPermissionGroupsList = exports.DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference = exports.DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference = exports.DataCloudflareUserGroupFilterOutputReference = void 0;
exports.dataCloudflareUserGroupFilterToTerraform = dataCloudflareUserGroupFilterToTerraform;
exports.dataCloudflareUserGroupFilterToHclTerraform = dataCloudflareUserGroupFilterToHclTerraform;
exports.dataCloudflareUserGroupPoliciesPermissionGroupsMetaToTerraform = dataCloudflareUserGroupPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareUserGroupPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareUserGroupPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareUserGroupPoliciesPermissionGroupsToTerraform = dataCloudflareUserGroupPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareUserGroupPoliciesPermissionGroupsToHclTerraform = dataCloudflareUserGroupPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsMetaToTerraform = dataCloudflareUserGroupPoliciesResourceGroupsMetaToTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsMetaToHclTerraform = dataCloudflareUserGroupPoliciesResourceGroupsMetaToHclTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToTerraform = dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToHclTerraform = dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToHclTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsScopeToTerraform = dataCloudflareUserGroupPoliciesResourceGroupsScopeToTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsScopeToHclTerraform = dataCloudflareUserGroupPoliciesResourceGroupsScopeToHclTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsToTerraform = dataCloudflareUserGroupPoliciesResourceGroupsToTerraform;
exports.dataCloudflareUserGroupPoliciesResourceGroupsToHclTerraform = dataCloudflareUserGroupPoliciesResourceGroupsToHclTerraform;
exports.dataCloudflareUserGroupPoliciesToTerraform = dataCloudflareUserGroupPoliciesToTerraform;
exports.dataCloudflareUserGroupPoliciesToHclTerraform = dataCloudflareUserGroupPoliciesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareUserGroupFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        fuzzy_name: cdktf.stringToTerraform(struct.fuzzyName),
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function dataCloudflareUserGroupFilterToHclTerraform(struct) {
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
        fuzzy_name: {
            value: cdktf.stringToHclTerraform(struct.fuzzyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var DataCloudflareUserGroupFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserGroupFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "internalValue", {
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
            if (this._fuzzyName !== undefined) {
                hasAnyValues = true;
                internalValueResult.fuzzyName = this._fuzzyName;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._fuzzyName = undefined;
                this._id = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._fuzzyName = value.fuzzyName;
                this._id = value.id;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroupFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "fuzzyName", {
        get: function () {
            return this.getStringAttribute('fuzzy_name');
        },
        set: function (value) {
            this._fuzzyName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroupFilterOutputReference.prototype.resetFuzzyName = function () {
        this._fuzzyName = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "fuzzyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fuzzyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroupFilterOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroupFilterOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroupFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupFilterOutputReference = DataCloudflareUserGroupFilterOutputReference;
function dataCloudflareUserGroupPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference = DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareUserGroupPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference = DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference;
var DataCloudflareUserGroupPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupPoliciesPermissionGroupsList = DataCloudflareUserGroupPoliciesPermissionGroupsList;
function dataCloudflareUserGroupPoliciesResourceGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesResourceGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference = DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference;
function dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference = DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference;
var DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList.prototype.get = function (index) {
        return new DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList = DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList;
function dataCloudflareUserGroupPoliciesResourceGroupsScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesResourceGroupsScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // objects - computed: true, optional: false, required: false
        _this._objects = new DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList(_this, "objects", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference = DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference;
var DataCloudflareUserGroupPoliciesResourceGroupsScopeList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsScopeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsScopeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupPoliciesResourceGroupsScopeList.prototype.get = function (index) {
        return new DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupPoliciesResourceGroupsScopeList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupPoliciesResourceGroupsScopeList = DataCloudflareUserGroupPoliciesResourceGroupsScopeList;
function dataCloudflareUserGroupPoliciesResourceGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesResourceGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesResourceGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference(_this, "meta");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareUserGroupPoliciesResourceGroupsScopeList(_this, "scope", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesResourceGroupsOutputReference.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesResourceGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesResourceGroupsOutputReference = DataCloudflareUserGroupPoliciesResourceGroupsOutputReference;
var DataCloudflareUserGroupPoliciesResourceGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesResourceGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesResourceGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupPoliciesResourceGroupsList.prototype.get = function (index) {
        return new DataCloudflareUserGroupPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupPoliciesResourceGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupPoliciesResourceGroupsList = DataCloudflareUserGroupPoliciesResourceGroupsList;
function dataCloudflareUserGroupPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserGroupPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserGroupPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareUserGroupPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resource_groups - computed: true, optional: false, required: false
        _this._resourceGroups = new DataCloudflareUserGroupPoliciesResourceGroupsList(_this, "resource_groups", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareUserGroupPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserGroupPoliciesOutputReference.prototype, "access", {
        // access - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupPoliciesOutputReference.prototype, "resourceGroups", {
        get: function () {
            return this._resourceGroups;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserGroupPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserGroupPoliciesOutputReference = DataCloudflareUserGroupPoliciesOutputReference;
var DataCloudflareUserGroupPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserGroupPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserGroupPoliciesList.prototype.get = function (index) {
        return new DataCloudflareUserGroupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserGroupPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareUserGroupPoliciesList = DataCloudflareUserGroupPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group cloudflare_user_group}
*/
var DataCloudflareUserGroup = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group cloudflare_user_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupConfig
    */
    function DataCloudflareUserGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_group',
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
        _this._filter = new DataCloudflareUserGroupFilterOutputReference(_this, "filter");
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareUserGroupPoliciesList(_this, "policies", false);
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._userGroupId = config.userGroupId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroup to import
    * @param importFromId The id of the existing DataCloudflareUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroup to import is found
    */
    DataCloudflareUserGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareUserGroup.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroup.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareUserGroup.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroup.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroup.prototype, "userGroupId", {
        get: function () {
            return this.getStringAttribute('user_group_id');
        },
        set: function (value) {
            this._userGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroup.prototype.resetUserGroupId = function () {
        this._userGroupId = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroup.prototype, "userGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userGroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareUserGroup.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareUserGroupFilterToTerraform(this._filter.internalValue),
            user_group_id: cdktf.stringToTerraform(this._userGroupId),
        };
    };
    DataCloudflareUserGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareUserGroupFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareUserGroupFilter",
            },
            user_group_id: {
                value: cdktf.stringToHclTerraform(this._userGroupId),
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
    DataCloudflareUserGroup.tfResourceType = "cloudflare_user_group";
    return DataCloudflareUserGroup;
}(cdktf.TerraformDataSource));
exports.DataCloudflareUserGroup = DataCloudflareUserGroup;
