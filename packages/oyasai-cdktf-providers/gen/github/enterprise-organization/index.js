// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization github_enterprise_organization}
*/
export class EnterpriseOrganization extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_enterprise_organization";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseOrganization to import
    * @param importFromId The id of the existing EnterpriseOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseOrganization to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_organization", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization github_enterprise_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseOrganizationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_enterprise_organization',
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
        this._adminLogins = config.adminLogins;
        this._billingEmail = config.billingEmail;
        this._description = config.description;
        this._displayName = config.displayName;
        this._enterpriseId = config.enterpriseId;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // admin_logins - computed: false, optional: false, required: true
    _adminLogins;
    get adminLogins() {
        return cdktf.Fn.tolist(this.getListAttribute('admin_logins'));
    }
    set adminLogins(value) {
        this._adminLogins = value;
    }
    // Temporarily expose input value. Use with caution.
    get adminLoginsInput() {
        return this._adminLogins;
    }
    // billing_email - computed: false, optional: false, required: true
    _billingEmail;
    get billingEmail() {
        return this.getStringAttribute('billing_email');
    }
    set billingEmail(value) {
        this._billingEmail = value;
    }
    // Temporarily expose input value. Use with caution.
    get billingEmailInput() {
        return this._billingEmail;
    }
    // database_id - computed: true, optional: false, required: false
    get databaseId() {
        return this.getNumberAttribute('database_id');
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
    // display_name - computed: false, optional: true, required: false
    _displayName;
    get displayName() {
        return this.getStringAttribute('display_name');
    }
    set displayName(value) {
        this._displayName = value;
    }
    resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get displayNameInput() {
        return this._displayName;
    }
    // enterprise_id - computed: false, optional: false, required: true
    _enterpriseId;
    get enterpriseId() {
        return this.getStringAttribute('enterprise_id');
    }
    set enterpriseId(value) {
        this._enterpriseId = value;
    }
    // Temporarily expose input value. Use with caution.
    get enterpriseIdInput() {
        return this._enterpriseId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            admin_logins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminLogins),
            billing_email: cdktf.stringToTerraform(this._billingEmail),
            description: cdktf.stringToTerraform(this._description),
            display_name: cdktf.stringToTerraform(this._displayName),
            enterprise_id: cdktf.stringToTerraform(this._enterpriseId),
            name: cdktf.stringToTerraform(this._name),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            admin_logins: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminLogins),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            billing_email: {
                value: cdktf.stringToHclTerraform(this._billingEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktf.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enterprise_id: {
                value: cdktf.stringToHclTerraform(this._enterpriseId),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
