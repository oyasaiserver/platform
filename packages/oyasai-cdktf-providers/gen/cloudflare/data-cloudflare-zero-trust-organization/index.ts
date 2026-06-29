// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#account_id DataCloudflareZeroTrustOrganization#account_id}
  */
  readonly accountId?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#zone_id DataCloudflareZeroTrustOrganization#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustOrganizationCustomPages {
}

export function dataCloudflareZeroTrustOrganizationCustomPagesToTerraform(struct?: DataCloudflareZeroTrustOrganizationCustomPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustOrganizationCustomPagesToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationCustomPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustOrganizationCustomPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustOrganizationCustomPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustOrganizationCustomPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forbidden - computed: true, optional: false, required: false
  public get forbidden() {
    return this.getStringAttribute('forbidden');
  }

  // identity_denied - computed: true, optional: false, required: false
  public get identityDenied() {
    return this.getStringAttribute('identity_denied');
  }
}
export interface DataCloudflareZeroTrustOrganizationLoginDesign {
}

export function dataCloudflareZeroTrustOrganizationLoginDesignToTerraform(struct?: DataCloudflareZeroTrustOrganizationLoginDesign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustOrganizationLoginDesignToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationLoginDesign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustOrganizationLoginDesign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustOrganizationLoginDesign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // footer_text - computed: true, optional: false, required: false
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }

  // header_text - computed: true, optional: false, required: false
  public get headerText() {
    return this.getStringAttribute('header_text');
  }

  // logo_path - computed: true, optional: false, required: false
  public get logoPath() {
    return this.getStringAttribute('logo_path');
  }

  // text_color - computed: true, optional: false, required: false
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
}
export interface DataCloudflareZeroTrustOrganizationMfaConfig {
}

export function dataCloudflareZeroTrustOrganizationMfaConfigToTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustOrganizationMfaConfigToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustOrganizationMfaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustOrganizationMfaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustOrganizationMfaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_authenticators - computed: true, optional: false, required: false
  public get allowedAuthenticators() {
    return this.getListAttribute('allowed_authenticators');
  }

  // amr_matching_session_duration - computed: true, optional: false, required: false
  public get amrMatchingSessionDuration() {
    return this.getStringAttribute('amr_matching_session_duration');
  }

  // required_aaguids - computed: true, optional: false, required: false
  public get requiredAaguids() {
    return this.getStringAttribute('required_aaguids');
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
}
export interface DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements {
}

export function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct?: DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pin_policy - computed: true, optional: false, required: false
  public get pinPolicy() {
    return this.getStringAttribute('pin_policy');
  }

  // require_fips_device - computed: true, optional: false, required: false
  public get requireFipsDevice() {
    return this.getBooleanAttribute('require_fips_device');
  }

  // ssh_key_size - computed: true, optional: false, required: false
  public get sshKeySize() {
    return this.getNumberListAttribute('ssh_key_size');
  }

  // ssh_key_type - computed: true, optional: false, required: false
  public get sshKeyType() {
    return this.getListAttribute('ssh_key_type');
  }

  // touch_policy - computed: true, optional: false, required: false
  public get touchPolicy() {
    return this.getStringAttribute('touch_policy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export class DataCloudflareZeroTrustOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustOrganization to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_organization',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
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
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allow_authenticate_via_warp - computed: true, optional: false, required: false
  public get allowAuthenticateViaWarp() {
    return this.getBooleanAttribute('allow_authenticate_via_warp');
  }

  // auth_domain - computed: true, optional: false, required: false
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }

  // auto_redirect_to_identity - computed: true, optional: false, required: false
  public get autoRedirectToIdentity() {
    return this.getBooleanAttribute('auto_redirect_to_identity');
  }

  // custom_pages - computed: true, optional: false, required: false
  private _customPages = new DataCloudflareZeroTrustOrganizationCustomPagesOutputReference(this, "custom_pages");
  public get customPages() {
    return this._customPages;
  }

  // deny_unmatched_requests - computed: true, optional: false, required: false
  public get denyUnmatchedRequests() {
    return this.getBooleanAttribute('deny_unmatched_requests');
  }

  // deny_unmatched_requests_exempted_zone_names - computed: true, optional: false, required: false
  public get denyUnmatchedRequestsExemptedZoneNames() {
    return this.getListAttribute('deny_unmatched_requests_exempted_zone_names');
  }

  // is_ui_read_only - computed: true, optional: false, required: false
  public get isUiReadOnly() {
    return this.getBooleanAttribute('is_ui_read_only');
  }

  // login_design - computed: true, optional: false, required: false
  private _loginDesign = new DataCloudflareZeroTrustOrganizationLoginDesignOutputReference(this, "login_design");
  public get loginDesign() {
    return this._loginDesign;
  }

  // mfa_config - computed: true, optional: false, required: false
  private _mfaConfig = new DataCloudflareZeroTrustOrganizationMfaConfigOutputReference(this, "mfa_config");
  public get mfaConfig() {
    return this._mfaConfig;
  }

  // mfa_required_for_all_apps - computed: true, optional: false, required: false
  public get mfaRequiredForAllApps() {
    return this.getBooleanAttribute('mfa_required_for_all_apps');
  }

  // mfa_ssh_piv_key_requirements - computed: true, optional: false, required: false
  private _mfaSshPivKeyRequirements = new DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(this, "mfa_ssh_piv_key_requirements");
  public get mfaSshPivKeyRequirements() {
    return this._mfaSshPivKeyRequirements;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }

  // ui_read_only_toggle_reason - computed: true, optional: false, required: false
  public get uiReadOnlyToggleReason() {
    return this.getStringAttribute('ui_read_only_toggle_reason');
  }

  // user_seat_expiration_inactive_time - computed: true, optional: false, required: false
  public get userSeatExpirationInactiveTime() {
    return this.getStringAttribute('user_seat_expiration_inactive_time');
  }

  // warp_auth_session_duration - computed: true, optional: false, required: false
  public get warpAuthSessionDuration() {
    return this.getStringAttribute('warp_auth_session_duration');
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
