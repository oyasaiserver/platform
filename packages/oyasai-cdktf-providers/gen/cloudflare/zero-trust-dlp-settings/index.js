// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDlpSettingsPayloadLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        masking_level: cdktf.stringToTerraform(struct.maskingLevel),
        public_key: cdktf.stringToTerraform(struct.publicKey),
    };
}
export function zeroTrustDlpSettingsPayloadLoggingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        masking_level: {
            value: cdktf.stringToHclTerraform(struct.maskingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        public_key: {
            value: cdktf.stringToHclTerraform(struct.publicKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpSettingsPayloadLoggingOutputReference extends cdktf.ComplexObject {
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
        if (this._maskingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.maskingLevel = this._maskingLevel;
        }
        if (this._publicKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicKey = this._publicKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maskingLevel = undefined;
            this._publicKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maskingLevel = value.maskingLevel;
            this._publicKey = value.publicKey;
        }
    }
    // masking_level - computed: true, optional: true, required: false
    _maskingLevel;
    get maskingLevel() {
        return this.getStringAttribute('masking_level');
    }
    set maskingLevel(value) {
        this._maskingLevel = value;
    }
    resetMaskingLevel() {
        this._maskingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maskingLevelInput() {
        return this._maskingLevel;
    }
    // public_key - computed: true, optional: true, required: false
    _publicKey;
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    set publicKey(value) {
        this._publicKey = value;
    }
    resetPublicKey() {
        this._publicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicKeyInput() {
        return this._publicKey;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}
*/
export class ZeroTrustDlpSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_dlp_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpSettings to import
    * @param importFromId The id of the existing ZeroTrustDlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_settings',
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
        this._aiContextAnalysis = config.aiContextAnalysis;
        this._ocr = config.ocr;
        this._payloadLogging.internalValue = config.payloadLogging;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // ai_context_analysis - computed: true, optional: true, required: false
    _aiContextAnalysis;
    get aiContextAnalysis() {
        return this.getBooleanAttribute('ai_context_analysis');
    }
    set aiContextAnalysis(value) {
        this._aiContextAnalysis = value;
    }
    resetAiContextAnalysis() {
        this._aiContextAnalysis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiContextAnalysisInput() {
        return this._aiContextAnalysis;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ocr - computed: true, optional: true, required: false
    _ocr;
    get ocr() {
        return this.getBooleanAttribute('ocr');
    }
    set ocr(value) {
        this._ocr = value;
    }
    resetOcr() {
        this._ocr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ocrInput() {
        return this._ocr;
    }
    // payload_logging - computed: true, optional: true, required: false
    _payloadLogging = new ZeroTrustDlpSettingsPayloadLoggingOutputReference(this, "payload_logging");
    get payloadLogging() {
        return this._payloadLogging;
    }
    putPayloadLogging(value) {
        this._payloadLogging.internalValue = value;
    }
    resetPayloadLogging() {
        this._payloadLogging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get payloadLoggingInput() {
        return this._payloadLogging.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_context_analysis: cdktf.booleanToTerraform(this._aiContextAnalysis),
            ocr: cdktf.booleanToTerraform(this._ocr),
            payload_logging: zeroTrustDlpSettingsPayloadLoggingToTerraform(this._payloadLogging.internalValue),
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
            ai_context_analysis: {
                value: cdktf.booleanToHclTerraform(this._aiContextAnalysis),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ocr: {
                value: cdktf.booleanToHclTerraform(this._ocr),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            payload_logging: {
                value: zeroTrustDlpSettingsPayloadLoggingToHclTerraform(this._payloadLogging.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDlpSettingsPayloadLogging",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
