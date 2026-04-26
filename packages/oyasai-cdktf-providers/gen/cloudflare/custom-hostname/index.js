"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname
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
exports.CustomHostname = exports.CustomHostnameSslOutputReference = exports.CustomHostnameSslSettingsOutputReference = exports.CustomHostnameSslCustomCertBundleList = exports.CustomHostnameSslCustomCertBundleOutputReference = exports.CustomHostnameOwnershipVerificationHttpOutputReference = exports.CustomHostnameOwnershipVerificationOutputReference = void 0;
exports.customHostnameOwnershipVerificationToTerraform = customHostnameOwnershipVerificationToTerraform;
exports.customHostnameOwnershipVerificationToHclTerraform = customHostnameOwnershipVerificationToHclTerraform;
exports.customHostnameOwnershipVerificationHttpToTerraform = customHostnameOwnershipVerificationHttpToTerraform;
exports.customHostnameOwnershipVerificationHttpToHclTerraform = customHostnameOwnershipVerificationHttpToHclTerraform;
exports.customHostnameSslCustomCertBundleToTerraform = customHostnameSslCustomCertBundleToTerraform;
exports.customHostnameSslCustomCertBundleToHclTerraform = customHostnameSslCustomCertBundleToHclTerraform;
exports.customHostnameSslSettingsToTerraform = customHostnameSslSettingsToTerraform;
exports.customHostnameSslSettingsToHclTerraform = customHostnameSslSettingsToHclTerraform;
exports.customHostnameSslToTerraform = customHostnameSslToTerraform;
exports.customHostnameSslToHclTerraform = customHostnameSslToHclTerraform;
var cdktf = require("cdktf");
function customHostnameOwnershipVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function customHostnameOwnershipVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CustomHostnameOwnershipVerificationOutputReference = /** @class */ (function (_super) {
    __extends(CustomHostnameOwnershipVerificationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomHostnameOwnershipVerificationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CustomHostnameOwnershipVerificationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CustomHostnameOwnershipVerificationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameOwnershipVerificationOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameOwnershipVerificationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return CustomHostnameOwnershipVerificationOutputReference;
}(cdktf.ComplexObject));
exports.CustomHostnameOwnershipVerificationOutputReference = CustomHostnameOwnershipVerificationOutputReference;
function customHostnameOwnershipVerificationHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function customHostnameOwnershipVerificationHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CustomHostnameOwnershipVerificationHttpOutputReference = /** @class */ (function (_super) {
    __extends(CustomHostnameOwnershipVerificationHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomHostnameOwnershipVerificationHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CustomHostnameOwnershipVerificationHttpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CustomHostnameOwnershipVerificationHttpOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameOwnershipVerificationHttpOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    return CustomHostnameOwnershipVerificationHttpOutputReference;
}(cdktf.ComplexObject));
exports.CustomHostnameOwnershipVerificationHttpOutputReference = CustomHostnameOwnershipVerificationHttpOutputReference;
function customHostnameSslCustomCertBundleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_certificate: cdktf.stringToTerraform(struct.customCertificate),
        custom_key: cdktf.stringToTerraform(struct.customKey),
    };
}
function customHostnameSslCustomCertBundleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        custom_certificate: {
            value: cdktf.stringToHclTerraform(struct.customCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_key: {
            value: cdktf.stringToHclTerraform(struct.customKey),
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
var CustomHostnameSslCustomCertBundleOutputReference = /** @class */ (function (_super) {
    __extends(CustomHostnameSslCustomCertBundleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CustomHostnameSslCustomCertBundleOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CustomHostnameSslCustomCertBundleOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._customCertificate !== undefined) {
                hasAnyValues = true;
                internalValueResult.customCertificate = this._customCertificate;
            }
            if (this._customKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.customKey = this._customKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._customCertificate = undefined;
                this._customKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._customCertificate = value.customCertificate;
                this._customKey = value.customKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslCustomCertBundleOutputReference.prototype, "customCertificate", {
        get: function () {
            return this.getStringAttribute('custom_certificate');
        },
        set: function (value) {
            this._customCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslCustomCertBundleOutputReference.prototype, "customCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslCustomCertBundleOutputReference.prototype, "customKey", {
        get: function () {
            return this.getStringAttribute('custom_key');
        },
        set: function (value) {
            this._customKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslCustomCertBundleOutputReference.prototype, "customKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customKey;
        },
        enumerable: false,
        configurable: true
    });
    return CustomHostnameSslCustomCertBundleOutputReference;
}(cdktf.ComplexObject));
exports.CustomHostnameSslCustomCertBundleOutputReference = CustomHostnameSslCustomCertBundleOutputReference;
var CustomHostnameSslCustomCertBundleList = /** @class */ (function (_super) {
    __extends(CustomHostnameSslCustomCertBundleList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CustomHostnameSslCustomCertBundleList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CustomHostnameSslCustomCertBundleList.prototype.get = function (index) {
        return new CustomHostnameSslCustomCertBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CustomHostnameSslCustomCertBundleList;
}(cdktf.ComplexList));
exports.CustomHostnameSslCustomCertBundleList = CustomHostnameSslCustomCertBundleList;
function customHostnameSslSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ciphers),
        early_hints: cdktf.stringToTerraform(struct.earlyHints),
        http2: cdktf.stringToTerraform(struct.http2),
        min_tls_version: cdktf.stringToTerraform(struct.minTlsVersion),
        tls_1_3: cdktf.stringToTerraform(struct.tls13),
    };
}
function customHostnameSslSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ciphers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ciphers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        early_hints: {
            value: cdktf.stringToHclTerraform(struct.earlyHints),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http2: {
            value: cdktf.stringToHclTerraform(struct.http2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_tls_version: {
            value: cdktf.stringToHclTerraform(struct.minTlsVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tls_1_3: {
            value: cdktf.stringToHclTerraform(struct.tls13),
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
var CustomHostnameSslSettingsOutputReference = /** @class */ (function (_super) {
    __extends(CustomHostnameSslSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomHostnameSslSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ciphers !== undefined) {
                hasAnyValues = true;
                internalValueResult.ciphers = this._ciphers;
            }
            if (this._earlyHints !== undefined) {
                hasAnyValues = true;
                internalValueResult.earlyHints = this._earlyHints;
            }
            if (this._http2 !== undefined) {
                hasAnyValues = true;
                internalValueResult.http2 = this._http2;
            }
            if (this._minTlsVersion !== undefined) {
                hasAnyValues = true;
                internalValueResult.minTlsVersion = this._minTlsVersion;
            }
            if (this._tls13 !== undefined) {
                hasAnyValues = true;
                internalValueResult.tls13 = this._tls13;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ciphers = undefined;
                this._earlyHints = undefined;
                this._http2 = undefined;
                this._minTlsVersion = undefined;
                this._tls13 = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ciphers = value.ciphers;
                this._earlyHints = value.earlyHints;
                this._http2 = value.http2;
                this._minTlsVersion = value.minTlsVersion;
                this._tls13 = value.tls13;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "ciphers", {
        get: function () {
            return this.getListAttribute('ciphers');
        },
        set: function (value) {
            this._ciphers = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslSettingsOutputReference.prototype.resetCiphers = function () {
        this._ciphers = undefined;
    };
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "ciphersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ciphers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "earlyHints", {
        get: function () {
            return this.getStringAttribute('early_hints');
        },
        set: function (value) {
            this._earlyHints = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslSettingsOutputReference.prototype.resetEarlyHints = function () {
        this._earlyHints = undefined;
    };
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "earlyHintsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._earlyHints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "http2", {
        get: function () {
            return this.getStringAttribute('http2');
        },
        set: function (value) {
            this._http2 = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslSettingsOutputReference.prototype.resetHttp2 = function () {
        this._http2 = undefined;
    };
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "http2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._http2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "minTlsVersion", {
        get: function () {
            return this.getStringAttribute('min_tls_version');
        },
        set: function (value) {
            this._minTlsVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslSettingsOutputReference.prototype.resetMinTlsVersion = function () {
        this._minTlsVersion = undefined;
    };
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "minTlsVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minTlsVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "tls13", {
        get: function () {
            return this.getStringAttribute('tls_1_3');
        },
        set: function (value) {
            this._tls13 = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslSettingsOutputReference.prototype.resetTls13 = function () {
        this._tls13 = undefined;
    };
    Object.defineProperty(CustomHostnameSslSettingsOutputReference.prototype, "tls13Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tls13;
        },
        enumerable: false,
        configurable: true
    });
    return CustomHostnameSslSettingsOutputReference;
}(cdktf.ComplexObject));
exports.CustomHostnameSslSettingsOutputReference = CustomHostnameSslSettingsOutputReference;
function customHostnameSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bundle_method: cdktf.stringToTerraform(struct.bundleMethod),
        certificate_authority: cdktf.stringToTerraform(struct.certificateAuthority),
        cloudflare_branding: cdktf.booleanToTerraform(struct.cloudflareBranding),
        custom_cert_bundle: cdktf.listMapper(customHostnameSslCustomCertBundleToTerraform, false)(struct.customCertBundle),
        custom_certificate: cdktf.stringToTerraform(struct.customCertificate),
        custom_csr_id: cdktf.stringToTerraform(struct.customCsrId),
        custom_key: cdktf.stringToTerraform(struct.customKey),
        method: cdktf.stringToTerraform(struct.method),
        settings: customHostnameSslSettingsToTerraform(struct.settings),
        type: cdktf.stringToTerraform(struct.type),
        wildcard: cdktf.booleanToTerraform(struct.wildcard),
    };
}
function customHostnameSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        bundle_method: {
            value: cdktf.stringToHclTerraform(struct.bundleMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate_authority: {
            value: cdktf.stringToHclTerraform(struct.certificateAuthority),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudflare_branding: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareBranding),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        custom_cert_bundle: {
            value: cdktf.listMapperHcl(customHostnameSslCustomCertBundleToHclTerraform, false)(struct.customCertBundle),
            isBlock: true,
            type: "list",
            storageClassType: "CustomHostnameSslCustomCertBundleList",
        },
        custom_certificate: {
            value: cdktf.stringToHclTerraform(struct.customCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_csr_id: {
            value: cdktf.stringToHclTerraform(struct.customCsrId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_key: {
            value: cdktf.stringToHclTerraform(struct.customKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        settings: {
            value: customHostnameSslSettingsToHclTerraform(struct.settings),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomHostnameSslSettings",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wildcard: {
            value: cdktf.booleanToHclTerraform(struct.wildcard),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var CustomHostnameSslOutputReference = /** @class */ (function (_super) {
    __extends(CustomHostnameSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomHostnameSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // custom_cert_bundle - computed: false, optional: true, required: false
        _this._customCertBundle = new CustomHostnameSslCustomCertBundleList(_this, "custom_cert_bundle", false);
        // settings - computed: false, optional: true, required: false
        _this._settings = new CustomHostnameSslSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._bundleMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.bundleMethod = this._bundleMethod;
            }
            if (this._certificateAuthority !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificateAuthority = this._certificateAuthority;
            }
            if (this._cloudflareBranding !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareBranding = this._cloudflareBranding;
            }
            if (((_a = this._customCertBundle) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.customCertBundle = (_b = this._customCertBundle) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._customCertificate !== undefined) {
                hasAnyValues = true;
                internalValueResult.customCertificate = this._customCertificate;
            }
            if (this._customCsrId !== undefined) {
                hasAnyValues = true;
                internalValueResult.customCsrId = this._customCsrId;
            }
            if (this._customKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.customKey = this._customKey;
            }
            if (this._method !== undefined) {
                hasAnyValues = true;
                internalValueResult.method = this._method;
            }
            if (((_c = this._settings) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.settings = (_d = this._settings) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._wildcard !== undefined) {
                hasAnyValues = true;
                internalValueResult.wildcard = this._wildcard;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._bundleMethod = undefined;
                this._certificateAuthority = undefined;
                this._cloudflareBranding = undefined;
                this._customCertBundle.internalValue = undefined;
                this._customCertificate = undefined;
                this._customCsrId = undefined;
                this._customKey = undefined;
                this._method = undefined;
                this._settings.internalValue = undefined;
                this._type = undefined;
                this._wildcard = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._bundleMethod = value.bundleMethod;
                this._certificateAuthority = value.certificateAuthority;
                this._cloudflareBranding = value.cloudflareBranding;
                this._customCertBundle.internalValue = value.customCertBundle;
                this._customCertificate = value.customCertificate;
                this._customCsrId = value.customCsrId;
                this._customKey = value.customKey;
                this._method = value.method;
                this._settings.internalValue = value.settings;
                this._type = value.type;
                this._wildcard = value.wildcard;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "bundleMethod", {
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        set: function (value) {
            this._bundleMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetBundleMethod = function () {
        this._bundleMethod = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "bundleMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "certificateAuthority", {
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        set: function (value) {
            this._certificateAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetCertificateAuthority = function () {
        this._certificateAuthority = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "certificateAuthorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "cloudflareBranding", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_branding');
        },
        set: function (value) {
            this._cloudflareBranding = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetCloudflareBranding = function () {
        this._cloudflareBranding = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "cloudflareBrandingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareBranding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customCertBundle", {
        get: function () {
            return this._customCertBundle;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.putCustomCertBundle = function (value) {
        this._customCertBundle.internalValue = value;
    };
    CustomHostnameSslOutputReference.prototype.resetCustomCertBundle = function () {
        this._customCertBundle.internalValue = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customCertBundleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCertBundle.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customCertificate", {
        get: function () {
            return this.getStringAttribute('custom_certificate');
        },
        set: function (value) {
            this._customCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetCustomCertificate = function () {
        this._customCertificate = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customCsrId", {
        get: function () {
            return this.getStringAttribute('custom_csr_id');
        },
        set: function (value) {
            this._customCsrId = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetCustomCsrId = function () {
        this._customCsrId = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customCsrIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCsrId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customKey", {
        get: function () {
            return this.getStringAttribute('custom_key');
        },
        set: function (value) {
            this._customKey = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetCustomKey = function () {
        this._customKey = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "customKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    CustomHostnameSslOutputReference.prototype.resetSettings = function () {
        this._settings.internalValue = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "wildcard", {
        get: function () {
            return this.getBooleanAttribute('wildcard');
        },
        set: function (value) {
            this._wildcard = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostnameSslOutputReference.prototype.resetWildcard = function () {
        this._wildcard = undefined;
    };
    Object.defineProperty(CustomHostnameSslOutputReference.prototype, "wildcardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wildcard;
        },
        enumerable: false,
        configurable: true
    });
    return CustomHostnameSslOutputReference;
}(cdktf.ComplexObject));
exports.CustomHostnameSslOutputReference = CustomHostnameSslOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname cloudflare_custom_hostname}
*/
var CustomHostname = /** @class */ (function (_super) {
    __extends(CustomHostname, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname cloudflare_custom_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomHostnameConfig
    */
    function CustomHostname(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_hostname',
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
        // ownership_verification - computed: true, optional: false, required: false
        _this._ownershipVerification = new CustomHostnameOwnershipVerificationOutputReference(_this, "ownership_verification");
        // ownership_verification_http - computed: true, optional: false, required: false
        _this._ownershipVerificationHttp = new CustomHostnameOwnershipVerificationHttpOutputReference(_this, "ownership_verification_http");
        // ssl - computed: false, optional: true, required: false
        _this._ssl = new CustomHostnameSslOutputReference(_this, "ssl");
        _this._customMetadata = config.customMetadata;
        _this._customOriginServer = config.customOriginServer;
        _this._customOriginSni = config.customOriginSni;
        _this._hostname = config.hostname;
        _this._ssl.internalValue = config.ssl;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomHostname to import
    * @param importFromId The id of the existing CustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomHostname to import is found
    */
    CustomHostname.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CustomHostname.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "customMetadata", {
        get: function () {
            return this.getStringMapAttribute('custom_metadata');
        },
        set: function (value) {
            this._customMetadata = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostname.prototype.resetCustomMetadata = function () {
        this._customMetadata = undefined;
    };
    Object.defineProperty(CustomHostname.prototype, "customMetadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "customOriginServer", {
        get: function () {
            return this.getStringAttribute('custom_origin_server');
        },
        set: function (value) {
            this._customOriginServer = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostname.prototype.resetCustomOriginServer = function () {
        this._customOriginServer = undefined;
    };
    Object.defineProperty(CustomHostname.prototype, "customOriginServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customOriginServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "customOriginSni", {
        get: function () {
            return this.getStringAttribute('custom_origin_sni');
        },
        set: function (value) {
            this._customOriginSni = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostname.prototype.resetCustomOriginSni = function () {
        this._customOriginSni = undefined;
    };
    Object.defineProperty(CustomHostname.prototype, "customOriginSniInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customOriginSni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "ownershipVerification", {
        get: function () {
            return this._ownershipVerification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "ownershipVerificationHttp", {
        get: function () {
            return this._ownershipVerificationHttp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostname.prototype.putSsl = function (value) {
        this._ssl.internalValue = value;
    };
    CustomHostname.prototype.resetSsl = function () {
        this._ssl.internalValue = undefined;
    };
    Object.defineProperty(CustomHostname.prototype, "sslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssl.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "verificationErrors", {
        // verification_errors - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('verification_errors');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomHostname.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomHostname.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(CustomHostname.prototype, "zoneIdInput", {
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
    CustomHostname.prototype.synthesizeAttributes = function () {
        return {
            custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
            custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
            custom_origin_sni: cdktf.stringToTerraform(this._customOriginSni),
            hostname: cdktf.stringToTerraform(this._hostname),
            ssl: customHostnameSslToTerraform(this._ssl.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CustomHostname.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            custom_metadata: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customMetadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            custom_origin_server: {
                value: cdktf.stringToHclTerraform(this._customOriginServer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_origin_sni: {
                value: cdktf.stringToHclTerraform(this._customOriginSni),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssl: {
                value: customHostnameSslToHclTerraform(this._ssl.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CustomHostnameSsl",
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
    CustomHostname.tfResourceType = "cloudflare_custom_hostname";
    return CustomHostname;
}(cdktf.TerraformResource));
exports.CustomHostname = CustomHostname;
