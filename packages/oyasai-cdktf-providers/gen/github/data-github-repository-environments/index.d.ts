import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryEnvironmentsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environments#id DataGithubRepositoryEnvironments#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environments#repository DataGithubRepositoryEnvironments#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryEnvironmentsEnvironments {
}
export declare function dataGithubRepositoryEnvironmentsEnvironmentsToTerraform(struct?: DataGithubRepositoryEnvironmentsEnvironments): any;
export declare function dataGithubRepositoryEnvironmentsEnvironmentsToHclTerraform(struct?: DataGithubRepositoryEnvironmentsEnvironments): any;
export declare class DataGithubRepositoryEnvironmentsEnvironmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryEnvironmentsEnvironments | undefined;
    set internalValue(value: DataGithubRepositoryEnvironmentsEnvironments | undefined);
    get name(): any;
    get nodeId(): any;
}
export declare class DataGithubRepositoryEnvironmentsEnvironmentsList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryEnvironmentsEnvironmentsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environments github_repository_environments}
*/
export declare class DataGithubRepositoryEnvironments extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_environments";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryEnvironments resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryEnvironments to import
    * @param importFromId The id of the existing DataGithubRepositoryEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environments#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryEnvironments to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environments github_repository_environments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryEnvironmentsConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryEnvironmentsConfig);
    private _environments;
    get environments(): DataGithubRepositoryEnvironmentsEnvironmentsList;
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
