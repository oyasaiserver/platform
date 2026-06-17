// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationDatabricksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Databricks host URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#databricks_host IntegrationDatabricks#databricks_host}
  */
  readonly databricksHost: string;
  /**
  * The Databricks secret scope. Example: your-secret-scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#databricks_secret_scope IntegrationDatabricks#databricks_secret_scope}
  */
  readonly databricksSecretScope: string;
  /**
  * The Databricks access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#databricks_token IntegrationDatabricks#databricks_token}
  */
  readonly databricksToken: string;
  /**
  * The slug of the environment to sync to Databricks (prod, dev, staging, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#environment IntegrationDatabricks#environment}
  */
  readonly environment: string;
  /**
  * The ID of your Infisical project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#project_id IntegrationDatabricks#project_id}
  */
  readonly projectId: string;
  /**
  * The secret path in Infisical to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#secret_path IntegrationDatabricks#secret_path}
  */
  readonly secretPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks infisical_integration_databricks}
*/
export class IntegrationDatabricks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_integration_databricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationDatabricks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationDatabricks to import
  * @param importFromId The id of the existing IntegrationDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationDatabricks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_databricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/integration_databricks infisical_integration_databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationDatabricksConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_integration_databricks',
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
    this._databricksHost = config.databricksHost;
    this._databricksSecretScope = config.databricksSecretScope;
    this._databricksToken = config.databricksToken;
    this._environment = config.environment;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databricks_host - computed: false, optional: false, required: true
  private _databricksHost?: string; 
  public get databricksHost() {
    return this.getStringAttribute('databricks_host');
  }
  public set databricksHost(value: string) {
    this._databricksHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksHostInput() {
    return this._databricksHost;
  }

  // databricks_secret_scope - computed: false, optional: false, required: true
  private _databricksSecretScope?: string; 
  public get databricksSecretScope() {
    return this.getStringAttribute('databricks_secret_scope');
  }
  public set databricksSecretScope(value: string) {
    this._databricksSecretScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksSecretScopeInput() {
    return this._databricksSecretScope;
  }

  // databricks_token - computed: false, optional: false, required: true
  private _databricksToken?: string; 
  public get databricksToken() {
    return this.getStringAttribute('databricks_token');
  }
  public set databricksToken(value: string) {
    this._databricksToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksTokenInput() {
    return this._databricksToken;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      databricks_host: cdktf.stringToTerraform(this._databricksHost),
      databricks_secret_scope: cdktf.stringToTerraform(this._databricksSecretScope),
      databricks_token: cdktf.stringToTerraform(this._databricksToken),
      environment: cdktf.stringToTerraform(this._environment),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      databricks_host: {
        value: cdktf.stringToHclTerraform(this._databricksHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_secret_scope: {
        value: cdktf.stringToHclTerraform(this._databricksSecretScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_token: {
        value: cdktf.stringToHclTerraform(this._databricksToken),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
