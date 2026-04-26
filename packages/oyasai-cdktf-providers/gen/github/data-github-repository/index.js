// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubRepositoryPagesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryPagesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryPagesSourceOutputReference extends cdktf.ComplexObject {
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
    // branch - computed: true, optional: false, required: false
    get branch() {
        return this.getStringAttribute('branch');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
}
export class DataGithubRepositoryPagesSourceList extends cdktf.ComplexList {
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
        return new DataGithubRepositoryPagesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataGithubRepositoryPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryPagesOutputReference extends cdktf.ComplexObject {
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
    // build_type - computed: true, optional: false, required: false
    get buildType() {
        return this.getStringAttribute('build_type');
    }
    // cname - computed: true, optional: false, required: false
    get cname() {
        return this.getStringAttribute('cname');
    }
    // custom_404 - computed: true, optional: false, required: false
    get custom404() {
        return this.getBooleanAttribute('custom_404');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // source - computed: true, optional: false, required: false
    _source = new DataGithubRepositoryPagesSourceList(this, "source", false);
    get source() {
        return this._source;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export class DataGithubRepositoryPagesList extends cdktf.ComplexList {
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
        return new DataGithubRepositoryPagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataGithubRepositoryRepositoryLicenseLicenseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryRepositoryLicenseLicenseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryRepositoryLicenseLicenseOutputReference extends cdktf.ComplexObject {
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
    // body - computed: true, optional: false, required: false
    get body() {
        return this.getStringAttribute('body');
    }
    // conditions - computed: true, optional: false, required: false
    get conditions() {
        return cdktf.Fn.tolist(this.getListAttribute('conditions'));
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // featured - computed: true, optional: false, required: false
    get featured() {
        return this.getBooleanAttribute('featured');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // implementation - computed: true, optional: false, required: false
    get implementation() {
        return this.getStringAttribute('implementation');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // limitations - computed: true, optional: false, required: false
    get limitations() {
        return cdktf.Fn.tolist(this.getListAttribute('limitations'));
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return cdktf.Fn.tolist(this.getListAttribute('permissions'));
    }
    // spdx_id - computed: true, optional: false, required: false
    get spdxId() {
        return this.getStringAttribute('spdx_id');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export class DataGithubRepositoryRepositoryLicenseLicenseList extends cdktf.ComplexList {
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
        return new DataGithubRepositoryRepositoryLicenseLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataGithubRepositoryRepositoryLicenseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryRepositoryLicenseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryRepositoryLicenseOutputReference extends cdktf.ComplexObject {
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
    // content - computed: true, optional: false, required: false
    get content() {
        return this.getStringAttribute('content');
    }
    // download_url - computed: true, optional: false, required: false
    get downloadUrl() {
        return this.getStringAttribute('download_url');
    }
    // encoding - computed: true, optional: false, required: false
    get encoding() {
        return this.getStringAttribute('encoding');
    }
    // git_url - computed: true, optional: false, required: false
    get gitUrl() {
        return this.getStringAttribute('git_url');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // license - computed: true, optional: false, required: false
    _license = new DataGithubRepositoryRepositoryLicenseLicenseList(this, "license", false);
    get license() {
        return this._license;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // sha - computed: true, optional: false, required: false
    get sha() {
        return this.getStringAttribute('sha');
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export class DataGithubRepositoryRepositoryLicenseList extends cdktf.ComplexList {
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
        return new DataGithubRepositoryRepositoryLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataGithubRepositoryTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryTemplateOutputReference extends cdktf.ComplexObject {
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
    // owner - computed: true, optional: false, required: false
    get owner() {
        return this.getStringAttribute('owner');
    }
    // repository - computed: true, optional: false, required: false
    get repository() {
        return this.getStringAttribute('repository');
    }
}
export class DataGithubRepositoryTemplateList extends cdktf.ComplexList {
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
        return new DataGithubRepositoryTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository github_repository}
*/
export class DataGithubRepository extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepository to import
    * @param importFromId The id of the existing DataGithubRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepository to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository github_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'github_repository',
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
        this._description = config.description;
        this._fullName = config.fullName;
        this._homepageUrl = config.homepageUrl;
        this._id = config.id;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allow_auto_merge - computed: true, optional: false, required: false
    get allowAutoMerge() {
        return this.getBooleanAttribute('allow_auto_merge');
    }
    // allow_forking - computed: true, optional: false, required: false
    get allowForking() {
        return this.getBooleanAttribute('allow_forking');
    }
    // allow_merge_commit - computed: true, optional: false, required: false
    get allowMergeCommit() {
        return this.getBooleanAttribute('allow_merge_commit');
    }
    // allow_rebase_merge - computed: true, optional: false, required: false
    get allowRebaseMerge() {
        return this.getBooleanAttribute('allow_rebase_merge');
    }
    // allow_squash_merge - computed: true, optional: false, required: false
    get allowSquashMerge() {
        return this.getBooleanAttribute('allow_squash_merge');
    }
    // allow_update_branch - computed: true, optional: false, required: false
    get allowUpdateBranch() {
        return this.getBooleanAttribute('allow_update_branch');
    }
    // archived - computed: true, optional: false, required: false
    get archived() {
        return this.getBooleanAttribute('archived');
    }
    // default_branch - computed: true, optional: false, required: false
    get defaultBranch() {
        return this.getStringAttribute('default_branch');
    }
    // delete_branch_on_merge - computed: true, optional: false, required: false
    get deleteBranchOnMerge() {
        return this.getBooleanAttribute('delete_branch_on_merge');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // fork - computed: true, optional: false, required: false
    get fork() {
        return this.getBooleanAttribute('fork');
    }
    // full_name - computed: true, optional: true, required: false
    _fullName;
    get fullName() {
        return this.getStringAttribute('full_name');
    }
    set fullName(value) {
        this._fullName = value;
    }
    resetFullName() {
        this._fullName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fullNameInput() {
        return this._fullName;
    }
    // git_clone_url - computed: true, optional: false, required: false
    get gitCloneUrl() {
        return this.getStringAttribute('git_clone_url');
    }
    // has_discussions - computed: true, optional: false, required: false
    get hasDiscussions() {
        return this.getBooleanAttribute('has_discussions');
    }
    // has_downloads - computed: true, optional: false, required: false
    get hasDownloads() {
        return this.getBooleanAttribute('has_downloads');
    }
    // has_issues - computed: true, optional: false, required: false
    get hasIssues() {
        return this.getBooleanAttribute('has_issues');
    }
    // has_projects - computed: true, optional: false, required: false
    get hasProjects() {
        return this.getBooleanAttribute('has_projects');
    }
    // has_wiki - computed: true, optional: false, required: false
    get hasWiki() {
        return this.getBooleanAttribute('has_wiki');
    }
    // homepage_url - computed: false, optional: true, required: false
    _homepageUrl;
    get homepageUrl() {
        return this.getStringAttribute('homepage_url');
    }
    set homepageUrl(value) {
        this._homepageUrl = value;
    }
    resetHomepageUrl() {
        this._homepageUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homepageUrlInput() {
        return this._homepageUrl;
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // http_clone_url - computed: true, optional: false, required: false
    get httpCloneUrl() {
        return this.getStringAttribute('http_clone_url');
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
    // is_template - computed: true, optional: false, required: false
    get isTemplate() {
        return this.getBooleanAttribute('is_template');
    }
    // merge_commit_message - computed: true, optional: false, required: false
    get mergeCommitMessage() {
        return this.getStringAttribute('merge_commit_message');
    }
    // merge_commit_title - computed: true, optional: false, required: false
    get mergeCommitTitle() {
        return this.getStringAttribute('merge_commit_title');
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // pages - computed: true, optional: false, required: false
    _pages = new DataGithubRepositoryPagesList(this, "pages", false);
    get pages() {
        return this._pages;
    }
    // primary_language - computed: true, optional: false, required: false
    get primaryLanguage() {
        return this.getStringAttribute('primary_language');
    }
    // private - computed: true, optional: false, required: false
    get private() {
        return this.getBooleanAttribute('private');
    }
    // repo_id - computed: true, optional: false, required: false
    get repoId() {
        return this.getNumberAttribute('repo_id');
    }
    // repository_license - computed: true, optional: false, required: false
    _repositoryLicense = new DataGithubRepositoryRepositoryLicenseList(this, "repository_license", false);
    get repositoryLicense() {
        return this._repositoryLicense;
    }
    // squash_merge_commit_message - computed: true, optional: false, required: false
    get squashMergeCommitMessage() {
        return this.getStringAttribute('squash_merge_commit_message');
    }
    // squash_merge_commit_title - computed: true, optional: false, required: false
    get squashMergeCommitTitle() {
        return this.getStringAttribute('squash_merge_commit_title');
    }
    // ssh_clone_url - computed: true, optional: false, required: false
    get sshCloneUrl() {
        return this.getStringAttribute('ssh_clone_url');
    }
    // svn_url - computed: true, optional: false, required: false
    get svnUrl() {
        return this.getStringAttribute('svn_url');
    }
    // template - computed: true, optional: false, required: false
    _template = new DataGithubRepositoryTemplateList(this, "template", false);
    get template() {
        return this._template;
    }
    // topics - computed: true, optional: false, required: false
    get topics() {
        return this.getListAttribute('topics');
    }
    // visibility - computed: true, optional: false, required: false
    get visibility() {
        return this.getStringAttribute('visibility');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            full_name: cdktf.stringToTerraform(this._fullName),
            homepage_url: cdktf.stringToTerraform(this._homepageUrl),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            full_name: {
                value: cdktf.stringToHclTerraform(this._fullName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            homepage_url: {
                value: cdktf.stringToHclTerraform(this._homepageUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
