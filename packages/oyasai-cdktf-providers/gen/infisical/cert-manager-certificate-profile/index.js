"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile
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
exports.CertManagerCertificateProfile = exports.CertManagerCertificateProfileExternalConfigsOutputReference = exports.CertManagerCertificateProfileEstConfigOutputReference = exports.CertManagerCertificateProfileApiConfigOutputReference = void 0;
exports.certManagerCertificateProfileApiConfigToTerraform = certManagerCertificateProfileApiConfigToTerraform;
exports.certManagerCertificateProfileApiConfigToHclTerraform = certManagerCertificateProfileApiConfigToHclTerraform;
exports.certManagerCertificateProfileEstConfigToTerraform = certManagerCertificateProfileEstConfigToTerraform;
exports.certManagerCertificateProfileEstConfigToHclTerraform = certManagerCertificateProfileEstConfigToHclTerraform;
exports.certManagerCertificateProfileExternalConfigsToTerraform = certManagerCertificateProfileExternalConfigsToTerraform;
exports.certManagerCertificateProfileExternalConfigsToHclTerraform = certManagerCertificateProfileExternalConfigsToHclTerraform;
var cdktf = require("cdktf");
function certManagerCertificateProfileApiConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_renew: cdktf.booleanToTerraform(struct.autoRenew),
        renew_before_days: cdktf.numberToTerraform(struct.renewBeforeDays),
    };
}
function certManagerCertificateProfileApiConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        auto_renew: {
            value: cdktf.booleanToHclTerraform(struct.autoRenew),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        renew_before_days: {
            value: cdktf.numberToHclTerraform(struct.renewBeforeDays),
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
}
var CertManagerCertificateProfileApiConfigOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificateProfileApiConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificateProfileApiConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificateProfileApiConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._autoRenew !== undefined) {
                hasAnyValues = true;
                internalValueResult.autoRenew = this._autoRenew;
            }
            if (this._renewBeforeDays !== undefined) {
                hasAnyValues = true;
                internalValueResult.renewBeforeDays = this._renewBeforeDays;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._autoRenew = undefined;
                this._renewBeforeDays = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._autoRenew = value.autoRenew;
                this._renewBeforeDays = value.renewBeforeDays;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfileApiConfigOutputReference.prototype, "autoRenew", {
        get: function () {
            return this.getBooleanAttribute('auto_renew');
        },
        set: function (value) {
            this._autoRenew = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfileApiConfigOutputReference.prototype.resetAutoRenew = function () {
        this._autoRenew = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfileApiConfigOutputReference.prototype, "autoRenewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRenew;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfileApiConfigOutputReference.prototype, "renewBeforeDays", {
        get: function () {
            return this.getNumberAttribute('renew_before_days');
        },
        set: function (value) {
            this._renewBeforeDays = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfileApiConfigOutputReference.prototype.resetRenewBeforeDays = function () {
        this._renewBeforeDays = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfileApiConfigOutputReference.prototype, "renewBeforeDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._renewBeforeDays;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificateProfileApiConfigOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificateProfileApiConfigOutputReference = CertManagerCertificateProfileApiConfigOutputReference;
function certManagerCertificateProfileEstConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca_chain: cdktf.stringToTerraform(struct.caChain),
        disable_bootstrap_ca_validation: cdktf.booleanToTerraform(struct.disableBootstrapCaValidation),
        passphrase: cdktf.stringToTerraform(struct.passphrase),
    };
}
function certManagerCertificateProfileEstConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ca_chain: {
            value: cdktf.stringToHclTerraform(struct.caChain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disable_bootstrap_ca_validation: {
            value: cdktf.booleanToHclTerraform(struct.disableBootstrapCaValidation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        passphrase: {
            value: cdktf.stringToHclTerraform(struct.passphrase),
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
var CertManagerCertificateProfileEstConfigOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificateProfileEstConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificateProfileEstConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._caChain !== undefined) {
                hasAnyValues = true;
                internalValueResult.caChain = this._caChain;
            }
            if (this._disableBootstrapCaValidation !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableBootstrapCaValidation = this._disableBootstrapCaValidation;
            }
            if (this._passphrase !== undefined) {
                hasAnyValues = true;
                internalValueResult.passphrase = this._passphrase;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._caChain = undefined;
                this._disableBootstrapCaValidation = undefined;
                this._passphrase = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._caChain = value.caChain;
                this._disableBootstrapCaValidation = value.disableBootstrapCaValidation;
                this._passphrase = value.passphrase;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "caChain", {
        get: function () {
            return this.getStringAttribute('ca_chain');
        },
        set: function (value) {
            this._caChain = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfileEstConfigOutputReference.prototype.resetCaChain = function () {
        this._caChain = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "caChainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caChain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "disableBootstrapCaValidation", {
        get: function () {
            return this.getBooleanAttribute('disable_bootstrap_ca_validation');
        },
        set: function (value) {
            this._disableBootstrapCaValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfileEstConfigOutputReference.prototype.resetDisableBootstrapCaValidation = function () {
        this._disableBootstrapCaValidation = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "disableBootstrapCaValidationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableBootstrapCaValidation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "passphrase", {
        get: function () {
            return this.getStringAttribute('passphrase');
        },
        set: function (value) {
            this._passphrase = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfileEstConfigOutputReference.prototype.resetPassphrase = function () {
        this._passphrase = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfileEstConfigOutputReference.prototype, "passphraseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passphrase;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificateProfileEstConfigOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificateProfileEstConfigOutputReference = CertManagerCertificateProfileEstConfigOutputReference;
function certManagerCertificateProfileExternalConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        template: cdktf.stringToTerraform(struct.template),
    };
}
function certManagerCertificateProfileExternalConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        template: {
            value: cdktf.stringToHclTerraform(struct.template),
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
var CertManagerCertificateProfileExternalConfigsOutputReference = /** @class */ (function (_super) {
    __extends(CertManagerCertificateProfileExternalConfigsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertManagerCertificateProfileExternalConfigsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertManagerCertificateProfileExternalConfigsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._template !== undefined) {
                hasAnyValues = true;
                internalValueResult.template = this._template;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._template = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._template = value.template;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfileExternalConfigsOutputReference.prototype, "template", {
        get: function () {
            return this.getStringAttribute('template');
        },
        set: function (value) {
            this._template = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfileExternalConfigsOutputReference.prototype.resetTemplate = function () {
        this._template = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfileExternalConfigsOutputReference.prototype, "templateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._template;
        },
        enumerable: false,
        configurable: true
    });
    return CertManagerCertificateProfileExternalConfigsOutputReference;
}(cdktf.ComplexObject));
exports.CertManagerCertificateProfileExternalConfigsOutputReference = CertManagerCertificateProfileExternalConfigsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile}
*/
var CertManagerCertificateProfile = /** @class */ (function (_super) {
    __extends(CertManagerCertificateProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificateProfileConfig
    */
    function CertManagerCertificateProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_certificate_profile',
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
        // api_config - computed: false, optional: true, required: false
        _this._apiConfig = new CertManagerCertificateProfileApiConfigOutputReference(_this, "api_config");
        // est_config - computed: false, optional: true, required: false
        _this._estConfig = new CertManagerCertificateProfileEstConfigOutputReference(_this, "est_config");
        // external_configs - computed: false, optional: true, required: false
        _this._externalConfigs = new CertManagerCertificateProfileExternalConfigsOutputReference(_this, "external_configs");
        _this._caId = config.caId;
        _this._certificatePolicyId = config.certificatePolicyId;
        _this._description = config.description;
        _this._enrollmentType = config.enrollmentType;
        _this._issuerType = config.issuerType;
        _this._name = config.name;
        _this._projectSlug = config.projectSlug;
        _this._apiConfig.internalValue = config.apiConfig;
        _this._estConfig.internalValue = config.estConfig;
        _this._externalConfigs.internalValue = config.externalConfigs;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCertificateProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificateProfile to import
    * @param importFromId The id of the existing CertManagerCertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificateProfile to import is found
    */
    CertManagerCertificateProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "caId", {
        get: function () {
            return this.getStringAttribute('ca_id');
        },
        set: function (value) {
            this._caId = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfile.prototype.resetCaId = function () {
        this._caId = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "caIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "certificatePolicyId", {
        get: function () {
            return this.getStringAttribute('certificate_policy_id');
        },
        set: function (value) {
            this._certificatePolicyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "certificatePolicyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificatePolicyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfile.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "enrollmentType", {
        get: function () {
            return this.getStringAttribute('enrollment_type');
        },
        set: function (value) {
            this._enrollmentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "enrollmentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enrollmentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "issuerType", {
        get: function () {
            return this.getStringAttribute('issuer_type');
        },
        set: function (value) {
            this._issuerType = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfile.prototype.resetIssuerType = function () {
        this._issuerType = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "issuerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._issuerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "apiConfig", {
        get: function () {
            return this._apiConfig;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfile.prototype.putApiConfig = function (value) {
        this._apiConfig.internalValue = value;
    };
    CertManagerCertificateProfile.prototype.resetApiConfig = function () {
        this._apiConfig.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "apiConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "estConfig", {
        get: function () {
            return this._estConfig;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfile.prototype.putEstConfig = function (value) {
        this._estConfig.internalValue = value;
    };
    CertManagerCertificateProfile.prototype.resetEstConfig = function () {
        this._estConfig.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "estConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._estConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificateProfile.prototype, "externalConfigs", {
        get: function () {
            return this._externalConfigs;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificateProfile.prototype.putExternalConfigs = function (value) {
        this._externalConfigs.internalValue = value;
    };
    CertManagerCertificateProfile.prototype.resetExternalConfigs = function () {
        this._externalConfigs.internalValue = undefined;
    };
    Object.defineProperty(CertManagerCertificateProfile.prototype, "externalConfigsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalConfigs.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CertManagerCertificateProfile.prototype.synthesizeAttributes = function () {
        return {
            ca_id: cdktf.stringToTerraform(this._caId),
            certificate_policy_id: cdktf.stringToTerraform(this._certificatePolicyId),
            description: cdktf.stringToTerraform(this._description),
            enrollment_type: cdktf.stringToTerraform(this._enrollmentType),
            issuer_type: cdktf.stringToTerraform(this._issuerType),
            name: cdktf.stringToTerraform(this._name),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            api_config: certManagerCertificateProfileApiConfigToTerraform(this._apiConfig.internalValue),
            est_config: certManagerCertificateProfileEstConfigToTerraform(this._estConfig.internalValue),
            external_configs: certManagerCertificateProfileExternalConfigsToTerraform(this._externalConfigs.internalValue),
        };
    };
    CertManagerCertificateProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            ca_id: {
                value: cdktf.stringToHclTerraform(this._caId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_policy_id: {
                value: cdktf.stringToHclTerraform(this._certificatePolicyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enrollment_type: {
                value: cdktf.stringToHclTerraform(this._enrollmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            issuer_type: {
                value: cdktf.stringToHclTerraform(this._issuerType),
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
            api_config: {
                value: certManagerCertificateProfileApiConfigToHclTerraform(this._apiConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificateProfileApiConfig",
            },
            est_config: {
                value: certManagerCertificateProfileEstConfigToHclTerraform(this._estConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificateProfileEstConfig",
            },
            external_configs: {
                value: certManagerCertificateProfileExternalConfigsToHclTerraform(this._externalConfigs.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CertManagerCertificateProfileExternalConfigs",
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
    CertManagerCertificateProfile.tfResourceType = "infisical_cert_manager_certificate_profile";
    return CertManagerCertificateProfile;
}(cdktf.TerraformResource));
exports.CertManagerCertificateProfile = CertManagerCertificateProfile;
