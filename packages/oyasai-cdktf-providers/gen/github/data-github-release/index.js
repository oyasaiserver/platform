// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubReleaseAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubReleaseAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubReleaseAssetsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
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
}
export class DataGithubReleaseAssetsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataGithubReleaseAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release github_release}
*/
export class DataGithubRelease extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_release";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRelease resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRelease to import
    * @param importFromId The id of the existing DataGithubRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRelease to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_release", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release github_release} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubReleaseConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_release',
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
        this._id = config.id;
        this._owner = config.owner;
        this._releaseId = config.releaseId;
        this._releaseTag = config.releaseTag;
        this._repository = config.repository;
        this._retrieveBy = config.retrieveBy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // asserts_url - computed: true, optional: false, required: false
    get assertsUrl() {
        return this.getStringAttribute('asserts_url');
    }
    // assets - computed: true, optional: false, required: false
    _assets = new DataGithubReleaseAssetsList(this, "assets", false);
    get assets() {
        return this._assets;
    }
    // assets_url - computed: true, optional: false, required: false
    get assetsUrl() {
        return this.getStringAttribute('assets_url');
    }
    // body - computed: true, optional: false, required: false
    get body() {
        return this.getStringAttribute('body');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // draft - computed: true, optional: false, required: false
    get draft() {
        return this.getBooleanAttribute('draft');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
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
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
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
    // prerelease - computed: true, optional: false, required: false
    get prerelease() {
        return this.getBooleanAttribute('prerelease');
    }
    // published_at - computed: true, optional: false, required: false
    get publishedAt() {
        return this.getStringAttribute('published_at');
    }
    // release_id - computed: false, optional: true, required: false
    _releaseId;
    get releaseId() {
        return this.getNumberAttribute('release_id');
    }
    set releaseId(value) {
        this._releaseId = value;
    }
    resetReleaseId() {
        this._releaseId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get releaseIdInput() {
        return this._releaseId;
    }
    // release_tag - computed: false, optional: true, required: false
    _releaseTag;
    get releaseTag() {
        return this.getStringAttribute('release_tag');
    }
    set releaseTag(value) {
        this._releaseTag = value;
    }
    resetReleaseTag() {
        this._releaseTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get releaseTagInput() {
        return this._releaseTag;
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
    // retrieve_by - computed: false, optional: false, required: true
    _retrieveBy;
    get retrieveBy() {
        return this.getStringAttribute('retrieve_by');
    }
    set retrieveBy(value) {
        this._retrieveBy = value;
    }
    // Temporarily expose input value. Use with caution.
    get retrieveByInput() {
        return this._retrieveBy;
    }
    // tarball_url - computed: true, optional: false, required: false
    get tarballUrl() {
        return this.getStringAttribute('tarball_url');
    }
    // target_commitish - computed: true, optional: false, required: false
    get targetCommitish() {
        return this.getStringAttribute('target_commitish');
    }
    // upload_url - computed: true, optional: false, required: false
    get uploadUrl() {
        return this.getStringAttribute('upload_url');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // zipball_url - computed: true, optional: false, required: false
    get zipballUrl() {
        return this.getStringAttribute('zipball_url');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            release_id: cdktf.numberToTerraform(this._releaseId),
            release_tag: cdktf.stringToTerraform(this._releaseTag),
            repository: cdktf.stringToTerraform(this._repository),
            retrieve_by: cdktf.stringToTerraform(this._retrieveBy),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
            release_id: {
                value: cdktf.numberToHclTerraform(this._releaseId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            release_tag: {
                value: cdktf.stringToHclTerraform(this._releaseTag),
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
            retrieve_by: {
                value: cdktf.stringToHclTerraform(this._retrieveBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
