// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment github_organization_role_team_assignment}
*/
export class OrganizationRoleTeamAssignment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_organization_role_team_assignment";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationRoleTeamAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRoleTeamAssignment to import
    * @param importFromId The id of the existing OrganizationRoleTeamAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRoleTeamAssignment to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_role_team_assignment", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment github_organization_role_team_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRoleTeamAssignmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_organization_role_team_assignment',
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
        this._roleId = config.roleId;
        this._teamSlug = config.teamSlug;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // role_id - computed: false, optional: false, required: true
    _roleId;
    get roleId() {
        return this.getStringAttribute('role_id');
    }
    set roleId(value) {
        this._roleId = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleIdInput() {
        return this._roleId;
    }
    // team_slug - computed: false, optional: false, required: true
    _teamSlug;
    get teamSlug() {
        return this.getStringAttribute('team_slug');
    }
    set teamSlug(value) {
        this._teamSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamSlugInput() {
        return this._teamSlug;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            role_id: cdktf.stringToTerraform(this._roleId),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
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
            role_id: {
                value: cdktf.stringToHclTerraform(this._roleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_slug: {
                value: cdktf.stringToHclTerraform(this._teamSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
