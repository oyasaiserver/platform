// https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretRotationAzureClientSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#auto_rotation_enabled SecretRotationAzureClientSecret#auto_rotation_enabled}
  */
  readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to use for the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#connection_id SecretRotationAzureClientSecret#connection_id}
  */
  readonly connectionId: string;
  /**
  * The description of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#description SecretRotationAzureClientSecret#description}
  */
  readonly description?: string;
  /**
  * The slug of the project environment to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#environment SecretRotationAzureClientSecret#environment}
  */
  readonly environment: string;
  /**
  * The name of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#name SecretRotationAzureClientSecret#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#parameters SecretRotationAzureClientSecret#parameters}
  */
  readonly parameters: SecretRotationAzureClientSecretParameters;
  /**
  * The ID of the Infisical project to create the secret rotation in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#project_id SecretRotationAzureClientSecret#project_id}
  */
  readonly projectId: string;
  /**
  * At which UTC time the rotation should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#rotate_at_utc SecretRotationAzureClientSecret#rotate_at_utc}
  */
  readonly rotateAtUtc?: SecretRotationAzureClientSecretRotateAtUtc;
  /**
  * How many days to wait between each rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#rotation_interval SecretRotationAzureClientSecret#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * The folder path to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#secret_path SecretRotationAzureClientSecret#secret_path}
  */
  readonly secretPath: string;
  /**
  * Secret mappings to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#secrets_mapping SecretRotationAzureClientSecret#secrets_mapping}
  */
  readonly secretsMapping: SecretRotationAzureClientSecretSecretsMapping;
  /**
  * Temporary parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#temporary_parameters SecretRotationAzureClientSecret#temporary_parameters}
  */
  readonly temporaryParameters?: SecretRotationAzureClientSecretTemporaryParameters;
}
export interface SecretRotationAzureClientSecretParameters {
  /**
  * The client ID of the Azure Application to rotate the client secret for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#client_id SecretRotationAzureClientSecret#client_id}
  */
  readonly clientId: string;
  /**
  * The ID of the Azure Application to rotate the client secret for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#object_id SecretRotationAzureClientSecret#object_id}
  */
  readonly objectId: string;
}

export function secretRotationAzureClientSecretParametersToTerraform(struct?: SecretRotationAzureClientSecretParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
  }
}


export function secretRotationAzureClientSecretParametersToHclTerraform(struct?: SecretRotationAzureClientSecretParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationAzureClientSecretParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAzureClientSecretParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationAzureClientSecretParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._objectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._objectId = value.objectId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }
}
export interface SecretRotationAzureClientSecretRotateAtUtc {
  /**
  * The hour at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#hours SecretRotationAzureClientSecret#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#minutes SecretRotationAzureClientSecret#minutes}
  */
  readonly minutes?: number;
}

export function secretRotationAzureClientSecretRotateAtUtcToTerraform(struct?: SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function secretRotationAzureClientSecretRotateAtUtcToHclTerraform(struct?: SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable): any {
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

export class SecretRotationAzureClientSecretRotateAtUtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretRotationAzureClientSecretRotateAtUtc | cdktf.IResolvable | undefined) {
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
export interface SecretRotationAzureClientSecretSecretsMapping {
  /**
  * The name of the secret that the client ID will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#client_id SecretRotationAzureClientSecret#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the secret that the rotated client secret will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#client_secret SecretRotationAzureClientSecret#client_secret}
  */
  readonly clientSecret: string;
}

export function secretRotationAzureClientSecretSecretsMappingToTerraform(struct?: SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function secretRotationAzureClientSecretSecretsMappingToHclTerraform(struct?: SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationAzureClientSecretSecretsMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationAzureClientSecretSecretsMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}
export interface SecretRotationAzureClientSecretTemporaryParameters {
}

export function secretRotationAzureClientSecretTemporaryParametersToTerraform(struct?: SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secretRotationAzureClientSecretTemporaryParametersToHclTerraform(struct?: SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretRotationAzureClientSecretTemporaryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationAzureClientSecretTemporaryParameters | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret infisical_secret_rotation_azure_client_secret}
*/
export class SecretRotationAzureClientSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_rotation_azure_client_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretRotationAzureClientSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretRotationAzureClientSecret to import
  * @param importFromId The id of the existing SecretRotationAzureClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretRotationAzureClientSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_azure_client_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/secret_rotation_azure_client_secret infisical_secret_rotation_azure_client_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretRotationAzureClientSecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretRotationAzureClientSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_rotation_azure_client_secret',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.15'
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
  private _parameters = new SecretRotationAzureClientSecretParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SecretRotationAzureClientSecretParameters) {
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
  private _rotateAtUtc = new SecretRotationAzureClientSecretRotateAtUtcOutputReference(this, "rotate_at_utc");
  public get rotateAtUtc() {
    return this._rotateAtUtc;
  }
  public putRotateAtUtc(value: SecretRotationAzureClientSecretRotateAtUtc) {
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
  private _secretsMapping = new SecretRotationAzureClientSecretSecretsMappingOutputReference(this, "secrets_mapping");
  public get secretsMapping() {
    return this._secretsMapping;
  }
  public putSecretsMapping(value: SecretRotationAzureClientSecretSecretsMapping) {
    this._secretsMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsMappingInput() {
    return this._secretsMapping.internalValue;
  }

  // temporary_parameters - computed: false, optional: true, required: false
  private _temporaryParameters = new SecretRotationAzureClientSecretTemporaryParametersOutputReference(this, "temporary_parameters");
  public get temporaryParameters() {
    return this._temporaryParameters;
  }
  public putTemporaryParameters(value: SecretRotationAzureClientSecretTemporaryParameters) {
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
      parameters: secretRotationAzureClientSecretParametersToTerraform(this._parameters.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotate_at_utc: secretRotationAzureClientSecretRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      secrets_mapping: secretRotationAzureClientSecretSecretsMappingToTerraform(this._secretsMapping.internalValue),
      temporary_parameters: secretRotationAzureClientSecretTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
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
        value: secretRotationAzureClientSecretParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAzureClientSecretParameters",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_at_utc: {
        value: secretRotationAzureClientSecretRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAzureClientSecretRotateAtUtc",
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
        value: secretRotationAzureClientSecretSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAzureClientSecretSecretsMapping",
      },
      temporary_parameters: {
        value: secretRotationAzureClientSecretTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAzureClientSecretTemporaryParameters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
