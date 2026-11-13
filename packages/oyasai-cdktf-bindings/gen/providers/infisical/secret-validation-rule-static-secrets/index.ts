// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretValidationRuleStaticSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The constraints this Static Secrets rule enforces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#constraints SecretValidationRuleStaticSecrets#constraints}
  */
  readonly constraints: SecretValidationRuleStaticSecretsConstraints;
  /**
  * An optional description of the secret validation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#description SecretValidationRuleStaticSecrets#description}
  */
  readonly description?: string;
  /**
  * The slug of the environment to scope this rule to. Omit to enforce the rule in every environment of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#environment SecretValidationRuleStaticSecrets#environment}
  */
  readonly environment?: string;
  /**
  * Whether the rule is enforced. An inactive rule is kept but ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#is_active SecretValidationRuleStaticSecrets#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The name of the secret validation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#name SecretValidationRuleStaticSecrets#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the secret validation rule in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#project_id SecretValidationRuleStaticSecrets#project_id}
  */
  readonly projectId: string;
  /**
  * The secret path to scope this rule to. Supports glob patterns such as `/apps/**`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#secret_path SecretValidationRuleStaticSecrets#secret_path}
  */
  readonly secretPath: string;
}
export interface SecretValidationRuleStaticSecretsConstraintsKeyConstraints {
  /**
  * The maximum number of characters the secret key may contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#max_length SecretValidationRuleStaticSecrets#max_length}
  */
  readonly maxLength?: number;
  /**
  * The minimum number of characters the secret key must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#min_length SecretValidationRuleStaticSecrets#min_length}
  */
  readonly minLength?: number;
  /**
  * A regular expression the secret key must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#regex_pattern SecretValidationRuleStaticSecrets#regex_pattern}
  */
  readonly regexPattern?: string;
  /**
  * A string the secret key must start with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#required_prefix SecretValidationRuleStaticSecrets#required_prefix}
  */
  readonly requiredPrefix?: string;
  /**
  * A string the secret key must end with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#required_suffix SecretValidationRuleStaticSecrets#required_suffix}
  */
  readonly requiredSuffix?: string;
}

export function secretValidationRuleStaticSecretsConstraintsKeyConstraintsToTerraform(struct?: SecretValidationRuleStaticSecretsConstraintsKeyConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    regex_pattern: cdktf.stringToTerraform(struct!.regexPattern),
    required_prefix: cdktf.stringToTerraform(struct!.requiredPrefix),
    required_suffix: cdktf.stringToTerraform(struct!.requiredSuffix),
  }
}


export function secretValidationRuleStaticSecretsConstraintsKeyConstraintsToHclTerraform(struct?: SecretValidationRuleStaticSecretsConstraintsKeyConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex_pattern: {
      value: cdktf.stringToHclTerraform(struct!.regexPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_prefix: {
      value: cdktf.stringToHclTerraform(struct!.requiredPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_suffix: {
      value: cdktf.stringToHclTerraform(struct!.requiredSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretValidationRuleStaticSecretsConstraintsKeyConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretValidationRuleStaticSecretsConstraintsKeyConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._regexPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexPattern = this._regexPattern;
    }
    if (this._requiredPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPrefix = this._requiredPrefix;
    }
    if (this._requiredSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredSuffix = this._requiredSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretValidationRuleStaticSecretsConstraintsKeyConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._regexPattern = undefined;
      this._requiredPrefix = undefined;
      this._requiredSuffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._regexPattern = value.regexPattern;
      this._requiredPrefix = value.requiredPrefix;
      this._requiredSuffix = value.requiredSuffix;
    }
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // regex_pattern - computed: false, optional: true, required: false
  private _regexPattern?: string; 
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }
  public set regexPattern(value: string) {
    this._regexPattern = value;
  }
  public resetRegexPattern() {
    this._regexPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternInput() {
    return this._regexPattern;
  }

  // required_prefix - computed: false, optional: true, required: false
  private _requiredPrefix?: string; 
  public get requiredPrefix() {
    return this.getStringAttribute('required_prefix');
  }
  public set requiredPrefix(value: string) {
    this._requiredPrefix = value;
  }
  public resetRequiredPrefix() {
    this._requiredPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPrefixInput() {
    return this._requiredPrefix;
  }

  // required_suffix - computed: false, optional: true, required: false
  private _requiredSuffix?: string; 
  public get requiredSuffix() {
    return this.getStringAttribute('required_suffix');
  }
  public set requiredSuffix(value: string) {
    this._requiredSuffix = value;
  }
  public resetRequiredSuffix() {
    this._requiredSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSuffixInput() {
    return this._requiredSuffix;
  }
}
export interface SecretValidationRuleStaticSecretsConstraintsValueConstraints {
  /**
  * The maximum number of characters the secret value may contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#max_length SecretValidationRuleStaticSecrets#max_length}
  */
  readonly maxLength?: number;
  /**
  * The minimum number of characters the secret value must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#min_length SecretValidationRuleStaticSecrets#min_length}
  */
  readonly minLength?: number;
  /**
  * A regular expression the secret value must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#regex_pattern SecretValidationRuleStaticSecrets#regex_pattern}
  */
  readonly regexPattern?: string;
  /**
  * A string the secret value must start with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#required_prefix SecretValidationRuleStaticSecrets#required_prefix}
  */
  readonly requiredPrefix?: string;
  /**
  * A string the secret value must end with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#required_suffix SecretValidationRuleStaticSecrets#required_suffix}
  */
  readonly requiredSuffix?: string;
  /**
  * How many of the secret's own previous versions the new value must differ from. Between 1 and 25. Omit to allow a value that repeats a previous version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#unique_across_last_versions SecretValidationRuleStaticSecrets#unique_across_last_versions}
  */
  readonly uniqueAcrossLastVersions?: number;
  /**
  * Set to `true` to reject a value that another secret in the rule's scope already holds. Requires blind indexing on the project. Omit to allow a value another secret already holds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#unique_within_scope SecretValidationRuleStaticSecrets#unique_within_scope}
  */
  readonly uniqueWithinScope?: boolean | cdktf.IResolvable;
}

export function secretValidationRuleStaticSecretsConstraintsValueConstraintsToTerraform(struct?: SecretValidationRuleStaticSecretsConstraintsValueConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    regex_pattern: cdktf.stringToTerraform(struct!.regexPattern),
    required_prefix: cdktf.stringToTerraform(struct!.requiredPrefix),
    required_suffix: cdktf.stringToTerraform(struct!.requiredSuffix),
    unique_across_last_versions: cdktf.numberToTerraform(struct!.uniqueAcrossLastVersions),
    unique_within_scope: cdktf.booleanToTerraform(struct!.uniqueWithinScope),
  }
}


export function secretValidationRuleStaticSecretsConstraintsValueConstraintsToHclTerraform(struct?: SecretValidationRuleStaticSecretsConstraintsValueConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex_pattern: {
      value: cdktf.stringToHclTerraform(struct!.regexPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_prefix: {
      value: cdktf.stringToHclTerraform(struct!.requiredPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_suffix: {
      value: cdktf.stringToHclTerraform(struct!.requiredSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_across_last_versions: {
      value: cdktf.numberToHclTerraform(struct!.uniqueAcrossLastVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unique_within_scope: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueWithinScope),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretValidationRuleStaticSecretsConstraintsValueConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretValidationRuleStaticSecretsConstraintsValueConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._regexPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexPattern = this._regexPattern;
    }
    if (this._requiredPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPrefix = this._requiredPrefix;
    }
    if (this._requiredSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredSuffix = this._requiredSuffix;
    }
    if (this._uniqueAcrossLastVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueAcrossLastVersions = this._uniqueAcrossLastVersions;
    }
    if (this._uniqueWithinScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueWithinScope = this._uniqueWithinScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretValidationRuleStaticSecretsConstraintsValueConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._regexPattern = undefined;
      this._requiredPrefix = undefined;
      this._requiredSuffix = undefined;
      this._uniqueAcrossLastVersions = undefined;
      this._uniqueWithinScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._regexPattern = value.regexPattern;
      this._requiredPrefix = value.requiredPrefix;
      this._requiredSuffix = value.requiredSuffix;
      this._uniqueAcrossLastVersions = value.uniqueAcrossLastVersions;
      this._uniqueWithinScope = value.uniqueWithinScope;
    }
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // regex_pattern - computed: false, optional: true, required: false
  private _regexPattern?: string; 
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }
  public set regexPattern(value: string) {
    this._regexPattern = value;
  }
  public resetRegexPattern() {
    this._regexPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternInput() {
    return this._regexPattern;
  }

  // required_prefix - computed: false, optional: true, required: false
  private _requiredPrefix?: string; 
  public get requiredPrefix() {
    return this.getStringAttribute('required_prefix');
  }
  public set requiredPrefix(value: string) {
    this._requiredPrefix = value;
  }
  public resetRequiredPrefix() {
    this._requiredPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPrefixInput() {
    return this._requiredPrefix;
  }

  // required_suffix - computed: false, optional: true, required: false
  private _requiredSuffix?: string; 
  public get requiredSuffix() {
    return this.getStringAttribute('required_suffix');
  }
  public set requiredSuffix(value: string) {
    this._requiredSuffix = value;
  }
  public resetRequiredSuffix() {
    this._requiredSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSuffixInput() {
    return this._requiredSuffix;
  }

  // unique_across_last_versions - computed: false, optional: true, required: false
  private _uniqueAcrossLastVersions?: number; 
  public get uniqueAcrossLastVersions() {
    return this.getNumberAttribute('unique_across_last_versions');
  }
  public set uniqueAcrossLastVersions(value: number) {
    this._uniqueAcrossLastVersions = value;
  }
  public resetUniqueAcrossLastVersions() {
    this._uniqueAcrossLastVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueAcrossLastVersionsInput() {
    return this._uniqueAcrossLastVersions;
  }

  // unique_within_scope - computed: false, optional: true, required: false
  private _uniqueWithinScope?: boolean | cdktf.IResolvable; 
  public get uniqueWithinScope() {
    return this.getBooleanAttribute('unique_within_scope');
  }
  public set uniqueWithinScope(value: boolean | cdktf.IResolvable) {
    this._uniqueWithinScope = value;
  }
  public resetUniqueWithinScope() {
    this._uniqueWithinScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueWithinScopeInput() {
    return this._uniqueWithinScope;
  }
}
export interface SecretValidationRuleStaticSecretsConstraints {
  /**
  * Constraints enforced on the secret key when a secret is created or renamed. Omit to leave keys unconstrained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#key_constraints SecretValidationRuleStaticSecrets#key_constraints}
  */
  readonly keyConstraints?: SecretValidationRuleStaticSecretsConstraintsKeyConstraints;
  /**
  * Constraints enforced on the secret value when a secret is created or updated. Omit to leave values unconstrained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#value_constraints SecretValidationRuleStaticSecrets#value_constraints}
  */
  readonly valueConstraints?: SecretValidationRuleStaticSecretsConstraintsValueConstraints;
}

export function secretValidationRuleStaticSecretsConstraintsToTerraform(struct?: SecretValidationRuleStaticSecretsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_constraints: secretValidationRuleStaticSecretsConstraintsKeyConstraintsToTerraform(struct!.keyConstraints),
    value_constraints: secretValidationRuleStaticSecretsConstraintsValueConstraintsToTerraform(struct!.valueConstraints),
  }
}


export function secretValidationRuleStaticSecretsConstraintsToHclTerraform(struct?: SecretValidationRuleStaticSecretsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_constraints: {
      value: secretValidationRuleStaticSecretsConstraintsKeyConstraintsToHclTerraform(struct!.keyConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SecretValidationRuleStaticSecretsConstraintsKeyConstraints",
    },
    value_constraints: {
      value: secretValidationRuleStaticSecretsConstraintsValueConstraintsToHclTerraform(struct!.valueConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SecretValidationRuleStaticSecretsConstraintsValueConstraints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretValidationRuleStaticSecretsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretValidationRuleStaticSecretsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyConstraints = this._keyConstraints?.internalValue;
    }
    if (this._valueConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueConstraints = this._valueConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretValidationRuleStaticSecretsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyConstraints.internalValue = undefined;
      this._valueConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyConstraints.internalValue = value.keyConstraints;
      this._valueConstraints.internalValue = value.valueConstraints;
    }
  }

  // key_constraints - computed: false, optional: true, required: false
  private _keyConstraints = new SecretValidationRuleStaticSecretsConstraintsKeyConstraintsOutputReference(this, "key_constraints");
  public get keyConstraints() {
    return this._keyConstraints;
  }
  public putKeyConstraints(value: SecretValidationRuleStaticSecretsConstraintsKeyConstraints) {
    this._keyConstraints.internalValue = value;
  }
  public resetKeyConstraints() {
    this._keyConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyConstraintsInput() {
    return this._keyConstraints.internalValue;
  }

  // value_constraints - computed: false, optional: true, required: false
  private _valueConstraints = new SecretValidationRuleStaticSecretsConstraintsValueConstraintsOutputReference(this, "value_constraints");
  public get valueConstraints() {
    return this._valueConstraints;
  }
  public putValueConstraints(value: SecretValidationRuleStaticSecretsConstraintsValueConstraints) {
    this._valueConstraints.internalValue = value;
  }
  public resetValueConstraints() {
    this._valueConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueConstraintsInput() {
    return this._valueConstraints.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets infisical_secret_validation_rule_static_secrets}
*/
export class SecretValidationRuleStaticSecrets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_validation_rule_static_secrets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretValidationRuleStaticSecrets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretValidationRuleStaticSecrets to import
  * @param importFromId The id of the existing SecretValidationRuleStaticSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretValidationRuleStaticSecrets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_validation_rule_static_secrets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_static_secrets infisical_secret_validation_rule_static_secrets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretValidationRuleStaticSecretsConfig
  */
  public constructor(scope: Construct, id: string, config: SecretValidationRuleStaticSecretsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_validation_rule_static_secrets',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._constraints.internalValue = config.constraints;
    this._description = config.description;
    this._environment = config.environment;
    this._isActive = config.isActive;
    this._name = config.name;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraints - computed: false, optional: false, required: true
  private _constraints = new SecretValidationRuleStaticSecretsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SecretValidationRuleStaticSecretsConstraints) {
    this._constraints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      constraints: secretValidationRuleStaticSecretsConstraintsToTerraform(this._constraints.internalValue),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      constraints: {
        value: secretValidationRuleStaticSecretsConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretValidationRuleStaticSecretsConstraints",
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
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_path: {
        value: cdktf.stringToHclTerraform(this._secretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
