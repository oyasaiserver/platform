// https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfisicalSecretFoldersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment from where folder should be fetched from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders#environment_slug DataInfisicalSecretFolders#environment_slug}
  */
  readonly environmentSlug: string;
  /**
  * The secret path from where folders should be fetched from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders#folder_path DataInfisicalSecretFolders#folder_path}
  */
  readonly folderPath: string;
  /**
  * The ID of the project where the folder resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders#project_id DataInfisicalSecretFolders#project_id}
  */
  readonly projectId: string;
}
export interface DataInfisicalSecretFoldersFolders {
}

export function dataInfisicalSecretFoldersFoldersToTerraform(struct?: DataInfisicalSecretFoldersFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretFoldersFoldersToHclTerraform(struct?: DataInfisicalSecretFoldersFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretFoldersFoldersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInfisicalSecretFoldersFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretFoldersFolders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataInfisicalSecretFoldersFoldersList extends cdktf.ComplexList {

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
  public get(index: number): DataInfisicalSecretFoldersFoldersOutputReference {
    return new DataInfisicalSecretFoldersFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders infisical_secret_folders}
*/
export class DataInfisicalSecretFolders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_folders";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfisicalSecretFolders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfisicalSecretFolders to import
  * @param importFromId The id of the existing DataInfisicalSecretFolders that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfisicalSecretFolders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_folders", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secret_folders infisical_secret_folders} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfisicalSecretFoldersConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfisicalSecretFoldersConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_folders',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.35'
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

  // folders - computed: true, optional: false, required: false
  private _folders = new DataInfisicalSecretFoldersFoldersList(this, "folders", false);
  public get folders() {
    return this._folders;
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
