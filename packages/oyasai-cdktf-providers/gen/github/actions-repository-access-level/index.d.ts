import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsRepositoryAccessLevelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Where the actions or reusable workflows of the repository may be used. Possible values are 'none', 'user', 'organization', or 'enterprise'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level#access_level ActionsRepositoryAccessLevel#access_level}
    */
    readonly accessLevel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level#id ActionsRepositoryAccessLevel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level#repository ActionsRepositoryAccessLevel#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level github_actions_repository_access_level}
*/
export declare class ActionsRepositoryAccessLevel extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_repository_access_level";
    /**
    * Generates CDKTF code for importing a ActionsRepositoryAccessLevel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryAccessLevel to import
    * @param importFromId The id of the existing ActionsRepositoryAccessLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryAccessLevel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level github_actions_repository_access_level} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryAccessLevelConfig
    */
    constructor(scope: Construct, id: string, config: ActionsRepositoryAccessLevelConfig);
    private _accessLevel?;
    get accessLevel(): string;
    set accessLevel(value: string);
    get accessLevelInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
