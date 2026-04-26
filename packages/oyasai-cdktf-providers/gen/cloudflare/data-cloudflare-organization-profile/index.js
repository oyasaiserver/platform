// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile cloudflare_organization_profile}
*/
export class DataCloudflareOrganizationProfileA extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_organization_profile";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganizationProfileA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganizationProfileA to import
    * @param importFromId The id of the existing DataCloudflareOrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganizationProfileA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization_profile", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile cloudflare_organization_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationProfileAConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_organization_profile',
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
        this._organizationId = config.organizationId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // business_address - computed: true, optional: false, required: false
    get businessAddress() {
        return this.getStringAttribute('business_address');
    }
    // business_email - computed: true, optional: false, required: false
    get businessEmail() {
        return this.getStringAttribute('business_email');
    }
    // business_name - computed: true, optional: false, required: false
    get businessName() {
        return this.getStringAttribute('business_name');
    }
    // business_phone - computed: true, optional: false, required: false
    get businessPhone() {
        return this.getStringAttribute('business_phone');
    }
    // external_metadata - computed: true, optional: false, required: false
    get externalMetadata() {
        return this.getStringAttribute('external_metadata');
    }
    // organization_id - computed: false, optional: false, required: true
    _organizationId;
    get organizationId() {
        return this.getStringAttribute('organization_id');
    }
    set organizationId(value) {
        this._organizationId = value;
    }
    // Temporarily expose input value. Use with caution.
    get organizationIdInput() {
        return this._organizationId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            organization_id: cdktf.stringToTerraform(this._organizationId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            organization_id: {
                value: cdktf.stringToHclTerraform(this._organizationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
