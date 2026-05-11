// https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalKmsAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration for the AWS External KMS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#configuration ExternalKmsAws#configuration}
  */
  readonly configuration: ExternalKmsAwsConfiguration;
  /**
  * An optional description for the KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#description ExternalKmsAws#description}
  */
  readonly description?: string;
  /**
  * The name of the KMS to create. Must be slug-friendly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#name ExternalKmsAws#name}
  */
  readonly name: string;
}
export interface ExternalKmsAwsConfigurationCredential {
  /**
  * The AWS Access Key ID used to authenticate requests to AWS services. Required for access-key type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-access-key-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#access_key_id ExternalKmsAws#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to assume for performing operations. Infisical will assume this role using AWS Security Token Service (STS). Required for assume-role type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-iam-role-arn-for-role-assumption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#role_arn ExternalKmsAws#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The external ID of the role to assume for performing operations. Required for assume-role type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-assume-role-external-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#role_external_id ExternalKmsAws#role_external_id}
  */
  readonly roleExternalId?: string;
  /**
  * The AWS Secret Access Key associated with the Access Key ID to authenticate requests to AWS services. Required for access-key type. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-secret-access-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#secret_access_key ExternalKmsAws#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function externalKmsAwsConfigurationCredentialToTerraform(struct?: ExternalKmsAwsConfigurationCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_external_id: cdktf.stringToTerraform(struct!.roleExternalId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function externalKmsAwsConfigurationCredentialToHclTerraform(struct?: ExternalKmsAwsConfigurationCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.roleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalKmsAwsConfigurationCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalKmsAwsConfigurationCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleExternalId = this._roleExternalId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalKmsAwsConfigurationCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._roleArn = undefined;
      this._roleExternalId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._roleArn = value.roleArn;
      this._roleExternalId = value.roleExternalId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_external_id - computed: false, optional: true, required: false
  private _roleExternalId?: string; 
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }
  public set roleExternalId(value: string) {
    this._roleExternalId = value;
  }
  public resetRoleExternalId() {
    this._roleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleExternalIdInput() {
    return this._roleExternalId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ExternalKmsAwsConfiguration {
  /**
  * The AWS KMS key ID to use for the external KMS. For more details, refer to the documentation here https://infisical.com/docs/documentation/platform/kms-configuration/aws-kms#param-aws-kms-key-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#aws_kms_key_id ExternalKmsAws#aws_kms_key_id}
  */
  readonly awsKmsKeyId: string;
  /**
  * The AWS region where the KMS key is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#aws_region ExternalKmsAws#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The AWS credentials for the external KMS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#credential ExternalKmsAws#credential}
  */
  readonly credential: ExternalKmsAwsConfigurationCredential;
  /**
  * The Authentication Type to use. Must be access-key or assume-role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#type ExternalKmsAws#type}
  */
  readonly type: string;
}

export function externalKmsAwsConfigurationToTerraform(struct?: ExternalKmsAwsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    credential: externalKmsAwsConfigurationCredentialToTerraform(struct!.credential),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function externalKmsAwsConfigurationToHclTerraform(struct?: ExternalKmsAwsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential: {
      value: externalKmsAwsConfigurationCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalKmsAwsConfigurationCredential",
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

export class ExternalKmsAwsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalKmsAwsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalKmsAwsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsKmsKeyId = undefined;
      this._awsRegion = undefined;
      this._credential.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsKmsKeyId = value.awsKmsKeyId;
      this._awsRegion = value.awsRegion;
      this._credential.internalValue = value.credential;
      this._type = value.type;
    }
  }

  // aws_kms_key_id - computed: false, optional: false, required: true
  private _awsKmsKeyId?: string; 
  public get awsKmsKeyId() {
    return this.getStringAttribute('aws_kms_key_id');
  }
  public set awsKmsKeyId(value: string) {
    this._awsKmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyIdInput() {
    return this._awsKmsKeyId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new ExternalKmsAwsConfigurationCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: ExternalKmsAwsConfigurationCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws infisical_external_kms_aws}
*/
export class ExternalKmsAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_external_kms_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalKmsAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalKmsAws to import
  * @param importFromId The id of the existing ExternalKmsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalKmsAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_external_kms_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/external_kms_aws infisical_external_kms_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalKmsAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalKmsAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_external_kms_aws',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.22'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new ExternalKmsAwsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ExternalKmsAwsConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credentials_hash - computed: true, optional: false, required: false
  public get credentialsHash() {
    return this.getStringAttribute('credentials_hash');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: externalKmsAwsConfigurationToTerraform(this._configuration.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: externalKmsAwsConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalKmsAwsConfiguration",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
