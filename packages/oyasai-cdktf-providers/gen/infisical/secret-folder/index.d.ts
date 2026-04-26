import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretFolderConfig extends cdktf.TerraformMetaArguments {
    /**
    * The environment slug of the folder to modify/create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#environment_slug SecretFolder#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The path where the folder should be created/updated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#folder_path SecretFolder#folder_path}
    */
    readonly folderPath: string;
    /**
    * Whether to force delete the folder even if it contains resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#force_delete SecretFolder#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * The name for the folder
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#name SecretFolder#name}
    */
    readonly name: string;
    /**
    * The Infisical project ID (Required for Machine Identity auth, and service tokens with multiple scopes)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#project_id SecretFolder#project_id}
    */
    readonly projectId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder infisical_secret_folder}
*/
export declare class SecretFolder extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_folder";
    /**
    * Generates CDKTF code for importing a SecretFolder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretFolder to import
    * @param importFromId The id of the existing SecretFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretFolder to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder infisical_secret_folder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretFolderConfig
    */
    constructor(scope: Construct, id: string, config: SecretFolderConfig);
    get environmentId(): any;
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    private _folderPath?;
    get folderPath(): string;
    set folderPath(value: string);
    get folderPathInput(): string;
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get path(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
