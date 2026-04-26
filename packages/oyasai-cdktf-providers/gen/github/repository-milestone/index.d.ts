import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryMilestoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * A description of the milestone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#description RepositoryMilestone#description}
    */
    readonly description?: string;
    /**
    * The milestone due date. In 'yyyy-mm-dd' format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#due_date RepositoryMilestone#due_date}
    */
    readonly dueDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#id RepositoryMilestone#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The owner of the GitHub Repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#owner RepositoryMilestone#owner}
    */
    readonly owner: string;
    /**
    * The name of the GitHub Repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#repository RepositoryMilestone#repository}
    */
    readonly repository: string;
    /**
    * The state of the milestone. Either 'open' or 'closed'. Default: 'open'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#state RepositoryMilestone#state}
    */
    readonly state?: string;
    /**
    * The title of the milestone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#title RepositoryMilestone#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone github_repository_milestone}
*/
export declare class RepositoryMilestone extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_milestone";
    /**
    * Generates CDKTF code for importing a RepositoryMilestone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryMilestone to import
    * @param importFromId The id of the existing RepositoryMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryMilestone to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone github_repository_milestone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryMilestoneConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryMilestoneConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _dueDate?;
    get dueDate(): string;
    set dueDate(value: string);
    resetDueDate(): void;
    get dueDateInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get number(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
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
