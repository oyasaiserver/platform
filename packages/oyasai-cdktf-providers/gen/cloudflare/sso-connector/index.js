// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function ssoConnectorVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function ssoConnectorVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class SsoConnectorVerificationOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // code - computed: true, optional: false, required: false
    get code() {
        return this.getStringAttribute('code');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector cloudflare_sso_connector}
*/
export class SsoConnector extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_sso_connector";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoConnector to import
    * @param importFromId The id of the existing SsoConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoConnector to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_sso_connector", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector cloudflare_sso_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoConnectorConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_sso_connector',
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
        });
        this._accountId = config.accountId;
        this._beginVerification = config.beginVerification;
        this._emailDomain = config.emailDomain;
        this._enabled = config.enabled;
        this._useFedrampLanguage = config.useFedrampLanguage;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // begin_verification - computed: true, optional: true, required: false
    _beginVerification;
    get beginVerification() {
        return this.getBooleanAttribute('begin_verification');
    }
    set beginVerification(value) {
        this._beginVerification = value;
    }
    resetBeginVerification() {
        this._beginVerification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get beginVerificationInput() {
        return this._beginVerification;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // email_domain - computed: false, optional: false, required: true
    _emailDomain;
    get emailDomain() {
        return this.getStringAttribute('email_domain');
    }
    set emailDomain(value) {
        this._emailDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // updated_on - computed: true, optional: false, required: false
    get updatedOn() {
        return this.getStringAttribute('updated_on');
    }
    // use_fedramp_language - computed: true, optional: true, required: false
    _useFedrampLanguage;
    get useFedrampLanguage() {
        return this.getBooleanAttribute('use_fedramp_language');
    }
    set useFedrampLanguage(value) {
        this._useFedrampLanguage = value;
    }
    resetUseFedrampLanguage() {
        this._useFedrampLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useFedrampLanguageInput() {
        return this._useFedrampLanguage;
    }
    // verification - computed: true, optional: false, required: false
    _verification = new SsoConnectorVerificationOutputReference(this, "verification");
    get verification() {
        return this._verification;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            begin_verification: cdktf.booleanToTerraform(this._beginVerification),
            email_domain: cdktf.stringToTerraform(this._emailDomain),
            enabled: cdktf.booleanToTerraform(this._enabled),
            use_fedramp_language: cdktf.booleanToTerraform(this._useFedrampLanguage),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            begin_verification: {
                value: cdktf.booleanToHclTerraform(this._beginVerification),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            email_domain: {
                value: cdktf.stringToHclTerraform(this._emailDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            use_fedramp_language: {
                value: cdktf.booleanToHclTerraform(this._useFedrampLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
