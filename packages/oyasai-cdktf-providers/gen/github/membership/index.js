// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership github_membership}
*/
export class Membership extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_membership";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Membership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Membership to import
    * @param importFromId The id of the existing Membership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Membership to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_membership", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership github_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MembershipConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_membership',
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
        this._downgradeOnDestroy = config.downgradeOnDestroy;
        this._id = config.id;
        this._role = config.role;
        this._username = config.username;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // downgrade_on_destroy - computed: false, optional: true, required: false
    _downgradeOnDestroy;
    get downgradeOnDestroy() {
        return this.getBooleanAttribute('downgrade_on_destroy');
    }
    set downgradeOnDestroy(value) {
        this._downgradeOnDestroy = value;
    }
    resetDowngradeOnDestroy() {
        this._downgradeOnDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get downgradeOnDestroyInput() {
        return this._downgradeOnDestroy;
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
    // role - computed: false, optional: true, required: false
    _role;
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
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
            downgrade_on_destroy: cdktf.booleanToTerraform(this._downgradeOnDestroy),
            id: cdktf.stringToTerraform(this._id),
            role: cdktf.stringToTerraform(this._role),
            username: cdktf.stringToTerraform(this._username),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            downgrade_on_destroy: {
                value: cdktf.booleanToHclTerraform(this._downgradeOnDestroy),
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
            role: {
                value: cdktf.stringToHclTerraform(this._role),
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
