import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectCardConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the project column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#column_id ProjectCard#column_id}
    */
    readonly columnId: string;
    /**
    * 'github_issue.issue_id'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#content_id ProjectCard#content_id}
    */
    readonly contentId?: number;
    /**
    * Must be either 'Issue' or 'PullRequest'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#content_type ProjectCard#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#id ProjectCard#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The note contents of the card. Markdown supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#note ProjectCard#note}
    */
    readonly note?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card github_project_card}
*/
export declare class ProjectCard extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_project_card";
    /**
    * Generates CDKTF code for importing a ProjectCard resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectCard to import
    * @param importFromId The id of the existing ProjectCard that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectCard to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card github_project_card} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectCardConfig
    */
    constructor(scope: Construct, id: string, config: ProjectCardConfig);
    get cardId(): any;
    private _columnId?;
    get columnId(): string;
    set columnId(value: string);
    get columnIdInput(): string;
    private _contentId?;
    get contentId(): number;
    set contentId(value: number);
    resetContentId(): void;
    get contentIdInput(): number;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _note?;
    get note(): string;
    set note(value: string);
    resetNote(): void;
    get noteInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
