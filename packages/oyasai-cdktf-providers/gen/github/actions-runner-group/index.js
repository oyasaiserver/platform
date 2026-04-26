// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group github_actions_runner_group}
*/
export class ActionsRunnerGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_runner_group";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRunnerGroup to import
    * @param importFromId The id of the existing ActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRunnerGroup to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_runner_group", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group github_actions_runner_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRunnerGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_runner_group',
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
        this._name = config.name;
        this._restrictedToWorkflows = config.restrictedToWorkflows;
        this._selectedRepositoryIds = config.selectedRepositoryIds;
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
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // inherited - computed: true, optional: false, required: false
    get inherited() {
        return this.getBooleanAttribute('inherited');
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
    // selected_repositories_url - computed: true, optional: false, required: false
    get selectedRepositoriesUrl() {
        return this.getStringAttribute('selected_repositories_url');
    }
    // selected_repository_ids - computed: false, optional: true, required: false
    _selectedRepositoryIds;
    get selectedRepositoryIds() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
    }
    set selectedRepositoryIds(value) {
        this._selectedRepositoryIds = value;
    }
    resetSelectedRepositoryIds() {
        this._selectedRepositoryIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectedRepositoryIdsInput() {
        return this._selectedRepositoryIds;
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
            name: cdktf.stringToTerraform(this._name),
            restricted_to_workflows: cdktf.booleanToTerraform(this._restrictedToWorkflows),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
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
            selected_repository_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
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
