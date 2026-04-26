import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The body of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project#body RepositoryProject#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project#etag RepositoryProject#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project#id RepositoryProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project#name RepositoryProject#name}
    */
    readonly name: string;
    /**
    * The repository of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project#repository RepositoryProject#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project github_repository_project}
*/
export declare class RepositoryProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_project";
    /**
    * Generates CDKTF code for importing a RepositoryProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryProject to import
    * @param importFromId The id of the existing RepositoryProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_project github_repository_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryProjectConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryProjectConfig);
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get url(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
