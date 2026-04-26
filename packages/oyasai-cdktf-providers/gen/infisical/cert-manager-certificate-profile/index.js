// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function certManagerCertificateProfileApiConfigToTerraform(struct) {
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
export function certManagerCertificateProfileApiConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificateProfileApiConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._autoRenew !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRenew = this._autoRenew;
        }
        if (this._renewBeforeDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.renewBeforeDays = this._renewBeforeDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // auto_renew - computed: true, optional: true, required: false
    _autoRenew;
    get autoRenew() {
        return this.getBooleanAttribute('auto_renew');
    }
    set autoRenew(value) {
        this._autoRenew = value;
    }
    resetAutoRenew() {
        this._autoRenew = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRenewInput() {
        return this._autoRenew;
    }
    // renew_before_days - computed: true, optional: true, required: false
    _renewBeforeDays;
    get renewBeforeDays() {
        return this.getNumberAttribute('renew_before_days');
    }
    set renewBeforeDays(value) {
        this._renewBeforeDays = value;
    }
    resetRenewBeforeDays() {
        this._renewBeforeDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get renewBeforeDaysInput() {
        return this._renewBeforeDays;
    }
}
export function certManagerCertificateProfileEstConfigToTerraform(struct) {
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
export function certManagerCertificateProfileEstConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificateProfileEstConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // ca_chain - computed: false, optional: true, required: false
    _caChain;
    get caChain() {
        return this.getStringAttribute('ca_chain');
    }
    set caChain(value) {
        this._caChain = value;
    }
    resetCaChain() {
        this._caChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caChainInput() {
        return this._caChain;
    }
    // disable_bootstrap_ca_validation - computed: true, optional: true, required: false
    _disableBootstrapCaValidation;
    get disableBootstrapCaValidation() {
        return this.getBooleanAttribute('disable_bootstrap_ca_validation');
    }
    set disableBootstrapCaValidation(value) {
        this._disableBootstrapCaValidation = value;
    }
    resetDisableBootstrapCaValidation() {
        this._disableBootstrapCaValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableBootstrapCaValidationInput() {
        return this._disableBootstrapCaValidation;
    }
    // passphrase - computed: false, optional: true, required: false
    _passphrase;
    get passphrase() {
        return this.getStringAttribute('passphrase');
    }
    set passphrase(value) {
        this._passphrase = value;
    }
    resetPassphrase() {
        this._passphrase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passphraseInput() {
        return this._passphrase;
    }
}
export function certManagerCertificateProfileExternalConfigsToTerraform(struct) {
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
export function certManagerCertificateProfileExternalConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        template: {
            value: cdktf.stringToHclTerraform(struct.template),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CertManagerCertificateProfileExternalConfigsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._template !== undefined) {
            hasAnyValues = true;
            internalValueResult.template = this._template;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // template - computed: false, optional: true, required: false
    _template;
    get template() {
        return this.getStringAttribute('template');
    }
    set template(value) {
        this._template = value;
    }
    resetTemplate() {
        this._template = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get templateInput() {
        return this._template;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile}
*/
export class CertManagerCertificateProfile extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_cert_manager_certificate_profile";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_profile", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._caId = config.caId;
        this._certificatePolicyId = config.certificatePolicyId;
        this._description = config.description;
        this._enrollmentType = config.enrollmentType;
        this._issuerType = config.issuerType;
        this._name = config.name;
        this._projectSlug = config.projectSlug;
        this._apiConfig.internalValue = config.apiConfig;
        this._estConfig.internalValue = config.estConfig;
        this._externalConfigs.internalValue = config.externalConfigs;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ca_id - computed: false, optional: true, required: false
    _caId;
    get caId() {
        return this.getStringAttribute('ca_id');
    }
    set caId(value) {
        this._caId = value;
    }
    resetCaId() {
        this._caId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caIdInput() {
        return this._caId;
    }
    // certificate_policy_id - computed: false, optional: false, required: true
    _certificatePolicyId;
    get certificatePolicyId() {
        return this.getStringAttribute('certificate_policy_id');
    }
    set certificatePolicyId(value) {
        this._certificatePolicyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificatePolicyIdInput() {
        return this._certificatePolicyId;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enrollment_type - computed: false, optional: false, required: true
    _enrollmentType;
    get enrollmentType() {
        return this.getStringAttribute('enrollment_type');
    }
    set enrollmentType(value) {
        this._enrollmentType = value;
    }
    // Temporarily expose input value. Use with caution.
    get enrollmentTypeInput() {
        return this._enrollmentType;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // issuer_type - computed: true, optional: true, required: false
    _issuerType;
    get issuerType() {
        return this.getStringAttribute('issuer_type');
    }
    set issuerType(value) {
        this._issuerType = value;
    }
    resetIssuerType() {
        this._issuerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get issuerTypeInput() {
        return this._issuerType;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // project_slug - computed: false, optional: false, required: true
    _projectSlug;
    get projectSlug() {
        return this.getStringAttribute('project_slug');
    }
    set projectSlug(value) {
        this._projectSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectSlugInput() {
        return this._projectSlug;
    }
    // api_config - computed: false, optional: true, required: false
    _apiConfig = new CertManagerCertificateProfileApiConfigOutputReference(this, "api_config");
    get apiConfig() {
        return this._apiConfig;
    }
    putApiConfig(value) {
        this._apiConfig.internalValue = value;
    }
    resetApiConfig() {
        this._apiConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiConfigInput() {
        return this._apiConfig.internalValue;
    }
    // est_config - computed: false, optional: true, required: false
    _estConfig = new CertManagerCertificateProfileEstConfigOutputReference(this, "est_config");
    get estConfig() {
        return this._estConfig;
    }
    putEstConfig(value) {
        this._estConfig.internalValue = value;
    }
    resetEstConfig() {
        this._estConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get estConfigInput() {
        return this._estConfig.internalValue;
    }
    // external_configs - computed: false, optional: true, required: false
    _externalConfigs = new CertManagerCertificateProfileExternalConfigsOutputReference(this, "external_configs");
    get externalConfigs() {
        return this._externalConfigs;
    }
    putExternalConfigs(value) {
        this._externalConfigs.internalValue = value;
    }
    resetExternalConfigs() {
        this._externalConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalConfigsInput() {
        return this._externalConfigs.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
