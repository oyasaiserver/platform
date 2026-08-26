// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConnectionDatabricksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credentials for the Databricks App Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#credentials AppConnectionDatabricks#credentials}
  */
  readonly credentials: AppConnectionDatabricksCredentials;
  /**
  * An optional description for the Databricks App Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#description AppConnectionDatabricks#description}
  */
  readonly description?: string;
  /**
  * The method used to authenticate with Databricks. Possible values are: service-principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#method AppConnectionDatabricks#method}
  */
  readonly method: string;
  /**
  * The name of the Databricks App Connection to create. Must be slug-friendly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#name AppConnectionDatabricks#name}
  */
  readonly name: string;
  /**
  * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#project_id AppConnectionDatabricks#project_id}
  */
  readonly projectId?: string;
}
export interface AppConnectionDatabricksCredentials {
  /**
  * The client ID of the Databricks service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#client_id AppConnectionDatabricks#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of the Databricks service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#client_secret AppConnectionDatabricks#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The workspace URL of the Databricks instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#workspace_url AppConnectionDatabricks#workspace_url}
  */
  readonly workspaceUrl: string;
}

export function appConnectionDatabricksCredentialsToTerraform(struct?: AppConnectionDatabricksCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    workspace_url: cdktf.stringToTerraform(struct!.workspaceUrl),
  }
}


export function appConnectionDatabricksCredentialsToHclTerraform(struct?: AppConnectionDatabricksCredentials | cdktf.IResolvable): any {
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
    workspace_url: {
      value: cdktf.stringToHclTerraform(struct!.workspaceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConnectionDatabricksCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppConnectionDatabricksCredentials | cdktf.IResolvable | undefined {
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
    if (this._workspaceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUrl = this._workspaceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConnectionDatabricksCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._workspaceUrl = undefined;
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
      this._workspaceUrl = value.workspaceUrl;
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

  // workspace_url - computed: false, optional: false, required: true
  private _workspaceUrl?: string; 
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }
  public set workspaceUrl(value: string) {
    this._workspaceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUrlInput() {
    return this._workspaceUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks infisical_app_connection_databricks}
*/
export class AppConnectionDatabricks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_app_connection_databricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConnectionDatabricks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConnectionDatabricks to import
  * @param importFromId The id of the existing AppConnectionDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConnectionDatabricks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_databricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/app_connection_databricks infisical_app_connection_databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConnectionDatabricksConfig
  */
  public constructor(scope: Construct, id: string, config: AppConnectionDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_app_connection_databricks',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
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
  private _credentials = new AppConnectionDatabricksCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AppConnectionDatabricksCredentials) {
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
      credentials: appConnectionDatabricksCredentialsToTerraform(this._credentials.internalValue),
      description: cdktf.stringToTerraform(this._description),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: appConnectionDatabricksCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppConnectionDatabricksCredentials",
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
