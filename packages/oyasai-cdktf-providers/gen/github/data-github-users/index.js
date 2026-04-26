// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users github_users}
*/
export class DataGithubUsers extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_users";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubUsers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubUsers to import
    * @param importFromId The id of the existing DataGithubUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubUsers to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_users", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users github_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubUsersConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_users',
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
        this._usernames = config.usernames;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // emails - computed: true, optional: false, required: false
    get emails() {
        return this.getListAttribute('emails');
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
    // logins - computed: true, optional: false, required: false
    get logins() {
        return this.getListAttribute('logins');
    }
    // node_ids - computed: true, optional: false, required: false
    get nodeIds() {
        return this.getListAttribute('node_ids');
    }
    // unknown_logins - computed: true, optional: false, required: false
    get unknownLogins() {
        return this.getListAttribute('unknown_logins');
    }
    // usernames - computed: false, optional: false, required: true
    _usernames;
    get usernames() {
        return this.getListAttribute('usernames');
    }
    set usernames(value) {
        this._usernames = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernamesInput() {
        return this._usernames;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usernames),
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
            usernames: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usernames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
