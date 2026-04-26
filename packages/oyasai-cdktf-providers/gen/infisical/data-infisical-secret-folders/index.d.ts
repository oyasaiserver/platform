import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalSecretFoldersConfig extends cdktf.TerraformMetaArguments {
    /**
    * The environment from where folder should be fetched from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders#environment_slug DataInfisicalSecretFolders#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The secret path from where folders should be fetched from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders#folder_path DataInfisicalSecretFolders#folder_path}
    */
    readonly folderPath: string;
    /**
    * The ID of the project where the folder resides
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders#project_id DataInfisicalSecretFolders#project_id}
    */
    readonly projectId: string;
}
export interface DataInfisicalSecretFoldersFolders {
}
export declare function dataInfisicalSecretFoldersFoldersToTerraform(struct?: DataInfisicalSecretFoldersFolders): any;
export declare function dataInfisicalSecretFoldersFoldersToHclTerraform(struct?: DataInfisicalSecretFoldersFolders): any;
export declare class DataInfisicalSecretFoldersFoldersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataInfisicalSecretFoldersFolders | undefined;
    set internalValue(value: DataInfisicalSecretFoldersFolders | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataInfisicalSecretFoldersFoldersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataInfisicalSecretFoldersFoldersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders infisical_secret_folders}
*/
export declare class DataInfisicalSecretFolders extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_secret_folders";
    /**
    * Generates CDKTF code for importing a DataInfisicalSecretFolders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecretFolders to import
    * @param importFromId The id of the existing DataInfisicalSecretFolders that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecretFolders to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders infisical_secret_folders} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretFoldersConfig
    */
    constructor(scope: Construct, id: string, config: DataInfisicalSecretFoldersConfig);
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    private _folderPath?;
    get folderPath(): string;
    set folderPath(value: string);
    get folderPathInput(): string;
    private _folders;
    get folders(): DataInfisicalSecretFoldersFoldersList;
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
