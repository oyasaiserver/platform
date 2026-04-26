// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter github_user_invitation_accepter}
*/
export class UserInvitationAccepter extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_user_invitation_accepter";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a UserInvitationAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserInvitationAccepter to import
    * @param importFromId The id of the existing UserInvitationAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserInvitationAccepter to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user_invitation_accepter", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter github_user_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserInvitationAccepterConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'github_user_invitation_accepter',
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
        this._allowEmptyId = config.allowEmptyId;
        this._id = config.id;
        this._invitationId = config.invitationId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allow_empty_id - computed: false, optional: true, required: false
    _allowEmptyId;
    get allowEmptyId() {
        return this.getBooleanAttribute('allow_empty_id');
    }
    set allowEmptyId(value) {
        this._allowEmptyId = value;
    }
    resetAllowEmptyId() {
        this._allowEmptyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowEmptyIdInput() {
        return this._allowEmptyId;
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
    // invitation_id - computed: false, optional: true, required: false
    _invitationId;
    get invitationId() {
        return this.getStringAttribute('invitation_id');
    }
    set invitationId(value) {
        this._invitationId = value;
    }
    resetInvitationId() {
        this._invitationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get invitationIdInput() {
        return this._invitationId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_empty_id: cdktf.booleanToTerraform(this._allowEmptyId),
            id: cdktf.stringToTerraform(this._id),
            invitation_id: cdktf.stringToTerraform(this._invitationId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allow_empty_id: {
                value: cdktf.booleanToHclTerraform(this._allowEmptyId),
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
            invitation_id: {
                value: cdktf.stringToHclTerraform(this._invitationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
