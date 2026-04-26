import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryDeployKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#id RepositoryDeployKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A SSH key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#key RepositoryDeployKey#key}
    */
    readonly key: string;
    /**
    * A boolean qualifying the key to be either read only or read/write.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#read_only RepositoryDeployKey#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Name of the GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#repository RepositoryDeployKey#repository}
    */
    readonly repository: string;
    /**
    * A title.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#title RepositoryDeployKey#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key github_repository_deploy_key}
*/
export declare class RepositoryDeployKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_deploy_key";
    /**
    * Generates CDKTF code for importing a RepositoryDeployKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryDeployKey to import
    * @param importFromId The id of the existing RepositoryDeployKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryDeployKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key github_repository_deploy_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryDeployKeyConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryDeployKeyConfig);
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
