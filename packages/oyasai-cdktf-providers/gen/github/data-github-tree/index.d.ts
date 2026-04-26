import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubTreeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree#id DataGithubTree#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree#recursive DataGithubTree#recursive}
    */
    readonly recursive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree#repository DataGithubTree#repository}
    */
    readonly repository: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree#tree_sha DataGithubTree#tree_sha}
    */
    readonly treeSha: string;
}
export interface DataGithubTreeEntries {
}
export declare function dataGithubTreeEntriesToTerraform(struct?: DataGithubTreeEntries): any;
export declare function dataGithubTreeEntriesToHclTerraform(struct?: DataGithubTreeEntries): any;
export declare class DataGithubTreeEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubTreeEntries | undefined;
    set internalValue(value: DataGithubTreeEntries | undefined);
    get mode(): any;
    get path(): any;
    get sha(): any;
    get size(): any;
    get type(): any;
}
export declare class DataGithubTreeEntriesList extends cdktf.ComplexList {
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
    get(index: number): DataGithubTreeEntriesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree github_tree}
*/
export declare class DataGithubTree extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_tree";
    /**
    * Generates CDKTF code for importing a DataGithubTree resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubTree to import
    * @param importFromId The id of the existing DataGithubTree that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubTree to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree github_tree} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubTreeConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubTreeConfig);
    private _entries;
    get entries(): DataGithubTreeEntriesList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _recursive?;
    get recursive(): boolean | cdktf.IResolvable;
    set recursive(value: boolean | cdktf.IResolvable);
    resetRecursive(): void;
    get recursiveInput(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _treeSha?;
    get treeSha(): string;
    set treeSha(value: string);
    get treeShaInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
