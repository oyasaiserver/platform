// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationCircleciConfig extends cdktf.TerraformMetaArguments {
  /**
  * The organization slug of your CircleCI organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#circleci_org_slug IntegrationCircleci#circleci_org_slug}
  */
  readonly circleciOrgSlug: string;
  /**
  * The project ID of your CircleCI project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#circleci_project_id IntegrationCircleci#circleci_project_id}
  */
  readonly circleciProjectId: string;
  /**
  * Your personal CircleCI token to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#circleci_token IntegrationCircleci#circleci_token}
  */
  readonly circleciToken: string;
  /**
  * The slug of the environment to sync to CircleCI (prod, dev, staging, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#environment IntegrationCircleci#environment}
  */
  readonly environment: string;
  /**
  * The ID of your Infisical project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#project_id IntegrationCircleci#project_id}
  */
  readonly projectId: string;
  /**
  * The secret path in Infisical to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#secret_path IntegrationCircleci#secret_path}
  */
  readonly secretPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci infisical_integration_circleci}
*/
export class IntegrationCircleci extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_integration_circleci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationCircleci resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationCircleci to import
  * @param importFromId The id of the existing IntegrationCircleci that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationCircleci to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_circleci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/integration_circleci infisical_integration_circleci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationCircleciConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationCircleciConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_integration_circleci',
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
    this._circleciOrgSlug = config.circleciOrgSlug;
    this._circleciProjectId = config.circleciProjectId;
    this._circleciToken = config.circleciToken;
    this._environment = config.environment;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circleci_org_slug - computed: false, optional: false, required: true
  private _circleciOrgSlug?: string; 
  public get circleciOrgSlug() {
    return this.getStringAttribute('circleci_org_slug');
  }
  public set circleciOrgSlug(value: string) {
    this._circleciOrgSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circleciOrgSlugInput() {
    return this._circleciOrgSlug;
  }

  // circleci_project_id - computed: false, optional: false, required: true
  private _circleciProjectId?: string; 
  public get circleciProjectId() {
    return this.getStringAttribute('circleci_project_id');
  }
  public set circleciProjectId(value: string) {
    this._circleciProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circleciProjectIdInput() {
    return this._circleciProjectId;
  }

  // circleci_token - computed: false, optional: false, required: true
  private _circleciToken?: string; 
  public get circleciToken() {
    return this.getStringAttribute('circleci_token');
  }
  public set circleciToken(value: string) {
    this._circleciToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circleciTokenInput() {
    return this._circleciToken;
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
      circleci_org_slug: cdktf.stringToTerraform(this._circleciOrgSlug),
      circleci_project_id: cdktf.stringToTerraform(this._circleciProjectId),
      circleci_token: cdktf.stringToTerraform(this._circleciToken),
      environment: cdktf.stringToTerraform(this._environment),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circleci_org_slug: {
        value: cdktf.stringToHclTerraform(this._circleciOrgSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circleci_project_id: {
        value: cdktf.stringToHclTerraform(this._circleciProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circleci_token: {
        value: cdktf.stringToHclTerraform(this._circleciToken),
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
