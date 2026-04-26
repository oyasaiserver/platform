"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy
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
exports.CertManagerCertificatePolicy = exports.CertManagerCertificatePolicyValidityOutputReference = exports.CertManagerCertificatePolicySubjectList = exports.CertManagerCertificatePolicySubjectOutputReference = exports.CertManagerCertificatePolicySansList = exports.CertManagerCertificatePolicySansOutputReference = exports.CertManagerCertificatePolicyKeyUsagesOutputReference = exports.CertManagerCertificatePolicyExtendedKeyUsagesOutputReference = exports.CertManagerCertificatePolicyAlgorithmsOutputReference = void 0;
exports.certManagerCertificatePolicyAlgorithmsToTerraform = certManagerCertificatePolicyAlgorithmsToTerraform;
exports.certManagerCertificatePolicyAlgorithmsToHclTerraform = certManagerCertificatePolicyAlgorithmsToHclTerraform;
exports.certManagerCertificatePolicyExtendedKeyUsagesToTerraform = certManagerCertificatePolicyExtendedKeyUsagesToTerraform;
exports.certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform = certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform;
exports.certManagerCertificatePolicyKeyUsagesToTerraform = certManagerCertificatePolicyKeyUsagesToTerraform;
exports.certManagerCertificatePolicyKeyUsagesToHclTerraform = certManagerCertificatePolicyKeyUsagesToHclTerraform;
exports.certManagerCertificatePolicySansToTerraform = certManagerCertificatePolicySansToTerraform;
exports.certManagerCertificatePolicySansToHclTerraform = certManagerCertificatePolicySansToHclTerraform;
exports.certManagerCertificatePolicySubjectToTerraform = certManagerCertificatePolicySubjectToTerraform;
exports.certManagerCertificatePolicySubjectToHclTerraform = certManagerCertificatePolicySubjectToHclTerraform;
exports.certManagerCertificatePolicyValidityToTerraform = certManagerCertificatePolicyValidityToTerraform;
exports.certManagerCertificatePolicyValidityToHclTerraform = certManagerCertificatePolicyValidityToHclTerraform;
var cdktf = require("cdktf");
function certManagerCertificatePolicyAlgorithmsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.keyAlgorithm),
        signature: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.signature),
    };
}
function certManagerCertificatePolicyAlgorithmsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key_algorithm: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.keyAlgorithm),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        signature: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.signature),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var CertManagerCertificatePolicyAlgorithmsOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicyAlgorithmsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificatePolicyAlgorithmsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificatePolicyAlgorithmsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._keyAlgorithm !== undefined) {
                hasAnyValues = true;
                internalValueResult.keyAlgorithm = this._keyAlgorithm;
            }
            if (this._signature !== undefined) {
                hasAnyValues = true;
                internalValueResult.signature = this._signature;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._keyAlgorithm = undefined;
                this._signature = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._keyAlgorithm = value.keyAlgorithm;
                this._signature = value.signature;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyAlgorithmsOutputReference.prototype, "keyAlgorithm", {
        get: function () {
            return this.getListAttribute('key_algorithm');
        },
        set: function (value) {
            this._keyAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyAlgorithmsOutputReference.prototype, "keyAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyAlgorithmsOutputReference.prototype, "signature", {
        get: function () {
            return this.getListAttribute('signature');
        },
        set: function (value) {
            this._signature = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyAlgorithmsOutputReference.prototype, "signatureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signature;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificatePolicyAlgorithmsOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificatePolicyAlgorithmsOutputReference = CertManagerCertificatePolicyAlgorithmsOutputReference;
function certManagerCertificatePolicyExtendedKeyUsagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
    };
}
function certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var CertManagerCertificatePolicyExtendedKeyUsagesOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificatePolicyExtendedKeyUsagesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowed = this._allowed;
            }
            if (this._denied !== undefined) {
                hasAnyValues = true;
                internalValueResult.denied = this._denied;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowed = undefined;
                this._denied = undefined;
                this._required = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowed = value.allowed;
                this._denied = value.denied;
                this._required = value.required;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "allowed", {
        get: function () {
            return this.getListAttribute('allowed');
        },
        set: function (value) {
            this._allowed = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype.resetAllowed = function () {
        this._allowed = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "allowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "denied", {
        get: function () {
            return this.getListAttribute('denied');
        },
        set: function (value) {
            this._denied = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype.resetDenied = function () {
        this._denied = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "deniedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._denied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "required", {
        get: function () {
            return this.getListAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyExtendedKeyUsagesOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificatePolicyExtendedKeyUsagesOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificatePolicyExtendedKeyUsagesOutputReference = CertManagerCertificatePolicyExtendedKeyUsagesOutputReference;
function certManagerCertificatePolicyKeyUsagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
    };
}
function certManagerCertificatePolicyKeyUsagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var CertManagerCertificatePolicyKeyUsagesOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicyKeyUsagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificatePolicyKeyUsagesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowed = this._allowed;
            }
            if (this._denied !== undefined) {
                hasAnyValues = true;
                internalValueResult.denied = this._denied;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowed = undefined;
                this._denied = undefined;
                this._required = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowed = value.allowed;
                this._denied = value.denied;
                this._required = value.required;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "allowed", {
        get: function () {
            return this.getListAttribute('allowed');
        },
        set: function (value) {
            this._allowed = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyKeyUsagesOutputReference.prototype.resetAllowed = function () {
        this._allowed = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "allowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "denied", {
        get: function () {
            return this.getListAttribute('denied');
        },
        set: function (value) {
            this._denied = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyKeyUsagesOutputReference.prototype.resetDenied = function () {
        this._denied = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "deniedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._denied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "required", {
        get: function () {
            return this.getListAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyKeyUsagesOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyKeyUsagesOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificatePolicyKeyUsagesOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificatePolicyKeyUsagesOutputReference = CertManagerCertificatePolicyKeyUsagesOutputReference;
function certManagerCertificatePolicySansToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function certManagerCertificatePolicySansToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var CertManagerCertificatePolicySansOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicySansOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertManagerCertificatePolicySansOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowed = this._allowed;
            }
            if (this._denied !== undefined) {
                hasAnyValues = true;
                internalValueResult.denied = this._denied;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowed = undefined;
                this._denied = undefined;
                this._required = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowed = value.allowed;
                this._denied = value.denied;
                this._required = value.required;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "allowed", {
        get: function () {
            return this.getListAttribute('allowed');
        },
        set: function (value) {
            this._allowed = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicySansOutputReference.prototype.resetAllowed = function () {
        this._allowed = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "allowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "denied", {
        get: function () {
            return this.getListAttribute('denied');
        },
        set: function (value) {
            this._denied = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicySansOutputReference.prototype.resetDenied = function () {
        this._denied = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "deniedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._denied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "required", {
        get: function () {
            return this.getListAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicySansOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySansOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificatePolicySansOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificatePolicySansOutputReference = CertManagerCertificatePolicySansOutputReference;
var CertManagerCertificatePolicySansList = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicySansList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertManagerCertificatePolicySansList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CertManagerCertificatePolicySansList.prototype.get = function (index) {
        return new CertManagerCertificatePolicySansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CertManagerCertificatePolicySansList;
}(cdktf.ComplexList));
exports.CertManagerCertificatePolicySansList = CertManagerCertificatePolicySansList;
function certManagerCertificatePolicySubjectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowed),
        denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.denied),
        required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.required),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function certManagerCertificatePolicySubjectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowed),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.denied),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.required),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var CertManagerCertificatePolicySubjectOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicySubjectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertManagerCertificatePolicySubjectOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowed = this._allowed;
            }
            if (this._denied !== undefined) {
                hasAnyValues = true;
                internalValueResult.denied = this._denied;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowed = undefined;
                this._denied = undefined;
                this._required = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowed = value.allowed;
                this._denied = value.denied;
                this._required = value.required;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "allowed", {
        get: function () {
            return this.getListAttribute('allowed');
        },
        set: function (value) {
            this._allowed = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicySubjectOutputReference.prototype.resetAllowed = function () {
        this._allowed = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "allowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "denied", {
        get: function () {
            return this.getListAttribute('denied');
        },
        set: function (value) {
            this._denied = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicySubjectOutputReference.prototype.resetDenied = function () {
        this._denied = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "deniedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._denied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "required", {
        get: function () {
            return this.getListAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicySubjectOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicySubjectOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificatePolicySubjectOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificatePolicySubjectOutputReference = CertManagerCertificatePolicySubjectOutputReference;
var CertManagerCertificatePolicySubjectList = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicySubjectList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertManagerCertificatePolicySubjectList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CertManagerCertificatePolicySubjectList.prototype.get = function (index) {
        return new CertManagerCertificatePolicySubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CertManagerCertificatePolicySubjectList;
}(cdktf.ComplexList));
exports.CertManagerCertificatePolicySubjectList = CertManagerCertificatePolicySubjectList;
function certManagerCertificatePolicyValidityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max: cdktf.stringToTerraform(struct.max),
    };
}
function certManagerCertificatePolicyValidityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        max: {
            value: cdktf.stringToHclTerraform(struct.max),
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
var CertManagerCertificatePolicyValidityOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicyValidityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificatePolicyValidityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificatePolicyValidityOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._max !== undefined) {
                hasAnyValues = true;
                internalValueResult.max = this._max;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._max = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._max = value.max;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicyValidityOutputReference.prototype, "max", {
        get: function () {
            return this.getStringAttribute('max');
        },
        set: function (value) {
            this._max = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicyValidityOutputReference.prototype.resetMax = function () {
        this._max = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicyValidityOutputReference.prototype, "maxInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._max;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificatePolicyValidityOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificatePolicyValidityOutputReference = CertManagerCertificatePolicyValidityOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy}
*/
var CertManagerCertificatePolicy = /** @class */ (function (_super) {
    __extends(CertManagerCertificatePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificatePolicyConfig
    */
    function CertManagerCertificatePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_certificate_policy',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // algorithms - computed: false, optional: false, required: true
        _this._algorithms = new CertManagerCertificatePolicyAlgorithmsOutputReference(_this, "algorithms");
        // extended_key_usages - computed: false, optional: true, required: false
        _this._extendedKeyUsages = new CertManagerCertificatePolicyExtendedKeyUsagesOutputReference(_this, "extended_key_usages");
        // key_usages - computed: false, optional: true, required: false
        _this._keyUsages = new CertManagerCertificatePolicyKeyUsagesOutputReference(_this, "key_usages");
        // sans - computed: false, optional: true, required: false
        _this._sans = new CertManagerCertificatePolicySansList(_this, "sans", false);
        // subject - computed: false, optional: true, required: false
        _this._subject = new CertManagerCertificatePolicySubjectList(_this, "subject", false);
        // validity - computed: false, optional: true, required: false
        _this._validity = new CertManagerCertificatePolicyValidityOutputReference(_this, "validity");
        _this._description = config.description;
        _this._name = config.name;
        _this._projectSlug = config.projectSlug;
        _this._algorithms.internalValue = config.algorithms;
        _this._extendedKeyUsages.internalValue = config.extendedKeyUsages;
        _this._keyUsages.internalValue = config.keyUsages;
        _this._sans.internalValue = config.sans;
        _this._subject.internalValue = config.subject;
        _this._validity.internalValue = config.validity;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCertificatePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificatePolicy to import
    * @param importFromId The id of the existing CertManagerCertificatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificatePolicy to import is found
    */
    CertManagerCertificatePolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "algorithms", {
        get: function () {
            return this._algorithms;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.putAlgorithms = function (value) {
        this._algorithms.internalValue = value;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "algorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algorithms.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "extendedKeyUsages", {
        get: function () {
            return this._extendedKeyUsages;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.putExtendedKeyUsages = function (value) {
        this._extendedKeyUsages.internalValue = value;
    };
    CertManagerCertificatePolicy.prototype.resetExtendedKeyUsages = function () {
        this._extendedKeyUsages.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "extendedKeyUsagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extendedKeyUsages.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "keyUsages", {
        get: function () {
            return this._keyUsages;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.putKeyUsages = function (value) {
        this._keyUsages.internalValue = value;
    };
    CertManagerCertificatePolicy.prototype.resetKeyUsages = function () {
        this._keyUsages.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "keyUsagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyUsages.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "sans", {
        get: function () {
            return this._sans;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.putSans = function (value) {
        this._sans.internalValue = value;
    };
    CertManagerCertificatePolicy.prototype.resetSans = function () {
        this._sans.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "sansInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sans.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.putSubject = function (value) {
        this._subject.internalValue = value;
    };
    CertManagerCertificatePolicy.prototype.resetSubject = function () {
        this._subject.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "validity", {
        get: function () {
            return this._validity;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificatePolicy.prototype.putValidity = function (value) {
        this._validity.internalValue = value;
    };
    CertManagerCertificatePolicy.prototype.resetValidity = function () {
        this._validity.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificatePolicy.prototype, "validityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validity.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CertManagerCertificatePolicy.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            algorithms: certManagerCertificatePolicyAlgorithmsToTerraform(this._algorithms.internalValue),
            extended_key_usages: certManagerCertificatePolicyExtendedKeyUsagesToTerraform(this._extendedKeyUsages.internalValue),
            key_usages: certManagerCertificatePolicyKeyUsagesToTerraform(this._keyUsages.internalValue),
            sans: cdktf.listMapper(certManagerCertificatePolicySansToTerraform, true)(this._sans.internalValue),
            subject: cdktf.listMapper(certManagerCertificatePolicySubjectToTerraform, true)(this._subject.internalValue),
            validity: certManagerCertificatePolicyValidityToTerraform(this._validity.internalValue),
        };
    };
    CertManagerCertificatePolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            algorithms: {
                value: certManagerCertificatePolicyAlgorithmsToHclTerraform(this._algorithms.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyAlgorithms",
            },
            extended_key_usages: {
                value: certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(this._extendedKeyUsages.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyExtendedKeyUsages",
            },
            key_usages: {
                value: certManagerCertificatePolicyKeyUsagesToHclTerraform(this._keyUsages.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyKeyUsages",
            },
            sans: {
                value: cdktf.listMapperHcl(certManagerCertificatePolicySansToHclTerraform, true)(this._sans.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CertManagerCertificatePolicySansList",
            },
            subject: {
                value: cdktf.listMapperHcl(certManagerCertificatePolicySubjectToHclTerraform, true)(this._subject.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CertManagerCertificatePolicySubjectList",
            },
            validity: {
                value: certManagerCertificatePolicyValidityToHclTerraform(this._validity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificatePolicyValidity",
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
    CertManagerCertificatePolicy.tfResourceType = "infisical_cert_manager_certificate_policy";
    return CertManagerCertificatePolicy;
}(cdktf.TerraformResource));
exports.CertManagerCertificatePolicy = CertManagerCertificatePolicy;
