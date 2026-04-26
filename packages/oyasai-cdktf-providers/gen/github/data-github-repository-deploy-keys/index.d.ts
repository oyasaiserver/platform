import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryDeployKeysConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys#id DataGithubRepositoryDeployKeys#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys#repository DataGithubRepositoryDeployKeys#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryDeployKeysKeys {
}
export declare function dataGithubRepositoryDeployKeysKeysToTerraform(struct?: DataGithubRepositoryDeployKeysKeys): any;
export declare function dataGithubRepositoryDeployKeysKeysToHclTerraform(struct?: DataGithubRepositoryDeployKeysKeys): any;
export declare class DataGithubRepositoryDeployKeysKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryDeployKeysKeys | undefined;
    set internalValue(value: DataGithubRepositoryDeployKeysKeys | undefined);
    get id(): any;
    get key(): any;
    get title(): any;
    get verified(): any;
}
export declare class DataGithubRepositoryDeployKeysKeysList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryDeployKeysKeysOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys github_repository_deploy_keys}
*/
export declare class DataGithubRepositoryDeployKeys extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_deploy_keys";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryDeployKeys resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryDeployKeys to import
    * @param importFromId The id of the existing DataGithubRepositoryDeployKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryDeployKeys to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys github_repository_deploy_keys} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryDeployKeysConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryDeployKeysConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _keys;
    get keys(): DataGithubRepositoryDeployKeysKeysList;
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
