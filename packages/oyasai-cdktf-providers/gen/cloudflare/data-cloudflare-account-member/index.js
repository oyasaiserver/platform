"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member
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
exports.DataCloudflareAccountMember = exports.DataCloudflareAccountMemberUserOutputReference = exports.DataCloudflareAccountMemberRolesList = exports.DataCloudflareAccountMemberRolesOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsZonesOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsWafOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsSslOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsLogsOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsLbOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsDnsOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsBillingOutputReference = exports.DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference = exports.DataCloudflareAccountMemberPoliciesList = exports.DataCloudflareAccountMemberPoliciesOutputReference = exports.DataCloudflareAccountMemberPoliciesResourceGroupsList = exports.DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference = exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeList = exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference = exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList = exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference = exports.DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference = exports.DataCloudflareAccountMemberPoliciesPermissionGroupsList = exports.DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference = exports.DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference = exports.DataCloudflareAccountMemberFilterOutputReference = void 0;
exports.dataCloudflareAccountMemberFilterToTerraform = dataCloudflareAccountMemberFilterToTerraform;
exports.dataCloudflareAccountMemberFilterToHclTerraform = dataCloudflareAccountMemberFilterToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToTerraform = dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesPermissionGroupsToTerraform = dataCloudflareAccountMemberPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareAccountMemberPoliciesPermissionGroupsToHclTerraform = dataCloudflareAccountMemberPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsMetaToTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsMetaToTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsMetaToHclTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsMetaToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToHclTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsScopeToTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsScopeToTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsScopeToHclTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsScopeToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsToTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsToTerraform;
exports.dataCloudflareAccountMemberPoliciesResourceGroupsToHclTerraform = dataCloudflareAccountMemberPoliciesResourceGroupsToHclTerraform;
exports.dataCloudflareAccountMemberPoliciesToTerraform = dataCloudflareAccountMemberPoliciesToTerraform;
exports.dataCloudflareAccountMemberPoliciesToHclTerraform = dataCloudflareAccountMemberPoliciesToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsAnalyticsToTerraform = dataCloudflareAccountMemberRolesPermissionsAnalyticsToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsAnalyticsToHclTerraform = dataCloudflareAccountMemberRolesPermissionsAnalyticsToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsBillingToTerraform = dataCloudflareAccountMemberRolesPermissionsBillingToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsBillingToHclTerraform = dataCloudflareAccountMemberRolesPermissionsBillingToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsCachePurgeToTerraform = dataCloudflareAccountMemberRolesPermissionsCachePurgeToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsCachePurgeToHclTerraform = dataCloudflareAccountMemberRolesPermissionsCachePurgeToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsDnsToTerraform = dataCloudflareAccountMemberRolesPermissionsDnsToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsDnsToHclTerraform = dataCloudflareAccountMemberRolesPermissionsDnsToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsDnsRecordsToTerraform = dataCloudflareAccountMemberRolesPermissionsDnsRecordsToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsDnsRecordsToHclTerraform = dataCloudflareAccountMemberRolesPermissionsDnsRecordsToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsLbToTerraform = dataCloudflareAccountMemberRolesPermissionsLbToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsLbToHclTerraform = dataCloudflareAccountMemberRolesPermissionsLbToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsLogsToTerraform = dataCloudflareAccountMemberRolesPermissionsLogsToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsLogsToHclTerraform = dataCloudflareAccountMemberRolesPermissionsLogsToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsOrganizationToTerraform = dataCloudflareAccountMemberRolesPermissionsOrganizationToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsOrganizationToHclTerraform = dataCloudflareAccountMemberRolesPermissionsOrganizationToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsSslToTerraform = dataCloudflareAccountMemberRolesPermissionsSslToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsSslToHclTerraform = dataCloudflareAccountMemberRolesPermissionsSslToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsWafToTerraform = dataCloudflareAccountMemberRolesPermissionsWafToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsWafToHclTerraform = dataCloudflareAccountMemberRolesPermissionsWafToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsZoneSettingsToTerraform = dataCloudflareAccountMemberRolesPermissionsZoneSettingsToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsZoneSettingsToHclTerraform = dataCloudflareAccountMemberRolesPermissionsZoneSettingsToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsZonesToTerraform = dataCloudflareAccountMemberRolesPermissionsZonesToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsZonesToHclTerraform = dataCloudflareAccountMemberRolesPermissionsZonesToHclTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsToTerraform = dataCloudflareAccountMemberRolesPermissionsToTerraform;
exports.dataCloudflareAccountMemberRolesPermissionsToHclTerraform = dataCloudflareAccountMemberRolesPermissionsToHclTerraform;
exports.dataCloudflareAccountMemberRolesToTerraform = dataCloudflareAccountMemberRolesToTerraform;
exports.dataCloudflareAccountMemberRolesToHclTerraform = dataCloudflareAccountMemberRolesToHclTerraform;
exports.dataCloudflareAccountMemberUserToTerraform = dataCloudflareAccountMemberUserToTerraform;
exports.dataCloudflareAccountMemberUserToHclTerraform = dataCloudflareAccountMemberUserToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountMemberFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        order: cdktf.stringToTerraform(struct.order),
        status: cdktf.stringToTerraform(struct.status),
    };
}
function dataCloudflareAccountMemberFilterToHclTerraform(struct) {
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
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var DataCloudflareAccountMemberFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "internalValue", {
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
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._order = undefined;
                this._status = undefined;
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
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMemberFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMemberFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMemberFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMemberFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberFilterOutputReference = DataCloudflareAccountMemberFilterOutputReference;
function dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference = DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareAccountMemberPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference = DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference;
var DataCloudflareAccountMemberPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMemberPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMemberPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMemberPoliciesPermissionGroupsList = DataCloudflareAccountMemberPoliciesPermissionGroupsList;
function dataCloudflareAccountMemberPoliciesResourceGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesResourceGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference = DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference;
function dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference = DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference;
var DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList.prototype.get = function (index) {
        return new DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList = DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList;
function dataCloudflareAccountMemberPoliciesResourceGroupsScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesResourceGroupsScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // objects - computed: true, optional: false, required: false
        _this._objects = new DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList(_this, "objects", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference = DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference;
var DataCloudflareAccountMemberPoliciesResourceGroupsScopeList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsScopeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsScopeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMemberPoliciesResourceGroupsScopeList.prototype.get = function (index) {
        return new DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMemberPoliciesResourceGroupsScopeList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsScopeList = DataCloudflareAccountMemberPoliciesResourceGroupsScopeList;
function dataCloudflareAccountMemberPoliciesResourceGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesResourceGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference(_this, "meta");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareAccountMemberPoliciesResourceGroupsScopeList(_this, "scope", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference = DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference;
var DataCloudflareAccountMemberPoliciesResourceGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesResourceGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesResourceGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMemberPoliciesResourceGroupsList.prototype.get = function (index) {
        return new DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMemberPoliciesResourceGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMemberPoliciesResourceGroupsList = DataCloudflareAccountMemberPoliciesResourceGroupsList;
function dataCloudflareAccountMemberPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareAccountMemberPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resource_groups - computed: true, optional: false, required: false
        _this._resourceGroups = new DataCloudflareAccountMemberPoliciesResourceGroupsList(_this, "resource_groups", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberPoliciesOutputReference.prototype, "access", {
        // access - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberPoliciesOutputReference.prototype, "resourceGroups", {
        get: function () {
            return this._resourceGroups;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberPoliciesOutputReference = DataCloudflareAccountMemberPoliciesOutputReference;
var DataCloudflareAccountMemberPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMemberPoliciesList.prototype.get = function (index) {
        return new DataCloudflareAccountMemberPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMemberPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMemberPoliciesList = DataCloudflareAccountMemberPoliciesList;
function dataCloudflareAccountMemberRolesPermissionsAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsAnalyticsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference = DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference;
function dataCloudflareAccountMemberRolesPermissionsBillingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsBillingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsBillingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsBillingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsBillingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsBillingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsBillingOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsBillingOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsBillingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsBillingOutputReference = DataCloudflareAccountMemberRolesPermissionsBillingOutputReference;
function dataCloudflareAccountMemberRolesPermissionsCachePurgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsCachePurgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference = DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference;
function dataCloudflareAccountMemberRolesPermissionsDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsDnsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsDnsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsDnsOutputReference = DataCloudflareAccountMemberRolesPermissionsDnsOutputReference;
function dataCloudflareAccountMemberRolesPermissionsDnsRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsDnsRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference = DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference;
function dataCloudflareAccountMemberRolesPermissionsLbToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsLbToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsLbOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsLbOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsLbOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsLbOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsLbOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsLbOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsLbOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsLbOutputReference = DataCloudflareAccountMemberRolesPermissionsLbOutputReference;
function dataCloudflareAccountMemberRolesPermissionsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsLogsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsLogsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsLogsOutputReference = DataCloudflareAccountMemberRolesPermissionsLogsOutputReference;
function dataCloudflareAccountMemberRolesPermissionsOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference = DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference;
function dataCloudflareAccountMemberRolesPermissionsSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsSslOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsSslOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsSslOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsSslOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsSslOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsSslOutputReference = DataCloudflareAccountMemberRolesPermissionsSslOutputReference;
function dataCloudflareAccountMemberRolesPermissionsWafToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsWafToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsWafOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsWafOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsWafOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsWafOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsWafOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsWafOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsWafOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsWafOutputReference = DataCloudflareAccountMemberRolesPermissionsWafOutputReference;
function dataCloudflareAccountMemberRolesPermissionsZoneSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsZoneSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference = DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference;
function dataCloudflareAccountMemberRolesPermissionsZonesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsZonesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsZonesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsZonesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsZonesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsZonesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsZonesOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsZonesOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsZonesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsZonesOutputReference = DataCloudflareAccountMemberRolesPermissionsZonesOutputReference;
function dataCloudflareAccountMemberRolesPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesPermissionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesPermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberRolesPermissionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // analytics - computed: true, optional: false, required: false
        _this._analytics = new DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference(_this, "analytics");
        // billing - computed: true, optional: false, required: false
        _this._billing = new DataCloudflareAccountMemberRolesPermissionsBillingOutputReference(_this, "billing");
        // cache_purge - computed: true, optional: false, required: false
        _this._cachePurge = new DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference(_this, "cache_purge");
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareAccountMemberRolesPermissionsDnsOutputReference(_this, "dns");
        // dns_records - computed: true, optional: false, required: false
        _this._dnsRecords = new DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference(_this, "dns_records");
        // lb - computed: true, optional: false, required: false
        _this._lb = new DataCloudflareAccountMemberRolesPermissionsLbOutputReference(_this, "lb");
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareAccountMemberRolesPermissionsLogsOutputReference(_this, "logs");
        // organization - computed: true, optional: false, required: false
        _this._organization = new DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference(_this, "organization");
        // ssl - computed: true, optional: false, required: false
        _this._ssl = new DataCloudflareAccountMemberRolesPermissionsSslOutputReference(_this, "ssl");
        // waf - computed: true, optional: false, required: false
        _this._waf = new DataCloudflareAccountMemberRolesPermissionsWafOutputReference(_this, "waf");
        // zone_settings - computed: true, optional: false, required: false
        _this._zoneSettings = new DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference(_this, "zone_settings");
        // zones - computed: true, optional: false, required: false
        _this._zones = new DataCloudflareAccountMemberRolesPermissionsZonesOutputReference(_this, "zones");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "analytics", {
        get: function () {
            return this._analytics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "billing", {
        get: function () {
            return this._billing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "cachePurge", {
        get: function () {
            return this._cachePurge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "dnsRecords", {
        get: function () {
            return this._dnsRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "lb", {
        get: function () {
            return this._lb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "organization", {
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "waf", {
        get: function () {
            return this._waf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "zoneSettings", {
        get: function () {
            return this._zoneSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesPermissionsOutputReference.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesPermissionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesPermissionsOutputReference = DataCloudflareAccountMemberRolesPermissionsOutputReference;
function dataCloudflareAccountMemberRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberRolesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permissions - computed: true, optional: false, required: false
        _this._permissions = new DataCloudflareAccountMemberRolesPermissionsOutputReference(_this, "permissions");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberRolesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberRolesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberRolesOutputReference.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberRolesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberRolesOutputReference = DataCloudflareAccountMemberRolesOutputReference;
var DataCloudflareAccountMemberRolesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountMemberRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountMemberRolesList.prototype.get = function (index) {
        return new DataCloudflareAccountMemberRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountMemberRolesList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountMemberRolesList = DataCloudflareAccountMemberRolesList;
function dataCloudflareAccountMemberUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountMemberUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountMemberUserOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMemberUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountMemberUserOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountMemberUserOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountMemberUserOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberUserOutputReference.prototype, "firstName", {
        // first_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberUserOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberUserOutputReference.prototype, "lastName", {
        // last_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMemberUserOutputReference.prototype, "twoFactorAuthenticationEnabled", {
        // two_factor_authentication_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountMemberUserOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountMemberUserOutputReference = DataCloudflareAccountMemberUserOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member cloudflare_account_member}
*/
var DataCloudflareAccountMember = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountMember, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member cloudflare_account_member} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountMemberConfig = {}
    */
    function DataCloudflareAccountMember(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_member',
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
        _this._filter = new DataCloudflareAccountMemberFilterOutputReference(_this, "filter");
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareAccountMemberPoliciesList(_this, "policies", false);
        // roles - computed: true, optional: false, required: false
        _this._roles = new DataCloudflareAccountMemberRolesList(_this, "roles", false);
        // user - computed: true, optional: false, required: false
        _this._user = new DataCloudflareAccountMemberUserOutputReference(_this, "user");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._memberId = config.memberId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountMember resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountMember to import
    * @param importFromId The id of the existing DataCloudflareAccountMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountMember to import is found
    */
    DataCloudflareAccountMember.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_member", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountMember.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMember.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMember.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMember.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareAccountMember.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMember.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "memberId", {
        get: function () {
            return this.getStringAttribute('member_id');
        },
        set: function (value) {
            this._memberId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountMember.prototype.resetMemberId = function () {
        this._memberId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountMember.prototype, "memberIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountMember.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountMember.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAccountMemberFilterToTerraform(this._filter.internalValue),
            member_id: cdktf.stringToTerraform(this._memberId),
        };
    };
    DataCloudflareAccountMember.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareAccountMemberFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAccountMemberFilter",
            },
            member_id: {
                value: cdktf.stringToHclTerraform(this._memberId),
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
    DataCloudflareAccountMember.tfResourceType = "cloudflare_account_member";
    return DataCloudflareAccountMember;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountMember = DataCloudflareAccountMember;
