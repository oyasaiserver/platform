// https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment slug of the secret import to modify/create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#environment_slug SecretImport#environment_slug}
  */
  readonly environmentSlug: string;
  /**
  * The path where the secret should be imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#folder_path SecretImport#folder_path}
  */
  readonly folderPath: string;
  /**
  * The environment slug of the secret import to modify/create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#import_environment_slug SecretImport#import_environment_slug}
  */
  readonly importEnvironmentSlug: string;
  /**
  * The path where the secret should be imported from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#import_folder_path SecretImport#import_folder_path}
  */
  readonly importFolderPath: string;
  /**
  * The is_replication of the secret import to modify/create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#is_replication SecretImport#is_replication}
  */
  readonly isReplication: boolean | cdktf.IResolvable;
  /**
  * The Infisical project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#project_id SecretImport#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import infisical_secret_import}
*/
export class SecretImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretImport to import
  * @param importFromId The id of the existing SecretImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_import infisical_secret_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretImportConfig
  */
  public constructor(scope: Construct, id: string, config: SecretImportConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_import',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentSlug = config.environmentSlug;
    this._folderPath = config.folderPath;
    this._importEnvironmentSlug = config.importEnvironmentSlug;
    this._importFolderPath = config.importFolderPath;
    this._isReplication = config.isReplication;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_slug - computed: false, optional: false, required: true
  private _environmentSlug?: string; 
  public get environmentSlug() {
    return this.getStringAttribute('environment_slug');
  }
  public set environmentSlug(value: string) {
    this._environmentSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugInput() {
    return this._environmentSlug;
  }

  // folder_path - computed: false, optional: false, required: true
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_environment_slug - computed: false, optional: false, required: true
  private _importEnvironmentSlug?: string; 
  public get importEnvironmentSlug() {
    return this.getStringAttribute('import_environment_slug');
  }
  public set importEnvironmentSlug(value: string) {
    this._importEnvironmentSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importEnvironmentSlugInput() {
    return this._importEnvironmentSlug;
  }

  // import_folder_path - computed: false, optional: false, required: true
  private _importFolderPath?: string; 
  public get importFolderPath() {
    return this.getStringAttribute('import_folder_path');
  }
  public set importFolderPath(value: string) {
    this._importFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importFolderPathInput() {
    return this._importFolderPath;
  }

  // is_replication - computed: false, optional: false, required: true
  private _isReplication?: boolean | cdktf.IResolvable; 
  public get isReplication() {
    return this.getBooleanAttribute('is_replication');
  }
  public set isReplication(value: boolean | cdktf.IResolvable) {
    this._isReplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplicationInput() {
    return this._isReplication;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_slug: cdktf.stringToTerraform(this._environmentSlug),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      import_environment_slug: cdktf.stringToTerraform(this._importEnvironmentSlug),
      import_folder_path: cdktf.stringToTerraform(this._importFolderPath),
      is_replication: cdktf.booleanToTerraform(this._isReplication),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_slug: {
        value: cdktf.stringToHclTerraform(this._environmentSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_path: {
        value: cdktf.stringToHclTerraform(this._folderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_environment_slug: {
        value: cdktf.stringToHclTerraform(this._importEnvironmentSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_folder_path: {
        value: cdktf.stringToHclTerraform(this._importFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_replication: {
        value: cdktf.booleanToHclTerraform(this._isReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
