// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretRotationGcpServiceAccountKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#auto_rotation_enabled SecretRotationGcpServiceAccountKey#auto_rotation_enabled}
  */
  readonly autoRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to use for the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#connection_id SecretRotationGcpServiceAccountKey#connection_id}
  */
  readonly connectionId: string;
  /**
  * The description of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#description SecretRotationGcpServiceAccountKey#description}
  */
  readonly description?: string;
  /**
  * The slug of the project environment to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#environment SecretRotationGcpServiceAccountKey#environment}
  */
  readonly environment: string;
  /**
  * The name of the secret rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#name SecretRotationGcpServiceAccountKey#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#parameters SecretRotationGcpServiceAccountKey#parameters}
  */
  readonly parameters: SecretRotationGcpServiceAccountKeyParameters;
  /**
  * The ID of the Infisical project to create the secret rotation in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#project_id SecretRotationGcpServiceAccountKey#project_id}
  */
  readonly projectId: string;
  /**
  * At which UTC time the rotation should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#rotate_at_utc SecretRotationGcpServiceAccountKey#rotate_at_utc}
  */
  readonly rotateAtUtc?: SecretRotationGcpServiceAccountKeyRotateAtUtc;
  /**
  * How many days to wait between each rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#rotation_interval SecretRotationGcpServiceAccountKey#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * The folder path to rotate secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#secret_path SecretRotationGcpServiceAccountKey#secret_path}
  */
  readonly secretPath: string;
  /**
  * Secret mappings to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#secrets_mapping SecretRotationGcpServiceAccountKey#secrets_mapping}
  */
  readonly secretsMapping: SecretRotationGcpServiceAccountKeySecretsMapping;
  /**
  * Temporary parameters to modify how secrets are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#temporary_parameters SecretRotationGcpServiceAccountKey#temporary_parameters}
  */
  readonly temporaryParameters?: SecretRotationGcpServiceAccountKeyTemporaryParameters;
}
export interface SecretRotationGcpServiceAccountKeyParameters {
  /**
  * The email of the GCP service account whose keys will be rotated, e.g. my-app@my-project.iam.gserviceaccount.com. The connection's service account needs the Service Account Key Admin role (roles/iam.serviceAccountKeyAdmin) on it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#service_account_email SecretRotationGcpServiceAccountKey#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function secretRotationGcpServiceAccountKeyParametersToTerraform(struct?: SecretRotationGcpServiceAccountKeyParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function secretRotationGcpServiceAccountKeyParametersToHclTerraform(struct?: SecretRotationGcpServiceAccountKeyParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationGcpServiceAccountKeyParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationGcpServiceAccountKeyParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationGcpServiceAccountKeyParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface SecretRotationGcpServiceAccountKeyRotateAtUtc {
  /**
  * The hour at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#hours SecretRotationGcpServiceAccountKey#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which the rotation should occur (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#minutes SecretRotationGcpServiceAccountKey#minutes}
  */
  readonly minutes?: number;
}

export function secretRotationGcpServiceAccountKeyRotateAtUtcToTerraform(struct?: SecretRotationGcpServiceAccountKeyRotateAtUtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function secretRotationGcpServiceAccountKeyRotateAtUtcToHclTerraform(struct?: SecretRotationGcpServiceAccountKeyRotateAtUtc | cdktf.IResolvable): any {
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

export class SecretRotationGcpServiceAccountKeyRotateAtUtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationGcpServiceAccountKeyRotateAtUtc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretRotationGcpServiceAccountKeyRotateAtUtc | cdktf.IResolvable | undefined) {
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
export interface SecretRotationGcpServiceAccountKeySecretsMapping {
  /**
  * The name of the secret that the rotated service account key (the JSON key file) will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#service_account_key SecretRotationGcpServiceAccountKey#service_account_key}
  */
  readonly serviceAccountKey: string;
}

export function secretRotationGcpServiceAccountKeySecretsMappingToTerraform(struct?: SecretRotationGcpServiceAccountKeySecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_key: cdktf.stringToTerraform(struct!.serviceAccountKey),
  }
}


export function secretRotationGcpServiceAccountKeySecretsMappingToHclTerraform(struct?: SecretRotationGcpServiceAccountKeySecretsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretRotationGcpServiceAccountKeySecretsMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationGcpServiceAccountKeySecretsMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKey = this._serviceAccountKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationGcpServiceAccountKeySecretsMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountKey = value.serviceAccountKey;
    }
  }

  // service_account_key - computed: false, optional: false, required: true
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
  public set serviceAccountKey(value: string) {
    this._serviceAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }
}
export interface SecretRotationGcpServiceAccountKeyTemporaryParameters {
}

export function secretRotationGcpServiceAccountKeyTemporaryParametersToTerraform(struct?: SecretRotationGcpServiceAccountKeyTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secretRotationGcpServiceAccountKeyTemporaryParametersToHclTerraform(struct?: SecretRotationGcpServiceAccountKeyTemporaryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretRotationGcpServiceAccountKeyTemporaryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretRotationGcpServiceAccountKeyTemporaryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretRotationGcpServiceAccountKeyTemporaryParameters | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key infisical_secret_rotation_gcp_service_account_key}
*/
export class SecretRotationGcpServiceAccountKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_rotation_gcp_service_account_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretRotationGcpServiceAccountKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretRotationGcpServiceAccountKey to import
  * @param importFromId The id of the existing SecretRotationGcpServiceAccountKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretRotationGcpServiceAccountKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_gcp_service_account_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_rotation_gcp_service_account_key infisical_secret_rotation_gcp_service_account_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretRotationGcpServiceAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SecretRotationGcpServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_rotation_gcp_service_account_key',
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
  private _parameters = new SecretRotationGcpServiceAccountKeyParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SecretRotationGcpServiceAccountKeyParameters) {
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
  private _rotateAtUtc = new SecretRotationGcpServiceAccountKeyRotateAtUtcOutputReference(this, "rotate_at_utc");
  public get rotateAtUtc() {
    return this._rotateAtUtc;
  }
  public putRotateAtUtc(value: SecretRotationGcpServiceAccountKeyRotateAtUtc) {
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
  private _secretsMapping = new SecretRotationGcpServiceAccountKeySecretsMappingOutputReference(this, "secrets_mapping");
  public get secretsMapping() {
    return this._secretsMapping;
  }
  public putSecretsMapping(value: SecretRotationGcpServiceAccountKeySecretsMapping) {
    this._secretsMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsMappingInput() {
    return this._secretsMapping.internalValue;
  }

  // temporary_parameters - computed: false, optional: true, required: false
  private _temporaryParameters = new SecretRotationGcpServiceAccountKeyTemporaryParametersOutputReference(this, "temporary_parameters");
  public get temporaryParameters() {
    return this._temporaryParameters;
  }
  public putTemporaryParameters(value: SecretRotationGcpServiceAccountKeyTemporaryParameters) {
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
      parameters: secretRotationGcpServiceAccountKeyParametersToTerraform(this._parameters.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotate_at_utc: secretRotationGcpServiceAccountKeyRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      secrets_mapping: secretRotationGcpServiceAccountKeySecretsMappingToTerraform(this._secretsMapping.internalValue),
      temporary_parameters: secretRotationGcpServiceAccountKeyTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
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
        value: secretRotationGcpServiceAccountKeyParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationGcpServiceAccountKeyParameters",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_at_utc: {
        value: secretRotationGcpServiceAccountKeyRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationGcpServiceAccountKeyRotateAtUtc",
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
        value: secretRotationGcpServiceAccountKeySecretsMappingToHclTerraform(this._secretsMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationGcpServiceAccountKeySecretsMapping",
      },
      temporary_parameters: {
        value: secretRotationGcpServiceAccountKeyTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretRotationGcpServiceAccountKeyTemporaryParameters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
