// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role github_organization_custom_role}
*/
export class OrganizationCustomRole extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_organization_custom_role";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationCustomRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationCustomRole to import
    * @param importFromId The id of the existing OrganizationCustomRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationCustomRole to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_custom_role", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role github_organization_custom_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationCustomRoleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_organization_custom_role',
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
        this._baseRole = config.baseRole;
        this._description = config.description;
        this._id = config.id;
        this._name = config.name;
        this._permissions = config.permissions;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // base_role - computed: false, optional: false, required: true
    _baseRole;
    get baseRole() {
        return this.getStringAttribute('base_role');
    }
    set baseRole(value) {
        this._baseRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get baseRoleInput() {
        return this._baseRole;
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
    // permissions - computed: false, optional: false, required: true
    _permissions;
    get permissions() {
        return cdktf.Fn.tolist(this.getListAttribute('permissions'));
    }
    set permissions(value) {
        this._permissions = value;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            base_role: cdktf.stringToTerraform(this._baseRole),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            base_role: {
                value: cdktf.stringToHclTerraform(this._baseRole),
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
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            permissions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
