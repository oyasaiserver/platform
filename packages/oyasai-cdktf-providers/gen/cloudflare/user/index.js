// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function userOrganizationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function userOrganizationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class UserOrganizationsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // roles - computed: true, optional: false, required: false
    get roles() {
        return this.getListAttribute('roles');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export class UserOrganizationsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new UserOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user cloudflare_user}
*/
export class User extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_user";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the User to import
    * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the User to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user cloudflare_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_user',
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
        this._country = config.country;
        this._firstName = config.firstName;
        this._lastName = config.lastName;
        this._telephone = config.telephone;
        this._zipcode = config.zipcode;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // betas - computed: true, optional: false, required: false
    get betas() {
        return this.getListAttribute('betas');
    }
    // country - computed: false, optional: true, required: false
    _country;
    get country() {
        return this.getStringAttribute('country');
    }
    set country(value) {
        this._country = value;
    }
    resetCountry() {
        this._country = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countryInput() {
        return this._country;
    }
    // first_name - computed: false, optional: true, required: false
    _firstName;
    get firstName() {
        return this.getStringAttribute('first_name');
    }
    set firstName(value) {
        this._firstName = value;
    }
    resetFirstName() {
        this._firstName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firstNameInput() {
        return this._firstName;
    }
    // has_business_zones - computed: true, optional: false, required: false
    get hasBusinessZones() {
        return this.getBooleanAttribute('has_business_zones');
    }
    // has_enterprise_zones - computed: true, optional: false, required: false
    get hasEnterpriseZones() {
        return this.getBooleanAttribute('has_enterprise_zones');
    }
    // has_pro_zones - computed: true, optional: false, required: false
    get hasProZones() {
        return this.getBooleanAttribute('has_pro_zones');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_name - computed: false, optional: true, required: false
    _lastName;
    get lastName() {
        return this.getStringAttribute('last_name');
    }
    set lastName(value) {
        this._lastName = value;
    }
    resetLastName() {
        this._lastName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lastNameInput() {
        return this._lastName;
    }
    // organizations - computed: true, optional: false, required: false
    _organizations = new UserOrganizationsList(this, "organizations", false);
    get organizations() {
        return this._organizations;
    }
    // suspended - computed: true, optional: false, required: false
    get suspended() {
        return this.getBooleanAttribute('suspended');
    }
    // telephone - computed: false, optional: true, required: false
    _telephone;
    get telephone() {
        return this.getStringAttribute('telephone');
    }
    set telephone(value) {
        this._telephone = value;
    }
    resetTelephone() {
        this._telephone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get telephoneInput() {
        return this._telephone;
    }
    // two_factor_authentication_enabled - computed: true, optional: false, required: false
    get twoFactorAuthenticationEnabled() {
        return this.getBooleanAttribute('two_factor_authentication_enabled');
    }
    // two_factor_authentication_locked - computed: true, optional: false, required: false
    get twoFactorAuthenticationLocked() {
        return this.getBooleanAttribute('two_factor_authentication_locked');
    }
    // zipcode - computed: false, optional: true, required: false
    _zipcode;
    get zipcode() {
        return this.getStringAttribute('zipcode');
    }
    set zipcode(value) {
        this._zipcode = value;
    }
    resetZipcode() {
        this._zipcode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zipcodeInput() {
        return this._zipcode;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            country: cdktf.stringToTerraform(this._country),
            first_name: cdktf.stringToTerraform(this._firstName),
            last_name: cdktf.stringToTerraform(this._lastName),
            telephone: cdktf.stringToTerraform(this._telephone),
            zipcode: cdktf.stringToTerraform(this._zipcode),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            country: {
                value: cdktf.stringToHclTerraform(this._country),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            first_name: {
                value: cdktf.stringToHclTerraform(this._firstName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            last_name: {
                value: cdktf.stringToHclTerraform(this._lastName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            telephone: {
                value: cdktf.stringToHclTerraform(this._telephone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zipcode: {
                value: cdktf.stringToHclTerraform(this._zipcode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
