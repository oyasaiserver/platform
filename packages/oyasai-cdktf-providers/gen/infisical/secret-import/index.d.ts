import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretImportConfig extends cdktf.TerraformMetaArguments {
    /**
    * The environment slug of the secret import to modify/create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#environment_slug SecretImport#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The path where the secret should be imported
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#folder_path SecretImport#folder_path}
    */
    readonly folderPath: string;
    /**
    * The environment slug of the secret import to modify/create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#import_environment_slug SecretImport#import_environment_slug}
    */
    readonly importEnvironmentSlug: string;
    /**
    * The path where the secret should be imported from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#import_folder_path SecretImport#import_folder_path}
    */
    readonly importFolderPath: string;
    /**
    * The is_replication of the secret import to modify/create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#is_replication SecretImport#is_replication}
    */
    readonly isReplication: boolean | cdktf.IResolvable;
    /**
    * The Infisical project ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#project_id SecretImport#project_id}
    */
    readonly projectId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import infisical_secret_import}
*/
export declare class SecretImport extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_import";
    /**
    * Generates CDKTF code for importing a SecretImport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretImport to import
    * @param importFromId The id of the existing SecretImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretImport to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import infisical_secret_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretImportConfig
    */
    constructor(scope: Construct, id: string, config: SecretImportConfig);
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    private _folderPath?;
    get folderPath(): string;
    set folderPath(value: string);
    get folderPathInput(): string;
    get id(): any;
    private _importEnvironmentSlug?;
    get importEnvironmentSlug(): string;
    set importEnvironmentSlug(value: string);
    get importEnvironmentSlugInput(): string;
    private _importFolderPath?;
    get importFolderPath(): string;
    set importFolderPath(value: string);
    get importFolderPathInput(): string;
    private _isReplication?;
    get isReplication(): boolean | cdktf.IResolvable;
    set isReplication(value: boolean | cdktf.IResolvable);
    get isReplicationInput(): any;
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
