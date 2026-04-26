// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretSyncAwsSecretsManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically synced when changes occur at the source location or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#auto_sync_enabled SecretSyncAwsSecretsManager#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the aws Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#connection_id SecretSyncAwsSecretsManager#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the AWS Secrets Manager sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#description SecretSyncAwsSecretsManager#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the secret sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#destination_config SecretSyncAwsSecretsManager#destination_config}
  */
  readonly destinationConfig: SecretSyncAwsSecretsManagerDestinationConfig;
  /**
  * The slug of the project environment to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#environment SecretSyncAwsSecretsManager#environment}
  */
  readonly environment: string;
  /**
  * The name of the AWS Secrets Manager sync to create. Must be slug-friendly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#name SecretSyncAwsSecretsManager#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#project_id SecretSyncAwsSecretsManager#project_id}
  */
  readonly projectId: string;
  /**
  * The folder path to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#secret_path SecretSyncAwsSecretsManager#secret_path}
  */
  readonly secretPath: string;
  /**
  * Parameters to modify how secrets are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#sync_options SecretSyncAwsSecretsManager#sync_options}
  */
  readonly syncOptions: SecretSyncAwsSecretsManagerSyncOptions;
}
export interface SecretSyncAwsSecretsManagerDestinationConfig {
  /**
  * The AWS region of your AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#aws_region SecretSyncAwsSecretsManager#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The name of the AWS secret to map to. This only applies when mapping_behavior is set to 'many-to-one'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#aws_secrets_manager_secret_name SecretSyncAwsSecretsManager#aws_secrets_manager_secret_name}
  */
  readonly awsSecretsManagerSecretName?: string;
  /**
  * The behavior of the mapping. Can be 'many-to-one' or 'one-to-one'. Many to One: All Infisical secrets will be mapped to a single AWS secret. One to One: Each Infisical secret will be mapped to its own AWS secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#mapping_behavior SecretSyncAwsSecretsManager#mapping_behavior}
  */
  readonly mappingBehavior?: string;
}

export function secretSyncAwsSecretsManagerDestinationConfigToTerraform(struct?: SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secrets_manager_secret_name: cdktf.stringToTerraform(struct!.awsSecretsManagerSecretName),
    mapping_behavior: cdktf.stringToTerraform(struct!.mappingBehavior),
  }
}


export function secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(struct?: SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secrets_manager_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretsManagerSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_behavior: {
      value: cdktf.stringToHclTerraform(struct!.mappingBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncAwsSecretsManagerDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretsManagerSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretsManagerSecretName = this._awsSecretsManagerSecretName;
    }
    if (this._mappingBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingBehavior = this._mappingBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._awsSecretsManagerSecretName = undefined;
      this._mappingBehavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._awsSecretsManagerSecretName = value.awsSecretsManagerSecretName;
      this._mappingBehavior = value.mappingBehavior;
    }
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

  // aws_secrets_manager_secret_name - computed: false, optional: true, required: false
  private _awsSecretsManagerSecretName?: string; 
  public get awsSecretsManagerSecretName() {
    return this.getStringAttribute('aws_secrets_manager_secret_name');
  }
  public set awsSecretsManagerSecretName(value: string) {
    this._awsSecretsManagerSecretName = value;
  }
  public resetAwsSecretsManagerSecretName() {
    this._awsSecretsManagerSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretsManagerSecretNameInput() {
    return this._awsSecretsManagerSecretName;
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
}
export interface SecretSyncAwsSecretsManagerSyncOptionsTags {
  /**
  * The key of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#key SecretSyncAwsSecretsManager#key}
  */
  readonly key: string;
  /**
  * The value of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#value SecretSyncAwsSecretsManager#value}
  */
  readonly value: string;
}

export function secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable): any {
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

export class SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecretSyncAwsSecretsManagerSyncOptionsTagsList extends cdktf.ComplexList {
  public internalValue? : SecretSyncAwsSecretsManagerSyncOptionsTags[] | cdktf.IResolvable

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
  public get(index: number): SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference {
    return new SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretSyncAwsSecretsManagerSyncOptions {
  /**
  * The AWS KMS key ID to use for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#aws_kms_key_id SecretSyncAwsSecretsManager#aws_kms_key_id}
  */
  readonly awsKmsKeyId?: string;
  /**
  * When set to true, Infisical will not remove secrets from AWS Secrets Manager. Enable this option if you intend to manage some secrets manually outside of Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#disable_secret_deletion SecretSyncAwsSecretsManager#disable_secret_deletion}
  */
  readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#initial_sync_behavior SecretSyncAwsSecretsManager#initial_sync_behavior}
  */
  readonly initialSyncBehavior: string;
  /**
  * The format to use for structuring secret keys in the AWS Secrets Manager destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#key_schema SecretSyncAwsSecretsManager#key_schema}
  */
  readonly keySchema?: string;
  /**
  * Whether to sync the secret metadata as tags. This is only supported for the 'one-to-one' mapping behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#sync_secret_metadata_as_tags SecretSyncAwsSecretsManager#sync_secret_metadata_as_tags}
  */
  readonly syncSecretMetadataAsTags?: boolean | cdktf.IResolvable;
  /**
  * The tags to sync to the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#tags SecretSyncAwsSecretsManager#tags}
  */
  readonly tags?: SecretSyncAwsSecretsManagerSyncOptionsTags[] | cdktf.IResolvable;
}

export function secretSyncAwsSecretsManagerSyncOptionsToTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
    disable_secret_deletion: cdktf.booleanToTerraform(struct!.disableSecretDeletion),
    initial_sync_behavior: cdktf.stringToTerraform(struct!.initialSyncBehavior),
    key_schema: cdktf.stringToTerraform(struct!.keySchema),
    sync_secret_metadata_as_tags: cdktf.booleanToTerraform(struct!.syncSecretMetadataAsTags),
    tags: cdktf.listMapper(secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform, false)(struct!.tags),
  }
}


export function secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable): any {
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
    disable_secret_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecretDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_sync_behavior: {
      value: cdktf.stringToHclTerraform(struct!.initialSyncBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_schema: {
      value: cdktf.stringToHclTerraform(struct!.keySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_secret_metadata_as_tags: {
      value: cdktf.booleanToHclTerraform(struct!.syncSecretMetadataAsTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "SecretSyncAwsSecretsManagerSyncOptionsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncAwsSecretsManagerSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
    }
    if (this._disableSecretDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
    }
    if (this._initialSyncBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSyncBehavior = this._initialSyncBehavior;
    }
    if (this._keySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema;
    }
    if (this._syncSecretMetadataAsTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSecretMetadataAsTags = this._syncSecretMetadataAsTags;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsKmsKeyId = undefined;
      this._disableSecretDeletion = undefined;
      this._initialSyncBehavior = undefined;
      this._keySchema = undefined;
      this._syncSecretMetadataAsTags = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsKmsKeyId = value.awsKmsKeyId;
      this._disableSecretDeletion = value.disableSecretDeletion;
      this._initialSyncBehavior = value.initialSyncBehavior;
      this._keySchema = value.keySchema;
      this._syncSecretMetadataAsTags = value.syncSecretMetadataAsTags;
      this._tags.internalValue = value.tags;
    }
  }

  // aws_kms_key_id - computed: false, optional: true, required: false
  private _awsKmsKeyId?: string; 
  public get awsKmsKeyId() {
    return this.getStringAttribute('aws_kms_key_id');
  }
  public set awsKmsKeyId(value: string) {
    this._awsKmsKeyId = value;
  }
  public resetAwsKmsKeyId() {
    this._awsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyIdInput() {
    return this._awsKmsKeyId;
  }

  // disable_secret_deletion - computed: true, optional: true, required: false
  private _disableSecretDeletion?: boolean | cdktf.IResolvable; 
  public get disableSecretDeletion() {
    return this.getBooleanAttribute('disable_secret_deletion');
  }
  public set disableSecretDeletion(value: boolean | cdktf.IResolvable) {
    this._disableSecretDeletion = value;
  }
  public resetDisableSecretDeletion() {
    this._disableSecretDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecretDeletionInput() {
    return this._disableSecretDeletion;
  }

  // initial_sync_behavior - computed: false, optional: false, required: true
  private _initialSyncBehavior?: string; 
  public get initialSyncBehavior() {
    return this.getStringAttribute('initial_sync_behavior');
  }
  public set initialSyncBehavior(value: string) {
    this._initialSyncBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSyncBehaviorInput() {
    return this._initialSyncBehavior;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema?: string; 
  public get keySchema() {
    return this.getStringAttribute('key_schema');
  }
  public set keySchema(value: string) {
    this._keySchema = value;
  }
  public resetKeySchema() {
    this._keySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema;
  }

  // sync_secret_metadata_as_tags - computed: true, optional: true, required: false
  private _syncSecretMetadataAsTags?: boolean | cdktf.IResolvable; 
  public get syncSecretMetadataAsTags() {
    return this.getBooleanAttribute('sync_secret_metadata_as_tags');
  }
  public set syncSecretMetadataAsTags(value: boolean | cdktf.IResolvable) {
    this._syncSecretMetadataAsTags = value;
  }
  public resetSyncSecretMetadataAsTags() {
    this._syncSecretMetadataAsTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSecretMetadataAsTagsInput() {
    return this._syncSecretMetadataAsTags;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new SecretSyncAwsSecretsManagerSyncOptionsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SecretSyncAwsSecretsManagerSyncOptionsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager}
*/
export class SecretSyncAwsSecretsManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_sync_aws_secrets_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretSyncAwsSecretsManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretSyncAwsSecretsManager to import
  * @param importFromId The id of the existing SecretSyncAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretSyncAwsSecretsManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_aws_secrets_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretSyncAwsSecretsManagerConfig
  */
  public constructor(scope: Construct, id: string, config: SecretSyncAwsSecretsManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_sync_aws_secrets_manager',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSyncEnabled = config.autoSyncEnabled;
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._environment = config.environment;
    this._name = config.name;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
    this._syncOptions.internalValue = config.syncOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sync_enabled - computed: true, optional: true, required: false
  private _autoSyncEnabled?: boolean | cdktf.IResolvable; 
  public get autoSyncEnabled() {
    return this.getBooleanAttribute('auto_sync_enabled');
  }
  public set autoSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._autoSyncEnabled = value;
  }
  public resetAutoSyncEnabled() {
    this._autoSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncEnabledInput() {
    return this._autoSyncEnabled;
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

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new SecretSyncAwsSecretsManagerDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: SecretSyncAwsSecretsManagerDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
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

  // sync_options - computed: false, optional: false, required: true
  private _syncOptions = new SecretSyncAwsSecretsManagerSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: SecretSyncAwsSecretsManagerSyncOptions) {
    this._syncOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: secretSyncAwsSecretsManagerDestinationConfigToTerraform(this._destinationConfig.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      sync_options: secretSyncAwsSecretsManagerSyncOptionsToTerraform(this._syncOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
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
      destination_config: {
        value: secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncAwsSecretsManagerDestinationConfig",
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
      sync_options: {
        value: secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncAwsSecretsManagerSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
