// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsSecretsManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS access key ID. Used to authenticate with AWS Secrets Manager. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#access_key_id IntegrationAwsSecretsManager#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The ARN of the role to assume when syncing secrets to AWS Secrets Manager. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#assume_role_arn IntegrationAwsSecretsManager#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * The AWS region to sync secrets to. (us-east-1, us-east-2, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#aws_region IntegrationAwsSecretsManager#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The slug of the environment to sync to AWS Secrets Manager (prod, dev, staging, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#environment IntegrationAwsSecretsManager#environment}
  */
  readonly environment: string;
  /**
  * The behavior of the mapping. Can be 'many-to-one' or 'one-to-one'. Many to One: All Infisical secrets will be mapped to a single AWS secret. One to One: Each Infisical secret will be mapped to its own AWS secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#mapping_behavior IntegrationAwsSecretsManager#mapping_behavior}
  */
  readonly mappingBehavior?: string;
  /**
  * Integration options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#options IntegrationAwsSecretsManager#options}
  */
  readonly options?: IntegrationAwsSecretsManagerOptions;
  /**
  * The ID of your Infisical project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#project_id IntegrationAwsSecretsManager#project_id}
  */
  readonly projectId: string;
  /**
  * The AWS secret access key. Used to authenticate with AWS Secrets Manager. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#secret_access_key IntegrationAwsSecretsManager#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * The secret path in Infisical to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#secret_path IntegrationAwsSecretsManager#secret_path}
  */
  readonly secretPath: string;
  /**
  * The path in AWS Secrets Manager to sync secrets to. This is required if mapping_behavior is 'many-to-one'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#secrets_manager_path IntegrationAwsSecretsManager#secrets_manager_path}
  */
  readonly secretsManagerPath?: string;
}
export interface IntegrationAwsSecretsManagerOptionsAwsTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#key IntegrationAwsSecretsManager#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#value IntegrationAwsSecretsManager#value}
  */
  readonly value?: string;
}

export function integrationAwsSecretsManagerOptionsAwsTagsToTerraform(struct?: IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform(struct?: IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IntegrationAwsSecretsManagerOptionsAwsTagsList extends cdktf.ComplexList {
  public internalValue? : IntegrationAwsSecretsManagerOptionsAwsTags[] | cdktf.IResolvable

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
  public get(index: number): IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference {
    return new IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsSecretsManagerOptions {
  /**
  * Tags to attach to the AWS Secrets Manager secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#aws_tags IntegrationAwsSecretsManager#aws_tags}
  */
  readonly awsTags?: IntegrationAwsSecretsManagerOptionsAwsTags[] | cdktf.IResolvable;
  /**
  * The sync mode for AWS tags. The supported options are `secret-metadata` and `custom`. If `secret-metadata` is selected, the metadata of the Infisical secrets are used as tags in AWS (only supported for one-to-one integrations). If `custom` is selected, then the key/value pairs in the `aws_tags` field is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#metadata_sync_mode IntegrationAwsSecretsManager#metadata_sync_mode}
  */
  readonly metadataSyncMode?: string;
  /**
  * The prefix to add to the secret name in AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#secret_prefix IntegrationAwsSecretsManager#secret_prefix}
  */
  readonly secretPrefix?: string;
}

export function integrationAwsSecretsManagerOptionsToTerraform(struct?: IntegrationAwsSecretsManagerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_tags: cdktf.listMapper(integrationAwsSecretsManagerOptionsAwsTagsToTerraform, false)(struct!.awsTags),
    metadata_sync_mode: cdktf.stringToTerraform(struct!.metadataSyncMode),
    secret_prefix: cdktf.stringToTerraform(struct!.secretPrefix),
  }
}


export function integrationAwsSecretsManagerOptionsToHclTerraform(struct?: IntegrationAwsSecretsManagerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_tags: {
      value: cdktf.listMapperHcl(integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform, false)(struct!.awsTags),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationAwsSecretsManagerOptionsAwsTagsList",
    },
    metadata_sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.metadataSyncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_prefix: {
      value: cdktf.stringToHclTerraform(struct!.secretPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsSecretsManagerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsSecretsManagerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTags = this._awsTags?.internalValue;
    }
    if (this._metadataSyncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSyncMode = this._metadataSyncMode;
    }
    if (this._secretPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPrefix = this._secretPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsSecretsManagerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsTags.internalValue = undefined;
      this._metadataSyncMode = undefined;
      this._secretPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsTags.internalValue = value.awsTags;
      this._metadataSyncMode = value.metadataSyncMode;
      this._secretPrefix = value.secretPrefix;
    }
  }

  // aws_tags - computed: true, optional: true, required: false
  private _awsTags = new IntegrationAwsSecretsManagerOptionsAwsTagsList(this, "aws_tags", true);
  public get awsTags() {
    return this._awsTags;
  }
  public putAwsTags(value: IntegrationAwsSecretsManagerOptionsAwsTags[] | cdktf.IResolvable) {
    this._awsTags.internalValue = value;
  }
  public resetAwsTags() {
    this._awsTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagsInput() {
    return this._awsTags.internalValue;
  }

  // metadata_sync_mode - computed: true, optional: true, required: false
  private _metadataSyncMode?: string; 
  public get metadataSyncMode() {
    return this.getStringAttribute('metadata_sync_mode');
  }
  public set metadataSyncMode(value: string) {
    this._metadataSyncMode = value;
  }
  public resetMetadataSyncMode() {
    this._metadataSyncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSyncModeInput() {
    return this._metadataSyncMode;
  }

  // secret_prefix - computed: true, optional: true, required: false
  private _secretPrefix?: string; 
  public get secretPrefix() {
    return this.getStringAttribute('secret_prefix');
  }
  public set secretPrefix(value: string) {
    this._secretPrefix = value;
  }
  public resetSecretPrefix() {
    this._secretPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPrefixInput() {
    return this._secretPrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager infisical_integration_aws_secrets_manager}
*/
export class IntegrationAwsSecretsManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_integration_aws_secrets_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsSecretsManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsSecretsManager to import
  * @param importFromId The id of the existing IntegrationAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsSecretsManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_aws_secrets_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_aws_secrets_manager infisical_integration_aws_secrets_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsSecretsManagerConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsSecretsManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_integration_aws_secrets_manager',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._assumeRoleArn = config.assumeRoleArn;
    this._awsRegion = config.awsRegion;
    this._environment = config.environment;
    this._mappingBehavior = config.mappingBehavior;
    this._options.internalValue = config.options;
    this._projectId = config.projectId;
    this._secretAccessKey = config.secretAccessKey;
    this._secretPath = config.secretPath;
    this._secretsManagerPath = config.secretsManagerPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
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

  // integration_auth_id - computed: true, optional: false, required: false
  public get integrationAuthId() {
    return this.getStringAttribute('integration_auth_id');
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // mapping_behavior - computed: true, optional: true, required: false
  private _mappingBehavior?: string; 
  public get mappingBehavior() {
    return this.getStringAttribute('mapping_behavior');
  }
  public set mappingBehavior(value: string) {
    this._mappingBehavior = value;
  }
  public resetMappingBehavior() {
    this._mappingBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingBehaviorInput() {
    return this._mappingBehavior;
  }

  // options - computed: true, optional: true, required: false
  private _options = new IntegrationAwsSecretsManagerOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: IntegrationAwsSecretsManagerOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
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

  // secrets_manager_path - computed: false, optional: true, required: false
  private _secretsManagerPath?: string; 
  public get secretsManagerPath() {
    return this.getStringAttribute('secrets_manager_path');
  }
  public set secretsManagerPath(value: string) {
    this._secretsManagerPath = value;
  }
  public resetSecretsManagerPath() {
    this._secretsManagerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerPathInput() {
    return this._secretsManagerPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      environment: cdktf.stringToTerraform(this._environment),
      mapping_behavior: cdktf.stringToTerraform(this._mappingBehavior),
      options: integrationAwsSecretsManagerOptionsToTerraform(this._options.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      secrets_manager_path: cdktf.stringToTerraform(this._secretsManagerPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role_arn: {
        value: cdktf.stringToHclTerraform(this._assumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
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
      mapping_behavior: {
        value: cdktf.stringToHclTerraform(this._mappingBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: integrationAwsSecretsManagerOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsSecretsManagerOptions",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
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
      secrets_manager_path: {
        value: cdktf.stringToHclTerraform(this._secretsManagerPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
