"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles
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
exports.DataCloudflareAccountRoles = exports.DataCloudflareAccountRolesResultList = exports.DataCloudflareAccountRolesResultOutputReference = exports.DataCloudflareAccountRolesResultPermissionsOutputReference = exports.DataCloudflareAccountRolesResultPermissionsZonesOutputReference = exports.DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference = exports.DataCloudflareAccountRolesResultPermissionsWafOutputReference = exports.DataCloudflareAccountRolesResultPermissionsSslOutputReference = exports.DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference = exports.DataCloudflareAccountRolesResultPermissionsLogsOutputReference = exports.DataCloudflareAccountRolesResultPermissionsLbOutputReference = exports.DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference = exports.DataCloudflareAccountRolesResultPermissionsDnsOutputReference = exports.DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference = exports.DataCloudflareAccountRolesResultPermissionsBillingOutputReference = exports.DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference = void 0;
exports.dataCloudflareAccountRolesResultPermissionsAnalyticsToTerraform = dataCloudflareAccountRolesResultPermissionsAnalyticsToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsAnalyticsToHclTerraform = dataCloudflareAccountRolesResultPermissionsAnalyticsToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsBillingToTerraform = dataCloudflareAccountRolesResultPermissionsBillingToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsBillingToHclTerraform = dataCloudflareAccountRolesResultPermissionsBillingToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsCachePurgeToTerraform = dataCloudflareAccountRolesResultPermissionsCachePurgeToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsCachePurgeToHclTerraform = dataCloudflareAccountRolesResultPermissionsCachePurgeToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsDnsToTerraform = dataCloudflareAccountRolesResultPermissionsDnsToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsDnsToHclTerraform = dataCloudflareAccountRolesResultPermissionsDnsToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsDnsRecordsToTerraform = dataCloudflareAccountRolesResultPermissionsDnsRecordsToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsDnsRecordsToHclTerraform = dataCloudflareAccountRolesResultPermissionsDnsRecordsToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsLbToTerraform = dataCloudflareAccountRolesResultPermissionsLbToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsLbToHclTerraform = dataCloudflareAccountRolesResultPermissionsLbToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsLogsToTerraform = dataCloudflareAccountRolesResultPermissionsLogsToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsLogsToHclTerraform = dataCloudflareAccountRolesResultPermissionsLogsToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsOrganizationToTerraform = dataCloudflareAccountRolesResultPermissionsOrganizationToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsOrganizationToHclTerraform = dataCloudflareAccountRolesResultPermissionsOrganizationToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsSslToTerraform = dataCloudflareAccountRolesResultPermissionsSslToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsSslToHclTerraform = dataCloudflareAccountRolesResultPermissionsSslToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsWafToTerraform = dataCloudflareAccountRolesResultPermissionsWafToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsWafToHclTerraform = dataCloudflareAccountRolesResultPermissionsWafToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsZoneSettingsToTerraform = dataCloudflareAccountRolesResultPermissionsZoneSettingsToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsZoneSettingsToHclTerraform = dataCloudflareAccountRolesResultPermissionsZoneSettingsToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsZonesToTerraform = dataCloudflareAccountRolesResultPermissionsZonesToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsZonesToHclTerraform = dataCloudflareAccountRolesResultPermissionsZonesToHclTerraform;
exports.dataCloudflareAccountRolesResultPermissionsToTerraform = dataCloudflareAccountRolesResultPermissionsToTerraform;
exports.dataCloudflareAccountRolesResultPermissionsToHclTerraform = dataCloudflareAccountRolesResultPermissionsToHclTerraform;
exports.dataCloudflareAccountRolesResultToTerraform = dataCloudflareAccountRolesResultToTerraform;
exports.dataCloudflareAccountRolesResultToHclTerraform = dataCloudflareAccountRolesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountRolesResultPermissionsAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsAnalyticsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference = DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference;
function dataCloudflareAccountRolesResultPermissionsBillingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsBillingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsBillingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsBillingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsBillingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsBillingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsBillingOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsBillingOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsBillingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsBillingOutputReference = DataCloudflareAccountRolesResultPermissionsBillingOutputReference;
function dataCloudflareAccountRolesResultPermissionsCachePurgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsCachePurgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference = DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference;
function dataCloudflareAccountRolesResultPermissionsDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsDnsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsDnsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsDnsOutputReference = DataCloudflareAccountRolesResultPermissionsDnsOutputReference;
function dataCloudflareAccountRolesResultPermissionsDnsRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsDnsRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference = DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference;
function dataCloudflareAccountRolesResultPermissionsLbToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsLbToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsLbOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsLbOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsLbOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsLbOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsLbOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsLbOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsLbOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsLbOutputReference = DataCloudflareAccountRolesResultPermissionsLbOutputReference;
function dataCloudflareAccountRolesResultPermissionsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsLogsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsLogsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsLogsOutputReference = DataCloudflareAccountRolesResultPermissionsLogsOutputReference;
function dataCloudflareAccountRolesResultPermissionsOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference = DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference;
function dataCloudflareAccountRolesResultPermissionsSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsSslOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsSslOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsSslOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsSslOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsSslOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsSslOutputReference = DataCloudflareAccountRolesResultPermissionsSslOutputReference;
function dataCloudflareAccountRolesResultPermissionsWafToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsWafToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsWafOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsWafOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsWafOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsWafOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsWafOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsWafOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsWafOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsWafOutputReference = DataCloudflareAccountRolesResultPermissionsWafOutputReference;
function dataCloudflareAccountRolesResultPermissionsZoneSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsZoneSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference = DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference;
function dataCloudflareAccountRolesResultPermissionsZonesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsZonesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsZonesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsZonesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsZonesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsZonesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsZonesOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsZonesOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsZonesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsZonesOutputReference = DataCloudflareAccountRolesResultPermissionsZonesOutputReference;
function dataCloudflareAccountRolesResultPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultPermissionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultPermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolesResultPermissionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // analytics - computed: true, optional: false, required: false
        _this._analytics = new DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference(_this, "analytics");
        // billing - computed: true, optional: false, required: false
        _this._billing = new DataCloudflareAccountRolesResultPermissionsBillingOutputReference(_this, "billing");
        // cache_purge - computed: true, optional: false, required: false
        _this._cachePurge = new DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference(_this, "cache_purge");
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareAccountRolesResultPermissionsDnsOutputReference(_this, "dns");
        // dns_records - computed: true, optional: false, required: false
        _this._dnsRecords = new DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference(_this, "dns_records");
        // lb - computed: true, optional: false, required: false
        _this._lb = new DataCloudflareAccountRolesResultPermissionsLbOutputReference(_this, "lb");
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareAccountRolesResultPermissionsLogsOutputReference(_this, "logs");
        // organization - computed: true, optional: false, required: false
        _this._organization = new DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference(_this, "organization");
        // ssl - computed: true, optional: false, required: false
        _this._ssl = new DataCloudflareAccountRolesResultPermissionsSslOutputReference(_this, "ssl");
        // waf - computed: true, optional: false, required: false
        _this._waf = new DataCloudflareAccountRolesResultPermissionsWafOutputReference(_this, "waf");
        // zone_settings - computed: true, optional: false, required: false
        _this._zoneSettings = new DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference(_this, "zone_settings");
        // zones - computed: true, optional: false, required: false
        _this._zones = new DataCloudflareAccountRolesResultPermissionsZonesOutputReference(_this, "zones");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "analytics", {
        get: function () {
            return this._analytics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "billing", {
        get: function () {
            return this._billing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "cachePurge", {
        get: function () {
            return this._cachePurge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "dnsRecords", {
        get: function () {
            return this._dnsRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "lb", {
        get: function () {
            return this._lb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "organization", {
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "waf", {
        get: function () {
            return this._waf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "zoneSettings", {
        get: function () {
            return this._zoneSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultPermissionsOutputReference.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultPermissionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultPermissionsOutputReference = DataCloudflareAccountRolesResultPermissionsOutputReference;
function dataCloudflareAccountRolesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountRolesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permissions - computed: true, optional: false, required: false
        _this._permissions = new DataCloudflareAccountRolesResultPermissionsOutputReference(_this, "permissions");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolesResultOutputReference.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolesResultOutputReference = DataCloudflareAccountRolesResultOutputReference;
var DataCloudflareAccountRolesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountRolesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountRolesResultList.prototype.get = function (index) {
        return new DataCloudflareAccountRolesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountRolesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountRolesResultList = DataCloudflareAccountRolesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles cloudflare_account_roles}
*/
var DataCloudflareAccountRoles = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRoles, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles cloudflare_account_roles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountRolesConfig = {}
    */
    function DataCloudflareAccountRoles(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_roles',
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
        _this._result = new DataCloudflareAccountRolesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountRoles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountRoles to import
    * @param importFromId The id of the existing DataCloudflareAccountRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountRoles to import is found
    */
    DataCloudflareAccountRoles.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_roles", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountRoles.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountRoles.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountRoles.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRoles.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountRoles.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAccountRoles.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRoles.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountRoles.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareAccountRoles.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareAccountRoles.tfResourceType = "cloudflare_account_roles";
    return DataCloudflareAccountRoles;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountRoles = DataCloudflareAccountRoles;
