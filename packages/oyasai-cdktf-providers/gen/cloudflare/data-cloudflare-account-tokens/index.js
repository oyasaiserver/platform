"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens
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
exports.DataCloudflareAccountTokens = exports.DataCloudflareAccountTokensResultList = exports.DataCloudflareAccountTokensResultOutputReference = exports.DataCloudflareAccountTokensResultPoliciesList = exports.DataCloudflareAccountTokensResultPoliciesOutputReference = exports.DataCloudflareAccountTokensResultPoliciesPermissionGroupsList = exports.DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference = exports.DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference = exports.DataCloudflareAccountTokensResultConditionOutputReference = exports.DataCloudflareAccountTokensResultConditionRequestIpOutputReference = void 0;
exports.dataCloudflareAccountTokensResultConditionRequestIpToTerraform = dataCloudflareAccountTokensResultConditionRequestIpToTerraform;
exports.dataCloudflareAccountTokensResultConditionRequestIpToHclTerraform = dataCloudflareAccountTokensResultConditionRequestIpToHclTerraform;
exports.dataCloudflareAccountTokensResultConditionToTerraform = dataCloudflareAccountTokensResultConditionToTerraform;
exports.dataCloudflareAccountTokensResultConditionToHclTerraform = dataCloudflareAccountTokensResultConditionToHclTerraform;
exports.dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToTerraform = dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareAccountTokensResultPoliciesPermissionGroupsToTerraform = dataCloudflareAccountTokensResultPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareAccountTokensResultPoliciesPermissionGroupsToHclTerraform = dataCloudflareAccountTokensResultPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareAccountTokensResultPoliciesToTerraform = dataCloudflareAccountTokensResultPoliciesToTerraform;
exports.dataCloudflareAccountTokensResultPoliciesToHclTerraform = dataCloudflareAccountTokensResultPoliciesToHclTerraform;
exports.dataCloudflareAccountTokensResultToTerraform = dataCloudflareAccountTokensResultToTerraform;
exports.dataCloudflareAccountTokensResultToHclTerraform = dataCloudflareAccountTokensResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountTokensResultConditionRequestIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountTokensResultConditionRequestIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountTokensResultConditionRequestIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultConditionRequestIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountTokensResultConditionRequestIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountTokensResultConditionRequestIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountTokensResultConditionRequestIpOutputReference.prototype, "in", {
        // in - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('in');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultConditionRequestIpOutputReference.prototype, "notIn", {
        // not_in - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('not_in');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountTokensResultConditionRequestIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountTokensResultConditionRequestIpOutputReference = DataCloudflareAccountTokensResultConditionRequestIpOutputReference;
function dataCloudflareAccountTokensResultConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountTokensResultConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountTokensResultConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountTokensResultConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // request_ip - computed: true, optional: false, required: false
        _this._requestIp = new DataCloudflareAccountTokensResultConditionRequestIpOutputReference(_this, "request_ip");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountTokensResultConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountTokensResultConditionOutputReference.prototype, "requestIp", {
        get: function () {
            return this._requestIp;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountTokensResultConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountTokensResultConditionOutputReference = DataCloudflareAccountTokensResultConditionOutputReference;
function dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference = DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareAccountTokensResultPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountTokensResultPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference = DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference;
var DataCloudflareAccountTokensResultPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountTokensResultPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountTokensResultPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountTokensResultPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountTokensResultPoliciesPermissionGroupsList = DataCloudflareAccountTokensResultPoliciesPermissionGroupsList;
function dataCloudflareAccountTokensResultPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountTokensResultPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountTokensResultPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountTokensResultPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareAccountTokensResultPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resources - computed: true, optional: false, required: false
        _this._resources = new cdktf.StringMap(_this, "resources");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesOutputReference.prototype, "effect", {
        // effect - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultPoliciesOutputReference.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountTokensResultPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountTokensResultPoliciesOutputReference = DataCloudflareAccountTokensResultPoliciesOutputReference;
var DataCloudflareAccountTokensResultPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountTokensResultPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountTokensResultPoliciesList.prototype.get = function (index) {
        return new DataCloudflareAccountTokensResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountTokensResultPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountTokensResultPoliciesList = DataCloudflareAccountTokensResultPoliciesList;
function dataCloudflareAccountTokensResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountTokensResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountTokensResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountTokensResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareAccountTokensResultConditionOutputReference(_this, "condition");
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareAccountTokensResultPoliciesList(_this, "policies", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "lastUsedOn", {
        // last_used_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_used_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "notBefore", {
        // not_before - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokensResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountTokensResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountTokensResultOutputReference = DataCloudflareAccountTokensResultOutputReference;
var DataCloudflareAccountTokensResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokensResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountTokensResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountTokensResultList.prototype.get = function (index) {
        return new DataCloudflareAccountTokensResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountTokensResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountTokensResultList = DataCloudflareAccountTokensResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens cloudflare_account_tokens}
*/
var DataCloudflareAccountTokens = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountTokens, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens cloudflare_account_tokens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountTokensConfig = {}
    */
    function DataCloudflareAccountTokens(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_tokens',
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
        _this._result = new DataCloudflareAccountTokensResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountTokens resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountTokens to import
    * @param importFromId The id of the existing DataCloudflareAccountTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountTokens to import is found
    */
    DataCloudflareAccountTokens.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_tokens", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountTokens.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountTokens.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountTokens.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountTokens.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountTokens.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareAccountTokens.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareAccountTokens.tfResourceType = "cloudflare_account_tokens";
    return DataCloudflareAccountTokens;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountTokens = DataCloudflareAccountTokens;
