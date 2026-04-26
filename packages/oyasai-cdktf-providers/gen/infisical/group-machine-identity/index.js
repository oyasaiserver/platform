// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity infisical_group_machine_identity}
*/
export class GroupMachineIdentity extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_group_machine_identity";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a GroupMachineIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GroupMachineIdentity to import
    * @param importFromId The id of the existing GroupMachineIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GroupMachineIdentity to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_group_machine_identity", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity infisical_group_machine_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroupMachineIdentityConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_group_machine_identity',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._groupId = config.groupId;
        this._identityId = config.identityId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // group_id - computed: false, optional: false, required: true
    _groupId;
    get groupId() {
        return this.getStringAttribute('group_id');
    }
    set groupId(value) {
        this._groupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupIdInput() {
        return this._groupId;
    }
    // identity_id - computed: false, optional: false, required: true
    _identityId;
    get identityId() {
        return this.getStringAttribute('identity_id');
    }
    set identityId(value) {
        this._identityId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityIdInput() {
        return this._identityId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            group_id: cdktf.stringToTerraform(this._groupId),
            identity_id: cdktf.stringToTerraform(this._identityId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            group_id: {
                value: cdktf.stringToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
