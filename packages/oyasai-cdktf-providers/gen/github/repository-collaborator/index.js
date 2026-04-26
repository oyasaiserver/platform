// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator github_repository_collaborator}
*/
export class RepositoryCollaborator extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_collaborator";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryCollaborator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCollaborator to import
    * @param importFromId The id of the existing RepositoryCollaborator that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCollaborator to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_collaborator", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator github_repository_collaborator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCollaboratorConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_collaborator',
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
        this._permissionDiffSuppression = config.permissionDiffSuppression;
        this._repository = config.repository;
        this._username = config.username;
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
    // invitation_id - computed: true, optional: false, required: false
    get invitationId() {
        return this.getStringAttribute('invitation_id');
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
    // permission_diff_suppression - computed: false, optional: true, required: false
    _permissionDiffSuppression;
    get permissionDiffSuppression() {
        return this.getBooleanAttribute('permission_diff_suppression');
    }
    set permissionDiffSuppression(value) {
        this._permissionDiffSuppression = value;
    }
    resetPermissionDiffSuppression() {
        this._permissionDiffSuppression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionDiffSuppressionInput() {
        return this._permissionDiffSuppression;
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
    // username - computed: false, optional: false, required: true
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            permission: cdktf.stringToTerraform(this._permission),
            permission_diff_suppression: cdktf.booleanToTerraform(this._permissionDiffSuppression),
            repository: cdktf.stringToTerraform(this._repository),
            username: cdktf.stringToTerraform(this._username),
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
            permission_diff_suppression: {
                value: cdktf.booleanToHclTerraform(this._permissionDiffSuppression),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
