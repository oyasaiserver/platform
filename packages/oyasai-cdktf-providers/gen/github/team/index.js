// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team github_team}
*/
export class Team extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_team";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Team to import
    * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Team to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team github_team} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_team',
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
        this._createDefaultMaintainer = config.createDefaultMaintainer;
        this._description = config.description;
        this._id = config.id;
        this._ldapDn = config.ldapDn;
        this._name = config.name;
        this._notificationSetting = config.notificationSetting;
        this._parentTeamId = config.parentTeamId;
        this._parentTeamReadId = config.parentTeamReadId;
        this._parentTeamReadSlug = config.parentTeamReadSlug;
        this._privacy = config.privacy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // create_default_maintainer - computed: false, optional: true, required: false
    _createDefaultMaintainer;
    get createDefaultMaintainer() {
        return this.getBooleanAttribute('create_default_maintainer');
    }
    set createDefaultMaintainer(value) {
        this._createDefaultMaintainer = value;
    }
    resetCreateDefaultMaintainer() {
        this._createDefaultMaintainer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createDefaultMaintainerInput() {
        return this._createDefaultMaintainer;
    }
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
    // ldap_dn - computed: false, optional: true, required: false
    _ldapDn;
    get ldapDn() {
        return this.getStringAttribute('ldap_dn');
    }
    set ldapDn(value) {
        this._ldapDn = value;
    }
    resetLdapDn() {
        this._ldapDn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ldapDnInput() {
        return this._ldapDn;
    }
    // members_count - computed: true, optional: false, required: false
    get membersCount() {
        return this.getNumberAttribute('members_count');
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
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // notification_setting - computed: false, optional: true, required: false
    _notificationSetting;
    get notificationSetting() {
        return this.getStringAttribute('notification_setting');
    }
    set notificationSetting(value) {
        this._notificationSetting = value;
    }
    resetNotificationSetting() {
        this._notificationSetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationSettingInput() {
        return this._notificationSetting;
    }
    // parent_team_id - computed: false, optional: true, required: false
    _parentTeamId;
    get parentTeamId() {
        return this.getStringAttribute('parent_team_id');
    }
    set parentTeamId(value) {
        this._parentTeamId = value;
    }
    resetParentTeamId() {
        this._parentTeamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentTeamIdInput() {
        return this._parentTeamId;
    }
    // parent_team_read_id - computed: true, optional: true, required: false
    _parentTeamReadId;
    get parentTeamReadId() {
        return this.getStringAttribute('parent_team_read_id');
    }
    set parentTeamReadId(value) {
        this._parentTeamReadId = value;
    }
    resetParentTeamReadId() {
        this._parentTeamReadId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentTeamReadIdInput() {
        return this._parentTeamReadId;
    }
    // parent_team_read_slug - computed: true, optional: true, required: false
    _parentTeamReadSlug;
    get parentTeamReadSlug() {
        return this.getStringAttribute('parent_team_read_slug');
    }
    set parentTeamReadSlug(value) {
        this._parentTeamReadSlug = value;
    }
    resetParentTeamReadSlug() {
        this._parentTeamReadSlug = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentTeamReadSlugInput() {
        return this._parentTeamReadSlug;
    }
    // privacy - computed: false, optional: true, required: false
    _privacy;
    get privacy() {
        return this.getStringAttribute('privacy');
    }
    set privacy(value) {
        this._privacy = value;
    }
    resetPrivacy() {
        this._privacy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privacyInput() {
        return this._privacy;
    }
    // slug - computed: true, optional: false, required: false
    get slug() {
        return this.getStringAttribute('slug');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            create_default_maintainer: cdktf.booleanToTerraform(this._createDefaultMaintainer),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            ldap_dn: cdktf.stringToTerraform(this._ldapDn),
            name: cdktf.stringToTerraform(this._name),
            notification_setting: cdktf.stringToTerraform(this._notificationSetting),
            parent_team_id: cdktf.stringToTerraform(this._parentTeamId),
            parent_team_read_id: cdktf.stringToTerraform(this._parentTeamReadId),
            parent_team_read_slug: cdktf.stringToTerraform(this._parentTeamReadSlug),
            privacy: cdktf.stringToTerraform(this._privacy),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            create_default_maintainer: {
                value: cdktf.booleanToHclTerraform(this._createDefaultMaintainer),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            ldap_dn: {
                value: cdktf.stringToHclTerraform(this._ldapDn),
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
            notification_setting: {
                value: cdktf.stringToHclTerraform(this._notificationSetting),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_team_id: {
                value: cdktf.stringToHclTerraform(this._parentTeamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_team_read_id: {
                value: cdktf.stringToHclTerraform(this._parentTeamReadId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_team_read_slug: {
                value: cdktf.stringToHclTerraform(this._parentTeamReadSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            privacy: {
                value: cdktf.stringToHclTerraform(this._privacy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
