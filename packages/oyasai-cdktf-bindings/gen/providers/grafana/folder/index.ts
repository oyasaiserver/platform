// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#id Folder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#org_id Folder#org_id}
  */
  readonly orgId?: string;
  /**
  * The uid of the parent folder. If set, the folder will be nested. If not set, the folder will be created in the root folder. Note: This requires the nestedFolders feature flag to be enabled on your Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#parent_folder_uid Folder#parent_folder_uid}
  */
  readonly parentFolderUid?: string;
  /**
  * Prevent deletion of the folder if it is not empty (contains dashboards or alert rules). This feature requires Grafana 10.2 or later. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#prevent_destroy_if_not_empty Folder#prevent_destroy_if_not_empty}
  */
  readonly preventDestroyIfNotEmpty?: boolean | cdktf.IResolvable;
  /**
  * The title of the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#title Folder#title}
  */
  readonly title: string;
  /**
  * Unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#uid Folder#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder grafana_folder}
*/
export class Folder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Folder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Folder to import
  * @param importFromId The id of the existing Folder that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Folder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/folder grafana_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderConfig
  */
  public constructor(scope: Construct, id: string, config: FolderConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_folder',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._orgId = config.orgId;
    this._parentFolderUid = config.parentFolderUid;
    this._preventDestroyIfNotEmpty = config.preventDestroyIfNotEmpty;
    this._title = config.title;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // parent_folder_uid - computed: false, optional: true, required: false
  private _parentFolderUid?: string; 
  public get parentFolderUid() {
    return this.getStringAttribute('parent_folder_uid');
  }
  public set parentFolderUid(value: string) {
    this._parentFolderUid = value;
  }
  public resetParentFolderUid() {
    this._parentFolderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderUidInput() {
    return this._parentFolderUid;
  }

  // prevent_destroy_if_not_empty - computed: false, optional: true, required: false
  private _preventDestroyIfNotEmpty?: boolean | cdktf.IResolvable; 
  public get preventDestroyIfNotEmpty() {
    return this.getBooleanAttribute('prevent_destroy_if_not_empty');
  }
  public set preventDestroyIfNotEmpty(value: boolean | cdktf.IResolvable) {
    this._preventDestroyIfNotEmpty = value;
  }
  public resetPreventDestroyIfNotEmpty() {
    this._preventDestroyIfNotEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDestroyIfNotEmptyInput() {
    return this._preventDestroyIfNotEmpty;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      parent_folder_uid: cdktf.stringToTerraform(this._parentFolderUid),
      prevent_destroy_if_not_empty: cdktf.booleanToTerraform(this._preventDestroyIfNotEmpty),
      title: cdktf.stringToTerraform(this._title),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_folder_uid: {
        value: cdktf.stringToHclTerraform(this._parentFolderUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_destroy_if_not_empty: {
        value: cdktf.booleanToHclTerraform(this._preventDestroyIfNotEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
