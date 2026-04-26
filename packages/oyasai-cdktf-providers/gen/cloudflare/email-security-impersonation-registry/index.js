// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
export class EmailSecurityImpersonationRegistry extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_email_security_impersonation_registry";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import
    * @param importFromId The id of the existing EmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_impersonation_registry", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityImpersonationRegistryConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_email_security_impersonation_registry',
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
        this._email = config.email;
        this._isEmailRegex = config.isEmailRegex;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // comments - computed: true, optional: false, required: false
    get comments() {
        return this.getStringAttribute('comments');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // directory_id - computed: true, optional: false, required: false
    get directoryId() {
        return this.getNumberAttribute('directory_id');
    }
    // directory_node_id - computed: true, optional: false, required: false
    get directoryNodeId() {
        return this.getNumberAttribute('directory_node_id');
    }
    // email - computed: false, optional: false, required: true
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // external_directory_node_id - computed: true, optional: false, required: false
    get externalDirectoryNodeId() {
        return this.getStringAttribute('external_directory_node_id');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // is_email_regex - computed: false, optional: false, required: true
    _isEmailRegex;
    get isEmailRegex() {
        return this.getBooleanAttribute('is_email_regex');
    }
    set isEmailRegex(value) {
        this._isEmailRegex = value;
    }
    // Temporarily expose input value. Use with caution.
    get isEmailRegexInput() {
        return this._isEmailRegex;
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
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
    // provenance - computed: true, optional: false, required: false
    get provenance() {
        return this.getStringAttribute('provenance');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            email: cdktf.stringToTerraform(this._email),
            is_email_regex: cdktf.booleanToTerraform(this._isEmailRegex),
            name: cdktf.stringToTerraform(this._name),
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
            email: {
                value: cdktf.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_email_regex: {
                value: cdktf.booleanToHclTerraform(this._isEmailRegex),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
