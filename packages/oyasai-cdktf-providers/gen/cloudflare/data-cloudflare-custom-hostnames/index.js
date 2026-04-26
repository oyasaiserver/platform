"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames
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
exports.DataCloudflareCustomHostnames = exports.DataCloudflareCustomHostnamesResultList = exports.DataCloudflareCustomHostnamesResultOutputReference = exports.DataCloudflareCustomHostnamesResultSslOutputReference = exports.DataCloudflareCustomHostnamesResultSslValidationRecordsList = exports.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference = exports.DataCloudflareCustomHostnamesResultSslValidationErrorsList = exports.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference = exports.DataCloudflareCustomHostnamesResultSslSettingsOutputReference = exports.DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList = exports.DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference = exports.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference = exports.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference = exports.DataCloudflareCustomHostnamesHostnameOutputReference = void 0;
exports.dataCloudflareCustomHostnamesHostnameToTerraform = dataCloudflareCustomHostnamesHostnameToTerraform;
exports.dataCloudflareCustomHostnamesHostnameToHclTerraform = dataCloudflareCustomHostnamesHostnameToHclTerraform;
exports.dataCloudflareCustomHostnamesResultOwnershipVerificationToTerraform = dataCloudflareCustomHostnamesResultOwnershipVerificationToTerraform;
exports.dataCloudflareCustomHostnamesResultOwnershipVerificationToHclTerraform = dataCloudflareCustomHostnamesResultOwnershipVerificationToHclTerraform;
exports.dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToTerraform = dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToTerraform;
exports.dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToHclTerraform = dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToHclTerraform;
exports.dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToTerraform = dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToTerraform;
exports.dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToHclTerraform = dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToHclTerraform;
exports.dataCloudflareCustomHostnamesResultSslSettingsToTerraform = dataCloudflareCustomHostnamesResultSslSettingsToTerraform;
exports.dataCloudflareCustomHostnamesResultSslSettingsToHclTerraform = dataCloudflareCustomHostnamesResultSslSettingsToHclTerraform;
exports.dataCloudflareCustomHostnamesResultSslValidationErrorsToTerraform = dataCloudflareCustomHostnamesResultSslValidationErrorsToTerraform;
exports.dataCloudflareCustomHostnamesResultSslValidationErrorsToHclTerraform = dataCloudflareCustomHostnamesResultSslValidationErrorsToHclTerraform;
exports.dataCloudflareCustomHostnamesResultSslValidationRecordsToTerraform = dataCloudflareCustomHostnamesResultSslValidationRecordsToTerraform;
exports.dataCloudflareCustomHostnamesResultSslValidationRecordsToHclTerraform = dataCloudflareCustomHostnamesResultSslValidationRecordsToHclTerraform;
exports.dataCloudflareCustomHostnamesResultSslToTerraform = dataCloudflareCustomHostnamesResultSslToTerraform;
exports.dataCloudflareCustomHostnamesResultSslToHclTerraform = dataCloudflareCustomHostnamesResultSslToHclTerraform;
exports.dataCloudflareCustomHostnamesResultToTerraform = dataCloudflareCustomHostnamesResultToTerraform;
exports.dataCloudflareCustomHostnamesResultToHclTerraform = dataCloudflareCustomHostnamesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCustomHostnamesHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contain: cdktf.stringToTerraform(struct.contain),
    };
}
function dataCloudflareCustomHostnamesHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contain: {
            value: cdktf.stringToHclTerraform(struct.contain),
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
var DataCloudflareCustomHostnamesHostnameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesHostnameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnamesHostnameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesHostnameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contain !== undefined) {
                hasAnyValues = true;
                internalValueResult.contain = this._contain;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contain = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contain = value.contain;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesHostnameOutputReference.prototype, "contain", {
        get: function () {
            return this.getStringAttribute('contain');
        },
        set: function (value) {
            this._contain = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnamesHostnameOutputReference.prototype.resetContain = function () {
        this._contain = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnamesHostnameOutputReference.prototype, "containInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contain;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesHostnameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesHostnameOutputReference = DataCloudflareCustomHostnamesHostnameOutputReference;
function dataCloudflareCustomHostnamesResultOwnershipVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultOwnershipVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference = DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference;
function dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference = DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference;
function dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference = DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference;
var DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList = DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList;
function dataCloudflareCustomHostnamesResultSslSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultSslSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultSslSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnamesResultSslSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslSettingsOutputReference.prototype, "ciphers", {
        // ciphers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ciphers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslSettingsOutputReference.prototype, "earlyHints", {
        // early_hints - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('early_hints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslSettingsOutputReference.prototype, "http2", {
        // http2 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslSettingsOutputReference.prototype, "minTlsVersion", {
        // min_tls_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('min_tls_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslSettingsOutputReference.prototype, "tls13", {
        // tls_1_3 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tls_1_3');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultSslSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultSslSettingsOutputReference = DataCloudflareCustomHostnamesResultSslSettingsOutputReference;
function dataCloudflareCustomHostnamesResultSslValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultSslValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference = DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference;
var DataCloudflareCustomHostnamesResultSslValidationErrorsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslValidationErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultSslValidationErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnamesResultSslValidationErrorsList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnamesResultSslValidationErrorsList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnamesResultSslValidationErrorsList = DataCloudflareCustomHostnamesResultSslValidationErrorsList;
function dataCloudflareCustomHostnamesResultSslValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultSslValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference = DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference;
var DataCloudflareCustomHostnamesResultSslValidationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslValidationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultSslValidationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnamesResultSslValidationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnamesResultSslValidationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnamesResultSslValidationRecordsList = DataCloudflareCustomHostnamesResultSslValidationRecordsList;
function dataCloudflareCustomHostnamesResultSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultSslOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnamesResultSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dcv_delegation_records - computed: true, optional: false, required: false
        _this._dcvDelegationRecords = new DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList(_this, "dcv_delegation_records", false);
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareCustomHostnamesResultSslSettingsOutputReference(_this, "settings");
        // validation_errors - computed: true, optional: false, required: false
        _this._validationErrors = new DataCloudflareCustomHostnamesResultSslValidationErrorsList(_this, "validation_errors", false);
        // validation_records - computed: true, optional: false, required: false
        _this._validationRecords = new DataCloudflareCustomHostnamesResultSslValidationRecordsList(_this, "validation_records", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "bundleMethod", {
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "certificateAuthority", {
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "customCertificate", {
        // custom_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "customCsrId", {
        // custom_csr_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_csr_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "customKey", {
        // custom_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "dcvDelegationRecords", {
        get: function () {
            return this._dcvDelegationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "validationRecords", {
        get: function () {
            return this._validationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultSslOutputReference.prototype, "wildcard", {
        // wildcard - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('wildcard');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultSslOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultSslOutputReference = DataCloudflareCustomHostnamesResultSslOutputReference;
function dataCloudflareCustomHostnamesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnamesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnamesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // custom_metadata - computed: true, optional: false, required: false
        _this._customMetadata = new cdktf.StringMap(_this, "custom_metadata");
        // ownership_verification - computed: true, optional: false, required: false
        _this._ownershipVerification = new DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference(_this, "ownership_verification");
        // ownership_verification_http - computed: true, optional: false, required: false
        _this._ownershipVerificationHttp = new DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference(_this, "ownership_verification_http");
        // ssl - computed: true, optional: false, required: false
        _this._ssl = new DataCloudflareCustomHostnamesResultSslOutputReference(_this, "ssl");
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "customMetadata", {
        get: function () {
            return this._customMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "customOriginServer", {
        // custom_origin_server - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_origin_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "customOriginSni", {
        // custom_origin_sni - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_origin_sni');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "ownershipVerification", {
        get: function () {
            return this._ownershipVerification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "ownershipVerificationHttp", {
        get: function () {
            return this._ownershipVerificationHttp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnamesResultOutputReference.prototype, "verificationErrors", {
        // verification_errors - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('verification_errors');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnamesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnamesResultOutputReference = DataCloudflareCustomHostnamesResultOutputReference;
var DataCloudflareCustomHostnamesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnamesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnamesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnamesResultList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnamesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnamesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnamesResultList = DataCloudflareCustomHostnamesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames}
*/
var DataCloudflareCustomHostnames = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnames, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomHostnamesConfig = {}
    */
    function DataCloudflareCustomHostnames(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_hostnames',
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
        // hostname - computed: false, optional: true, required: false
        _this._hostname = new DataCloudflareCustomHostnamesHostnameOutputReference(_this, "hostname");
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareCustomHostnamesResultList(_this, "result", false);
        _this._certificateAuthority = config.certificateAuthority;
        _this._customOriginServer = config.customOriginServer;
        _this._direction = config.direction;
        _this._hostname.internalValue = config.hostname;
        _this._hostnameStatus = config.hostnameStatus;
        _this._id = config.id;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        _this._ssl = config.ssl;
        _this._sslStatus = config.sslStatus;
        _this._wildcard = config.wildcard;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostnames to import
    * @param importFromId The id of the existing DataCloudflareCustomHostnames that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomHostnames to import is found
    */
    DataCloudflareCustomHostnames.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostnames", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "certificateAuthority", {
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        set: function (value) {
            this._certificateAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetCertificateAuthority = function () {
        this._certificateAuthority = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "certificateAuthorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "customOriginServer", {
        get: function () {
            return this.getStringAttribute('custom_origin_server');
        },
        set: function (value) {
            this._customOriginServer = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetCustomOriginServer = function () {
        this._customOriginServer = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "customOriginServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customOriginServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "hostname", {
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.putHostname = function (value) {
        this._hostname.internalValue = value;
    };
    DataCloudflareCustomHostnames.prototype.resetHostname = function () {
        this._hostname.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "hostnameStatus", {
        get: function () {
            return this.getStringAttribute('hostname_status');
        },
        set: function (value) {
            this._hostnameStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetHostnameStatus = function () {
        this._hostnameStatus = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "hostnameStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnameStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "ssl", {
        get: function () {
            return this.getNumberAttribute('ssl');
        },
        set: function (value) {
            this._ssl = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetSsl = function () {
        this._ssl = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "sslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "sslStatus", {
        get: function () {
            return this.getStringAttribute('ssl_status');
        },
        set: function (value) {
            this._sslStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetSslStatus = function () {
        this._sslStatus = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "sslStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "wildcard", {
        get: function () {
            return this.getBooleanAttribute('wildcard');
        },
        set: function (value) {
            this._wildcard = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetWildcard = function () {
        this._wildcard = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "wildcardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wildcard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnames.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnames.prototype, "zoneIdInput", {
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
    DataCloudflareCustomHostnames.prototype.synthesizeAttributes = function () {
        return {
            certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
            custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
            direction: cdktf.stringToTerraform(this._direction),
            hostname: dataCloudflareCustomHostnamesHostnameToTerraform(this._hostname.internalValue),
            hostname_status: cdktf.stringToTerraform(this._hostnameStatus),
            id: cdktf.stringToTerraform(this._id),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
            ssl: cdktf.numberToTerraform(this._ssl),
            ssl_status: cdktf.stringToTerraform(this._sslStatus),
            wildcard: cdktf.booleanToTerraform(this._wildcard),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCustomHostnames.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            certificate_authority: {
                value: cdktf.stringToHclTerraform(this._certificateAuthority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_origin_server: {
                value: cdktf.stringToHclTerraform(this._customOriginServer),
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
            hostname: {
                value: dataCloudflareCustomHostnamesHostnameToHclTerraform(this._hostname.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCustomHostnamesHostname",
            },
            hostname_status: {
                value: cdktf.stringToHclTerraform(this._hostnameStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            ssl: {
                value: cdktf.numberToHclTerraform(this._ssl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ssl_status: {
                value: cdktf.stringToHclTerraform(this._sslStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wildcard: {
                value: cdktf.booleanToHclTerraform(this._wildcard),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    DataCloudflareCustomHostnames.tfResourceType = "cloudflare_custom_hostnames";
    return DataCloudflareCustomHostnames;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCustomHostnames = DataCloudflareCustomHostnames;
