// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/secret_validation_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfisicalSecretValidationRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Infisical project to read secret validation rules from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/secret_validation_rules#project_id DataInfisicalSecretValidationRules#project_id}
  */
  readonly projectId: string;
  /**
  * Return only the rules of this type. Omit to return every rule in the project. Supported: static-secrets, dynamic-secrets, secret-rotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/secret_validation_rules#type DataInfisicalSecretValidationRules#type}
  */
  readonly type?: string;
}
export interface DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraints {
}

export function dataInfisicalSecretValidationRulesRulesConstraintsKeyConstraintsToTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretValidationRulesRulesConstraintsKeyConstraintsToHclTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // regex_pattern - computed: true, optional: false, required: false
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }

  // required_prefix - computed: true, optional: false, required: false
  public get requiredPrefix() {
    return this.getStringAttribute('required_prefix');
  }

  // required_suffix - computed: true, optional: false, required: false
  public get requiredSuffix() {
    return this.getStringAttribute('required_suffix');
  }
}
export interface DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraints {
}

export function dataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraintsToTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraintsToHclTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // regex_pattern - computed: true, optional: false, required: false
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }

  // required_prefix - computed: true, optional: false, required: false
  public get requiredPrefix() {
    return this.getStringAttribute('required_prefix');
  }

  // required_suffix - computed: true, optional: false, required: false
  public get requiredSuffix() {
    return this.getStringAttribute('required_suffix');
  }
}
export interface DataInfisicalSecretValidationRulesRulesConstraintsValueConstraints {
}

export function dataInfisicalSecretValidationRulesRulesConstraintsValueConstraintsToTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraintsValueConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretValidationRulesRulesConstraintsValueConstraintsToHclTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraintsValueConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretValidationRulesRulesConstraintsValueConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataInfisicalSecretValidationRulesRulesConstraintsValueConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretValidationRulesRulesConstraintsValueConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // regex_pattern - computed: true, optional: false, required: false
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }

  // required_prefix - computed: true, optional: false, required: false
  public get requiredPrefix() {
    return this.getStringAttribute('required_prefix');
  }

  // required_suffix - computed: true, optional: false, required: false
  public get requiredSuffix() {
    return this.getStringAttribute('required_suffix');
  }

  // unique_across_last_versions - computed: true, optional: false, required: false
  public get uniqueAcrossLastVersions() {
    return this.getNumberAttribute('unique_across_last_versions');
  }

  // unique_within_scope - computed: true, optional: false, required: false
  public get uniqueWithinScope() {
    return this.getBooleanAttribute('unique_within_scope');
  }
}
export interface DataInfisicalSecretValidationRulesRulesConstraints {
}

export function dataInfisicalSecretValidationRulesRulesConstraintsToTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretValidationRulesRulesConstraintsToHclTerraform(struct?: DataInfisicalSecretValidationRulesRulesConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretValidationRulesRulesConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataInfisicalSecretValidationRulesRulesConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretValidationRulesRulesConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_constraints - computed: true, optional: false, required: false
  private _keyConstraints = new DataInfisicalSecretValidationRulesRulesConstraintsKeyConstraintsOutputReference(this, "key_constraints");
  public get keyConstraints() {
    return this._keyConstraints;
  }

  // password_constraints - computed: true, optional: false, required: false
  private _passwordConstraints = new DataInfisicalSecretValidationRulesRulesConstraintsPasswordConstraintsOutputReference(this, "password_constraints");
  public get passwordConstraints() {
    return this._passwordConstraints;
  }

  // providers - computed: true, optional: false, required: false
  public get providers() {
    return cdktf.Fn.tolist(this.getListAttribute('providers'));
  }

  // value_constraints - computed: true, optional: false, required: false
  private _valueConstraints = new DataInfisicalSecretValidationRulesRulesConstraintsValueConstraintsOutputReference(this, "value_constraints");
  public get valueConstraints() {
    return this._valueConstraints;
  }
}
export interface DataInfisicalSecretValidationRulesRulesEnvironment {
}

export function dataInfisicalSecretValidationRulesRulesEnvironmentToTerraform(struct?: DataInfisicalSecretValidationRulesRulesEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretValidationRulesRulesEnvironmentToHclTerraform(struct?: DataInfisicalSecretValidationRulesRulesEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretValidationRulesRulesEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataInfisicalSecretValidationRulesRulesEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretValidationRulesRulesEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}
export interface DataInfisicalSecretValidationRulesRules {
}

export function dataInfisicalSecretValidationRulesRulesToTerraform(struct?: DataInfisicalSecretValidationRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretValidationRulesRulesToHclTerraform(struct?: DataInfisicalSecretValidationRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretValidationRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInfisicalSecretValidationRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretValidationRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataInfisicalSecretValidationRulesRulesConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataInfisicalSecretValidationRulesRulesEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // secret_path - computed: true, optional: false, required: false
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataInfisicalSecretValidationRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataInfisicalSecretValidationRulesRulesOutputReference {
    return new DataInfisicalSecretValidationRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/secret_validation_rules infisical_secret_validation_rules}
*/
export class DataInfisicalSecretValidationRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_validation_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfisicalSecretValidationRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfisicalSecretValidationRules to import
  * @param importFromId The id of the existing DataInfisicalSecretValidationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/secret_validation_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfisicalSecretValidationRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_validation_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/secret_validation_rules infisical_secret_validation_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfisicalSecretValidationRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfisicalSecretValidationRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_validation_rules',
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
    this._projectId = config.projectId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataInfisicalSecretValidationRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
