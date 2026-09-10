// https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretRotationAuth0ClientSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#auto_rotation_enabled SecretRotationAuth0ClientSecret#auto_rotation_enabled}
  */
  readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to use for the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#connection_id SecretRotationAuth0ClientSecret#connection_id}
  */
  readonly connectionId: string;
  /**
  * The description of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#description SecretRotationAuth0ClientSecret#description}
  */
  readonly description?: string;
  /**
  * The slug of the project environment to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#environment SecretRotationAuth0ClientSecret#environment}
  */
  readonly environment: string;
  /**
  * The name of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#name SecretRotationAuth0ClientSecret#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#parameters SecretRotationAuth0ClientSecret#parameters}
  */
  readonly parameters: SecretRotationAuth0ClientSecretParameters;
  /**
  * The ID of the Infisical project to create the secret rotation in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#project_id SecretRotationAuth0ClientSecret#project_id}
  */
  readonly projectId: string;
  /**
  * At which UTC time the rotation should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#rotate_at_utc SecretRotationAuth0ClientSecret#rotate_at_utc}
  */
  readonly rotateAtUtc?: SecretRotationAuth0ClientSecretRotateAtUtc;
  /**
  * How many days to wait between each rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#rotation_interval SecretRotationAuth0ClientSecret#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * The folder path to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#secret_path SecretRotationAuth0ClientSecret#secret_path}
  */
  readonly secretPath: string;
  /**
  * Secret mappings to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#secrets_mapping SecretRotationAuth0ClientSecret#secrets_mapping}
  */
  readonly secretsMapping: SecretRotationAuth0ClientSecretSecretsMapping;
  /**
  * Temporary parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#temporary_parameters SecretRotationAuth0ClientSecret#temporary_parameters}
  */
  readonly temporaryParameters?: SecretRotationAuth0ClientSecretTemporaryParameters;
}
export interface SecretRotationAuth0ClientSecretParameters {
  /**
  * The client ID of the Auth0 application to rotate the client secret for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#client_id SecretRotationAuth0ClientSecret#client_id}
  */
  readonly clientId: string;
}

export function secretRotationAuth0ClientSecretParametersToTerraform(struct?: SecretRotationAuth0ClientSecretParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function secretRotationAuth0ClientSecretParametersToHclTerraform(struct?: SecretRotationAuth0ClientSecretParameters | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationAuth0ClientSecretParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAuth0ClientSecretParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationAuth0ClientSecretParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
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
}
export interface SecretRotationAuth0ClientSecretRotateAtUtc {
  /**
  * The hour at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#hours SecretRotationAuth0ClientSecret#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#minutes SecretRotationAuth0ClientSecret#minutes}
  */
  readonly minutes?: number;
}

export function secretRotationAuth0ClientSecretRotateAtUtcToTerraform(struct?: SecretRotationAuth0ClientSecretRotateAtUtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function secretRotationAuth0ClientSecretRotateAtUtcToHclTerraform(struct?: SecretRotationAuth0ClientSecretRotateAtUtc | cdktf.IResolvable): any {
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

export class SecretRotationAuth0ClientSecretRotateAtUtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAuth0ClientSecretRotateAtUtc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretRotationAuth0ClientSecretRotateAtUtc | cdktf.IResolvable | undefined) {
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
export interface SecretRotationAuth0ClientSecretSecretsMapping {
  /**
  * The name of the secret that the client ID will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#client_id SecretRotationAuth0ClientSecret#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the secret that the rotated client secret will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#client_secret SecretRotationAuth0ClientSecret#client_secret}
  */
  readonly clientSecret: string;
}

export function secretRotationAuth0ClientSecretSecretsMappingToTerraform(struct?: SecretRotationAuth0ClientSecretSecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function secretRotationAuth0ClientSecretSecretsMappingToHclTerraform(struct?: SecretRotationAuth0ClientSecretSecretsMapping | cdktf.IResolvable): any {
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

export class SecretRotationAuth0ClientSecretSecretsMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAuth0ClientSecretSecretsMapping | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretRotationAuth0ClientSecretSecretsMapping | cdktf.IResolvable | undefined) {
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
export interface SecretRotationAuth0ClientSecretTemporaryParameters {
}

export function secretRotationAuth0ClientSecretTemporaryParametersToTerraform(struct?: SecretRotationAuth0ClientSecretTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secretRotationAuth0ClientSecretTemporaryParametersToHclTerraform(struct?: SecretRotationAuth0ClientSecretTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretRotationAuth0ClientSecretTemporaryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationAuth0ClientSecretTemporaryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationAuth0ClientSecretTemporaryParameters | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret infisical_secret_rotation_auth0_client_secret}
*/
export class SecretRotationAuth0ClientSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_rotation_auth0_client_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretRotationAuth0ClientSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretRotationAuth0ClientSecret to import
  * @param importFromId The id of the existing SecretRotationAuth0ClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretRotationAuth0ClientSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_auth0_client_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.31/docs/resources/secret_rotation_auth0_client_secret infisical_secret_rotation_auth0_client_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretRotationAuth0ClientSecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretRotationAuth0ClientSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_rotation_auth0_client_secret',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.31'
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
  private _parameters = new SecretRotationAuth0ClientSecretParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SecretRotationAuth0ClientSecretParameters) {
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
  private _rotateAtUtc = new SecretRotationAuth0ClientSecretRotateAtUtcOutputReference(this, "rotate_at_utc");
  public get rotateAtUtc() {
    return this._rotateAtUtc;
  }
  public putRotateAtUtc(value: SecretRotationAuth0ClientSecretRotateAtUtc) {
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
  private _secretsMapping = new SecretRotationAuth0ClientSecretSecretsMappingOutputReference(this, "secrets_mapping");
  public get secretsMapping() {
    return this._secretsMapping;
  }
  public putSecretsMapping(value: SecretRotationAuth0ClientSecretSecretsMapping) {
    this._secretsMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsMappingInput() {
    return this._secretsMapping.internalValue;
  }

  // temporary_parameters - computed: false, optional: true, required: false
  private _temporaryParameters = new SecretRotationAuth0ClientSecretTemporaryParametersOutputReference(this, "temporary_parameters");
  public get temporaryParameters() {
    return this._temporaryParameters;
  }
  public putTemporaryParameters(value: SecretRotationAuth0ClientSecretTemporaryParameters) {
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
      parameters: secretRotationAuth0ClientSecretParametersToTerraform(this._parameters.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotate_at_utc: secretRotationAuth0ClientSecretRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      secrets_mapping: secretRotationAuth0ClientSecretSecretsMappingToTerraform(this._secretsMapping.internalValue),
      temporary_parameters: secretRotationAuth0ClientSecretTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
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
        value: secretRotationAuth0ClientSecretParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAuth0ClientSecretParameters",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_at_utc: {
        value: secretRotationAuth0ClientSecretRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAuth0ClientSecretRotateAtUtc",
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
        value: secretRotationAuth0ClientSecretSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAuth0ClientSecretSecretsMapping",
      },
      temporary_parameters: {
        value: secretRotationAuth0ClientSecretTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationAuth0ClientSecretTemporaryParameters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
