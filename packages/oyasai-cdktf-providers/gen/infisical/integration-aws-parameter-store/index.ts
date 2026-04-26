// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsParameterStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS access key ID. Used to authenticate with AWS Parameter Store. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#access_key_id IntegrationAwsParameterStore#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The ARN of the role to assume when syncing secrets to AWS Parameter Store. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#assume_role_arn IntegrationAwsParameterStore#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * The AWS region to sync secrets to. (us-east-1, us-east-2, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#aws_region IntegrationAwsParameterStore#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The slug of the environment to sync to AWS Parameter Store (prod, dev, staging, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#environment IntegrationAwsParameterStore#environment}
  */
  readonly environment: string;
  /**
  * Integration options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#options IntegrationAwsParameterStore#options}
  */
  readonly options?: IntegrationAwsParameterStoreOptions;
  /**
  * The path in AWS Parameter Store to sync secrets to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#parameter_store_path IntegrationAwsParameterStore#parameter_store_path}
  */
  readonly parameterStorePath: string;
  /**
  * The ID of your Infisical project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#project_id IntegrationAwsParameterStore#project_id}
  */
  readonly projectId: string;
  /**
  * The AWS secret access key. Used to authenticate with AWS Parameter Store. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#secret_access_key IntegrationAwsParameterStore#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * The secret path in Infisical to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#secret_path IntegrationAwsParameterStore#secret_path}
  */
  readonly secretPath: string;
}
export interface IntegrationAwsParameterStoreOptionsAwsTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#key IntegrationAwsParameterStore#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#value IntegrationAwsParameterStore#value}
  */
  readonly value?: string;
}

export function integrationAwsParameterStoreOptionsAwsTagsToTerraform(struct?: IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function integrationAwsParameterStoreOptionsAwsTagsToHclTerraform(struct?: IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable): any {
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

export class IntegrationAwsParameterStoreOptionsAwsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationAwsParameterStoreOptionsAwsTags | cdktf.IResolvable | undefined) {
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

export class IntegrationAwsParameterStoreOptionsAwsTagsList extends cdktf.ComplexList {
  public internalValue? : IntegrationAwsParameterStoreOptionsAwsTags[] | cdktf.IResolvable

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
  public get(index: number): IntegrationAwsParameterStoreOptionsAwsTagsOutputReference {
    return new IntegrationAwsParameterStoreOptionsAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsParameterStoreOptions {
  /**
  * Tags to attach to the AWS parameter store secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#aws_tags IntegrationAwsParameterStore#aws_tags}
  */
  readonly awsTags?: IntegrationAwsParameterStoreOptionsAwsTags[] | cdktf.IResolvable;
  /**
  * Whether to disable deletion of existing secrets in AWS Parameter Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#should_disable_delete IntegrationAwsParameterStore#should_disable_delete}
  */
  readonly shouldDisableDelete?: boolean | cdktf.IResolvable;
}

export function integrationAwsParameterStoreOptionsToTerraform(struct?: IntegrationAwsParameterStoreOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_tags: cdktf.listMapper(integrationAwsParameterStoreOptionsAwsTagsToTerraform, false)(struct!.awsTags),
    should_disable_delete: cdktf.booleanToTerraform(struct!.shouldDisableDelete),
  }
}


export function integrationAwsParameterStoreOptionsToHclTerraform(struct?: IntegrationAwsParameterStoreOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_tags: {
      value: cdktf.listMapperHcl(integrationAwsParameterStoreOptionsAwsTagsToHclTerraform, false)(struct!.awsTags),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationAwsParameterStoreOptionsAwsTagsList",
    },
    should_disable_delete: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDisableDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsParameterStoreOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsParameterStoreOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTags = this._awsTags?.internalValue;
    }
    if (this._shouldDisableDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDisableDelete = this._shouldDisableDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsParameterStoreOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsTags.internalValue = undefined;
      this._shouldDisableDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsTags.internalValue = value.awsTags;
      this._shouldDisableDelete = value.shouldDisableDelete;
    }
  }

  // aws_tags - computed: true, optional: true, required: false
  private _awsTags = new IntegrationAwsParameterStoreOptionsAwsTagsList(this, "aws_tags", true);
  public get awsTags() {
    return this._awsTags;
  }
  public putAwsTags(value: IntegrationAwsParameterStoreOptionsAwsTags[] | cdktf.IResolvable) {
    this._awsTags.internalValue = value;
  }
  public resetAwsTags() {
    this._awsTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagsInput() {
    return this._awsTags.internalValue;
  }

  // should_disable_delete - computed: true, optional: true, required: false
  private _shouldDisableDelete?: boolean | cdktf.IResolvable; 
  public get shouldDisableDelete() {
    return this.getBooleanAttribute('should_disable_delete');
  }
  public set shouldDisableDelete(value: boolean | cdktf.IResolvable) {
    this._shouldDisableDelete = value;
  }
  public resetShouldDisableDelete() {
    this._shouldDisableDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDisableDeleteInput() {
    return this._shouldDisableDelete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store}
*/
export class IntegrationAwsParameterStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_integration_aws_parameter_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsParameterStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsParameterStore to import
  * @param importFromId The id of the existing IntegrationAwsParameterStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsParameterStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_aws_parameter_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsParameterStoreConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsParameterStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_integration_aws_parameter_store',
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
    this._accessKeyId = config.accessKeyId;
    this._assumeRoleArn = config.assumeRoleArn;
    this._awsRegion = config.awsRegion;
    this._environment = config.environment;
    this._options.internalValue = config.options;
    this._parameterStorePath = config.parameterStorePath;
    this._projectId = config.projectId;
    this._secretAccessKey = config.secretAccessKey;
    this._secretPath = config.secretPath;
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

  // options - computed: true, optional: true, required: false
  private _options = new IntegrationAwsParameterStoreOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: IntegrationAwsParameterStoreOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // parameter_store_path - computed: false, optional: false, required: true
  private _parameterStorePath?: string; 
  public get parameterStorePath() {
    return this.getStringAttribute('parameter_store_path');
  }
  public set parameterStorePath(value: string) {
    this._parameterStorePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterStorePathInput() {
    return this._parameterStorePath;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      environment: cdktf.stringToTerraform(this._environment),
      options: integrationAwsParameterStoreOptionsToTerraform(this._options.internalValue),
      parameter_store_path: cdktf.stringToTerraform(this._parameterStorePath),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
      secret_path: cdktf.stringToTerraform(this._secretPath),
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
      options: {
        value: integrationAwsParameterStoreOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsParameterStoreOptions",
      },
      parameter_store_path: {
        value: cdktf.stringToHclTerraform(this._parameterStorePath),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
