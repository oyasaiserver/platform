"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone
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
exports.DataCloudflareZone = exports.DataCloudflareZoneTenantUnitOutputReference = exports.DataCloudflareZoneTenantOutputReference = exports.DataCloudflareZonePlanOutputReference = exports.DataCloudflareZoneOwnerOutputReference = exports.DataCloudflareZoneMetaOutputReference = exports.DataCloudflareZoneFilterOutputReference = exports.DataCloudflareZoneFilterAccountOutputReference = exports.DataCloudflareZoneAccountOutputReference = void 0;
exports.dataCloudflareZoneAccountToTerraform = dataCloudflareZoneAccountToTerraform;
exports.dataCloudflareZoneAccountToHclTerraform = dataCloudflareZoneAccountToHclTerraform;
exports.dataCloudflareZoneFilterAccountToTerraform = dataCloudflareZoneFilterAccountToTerraform;
exports.dataCloudflareZoneFilterAccountToHclTerraform = dataCloudflareZoneFilterAccountToHclTerraform;
exports.dataCloudflareZoneFilterToTerraform = dataCloudflareZoneFilterToTerraform;
exports.dataCloudflareZoneFilterToHclTerraform = dataCloudflareZoneFilterToHclTerraform;
exports.dataCloudflareZoneMetaToTerraform = dataCloudflareZoneMetaToTerraform;
exports.dataCloudflareZoneMetaToHclTerraform = dataCloudflareZoneMetaToHclTerraform;
exports.dataCloudflareZoneOwnerToTerraform = dataCloudflareZoneOwnerToTerraform;
exports.dataCloudflareZoneOwnerToHclTerraform = dataCloudflareZoneOwnerToHclTerraform;
exports.dataCloudflareZonePlanToTerraform = dataCloudflareZonePlanToTerraform;
exports.dataCloudflareZonePlanToHclTerraform = dataCloudflareZonePlanToHclTerraform;
exports.dataCloudflareZoneTenantToTerraform = dataCloudflareZoneTenantToTerraform;
exports.dataCloudflareZoneTenantToHclTerraform = dataCloudflareZoneTenantToHclTerraform;
exports.dataCloudflareZoneTenantUnitToTerraform = dataCloudflareZoneTenantUnitToTerraform;
exports.dataCloudflareZoneTenantUnitToHclTerraform = dataCloudflareZoneTenantUnitToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZoneAccountToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneAccountToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneAccountOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneAccountOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneAccountOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneAccountOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneAccountOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneAccountOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneAccountOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneAccountOutputReference = DataCloudflareZoneAccountOutputReference;
function dataCloudflareZoneFilterAccountToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function dataCloudflareZoneFilterAccountToHclTerraform(struct) {
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
var DataCloudflareZoneFilterAccountOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneFilterAccountOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneFilterAccountOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneFilterAccountOutputReference.prototype, "internalValue", {
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
                this._id = value.id;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterAccountOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterAccountOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterAccountOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterAccountOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterAccountOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterAccountOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneFilterAccountOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneFilterAccountOutputReference = DataCloudflareZoneFilterAccountOutputReference;
function dataCloudflareZoneFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account: dataCloudflareZoneFilterAccountToTerraform(struct.account),
        direction: cdktf.stringToTerraform(struct.direction),
        match: cdktf.stringToTerraform(struct.match),
        name: cdktf.stringToTerraform(struct.name),
        order: cdktf.stringToTerraform(struct.order),
        status: cdktf.stringToTerraform(struct.status),
    };
}
function dataCloudflareZoneFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        account: {
            value: dataCloudflareZoneFilterAccountToHclTerraform(struct.account),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareZoneFilterAccount",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
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
var DataCloudflareZoneFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // account - computed: false, optional: true, required: false
        _this._account = new DataCloudflareZoneFilterAccountOutputReference(_this, "account");
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._account) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.account = (_b = this._account) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._match !== undefined) {
                hasAnyValues = true;
                internalValueResult.match = this._match;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
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
                this._account.internalValue = undefined;
                this._direction = undefined;
                this._match = undefined;
                this._name = undefined;
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
                this._account.internalValue = value.account;
                this._direction = value.direction;
                this._match = value.match;
                this._name = value.name;
                this._order = value.order;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterOutputReference.prototype.putAccount = function (value) {
        this._account.internalValue = value;
    };
    DataCloudflareZoneFilterOutputReference.prototype.resetAccount = function () {
        this._account.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "accountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._account.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterOutputReference.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareZoneFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneFilterOutputReference = DataCloudflareZoneFilterOutputReference;
function dataCloudflareZoneMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "cdnOnly", {
        // cdn_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cdn_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "customCertificateQuota", {
        // custom_certificate_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('custom_certificate_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "dnsOnly", {
        // dns_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dns_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "foundationDns", {
        // foundation_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "pageRuleQuota", {
        // page_rule_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('page_rule_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "phishingDetected", {
        // phishing_detected - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('phishing_detected');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneMetaOutputReference.prototype, "step", {
        // step - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('step');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneMetaOutputReference = DataCloudflareZoneMetaOutputReference;
function dataCloudflareZoneOwnerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneOwnerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneOwnerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneOwnerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneOwnerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneOwnerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneOwnerOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneOwnerOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneOwnerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneOwnerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneOwnerOutputReference = DataCloudflareZoneOwnerOutputReference;
function dataCloudflareZonePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonePlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonePlanOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonePlanOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonePlanOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "canSubscribe", {
        // can_subscribe - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_subscribe');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "externallyManaged", {
        // externally_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('externally_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "isSubscribed", {
        // is_subscribed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_subscribed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "legacyDiscount", {
        // legacy_discount - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('legacy_discount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "legacyId", {
        // legacy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('legacy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonePlanOutputReference.prototype, "price", {
        // price - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('price');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonePlanOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonePlanOutputReference = DataCloudflareZonePlanOutputReference;
function dataCloudflareZoneTenantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneTenantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneTenantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneTenantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneTenantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneTenantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneTenantOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneTenantOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneTenantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneTenantOutputReference = DataCloudflareZoneTenantOutputReference;
function dataCloudflareZoneTenantUnitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneTenantUnitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneTenantUnitOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneTenantUnitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneTenantUnitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneTenantUnitOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneTenantUnitOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneTenantUnitOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneTenantUnitOutputReference = DataCloudflareZoneTenantUnitOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone cloudflare_zone}
*/
var DataCloudflareZone = /** @class */ (function (_super) {
    __extends(DataCloudflareZone, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone cloudflare_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneConfig = {}
    */
    function DataCloudflareZone(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone',
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
        // account - computed: true, optional: false, required: false
        _this._account = new DataCloudflareZoneAccountOutputReference(_this, "account");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZoneFilterOutputReference(_this, "filter");
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareZoneMetaOutputReference(_this, "meta");
        // owner - computed: true, optional: false, required: false
        _this._owner = new DataCloudflareZoneOwnerOutputReference(_this, "owner");
        // plan - computed: true, optional: false, required: false
        _this._plan = new DataCloudflareZonePlanOutputReference(_this, "plan");
        // tenant - computed: true, optional: false, required: false
        _this._tenant = new DataCloudflareZoneTenantOutputReference(_this, "tenant");
        // tenant_unit - computed: true, optional: false, required: false
        _this._tenantUnit = new DataCloudflareZoneTenantUnitOutputReference(_this, "tenant_unit");
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZone to import
    * @param importFromId The id of the existing DataCloudflareZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZone to import is found
    */
    DataCloudflareZone.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZone.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "activatedOn", {
        // activated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('activated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "cnameSuffix", {
        // cname_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "developmentMode", {
        // development_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('development_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZone.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZone.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZone.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "originalDnshost", {
        // original_dnshost - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('original_dnshost');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "originalNameServers", {
        // original_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('original_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "originalRegistrar", {
        // original_registrar - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('original_registrar');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "plan", {
        get: function () {
            return this._plan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "tenantUnit", {
        get: function () {
            return this._tenantUnit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "vanityNameServers", {
        // vanity_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vanity_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "verificationKey", {
        // verification_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('verification_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZone.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZone.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZone.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZone.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareZoneFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZone.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareZoneFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZoneFilter",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareZone.tfResourceType = "cloudflare_zone";
    return DataCloudflareZone;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZone = DataCloudflareZone;
