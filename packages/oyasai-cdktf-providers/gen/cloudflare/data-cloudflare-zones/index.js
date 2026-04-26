"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones
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
exports.DataCloudflareZones = exports.DataCloudflareZonesResultList = exports.DataCloudflareZonesResultOutputReference = exports.DataCloudflareZonesResultTenantUnitOutputReference = exports.DataCloudflareZonesResultTenantOutputReference = exports.DataCloudflareZonesResultPlanOutputReference = exports.DataCloudflareZonesResultOwnerOutputReference = exports.DataCloudflareZonesResultMetaOutputReference = exports.DataCloudflareZonesResultAccountOutputReference = exports.DataCloudflareZonesAccountOutputReference = void 0;
exports.dataCloudflareZonesAccountToTerraform = dataCloudflareZonesAccountToTerraform;
exports.dataCloudflareZonesAccountToHclTerraform = dataCloudflareZonesAccountToHclTerraform;
exports.dataCloudflareZonesResultAccountToTerraform = dataCloudflareZonesResultAccountToTerraform;
exports.dataCloudflareZonesResultAccountToHclTerraform = dataCloudflareZonesResultAccountToHclTerraform;
exports.dataCloudflareZonesResultMetaToTerraform = dataCloudflareZonesResultMetaToTerraform;
exports.dataCloudflareZonesResultMetaToHclTerraform = dataCloudflareZonesResultMetaToHclTerraform;
exports.dataCloudflareZonesResultOwnerToTerraform = dataCloudflareZonesResultOwnerToTerraform;
exports.dataCloudflareZonesResultOwnerToHclTerraform = dataCloudflareZonesResultOwnerToHclTerraform;
exports.dataCloudflareZonesResultPlanToTerraform = dataCloudflareZonesResultPlanToTerraform;
exports.dataCloudflareZonesResultPlanToHclTerraform = dataCloudflareZonesResultPlanToHclTerraform;
exports.dataCloudflareZonesResultTenantToTerraform = dataCloudflareZonesResultTenantToTerraform;
exports.dataCloudflareZonesResultTenantToHclTerraform = dataCloudflareZonesResultTenantToHclTerraform;
exports.dataCloudflareZonesResultTenantUnitToTerraform = dataCloudflareZonesResultTenantUnitToTerraform;
exports.dataCloudflareZonesResultTenantUnitToHclTerraform = dataCloudflareZonesResultTenantUnitToHclTerraform;
exports.dataCloudflareZonesResultToTerraform = dataCloudflareZonesResultToTerraform;
exports.dataCloudflareZonesResultToHclTerraform = dataCloudflareZonesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZonesAccountToTerraform(struct) {
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
function dataCloudflareZonesAccountToHclTerraform(struct) {
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
var DataCloudflareZonesAccountOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesAccountOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesAccountOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesAccountOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesAccountOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZonesAccountOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZonesAccountOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesAccountOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZonesAccountOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZonesAccountOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesAccountOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesAccountOutputReference = DataCloudflareZonesAccountOutputReference;
function dataCloudflareZonesResultAccountToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultAccountToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultAccountOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultAccountOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesResultAccountOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultAccountOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultAccountOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultAccountOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultAccountOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultAccountOutputReference = DataCloudflareZonesResultAccountOutputReference;
function dataCloudflareZonesResultMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesResultMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "cdnOnly", {
        // cdn_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cdn_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "customCertificateQuota", {
        // custom_certificate_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('custom_certificate_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "dnsOnly", {
        // dns_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dns_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "foundationDns", {
        // foundation_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "pageRuleQuota", {
        // page_rule_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('page_rule_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "phishingDetected", {
        // phishing_detected - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('phishing_detected');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultMetaOutputReference.prototype, "step", {
        // step - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('step');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultMetaOutputReference = DataCloudflareZonesResultMetaOutputReference;
function dataCloudflareZonesResultOwnerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultOwnerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultOwnerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultOwnerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesResultOwnerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultOwnerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultOwnerOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOwnerOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOwnerOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultOwnerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultOwnerOutputReference = DataCloudflareZonesResultOwnerOutputReference;
function dataCloudflareZonesResultPlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultPlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultPlanOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultPlanOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesResultPlanOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "canSubscribe", {
        // can_subscribe - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_subscribe');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "externallyManaged", {
        // externally_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('externally_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "isSubscribed", {
        // is_subscribed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_subscribed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "legacyDiscount", {
        // legacy_discount - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('legacy_discount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "legacyId", {
        // legacy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('legacy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultPlanOutputReference.prototype, "price", {
        // price - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('price');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultPlanOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultPlanOutputReference = DataCloudflareZonesResultPlanOutputReference;
function dataCloudflareZonesResultTenantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultTenantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultTenantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultTenantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesResultTenantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultTenantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultTenantOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultTenantOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultTenantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultTenantOutputReference = DataCloudflareZonesResultTenantOutputReference;
function dataCloudflareZonesResultTenantUnitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultTenantUnitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultTenantUnitOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultTenantUnitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZonesResultTenantUnitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultTenantUnitOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultTenantUnitOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultTenantUnitOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultTenantUnitOutputReference = DataCloudflareZonesResultTenantUnitOutputReference;
function dataCloudflareZonesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZonesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZonesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZonesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // account - computed: true, optional: false, required: false
        _this._account = new DataCloudflareZonesResultAccountOutputReference(_this, "account");
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareZonesResultMetaOutputReference(_this, "meta");
        // owner - computed: true, optional: false, required: false
        _this._owner = new DataCloudflareZonesResultOwnerOutputReference(_this, "owner");
        // plan - computed: true, optional: false, required: false
        _this._plan = new DataCloudflareZonesResultPlanOutputReference(_this, "plan");
        // tenant - computed: true, optional: false, required: false
        _this._tenant = new DataCloudflareZonesResultTenantOutputReference(_this, "tenant");
        // tenant_unit - computed: true, optional: false, required: false
        _this._tenantUnit = new DataCloudflareZonesResultTenantUnitOutputReference(_this, "tenant_unit");
        return _this;
    }
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "activatedOn", {
        // activated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('activated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "cnameSuffix", {
        // cname_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "developmentMode", {
        // development_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('development_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "originalDnshost", {
        // original_dnshost - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('original_dnshost');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "originalNameServers", {
        // original_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('original_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "originalRegistrar", {
        // original_registrar - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('original_registrar');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "plan", {
        get: function () {
            return this._plan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "tenantUnit", {
        get: function () {
            return this._tenantUnit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "vanityNameServers", {
        // vanity_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vanity_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZonesResultOutputReference.prototype, "verificationKey", {
        // verification_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('verification_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZonesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZonesResultOutputReference = DataCloudflareZonesResultOutputReference;
var DataCloudflareZonesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZonesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZonesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZonesResultList.prototype.get = function (index) {
        return new DataCloudflareZonesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZonesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZonesResultList = DataCloudflareZonesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones cloudflare_zones}
*/
var DataCloudflareZones = /** @class */ (function (_super) {
    __extends(DataCloudflareZones, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones cloudflare_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZonesConfig = {}
    */
    function DataCloudflareZones(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zones',
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
        // account - computed: false, optional: true, required: false
        _this._account = new DataCloudflareZonesAccountOutputReference(_this, "account");
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZonesResultList(_this, "result", false);
        _this._account.internalValue = config.account;
        _this._direction = config.direction;
        _this._match = config.match;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        _this._order = config.order;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZones resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZones to import
    * @param importFromId The id of the existing DataCloudflareZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZones to import is found
    */
    DataCloudflareZones.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zones", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZones.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.putAccount = function (value) {
        this._account.internalValue = value;
    };
    DataCloudflareZones.prototype.resetAccount = function () {
        this._account.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "accountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._account.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZones.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZones.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareZones.prototype, "statusInput", {
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
    DataCloudflareZones.prototype.synthesizeAttributes = function () {
        return {
            account: dataCloudflareZonesAccountToTerraform(this._account.internalValue),
            direction: cdktf.stringToTerraform(this._direction),
            match: cdktf.stringToTerraform(this._match),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            order: cdktf.stringToTerraform(this._order),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    DataCloudflareZones.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account: {
                value: dataCloudflareZonesAccountToHclTerraform(this._account.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZonesAccount",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareZones.tfResourceType = "cloudflare_zones";
    return DataCloudflareZones;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZones = DataCloudflareZones;
