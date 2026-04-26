import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IssueLabelsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#id IssueLabels#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#repository IssueLabels#repository}
    */
    readonly repository: string;
    /**
    * label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#label IssueLabels#label}
    */
    readonly label?: IssueLabelsLabel[] | cdktf.IResolvable;
}
export interface IssueLabelsLabel {
    /**
    * A 6 character hex code, without the leading '#', identifying the color of the label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#color IssueLabels#color}
    */
    readonly color: string;
    /**
    * A short description of the label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#description IssueLabels#description}
    */
    readonly description?: string;
    /**
    * The name of the label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#name IssueLabels#name}
    */
    readonly name: string;
}
export declare function issueLabelsLabelToTerraform(struct?: IssueLabelsLabel | cdktf.IResolvable): any;
export declare function issueLabelsLabelToHclTerraform(struct?: IssueLabelsLabel | cdktf.IResolvable): any;
export declare class IssueLabelsLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IssueLabelsLabel | cdktf.IResolvable | undefined;
    set internalValue(value: IssueLabelsLabel | cdktf.IResolvable | undefined);
    private _color?;
    get color(): string;
    set color(value: string);
    get colorInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get url(): any;
}
export declare class IssueLabelsLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IssueLabelsLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IssueLabelsLabelOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels github_issue_labels}
*/
export declare class IssueLabels extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_issue_labels";
    /**
    * Generates CDKTF code for importing a IssueLabels resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IssueLabels to import
    * @param importFromId The id of the existing IssueLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IssueLabels to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue_labels github_issue_labels} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IssueLabelsConfig
    */
    constructor(scope: Construct, id: string, config: IssueLabelsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _label;
    get label(): IssueLabelsLabelList;
    putLabel(value: IssueLabelsLabel[] | cdktf.IResolvable): void;
    resetLabel(): void;
    get labelInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
