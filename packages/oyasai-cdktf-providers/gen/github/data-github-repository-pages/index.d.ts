import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryPagesAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages#id DataGithubRepositoryPagesA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The repository name to get GitHub Pages information for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages#repository DataGithubRepositoryPagesA#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryPagesSourceA {
}
export declare function dataGithubRepositoryPagesSourceAToTerraform(struct?: DataGithubRepositoryPagesSourceA): any;
export declare function dataGithubRepositoryPagesSourceAToHclTerraform(struct?: DataGithubRepositoryPagesSourceA): any;
export declare class DataGithubRepositoryPagesSourceAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryPagesSourceA | undefined;
    set internalValue(value: DataGithubRepositoryPagesSourceA | undefined);
    get branch(): any;
    get path(): any;
}
export declare class DataGithubRepositoryPagesSourceAList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryPagesSourceAOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages github_repository_pages}
*/
export declare class DataGithubRepositoryPagesA extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_pages";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPagesA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPagesA to import
    * @param importFromId The id of the existing DataGithubRepositoryPagesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPagesA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages github_repository_pages} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPagesAConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryPagesAConfig);
    get apiUrl(): any;
    get buildStatus(): any;
    get buildType(): any;
    get cname(): any;
    get custom404(): any;
    get htmlUrl(): any;
    get httpsEnforced(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get public(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _source;
    get source(): DataGithubRepositoryPagesSourceAList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
