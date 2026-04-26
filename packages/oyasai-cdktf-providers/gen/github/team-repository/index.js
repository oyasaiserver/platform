// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository github_team_repository}
*/
export class TeamRepository extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_team_repository";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamRepository to import
    * @param importFromId The id of the existing TeamRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamRepository to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_repository", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository github_team_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamRepositoryConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_team_repository',
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
        this._permission = config.permission;
        this._repository = config.repository;
        this._teamId = config.teamId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // team_id - computed: false, optional: false, required: true
    _teamId;
    get teamId() {
        return this.getStringAttribute('team_id');
    }
    set teamId(value) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamIdInput() {
        return this._teamId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            permission: cdktf.stringToTerraform(this._permission),
            repository: cdktf.stringToTerraform(this._repository),
            team_id: cdktf.stringToTerraform(this._teamId),
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
            team_id: {
                value: cdktf.stringToHclTerraform(this._teamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
