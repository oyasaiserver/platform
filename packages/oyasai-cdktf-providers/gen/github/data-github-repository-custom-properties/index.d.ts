import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryCustomPropertiesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_custom_properties#id DataGithubRepositoryCustomProperties#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the repository which the custom properties should be on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_custom_properties#repository DataGithubRepositoryCustomProperties#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryCustomPropertiesProperty {
}
export declare function dataGithubRepositoryCustomPropertiesPropertyToTerraform(struct?: DataGithubRepositoryCustomPropertiesProperty): any;
export declare function dataGithubRepositoryCustomPropertiesPropertyToHclTerraform(struct?: DataGithubRepositoryCustomPropertiesProperty): any;
export declare class DataGithubRepositoryCustomPropertiesPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryCustomPropertiesProperty | undefined;
    set internalValue(value: DataGithubRepositoryCustomPropertiesProperty | undefined);
    get propertyName(): any;
    get propertyValue(): any;
}
export declare class DataGithubRepositoryCustomPropertiesPropertyList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryCustomPropertiesPropertyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_custom_properties github_repository_custom_properties}
*/
export declare class DataGithubRepositoryCustomProperties extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_custom_properties";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryCustomProperties resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryCustomProperties to import
    * @param importFromId The id of the existing DataGithubRepositoryCustomProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_custom_properties#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryCustomProperties to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_custom_properties github_repository_custom_properties} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryCustomPropertiesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryCustomPropertiesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _property;
    get property(): DataGithubRepositoryCustomPropertiesPropertyList;
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
