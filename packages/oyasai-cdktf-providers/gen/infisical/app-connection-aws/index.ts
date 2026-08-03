// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConnectionAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credentials for the AWS App Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#credentials AppConnectionAws#credentials}
  */
  readonly credentials: AppConnectionAwsCredentials;
  /**
  * An optional description for the AWS App Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#description AppConnectionAws#description}
  */
  readonly description?: string;
  /**
  * The method used to authenticate with AWS. Possible values are: assume-role, access-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#method AppConnectionAws#method}
  */
  readonly method: string;
  /**
  * The name of the AWS App Connection to create. Must be slug-friendly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#name AppConnectionAws#name}
  */
  readonly name: string;
  /**
  * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#project_id AppConnectionAws#project_id}
  */
  readonly projectId?: string;
}
export interface AppConnectionAwsCredentials {
  /**
  * The AWS Access Key ID used to authenticate requests to AWS services. Required for access-key access method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/aws#access-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#access_key_id AppConnectionAws#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to assume for performing operations. Infisical will assume this role using AWS Security Token Service (STS). Required for assume-role access method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/aws#assume-role-recommended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#role_arn AppConnectionAws#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The AWS Secret Access Key associated with the Access Key ID to authenticate requests to AWS services. Required for access-key access method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/aws#access-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#secret_access_key AppConnectionAws#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * An optional custom endpoint URL for the AWS STS API (must start with https://). Only applicable to the assume-role method; when omitted, AWS's default STS endpoint resolution is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#sts_endpoint AppConnectionAws#sts_endpoint}
  */
  readonly stsEndpoint?: string;
}

export function appConnectionAwsCredentialsToTerraform(struct?: AppConnectionAwsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    sts_endpoint: cdktf.stringToTerraform(struct!.stsEndpoint),
  }
}


export function appConnectionAwsCredentialsToHclTerraform(struct?: AppConnectionAwsCredentials | cdktf.IResolvable): any {
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
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.stsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConnectionAwsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppConnectionAwsCredentials | cdktf.IResolvable | undefined {
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
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._stsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsEndpoint = this._stsEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConnectionAwsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._roleArn = undefined;
      this._secretAccessKey = undefined;
      this._stsEndpoint = undefined;
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
      this._secretAccessKey = value.secretAccessKey;
      this._stsEndpoint = value.stsEndpoint;
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

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this.getStringAttribute('sts_endpoint');
  }
  public set stsEndpoint(value: string) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws infisical_app_connection_aws}
*/
export class AppConnectionAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_app_connection_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConnectionAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConnectionAws to import
  * @param importFromId The id of the existing AppConnectionAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConnectionAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/app_connection_aws infisical_app_connection_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConnectionAwsConfig
  */
  public constructor(scope: Construct, id: string, config: AppConnectionAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_app_connection_aws',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials.internalValue = config.credentials;
    this._description = config.description;
    this._method = config.method;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: false, required: true
  private _credentials = new AppConnectionAwsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AppConnectionAwsCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: appConnectionAwsCredentialsToTerraform(this._credentials.internalValue),
      description: cdktf.stringToTerraform(this._description),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: appConnectionAwsCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppConnectionAwsCredentials",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
