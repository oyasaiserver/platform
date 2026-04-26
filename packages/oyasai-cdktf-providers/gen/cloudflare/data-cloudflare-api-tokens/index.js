"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens
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
exports.DataCloudflareApiTokens = exports.DataCloudflareApiTokensResultList = exports.DataCloudflareApiTokensResultOutputReference = exports.DataCloudflareApiTokensResultPoliciesList = exports.DataCloudflareApiTokensResultPoliciesOutputReference = exports.DataCloudflareApiTokensResultPoliciesPermissionGroupsList = exports.DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference = exports.DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference = exports.DataCloudflareApiTokensResultConditionOutputReference = exports.DataCloudflareApiTokensResultConditionRequestIpOutputReference = void 0;
exports.dataCloudflareApiTokensResultConditionRequestIpToTerraform = dataCloudflareApiTokensResultConditionRequestIpToTerraform;
exports.dataCloudflareApiTokensResultConditionRequestIpToHclTerraform = dataCloudflareApiTokensResultConditionRequestIpToHclTerraform;
exports.dataCloudflareApiTokensResultConditionToTerraform = dataCloudflareApiTokensResultConditionToTerraform;
exports.dataCloudflareApiTokensResultConditionToHclTerraform = dataCloudflareApiTokensResultConditionToHclTerraform;
exports.dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToTerraform = dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareApiTokensResultPoliciesPermissionGroupsToTerraform = dataCloudflareApiTokensResultPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareApiTokensResultPoliciesPermissionGroupsToHclTerraform = dataCloudflareApiTokensResultPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareApiTokensResultPoliciesToTerraform = dataCloudflareApiTokensResultPoliciesToTerraform;
exports.dataCloudflareApiTokensResultPoliciesToHclTerraform = dataCloudflareApiTokensResultPoliciesToHclTerraform;
exports.dataCloudflareApiTokensResultToTerraform = dataCloudflareApiTokensResultToTerraform;
exports.dataCloudflareApiTokensResultToHclTerraform = dataCloudflareApiTokensResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiTokensResultConditionRequestIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokensResultConditionRequestIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokensResultConditionRequestIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultConditionRequestIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokensResultConditionRequestIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokensResultConditionRequestIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokensResultConditionRequestIpOutputReference.prototype, "in", {
        // in - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('in');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultConditionRequestIpOutputReference.prototype, "notIn", {
        // not_in - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('not_in');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokensResultConditionRequestIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokensResultConditionRequestIpOutputReference = DataCloudflareApiTokensResultConditionRequestIpOutputReference;
function dataCloudflareApiTokensResultConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokensResultConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokensResultConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokensResultConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // request_ip - computed: true, optional: false, required: false
        _this._requestIp = new DataCloudflareApiTokensResultConditionRequestIpOutputReference(_this, "request_ip");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokensResultConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokensResultConditionOutputReference.prototype, "requestIp", {
        get: function () {
            return this._requestIp;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokensResultConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokensResultConditionOutputReference = DataCloudflareApiTokensResultConditionOutputReference;
function dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference = DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareApiTokensResultPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokensResultPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference = DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference;
var DataCloudflareApiTokensResultPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokensResultPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiTokensResultPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiTokensResultPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareApiTokensResultPoliciesPermissionGroupsList = DataCloudflareApiTokensResultPoliciesPermissionGroupsList;
function dataCloudflareApiTokensResultPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokensResultPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokensResultPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokensResultPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareApiTokensResultPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resources - computed: true, optional: false, required: false
        _this._resources = new cdktf.StringMap(_this, "resources");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesOutputReference.prototype, "effect", {
        // effect - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultPoliciesOutputReference.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokensResultPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokensResultPoliciesOutputReference = DataCloudflareApiTokensResultPoliciesOutputReference;
var DataCloudflareApiTokensResultPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokensResultPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiTokensResultPoliciesList.prototype.get = function (index) {
        return new DataCloudflareApiTokensResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiTokensResultPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareApiTokensResultPoliciesList = DataCloudflareApiTokensResultPoliciesList;
function dataCloudflareApiTokensResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokensResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokensResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokensResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareApiTokensResultConditionOutputReference(_this, "condition");
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareApiTokensResultPoliciesList(_this, "policies", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "lastUsedOn", {
        // last_used_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_used_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "notBefore", {
        // not_before - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokensResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokensResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokensResultOutputReference = DataCloudflareApiTokensResultOutputReference;
var DataCloudflareApiTokensResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokensResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokensResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiTokensResultList.prototype.get = function (index) {
        return new DataCloudflareApiTokensResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiTokensResultList;
}(cdktf.ComplexList));
exports.DataCloudflareApiTokensResultList = DataCloudflareApiTokensResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens cloudflare_api_tokens}
*/
var DataCloudflareApiTokens = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokens, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens cloudflare_api_tokens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiTokensConfig = {}
    */
    function DataCloudflareApiTokens(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_tokens',
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
        _this._result = new DataCloudflareApiTokensResultList(_this, "result", false);
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiTokens resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiTokens to import
    * @param importFromId The id of the existing DataCloudflareApiTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiTokens to import is found
    */
    DataCloudflareApiTokens.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_tokens", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiTokens.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiTokens.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareApiTokens.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokens.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiTokens.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareApiTokens.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokens.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareApiTokens.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareApiTokens.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareApiTokens.tfResourceType = "cloudflare_api_tokens";
    return DataCloudflareApiTokens;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiTokens = DataCloudflareApiTokens;
