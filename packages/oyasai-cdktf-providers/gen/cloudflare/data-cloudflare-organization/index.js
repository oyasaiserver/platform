"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization
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
exports.DataCloudflareOrganization = exports.DataCloudflareOrganizationProfileOutputReference = exports.DataCloudflareOrganizationParentOutputReference = exports.DataCloudflareOrganizationMetaOutputReference = exports.DataCloudflareOrganizationMetaFlagsOutputReference = exports.DataCloudflareOrganizationFilterOutputReference = exports.DataCloudflareOrganizationFilterParentOutputReference = exports.DataCloudflareOrganizationFilterNameOutputReference = exports.DataCloudflareOrganizationFilterContainingOutputReference = void 0;
exports.dataCloudflareOrganizationFilterContainingToTerraform = dataCloudflareOrganizationFilterContainingToTerraform;
exports.dataCloudflareOrganizationFilterContainingToHclTerraform = dataCloudflareOrganizationFilterContainingToHclTerraform;
exports.dataCloudflareOrganizationFilterNameToTerraform = dataCloudflareOrganizationFilterNameToTerraform;
exports.dataCloudflareOrganizationFilterNameToHclTerraform = dataCloudflareOrganizationFilterNameToHclTerraform;
exports.dataCloudflareOrganizationFilterParentToTerraform = dataCloudflareOrganizationFilterParentToTerraform;
exports.dataCloudflareOrganizationFilterParentToHclTerraform = dataCloudflareOrganizationFilterParentToHclTerraform;
exports.dataCloudflareOrganizationFilterToTerraform = dataCloudflareOrganizationFilterToTerraform;
exports.dataCloudflareOrganizationFilterToHclTerraform = dataCloudflareOrganizationFilterToHclTerraform;
exports.dataCloudflareOrganizationMetaFlagsToTerraform = dataCloudflareOrganizationMetaFlagsToTerraform;
exports.dataCloudflareOrganizationMetaFlagsToHclTerraform = dataCloudflareOrganizationMetaFlagsToHclTerraform;
exports.dataCloudflareOrganizationMetaToTerraform = dataCloudflareOrganizationMetaToTerraform;
exports.dataCloudflareOrganizationMetaToHclTerraform = dataCloudflareOrganizationMetaToHclTerraform;
exports.dataCloudflareOrganizationParentToTerraform = dataCloudflareOrganizationParentToTerraform;
exports.dataCloudflareOrganizationParentToHclTerraform = dataCloudflareOrganizationParentToHclTerraform;
exports.dataCloudflareOrganizationProfileToTerraform = dataCloudflareOrganizationProfileToTerraform;
exports.dataCloudflareOrganizationProfileToHclTerraform = dataCloudflareOrganizationProfileToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareOrganizationFilterContainingToTerraform(struct) {
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
function dataCloudflareOrganizationFilterContainingToHclTerraform(struct) {
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
var DataCloudflareOrganizationFilterContainingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationFilterContainingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationFilterContainingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "account", {
        get: function () {
            return this.getStringAttribute('account');
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterContainingOutputReference.prototype.resetAccount = function () {
        this._account = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "accountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "organization", {
        get: function () {
            return this.getStringAttribute('organization');
        },
        set: function (value) {
            this._organization = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterContainingOutputReference.prototype.resetOrganization = function () {
        this._organization = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "organizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterContainingOutputReference.prototype.resetUser = function () {
        this._user = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterContainingOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationFilterContainingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationFilterContainingOutputReference = DataCloudflareOrganizationFilterContainingOutputReference;
function dataCloudflareOrganizationFilterNameToTerraform(struct) {
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
function dataCloudflareOrganizationFilterNameToHclTerraform(struct) {
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
var DataCloudflareOrganizationFilterNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationFilterNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationFilterNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterNameOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "endsWith", {
        get: function () {
            return this.getStringAttribute('ends_with');
        },
        set: function (value) {
            this._endsWith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterNameOutputReference.prototype.resetEndsWith = function () {
        this._endsWith = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "endsWithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endsWith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "startsWith", {
        get: function () {
            return this.getStringAttribute('starts_with');
        },
        set: function (value) {
            this._startsWith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterNameOutputReference.prototype.resetStartsWith = function () {
        this._startsWith = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterNameOutputReference.prototype, "startsWithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startsWith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationFilterNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationFilterNameOutputReference = DataCloudflareOrganizationFilterNameOutputReference;
function dataCloudflareOrganizationFilterParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function dataCloudflareOrganizationFilterParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var DataCloudflareOrganizationFilterParentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationFilterParentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationFilterParentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationFilterParentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterParentOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterParentOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterParentOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationFilterParentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationFilterParentOutputReference = DataCloudflareOrganizationFilterParentOutputReference;
function dataCloudflareOrganizationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        containing: dataCloudflareOrganizationFilterContainingToTerraform(struct.containing),
        id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.id),
        name: dataCloudflareOrganizationFilterNameToTerraform(struct.name),
        page_size: cdktf.numberToTerraform(struct.pageSize),
        page_token: cdktf.stringToTerraform(struct.pageToken),
        parent: dataCloudflareOrganizationFilterParentToTerraform(struct.parent),
    };
}
function dataCloudflareOrganizationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        containing: {
            value: dataCloudflareOrganizationFilterContainingToHclTerraform(struct.containing),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareOrganizationFilterContaining",
        },
        id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.id),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: dataCloudflareOrganizationFilterNameToHclTerraform(struct.name),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareOrganizationFilterName",
        },
        page_size: {
            value: cdktf.numberToHclTerraform(struct.pageSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        page_token: {
            value: cdktf.stringToHclTerraform(struct.pageToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parent: {
            value: dataCloudflareOrganizationFilterParentToHclTerraform(struct.parent),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareOrganizationFilterParent",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareOrganizationFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // containing - computed: false, optional: true, required: false
        _this._containing = new DataCloudflareOrganizationFilterContainingOutputReference(_this, "containing");
        // name - computed: false, optional: true, required: false
        _this._name = new DataCloudflareOrganizationFilterNameOutputReference(_this, "name");
        // parent - computed: false, optional: true, required: false
        _this._parent = new DataCloudflareOrganizationFilterParentOutputReference(_this, "parent");
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._containing) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.containing = (_b = this._containing) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (((_c = this._name) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = (_d = this._name) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._pageSize !== undefined) {
                hasAnyValues = true;
                internalValueResult.pageSize = this._pageSize;
            }
            if (this._pageToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.pageToken = this._pageToken;
            }
            if (((_e = this._parent) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.parent = (_f = this._parent) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._containing.internalValue = undefined;
                this._id = undefined;
                this._name.internalValue = undefined;
                this._pageSize = undefined;
                this._pageToken = undefined;
                this._parent.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._containing.internalValue = value.containing;
                this._id = value.id;
                this._name.internalValue = value.name;
                this._pageSize = value.pageSize;
                this._pageToken = value.pageToken;
                this._parent.internalValue = value.parent;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "containing", {
        get: function () {
            return this._containing;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterOutputReference.prototype.putContaining = function (value) {
        this._containing.internalValue = value;
    };
    DataCloudflareOrganizationFilterOutputReference.prototype.resetContaining = function () {
        this._containing.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "containingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containing.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "id", {
        get: function () {
            return this.getListAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterOutputReference.prototype.putName = function (value) {
        this._name.internalValue = value;
    };
    DataCloudflareOrganizationFilterOutputReference.prototype.resetName = function () {
        this._name.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "pageSize", {
        get: function () {
            return this.getNumberAttribute('page_size');
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterOutputReference.prototype.resetPageSize = function () {
        this._pageSize = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "pageSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pageSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "pageToken", {
        get: function () {
            return this.getStringAttribute('page_token');
        },
        set: function (value) {
            this._pageToken = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterOutputReference.prototype.resetPageToken = function () {
        this._pageToken = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "pageTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pageToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganizationFilterOutputReference.prototype.putParent = function (value) {
        this._parent.internalValue = value;
    };
    DataCloudflareOrganizationFilterOutputReference.prototype.resetParent = function () {
        this._parent.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganizationFilterOutputReference.prototype, "parentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parent.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationFilterOutputReference = DataCloudflareOrganizationFilterOutputReference;
function dataCloudflareOrganizationMetaFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationMetaFlagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationMetaFlagsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationMetaFlagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationMetaFlagsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationMetaFlagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationMetaFlagsOutputReference.prototype, "accountCreation", {
        // account_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationMetaFlagsOutputReference.prototype, "accountDeletion", {
        // account_deletion - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_deletion');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationMetaFlagsOutputReference.prototype, "accountMigration", {
        // account_migration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_migration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationMetaFlagsOutputReference.prototype, "accountMobility", {
        // account_mobility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_mobility');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationMetaFlagsOutputReference.prototype, "subOrgCreation", {
        // sub_org_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sub_org_creation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationMetaFlagsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationMetaFlagsOutputReference = DataCloudflareOrganizationMetaFlagsOutputReference;
function dataCloudflareOrganizationMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // flags - computed: true, optional: false, required: false
        _this._flags = new DataCloudflareOrganizationMetaFlagsOutputReference(_this, "flags");
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationMetaOutputReference.prototype, "flags", {
        get: function () {
            return this._flags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationMetaOutputReference.prototype, "managedBy", {
        // managed_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('managed_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationMetaOutputReference = DataCloudflareOrganizationMetaOutputReference;
function dataCloudflareOrganizationParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationParentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationParentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationParentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationParentOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationParentOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationParentOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationParentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationParentOutputReference = DataCloudflareOrganizationParentOutputReference;
function dataCloudflareOrganizationProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOrganizationProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOrganizationProfileOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationProfileOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOrganizationProfileOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOrganizationProfileOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOrganizationProfileOutputReference.prototype, "businessAddress", {
        // business_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileOutputReference.prototype, "businessEmail", {
        // business_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileOutputReference.prototype, "businessName", {
        // business_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileOutputReference.prototype, "businessPhone", {
        // business_phone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileOutputReference.prototype, "externalMetadata", {
        // external_metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_metadata');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOrganizationProfileOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOrganizationProfileOutputReference = DataCloudflareOrganizationProfileOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization cloudflare_organization}
*/
var DataCloudflareOrganization = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization cloudflare_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationConfig = {}
    */
    function DataCloudflareOrganization(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_organization',
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
        _this._filter = new DataCloudflareOrganizationFilterOutputReference(_this, "filter");
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareOrganizationMetaOutputReference(_this, "meta");
        // parent - computed: true, optional: false, required: false
        _this._parent = new DataCloudflareOrganizationParentOutputReference(_this, "parent");
        // profile - computed: true, optional: false, required: false
        _this._profile = new DataCloudflareOrganizationProfileOutputReference(_this, "profile");
        _this._filter.internalValue = config.filter;
        _this._organizationId = config.organizationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganization to import
    * @param importFromId The id of the existing DataCloudflareOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganization to import is found
    */
    DataCloudflareOrganization.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareOrganization.prototype, "createTime", {
        // ==========
        // ATTRIBUTES
        // ==========
        // create_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganization.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareOrganization.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOrganization.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "organizationId", {
        get: function () {
            return this.getStringAttribute('organization_id');
        },
        set: function (value) {
            this._organizationId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOrganization.prototype.resetOrganizationId = function () {
        this._organizationId = undefined;
    };
    Object.defineProperty(DataCloudflareOrganization.prototype, "organizationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organizationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganization.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareOrganization.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareOrganizationFilterToTerraform(this._filter.internalValue),
            organization_id: cdktf.stringToTerraform(this._organizationId),
        };
    };
    DataCloudflareOrganization.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareOrganizationFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationFilter",
            },
            organization_id: {
                value: cdktf.stringToHclTerraform(this._organizationId),
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
    DataCloudflareOrganization.tfResourceType = "cloudflare_organization";
    return DataCloudflareOrganization;
}(cdktf.TerraformDataSource));
exports.DataCloudflareOrganization = DataCloudflareOrganization;
