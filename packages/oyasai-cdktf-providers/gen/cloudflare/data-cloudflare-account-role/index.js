"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role
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
exports.DataCloudflareAccountRole = exports.DataCloudflareAccountRolePermissionsOutputReference = exports.DataCloudflareAccountRolePermissionsZonesOutputReference = exports.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference = exports.DataCloudflareAccountRolePermissionsWafOutputReference = exports.DataCloudflareAccountRolePermissionsSslOutputReference = exports.DataCloudflareAccountRolePermissionsOrganizationOutputReference = exports.DataCloudflareAccountRolePermissionsLogsOutputReference = exports.DataCloudflareAccountRolePermissionsLbOutputReference = exports.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference = exports.DataCloudflareAccountRolePermissionsDnsOutputReference = exports.DataCloudflareAccountRolePermissionsCachePurgeOutputReference = exports.DataCloudflareAccountRolePermissionsBillingOutputReference = exports.DataCloudflareAccountRolePermissionsAnalyticsOutputReference = void 0;
exports.dataCloudflareAccountRolePermissionsAnalyticsToTerraform = dataCloudflareAccountRolePermissionsAnalyticsToTerraform;
exports.dataCloudflareAccountRolePermissionsAnalyticsToHclTerraform = dataCloudflareAccountRolePermissionsAnalyticsToHclTerraform;
exports.dataCloudflareAccountRolePermissionsBillingToTerraform = dataCloudflareAccountRolePermissionsBillingToTerraform;
exports.dataCloudflareAccountRolePermissionsBillingToHclTerraform = dataCloudflareAccountRolePermissionsBillingToHclTerraform;
exports.dataCloudflareAccountRolePermissionsCachePurgeToTerraform = dataCloudflareAccountRolePermissionsCachePurgeToTerraform;
exports.dataCloudflareAccountRolePermissionsCachePurgeToHclTerraform = dataCloudflareAccountRolePermissionsCachePurgeToHclTerraform;
exports.dataCloudflareAccountRolePermissionsDnsToTerraform = dataCloudflareAccountRolePermissionsDnsToTerraform;
exports.dataCloudflareAccountRolePermissionsDnsToHclTerraform = dataCloudflareAccountRolePermissionsDnsToHclTerraform;
exports.dataCloudflareAccountRolePermissionsDnsRecordsToTerraform = dataCloudflareAccountRolePermissionsDnsRecordsToTerraform;
exports.dataCloudflareAccountRolePermissionsDnsRecordsToHclTerraform = dataCloudflareAccountRolePermissionsDnsRecordsToHclTerraform;
exports.dataCloudflareAccountRolePermissionsLbToTerraform = dataCloudflareAccountRolePermissionsLbToTerraform;
exports.dataCloudflareAccountRolePermissionsLbToHclTerraform = dataCloudflareAccountRolePermissionsLbToHclTerraform;
exports.dataCloudflareAccountRolePermissionsLogsToTerraform = dataCloudflareAccountRolePermissionsLogsToTerraform;
exports.dataCloudflareAccountRolePermissionsLogsToHclTerraform = dataCloudflareAccountRolePermissionsLogsToHclTerraform;
exports.dataCloudflareAccountRolePermissionsOrganizationToTerraform = dataCloudflareAccountRolePermissionsOrganizationToTerraform;
exports.dataCloudflareAccountRolePermissionsOrganizationToHclTerraform = dataCloudflareAccountRolePermissionsOrganizationToHclTerraform;
exports.dataCloudflareAccountRolePermissionsSslToTerraform = dataCloudflareAccountRolePermissionsSslToTerraform;
exports.dataCloudflareAccountRolePermissionsSslToHclTerraform = dataCloudflareAccountRolePermissionsSslToHclTerraform;
exports.dataCloudflareAccountRolePermissionsWafToTerraform = dataCloudflareAccountRolePermissionsWafToTerraform;
exports.dataCloudflareAccountRolePermissionsWafToHclTerraform = dataCloudflareAccountRolePermissionsWafToHclTerraform;
exports.dataCloudflareAccountRolePermissionsZoneSettingsToTerraform = dataCloudflareAccountRolePermissionsZoneSettingsToTerraform;
exports.dataCloudflareAccountRolePermissionsZoneSettingsToHclTerraform = dataCloudflareAccountRolePermissionsZoneSettingsToHclTerraform;
exports.dataCloudflareAccountRolePermissionsZonesToTerraform = dataCloudflareAccountRolePermissionsZonesToTerraform;
exports.dataCloudflareAccountRolePermissionsZonesToHclTerraform = dataCloudflareAccountRolePermissionsZonesToHclTerraform;
exports.dataCloudflareAccountRolePermissionsToTerraform = dataCloudflareAccountRolePermissionsToTerraform;
exports.dataCloudflareAccountRolePermissionsToHclTerraform = dataCloudflareAccountRolePermissionsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountRolePermissionsAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsAnalyticsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsAnalyticsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsAnalyticsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsAnalyticsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsAnalyticsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsAnalyticsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsAnalyticsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsAnalyticsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsAnalyticsOutputReference = DataCloudflareAccountRolePermissionsAnalyticsOutputReference;
function dataCloudflareAccountRolePermissionsBillingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsBillingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsBillingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsBillingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsBillingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsBillingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsBillingOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsBillingOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsBillingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsBillingOutputReference = DataCloudflareAccountRolePermissionsBillingOutputReference;
function dataCloudflareAccountRolePermissionsCachePurgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsCachePurgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsCachePurgeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsCachePurgeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsCachePurgeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsCachePurgeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsCachePurgeOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsCachePurgeOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsCachePurgeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsCachePurgeOutputReference = DataCloudflareAccountRolePermissionsCachePurgeOutputReference;
function dataCloudflareAccountRolePermissionsDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsDnsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsDnsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsDnsOutputReference = DataCloudflareAccountRolePermissionsDnsOutputReference;
function dataCloudflareAccountRolePermissionsDnsRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsDnsRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsDnsRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsDnsRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsDnsRecordsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsDnsRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference = DataCloudflareAccountRolePermissionsDnsRecordsOutputReference;
function dataCloudflareAccountRolePermissionsLbToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsLbToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsLbOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsLbOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsLbOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsLbOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsLbOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsLbOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsLbOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsLbOutputReference = DataCloudflareAccountRolePermissionsLbOutputReference;
function dataCloudflareAccountRolePermissionsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsLogsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsLogsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsLogsOutputReference = DataCloudflareAccountRolePermissionsLogsOutputReference;
function dataCloudflareAccountRolePermissionsOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsOrganizationOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOrganizationOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsOrganizationOutputReference = DataCloudflareAccountRolePermissionsOrganizationOutputReference;
function dataCloudflareAccountRolePermissionsSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsSslOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsSslOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsSslOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsSslOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsSslOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsSslOutputReference = DataCloudflareAccountRolePermissionsSslOutputReference;
function dataCloudflareAccountRolePermissionsWafToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsWafToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsWafOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsWafOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsWafOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsWafOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsWafOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsWafOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsWafOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsWafOutputReference = DataCloudflareAccountRolePermissionsWafOutputReference;
function dataCloudflareAccountRolePermissionsZoneSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsZoneSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsZoneSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsZoneSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsZoneSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsZoneSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference = DataCloudflareAccountRolePermissionsZoneSettingsOutputReference;
function dataCloudflareAccountRolePermissionsZonesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsZonesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsZonesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsZonesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsZonesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsZonesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsZonesOutputReference.prototype, "read", {
        // read - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsZonesOutputReference.prototype, "write", {
        // write - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('write');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsZonesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsZonesOutputReference = DataCloudflareAccountRolePermissionsZonesOutputReference;
function dataCloudflareAccountRolePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountRolePermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountRolePermissionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRolePermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountRolePermissionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // analytics - computed: true, optional: false, required: false
        _this._analytics = new DataCloudflareAccountRolePermissionsAnalyticsOutputReference(_this, "analytics");
        // billing - computed: true, optional: false, required: false
        _this._billing = new DataCloudflareAccountRolePermissionsBillingOutputReference(_this, "billing");
        // cache_purge - computed: true, optional: false, required: false
        _this._cachePurge = new DataCloudflareAccountRolePermissionsCachePurgeOutputReference(_this, "cache_purge");
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareAccountRolePermissionsDnsOutputReference(_this, "dns");
        // dns_records - computed: true, optional: false, required: false
        _this._dnsRecords = new DataCloudflareAccountRolePermissionsDnsRecordsOutputReference(_this, "dns_records");
        // lb - computed: true, optional: false, required: false
        _this._lb = new DataCloudflareAccountRolePermissionsLbOutputReference(_this, "lb");
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareAccountRolePermissionsLogsOutputReference(_this, "logs");
        // organization - computed: true, optional: false, required: false
        _this._organization = new DataCloudflareAccountRolePermissionsOrganizationOutputReference(_this, "organization");
        // ssl - computed: true, optional: false, required: false
        _this._ssl = new DataCloudflareAccountRolePermissionsSslOutputReference(_this, "ssl");
        // waf - computed: true, optional: false, required: false
        _this._waf = new DataCloudflareAccountRolePermissionsWafOutputReference(_this, "waf");
        // zone_settings - computed: true, optional: false, required: false
        _this._zoneSettings = new DataCloudflareAccountRolePermissionsZoneSettingsOutputReference(_this, "zone_settings");
        // zones - computed: true, optional: false, required: false
        _this._zones = new DataCloudflareAccountRolePermissionsZonesOutputReference(_this, "zones");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "analytics", {
        get: function () {
            return this._analytics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "billing", {
        get: function () {
            return this._billing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "cachePurge", {
        get: function () {
            return this._cachePurge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "dnsRecords", {
        get: function () {
            return this._dnsRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "lb", {
        get: function () {
            return this._lb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "organization", {
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "waf", {
        get: function () {
            return this._waf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "zoneSettings", {
        get: function () {
            return this._zoneSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRolePermissionsOutputReference.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountRolePermissionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountRolePermissionsOutputReference = DataCloudflareAccountRolePermissionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role cloudflare_account_role}
*/
var DataCloudflareAccountRole = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role cloudflare_account_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountRoleConfig
    */
    function DataCloudflareAccountRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_role',
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
        // permissions - computed: true, optional: false, required: false
        _this._permissions = new DataCloudflareAccountRolePermissionsOutputReference(_this, "permissions");
        _this._accountId = config.accountId;
        _this._roleId = config.roleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountRole to import
    * @param importFromId The id of the existing DataCloudflareAccountRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountRole to import is found
    */
    DataCloudflareAccountRole.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_role", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountRole.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountRole.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountRole.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRole.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRole.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRole.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRole.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRole.prototype, "roleId", {
        get: function () {
            return this.getStringAttribute('role_id');
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountRole.prototype, "roleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountRole.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            role_id: cdktf.stringToTerraform(this._roleId),
        };
    };
    DataCloudflareAccountRole.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_id: {
                value: cdktf.stringToHclTerraform(this._roleId),
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
    DataCloudflareAccountRole.tfResourceType = "cloudflare_account_role";
    return DataCloudflareAccountRole;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountRole = DataCloudflareAccountRole;
