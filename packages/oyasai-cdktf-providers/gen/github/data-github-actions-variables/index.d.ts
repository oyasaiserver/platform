import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubActionsVariablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_variables#full_name DataGithubActionsVariables#full_name}
    */
    readonly fullName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_variables#id DataGithubActionsVariables#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_variables#name DataGithubActionsVariables#name}
    */
    readonly name?: string;
}
export interface DataGithubActionsVariablesVariables {
}
export declare function dataGithubActionsVariablesVariablesToTerraform(struct?: DataGithubActionsVariablesVariables): any;
export declare function dataGithubActionsVariablesVariablesToHclTerraform(struct?: DataGithubActionsVariablesVariables): any;
export declare class DataGithubActionsVariablesVariablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubActionsVariablesVariables | undefined;
    set internalValue(value: DataGithubActionsVariablesVariables | undefined);
    get createdAt(): any;
    get name(): any;
    get updatedAt(): any;
    get value(): any;
}
export declare class DataGithubActionsVariablesVariablesList extends cdktf.ComplexList {
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
    get(index: number): DataGithubActionsVariablesVariablesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_variables github_actions_variables}
*/
export declare class DataGithubActionsVariables extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_actions_variables";
    /**
    * Generates CDKTF code for importing a DataGithubActionsVariables resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsVariables to import
    * @param importFromId The id of the existing DataGithubActionsVariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_variables#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsVariables to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_variables github_actions_variables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsVariablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubActionsVariablesConfig);
    private _fullName?;
    get fullName(): string;
    set fullName(value: string);
    resetFullName(): void;
    get fullNameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _variables;
    get variables(): DataGithubActionsVariablesVariablesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
