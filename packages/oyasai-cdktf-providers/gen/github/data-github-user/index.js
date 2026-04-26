// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user github_user}
*/
export class DataGithubUser extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_user";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubUser to import
    * @param importFromId The id of the existing DataGithubUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubUser to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user github_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubUserConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_user',
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
        this._username = config.username;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // avatar_url - computed: true, optional: false, required: false
    get avatarUrl() {
        return this.getStringAttribute('avatar_url');
    }
    // bio - computed: true, optional: false, required: false
    get bio() {
        return this.getStringAttribute('bio');
    }
    // blog - computed: true, optional: false, required: false
    get blog() {
        return this.getStringAttribute('blog');
    }
    // company - computed: true, optional: false, required: false
    get company() {
        return this.getStringAttribute('company');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // followers - computed: true, optional: false, required: false
    get followers() {
        return this.getNumberAttribute('followers');
    }
    // following - computed: true, optional: false, required: false
    get following() {
        return this.getNumberAttribute('following');
    }
    // gpg_keys - computed: true, optional: false, required: false
    get gpgKeys() {
        return this.getListAttribute('gpg_keys');
    }
    // gravatar_id - computed: true, optional: false, required: false
    get gravatarId() {
        return this.getStringAttribute('gravatar_id');
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
    // location - computed: true, optional: false, required: false
    get location() {
        return this.getStringAttribute('location');
    }
    // login - computed: true, optional: false, required: false
    get login() {
        return this.getStringAttribute('login');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // public_gists - computed: true, optional: false, required: false
    get publicGists() {
        return this.getNumberAttribute('public_gists');
    }
    // public_repos - computed: true, optional: false, required: false
    get publicRepos() {
        return this.getNumberAttribute('public_repos');
    }
    // site_admin - computed: true, optional: false, required: false
    get siteAdmin() {
        return this.getBooleanAttribute('site_admin');
    }
    // ssh_keys - computed: true, optional: false, required: false
    get sshKeys() {
        return this.getListAttribute('ssh_keys');
    }
    // suspended_at - computed: true, optional: false, required: false
    get suspendedAt() {
        return this.getStringAttribute('suspended_at');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
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
