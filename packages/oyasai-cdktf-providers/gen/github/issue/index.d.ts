import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IssueConfig extends cdktf.TerraformMetaArguments {
    /**
    * List of Logins to assign to the issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#assignees Issue#assignees}
    */
    readonly assignees?: string[];
    /**
    * Body of the issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#body Issue#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#id Issue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * List of labels to attach to the issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#labels Issue#labels}
    */
    readonly labels?: string[];
    /**
    * Milestone number to assign to the issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#milestone_number Issue#milestone_number}
    */
    readonly milestoneNumber?: number;
    /**
    * The GitHub repository name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#repository Issue#repository}
    */
    readonly repository: string;
    /**
    * Title of the issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#title Issue#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue github_issue}
*/
export declare class Issue extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_issue";
    /**
    * Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Issue to import
    * @param importFromId The id of the existing Issue that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Issue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue github_issue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IssueConfig
    */
    constructor(scope: Construct, id: string, config: IssueConfig);
    private _assignees?;
    get assignees(): string[];
    set assignees(value: string[]);
    resetAssignees(): void;
    get assigneesInput(): string[];
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get issueId(): any;
    private _labels?;
    get labels(): string[];
    set labels(value: string[]);
    resetLabels(): void;
    get labelsInput(): string[];
    private _milestoneNumber?;
    get milestoneNumber(): number;
    set milestoneNumber(value: number);
    resetMilestoneNumber(): void;
    get milestoneNumberInput(): number;
    get number(): any;
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
