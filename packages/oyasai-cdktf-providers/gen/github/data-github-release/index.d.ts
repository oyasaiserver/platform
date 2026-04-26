import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubReleaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#id DataGithubRelease#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Owner of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#owner DataGithubRelease#owner}
    */
    readonly owner: string;
    /**
    * ID of the release to retrieve. Must be specified when `retrieve_by` = `id`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#release_id DataGithubRelease#release_id}
    */
    readonly releaseId?: number;
    /**
    * ID of the release to retrieve. Must be specified when `retrieve_by` = `tag`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#release_tag DataGithubRelease#release_tag}
    */
    readonly releaseTag?: string;
    /**
    * Name of the repository to retrieve the release from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#repository DataGithubRelease#repository}
    */
    readonly repository: string;
    /**
    * Describes how to fetch the release. Valid values are `id`, `tag`, `latest`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#retrieve_by DataGithubRelease#retrieve_by}
    */
    readonly retrieveBy: string;
}
export interface DataGithubReleaseAssets {
}
export declare function dataGithubReleaseAssetsToTerraform(struct?: DataGithubReleaseAssets): any;
export declare function dataGithubReleaseAssetsToHclTerraform(struct?: DataGithubReleaseAssets): any;
export declare class DataGithubReleaseAssetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubReleaseAssets | undefined;
    set internalValue(value: DataGithubReleaseAssets | undefined);
    get browserDownloadUrl(): any;
    get contentType(): any;
    get createdAt(): any;
    get id(): any;
    get label(): any;
    get name(): any;
    get nodeId(): any;
    get size(): any;
    get updatedAt(): any;
    get url(): any;
}
export declare class DataGithubReleaseAssetsList extends cdktf.ComplexList {
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
    get(index: number): DataGithubReleaseAssetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release github_release}
*/
export declare class DataGithubRelease extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_release";
    /**
    * Generates CDKTF code for importing a DataGithubRelease resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRelease to import
    * @param importFromId The id of the existing DataGithubRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRelease to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release github_release} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubReleaseConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubReleaseConfig);
    get assertsUrl(): any;
    private _assets;
    get assets(): DataGithubReleaseAssetsList;
    get assetsUrl(): any;
    get body(): any;
    get createdAt(): any;
    get draft(): any;
    get htmlUrl(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get name(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    get prerelease(): any;
    get publishedAt(): any;
    private _releaseId?;
    get releaseId(): number;
    set releaseId(value: number);
    resetReleaseId(): void;
    get releaseIdInput(): number;
    private _releaseTag?;
    get releaseTag(): string;
    set releaseTag(value: string);
    resetReleaseTag(): void;
    get releaseTagInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _retrieveBy?;
    get retrieveBy(): string;
    set retrieveBy(value: string);
    get retrieveByInput(): string;
    get tarballUrl(): any;
    get targetCommitish(): any;
    get uploadUrl(): any;
    get url(): any;
    get zipballUrl(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
