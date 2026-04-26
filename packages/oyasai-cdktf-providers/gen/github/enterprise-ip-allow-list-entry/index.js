// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}
*/
export class EnterpriseIpAllowListEntry extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_enterprise_ip_allow_list_entry";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseIpAllowListEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseIpAllowListEntry to import
    * @param importFromId The id of the existing EnterpriseIpAllowListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_ip_allow_list_entry", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseIpAllowListEntryConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_enterprise_ip_allow_list_entry',
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
        this._enterpriseSlug = config.enterpriseSlug;
        this._id = config.id;
        this._ip = config.ip;
        this._isActive = config.isActive;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // enterprise_slug - computed: false, optional: false, required: true
    _enterpriseSlug;
    get enterpriseSlug() {
        return this.getStringAttribute('enterprise_slug');
    }
    set enterpriseSlug(value) {
        this._enterpriseSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get enterpriseSlugInput() {
        return this._enterpriseSlug;
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
    // ip - computed: false, optional: false, required: true
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
    // is_active - computed: false, optional: true, required: false
    _isActive;
    get isActive() {
        return this.getBooleanAttribute('is_active');
    }
    set isActive(value) {
        this._isActive = value;
    }
    resetIsActive() {
        this._isActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isActiveInput() {
        return this._isActive;
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
            ip: cdktf.stringToTerraform(this._ip),
            is_active: cdktf.booleanToTerraform(this._isActive),
            name: cdktf.stringToTerraform(this._name),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            enterprise_slug: {
                value: cdktf.stringToHclTerraform(this._enterpriseSlug),
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
            ip: {
                value: cdktf.stringToHclTerraform(this._ip),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_active: {
                value: cdktf.booleanToHclTerraform(this._isActive),
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
