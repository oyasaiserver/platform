import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IssueLabelConfig extends cdktf.TerraformMetaArguments {
    /**
    * A 6 character hex code, without the leading '#', identifying the color of the label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#color IssueLabel#color}
    */
    readonly color: string;
    /**
    * A short description of the label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#description IssueLabel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#etag IssueLabel#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#id IssueLabel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#name IssueLabel#name}
    */
    readonly name: string;
    /**
    * The GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#repository IssueLabel#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label github_issue_label}
*/
export declare class IssueLabel extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_issue_label";
    /**
    * Generates CDKTF code for importing a IssueLabel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IssueLabel to import
    * @param importFromId The id of the existing IssueLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IssueLabel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_label github_issue_label} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IssueLabelConfig
    */
    constructor(scope: Construct, id: string, config: IssueLabelConfig);
    private _color?;
    get color(): string;
    set color(value: string);
    get colorInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
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
