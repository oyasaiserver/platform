// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile cloudflare_organization_profile}
*/
export class OrganizationProfileA extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_organization_profile";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationProfileA to import
    * @param importFromId The id of the existing OrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationProfileA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization_profile", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile cloudflare_organization_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationProfileAConfig
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
        this._businessAddress = config.businessAddress;
        this._businessEmail = config.businessEmail;
        this._businessName = config.businessName;
        this._businessPhone = config.businessPhone;
        this._externalMetadata = config.externalMetadata;
        this._organizationId = config.organizationId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // business_address - computed: false, optional: false, required: true
    _businessAddress;
    get businessAddress() {
        return this.getStringAttribute('business_address');
    }
    set businessAddress(value) {
        this._businessAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    get businessAddressInput() {
        return this._businessAddress;
    }
    // business_email - computed: false, optional: false, required: true
    _businessEmail;
    get businessEmail() {
        return this.getStringAttribute('business_email');
    }
    set businessEmail(value) {
        this._businessEmail = value;
    }
    // Temporarily expose input value. Use with caution.
    get businessEmailInput() {
        return this._businessEmail;
    }
    // business_name - computed: false, optional: false, required: true
    _businessName;
    get businessName() {
        return this.getStringAttribute('business_name');
    }
    set businessName(value) {
        this._businessName = value;
    }
    // Temporarily expose input value. Use with caution.
    get businessNameInput() {
        return this._businessName;
    }
    // business_phone - computed: false, optional: false, required: true
    _businessPhone;
    get businessPhone() {
        return this.getStringAttribute('business_phone');
    }
    set businessPhone(value) {
        this._businessPhone = value;
    }
    // Temporarily expose input value. Use with caution.
    get businessPhoneInput() {
        return this._businessPhone;
    }
    // external_metadata - computed: false, optional: false, required: true
    _externalMetadata;
    get externalMetadata() {
        return this.getStringAttribute('external_metadata');
    }
    set externalMetadata(value) {
        this._externalMetadata = value;
    }
    // Temporarily expose input value. Use with caution.
    get externalMetadataInput() {
        return this._externalMetadata;
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
            business_address: cdktf.stringToTerraform(this._businessAddress),
            business_email: cdktf.stringToTerraform(this._businessEmail),
            business_name: cdktf.stringToTerraform(this._businessName),
            business_phone: cdktf.stringToTerraform(this._businessPhone),
            external_metadata: cdktf.stringToTerraform(this._externalMetadata),
            organization_id: cdktf.stringToTerraform(this._organizationId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            business_address: {
                value: cdktf.stringToHclTerraform(this._businessAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            business_email: {
                value: cdktf.stringToHclTerraform(this._businessEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            business_name: {
                value: cdktf.stringToHclTerraform(this._businessName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            business_phone: {
                value: cdktf.stringToHclTerraform(this._businessPhone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            external_metadata: {
                value: cdktf.stringToHclTerraform(this._externalMetadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
