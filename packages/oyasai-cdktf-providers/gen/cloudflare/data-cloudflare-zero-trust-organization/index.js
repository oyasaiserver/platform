// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustOrganizationCustomPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustOrganizationCustomPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustOrganizationCustomPagesOutputReference extends cdktf.ComplexObject {
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
    // forbidden - computed: true, optional: false, required: false
    get forbidden() {
        return this.getStringAttribute('forbidden');
    }
    // identity_denied - computed: true, optional: false, required: false
    get identityDenied() {
        return this.getStringAttribute('identity_denied');
    }
}
export function dataCloudflareZeroTrustOrganizationLoginDesignToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustOrganizationLoginDesignToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
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
    // background_color - computed: true, optional: false, required: false
    get backgroundColor() {
        return this.getStringAttribute('background_color');
    }
    // footer_text - computed: true, optional: false, required: false
    get footerText() {
        return this.getStringAttribute('footer_text');
    }
    // header_text - computed: true, optional: false, required: false
    get headerText() {
        return this.getStringAttribute('header_text');
    }
    // logo_path - computed: true, optional: false, required: false
    get logoPath() {
        return this.getStringAttribute('logo_path');
    }
    // text_color - computed: true, optional: false, required: false
    get textColor() {
        return this.getStringAttribute('text_color');
    }
}
export function dataCloudflareZeroTrustOrganizationMfaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustOrganizationMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustOrganizationMfaConfigOutputReference extends cdktf.ComplexObject {
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
    // allowed_authenticators - computed: true, optional: false, required: false
    get allowedAuthenticators() {
        return this.getListAttribute('allowed_authenticators');
    }
    // amr_matching_session_duration - computed: true, optional: false, required: false
    get amrMatchingSessionDuration() {
        return this.getStringAttribute('amr_matching_session_duration');
    }
    // required_aaguids - computed: true, optional: false, required: false
    get requiredAaguids() {
        return this.getStringAttribute('required_aaguids');
    }
    // session_duration - computed: true, optional: false, required: false
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
}
export function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference extends cdktf.ComplexObject {
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
    // pin_policy - computed: true, optional: false, required: false
    get pinPolicy() {
        return this.getStringAttribute('pin_policy');
    }
    // require_fips_device - computed: true, optional: false, required: false
    get requireFipsDevice() {
        return this.getBooleanAttribute('require_fips_device');
    }
    // ssh_key_size - computed: true, optional: false, required: false
    get sshKeySize() {
        return this.getNumberListAttribute('ssh_key_size');
    }
    // ssh_key_type - computed: true, optional: false, required: false
    get sshKeyType() {
        return this.getListAttribute('ssh_key_type');
    }
    // touch_policy - computed: true, optional: false, required: false
    get touchPolicy() {
        return this.getStringAttribute('touch_policy');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export class DataCloudflareZeroTrustOrganization extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_organization";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustOrganization to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustOrganization to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustOrganizationConfig = {}
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
    // allow_authenticate_via_warp - computed: true, optional: false, required: false
    get allowAuthenticateViaWarp() {
        return this.getBooleanAttribute('allow_authenticate_via_warp');
    }
    // auth_domain - computed: true, optional: false, required: false
    get authDomain() {
        return this.getStringAttribute('auth_domain');
    }
    // auto_redirect_to_identity - computed: true, optional: false, required: false
    get autoRedirectToIdentity() {
        return this.getBooleanAttribute('auto_redirect_to_identity');
    }
    // custom_pages - computed: true, optional: false, required: false
    _customPages = new DataCloudflareZeroTrustOrganizationCustomPagesOutputReference(this, "custom_pages");
    get customPages() {
        return this._customPages;
    }
    // deny_unmatched_requests - computed: true, optional: false, required: false
    get denyUnmatchedRequests() {
        return this.getBooleanAttribute('deny_unmatched_requests');
    }
    // deny_unmatched_requests_exempted_zone_names - computed: true, optional: false, required: false
    get denyUnmatchedRequestsExemptedZoneNames() {
        return this.getListAttribute('deny_unmatched_requests_exempted_zone_names');
    }
    // is_ui_read_only - computed: true, optional: false, required: false
    get isUiReadOnly() {
        return this.getBooleanAttribute('is_ui_read_only');
    }
    // login_design - computed: true, optional: false, required: false
    _loginDesign = new DataCloudflareZeroTrustOrganizationLoginDesignOutputReference(this, "login_design");
    get loginDesign() {
        return this._loginDesign;
    }
    // mfa_config - computed: true, optional: false, required: false
    _mfaConfig = new DataCloudflareZeroTrustOrganizationMfaConfigOutputReference(this, "mfa_config");
    get mfaConfig() {
        return this._mfaConfig;
    }
    // mfa_required_for_all_apps - computed: true, optional: false, required: false
    get mfaRequiredForAllApps() {
        return this.getBooleanAttribute('mfa_required_for_all_apps');
    }
    // mfa_ssh_piv_key_requirements - computed: true, optional: false, required: false
    _mfaSshPivKeyRequirements = new DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(this, "mfa_ssh_piv_key_requirements");
    get mfaSshPivKeyRequirements() {
        return this._mfaSshPivKeyRequirements;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // session_duration - computed: true, optional: false, required: false
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    // ui_read_only_toggle_reason - computed: true, optional: false, required: false
    get uiReadOnlyToggleReason() {
        return this.getStringAttribute('ui_read_only_toggle_reason');
    }
    // user_seat_expiration_inactive_time - computed: true, optional: false, required: false
    get userSeatExpirationInactiveTime() {
        return this.getStringAttribute('user_seat_expiration_inactive_time');
    }
    // warp_auth_session_duration - computed: true, optional: false, required: false
    get warpAuthSessionDuration() {
        return this.getStringAttribute('warp_auth_session_duration');
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
