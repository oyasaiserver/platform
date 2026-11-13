// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretValidationRuleSecretRotationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The constraints this Secret Rotations rule enforces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#constraints SecretValidationRuleSecretRotations#constraints}
  */
  readonly constraints: SecretValidationRuleSecretRotationsConstraints;
  /**
  * An optional description of the secret validation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#description SecretValidationRuleSecretRotations#description}
  */
  readonly description?: string;
  /**
  * The slug of the environment to scope this rule to. Omit to enforce the rule in every environment of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#environment SecretValidationRuleSecretRotations#environment}
  */
  readonly environment?: string;
  /**
  * Whether the rule is enforced. An inactive rule is kept but ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#is_active SecretValidationRuleSecretRotations#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The name of the secret validation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#name SecretValidationRuleSecretRotations#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the secret validation rule in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#project_id SecretValidationRuleSecretRotations#project_id}
  */
  readonly projectId: string;
  /**
  * The secret path to scope this rule to. Supports glob patterns such as `/apps/**`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#secret_path SecretValidationRuleSecretRotations#secret_path}
  */
  readonly secretPath: string;
}
export interface SecretValidationRuleSecretRotationsConstraintsPasswordConstraints {
  /**
  * The maximum number of characters the generated password may contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#max_length SecretValidationRuleSecretRotations#max_length}
  */
  readonly maxLength?: number;
  /**
  * The minimum number of characters the generated password must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#min_length SecretValidationRuleSecretRotations#min_length}
  */
  readonly minLength?: number;
  /**
  * A regular expression the generated password must match. Setting this makes Infisical build the password from the pattern and ignore the length constraints on the same rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#regex_pattern SecretValidationRuleSecretRotations#regex_pattern}
  */
  readonly regexPattern?: string;
  /**
  * A string the generated password must start with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#required_prefix SecretValidationRuleSecretRotations#required_prefix}
  */
  readonly requiredPrefix?: string;
  /**
  * A string the generated password must end with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#required_suffix SecretValidationRuleSecretRotations#required_suffix}
  */
  readonly requiredSuffix?: string;
}

export function secretValidationRuleSecretRotationsConstraintsPasswordConstraintsToTerraform(struct?: SecretValidationRuleSecretRotationsConstraintsPasswordConstraints | cdktf.IResolvable): any {
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


export function secretValidationRuleSecretRotationsConstraintsPasswordConstraintsToHclTerraform(struct?: SecretValidationRuleSecretRotationsConstraintsPasswordConstraints | cdktf.IResolvable): any {
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

export class SecretValidationRuleSecretRotationsConstraintsPasswordConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretValidationRuleSecretRotationsConstraintsPasswordConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretValidationRuleSecretRotationsConstraintsPasswordConstraints | cdktf.IResolvable | undefined) {
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
export interface SecretValidationRuleSecretRotationsConstraints {
  /**
  * Constraints the generated password must satisfy. These replace any password requirements configured on the resource itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#password_constraints SecretValidationRuleSecretRotations#password_constraints}
  */
  readonly passwordConstraints: SecretValidationRuleSecretRotationsConstraintsPasswordConstraints;
  /**
  * The secret rotation providers this rule applies to. Supported: postgres-credentials, mysql-credentials, mssql-credentials, oracledb-credentials, unix-linux-local-account, ldap-password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#providers SecretValidationRuleSecretRotations#providers}
  */
  readonly providers: string[];
}

export function secretValidationRuleSecretRotationsConstraintsToTerraform(struct?: SecretValidationRuleSecretRotationsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_constraints: secretValidationRuleSecretRotationsConstraintsPasswordConstraintsToTerraform(struct!.passwordConstraints),
    providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providers),
  }
}


export function secretValidationRuleSecretRotationsConstraintsToHclTerraform(struct?: SecretValidationRuleSecretRotationsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_constraints: {
      value: secretValidationRuleSecretRotationsConstraintsPasswordConstraintsToHclTerraform(struct!.passwordConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SecretValidationRuleSecretRotationsConstraintsPasswordConstraints",
    },
    providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretValidationRuleSecretRotationsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretValidationRuleSecretRotationsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordConstraints = this._passwordConstraints?.internalValue;
    }
    if (this._providers !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretValidationRuleSecretRotationsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordConstraints.internalValue = undefined;
      this._providers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordConstraints.internalValue = value.passwordConstraints;
      this._providers = value.providers;
    }
  }

  // password_constraints - computed: false, optional: false, required: true
  private _passwordConstraints = new SecretValidationRuleSecretRotationsConstraintsPasswordConstraintsOutputReference(this, "password_constraints");
  public get passwordConstraints() {
    return this._passwordConstraints;
  }
  public putPasswordConstraints(value: SecretValidationRuleSecretRotationsConstraintsPasswordConstraints) {
    this._passwordConstraints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConstraintsInput() {
    return this._passwordConstraints.internalValue;
  }

  // providers - computed: false, optional: false, required: true
  private _providers?: string[]; 
  public get providers() {
    return cdktf.Fn.tolist(this.getListAttribute('providers'));
  }
  public set providers(value: string[]) {
    this._providers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations infisical_secret_validation_rule_secret_rotations}
*/
export class SecretValidationRuleSecretRotations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_validation_rule_secret_rotations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretValidationRuleSecretRotations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretValidationRuleSecretRotations to import
  * @param importFromId The id of the existing SecretValidationRuleSecretRotations that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretValidationRuleSecretRotations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_validation_rule_secret_rotations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_validation_rule_secret_rotations infisical_secret_validation_rule_secret_rotations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretValidationRuleSecretRotationsConfig
  */
  public constructor(scope: Construct, id: string, config: SecretValidationRuleSecretRotationsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_validation_rule_secret_rotations',
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
  private _constraints = new SecretValidationRuleSecretRotationsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SecretValidationRuleSecretRotationsConstraints) {
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
      constraints: secretValidationRuleSecretRotationsConstraintsToTerraform(this._constraints.internalValue),
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
        value: secretValidationRuleSecretRotationsConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretValidationRuleSecretRotationsConstraints",
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
