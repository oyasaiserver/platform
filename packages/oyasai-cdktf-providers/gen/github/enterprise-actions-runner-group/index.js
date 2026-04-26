// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}
*/
export class EnterpriseActionsRunnerGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_enterprise_actions_runner_group";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import
    * @param importFromId The id of the existing EnterpriseActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_actions_runner_group", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseActionsRunnerGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_enterprise_actions_runner_group',
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
        this._allowsPublicRepositories = config.allowsPublicRepositories;
        this._enterpriseSlug = config.enterpriseSlug;
        this._id = config.id;
        this._name = config.name;
        this._restrictedToWorkflows = config.restrictedToWorkflows;
        this._selectedOrganizationIds = config.selectedOrganizationIds;
        this._selectedWorkflows = config.selectedWorkflows;
        this._visibility = config.visibility;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allows_public_repositories - computed: false, optional: true, required: false
    _allowsPublicRepositories;
    get allowsPublicRepositories() {
        return this.getBooleanAttribute('allows_public_repositories');
    }
    set allowsPublicRepositories(value) {
        this._allowsPublicRepositories = value;
    }
    resetAllowsPublicRepositories() {
        this._allowsPublicRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowsPublicRepositoriesInput() {
        return this._allowsPublicRepositories;
    }
    // default - computed: true, optional: false, required: false
    get default() {
        return this.getBooleanAttribute('default');
    }
    // enterprise_slug - computed: false, optional: false, required: true
    _enterpriseSlug;
    get enterpriseSlug() {
        return this.getStringAttribute('enterprise_slug');
    }
    set enterpriseSlug(value) {
        this._enterpriseSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get enterpriseSlugInput() {
        return this._enterpriseSlug;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
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
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // restricted_to_workflows - computed: false, optional: true, required: false
    _restrictedToWorkflows;
    get restrictedToWorkflows() {
        return this.getBooleanAttribute('restricted_to_workflows');
    }
    set restrictedToWorkflows(value) {
        this._restrictedToWorkflows = value;
    }
    resetRestrictedToWorkflows() {
        this._restrictedToWorkflows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restrictedToWorkflowsInput() {
        return this._restrictedToWorkflows;
    }
    // runners_url - computed: true, optional: false, required: false
    get runnersUrl() {
        return this.getStringAttribute('runners_url');
    }
    // selected_organization_ids - computed: false, optional: true, required: false
    _selectedOrganizationIds;
    get selectedOrganizationIds() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_organization_ids')));
    }
    set selectedOrganizationIds(value) {
        this._selectedOrganizationIds = value;
    }
    resetSelectedOrganizationIds() {
        this._selectedOrganizationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectedOrganizationIdsInput() {
        return this._selectedOrganizationIds;
    }
    // selected_organizations_url - computed: true, optional: false, required: false
    get selectedOrganizationsUrl() {
        return this.getStringAttribute('selected_organizations_url');
    }
    // selected_workflows - computed: false, optional: true, required: false
    _selectedWorkflows;
    get selectedWorkflows() {
        return this.getListAttribute('selected_workflows');
    }
    set selectedWorkflows(value) {
        this._selectedWorkflows = value;
    }
    resetSelectedWorkflows() {
        this._selectedWorkflows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectedWorkflowsInput() {
        return this._selectedWorkflows;
    }
    // visibility - computed: false, optional: false, required: true
    _visibility;
    get visibility() {
        return this.getStringAttribute('visibility');
    }
    set visibility(value) {
        this._visibility = value;
    }
    // Temporarily expose input value. Use with caution.
    get visibilityInput() {
        return this._visibility;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allows_public_repositories: cdktf.booleanToTerraform(this._allowsPublicRepositories),
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            restricted_to_workflows: cdktf.booleanToTerraform(this._restrictedToWorkflows),
            selected_organization_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedOrganizationIds),
            selected_workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedWorkflows),
            visibility: cdktf.stringToTerraform(this._visibility),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allows_public_repositories: {
                value: cdktf.booleanToHclTerraform(this._allowsPublicRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enterprise_slug: {
                value: cdktf.stringToHclTerraform(this._enterpriseSlug),
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
            restricted_to_workflows: {
                value: cdktf.booleanToHclTerraform(this._restrictedToWorkflows),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            selected_organization_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedOrganizationIds),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            selected_workflows: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedWorkflows),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
