// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerCertificatePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the certificate policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#description CertManagerCertificatePolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the certificate policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#name CertManagerCertificatePolicy#name}
  */
  readonly name: string;
  /**
  * algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#algorithms CertManagerCertificatePolicy#algorithms}
  */
  readonly algorithms: CertManagerCertificatePolicyAlgorithms;
  /**
  * basic_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#basic_constraints CertManagerCertificatePolicy#basic_constraints}
  */
  readonly basicConstraints?: CertManagerCertificatePolicyBasicConstraints;
  /**
  * extended_key_usages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#extended_key_usages CertManagerCertificatePolicy#extended_key_usages}
  */
  readonly extendedKeyUsages?: CertManagerCertificatePolicyExtendedKeyUsages;
  /**
  * key_usages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#key_usages CertManagerCertificatePolicy#key_usages}
  */
  readonly keyUsages?: CertManagerCertificatePolicyKeyUsages;
  /**
  * sans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#sans CertManagerCertificatePolicy#sans}
  */
  readonly sans?: CertManagerCertificatePolicySans[] | cdktf.IResolvable;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#subject CertManagerCertificatePolicy#subject}
  */
  readonly subject?: CertManagerCertificatePolicySubject[] | cdktf.IResolvable;
  /**
  * validity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#validity CertManagerCertificatePolicy#validity}
  */
  readonly validity?: CertManagerCertificatePolicyValidity;
}
export interface CertManagerCertificatePolicyAlgorithms {
  /**
  * List of allowed key algorithms (at least one required). Supported values: RSA-2048, RSA-3072, RSA-4096, ECDSA-P256, ECDSA-P521, ECDSA-P384
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#key_algorithm CertManagerCertificatePolicy#key_algorithm}
  */
  readonly keyAlgorithm: string[];
  /**
  * List of allowed signature algorithms (at least one required). Supported values: SHA256-RSA, SHA512-RSA, SHA384-ECDSA, SHA384-RSA, SHA256-ECDSA, SHA512-ECDSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#signature CertManagerCertificatePolicy#signature}
  */
  readonly signature: string[];
}

export function certManagerCertificatePolicyAlgorithmsToTerraform(struct?: CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyAlgorithm),
    signature: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signature),
  }
}


export function certManagerCertificatePolicyAlgorithmsToHclTerraform(struct?: CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_algorithm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyAlgorithm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    signature: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signature),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicyAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlgorithm = this._keyAlgorithm;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyAlgorithm = undefined;
      this._signature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyAlgorithm = value.keyAlgorithm;
      this._signature = value.signature;
    }
  }

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string[]; 
  public get keyAlgorithm() {
    return this.getListAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string[]) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // signature - computed: false, optional: false, required: true
  private _signature?: string[]; 
  public get signature() {
    return this.getListAttribute('signature');
  }
  public set signature(value: string[]) {
    this._signature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }
}
export interface CertManagerCertificatePolicyBasicConstraints {
  /**
  * Policy for the CA flag (basic constraints CA:TRUE) on issued certificates. Possible values: allowed, required, denied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#is_ca CertManagerCertificatePolicy#is_ca}
  */
  readonly isCa?: string;
  /**
  * Maximum path length constraint for CA certificates. Use -1 for unlimited, or a non-negative integer to cap how many intermediate CAs may appear below a certificate issued under this policy. Only applies when is_ca is allowed or required; it is ignored when is_ca is denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#max_path_length CertManagerCertificatePolicy#max_path_length}
  */
  readonly maxPathLength?: number;
}

export function certManagerCertificatePolicyBasicConstraintsToTerraform(struct?: CertManagerCertificatePolicyBasicConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.stringToTerraform(struct!.isCa),
    max_path_length: cdktf.numberToTerraform(struct!.maxPathLength),
  }
}


export function certManagerCertificatePolicyBasicConstraintsToHclTerraform(struct?: CertManagerCertificatePolicyBasicConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ca: {
      value: cdktf.stringToHclTerraform(struct!.isCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_path_length: {
      value: cdktf.numberToHclTerraform(struct!.maxPathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicyBasicConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificatePolicyBasicConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._maxPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPathLength = this._maxPathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicyBasicConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isCa = undefined;
      this._maxPathLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isCa = value.isCa;
      this._maxPathLength = value.maxPathLength;
    }
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: string; 
  public get isCa() {
    return this.getStringAttribute('is_ca');
  }
  public set isCa(value: string) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // max_path_length - computed: false, optional: true, required: false
  private _maxPathLength?: number; 
  public get maxPathLength() {
    return this.getNumberAttribute('max_path_length');
  }
  public set maxPathLength(value: number) {
    this._maxPathLength = value;
  }
  public resetMaxPathLength() {
    this._maxPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathLengthInput() {
    return this._maxPathLength;
  }
}
export interface CertManagerCertificatePolicyExtendedKeyUsages {
  /**
  * List of allowed extended key usages. Possible values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
  */
  readonly allowed?: string[];
  /**
  * List of denied extended key usages. Possible values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
  */
  readonly denied?: string[];
  /**
  * List of required extended key usages. Possible values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
  */
  readonly required?: string[];
}

export function certManagerCertificatePolicyExtendedKeyUsagesToTerraform(struct?: CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
  }
}


export function certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(struct?: CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicyExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._denied = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._denied = value.denied;
      this._required = value.required;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface CertManagerCertificatePolicyKeyUsages {
  /**
  * List of allowed key usages. Possible values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
  */
  readonly allowed?: string[];
  /**
  * List of denied key usages. Possible values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
  */
  readonly denied?: string[];
  /**
  * List of required key usages. Possible values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
  */
  readonly required?: string[];
}

export function certManagerCertificatePolicyKeyUsagesToTerraform(struct?: CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
  }
}


export function certManagerCertificatePolicyKeyUsagesToHclTerraform(struct?: CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicyKeyUsagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._denied = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._denied = value.denied;
      this._required = value.required;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface CertManagerCertificatePolicySans {
  /**
  * List of allowed values for this SAN type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
  */
  readonly allowed?: string[];
  /**
  * List of denied values for this SAN type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
  */
  readonly denied?: string[];
  /**
  * List of required values for this SAN type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
  */
  readonly required?: string[];
  /**
  * The SAN type. Possible values: dns_name, ip_address, email, uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#type CertManagerCertificatePolicy#type}
  */
  readonly type: string;
}

export function certManagerCertificatePolicySansToTerraform(struct?: CertManagerCertificatePolicySans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function certManagerCertificatePolicySansToHclTerraform(struct?: CertManagerCertificatePolicySans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicySansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertManagerCertificatePolicySans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicySans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._denied = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._denied = value.denied;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CertManagerCertificatePolicySansList extends cdktf.ComplexList {
  public internalValue? : CertManagerCertificatePolicySans[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertManagerCertificatePolicySansOutputReference {
    return new CertManagerCertificatePolicySansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertManagerCertificatePolicySubject {
  /**
  * List of allowed values for this subject attribute. Supports the '*' wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
  */
  readonly allowed?: string[];
  /**
  * List of denied values for this subject attribute. Supports the '*' wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
  */
  readonly denied?: string[];
  /**
  * List of required values for this subject attribute. Supports the '*' wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
  */
  readonly required?: string[];
  /**
  * The subject attribute type. Possible values: common_name, organization, organizational_unit, country, state, locality, domain_component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#type CertManagerCertificatePolicy#type}
  */
  readonly type: string;
}

export function certManagerCertificatePolicySubjectToTerraform(struct?: CertManagerCertificatePolicySubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function certManagerCertificatePolicySubjectToHclTerraform(struct?: CertManagerCertificatePolicySubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicySubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertManagerCertificatePolicySubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicySubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._denied = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._denied = value.denied;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CertManagerCertificatePolicySubjectList extends cdktf.ComplexList {
  public internalValue? : CertManagerCertificatePolicySubject[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertManagerCertificatePolicySubjectOutputReference {
    return new CertManagerCertificatePolicySubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertManagerCertificatePolicyValidity {
  /**
  * Maximum validity period (e.g., '90d', '2y', '6m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#max CertManagerCertificatePolicy#max}
  */
  readonly max?: string;
}

export function certManagerCertificatePolicyValidityToTerraform(struct?: CertManagerCertificatePolicyValidity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
  }
}


export function certManagerCertificatePolicyValidityToHclTerraform(struct?: CertManagerCertificatePolicyValidity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificatePolicyValidityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificatePolicyValidity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificatePolicyValidity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy}
*/
export class CertManagerCertificatePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_certificate_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerCertificatePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerCertificatePolicy to import
  * @param importFromId The id of the existing CertManagerCertificatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerCertificatePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerCertificatePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerCertificatePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_certificate_policy',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._algorithms.internalValue = config.algorithms;
    this._basicConstraints.internalValue = config.basicConstraints;
    this._extendedKeyUsages.internalValue = config.extendedKeyUsages;
    this._keyUsages.internalValue = config.keyUsages;
    this._sans.internalValue = config.sans;
    this._subject.internalValue = config.subject;
    this._validity.internalValue = config.validity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // algorithms - computed: false, optional: false, required: true
  private _algorithms = new CertManagerCertificatePolicyAlgorithmsOutputReference(this, "algorithms");
  public get algorithms() {
    return this._algorithms;
  }
  public putAlgorithms(value: CertManagerCertificatePolicyAlgorithms) {
    this._algorithms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmsInput() {
    return this._algorithms.internalValue;
  }

  // basic_constraints - computed: false, optional: true, required: false
  private _basicConstraints = new CertManagerCertificatePolicyBasicConstraintsOutputReference(this, "basic_constraints");
  public get basicConstraints() {
    return this._basicConstraints;
  }
  public putBasicConstraints(value: CertManagerCertificatePolicyBasicConstraints) {
    this._basicConstraints.internalValue = value;
  }
  public resetBasicConstraints() {
    this._basicConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicConstraintsInput() {
    return this._basicConstraints.internalValue;
  }

  // extended_key_usages - computed: false, optional: true, required: false
  private _extendedKeyUsages = new CertManagerCertificatePolicyExtendedKeyUsagesOutputReference(this, "extended_key_usages");
  public get extendedKeyUsages() {
    return this._extendedKeyUsages;
  }
  public putExtendedKeyUsages(value: CertManagerCertificatePolicyExtendedKeyUsages) {
    this._extendedKeyUsages.internalValue = value;
  }
  public resetExtendedKeyUsages() {
    this._extendedKeyUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsagesInput() {
    return this._extendedKeyUsages.internalValue;
  }

  // key_usages - computed: false, optional: true, required: false
  private _keyUsages = new CertManagerCertificatePolicyKeyUsagesOutputReference(this, "key_usages");
  public get keyUsages() {
    return this._keyUsages;
  }
  public putKeyUsages(value: CertManagerCertificatePolicyKeyUsages) {
    this._keyUsages.internalValue = value;
  }
  public resetKeyUsages() {
    this._keyUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsagesInput() {
    return this._keyUsages.internalValue;
  }

  // sans - computed: false, optional: true, required: false
  private _sans = new CertManagerCertificatePolicySansList(this, "sans", false);
  public get sans() {
    return this._sans;
  }
  public putSans(value: CertManagerCertificatePolicySans[] | cdktf.IResolvable) {
    this._sans.internalValue = value;
  }
  public resetSans() {
    this._sans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new CertManagerCertificatePolicySubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: CertManagerCertificatePolicySubject[] | cdktf.IResolvable) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // validity - computed: false, optional: true, required: false
  private _validity = new CertManagerCertificatePolicyValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }
  public putValidity(value: CertManagerCertificatePolicyValidity) {
    this._validity.internalValue = value;
  }
  public resetValidity() {
    this._validity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      algorithms: certManagerCertificatePolicyAlgorithmsToTerraform(this._algorithms.internalValue),
      basic_constraints: certManagerCertificatePolicyBasicConstraintsToTerraform(this._basicConstraints.internalValue),
      extended_key_usages: certManagerCertificatePolicyExtendedKeyUsagesToTerraform(this._extendedKeyUsages.internalValue),
      key_usages: certManagerCertificatePolicyKeyUsagesToTerraform(this._keyUsages.internalValue),
      sans: cdktf.listMapper(certManagerCertificatePolicySansToTerraform, true)(this._sans.internalValue),
      subject: cdktf.listMapper(certManagerCertificatePolicySubjectToTerraform, true)(this._subject.internalValue),
      validity: certManagerCertificatePolicyValidityToTerraform(this._validity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      algorithms: {
        value: certManagerCertificatePolicyAlgorithmsToHclTerraform(this._algorithms.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificatePolicyAlgorithms",
      },
      basic_constraints: {
        value: certManagerCertificatePolicyBasicConstraintsToHclTerraform(this._basicConstraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificatePolicyBasicConstraints",
      },
      extended_key_usages: {
        value: certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(this._extendedKeyUsages.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificatePolicyExtendedKeyUsages",
      },
      key_usages: {
        value: certManagerCertificatePolicyKeyUsagesToHclTerraform(this._keyUsages.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificatePolicyKeyUsages",
      },
      sans: {
        value: cdktf.listMapperHcl(certManagerCertificatePolicySansToHclTerraform, true)(this._sans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertManagerCertificatePolicySansList",
      },
      subject: {
        value: cdktf.listMapperHcl(certManagerCertificatePolicySubjectToHclTerraform, true)(this._subject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertManagerCertificatePolicySubjectList",
      },
      validity: {
        value: certManagerCertificatePolicyValidityToHclTerraform(this._validity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificatePolicyValidity",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
