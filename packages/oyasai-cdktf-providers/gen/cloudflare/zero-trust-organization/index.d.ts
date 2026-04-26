import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}
    */
    readonly accountId?: string;
    /**
    * When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}
    */
    readonly allowAuthenticateViaWarp?: boolean | cdktf.IResolvable;
    /**
    * The unique subdomain assigned to your Zero Trust organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}
    */
    readonly authDomain?: string;
    /**
    * When set to `true`, users skip the identity provider selection step during login.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}
    */
    readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}
    */
    readonly customPages?: ZeroTrustOrganizationCustomPages;
    /**
    * Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the `deny_unmatched_requests_exempted_zone_names` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#deny_unmatched_requests ZeroTrustOrganization#deny_unmatched_requests}
    */
    readonly denyUnmatchedRequests?: boolean | cdktf.IResolvable;
    /**
    * Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#deny_unmatched_requests_exempted_zone_names ZeroTrustOrganization#deny_unmatched_requests_exempted_zone_names}
    */
    readonly denyUnmatchedRequestsExemptedZoneNames?: string[];
    /**
    * Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this account when enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}
    */
    readonly isUiReadOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}
    */
    readonly loginDesign?: ZeroTrustOrganizationLoginDesign;
    /**
    * Configures multi-factor authentication (MFA) settings for an organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#mfa_config ZeroTrustOrganization#mfa_config}
    */
    readonly mfaConfig?: ZeroTrustOrganizationMfaConfig;
    /**
    * Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#mfa_configuration_allowed ZeroTrustOrganization#mfa_configuration_allowed}
    */
    readonly mfaConfigurationAllowed?: boolean | cdktf.IResolvable;
    /**
    * Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentication method and a session duration configured.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#mfa_required_for_all_apps ZeroTrustOrganization#mfa_required_for_all_apps}
    */
    readonly mfaRequiredForAllApps?: boolean | cdktf.IResolvable;
    /**
    * Configures SSH PIV key requirements for MFA using hardware security keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#mfa_ssh_piv_key_requirements ZeroTrustOrganization#mfa_ssh_piv_key_requirements}
    */
    readonly mfaSshPivKeyRequirements?: ZeroTrustOrganizationMfaSshPivKeyRequirements;
    /**
    * The name of your Zero Trust organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}
    */
    readonly name?: string;
    /**
    * The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}
    */
    readonly sessionDuration?: string;
    /**
    * A description of the reason why the UI read only field is being toggled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}
    */
    readonly uiReadOnlyToggleReason?: string;
    /**
    * The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}
    */
    readonly userSeatExpirationInactiveTime?: string;
    /**
    * The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}
    */
    readonly warpAuthSessionDuration?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}
    */
    readonly zoneId?: string;
}
export interface ZeroTrustOrganizationCustomPages {
    /**
    * The uid of the custom page to use when a user is denied access after failing a non-identity rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}
    */
    readonly forbidden?: string;
    /**
    * The uid of the custom page to use when a user is denied access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}
    */
    readonly identityDenied?: string;
}
export declare function zeroTrustOrganizationCustomPagesToTerraform(struct?: ZeroTrustOrganizationCustomPages | cdktf.IResolvable): any;
export declare function zeroTrustOrganizationCustomPagesToHclTerraform(struct?: ZeroTrustOrganizationCustomPages | cdktf.IResolvable): any;
export declare class ZeroTrustOrganizationCustomPagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustOrganizationCustomPages | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustOrganizationCustomPages | cdktf.IResolvable | undefined);
    private _forbidden?;
    get forbidden(): string;
    set forbidden(value: string);
    resetForbidden(): void;
    get forbiddenInput(): string;
    private _identityDenied?;
    get identityDenied(): string;
    set identityDenied(value: string);
    resetIdentityDenied(): void;
    get identityDeniedInput(): string;
}
export interface ZeroTrustOrganizationLoginDesign {
    /**
    * The background color on your login page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * The text at the bottom of your login page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}
    */
    readonly footerText?: string;
    /**
    * The text at the top of your login page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}
    */
    readonly headerText?: string;
    /**
    * The URL of the logo on your login page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}
    */
    readonly logoPath?: string;
    /**
    * The text color on your login page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}
    */
    readonly textColor?: string;
}
export declare function zeroTrustOrganizationLoginDesignToTerraform(struct?: ZeroTrustOrganizationLoginDesign | cdktf.IResolvable): any;
export declare function zeroTrustOrganizationLoginDesignToHclTerraform(struct?: ZeroTrustOrganizationLoginDesign | cdktf.IResolvable): any;
export declare class ZeroTrustOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustOrganizationLoginDesign | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustOrganizationLoginDesign | cdktf.IResolvable | undefined);
    private _backgroundColor?;
    get backgroundColor(): string;
    set backgroundColor(value: string);
    resetBackgroundColor(): void;
    get backgroundColorInput(): string;
    private _footerText?;
    get footerText(): string;
    set footerText(value: string);
    resetFooterText(): void;
    get footerTextInput(): string;
    private _headerText?;
    get headerText(): string;
    set headerText(value: string);
    resetHeaderText(): void;
    get headerTextInput(): string;
    private _logoPath?;
    get logoPath(): string;
    set logoPath(value: string);
    resetLogoPath(): void;
    get logoPathInput(): string;
    private _textColor?;
    get textColor(): string;
    set textColor(value: string);
    resetTextColor(): void;
    get textColorInput(): string;
}
export interface ZeroTrustOrganizationMfaConfig {
    /**
    * Lists the MFA methods that users can authenticate with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#allowed_authenticators ZeroTrustOrganization#allowed_authenticators}
    */
    readonly allowedAuthenticators?: string[];
    /**
    * Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authenticate contains "mfa". Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#amr_matching_session_duration ZeroTrustOrganization#amr_matching_session_duration}
    */
    readonly amrMatchingSessionDuration?: string;
    /**
    * Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#required_aaguids ZeroTrustOrganization#required_aaguids}
    */
    readonly requiredAaguids?: string;
    /**
    * Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}
    */
    readonly sessionDuration?: string;
}
export declare function zeroTrustOrganizationMfaConfigToTerraform(struct?: ZeroTrustOrganizationMfaConfig | cdktf.IResolvable): any;
export declare function zeroTrustOrganizationMfaConfigToHclTerraform(struct?: ZeroTrustOrganizationMfaConfig | cdktf.IResolvable): any;
export declare class ZeroTrustOrganizationMfaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustOrganizationMfaConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustOrganizationMfaConfig | cdktf.IResolvable | undefined);
    private _allowedAuthenticators?;
    get allowedAuthenticators(): string[];
    set allowedAuthenticators(value: string[]);
    resetAllowedAuthenticators(): void;
    get allowedAuthenticatorsInput(): string[];
    private _amrMatchingSessionDuration?;
    get amrMatchingSessionDuration(): string;
    set amrMatchingSessionDuration(value: string);
    resetAmrMatchingSessionDuration(): void;
    get amrMatchingSessionDurationInput(): string;
    private _requiredAaguids?;
    get requiredAaguids(): string;
    set requiredAaguids(value: string);
    resetRequiredAaguids(): void;
    get requiredAaguidsInput(): string;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
}
export interface ZeroTrustOrganizationMfaSshPivKeyRequirements {
    /**
    * Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always` (PIN required for each use).
    * Available values: "never", "once", "always".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#pin_policy ZeroTrustOrganization#pin_policy}
    */
    readonly pinPolicy?: string;
    /**
    * Requires the SSH PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#require_fips_device ZeroTrustOrganization#require_fips_device}
    */
    readonly requireFipsDevice?: boolean | cdktf.IResolvable;
    /**
    * Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#ssh_key_size ZeroTrustOrganization#ssh_key_size}
    */
    readonly sshKeySize?: number[];
    /**
    * Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#ssh_key_type ZeroTrustOrganization#ssh_key_type}
    */
    readonly sshKeyType?: string[];
    /**
    * Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use), `cached` (touch cached for 15 seconds).
    * Available values: "never", "always", "cached".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#touch_policy ZeroTrustOrganization#touch_policy}
    */
    readonly touchPolicy?: string;
}
export declare function zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct?: ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktf.IResolvable): any;
export declare function zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct?: ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktf.IResolvable): any;
export declare class ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktf.IResolvable | undefined);
    private _pinPolicy?;
    get pinPolicy(): string;
    set pinPolicy(value: string);
    resetPinPolicy(): void;
    get pinPolicyInput(): string;
    private _requireFipsDevice?;
    get requireFipsDevice(): boolean | cdktf.IResolvable;
    set requireFipsDevice(value: boolean | cdktf.IResolvable);
    resetRequireFipsDevice(): void;
    get requireFipsDeviceInput(): any;
    private _sshKeySize?;
    get sshKeySize(): number[];
    set sshKeySize(value: number[]);
    resetSshKeySize(): void;
    get sshKeySizeInput(): number[];
    private _sshKeyType?;
    get sshKeyType(): string[];
    set sshKeyType(value: string[]);
    resetSshKeyType(): void;
    get sshKeyTypeInput(): string[];
    private _touchPolicy?;
    get touchPolicy(): string;
    set touchPolicy(value: string);
    resetTouchPolicy(): void;
    get touchPolicyInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export declare class ZeroTrustOrganization extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_organization";
    /**
    * Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustOrganization to import
    * @param importFromId The id of the existing ZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustOrganizationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ZeroTrustOrganizationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _allowAuthenticateViaWarp?;
    get allowAuthenticateViaWarp(): boolean | cdktf.IResolvable;
    set allowAuthenticateViaWarp(value: boolean | cdktf.IResolvable);
    resetAllowAuthenticateViaWarp(): void;
    get allowAuthenticateViaWarpInput(): any;
    private _authDomain?;
    get authDomain(): string;
    set authDomain(value: string);
    resetAuthDomain(): void;
    get authDomainInput(): string;
    private _autoRedirectToIdentity?;
    get autoRedirectToIdentity(): boolean | cdktf.IResolvable;
    set autoRedirectToIdentity(value: boolean | cdktf.IResolvable);
    resetAutoRedirectToIdentity(): void;
    get autoRedirectToIdentityInput(): any;
    private _customPages;
    get customPages(): ZeroTrustOrganizationCustomPagesOutputReference;
    putCustomPages(value: ZeroTrustOrganizationCustomPages): void;
    resetCustomPages(): void;
    get customPagesInput(): any;
    private _denyUnmatchedRequests?;
    get denyUnmatchedRequests(): boolean | cdktf.IResolvable;
    set denyUnmatchedRequests(value: boolean | cdktf.IResolvable);
    resetDenyUnmatchedRequests(): void;
    get denyUnmatchedRequestsInput(): any;
    private _denyUnmatchedRequestsExemptedZoneNames?;
    get denyUnmatchedRequestsExemptedZoneNames(): string[];
    set denyUnmatchedRequestsExemptedZoneNames(value: string[]);
    resetDenyUnmatchedRequestsExemptedZoneNames(): void;
    get denyUnmatchedRequestsExemptedZoneNamesInput(): string[];
    private _isUiReadOnly?;
    get isUiReadOnly(): boolean | cdktf.IResolvable;
    set isUiReadOnly(value: boolean | cdktf.IResolvable);
    resetIsUiReadOnly(): void;
    get isUiReadOnlyInput(): any;
    private _loginDesign;
    get loginDesign(): ZeroTrustOrganizationLoginDesignOutputReference;
    putLoginDesign(value: ZeroTrustOrganizationLoginDesign): void;
    resetLoginDesign(): void;
    get loginDesignInput(): any;
    private _mfaConfig;
    get mfaConfig(): ZeroTrustOrganizationMfaConfigOutputReference;
    putMfaConfig(value: ZeroTrustOrganizationMfaConfig): void;
    resetMfaConfig(): void;
    get mfaConfigInput(): any;
    private _mfaConfigurationAllowed?;
    get mfaConfigurationAllowed(): boolean | cdktf.IResolvable;
    set mfaConfigurationAllowed(value: boolean | cdktf.IResolvable);
    resetMfaConfigurationAllowed(): void;
    get mfaConfigurationAllowedInput(): any;
    private _mfaRequiredForAllApps?;
    get mfaRequiredForAllApps(): boolean | cdktf.IResolvable;
    set mfaRequiredForAllApps(value: boolean | cdktf.IResolvable);
    resetMfaRequiredForAllApps(): void;
    get mfaRequiredForAllAppsInput(): any;
    private _mfaSshPivKeyRequirements;
    get mfaSshPivKeyRequirements(): ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;
    putMfaSshPivKeyRequirements(value: ZeroTrustOrganizationMfaSshPivKeyRequirements): void;
    resetMfaSshPivKeyRequirements(): void;
    get mfaSshPivKeyRequirementsInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
    private _uiReadOnlyToggleReason?;
    get uiReadOnlyToggleReason(): string;
    set uiReadOnlyToggleReason(value: string);
    resetUiReadOnlyToggleReason(): void;
    get uiReadOnlyToggleReasonInput(): string;
    private _userSeatExpirationInactiveTime?;
    get userSeatExpirationInactiveTime(): string;
    set userSeatExpirationInactiveTime(value: string);
    resetUserSeatExpirationInactiveTime(): void;
    get userSeatExpirationInactiveTimeInput(): string;
    private _warpAuthSessionDuration?;
    get warpAuthSessionDuration(): string;
    set warpAuthSessionDuration(value: string);
    resetWarpAuthSessionDuration(): void;
    get warpAuthSessionDurationInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
