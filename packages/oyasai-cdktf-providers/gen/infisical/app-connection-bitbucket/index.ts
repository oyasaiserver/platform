// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConnectionBitbucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credentials for the Bitbucket App Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#credentials AppConnectionBitbucket#credentials}
  */
  readonly credentials: AppConnectionBitbucketCredentials;
  /**
  * An optional description for the Bitbucket App Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#description AppConnectionBitbucket#description}
  */
  readonly description?: string;
  /**
  * The method used to authenticate with Bitbucket. Possible values are: api-token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#method AppConnectionBitbucket#method}
  */
  readonly method: string;
  /**
  * The name of the Bitbucket App Connection to create. Must be slug-friendly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#name AppConnectionBitbucket#name}
  */
  readonly name: string;
  /**
  * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#project_id AppConnectionBitbucket#project_id}
  */
  readonly projectId?: string;
}
export interface AppConnectionBitbucketCredentials {
  /**
  * The Bitbucket API token for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#api_token AppConnectionBitbucket#api_token}
  */
  readonly apiToken: string;
  /**
  * The email address associated with the Bitbucket API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#email AppConnectionBitbucket#email}
  */
  readonly email: string;
}

export function appConnectionBitbucketCredentialsToTerraform(struct?: AppConnectionBitbucketCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function appConnectionBitbucketCredentialsToHclTerraform(struct?: AppConnectionBitbucketCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConnectionBitbucketCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppConnectionBitbucketCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConnectionBitbucketCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._email = value.email;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket infisical_app_connection_bitbucket}
*/
export class AppConnectionBitbucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_app_connection_bitbucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConnectionBitbucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConnectionBitbucket to import
  * @param importFromId The id of the existing AppConnectionBitbucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConnectionBitbucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_bitbucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/app_connection_bitbucket infisical_app_connection_bitbucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConnectionBitbucketConfig
  */
  public constructor(scope: Construct, id: string, config: AppConnectionBitbucketConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_app_connection_bitbucket',
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
  private _credentials = new AppConnectionBitbucketCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AppConnectionBitbucketCredentials) {
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
      credentials: appConnectionBitbucketCredentialsToTerraform(this._credentials.internalValue),
      description: cdktf.stringToTerraform(this._description),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: appConnectionBitbucketCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppConnectionBitbucketCredentials",
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
