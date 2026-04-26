// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustOrganizationCustomPagesToTerraform(struct) {
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
export function zeroTrustOrganizationCustomPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustOrganizationCustomPagesOutputReference extends cdktf.ComplexObject {
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
        if (this._forbidden !== undefined) {
            hasAnyValues = true;
            internalValueResult.forbidden = this._forbidden;
        }
        if (this._identityDenied !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityDenied = this._identityDenied;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // forbidden - computed: false, optional: true, required: false
    _forbidden;
    get forbidden() {
        return this.getStringAttribute('forbidden');
    }
    set forbidden(value) {
        this._forbidden = value;
    }
    resetForbidden() {
        this._forbidden = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forbiddenInput() {
        return this._forbidden;
    }
    // identity_denied - computed: false, optional: true, required: false
    _identityDenied;
    get identityDenied() {
        return this.getStringAttribute('identity_denied');
    }
    set identityDenied(value) {
        this._identityDenied = value;
    }
    resetIdentityDenied() {
        this._identityDenied = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityDeniedInput() {
        return this._identityDenied;
    }
}
export function zeroTrustOrganizationLoginDesignToTerraform(struct) {
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
export function zeroTrustOrganizationLoginDesignToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // background_color - computed: false, optional: true, required: false
    _backgroundColor;
    get backgroundColor() {
        return this.getStringAttribute('background_color');
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
    }
    resetBackgroundColor() {
        this._backgroundColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backgroundColorInput() {
        return this._backgroundColor;
    }
    // footer_text - computed: false, optional: true, required: false
    _footerText;
    get footerText() {
        return this.getStringAttribute('footer_text');
    }
    set footerText(value) {
        this._footerText = value;
    }
    resetFooterText() {
        this._footerText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get footerTextInput() {
        return this._footerText;
    }
    // header_text - computed: false, optional: true, required: false
    _headerText;
    get headerText() {
        return this.getStringAttribute('header_text');
    }
    set headerText(value) {
        this._headerText = value;
    }
    resetHeaderText() {
        this._headerText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerTextInput() {
        return this._headerText;
    }
    // logo_path - computed: false, optional: true, required: false
    _logoPath;
    get logoPath() {
        return this.getStringAttribute('logo_path');
    }
    set logoPath(value) {
        this._logoPath = value;
    }
    resetLogoPath() {
        this._logoPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoPathInput() {
        return this._logoPath;
    }
    // text_color - computed: false, optional: true, required: false
    _textColor;
    get textColor() {
        return this.getStringAttribute('text_color');
    }
    set textColor(value) {
        this._textColor = value;
    }
    resetTextColor() {
        this._textColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get textColorInput() {
        return this._textColor;
    }
}
export function zeroTrustOrganizationMfaConfigToTerraform(struct) {
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
export function zeroTrustOrganizationMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustOrganizationMfaConfigOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // allowed_authenticators - computed: false, optional: true, required: false
    _allowedAuthenticators;
    get allowedAuthenticators() {
        return this.getListAttribute('allowed_authenticators');
    }
    set allowedAuthenticators(value) {
        this._allowedAuthenticators = value;
    }
    resetAllowedAuthenticators() {
        this._allowedAuthenticators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedAuthenticatorsInput() {
        return this._allowedAuthenticators;
    }
    // amr_matching_session_duration - computed: false, optional: true, required: false
    _amrMatchingSessionDuration;
    get amrMatchingSessionDuration() {
        return this.getStringAttribute('amr_matching_session_duration');
    }
    set amrMatchingSessionDuration(value) {
        this._amrMatchingSessionDuration = value;
    }
    resetAmrMatchingSessionDuration() {
        this._amrMatchingSessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get amrMatchingSessionDurationInput() {
        return this._amrMatchingSessionDuration;
    }
    // required_aaguids - computed: false, optional: true, required: false
    _requiredAaguids;
    get requiredAaguids() {
        return this.getStringAttribute('required_aaguids');
    }
    set requiredAaguids(value) {
        this._requiredAaguids = value;
    }
    resetRequiredAaguids() {
        this._requiredAaguids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredAaguidsInput() {
        return this._requiredAaguids;
    }
    // session_duration - computed: false, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
}
export function zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct) {
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
export function zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // pin_policy - computed: false, optional: true, required: false
    _pinPolicy;
    get pinPolicy() {
        return this.getStringAttribute('pin_policy');
    }
    set pinPolicy(value) {
        this._pinPolicy = value;
    }
    resetPinPolicy() {
        this._pinPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pinPolicyInput() {
        return this._pinPolicy;
    }
    // require_fips_device - computed: false, optional: true, required: false
    _requireFipsDevice;
    get requireFipsDevice() {
        return this.getBooleanAttribute('require_fips_device');
    }
    set requireFipsDevice(value) {
        this._requireFipsDevice = value;
    }
    resetRequireFipsDevice() {
        this._requireFipsDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireFipsDeviceInput() {
        return this._requireFipsDevice;
    }
    // ssh_key_size - computed: false, optional: true, required: false
    _sshKeySize;
    get sshKeySize() {
        return this.getNumberListAttribute('ssh_key_size');
    }
    set sshKeySize(value) {
        this._sshKeySize = value;
    }
    resetSshKeySize() {
        this._sshKeySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshKeySizeInput() {
        return this._sshKeySize;
    }
    // ssh_key_type - computed: false, optional: true, required: false
    _sshKeyType;
    get sshKeyType() {
        return this.getListAttribute('ssh_key_type');
    }
    set sshKeyType(value) {
        this._sshKeyType = value;
    }
    resetSshKeyType() {
        this._sshKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshKeyTypeInput() {
        return this._sshKeyType;
    }
    // touch_policy - computed: false, optional: true, required: false
    _touchPolicy;
    get touchPolicy() {
        return this.getStringAttribute('touch_policy');
    }
    set touchPolicy(value) {
        this._touchPolicy = value;
    }
    resetTouchPolicy() {
        this._touchPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get touchPolicyInput() {
        return this._touchPolicy;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export class ZeroTrustOrganization extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_organization";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider });
    }
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
    constructor(scope, id, config = {}) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._allowAuthenticateViaWarp = config.allowAuthenticateViaWarp;
        this._authDomain = config.authDomain;
        this._autoRedirectToIdentity = config.autoRedirectToIdentity;
        this._customPages.internalValue = config.customPages;
        this._denyUnmatchedRequests = config.denyUnmatchedRequests;
        this._denyUnmatchedRequestsExemptedZoneNames = config.denyUnmatchedRequestsExemptedZoneNames;
        this._isUiReadOnly = config.isUiReadOnly;
        this._loginDesign.internalValue = config.loginDesign;
        this._mfaConfig.internalValue = config.mfaConfig;
        this._mfaConfigurationAllowed = config.mfaConfigurationAllowed;
        this._mfaRequiredForAllApps = config.mfaRequiredForAllApps;
        this._mfaSshPivKeyRequirements.internalValue = config.mfaSshPivKeyRequirements;
        this._name = config.name;
        this._sessionDuration = config.sessionDuration;
        this._uiReadOnlyToggleReason = config.uiReadOnlyToggleReason;
        this._userSeatExpirationInactiveTime = config.userSeatExpirationInactiveTime;
        this._warpAuthSessionDuration = config.warpAuthSessionDuration;
        this._zoneId = config.zoneId;
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
    // allow_authenticate_via_warp - computed: true, optional: true, required: false
    _allowAuthenticateViaWarp;
    get allowAuthenticateViaWarp() {
        return this.getBooleanAttribute('allow_authenticate_via_warp');
    }
    set allowAuthenticateViaWarp(value) {
        this._allowAuthenticateViaWarp = value;
    }
    resetAllowAuthenticateViaWarp() {
        this._allowAuthenticateViaWarp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAuthenticateViaWarpInput() {
        return this._allowAuthenticateViaWarp;
    }
    // auth_domain - computed: false, optional: true, required: false
    _authDomain;
    get authDomain() {
        return this.getStringAttribute('auth_domain');
    }
    set authDomain(value) {
        this._authDomain = value;
    }
    resetAuthDomain() {
        this._authDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authDomainInput() {
        return this._authDomain;
    }
    // auto_redirect_to_identity - computed: true, optional: true, required: false
    _autoRedirectToIdentity;
    get autoRedirectToIdentity() {
        return this.getBooleanAttribute('auto_redirect_to_identity');
    }
    set autoRedirectToIdentity(value) {
        this._autoRedirectToIdentity = value;
    }
    resetAutoRedirectToIdentity() {
        this._autoRedirectToIdentity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRedirectToIdentityInput() {
        return this._autoRedirectToIdentity;
    }
    // custom_pages - computed: false, optional: true, required: false
    _customPages = new ZeroTrustOrganizationCustomPagesOutputReference(this, "custom_pages");
    get customPages() {
        return this._customPages;
    }
    putCustomPages(value) {
        this._customPages.internalValue = value;
    }
    resetCustomPages() {
        this._customPages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customPagesInput() {
        return this._customPages.internalValue;
    }
    // deny_unmatched_requests - computed: false, optional: true, required: false
    _denyUnmatchedRequests;
    get denyUnmatchedRequests() {
        return this.getBooleanAttribute('deny_unmatched_requests');
    }
    set denyUnmatchedRequests(value) {
        this._denyUnmatchedRequests = value;
    }
    resetDenyUnmatchedRequests() {
        this._denyUnmatchedRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get denyUnmatchedRequestsInput() {
        return this._denyUnmatchedRequests;
    }
    // deny_unmatched_requests_exempted_zone_names - computed: false, optional: true, required: false
    _denyUnmatchedRequestsExemptedZoneNames;
    get denyUnmatchedRequestsExemptedZoneNames() {
        return this.getListAttribute('deny_unmatched_requests_exempted_zone_names');
    }
    set denyUnmatchedRequestsExemptedZoneNames(value) {
        this._denyUnmatchedRequestsExemptedZoneNames = value;
    }
    resetDenyUnmatchedRequestsExemptedZoneNames() {
        this._denyUnmatchedRequestsExemptedZoneNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get denyUnmatchedRequestsExemptedZoneNamesInput() {
        return this._denyUnmatchedRequestsExemptedZoneNames;
    }
    // is_ui_read_only - computed: true, optional: true, required: false
    _isUiReadOnly;
    get isUiReadOnly() {
        return this.getBooleanAttribute('is_ui_read_only');
    }
    set isUiReadOnly(value) {
        this._isUiReadOnly = value;
    }
    resetIsUiReadOnly() {
        this._isUiReadOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isUiReadOnlyInput() {
        return this._isUiReadOnly;
    }
    // login_design - computed: false, optional: true, required: false
    _loginDesign = new ZeroTrustOrganizationLoginDesignOutputReference(this, "login_design");
    get loginDesign() {
        return this._loginDesign;
    }
    putLoginDesign(value) {
        this._loginDesign.internalValue = value;
    }
    resetLoginDesign() {
        this._loginDesign.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginDesignInput() {
        return this._loginDesign.internalValue;
    }
    // mfa_config - computed: false, optional: true, required: false
    _mfaConfig = new ZeroTrustOrganizationMfaConfigOutputReference(this, "mfa_config");
    get mfaConfig() {
        return this._mfaConfig;
    }
    putMfaConfig(value) {
        this._mfaConfig.internalValue = value;
    }
    resetMfaConfig() {
        this._mfaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaConfigInput() {
        return this._mfaConfig.internalValue;
    }
    // mfa_configuration_allowed - computed: true, optional: true, required: false
    _mfaConfigurationAllowed;
    get mfaConfigurationAllowed() {
        return this.getBooleanAttribute('mfa_configuration_allowed');
    }
    set mfaConfigurationAllowed(value) {
        this._mfaConfigurationAllowed = value;
    }
    resetMfaConfigurationAllowed() {
        this._mfaConfigurationAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaConfigurationAllowedInput() {
        return this._mfaConfigurationAllowed;
    }
    // mfa_required_for_all_apps - computed: true, optional: true, required: false
    _mfaRequiredForAllApps;
    get mfaRequiredForAllApps() {
        return this.getBooleanAttribute('mfa_required_for_all_apps');
    }
    set mfaRequiredForAllApps(value) {
        this._mfaRequiredForAllApps = value;
    }
    resetMfaRequiredForAllApps() {
        this._mfaRequiredForAllApps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaRequiredForAllAppsInput() {
        return this._mfaRequiredForAllApps;
    }
    // mfa_ssh_piv_key_requirements - computed: false, optional: true, required: false
    _mfaSshPivKeyRequirements = new ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(this, "mfa_ssh_piv_key_requirements");
    get mfaSshPivKeyRequirements() {
        return this._mfaSshPivKeyRequirements;
    }
    putMfaSshPivKeyRequirements(value) {
        this._mfaSshPivKeyRequirements.internalValue = value;
    }
    resetMfaSshPivKeyRequirements() {
        this._mfaSshPivKeyRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaSshPivKeyRequirementsInput() {
        return this._mfaSshPivKeyRequirements.internalValue;
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // session_duration - computed: false, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
    // ui_read_only_toggle_reason - computed: true, optional: true, required: false
    _uiReadOnlyToggleReason;
    get uiReadOnlyToggleReason() {
        return this.getStringAttribute('ui_read_only_toggle_reason');
    }
    set uiReadOnlyToggleReason(value) {
        this._uiReadOnlyToggleReason = value;
    }
    resetUiReadOnlyToggleReason() {
        this._uiReadOnlyToggleReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uiReadOnlyToggleReasonInput() {
        return this._uiReadOnlyToggleReason;
    }
    // user_seat_expiration_inactive_time - computed: false, optional: true, required: false
    _userSeatExpirationInactiveTime;
    get userSeatExpirationInactiveTime() {
        return this.getStringAttribute('user_seat_expiration_inactive_time');
    }
    set userSeatExpirationInactiveTime(value) {
        this._userSeatExpirationInactiveTime = value;
    }
    resetUserSeatExpirationInactiveTime() {
        this._userSeatExpirationInactiveTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userSeatExpirationInactiveTimeInput() {
        return this._userSeatExpirationInactiveTime;
    }
    // warp_auth_session_duration - computed: false, optional: true, required: false
    _warpAuthSessionDuration;
    get warpAuthSessionDuration() {
        return this.getStringAttribute('warp_auth_session_duration');
    }
    set warpAuthSessionDuration(value) {
        this._warpAuthSessionDuration = value;
    }
    resetWarpAuthSessionDuration() {
        this._warpAuthSessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get warpAuthSessionDurationInput() {
        return this._warpAuthSessionDuration;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
