"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members
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
exports.DataCloudflareAccountMembers = exports.DataCloudflareAccountMembersResultList = exports.DataCloudflareAccountMembersResultOutputReference = exports.DataCloudflareAccountMembersResultUserOutputReference = exports.DataCloudflareAccountMembersResultRolesList = exports.DataCloudflareAccountMembersResultRolesOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference = exports.DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference = exports.DataCloudflareAccountMembersResultPoliciesList = exports.DataCloudflareAccountMembersResultPoliciesOutputReference = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsList = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference = exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference = exports.DataCloudflareAccountMembersResultPoliciesPermissionGroupsList = exports.DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference = exports.DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference = void 0;
exports.dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToTerraform = dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareAccountMembersResultPoliciesPermissionGroupsToTerraform = dataCloudflareAccountMembersResultPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesPermissionGroupsToHclTerraform = dataCloudflareAccountMembersResultPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToHclTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToHclTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToHclTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToHclTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToHclTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToHclTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsToTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesResourceGroupsToHclTerraform = dataCloudflareAccountMembersResultPoliciesResourceGroupsToHclTerraform;
exports.dataCloudflareAccountMembersResultPoliciesToTerraform = dataCloudflareAccountMembersResultPoliciesToTerraform;
exports.dataCloudflareAccountMembersResultPoliciesToHclTerraform = dataCloudflareAccountMembersResultPoliciesToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToTerraform = dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsBillingToTerraform = dataCloudflareAccountMembersResultRolesPermissionsBillingToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsBillingToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsBillingToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToTerraform = dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsDnsToTerraform = dataCloudflareAccountMembersResultRolesPermissionsDnsToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsDnsToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsDnsToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToTerraform = dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsLbToTerraform = dataCloudflareAccountMembersResultRolesPermissionsLbToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsLbToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsLbToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsLogsToTerraform = dataCloudflareAccountMembersResultRolesPermissionsLogsToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsLogsToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsLogsToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsOrganizationToTerraform = dataCloudflareAccountMembersResultRolesPermissionsOrganizationToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsOrganizationToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsOrganizationToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsSslToTerraform = dataCloudflareAccountMembersResultRolesPermissionsSslToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsSslToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsSslToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsWafToTerraform = dataCloudflareAccountMembersResultRolesPermissionsWafToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsWafToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsWafToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToTerraform = dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsZonesToTerraform = dataCloudflareAccountMembersResultRolesPermissionsZonesToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsZonesToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsZonesToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsToTerraform = dataCloudflareAccountMembersResultRolesPermissionsToTerraform;
exports.dataCloudflareAccountMembersResultRolesPermissionsToHclTerraform = dataCloudflareAccountMembersResultRolesPermissionsToHclTerraform;
exports.dataCloudflareAccountMembersResultRolesToTerraform = dataCloudflareAccountMembersResultRolesToTerraform;
exports.dataCloudflareAccountMembersResultRolesToHclTerraform = dataCloudflareAccountMembersResultRolesToHclTerraform;
exports.dataCloudflareAccountMembersResultUserToTerraform = dataCloudflareAccountMembersResultUserToTerraform;
exports.dataCloudflareAccountMembersResultUserToHclTerraform = dataCloudflareAccountMembersResultUserToHclTerraform;
exports.dataCloudflareAccountMembersResultToTerraform = dataCloudflareAccountMembersResultToTerraform;
exports.dataCloudflareAccountMembersResultToHclTerraform = dataCloudflareAccountMembersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference = DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareAccountMembersResultPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference = DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference;
var DataCloudflareAccountMembersResultPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultPoliciesPermissionGroupsList = DataCloudflareAccountMembersResultPoliciesPermissionGroupsList;
function dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference = DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference;
function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference = DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference;
var DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList = DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList;
function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // objects - computed: true, optional: false, required: false
        _this._objects = new DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList(_this, "objects", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference = DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference;
var DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList = DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList;
function dataCloudflareAccountMembersResultPoliciesResourceGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesResourceGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference(_this, "meta");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList(_this, "scope", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference = DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference;
var DataCloudflareAccountMembersResultPoliciesResourceGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesResourceGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesResourceGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultPoliciesResourceGroupsList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultPoliciesResourceGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultPoliciesResourceGroupsList = DataCloudflareAccountMembersResultPoliciesResourceGroupsList;
function dataCloudflareAccountMembersResultPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareAccountMembersResultPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resource_groups - computed: true, optional: false, required: false
        _this._resourceGroups = new DataCloudflareAccountMembersResultPoliciesResourceGroupsList(_this, "resource_groups", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesOutputReference.prototype, "access", {
        // access - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultPoliciesOutputReference.prototype, "resourceGroups", {
        get: function () {
            return this._resourceGroups;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultPoliciesOutputReference = DataCloudflareAccountMembersResultPoliciesOutputReference;
var DataCloudflareAccountMembersResultPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultPoliciesList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultPoliciesList = DataCloudflareAccountMembersResultPoliciesList;
function dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference = DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsBillingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsBillingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference = DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference = DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference = DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference = DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsLbToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsLbToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference = DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference = DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference = DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference = DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsWafToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsWafToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference = DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference = DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsZonesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsZonesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference = DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference;
function dataCloudflareAccountMembersResultRolesPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesPermissionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesPermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultRolesPermissionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // analytics - computed: true, optional: false, required: false
        _this._analytics = new DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference(_this, "analytics");
        // billing - computed: true, optional: false, required: false
        _this._billing = new DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference(_this, "billing");
        // cache_purge - computed: true, optional: false, required: false
        _this._cachePurge = new DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference(_this, "cache_purge");
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference(_this, "dns");
        // dns_records - computed: true, optional: false, required: false
        _this._dnsRecords = new DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference(_this, "dns_records");
        // lb - computed: true, optional: false, required: false
        _this._lb = new DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference(_this, "lb");
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference(_this, "logs");
        // organization - computed: true, optional: false, required: false
        _this._organization = new DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference(_this, "organization");
        // ssl - computed: true, optional: false, required: false
        _this._ssl = new DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference(_this, "ssl");
        // waf - computed: true, optional: false, required: false
        _this._waf = new DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference(_this, "waf");
        // zone_settings - computed: true, optional: false, required: false
        _this._zoneSettings = new DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference(_this, "zone_settings");
        // zones - computed: true, optional: false, required: false
        _this._zones = new DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference(_this, "zones");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "analytics", {
        get: function () {
            return this._analytics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "billing", {
        get: function () {
            return this._billing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "cachePurge", {
        get: function () {
            return this._cachePurge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "dnsRecords", {
        get: function () {
            return this._dnsRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "lb", {
        get: function () {
            return this._lb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "organization", {
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "waf", {
        get: function () {
            return this._waf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "zoneSettings", {
        get: function () {
            return this._zoneSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesPermissionsOutputReference.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesPermissionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesPermissionsOutputReference = DataCloudflareAccountMembersResultRolesPermissionsOutputReference;
function dataCloudflareAccountMembersResultRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultRolesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permissions - computed: true, optional: false, required: false
        _this._permissions = new DataCloudflareAccountMembersResultRolesPermissionsOutputReference(_this, "permissions");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultRolesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultRolesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultRolesOutputReference.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultRolesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultRolesOutputReference = DataCloudflareAccountMembersResultRolesOutputReference;
var DataCloudflareAccountMembersResultRolesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultRolesList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultRolesList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultRolesList = DataCloudflareAccountMembersResultRolesList;
function dataCloudflareAccountMembersResultUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultUserOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMembersResultUserOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultUserOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultUserOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultUserOutputReference.prototype, "firstName", {
        // first_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultUserOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultUserOutputReference.prototype, "lastName", {
        // last_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultUserOutputReference.prototype, "twoFactorAuthenticationEnabled", {
        // two_factor_authentication_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultUserOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultUserOutputReference = DataCloudflareAccountMembersResultUserOutputReference;
function dataCloudflareAccountMembersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMembersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMembersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareAccountMembersResultPoliciesList(_this, "policies", false);
        // roles - computed: true, optional: false, required: false
        _this._roles = new DataCloudflareAccountMembersResultRolesList(_this, "roles", false);
        // user - computed: true, optional: false, required: false
        _this._user = new DataCloudflareAccountMembersResultUserOutputReference(_this, "user");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembersResultOutputReference.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMembersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMembersResultOutputReference = DataCloudflareAccountMembersResultOutputReference;
var DataCloudflareAccountMembersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMembersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMembersResultList.prototype.get = function (index) {
        return new DataCloudflareAccountMembersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMembersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMembersResultList = DataCloudflareAccountMembersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members cloudflare_account_members}
*/
var DataCloudflareAccountMembers = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMembers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members cloudflare_account_members} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountMembersConfig = {}
    */
    function DataCloudflareAccountMembers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_members',
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
        _this._result = new DataCloudflareAccountMembersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountMembers to import
    * @param importFromId The id of the existing DataCloudflareAccountMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountMembers to import is found
    */
    DataCloudflareAccountMembers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_members", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMembers.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMembers.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMembers.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMembers.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMembers.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMembers.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountMembers.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    DataCloudflareAccountMembers.prototype.synthesizeHclAttributes = function () {
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
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    DataCloudflareAccountMembers.tfResourceType = "cloudflare_account_members";
    return DataCloudflareAccountMembers;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountMembers = DataCloudflareAccountMembers;
