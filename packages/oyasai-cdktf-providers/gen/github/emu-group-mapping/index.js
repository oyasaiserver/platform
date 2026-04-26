// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping github_emu_group_mapping}
*/
export class EmuGroupMapping extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_emu_group_mapping";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmuGroupMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmuGroupMapping to import
    * @param importFromId The id of the existing EmuGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmuGroupMapping to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_emu_group_mapping", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping github_emu_group_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmuGroupMappingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_emu_group_mapping',
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
        this._groupId = config.groupId;
        this._id = config.id;
        this._teamSlug = config.teamSlug;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // group_id - computed: false, optional: false, required: true
    _groupId;
    get groupId() {
        return this.getNumberAttribute('group_id');
    }
    set groupId(value) {
        this._groupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupIdInput() {
        return this._groupId;
    }
    // group_name - computed: true, optional: false, required: false
    get groupName() {
        return this.getStringAttribute('group_name');
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
    // team_id - computed: true, optional: false, required: false
    get teamId() {
        return this.getNumberAttribute('team_id');
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
            group_id: cdktf.numberToTerraform(this._groupId),
            id: cdktf.stringToTerraform(this._id),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            group_id: {
                value: cdktf.numberToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
