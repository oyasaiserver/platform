// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset github_release_asset}
*/
export class DataGithubReleaseAsset extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_release_asset";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubReleaseAsset to import
    * @param importFromId The id of the existing DataGithubReleaseAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubReleaseAsset to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_release_asset", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release_asset github_release_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubReleaseAssetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_release_asset',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._assetId = config.assetId;
        this._downloadFileContents = config.downloadFileContents;
        this._id = config.id;
        this._owner = config.owner;
        this._repository = config.repository;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // asset_id - computed: false, optional: false, required: true
    _assetId;
    get assetId() {
        return this.getNumberAttribute('asset_id');
    }
    set assetId(value) {
        this._assetId = value;
    }
    // Temporarily expose input value. Use with caution.
    get assetIdInput() {
        return this._assetId;
    }
    // browser_download_url - computed: true, optional: false, required: false
    get browserDownloadUrl() {
        return this.getStringAttribute('browser_download_url');
    }
    // content_type - computed: true, optional: false, required: false
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // download_file_contents - computed: false, optional: true, required: false
    _downloadFileContents;
    get downloadFileContents() {
        return this.getBooleanAttribute('download_file_contents');
    }
    set downloadFileContents(value) {
        this._downloadFileContents = value;
    }
    resetDownloadFileContents() {
        this._downloadFileContents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get downloadFileContentsInput() {
        return this._downloadFileContents;
    }
    // file_contents - computed: true, optional: false, required: false
    get fileContents() {
        return this.getStringAttribute('file_contents');
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // label - computed: true, optional: false, required: false
    get label() {
        return this.getStringAttribute('label');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // owner - computed: false, optional: false, required: true
    _owner;
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            asset_id: cdktf.numberToTerraform(this._assetId),
            download_file_contents: cdktf.booleanToTerraform(this._downloadFileContents),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            repository: cdktf.stringToTerraform(this._repository),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            asset_id: {
                value: cdktf.numberToHclTerraform(this._assetId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            download_file_contents: {
                value: cdktf.booleanToHclTerraform(this._downloadFileContents),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
