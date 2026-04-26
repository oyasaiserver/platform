// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function organizationMetaFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function organizationMetaFlagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class OrganizationMetaFlagsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
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
    // account_creation - computed: true, optional: false, required: false
    get accountCreation() {
        return this.getStringAttribute('account_creation');
    }
    // account_deletion - computed: true, optional: false, required: false
    get accountDeletion() {
        return this.getStringAttribute('account_deletion');
    }
    // account_migration - computed: true, optional: false, required: false
    get accountMigration() {
        return this.getStringAttribute('account_migration');
    }
    // account_mobility - computed: true, optional: false, required: false
    get accountMobility() {
        return this.getStringAttribute('account_mobility');
    }
    // sub_org_creation - computed: true, optional: false, required: false
    get subOrgCreation() {
        return this.getStringAttribute('sub_org_creation');
    }
}
export function organizationMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function organizationMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class OrganizationMetaOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
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
    // flags - computed: true, optional: false, required: false
    _flags = new OrganizationMetaFlagsOutputReference(this, "flags");
    get flags() {
        return this._flags;
    }
    // managed_by - computed: true, optional: false, required: false
    get managedBy() {
        return this.getStringAttribute('managed_by');
    }
}
export function organizationParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function organizationParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class OrganizationParentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }
    // id - computed: true, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export function organizationProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        business_address: cdktf.stringToTerraform(struct.businessAddress),
        business_email: cdktf.stringToTerraform(struct.businessEmail),
        business_name: cdktf.stringToTerraform(struct.businessName),
        business_phone: cdktf.stringToTerraform(struct.businessPhone),
        external_metadata: cdktf.stringToTerraform(struct.externalMetadata),
    };
}
export function organizationProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        business_address: {
            value: cdktf.stringToHclTerraform(struct.businessAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_email: {
            value: cdktf.stringToHclTerraform(struct.businessEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_name: {
            value: cdktf.stringToHclTerraform(struct.businessName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_phone: {
            value: cdktf.stringToHclTerraform(struct.businessPhone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_metadata: {
            value: cdktf.stringToHclTerraform(struct.externalMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class OrganizationProfileOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._businessAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessAddress = this._businessAddress;
        }
        if (this._businessEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessEmail = this._businessEmail;
        }
        if (this._businessName !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessName = this._businessName;
        }
        if (this._businessPhone !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessPhone = this._businessPhone;
        }
        if (this._externalMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalMetadata = this._externalMetadata;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._businessAddress = undefined;
            this._businessEmail = undefined;
            this._businessName = undefined;
            this._businessPhone = undefined;
            this._externalMetadata = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._businessAddress = value.businessAddress;
            this._businessEmail = value.businessEmail;
            this._businessName = value.businessName;
            this._businessPhone = value.businessPhone;
            this._externalMetadata = value.externalMetadata;
        }
    }
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization cloudflare_organization}
*/
export class Organization extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_organization";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Organization to import
    * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Organization to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization cloudflare_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_organization',
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
        this._name = config.name;
        this._parent.internalValue = config.parent;
        this._profile.internalValue = config.profile;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // create_time - computed: true, optional: false, required: false
    get createTime() {
        return this.getStringAttribute('create_time');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // meta - computed: true, optional: false, required: false
    _meta = new OrganizationMetaOutputReference(this, "meta");
    get meta() {
        return this._meta;
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
    // parent - computed: true, optional: true, required: false
    _parent = new OrganizationParentOutputReference(this, "parent");
    get parent() {
        return this._parent;
    }
    putParent(value) {
        this._parent.internalValue = value;
    }
    resetParent() {
        this._parent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentInput() {
        return this._parent.internalValue;
    }
    // profile - computed: false, optional: true, required: false
    _profile = new OrganizationProfileOutputReference(this, "profile");
    get profile() {
        return this._profile;
    }
    putProfile(value) {
        this._profile.internalValue = value;
    }
    resetProfile() {
        this._profile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get profileInput() {
        return this._profile.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            parent: organizationParentToTerraform(this._parent.internalValue),
            profile: organizationProfileToTerraform(this._profile.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent: {
                value: organizationParentToHclTerraform(this._parent.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "OrganizationParent",
            },
            profile: {
                value: organizationProfileToHclTerraform(this._profile.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "OrganizationProfile",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
