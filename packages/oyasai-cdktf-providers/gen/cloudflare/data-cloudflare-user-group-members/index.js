// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members cloudflare_user_group_members}
*/
export class DataCloudflareUserGroupMembers extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_user_group_members";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroupMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroupMembers to import
    * @param importFromId The id of the existing DataCloudflareUserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroupMembers to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_group_members", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members cloudflare_user_group_members} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupMembersConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_user_group_members',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountId = config.accountId;
        this._direction = config.direction;
        this._fuzzyEmail = config.fuzzyEmail;
        this._userGroupId = config.userGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // direction - computed: true, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // fuzzy_email - computed: false, optional: true, required: false
    _fuzzyEmail;
    get fuzzyEmail() {
        return this.getStringAttribute('fuzzy_email');
    }
    set fuzzyEmail(value) {
        this._fuzzyEmail = value;
    }
    resetFuzzyEmail() {
        this._fuzzyEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fuzzyEmailInput() {
        return this._fuzzyEmail;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // user_group_id - computed: false, optional: false, required: true
    _userGroupId;
    get userGroupId() {
        return this.getStringAttribute('user_group_id');
    }
    set userGroupId(value) {
        this._userGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userGroupIdInput() {
        return this._userGroupId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            fuzzy_email: cdktf.stringToTerraform(this._fuzzyEmail),
            user_group_id: cdktf.stringToTerraform(this._userGroupId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fuzzy_email: {
                value: cdktf.stringToHclTerraform(this._fuzzyEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_group_id: {
                value: cdktf.stringToHclTerraform(this._userGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
