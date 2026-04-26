// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDlpPredefinedProfileEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zeroTrustDlpPredefinedProfileEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDlpPredefinedProfileEntriesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._id = value.id;
        }
    }
    // enabled - computed: true, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // id - computed: true, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class ZeroTrustDlpPredefinedProfileEntriesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ZeroTrustDlpPredefinedProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}
*/
export class ZeroTrustDlpPredefinedProfile extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_dlp_predefined_profile";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import
    * @param importFromId The id of the existing ZeroTrustDlpPredefinedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_predefined_profile", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpPredefinedProfileConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_predefined_profile',
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
        this._aiContextEnabled = config.aiContextEnabled;
        this._allowedMatchCount = config.allowedMatchCount;
        this._confidenceThreshold = config.confidenceThreshold;
        this._enabledEntries = config.enabledEntries;
        this._entries.internalValue = config.entries;
        this._ocrEnabled = config.ocrEnabled;
        this._profileId = config.profileId;
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
    // ai_context_enabled - computed: true, optional: true, required: false
    _aiContextEnabled;
    get aiContextEnabled() {
        return this.getBooleanAttribute('ai_context_enabled');
    }
    set aiContextEnabled(value) {
        this._aiContextEnabled = value;
    }
    resetAiContextEnabled() {
        this._aiContextEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiContextEnabledInput() {
        return this._aiContextEnabled;
    }
    // allowed_match_count - computed: true, optional: true, required: false
    _allowedMatchCount;
    get allowedMatchCount() {
        return this.getNumberAttribute('allowed_match_count');
    }
    set allowedMatchCount(value) {
        this._allowedMatchCount = value;
    }
    resetAllowedMatchCount() {
        this._allowedMatchCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedMatchCountInput() {
        return this._allowedMatchCount;
    }
    // confidence_threshold - computed: true, optional: true, required: false
    _confidenceThreshold;
    get confidenceThreshold() {
        return this.getStringAttribute('confidence_threshold');
    }
    set confidenceThreshold(value) {
        this._confidenceThreshold = value;
    }
    resetConfidenceThreshold() {
        this._confidenceThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get confidenceThresholdInput() {
        return this._confidenceThreshold;
    }
    // enabled_entries - computed: false, optional: true, required: false
    _enabledEntries;
    get enabledEntries() {
        return this.getListAttribute('enabled_entries');
    }
    set enabledEntries(value) {
        this._enabledEntries = value;
    }
    resetEnabledEntries() {
        this._enabledEntries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledEntriesInput() {
        return this._enabledEntries;
    }
    // entries - computed: true, optional: true, required: false
    _entries = new ZeroTrustDlpPredefinedProfileEntriesList(this, "entries", false);
    get entries() {
        return this._entries;
    }
    putEntries(value) {
        this._entries.internalValue = value;
    }
    resetEntries() {
        this._entries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entriesInput() {
        return this._entries.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // ocr_enabled - computed: true, optional: true, required: false
    _ocrEnabled;
    get ocrEnabled() {
        return this.getBooleanAttribute('ocr_enabled');
    }
    set ocrEnabled(value) {
        this._ocrEnabled = value;
    }
    resetOcrEnabled() {
        this._ocrEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ocrEnabledInput() {
        return this._ocrEnabled;
    }
    // open_access - computed: true, optional: false, required: false
    get openAccess() {
        return this.getBooleanAttribute('open_access');
    }
    // profile_id - computed: false, optional: false, required: true
    _profileId;
    get profileId() {
        return this.getStringAttribute('profile_id');
    }
    set profileId(value) {
        this._profileId = value;
    }
    // Temporarily expose input value. Use with caution.
    get profileIdInput() {
        return this._profileId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_context_enabled: cdktf.booleanToTerraform(this._aiContextEnabled),
            allowed_match_count: cdktf.numberToTerraform(this._allowedMatchCount),
            confidence_threshold: cdktf.stringToTerraform(this._confidenceThreshold),
            enabled_entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledEntries),
            entries: cdktf.listMapper(zeroTrustDlpPredefinedProfileEntriesToTerraform, false)(this._entries.internalValue),
            ocr_enabled: cdktf.booleanToTerraform(this._ocrEnabled),
            profile_id: cdktf.stringToTerraform(this._profileId),
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
            ai_context_enabled: {
                value: cdktf.booleanToHclTerraform(this._aiContextEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_match_count: {
                value: cdktf.numberToHclTerraform(this._allowedMatchCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            confidence_threshold: {
                value: cdktf.stringToHclTerraform(this._confidenceThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled_entries: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledEntries),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            entries: {
                value: cdktf.listMapperHcl(zeroTrustDlpPredefinedProfileEntriesToHclTerraform, false)(this._entries.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDlpPredefinedProfileEntriesList",
            },
            ocr_enabled: {
                value: cdktf.booleanToHclTerraform(this._ocrEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
