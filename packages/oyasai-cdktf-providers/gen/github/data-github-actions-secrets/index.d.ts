import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubActionsSecretsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_secrets#full_name DataGithubActionsSecrets#full_name}
    */
    readonly fullName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_secrets#id DataGithubActionsSecrets#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_secrets#name DataGithubActionsSecrets#name}
    */
    readonly name?: string;
}
export interface DataGithubActionsSecretsSecrets {
}
export declare function dataGithubActionsSecretsSecretsToTerraform(struct?: DataGithubActionsSecretsSecrets): any;
export declare function dataGithubActionsSecretsSecretsToHclTerraform(struct?: DataGithubActionsSecretsSecrets): any;
export declare class DataGithubActionsSecretsSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubActionsSecretsSecrets | undefined;
    set internalValue(value: DataGithubActionsSecretsSecrets | undefined);
    get createdAt(): any;
    get name(): any;
    get updatedAt(): any;
}
export declare class DataGithubActionsSecretsSecretsList extends cdktf.ComplexList {
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
    get(index: number): DataGithubActionsSecretsSecretsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_secrets github_actions_secrets}
*/
export declare class DataGithubActionsSecrets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_actions_secrets";
    /**
    * Generates CDKTF code for importing a DataGithubActionsSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsSecrets to import
    * @param importFromId The id of the existing DataGithubActionsSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsSecrets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_secrets github_actions_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsSecretsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubActionsSecretsConfig);
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
    private _secrets;
    get secrets(): DataGithubActionsSecretsSecretsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
