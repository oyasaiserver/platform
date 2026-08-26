// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretRotationLdapPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#auto_rotation_enabled SecretRotationLdapPassword#auto_rotation_enabled}
  */
  readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to use for the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#connection_id SecretRotationLdapPassword#connection_id}
  */
  readonly connectionId: string;
  /**
  * The description of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#description SecretRotationLdapPassword#description}
  */
  readonly description?: string;
  /**
  * The slug of the project environment to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#environment SecretRotationLdapPassword#environment}
  */
  readonly environment: string;
  /**
  * The name of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#name SecretRotationLdapPassword#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#parameters SecretRotationLdapPassword#parameters}
  */
  readonly parameters: SecretRotationLdapPasswordParameters;
  /**
  * The ID of the Infisical project to create the secret rotation in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#project_id SecretRotationLdapPassword#project_id}
  */
  readonly projectId: string;
  /**
  * At which UTC time the rotation should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#rotate_at_utc SecretRotationLdapPassword#rotate_at_utc}
  */
  readonly rotateAtUtc?: SecretRotationLdapPasswordRotateAtUtc;
  /**
  * How many days to wait between each rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#rotation_interval SecretRotationLdapPassword#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * The folder path to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#secret_path SecretRotationLdapPassword#secret_path}
  */
  readonly secretPath: string;
  /**
  * Secret mappings to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#secrets_mapping SecretRotationLdapPassword#secrets_mapping}
  */
  readonly secretsMapping: SecretRotationLdapPasswordSecretsMapping;
  /**
  * Temporary parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#temporary_parameters SecretRotationLdapPassword#temporary_parameters}
  */
  readonly temporaryParameters?: SecretRotationLdapPasswordTemporaryParameters;
}
export interface SecretRotationLdapPasswordParametersPasswordRequirementsRequired {
  /**
  * Minimum number of digits required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#digits SecretRotationLdapPassword#digits}
  */
  readonly digits: number;
  /**
  * Minimum number of lowercase letters required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#lowercase SecretRotationLdapPassword#lowercase}
  */
  readonly lowercase: number;
  /**
  * Minimum number of symbols required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#symbols SecretRotationLdapPassword#symbols}
  */
  readonly symbols: number;
  /**
  * Minimum number of uppercase letters required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#uppercase SecretRotationLdapPassword#uppercase}
  */
  readonly uppercase: number;
}

export function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.numberToTerraform(struct!.digits),
    lowercase: cdktf.numberToTerraform(struct!.lowercase),
    symbols: cdktf.numberToTerraform(struct!.symbols),
    uppercase: cdktf.numberToTerraform(struct!.uppercase),
  }
}


export function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lowercase: {
      value: cdktf.numberToHclTerraform(struct!.lowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    symbols: {
      value: cdktf.numberToHclTerraform(struct!.symbols),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uppercase: {
      value: cdktf.numberToHclTerraform(struct!.uppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._lowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowercase = this._lowercase;
    }
    if (this._symbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbols = this._symbols;
    }
    if (this._uppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.uppercase = this._uppercase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLdapPasswordParametersPasswordRequirementsRequired | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digits = undefined;
      this._lowercase = undefined;
      this._symbols = undefined;
      this._uppercase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digits = value.digits;
      this._lowercase = value.lowercase;
      this._symbols = value.symbols;
      this._uppercase = value.uppercase;
    }
  }

  // digits - computed: false, optional: false, required: true
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // lowercase - computed: false, optional: false, required: true
  private _lowercase?: number; 
  public get lowercase() {
    return this.getNumberAttribute('lowercase');
  }
  public set lowercase(value: number) {
    this._lowercase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowercaseInput() {
    return this._lowercase;
  }

  // symbols - computed: false, optional: false, required: true
  private _symbols?: number; 
  public get symbols() {
    return this.getNumberAttribute('symbols');
  }
  public set symbols(value: number) {
    this._symbols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolsInput() {
    return this._symbols;
  }

  // uppercase - computed: false, optional: false, required: true
  private _uppercase?: number; 
  public get uppercase() {
    return this.getNumberAttribute('uppercase');
  }
  public set uppercase(value: number) {
    this._uppercase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uppercaseInput() {
    return this._uppercase;
  }
}
export interface SecretRotationLdapPasswordParametersPasswordRequirements {
  /**
  * String of allowed symbols for password generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#allowed_symbols SecretRotationLdapPassword#allowed_symbols}
  */
  readonly allowedSymbols?: string;
  /**
  * The length of the generated password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#length SecretRotationLdapPassword#length}
  */
  readonly length: number;
  /**
  * Required character types in the generated password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#required SecretRotationLdapPassword#required}
  */
  readonly required: SecretRotationLdapPasswordParametersPasswordRequirementsRequired;
}

export function secretRotationLdapPasswordParametersPasswordRequirementsToTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_symbols: cdktf.stringToTerraform(struct!.allowedSymbols),
    length: cdktf.numberToTerraform(struct!.length),
    required: secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform(struct!.required),
  }
}


export function secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform(struct?: SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_symbols: {
      value: cdktf.stringToHclTerraform(struct!.allowedSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "struct",
      storageClassType: "SecretRotationLdapPasswordParametersPasswordRequirementsRequired",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSymbols = this._allowedSymbols;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLdapPasswordParametersPasswordRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedSymbols = undefined;
      this._length = undefined;
      this._required.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedSymbols = value.allowedSymbols;
      this._length = value.length;
      this._required.internalValue = value.required;
    }
  }

  // allowed_symbols - computed: false, optional: true, required: false
  private _allowedSymbols?: string; 
  public get allowedSymbols() {
    return this.getStringAttribute('allowed_symbols');
  }
  public set allowedSymbols(value: string) {
    this._allowedSymbols = value;
  }
  public resetAllowedSymbols() {
    this._allowedSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSymbolsInput() {
    return this._allowedSymbols;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // required - computed: false, optional: false, required: true
  private _required = new SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: SecretRotationLdapPasswordParametersPasswordRequirementsRequired) {
    this._required.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface SecretRotationLdapPasswordParameters {
  /**
  * The Distinguished Name (DN) of the LDAP entry to rotate the password for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#dn SecretRotationLdapPassword#dn}
  */
  readonly dn: string;
  /**
  * Password generation requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#password_requirements SecretRotationLdapPassword#password_requirements}
  */
  readonly passwordRequirements: SecretRotationLdapPasswordParametersPasswordRequirements;
  /**
  * The method to use for rotating the password. Supported options: connection-principal and target-principal (default: connection-principal)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#rotation_method SecretRotationLdapPassword#rotation_method}
  */
  readonly rotationMethod?: string;
}

export function secretRotationLdapPasswordParametersToTerraform(struct?: SecretRotationLdapPasswordParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    password_requirements: secretRotationLdapPasswordParametersPasswordRequirementsToTerraform(struct!.passwordRequirements),
    rotation_method: cdktf.stringToTerraform(struct!.rotationMethod),
  }
}


export function secretRotationLdapPasswordParametersToHclTerraform(struct?: SecretRotationLdapPasswordParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dn: {
      value: cdktf.stringToHclTerraform(struct!.dn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_requirements: {
      value: secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform(struct!.passwordRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "SecretRotationLdapPasswordParametersPasswordRequirements",
    },
    rotation_method: {
      value: cdktf.stringToHclTerraform(struct!.rotationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLdapPasswordParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLdapPasswordParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dn = this._dn;
    }
    if (this._passwordRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRequirements = this._passwordRequirements?.internalValue;
    }
    if (this._rotationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationMethod = this._rotationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLdapPasswordParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dn = undefined;
      this._passwordRequirements.internalValue = undefined;
      this._rotationMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dn = value.dn;
      this._passwordRequirements.internalValue = value.passwordRequirements;
      this._rotationMethod = value.rotationMethod;
    }
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // password_requirements - computed: false, optional: false, required: true
  private _passwordRequirements = new SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference(this, "password_requirements");
  public get passwordRequirements() {
    return this._passwordRequirements;
  }
  public putPasswordRequirements(value: SecretRotationLdapPasswordParametersPasswordRequirements) {
    this._passwordRequirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequirementsInput() {
    return this._passwordRequirements.internalValue;
  }

  // rotation_method - computed: false, optional: true, required: false
  private _rotationMethod?: string; 
  public get rotationMethod() {
    return this.getStringAttribute('rotation_method');
  }
  public set rotationMethod(value: string) {
    this._rotationMethod = value;
  }
  public resetRotationMethod() {
    this._rotationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationMethodInput() {
    return this._rotationMethod;
  }
}
export interface SecretRotationLdapPasswordRotateAtUtc {
  /**
  * The hour at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#hours SecretRotationLdapPassword#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#minutes SecretRotationLdapPassword#minutes}
  */
  readonly minutes?: number;
}

export function secretRotationLdapPasswordRotateAtUtcToTerraform(struct?: SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function secretRotationLdapPasswordRotateAtUtcToHclTerraform(struct?: SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLdapPasswordRotateAtUtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLdapPasswordRotateAtUtc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface SecretRotationLdapPasswordSecretsMapping {
  /**
  * The name of the secret that the Distinguished Name will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#dn SecretRotationLdapPassword#dn}
  */
  readonly dn: string;
  /**
  * The name of the secret that the generated password will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#password SecretRotationLdapPassword#password}
  */
  readonly password: string;
}

export function secretRotationLdapPasswordSecretsMappingToTerraform(struct?: SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function secretRotationLdapPasswordSecretsMappingToHclTerraform(struct?: SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dn: {
      value: cdktf.stringToHclTerraform(struct!.dn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLdapPasswordSecretsMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dn = this._dn;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLdapPasswordSecretsMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dn = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dn = value.dn;
      this._password = value.password;
    }
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface SecretRotationLdapPasswordTemporaryParameters {
  /**
  * The password of the provided principal if 'parameters.rotation_method' is set to 'target-principal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#password SecretRotationLdapPassword#password}
  */
  readonly password?: string;
}

export function secretRotationLdapPasswordTemporaryParametersToTerraform(struct?: SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function secretRotationLdapPasswordTemporaryParametersToHclTerraform(struct?: SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLdapPasswordTemporaryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLdapPasswordTemporaryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password}
*/
export class SecretRotationLdapPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_rotation_ldap_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretRotationLdapPassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretRotationLdapPassword to import
  * @param importFromId The id of the existing SecretRotationLdapPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretRotationLdapPassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_ldap_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretRotationLdapPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: SecretRotationLdapPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_rotation_ldap_password',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRotationEnabled = config.autoRotationEnabled;
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._environment = config.environment;
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
    this._projectId = config.projectId;
    this._rotateAtUtc.internalValue = config.rotateAtUtc;
    this._rotationInterval = config.rotationInterval;
    this._secretPath = config.secretPath;
    this._secretsMapping.internalValue = config.secretsMapping;
    this._temporaryParameters.internalValue = config.temporaryParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rotation_enabled - computed: true, optional: true, required: false
  private _autoRotationEnabled?: boolean | cdktf.IResolvable; 
  public get autoRotationEnabled() {
    return this.getBooleanAttribute('auto_rotation_enabled');
  }
  public set autoRotationEnabled(value: boolean | cdktf.IResolvable) {
    this._autoRotationEnabled = value;
  }
  public resetAutoRotationEnabled() {
    this._autoRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotationEnabledInput() {
    return this._autoRotationEnabled;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SecretRotationLdapPasswordParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SecretRotationLdapPasswordParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rotate_at_utc - computed: true, optional: true, required: false
  private _rotateAtUtc = new SecretRotationLdapPasswordRotateAtUtcOutputReference(this, "rotate_at_utc");
  public get rotateAtUtc() {
    return this._rotateAtUtc;
  }
  public putRotateAtUtc(value: SecretRotationLdapPasswordRotateAtUtc) {
    this._rotateAtUtc.internalValue = value;
  }
  public resetRotateAtUtc() {
    this._rotateAtUtc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateAtUtcInput() {
    return this._rotateAtUtc.internalValue;
  }

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: number; 
  public get rotationInterval() {
    return this.getNumberAttribute('rotation_interval');
  }
  public set rotationInterval(value: number) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // secret_path - computed: false, optional: false, required: true
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }

  // secrets_mapping - computed: false, optional: false, required: true
  private _secretsMapping = new SecretRotationLdapPasswordSecretsMappingOutputReference(this, "secrets_mapping");
  public get secretsMapping() {
    return this._secretsMapping;
  }
  public putSecretsMapping(value: SecretRotationLdapPasswordSecretsMapping) {
    this._secretsMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsMappingInput() {
    return this._secretsMapping.internalValue;
  }

  // temporary_parameters - computed: false, optional: true, required: false
  private _temporaryParameters = new SecretRotationLdapPasswordTemporaryParametersOutputReference(this, "temporary_parameters");
  public get temporaryParameters() {
    return this._temporaryParameters;
  }
  public putTemporaryParameters(value: SecretRotationLdapPasswordTemporaryParameters) {
    this._temporaryParameters.internalValue = value;
  }
  public resetTemporaryParameters() {
    this._temporaryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryParametersInput() {
    return this._temporaryParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rotation_enabled: cdktf.booleanToTerraform(this._autoRotationEnabled),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      parameters: secretRotationLdapPasswordParametersToTerraform(this._parameters.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotate_at_utc: secretRotationLdapPasswordRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      secrets_mapping: secretRotationLdapPasswordSecretsMappingToTerraform(this._secretsMapping.internalValue),
      temporary_parameters: secretRotationLdapPasswordTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rotation_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoRotationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      parameters: {
        value: secretRotationLdapPasswordParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLdapPasswordParameters",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_at_utc: {
        value: secretRotationLdapPasswordRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLdapPasswordRotateAtUtc",
      },
      rotation_interval: {
        value: cdktf.numberToHclTerraform(this._rotationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_path: {
        value: cdktf.stringToHclTerraform(this._secretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secrets_mapping: {
        value: secretRotationLdapPasswordSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLdapPasswordSecretsMapping",
      },
      temporary_parameters: {
        value: secretRotationLdapPasswordTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLdapPasswordTemporaryParameters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
