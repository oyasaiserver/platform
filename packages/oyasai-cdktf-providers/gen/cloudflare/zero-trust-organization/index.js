"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization
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
exports.ZeroTrustOrganization = exports.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference = exports.ZeroTrustOrganizationMfaConfigOutputReference = exports.ZeroTrustOrganizationLoginDesignOutputReference = exports.ZeroTrustOrganizationCustomPagesOutputReference = void 0;
exports.zeroTrustOrganizationCustomPagesToTerraform = zeroTrustOrganizationCustomPagesToTerraform;
exports.zeroTrustOrganizationCustomPagesToHclTerraform = zeroTrustOrganizationCustomPagesToHclTerraform;
exports.zeroTrustOrganizationLoginDesignToTerraform = zeroTrustOrganizationLoginDesignToTerraform;
exports.zeroTrustOrganizationLoginDesignToHclTerraform = zeroTrustOrganizationLoginDesignToHclTerraform;
exports.zeroTrustOrganizationMfaConfigToTerraform = zeroTrustOrganizationMfaConfigToTerraform;
exports.zeroTrustOrganizationMfaConfigToHclTerraform = zeroTrustOrganizationMfaConfigToHclTerraform;
exports.zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform = zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform;
exports.zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform = zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustOrganizationCustomPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forbidden: cdktf.stringToTerraform(struct.forbidden),
        identity_denied: cdktf.stringToTerraform(struct.identityDenied),
    };
}
function zeroTrustOrganizationCustomPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        forbidden: {
            value: cdktf.stringToHclTerraform(struct.forbidden),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_denied: {
            value: cdktf.stringToHclTerraform(struct.identityDenied),
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
var ZeroTrustOrganizationCustomPagesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustOrganizationCustomPagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustOrganizationCustomPagesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustOrganizationCustomPagesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._forbidden !== undefined) {
                hasAnyValues = true;
                internalValueResult.forbidden = this._forbidden;
            }
            if (this._identityDenied !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityDenied = this._identityDenied;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._forbidden = undefined;
                this._identityDenied = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._forbidden = value.forbidden;
                this._identityDenied = value.identityDenied;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationCustomPagesOutputReference.prototype, "forbidden", {
        get: function () {
            return this.getStringAttribute('forbidden');
        },
        set: function (value) {
            this._forbidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationCustomPagesOutputReference.prototype.resetForbidden = function () {
        this._forbidden = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationCustomPagesOutputReference.prototype, "forbiddenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forbidden;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationCustomPagesOutputReference.prototype, "identityDenied", {
        get: function () {
            return this.getStringAttribute('identity_denied');
        },
        set: function (value) {
            this._identityDenied = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationCustomPagesOutputReference.prototype.resetIdentityDenied = function () {
        this._identityDenied = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationCustomPagesOutputReference.prototype, "identityDeniedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityDenied;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustOrganizationCustomPagesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustOrganizationCustomPagesOutputReference = ZeroTrustOrganizationCustomPagesOutputReference;
function zeroTrustOrganizationLoginDesignToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        background_color: cdktf.stringToTerraform(struct.backgroundColor),
        footer_text: cdktf.stringToTerraform(struct.footerText),
        header_text: cdktf.stringToTerraform(struct.headerText),
        logo_path: cdktf.stringToTerraform(struct.logoPath),
        text_color: cdktf.stringToTerraform(struct.textColor),
    };
}
function zeroTrustOrganizationLoginDesignToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        background_color: {
            value: cdktf.stringToHclTerraform(struct.backgroundColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        footer_text: {
            value: cdktf.stringToHclTerraform(struct.footerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_text: {
            value: cdktf.stringToHclTerraform(struct.headerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logo_path: {
            value: cdktf.stringToHclTerraform(struct.logoPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_color: {
            value: cdktf.stringToHclTerraform(struct.textColor),
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
var ZeroTrustOrganizationLoginDesignOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustOrganizationLoginDesignOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustOrganizationLoginDesignOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._backgroundColor !== undefined) {
                hasAnyValues = true;
                internalValueResult.backgroundColor = this._backgroundColor;
            }
            if (this._footerText !== undefined) {
                hasAnyValues = true;
                internalValueResult.footerText = this._footerText;
            }
            if (this._headerText !== undefined) {
                hasAnyValues = true;
                internalValueResult.headerText = this._headerText;
            }
            if (this._logoPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.logoPath = this._logoPath;
            }
            if (this._textColor !== undefined) {
                hasAnyValues = true;
                internalValueResult.textColor = this._textColor;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._backgroundColor = undefined;
                this._footerText = undefined;
                this._headerText = undefined;
                this._logoPath = undefined;
                this._textColor = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._backgroundColor = value.backgroundColor;
                this._footerText = value.footerText;
                this._headerText = value.headerText;
                this._logoPath = value.logoPath;
                this._textColor = value.textColor;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "backgroundColor", {
        get: function () {
            return this.getStringAttribute('background_color');
        },
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationLoginDesignOutputReference.prototype.resetBackgroundColor = function () {
        this._backgroundColor = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "backgroundColorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backgroundColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "footerText", {
        get: function () {
            return this.getStringAttribute('footer_text');
        },
        set: function (value) {
            this._footerText = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationLoginDesignOutputReference.prototype.resetFooterText = function () {
        this._footerText = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "footerTextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._footerText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "headerText", {
        get: function () {
            return this.getStringAttribute('header_text');
        },
        set: function (value) {
            this._headerText = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationLoginDesignOutputReference.prototype.resetHeaderText = function () {
        this._headerText = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "headerTextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headerText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "logoPath", {
        get: function () {
            return this.getStringAttribute('logo_path');
        },
        set: function (value) {
            this._logoPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationLoginDesignOutputReference.prototype.resetLogoPath = function () {
        this._logoPath = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "logoPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logoPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "textColor", {
        get: function () {
            return this.getStringAttribute('text_color');
        },
        set: function (value) {
            this._textColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationLoginDesignOutputReference.prototype.resetTextColor = function () {
        this._textColor = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationLoginDesignOutputReference.prototype, "textColorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._textColor;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustOrganizationLoginDesignOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustOrganizationLoginDesignOutputReference = ZeroTrustOrganizationLoginDesignOutputReference;
function zeroTrustOrganizationMfaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_authenticators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedAuthenticators),
        amr_matching_session_duration: cdktf.stringToTerraform(struct.amrMatchingSessionDuration),
        required_aaguids: cdktf.stringToTerraform(struct.requiredAaguids),
        session_duration: cdktf.stringToTerraform(struct.sessionDuration),
    };
}
function zeroTrustOrganizationMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_authenticators: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedAuthenticators),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        amr_matching_session_duration: {
            value: cdktf.stringToHclTerraform(struct.amrMatchingSessionDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required_aaguids: {
            value: cdktf.stringToHclTerraform(struct.requiredAaguids),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_duration: {
            value: cdktf.stringToHclTerraform(struct.sessionDuration),
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
var ZeroTrustOrganizationMfaConfigOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustOrganizationMfaConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustOrganizationMfaConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedAuthenticators !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedAuthenticators = this._allowedAuthenticators;
            }
            if (this._amrMatchingSessionDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.amrMatchingSessionDuration = this._amrMatchingSessionDuration;
            }
            if (this._requiredAaguids !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredAaguids = this._requiredAaguids;
            }
            if (this._sessionDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionDuration = this._sessionDuration;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowedAuthenticators = undefined;
                this._amrMatchingSessionDuration = undefined;
                this._requiredAaguids = undefined;
                this._sessionDuration = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowedAuthenticators = value.allowedAuthenticators;
                this._amrMatchingSessionDuration = value.amrMatchingSessionDuration;
                this._requiredAaguids = value.requiredAaguids;
                this._sessionDuration = value.sessionDuration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "allowedAuthenticators", {
        get: function () {
            return this.getListAttribute('allowed_authenticators');
        },
        set: function (value) {
            this._allowedAuthenticators = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaConfigOutputReference.prototype.resetAllowedAuthenticators = function () {
        this._allowedAuthenticators = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "allowedAuthenticatorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedAuthenticators;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "amrMatchingSessionDuration", {
        get: function () {
            return this.getStringAttribute('amr_matching_session_duration');
        },
        set: function (value) {
            this._amrMatchingSessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaConfigOutputReference.prototype.resetAmrMatchingSessionDuration = function () {
        this._amrMatchingSessionDuration = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "amrMatchingSessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amrMatchingSessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "requiredAaguids", {
        get: function () {
            return this.getStringAttribute('required_aaguids');
        },
        set: function (value) {
            this._requiredAaguids = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaConfigOutputReference.prototype.resetRequiredAaguids = function () {
        this._requiredAaguids = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "requiredAaguidsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredAaguids;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "sessionDuration", {
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaConfigOutputReference.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaConfigOutputReference.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustOrganizationMfaConfigOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustOrganizationMfaConfigOutputReference = ZeroTrustOrganizationMfaConfigOutputReference;
function zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pin_policy: cdktf.stringToTerraform(struct.pinPolicy),
        require_fips_device: cdktf.booleanToTerraform(struct.requireFipsDevice),
        ssh_key_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.sshKeySize),
        ssh_key_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.sshKeyType),
        touch_policy: cdktf.stringToTerraform(struct.touchPolicy),
    };
}
function zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        pin_policy: {
            value: cdktf.stringToHclTerraform(struct.pinPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        require_fips_device: {
            value: cdktf.booleanToHclTerraform(struct.requireFipsDevice),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ssh_key_size: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.sshKeySize),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        ssh_key_type: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.sshKeyType),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        touch_policy: {
            value: cdktf.stringToHclTerraform(struct.touchPolicy),
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
var ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._pinPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.pinPolicy = this._pinPolicy;
            }
            if (this._requireFipsDevice !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireFipsDevice = this._requireFipsDevice;
            }
            if (this._sshKeySize !== undefined) {
                hasAnyValues = true;
                internalValueResult.sshKeySize = this._sshKeySize;
            }
            if (this._sshKeyType !== undefined) {
                hasAnyValues = true;
                internalValueResult.sshKeyType = this._sshKeyType;
            }
            if (this._touchPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.touchPolicy = this._touchPolicy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._pinPolicy = undefined;
                this._requireFipsDevice = undefined;
                this._sshKeySize = undefined;
                this._sshKeyType = undefined;
                this._touchPolicy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._pinPolicy = value.pinPolicy;
                this._requireFipsDevice = value.requireFipsDevice;
                this._sshKeySize = value.sshKeySize;
                this._sshKeyType = value.sshKeyType;
                this._touchPolicy = value.touchPolicy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "pinPolicy", {
        get: function () {
            return this.getStringAttribute('pin_policy');
        },
        set: function (value) {
            this._pinPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype.resetPinPolicy = function () {
        this._pinPolicy = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "pinPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pinPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "requireFipsDevice", {
        get: function () {
            return this.getBooleanAttribute('require_fips_device');
        },
        set: function (value) {
            this._requireFipsDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype.resetRequireFipsDevice = function () {
        this._requireFipsDevice = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "requireFipsDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireFipsDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "sshKeySize", {
        get: function () {
            return this.getNumberListAttribute('ssh_key_size');
        },
        set: function (value) {
            this._sshKeySize = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype.resetSshKeySize = function () {
        this._sshKeySize = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "sshKeySizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshKeySize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "sshKeyType", {
        get: function () {
            return this.getListAttribute('ssh_key_type');
        },
        set: function (value) {
            this._sshKeyType = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype.resetSshKeyType = function () {
        this._sshKeyType = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "sshKeyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshKeyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "touchPolicy", {
        get: function () {
            return this.getStringAttribute('touch_policy');
        },
        set: function (value) {
            this._touchPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype.resetTouchPolicy = function () {
        this._touchPolicy = undefined;
    };
    Object.defineProperty(ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "touchPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._touchPolicy;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference = ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}
*/
var ZeroTrustOrganization = /** @class */ (function (_super) {
    __extends(ZeroTrustOrganization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustOrganizationConfig = {}
    */
    function ZeroTrustOrganization(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_organization',
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
        // custom_pages - computed: false, optional: true, required: false
        _this._customPages = new ZeroTrustOrganizationCustomPagesOutputReference(_this, "custom_pages");
        // login_design - computed: false, optional: true, required: false
        _this._loginDesign = new ZeroTrustOrganizationLoginDesignOutputReference(_this, "login_design");
        // mfa_config - computed: false, optional: true, required: false
        _this._mfaConfig = new ZeroTrustOrganizationMfaConfigOutputReference(_this, "mfa_config");
        // mfa_ssh_piv_key_requirements - computed: false, optional: true, required: false
        _this._mfaSshPivKeyRequirements = new ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(_this, "mfa_ssh_piv_key_requirements");
        _this._accountId = config.accountId;
        _this._allowAuthenticateViaWarp = config.allowAuthenticateViaWarp;
        _this._authDomain = config.authDomain;
        _this._autoRedirectToIdentity = config.autoRedirectToIdentity;
        _this._customPages.internalValue = config.customPages;
        _this._denyUnmatchedRequests = config.denyUnmatchedRequests;
        _this._denyUnmatchedRequestsExemptedZoneNames = config.denyUnmatchedRequestsExemptedZoneNames;
        _this._isUiReadOnly = config.isUiReadOnly;
        _this._loginDesign.internalValue = config.loginDesign;
        _this._mfaConfig.internalValue = config.mfaConfig;
        _this._mfaConfigurationAllowed = config.mfaConfigurationAllowed;
        _this._mfaRequiredForAllApps = config.mfaRequiredForAllApps;
        _this._mfaSshPivKeyRequirements.internalValue = config.mfaSshPivKeyRequirements;
        _this._name = config.name;
        _this._sessionDuration = config.sessionDuration;
        _this._uiReadOnlyToggleReason = config.uiReadOnlyToggleReason;
        _this._userSeatExpirationInactiveTime = config.userSeatExpirationInactiveTime;
        _this._warpAuthSessionDuration = config.warpAuthSessionDuration;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustOrganization to import
    * @param importFromId The id of the existing ZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustOrganization to import is found
    */
    ZeroTrustOrganization.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "allowAuthenticateViaWarp", {
        get: function () {
            return this.getBooleanAttribute('allow_authenticate_via_warp');
        },
        set: function (value) {
            this._allowAuthenticateViaWarp = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetAllowAuthenticateViaWarp = function () {
        this._allowAuthenticateViaWarp = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "allowAuthenticateViaWarpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowAuthenticateViaWarp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "authDomain", {
        get: function () {
            return this.getStringAttribute('auth_domain');
        },
        set: function (value) {
            this._authDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetAuthDomain = function () {
        this._authDomain = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "authDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "autoRedirectToIdentity", {
        get: function () {
            return this.getBooleanAttribute('auto_redirect_to_identity');
        },
        set: function (value) {
            this._autoRedirectToIdentity = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetAutoRedirectToIdentity = function () {
        this._autoRedirectToIdentity = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "autoRedirectToIdentityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRedirectToIdentity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "customPages", {
        get: function () {
            return this._customPages;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.putCustomPages = function (value) {
        this._customPages.internalValue = value;
    };
    ZeroTrustOrganization.prototype.resetCustomPages = function () {
        this._customPages.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "customPagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customPages.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "denyUnmatchedRequests", {
        get: function () {
            return this.getBooleanAttribute('deny_unmatched_requests');
        },
        set: function (value) {
            this._denyUnmatchedRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetDenyUnmatchedRequests = function () {
        this._denyUnmatchedRequests = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "denyUnmatchedRequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._denyUnmatchedRequests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "denyUnmatchedRequestsExemptedZoneNames", {
        get: function () {
            return this.getListAttribute('deny_unmatched_requests_exempted_zone_names');
        },
        set: function (value) {
            this._denyUnmatchedRequestsExemptedZoneNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetDenyUnmatchedRequestsExemptedZoneNames = function () {
        this._denyUnmatchedRequestsExemptedZoneNames = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "denyUnmatchedRequestsExemptedZoneNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._denyUnmatchedRequestsExemptedZoneNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "isUiReadOnly", {
        get: function () {
            return this.getBooleanAttribute('is_ui_read_only');
        },
        set: function (value) {
            this._isUiReadOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetIsUiReadOnly = function () {
        this._isUiReadOnly = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "isUiReadOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isUiReadOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "loginDesign", {
        get: function () {
            return this._loginDesign;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.putLoginDesign = function (value) {
        this._loginDesign.internalValue = value;
    };
    ZeroTrustOrganization.prototype.resetLoginDesign = function () {
        this._loginDesign.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "loginDesignInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loginDesign.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaConfig", {
        get: function () {
            return this._mfaConfig;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.putMfaConfig = function (value) {
        this._mfaConfig.internalValue = value;
    };
    ZeroTrustOrganization.prototype.resetMfaConfig = function () {
        this._mfaConfig.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaConfigurationAllowed", {
        get: function () {
            return this.getBooleanAttribute('mfa_configuration_allowed');
        },
        set: function (value) {
            this._mfaConfigurationAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetMfaConfigurationAllowed = function () {
        this._mfaConfigurationAllowed = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaConfigurationAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaConfigurationAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaRequiredForAllApps", {
        get: function () {
            return this.getBooleanAttribute('mfa_required_for_all_apps');
        },
        set: function (value) {
            this._mfaRequiredForAllApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetMfaRequiredForAllApps = function () {
        this._mfaRequiredForAllApps = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaRequiredForAllAppsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaRequiredForAllApps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaSshPivKeyRequirements", {
        get: function () {
            return this._mfaSshPivKeyRequirements;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.putMfaSshPivKeyRequirements = function (value) {
        this._mfaSshPivKeyRequirements.internalValue = value;
    };
    ZeroTrustOrganization.prototype.resetMfaSshPivKeyRequirements = function () {
        this._mfaSshPivKeyRequirements.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "mfaSshPivKeyRequirementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaSshPivKeyRequirements.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "sessionDuration", {
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "uiReadOnlyToggleReason", {
        get: function () {
            return this.getStringAttribute('ui_read_only_toggle_reason');
        },
        set: function (value) {
            this._uiReadOnlyToggleReason = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetUiReadOnlyToggleReason = function () {
        this._uiReadOnlyToggleReason = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "uiReadOnlyToggleReasonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uiReadOnlyToggleReason;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "userSeatExpirationInactiveTime", {
        get: function () {
            return this.getStringAttribute('user_seat_expiration_inactive_time');
        },
        set: function (value) {
            this._userSeatExpirationInactiveTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetUserSeatExpirationInactiveTime = function () {
        this._userSeatExpirationInactiveTime = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "userSeatExpirationInactiveTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userSeatExpirationInactiveTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "warpAuthSessionDuration", {
        get: function () {
            return this.getStringAttribute('warp_auth_session_duration');
        },
        set: function (value) {
            this._warpAuthSessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetWarpAuthSessionDuration = function () {
        this._warpAuthSessionDuration = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "warpAuthSessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._warpAuthSessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustOrganization.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustOrganization.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZeroTrustOrganization.prototype, "zoneIdInput", {
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
    ZeroTrustOrganization.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_authenticate_via_warp: cdktf.booleanToTerraform(this._allowAuthenticateViaWarp),
            auth_domain: cdktf.stringToTerraform(this._authDomain),
            auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
            custom_pages: zeroTrustOrganizationCustomPagesToTerraform(this._customPages.internalValue),
            deny_unmatched_requests: cdktf.booleanToTerraform(this._denyUnmatchedRequests),
            deny_unmatched_requests_exempted_zone_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._denyUnmatchedRequestsExemptedZoneNames),
            is_ui_read_only: cdktf.booleanToTerraform(this._isUiReadOnly),
            login_design: zeroTrustOrganizationLoginDesignToTerraform(this._loginDesign.internalValue),
            mfa_config: zeroTrustOrganizationMfaConfigToTerraform(this._mfaConfig.internalValue),
            mfa_configuration_allowed: cdktf.booleanToTerraform(this._mfaConfigurationAllowed),
            mfa_required_for_all_apps: cdktf.booleanToTerraform(this._mfaRequiredForAllApps),
            mfa_ssh_piv_key_requirements: zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(this._mfaSshPivKeyRequirements.internalValue),
            name: cdktf.stringToTerraform(this._name),
            session_duration: cdktf.stringToTerraform(this._sessionDuration),
            ui_read_only_toggle_reason: cdktf.stringToTerraform(this._uiReadOnlyToggleReason),
            user_seat_expiration_inactive_time: cdktf.stringToTerraform(this._userSeatExpirationInactiveTime),
            warp_auth_session_duration: cdktf.stringToTerraform(this._warpAuthSessionDuration),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZeroTrustOrganization.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allow_authenticate_via_warp: {
                value: cdktf.booleanToHclTerraform(this._allowAuthenticateViaWarp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auth_domain: {
                value: cdktf.stringToHclTerraform(this._authDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_redirect_to_identity: {
                value: cdktf.booleanToHclTerraform(this._autoRedirectToIdentity),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            custom_pages: {
                value: zeroTrustOrganizationCustomPagesToHclTerraform(this._customPages.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustOrganizationCustomPages",
            },
            deny_unmatched_requests: {
                value: cdktf.booleanToHclTerraform(this._denyUnmatchedRequests),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            deny_unmatched_requests_exempted_zone_names: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._denyUnmatchedRequestsExemptedZoneNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            is_ui_read_only: {
                value: cdktf.booleanToHclTerraform(this._isUiReadOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            login_design: {
                value: zeroTrustOrganizationLoginDesignToHclTerraform(this._loginDesign.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustOrganizationLoginDesign",
            },
            mfa_config: {
                value: zeroTrustOrganizationMfaConfigToHclTerraform(this._mfaConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustOrganizationMfaConfig",
            },
            mfa_configuration_allowed: {
                value: cdktf.booleanToHclTerraform(this._mfaConfigurationAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mfa_required_for_all_apps: {
                value: cdktf.booleanToHclTerraform(this._mfaRequiredForAllApps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mfa_ssh_piv_key_requirements: {
                value: zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(this._mfaSshPivKeyRequirements.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustOrganizationMfaSshPivKeyRequirements",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_duration: {
                value: cdktf.stringToHclTerraform(this._sessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ui_read_only_toggle_reason: {
                value: cdktf.stringToHclTerraform(this._uiReadOnlyToggleReason),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_seat_expiration_inactive_time: {
                value: cdktf.stringToHclTerraform(this._userSeatExpirationInactiveTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            warp_auth_session_duration: {
                value: cdktf.stringToHclTerraform(this._warpAuthSessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    ZeroTrustOrganization.tfResourceType = "cloudflare_zero_trust_organization";
    return ZeroTrustOrganization;
}(cdktf.TerraformResource));
exports.ZeroTrustOrganization = ZeroTrustOrganization;
