// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretRotationLitellmApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#auto_rotation_enabled SecretRotationLitellmApiKey#auto_rotation_enabled}
  */
  readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to use for the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#connection_id SecretRotationLitellmApiKey#connection_id}
  */
  readonly connectionId: string;
  /**
  * The description of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#description SecretRotationLitellmApiKey#description}
  */
  readonly description?: string;
  /**
  * The slug of the project environment to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#environment SecretRotationLitellmApiKey#environment}
  */
  readonly environment: string;
  /**
  * The name of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#name SecretRotationLitellmApiKey#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#parameters SecretRotationLitellmApiKey#parameters}
  */
  readonly parameters: SecretRotationLitellmApiKeyParameters;
  /**
  * The ID of the Infisical project to create the secret rotation in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#project_id SecretRotationLitellmApiKey#project_id}
  */
  readonly projectId: string;
  /**
  * At which UTC time the rotation should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#rotate_at_utc SecretRotationLitellmApiKey#rotate_at_utc}
  */
  readonly rotateAtUtc?: SecretRotationLitellmApiKeyRotateAtUtc;
  /**
  * How many days to wait between each rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#rotation_interval SecretRotationLitellmApiKey#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * The folder path to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#secret_path SecretRotationLitellmApiKey#secret_path}
  */
  readonly secretPath: string;
  /**
  * Secret mappings to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#secrets_mapping SecretRotationLitellmApiKey#secrets_mapping}
  */
  readonly secretsMapping: SecretRotationLitellmApiKeySecretsMapping;
  /**
  * Temporary parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#temporary_parameters SecretRotationLitellmApiKey#temporary_parameters}
  */
  readonly temporaryParameters?: SecretRotationLitellmApiKeyTemporaryParameters;
}
export interface SecretRotationLitellmApiKeyParameters {
  /**
  * A JSON-encoded object of additional LiteLLM /key/generate options (e.g. max_budget, tpm_limit, metadata). Use jsonencode() to build it. Reserved fields (key_alias, auto_rotate, rotation_interval, duration, send_invite_email, key_type, user_id, team_id, models) and permission fields (allowed_routes, permission, object_permission) cannot be set here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#additional_options SecretRotationLitellmApiKey#additional_options}
  */
  readonly additionalOptions?: string;
  /**
  * The list of model names the generated key is allowed to access. An empty or omitted list allows all models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#models SecretRotationLitellmApiKey#models}
  */
  readonly models?: string[];
  /**
  * The name for the generated LiteLLM API key. Infisical appends a timestamp to keep each rotated key unique and record its creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#name SecretRotationLitellmApiKey#name}
  */
  readonly name: string;
  /**
  * The ID of the LiteLLM team to associate the generated key with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#team_id SecretRotationLitellmApiKey#team_id}
  */
  readonly teamId?: string;
  /**
  * The ID of the LiteLLM user to associate the generated key with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#user_id SecretRotationLitellmApiKey#user_id}
  */
  readonly userId?: string;
}

export function secretRotationLitellmApiKeyParametersToTerraform(struct?: SecretRotationLitellmApiKeyParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_options: cdktf.stringToTerraform(struct!.additionalOptions),
    models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.models),
    name: cdktf.stringToTerraform(struct!.name),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function secretRotationLitellmApiKeyParametersToHclTerraform(struct?: SecretRotationLitellmApiKeyParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_options: {
      value: cdktf.stringToHclTerraform(struct!.additionalOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.models),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLitellmApiKeyParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLitellmApiKeyParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalOptions = this._additionalOptions;
    }
    if (this._models !== undefined) {
      hasAnyValues = true;
      internalValueResult.models = this._models;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLitellmApiKeyParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalOptions = undefined;
      this._models = undefined;
      this._name = undefined;
      this._teamId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalOptions = value.additionalOptions;
      this._models = value.models;
      this._name = value.name;
      this._teamId = value.teamId;
      this._userId = value.userId;
    }
  }

  // additional_options - computed: false, optional: true, required: false
  private _additionalOptions?: string; 
  public get additionalOptions() {
    return this.getStringAttribute('additional_options');
  }
  public set additionalOptions(value: string) {
    this._additionalOptions = value;
  }
  public resetAdditionalOptions() {
    this._additionalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOptionsInput() {
    return this._additionalOptions;
  }

  // models - computed: false, optional: true, required: false
  private _models?: string[]; 
  public get models() {
    return this.getListAttribute('models');
  }
  public set models(value: string[]) {
    this._models = value;
  }
  public resetModels() {
    this._models = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models;
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

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface SecretRotationLitellmApiKeyRotateAtUtc {
  /**
  * The hour at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#hours SecretRotationLitellmApiKey#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#minutes SecretRotationLitellmApiKey#minutes}
  */
  readonly minutes?: number;
}

export function secretRotationLitellmApiKeyRotateAtUtcToTerraform(struct?: SecretRotationLitellmApiKeyRotateAtUtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function secretRotationLitellmApiKeyRotateAtUtcToHclTerraform(struct?: SecretRotationLitellmApiKeyRotateAtUtc | cdktf.IResolvable): any {
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

export class SecretRotationLitellmApiKeyRotateAtUtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLitellmApiKeyRotateAtUtc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretRotationLitellmApiKeyRotateAtUtc | cdktf.IResolvable | undefined) {
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
export interface SecretRotationLitellmApiKeySecretsMapping {
  /**
  * The name of the secret that the rotated LiteLLM API key will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#api_key SecretRotationLitellmApiKey#api_key}
  */
  readonly apiKey: string;
}

export function secretRotationLitellmApiKeySecretsMappingToTerraform(struct?: SecretRotationLitellmApiKeySecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function secretRotationLitellmApiKeySecretsMappingToHclTerraform(struct?: SecretRotationLitellmApiKeySecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationLitellmApiKeySecretsMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLitellmApiKeySecretsMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLitellmApiKeySecretsMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface SecretRotationLitellmApiKeyTemporaryParameters {
}

export function secretRotationLitellmApiKeyTemporaryParametersToTerraform(struct?: SecretRotationLitellmApiKeyTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secretRotationLitellmApiKeyTemporaryParametersToHclTerraform(struct?: SecretRotationLitellmApiKeyTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretRotationLitellmApiKeyTemporaryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationLitellmApiKeyTemporaryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationLitellmApiKeyTemporaryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key infisical_secret_rotation_litellm_api_key}
*/
export class SecretRotationLitellmApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_rotation_litellm_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretRotationLitellmApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretRotationLitellmApiKey to import
  * @param importFromId The id of the existing SecretRotationLitellmApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretRotationLitellmApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_litellm_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_litellm_api_key infisical_secret_rotation_litellm_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretRotationLitellmApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SecretRotationLitellmApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_rotation_litellm_api_key',
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
  private _parameters = new SecretRotationLitellmApiKeyParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SecretRotationLitellmApiKeyParameters) {
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
  private _rotateAtUtc = new SecretRotationLitellmApiKeyRotateAtUtcOutputReference(this, "rotate_at_utc");
  public get rotateAtUtc() {
    return this._rotateAtUtc;
  }
  public putRotateAtUtc(value: SecretRotationLitellmApiKeyRotateAtUtc) {
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
  private _secretsMapping = new SecretRotationLitellmApiKeySecretsMappingOutputReference(this, "secrets_mapping");
  public get secretsMapping() {
    return this._secretsMapping;
  }
  public putSecretsMapping(value: SecretRotationLitellmApiKeySecretsMapping) {
    this._secretsMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsMappingInput() {
    return this._secretsMapping.internalValue;
  }

  // temporary_parameters - computed: false, optional: true, required: false
  private _temporaryParameters = new SecretRotationLitellmApiKeyTemporaryParametersOutputReference(this, "temporary_parameters");
  public get temporaryParameters() {
    return this._temporaryParameters;
  }
  public putTemporaryParameters(value: SecretRotationLitellmApiKeyTemporaryParameters) {
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
      parameters: secretRotationLitellmApiKeyParametersToTerraform(this._parameters.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotate_at_utc: secretRotationLitellmApiKeyRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      secrets_mapping: secretRotationLitellmApiKeySecretsMappingToTerraform(this._secretsMapping.internalValue),
      temporary_parameters: secretRotationLitellmApiKeyTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
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
        value: secretRotationLitellmApiKeyParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLitellmApiKeyParameters",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_at_utc: {
        value: secretRotationLitellmApiKeyRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLitellmApiKeyRotateAtUtc",
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
        value: secretRotationLitellmApiKeySecretsMappingToHclTerraform(this._secretsMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLitellmApiKeySecretsMapping",
      },
      temporary_parameters: {
        value: secretRotationLitellmApiKeyTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationLitellmApiKeyTemporaryParameters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
