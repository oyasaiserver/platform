"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations
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
exports.DataCloudflareOrganizations = exports.DataCloudflareOrganizationsResultList = exports.DataCloudflareOrganizationsResultOutputReference = exports.DataCloudflareOrganizationsResultProfileOutputReference = exports.DataCloudflareOrganizationsResultParentOutputReference = exports.DataCloudflareOrganizationsResultMetaOutputReference = exports.DataCloudflareOrganizationsResultMetaFlagsOutputReference = exports.DataCloudflareOrganizationsParentOutputReference = exports.DataCloudflareOrganizationsNameOutputReference = exports.DataCloudflareOrganizationsContainingOutputReference = void 0;
exports.dataCloudflareOrganizationsContainingToTerraform = dataCloudflareOrganizationsContainingToTerraform;
exports.dataCloudflareOrganizationsContainingToHclTerraform = dataCloudflareOrganizationsContainingToHclTerraform;
exports.dataCloudflareOrganizationsNameToTerraform = dataCloudflareOrganizationsNameToTerraform;
exports.dataCloudflareOrganizationsNameToHclTerraform = dataCloudflareOrganizationsNameToHclTerraform;
exports.dataCloudflareOrganizationsParentToTerraform = dataCloudflareOrganizationsParentToTerraform;
exports.dataCloudflareOrganizationsParentToHclTerraform = dataCloudflareOrganizationsParentToHclTerraform;
exports.dataCloudflareOrganizationsResultMetaFlagsToTerraform = dataCloudflareOrganizationsResultMetaFlagsToTerraform;
exports.dataCloudflareOrganizationsResultMetaFlagsToHclTerraform = dataCloudflareOrganizationsResultMetaFlagsToHclTerraform;
exports.dataCloudflareOrganizationsResultMetaToTerraform = dataCloudflareOrganizationsResultMetaToTerraform;
exports.dataCloudflareOrganizationsResultMetaToHclTerraform = dataCloudflareOrganizationsResultMetaToHclTerraform;
exports.dataCloudflareOrganizationsResultParentToTerraform = dataCloudflareOrganizationsResultParentToTerraform;
exports.dataCloudflareOrganizationsResultParentToHclTerraform = dataCloudflareOrganizationsResultParentToHclTerraform;
exports.dataCloudflareOrganizationsResultProfileToTerraform = dataCloudflareOrganizationsResultProfileToTerraform;
exports.dataCloudflareOrganizationsResultProfileToHclTerraform = dataCloudflareOrganizationsResultProfileToHclTerraform;
exports.dataCloudflareOrganizationsResultToTerraform = dataCloudflareOrganizationsResultToTerraform;
exports.dataCloudflareOrganizationsResultToHclTerraform = dataCloudflareOrganizationsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareOrganizationsContainingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account: cdktf.stringToTerraform(struct.account),
        organization: cdktf.stringToTerraform(struct.organization),
        user: cdktf.stringToTerraform(struct.user),
    };
}
function dataCloudflareOrganizationsContainingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        account: {
            value: cdktf.stringToHclTerraform(struct.account),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization: {
            value: cdktf.stringToHclTerraform(struct.organization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
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
var DataCloudflareOrganizationsContainingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsContainingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsContainingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._account !== undefined) {
                hasAnyValues = true;
                internalValueResult.account = this._account;
            }
            if (this._organization !== undefined) {
                hasAnyValues = true;
                internalValueResult.organization = this._organization;
            }
            if (this._user !== undefined) {
                hasAnyValues = true;
                internalValueResult.user = this._user;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._account = undefined;
                this._organization = undefined;
                this._user = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._account = value.account;
                this._organization = value.organization;
                this._user = value.user;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "account", {
        get: function () {
            return this.getStringAttribute('account');
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationsContainingOutputReference.prototype.resetAccount = function () {
        this._account = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "accountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "organization", {
        get: function () {
            return this.getStringAttribute('organization');
        },
        set: function (value) {
            this._organization = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationsContainingOutputReference.prototype.resetOrganization = function () {
        this._organization = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "organizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationsContainingOutputReference.prototype.resetUser = function () {
        this._user = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationsContainingOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsContainingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsContainingOutputReference = DataCloudflareOrganizationsContainingOutputReference;
function dataCloudflareOrganizationsNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        ends_with: cdktf.stringToTerraform(struct.endsWith),
        starts_with: cdktf.stringToTerraform(struct.startsWith),
    };
}
function dataCloudflareOrganizationsNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ends_with: {
            value: cdktf.stringToHclTerraform(struct.endsWith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        starts_with: {
            value: cdktf.stringToHclTerraform(struct.startsWith),
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
var DataCloudflareOrganizationsNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endsWith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endsWith = this._endsWith;
            }
            if (this._startsWith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startsWith = this._startsWith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contains = undefined;
                this._endsWith = undefined;
                this._startsWith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contains = value.contains;
                this._endsWith = value.endsWith;
                this._startsWith = value.startsWith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationsNameOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "endsWith", {
        get: function () {
            return this.getStringAttribute('ends_with');
        },
        set: function (value) {
            this._endsWith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationsNameOutputReference.prototype.resetEndsWith = function () {
        this._endsWith = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "endsWithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endsWith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "startsWith", {
        get: function () {
            return this.getStringAttribute('starts_with');
        },
        set: function (value) {
            this._startsWith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationsNameOutputReference.prototype.resetStartsWith = function () {
        this._startsWith = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationsNameOutputReference.prototype, "startsWithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startsWith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsNameOutputReference = DataCloudflareOrganizationsNameOutputReference;
function dataCloudflareOrganizationsParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationsParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationsParentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsParentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsParentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsParentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsParentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsParentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsParentOutputReference = DataCloudflareOrganizationsParentOutputReference;
function dataCloudflareOrganizationsResultMetaFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationsResultMetaFlagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationsResultMetaFlagsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsResultMetaFlagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsResultMetaFlagsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsResultMetaFlagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationsResultMetaFlagsOutputReference.prototype, "accountCreation", {
        // account_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultMetaFlagsOutputReference.prototype, "accountDeletion", {
        // account_deletion - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_deletion');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultMetaFlagsOutputReference.prototype, "accountMigration", {
        // account_migration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_migration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultMetaFlagsOutputReference.prototype, "accountMobility", {
        // account_mobility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_mobility');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultMetaFlagsOutputReference.prototype, "subOrgCreation", {
        // sub_org_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sub_org_creation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsResultMetaFlagsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsResultMetaFlagsOutputReference = DataCloudflareOrganizationsResultMetaFlagsOutputReference;
function dataCloudflareOrganizationsResultMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationsResultMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationsResultMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsResultMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsResultMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // flags - computed: true, optional: false, required: false
        _this._flags = new DataCloudflareOrganizationsResultMetaFlagsOutputReference(_this, "flags");
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsResultMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationsResultMetaOutputReference.prototype, "flags", {
        get: function () {
            return this._flags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultMetaOutputReference.prototype, "managedBy", {
        // managed_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('managed_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsResultMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsResultMetaOutputReference = DataCloudflareOrganizationsResultMetaOutputReference;
function dataCloudflareOrganizationsResultParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationsResultParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationsResultParentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsResultParentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsResultParentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsResultParentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationsResultParentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultParentOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsResultParentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsResultParentOutputReference = DataCloudflareOrganizationsResultParentOutputReference;
function dataCloudflareOrganizationsResultProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationsResultProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationsResultProfileOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsResultProfileOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationsResultProfileOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsResultProfileOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationsResultProfileOutputReference.prototype, "businessAddress", {
        // business_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultProfileOutputReference.prototype, "businessEmail", {
        // business_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultProfileOutputReference.prototype, "businessName", {
        // business_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultProfileOutputReference.prototype, "businessPhone", {
        // business_phone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultProfileOutputReference.prototype, "externalMetadata", {
        // external_metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_metadata');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsResultProfileOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsResultProfileOutputReference = DataCloudflareOrganizationsResultProfileOutputReference;
function dataCloudflareOrganizationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareOrganizationsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareOrganizationsResultMetaOutputReference(_this, "meta");
        // parent - computed: true, optional: false, required: false
        _this._parent = new DataCloudflareOrganizationsResultParentOutputReference(_this, "parent");
        // profile - computed: true, optional: false, required: false
        _this._profile = new DataCloudflareOrganizationsResultProfileOutputReference(_this, "profile");
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "createTime", {
        // create_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationsResultOutputReference.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationsResultOutputReference = DataCloudflareOrganizationsResultOutputReference;
var DataCloudflareOrganizationsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareOrganizationsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareOrganizationsResultList.prototype.get = function (index) {
        return new DataCloudflareOrganizationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareOrganizationsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareOrganizationsResultList = DataCloudflareOrganizationsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations cloudflare_organizations}
*/
var DataCloudflareOrganizations = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations cloudflare_organizations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationsConfig = {}
    */
    function DataCloudflareOrganizations(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_organizations',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // containing - computed: false, optional: true, required: false
        _this._containing = new DataCloudflareOrganizationsContainingOutputReference(_this, "containing");
        // name - computed: false, optional: true, required: false
        _this._name = new DataCloudflareOrganizationsNameOutputReference(_this, "name");
        // parent - computed: false, optional: true, required: false
        _this._parent = new DataCloudflareOrganizationsParentOutputReference(_this, "parent");
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareOrganizationsResultList(_this, "result", false);
        _this._containing.internalValue = config.containing;
        _this._id = config.id;
        _this._maxItems = config.maxItems;
        _this._name.internalValue = config.name;
        _this._pageSize = config.pageSize;
        _this._pageToken = config.pageToken;
        _this._parent.internalValue = config.parent;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganizations to import
    * @param importFromId The id of the existing DataCloudflareOrganizations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganizations to import is found
    */
    DataCloudflareOrganizations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organizations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "containing", {
        get: function () {
            return this._containing;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.putContaining = function (value) {
        this._containing.internalValue = value;
    };
    DataCloudflareOrganizations.prototype.resetContaining = function () {
        this._containing.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "containingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containing.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "id", {
        get: function () {
            return this.getListAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.putName = function (value) {
        this._name.internalValue = value;
    };
    DataCloudflareOrganizations.prototype.resetName = function () {
        this._name.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "pageSize", {
        get: function () {
            return this.getNumberAttribute('page_size');
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.resetPageSize = function () {
        this._pageSize = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "pageSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pageSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "pageToken", {
        get: function () {
            return this.getStringAttribute('page_token');
        },
        set: function (value) {
            this._pageToken = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.resetPageToken = function () {
        this._pageToken = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "pageTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pageToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizations.prototype.putParent = function (value) {
        this._parent.internalValue = value;
    };
    DataCloudflareOrganizations.prototype.resetParent = function () {
        this._parent.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizations.prototype, "parentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parent.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizations.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareOrganizations.prototype.synthesizeAttributes = function () {
        return {
            containing: dataCloudflareOrganizationsContainingToTerraform(this._containing.internalValue),
            id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._id),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: dataCloudflareOrganizationsNameToTerraform(this._name.internalValue),
            page_size: cdktf.numberToTerraform(this._pageSize),
            page_token: cdktf.stringToTerraform(this._pageToken),
            parent: dataCloudflareOrganizationsParentToTerraform(this._parent.internalValue),
        };
    };
    DataCloudflareOrganizations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            containing: {
                value: dataCloudflareOrganizationsContainingToHclTerraform(this._containing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationsContaining",
            },
            id: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._id),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: dataCloudflareOrganizationsNameToHclTerraform(this._name.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationsName",
            },
            page_size: {
                value: cdktf.numberToHclTerraform(this._pageSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            page_token: {
                value: cdktf.stringToHclTerraform(this._pageToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent: {
                value: dataCloudflareOrganizationsParentToHclTerraform(this._parent.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationsParent",
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
    DataCloudflareOrganizations.tfResourceType = "cloudflare_organizations";
    return DataCloudflareOrganizations;
}(cdktf.TerraformDataSource));
exports.DataCloudflareOrganizations = DataCloudflareOrganizations;
