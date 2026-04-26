// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone github_repository_milestone}
*/
export class RepositoryMilestone extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_milestone";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryMilestone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryMilestone to import
    * @param importFromId The id of the existing RepositoryMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryMilestone to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_milestone", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone github_repository_milestone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryMilestoneConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_milestone',
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
        this._dueDate = config.dueDate;
        this._id = config.id;
        this._owner = config.owner;
        this._repository = config.repository;
        this._state = config.state;
        this._title = config.title;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // due_date - computed: false, optional: true, required: false
    _dueDate;
    get dueDate() {
        return this.getStringAttribute('due_date');
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    resetDueDate() {
        this._dueDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dueDateInput() {
        return this._dueDate;
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
    // number - computed: true, optional: false, required: false
    get number() {
        return this.getNumberAttribute('number');
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
    // state - computed: false, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // title - computed: false, optional: false, required: true
    _title;
    get title() {
        return this.getStringAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            due_date: cdktf.stringToTerraform(this._dueDate),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            repository: cdktf.stringToTerraform(this._repository),
            state: cdktf.stringToTerraform(this._state),
            title: cdktf.stringToTerraform(this._title),
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
            due_date: {
                value: cdktf.stringToHclTerraform(this._dueDate),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktf.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
