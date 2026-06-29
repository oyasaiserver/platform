// https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfisicalSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment from where secrets should be fetched from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets#env_slug DataInfisicalSecrets#env_slug}
  */
  readonly envSlug: string;
  /**
  * The path to the folder from where secrets should be fetched from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets#folder_path DataInfisicalSecrets#folder_path}
  */
  readonly folderPath: string;
  /**
  * The Infisical project ID (Required for Machine Identity auth, and service tokens with multiple scopes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets#workspace_id DataInfisicalSecrets#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataInfisicalSecretsSecrets {
}

export function dataInfisicalSecretsSecretsToTerraform(struct?: DataInfisicalSecretsSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfisicalSecretsSecretsToHclTerraform(struct?: DataInfisicalSecretsSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfisicalSecretsSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataInfisicalSecretsSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfisicalSecretsSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // secret_type - computed: true, optional: false, required: false
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataInfisicalSecretsSecretsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataInfisicalSecretsSecretsOutputReference {
    return new DataInfisicalSecretsSecretsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets infisical_secrets}
*/
export class DataInfisicalSecrets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secrets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfisicalSecrets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfisicalSecrets to import
  * @param importFromId The id of the existing DataInfisicalSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfisicalSecrets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secrets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/data-sources/secrets infisical_secrets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfisicalSecretsConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfisicalSecretsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secrets',
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
    this._envSlug = config.envSlug;
    this._folderPath = config.folderPath;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_slug - computed: false, optional: false, required: true
  private _envSlug?: string; 
  public get envSlug() {
    return this.getStringAttribute('env_slug');
  }
  public set envSlug(value: string) {
    this._envSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envSlugInput() {
    return this._envSlug;
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

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataInfisicalSecretsSecretsMap(this, "secrets");
  public get secrets() {
    return this._secrets;
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_slug: cdktf.stringToTerraform(this._envSlug),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_slug: {
        value: cdktf.stringToHclTerraform(this._envSlug),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
