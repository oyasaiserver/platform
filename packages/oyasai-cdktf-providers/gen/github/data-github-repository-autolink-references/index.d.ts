import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryAutolinkReferencesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryAutolinkReferencesAutolinkReferences {
}
export declare function dataGithubRepositoryAutolinkReferencesAutolinkReferencesToTerraform(struct?: DataGithubRepositoryAutolinkReferencesAutolinkReferences): any;
export declare function dataGithubRepositoryAutolinkReferencesAutolinkReferencesToHclTerraform(struct?: DataGithubRepositoryAutolinkReferencesAutolinkReferences): any;
export declare class DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryAutolinkReferencesAutolinkReferences | undefined;
    set internalValue(value: DataGithubRepositoryAutolinkReferencesAutolinkReferences | undefined);
    get isAlphanumeric(): any;
    get keyPrefix(): any;
    get targetUrlTemplate(): any;
}
export declare class DataGithubRepositoryAutolinkReferencesAutolinkReferencesList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references github_repository_autolink_references}
*/
export declare class DataGithubRepositoryAutolinkReferences extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_autolink_references";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryAutolinkReferences to import
    * @param importFromId The id of the existing DataGithubRepositoryAutolinkReferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryAutolinkReferences to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references github_repository_autolink_references} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryAutolinkReferencesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryAutolinkReferencesConfig);
    private _autolinkReferences;
    get autolinkReferences(): DataGithubRepositoryAutolinkReferencesAutolinkReferencesList;
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
