import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryMilestoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone#id DataGithubRepositoryMilestone#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone#number DataGithubRepositoryMilestone#number}
    */
    readonly number: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone#owner DataGithubRepositoryMilestone#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone#repository DataGithubRepositoryMilestone#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone github_repository_milestone}
*/
export declare class DataGithubRepositoryMilestone extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_milestone";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryMilestone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryMilestone to import
    * @param importFromId The id of the existing DataGithubRepositoryMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryMilestone to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_milestone github_repository_milestone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryMilestoneConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryMilestoneConfig);
    get description(): any;
    get dueDate(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _number?;
    get number(): number;
    set number(value: number);
    get numberInput(): number;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get state(): any;
    get title(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
