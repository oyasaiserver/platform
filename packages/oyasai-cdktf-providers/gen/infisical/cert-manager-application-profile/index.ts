// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerApplicationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the ACME enrollment method. Omit the block to disable ACME enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#acme_config CertManagerApplicationProfile#acme_config}
  */
  readonly acmeConfig?: CertManagerApplicationProfileAcmeConfig;
  /**
  * Enable the API enrollment method. Omit the block to disable API enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#api_config CertManagerApplicationProfile#api_config}
  */
  readonly apiConfig?: CertManagerApplicationProfileApiConfig;
  /**
  * The ID of the Certificate Manager application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#application_id CertManagerApplicationProfile#application_id}
  */
  readonly applicationId: string;
  /**
  * Enable the EST enrollment method. Omit the block to disable EST enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#est_config CertManagerApplicationProfile#est_config}
  */
  readonly estConfig?: CertManagerApplicationProfileEstConfig;
  /**
  * The ID of the certificate profile to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#profile_id CertManagerApplicationProfile#profile_id}
  */
  readonly profileId: string;
  /**
  * Enable the SCEP enrollment method. Omit the block to disable SCEP enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#scep_config CertManagerApplicationProfile#scep_config}
  */
  readonly scepConfig?: CertManagerApplicationProfileScepConfig;
}
export interface CertManagerApplicationProfileAcmeConfig {
  /**
  * Skip DNS ownership verification. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#skip_dns_ownership_verification CertManagerApplicationProfile#skip_dns_ownership_verification}
  */
  readonly skipDnsOwnershipVerification?: boolean | cdktf.IResolvable;
  /**
  * Skip External Account Binding. Defaults to false. Cannot be set to true at the same time as skip_dns_ownership_verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#skip_eab_binding CertManagerApplicationProfile#skip_eab_binding}
  */
  readonly skipEabBinding?: boolean | cdktf.IResolvable;
}

export function certManagerApplicationProfileAcmeConfigToTerraform(struct?: CertManagerApplicationProfileAcmeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_dns_ownership_verification: cdktf.booleanToTerraform(struct!.skipDnsOwnershipVerification),
    skip_eab_binding: cdktf.booleanToTerraform(struct!.skipEabBinding),
  }
}


export function certManagerApplicationProfileAcmeConfigToHclTerraform(struct?: CertManagerApplicationProfileAcmeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_dns_ownership_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipDnsOwnershipVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_eab_binding: {
      value: cdktf.booleanToHclTerraform(struct!.skipEabBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerApplicationProfileAcmeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerApplicationProfileAcmeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipDnsOwnershipVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDnsOwnershipVerification = this._skipDnsOwnershipVerification;
    }
    if (this._skipEabBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEabBinding = this._skipEabBinding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerApplicationProfileAcmeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skipDnsOwnershipVerification = undefined;
      this._skipEabBinding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skipDnsOwnershipVerification = value.skipDnsOwnershipVerification;
      this._skipEabBinding = value.skipEabBinding;
    }
  }

  // directory_url - computed: true, optional: false, required: false
  public get directoryUrl() {
    return this.getStringAttribute('directory_url');
  }

  // eab_kid - computed: true, optional: false, required: false
  public get eabKid() {
    return this.getStringAttribute('eab_kid');
  }

  // eab_secret - computed: true, optional: false, required: false
  public get eabSecret() {
    return this.getStringAttribute('eab_secret');
  }

  // skip_dns_ownership_verification - computed: true, optional: true, required: false
  private _skipDnsOwnershipVerification?: boolean | cdktf.IResolvable; 
  public get skipDnsOwnershipVerification() {
    return this.getBooleanAttribute('skip_dns_ownership_verification');
  }
  public set skipDnsOwnershipVerification(value: boolean | cdktf.IResolvable) {
    this._skipDnsOwnershipVerification = value;
  }
  public resetSkipDnsOwnershipVerification() {
    this._skipDnsOwnershipVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDnsOwnershipVerificationInput() {
    return this._skipDnsOwnershipVerification;
  }

  // skip_eab_binding - computed: true, optional: true, required: false
  private _skipEabBinding?: boolean | cdktf.IResolvable; 
  public get skipEabBinding() {
    return this.getBooleanAttribute('skip_eab_binding');
  }
  public set skipEabBinding(value: boolean | cdktf.IResolvable) {
    this._skipEabBinding = value;
  }
  public resetSkipEabBinding() {
    this._skipEabBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEabBindingInput() {
    return this._skipEabBinding;
  }
}
export interface CertManagerApplicationProfileApiConfig {
  /**
  * Whether to automatically renew certificates. Defaults to false when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#auto_renew CertManagerApplicationProfile#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Number of days before expiration to renew (1-30). Defaults to 7 when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#renew_before_days CertManagerApplicationProfile#renew_before_days}
  */
  readonly renewBeforeDays?: number;
}

export function certManagerApplicationProfileApiConfigToTerraform(struct?: CertManagerApplicationProfileApiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    renew_before_days: cdktf.numberToTerraform(struct!.renewBeforeDays),
  }
}


export function certManagerApplicationProfileApiConfigToHclTerraform(struct?: CertManagerApplicationProfileApiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    renew_before_days: {
      value: cdktf.numberToHclTerraform(struct!.renewBeforeDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerApplicationProfileApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerApplicationProfileApiConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CertManagerApplicationProfileApiConfig | cdktf.IResolvable | undefined) {
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
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // renew_before_days - computed: true, optional: true, required: false
  private _renewBeforeDays?: number; 
  public get renewBeforeDays() {
    return this.getNumberAttribute('renew_before_days');
  }
  public set renewBeforeDays(value: number) {
    this._renewBeforeDays = value;
  }
  public resetRenewBeforeDays() {
    this._renewBeforeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeDaysInput() {
    return this._renewBeforeDays;
  }
}
export interface CertManagerApplicationProfileEstConfig {
  /**
  * PEM-encoded CA chain used for bootstrap CA validation (only honored when disable_bootstrap_ca_validation is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#ca_chain CertManagerApplicationProfile#ca_chain}
  */
  readonly caChain?: string;
  /**
  * Whether to disable bootstrap CA validation. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#disable_bootstrap_ca_validation CertManagerApplicationProfile#disable_bootstrap_ca_validation}
  */
  readonly disableBootstrapCaValidation?: boolean | cdktf.IResolvable;
  /**
  * EST passphrase used to authorize certificate requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#passphrase CertManagerApplicationProfile#passphrase}
  */
  readonly passphrase: string;
}

export function certManagerApplicationProfileEstConfigToTerraform(struct?: CertManagerApplicationProfileEstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_chain: cdktf.stringToTerraform(struct!.caChain),
    disable_bootstrap_ca_validation: cdktf.booleanToTerraform(struct!.disableBootstrapCaValidation),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
  }
}


export function certManagerApplicationProfileEstConfigToHclTerraform(struct?: CertManagerApplicationProfileEstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_chain: {
      value: cdktf.stringToHclTerraform(struct!.caChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_bootstrap_ca_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableBootstrapCaValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerApplicationProfileEstConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerApplicationProfileEstConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CertManagerApplicationProfileEstConfig | cdktf.IResolvable | undefined) {
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
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // disable_bootstrap_ca_validation - computed: true, optional: true, required: false
  private _disableBootstrapCaValidation?: boolean | cdktf.IResolvable; 
  public get disableBootstrapCaValidation() {
    return this.getBooleanAttribute('disable_bootstrap_ca_validation');
  }
  public set disableBootstrapCaValidation(value: boolean | cdktf.IResolvable) {
    this._disableBootstrapCaValidation = value;
  }
  public resetDisableBootstrapCaValidation() {
    this._disableBootstrapCaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBootstrapCaValidationInput() {
    return this._disableBootstrapCaValidation;
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // passphrase - computed: false, optional: false, required: true
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }
}
export interface CertManagerApplicationProfileScepConfig {
  /**
  * Allow certificate-based renewal. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#allow_cert_based_renewal CertManagerApplicationProfile#allow_cert_based_renewal}
  */
  readonly allowCertBasedRenewal?: boolean | cdktf.IResolvable;
  /**
  * Static-mode SCEP challenge password (min 8 chars). Required when challenge_type is static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#challenge_password CertManagerApplicationProfile#challenge_password}
  */
  readonly challengePassword?: string;
  /**
  * SCEP challenge type. Supported values: static, dynamic. Defaults to static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#challenge_type CertManagerApplicationProfile#challenge_type}
  */
  readonly challengeType?: string;
  /**
  * Expiry of a dynamic challenge in minutes (1-1440). Only used when challenge_type is dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#dynamic_challenge_expiry_minutes CertManagerApplicationProfile#dynamic_challenge_expiry_minutes}
  */
  readonly dynamicChallengeExpiryMinutes?: number;
  /**
  * Maximum pending dynamic challenges (1-1000). Only used when challenge_type is dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#dynamic_challenge_max_pending CertManagerApplicationProfile#dynamic_challenge_max_pending}
  */
  readonly dynamicChallengeMaxPending?: number;
  /**
  * Include the issuing CA certificate in SCEP responses. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#include_ca_cert_in_response CertManagerApplicationProfile#include_ca_cert_in_response}
  */
  readonly includeCaCertInResponse?: boolean | cdktf.IResolvable;
}

export function certManagerApplicationProfileScepConfigToTerraform(struct?: CertManagerApplicationProfileScepConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cert_based_renewal: cdktf.booleanToTerraform(struct!.allowCertBasedRenewal),
    challenge_password: cdktf.stringToTerraform(struct!.challengePassword),
    challenge_type: cdktf.stringToTerraform(struct!.challengeType),
    dynamic_challenge_expiry_minutes: cdktf.numberToTerraform(struct!.dynamicChallengeExpiryMinutes),
    dynamic_challenge_max_pending: cdktf.numberToTerraform(struct!.dynamicChallengeMaxPending),
    include_ca_cert_in_response: cdktf.booleanToTerraform(struct!.includeCaCertInResponse),
  }
}


export function certManagerApplicationProfileScepConfigToHclTerraform(struct?: CertManagerApplicationProfileScepConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cert_based_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.allowCertBasedRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    challenge_password: {
      value: cdktf.stringToHclTerraform(struct!.challengePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_type: {
      value: cdktf.stringToHclTerraform(struct!.challengeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_challenge_expiry_minutes: {
      value: cdktf.numberToHclTerraform(struct!.dynamicChallengeExpiryMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_challenge_max_pending: {
      value: cdktf.numberToHclTerraform(struct!.dynamicChallengeMaxPending),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_ca_cert_in_response: {
      value: cdktf.booleanToHclTerraform(struct!.includeCaCertInResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerApplicationProfileScepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerApplicationProfileScepConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCertBasedRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCertBasedRenewal = this._allowCertBasedRenewal;
    }
    if (this._challengePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePassword = this._challengePassword;
    }
    if (this._challengeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeType = this._challengeType;
    }
    if (this._dynamicChallengeExpiryMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicChallengeExpiryMinutes = this._dynamicChallengeExpiryMinutes;
    }
    if (this._dynamicChallengeMaxPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicChallengeMaxPending = this._dynamicChallengeMaxPending;
    }
    if (this._includeCaCertInResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCaCertInResponse = this._includeCaCertInResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerApplicationProfileScepConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCertBasedRenewal = undefined;
      this._challengePassword = undefined;
      this._challengeType = undefined;
      this._dynamicChallengeExpiryMinutes = undefined;
      this._dynamicChallengeMaxPending = undefined;
      this._includeCaCertInResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCertBasedRenewal = value.allowCertBasedRenewal;
      this._challengePassword = value.challengePassword;
      this._challengeType = value.challengeType;
      this._dynamicChallengeExpiryMinutes = value.dynamicChallengeExpiryMinutes;
      this._dynamicChallengeMaxPending = value.dynamicChallengeMaxPending;
      this._includeCaCertInResponse = value.includeCaCertInResponse;
    }
  }

  // allow_cert_based_renewal - computed: true, optional: true, required: false
  private _allowCertBasedRenewal?: boolean | cdktf.IResolvable; 
  public get allowCertBasedRenewal() {
    return this.getBooleanAttribute('allow_cert_based_renewal');
  }
  public set allowCertBasedRenewal(value: boolean | cdktf.IResolvable) {
    this._allowCertBasedRenewal = value;
  }
  public resetAllowCertBasedRenewal() {
    this._allowCertBasedRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCertBasedRenewalInput() {
    return this._allowCertBasedRenewal;
  }

  // challenge_endpoint_url - computed: true, optional: false, required: false
  public get challengeEndpointUrl() {
    return this.getStringAttribute('challenge_endpoint_url');
  }

  // challenge_password - computed: false, optional: true, required: false
  private _challengePassword?: string; 
  public get challengePassword() {
    return this.getStringAttribute('challenge_password');
  }
  public set challengePassword(value: string) {
    this._challengePassword = value;
  }
  public resetChallengePassword() {
    this._challengePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePasswordInput() {
    return this._challengePassword;
  }

  // challenge_type - computed: true, optional: true, required: false
  private _challengeType?: string; 
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }
  public set challengeType(value: string) {
    this._challengeType = value;
  }
  public resetChallengeType() {
    this._challengeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeTypeInput() {
    return this._challengeType;
  }

  // dynamic_challenge_expiry_minutes - computed: true, optional: true, required: false
  private _dynamicChallengeExpiryMinutes?: number; 
  public get dynamicChallengeExpiryMinutes() {
    return this.getNumberAttribute('dynamic_challenge_expiry_minutes');
  }
  public set dynamicChallengeExpiryMinutes(value: number) {
    this._dynamicChallengeExpiryMinutes = value;
  }
  public resetDynamicChallengeExpiryMinutes() {
    this._dynamicChallengeExpiryMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicChallengeExpiryMinutesInput() {
    return this._dynamicChallengeExpiryMinutes;
  }

  // dynamic_challenge_max_pending - computed: true, optional: true, required: false
  private _dynamicChallengeMaxPending?: number; 
  public get dynamicChallengeMaxPending() {
    return this.getNumberAttribute('dynamic_challenge_max_pending');
  }
  public set dynamicChallengeMaxPending(value: number) {
    this._dynamicChallengeMaxPending = value;
  }
  public resetDynamicChallengeMaxPending() {
    this._dynamicChallengeMaxPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicChallengeMaxPendingInput() {
    return this._dynamicChallengeMaxPending;
  }

  // include_ca_cert_in_response - computed: true, optional: true, required: false
  private _includeCaCertInResponse?: boolean | cdktf.IResolvable; 
  public get includeCaCertInResponse() {
    return this.getBooleanAttribute('include_ca_cert_in_response');
  }
  public set includeCaCertInResponse(value: boolean | cdktf.IResolvable) {
    this._includeCaCertInResponse = value;
  }
  public resetIncludeCaCertInResponse() {
    this._includeCaCertInResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCaCertInResponseInput() {
    return this._includeCaCertInResponse;
  }

  // ra_cert_expires_at - computed: true, optional: false, required: false
  public get raCertExpiresAt() {
    return this.getStringAttribute('ra_cert_expires_at');
  }

  // ra_certificate_pem - computed: true, optional: false, required: false
  public get raCertificatePem() {
    return this.getStringAttribute('ra_certificate_pem');
  }

  // scep_endpoint_url - computed: true, optional: false, required: false
  public get scepEndpointUrl() {
    return this.getStringAttribute('scep_endpoint_url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile infisical_cert_manager_application_profile}
*/
export class CertManagerApplicationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_application_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerApplicationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerApplicationProfile to import
  * @param importFromId The id of the existing CertManagerApplicationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerApplicationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_application_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_application_profile infisical_cert_manager_application_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerApplicationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerApplicationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_application_profile',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acmeConfig.internalValue = config.acmeConfig;
    this._apiConfig.internalValue = config.apiConfig;
    this._applicationId = config.applicationId;
    this._estConfig.internalValue = config.estConfig;
    this._profileId = config.profileId;
    this._scepConfig.internalValue = config.scepConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_config - computed: false, optional: true, required: false
  private _acmeConfig = new CertManagerApplicationProfileAcmeConfigOutputReference(this, "acme_config");
  public get acmeConfig() {
    return this._acmeConfig;
  }
  public putAcmeConfig(value: CertManagerApplicationProfileAcmeConfig) {
    this._acmeConfig.internalValue = value;
  }
  public resetAcmeConfig() {
    this._acmeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeConfigInput() {
    return this._acmeConfig.internalValue;
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig = new CertManagerApplicationProfileApiConfigOutputReference(this, "api_config");
  public get apiConfig() {
    return this._apiConfig;
  }
  public putApiConfig(value: CertManagerApplicationProfileApiConfig) {
    this._apiConfig.internalValue = value;
  }
  public resetApiConfig() {
    this._apiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigInput() {
    return this._apiConfig.internalValue;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // est_config - computed: false, optional: true, required: false
  private _estConfig = new CertManagerApplicationProfileEstConfigOutputReference(this, "est_config");
  public get estConfig() {
    return this._estConfig;
  }
  public putEstConfig(value: CertManagerApplicationProfileEstConfig) {
    this._estConfig.internalValue = value;
  }
  public resetEstConfig() {
    this._estConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estConfigInput() {
    return this._estConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // scep_config - computed: false, optional: true, required: false
  private _scepConfig = new CertManagerApplicationProfileScepConfigOutputReference(this, "scep_config");
  public get scepConfig() {
    return this._scepConfig;
  }
  public putScepConfig(value: CertManagerApplicationProfileScepConfig) {
    this._scepConfig.internalValue = value;
  }
  public resetScepConfig() {
    this._scepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepConfigInput() {
    return this._scepConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acme_config: certManagerApplicationProfileAcmeConfigToTerraform(this._acmeConfig.internalValue),
      api_config: certManagerApplicationProfileApiConfigToTerraform(this._apiConfig.internalValue),
      application_id: cdktf.stringToTerraform(this._applicationId),
      est_config: certManagerApplicationProfileEstConfigToTerraform(this._estConfig.internalValue),
      profile_id: cdktf.stringToTerraform(this._profileId),
      scep_config: certManagerApplicationProfileScepConfigToTerraform(this._scepConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acme_config: {
        value: certManagerApplicationProfileAcmeConfigToHclTerraform(this._acmeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerApplicationProfileAcmeConfig",
      },
      api_config: {
        value: certManagerApplicationProfileApiConfigToHclTerraform(this._apiConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerApplicationProfileApiConfig",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_config: {
        value: certManagerApplicationProfileEstConfigToHclTerraform(this._estConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerApplicationProfileEstConfig",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_config: {
        value: certManagerApplicationProfileScepConfigToHclTerraform(this._scepConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerApplicationProfileScepConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
