import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubIssueLabelsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels#id DataGithubIssueLabels#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels#repository DataGithubIssueLabels#repository}
    */
    readonly repository: string;
}
export interface DataGithubIssueLabelsLabels {
}
export declare function dataGithubIssueLabelsLabelsToTerraform(struct?: DataGithubIssueLabelsLabels): any;
export declare function dataGithubIssueLabelsLabelsToHclTerraform(struct?: DataGithubIssueLabelsLabels): any;
export declare class DataGithubIssueLabelsLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubIssueLabelsLabels | undefined;
    set internalValue(value: DataGithubIssueLabelsLabels | undefined);
    get color(): any;
    get description(): any;
    get name(): any;
    get url(): any;
}
export declare class DataGithubIssueLabelsLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubIssueLabelsLabelsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels github_issue_labels}
*/
export declare class DataGithubIssueLabels extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_issue_labels";
    /**
    * Generates CDKTF code for importing a DataGithubIssueLabels resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubIssueLabels to import
    * @param importFromId The id of the existing DataGithubIssueLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubIssueLabels to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels github_issue_labels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubIssueLabelsConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubIssueLabelsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _labels;
    get labels(): DataGithubIssueLabelsLabelsList;
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
