// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubCollaboratorsCollaboratorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubCollaboratorsCollaboratorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubCollaboratorsCollaboratorOutputReference extends cdktf.ComplexObject {
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
    // events_url - computed: true, optional: false, required: false
    get eventsUrl() {
        return this.getStringAttribute('events_url');
    }
    // followers_url - computed: true, optional: false, required: false
    get followersUrl() {
        return this.getStringAttribute('followers_url');
    }
    // following_url - computed: true, optional: false, required: false
    get followingUrl() {
        return this.getStringAttribute('following_url');
    }
    // gists_url - computed: true, optional: false, required: false
    get gistsUrl() {
        return this.getStringAttribute('gists_url');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // login - computed: true, optional: false, required: false
    get login() {
        return this.getStringAttribute('login');
    }
    // organizations_url - computed: true, optional: false, required: false
    get organizationsUrl() {
        return this.getStringAttribute('organizations_url');
    }
    // permission - computed: true, optional: false, required: false
    get permission() {
        return this.getStringAttribute('permission');
    }
    // received_events_url - computed: true, optional: false, required: false
    get receivedEventsUrl() {
        return this.getStringAttribute('received_events_url');
    }
    // repos_url - computed: true, optional: false, required: false
    get reposUrl() {
        return this.getStringAttribute('repos_url');
    }
    // site_admin - computed: true, optional: false, required: false
    get siteAdmin() {
        return this.getBooleanAttribute('site_admin');
    }
    // starred_url - computed: true, optional: false, required: false
    get starredUrl() {
        return this.getStringAttribute('starred_url');
    }
    // subscriptions_url - computed: true, optional: false, required: false
    get subscriptionsUrl() {
        return this.getStringAttribute('subscriptions_url');
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
export class DataGithubCollaboratorsCollaboratorList extends cdktf.ComplexList {
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
        return new DataGithubCollaboratorsCollaboratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators github_collaborators}
*/
export class DataGithubCollaborators extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_collaborators";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubCollaborators to import
    * @param importFromId The id of the existing DataGithubCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubCollaborators to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_collaborators", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators github_collaborators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubCollaboratorsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_collaborators',
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
        this._affiliation = config.affiliation;
        this._id = config.id;
        this._owner = config.owner;
        this._permission = config.permission;
        this._repository = config.repository;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // affiliation - computed: false, optional: true, required: false
    _affiliation;
    get affiliation() {
        return this.getStringAttribute('affiliation');
    }
    set affiliation(value) {
        this._affiliation = value;
    }
    resetAffiliation() {
        this._affiliation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get affiliationInput() {
        return this._affiliation;
    }
    // collaborator - computed: true, optional: false, required: false
    _collaborator = new DataGithubCollaboratorsCollaboratorList(this, "collaborator", false);
    get collaborator() {
        return this._collaborator;
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
    // permission - computed: false, optional: true, required: false
    _permission;
    get permission() {
        return this.getStringAttribute('permission');
    }
    set permission(value) {
        this._permission = value;
    }
    resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionInput() {
        return this._permission;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            affiliation: cdktf.stringToTerraform(this._affiliation),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            permission: cdktf.stringToTerraform(this._permission),
            repository: cdktf.stringToTerraform(this._repository),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            affiliation: {
                value: cdktf.stringToHclTerraform(this._affiliation),
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
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permission: {
                value: cdktf.stringToHclTerraform(this._permission),
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
