import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubReleaseAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * ID of the release asset to retrieve
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}
    */
    readonly assetId: number;
    /**
    * Whether to download the asset file content into the `file_contents` attribute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}
    */
    readonly downloadFileContents?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Owner of the repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}
    */
    readonly owner: string;
    /**
    * Name of the repository to retrieve the release asset from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset github_release_asset}
*/
export declare class DataGithubReleaseAsset extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_release_asset";
    /**
    * Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubReleaseAsset to import
    * @param importFromId The id of the existing DataGithubReleaseAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubReleaseAsset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset github_release_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubReleaseAssetConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubReleaseAssetConfig);
    private _assetId?;
    get assetId(): number;
    set assetId(value: number);
    get assetIdInput(): number;
    get browserDownloadUrl(): any;
    get contentType(): any;
    get createdAt(): any;
    private _downloadFileContents?;
    get downloadFileContents(): boolean | cdktf.IResolvable;
    set downloadFileContents(value: boolean | cdktf.IResolvable);
    resetDownloadFileContents(): void;
    get downloadFileContentsInput(): any;
    get fileContents(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get label(): any;
    get name(): any;
    get nodeId(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get size(): any;
    get updatedAt(): any;
    get url(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
