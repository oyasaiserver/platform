import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalSecretsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The environment from where secrets should be fetched from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets#env_slug DataInfisicalSecrets#env_slug}
    */
    readonly envSlug: string;
    /**
    * The path to the folder from where secrets should be fetched from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets#folder_path DataInfisicalSecrets#folder_path}
    */
    readonly folderPath: string;
    /**
    * The Infisical project ID (Required for Machine Identity auth, and service tokens with multiple scopes)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets#workspace_id DataInfisicalSecrets#workspace_id}
    */
    readonly workspaceId?: string;
}
export interface DataInfisicalSecretsSecrets {
}
export declare function dataInfisicalSecretsSecretsToTerraform(struct?: DataInfisicalSecretsSecrets): any;
export declare function dataInfisicalSecretsSecretsToHclTerraform(struct?: DataInfisicalSecretsSecrets): any;
export declare class DataInfisicalSecretsSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataInfisicalSecretsSecrets | undefined;
    set internalValue(value: DataInfisicalSecretsSecrets | undefined);
    get comment(): any;
    get secretType(): any;
    get value(): any;
}
export declare class DataInfisicalSecretsSecretsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): DataInfisicalSecretsSecretsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets infisical_secrets}
*/
export declare class DataInfisicalSecrets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_secrets";
    /**
    * Generates CDKTF code for importing a DataInfisicalSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecrets to import
    * @param importFromId The id of the existing DataInfisicalSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecrets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets infisical_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretsConfig
    */
    constructor(scope: Construct, id: string, config: DataInfisicalSecretsConfig);
    private _envSlug?;
    get envSlug(): string;
    set envSlug(value: string);
    get envSlugInput(): string;
    private _folderPath?;
    get folderPath(): string;
    set folderPath(value: string);
    get folderPathInput(): string;
    private _secrets;
    get secrets(): DataInfisicalSecretsSecretsMap;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    resetWorkspaceId(): void;
    get workspaceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
