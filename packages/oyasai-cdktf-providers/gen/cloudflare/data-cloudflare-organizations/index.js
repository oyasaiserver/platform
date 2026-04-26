// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareOrganizationsContainingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account: cdktf.stringToTerraform(struct.account),
        organization: cdktf.stringToTerraform(struct.organization),
        user: cdktf.stringToTerraform(struct.user),
    };
}
export function dataCloudflareOrganizationsContainingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        account: {
            value: cdktf.stringToHclTerraform(struct.account),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization: {
            value: cdktf.stringToHclTerraform(struct.organization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareOrganizationsContainingOutputReference extends cdktf.ComplexObject {
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
        if (this._account !== undefined) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._organization !== undefined) {
            hasAnyValues = true;
            internalValueResult.organization = this._organization;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._account = undefined;
            this._organization = undefined;
            this._user = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._account = value.account;
            this._organization = value.organization;
            this._user = value.user;
        }
    }
    // account - computed: false, optional: true, required: false
    _account;
    get account() {
        return this.getStringAttribute('account');
    }
    set account(value) {
        this._account = value;
    }
    resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountInput() {
        return this._account;
    }
    // organization - computed: false, optional: true, required: false
    _organization;
    get organization() {
        return this.getStringAttribute('organization');
    }
    set organization(value) {
        this._organization = value;
    }
    resetOrganization() {
        this._organization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get organizationInput() {
        return this._organization;
    }
    // user - computed: false, optional: true, required: false
    _user;
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
}
export function dataCloudflareOrganizationsNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        ends_with: cdktf.stringToTerraform(struct.endsWith),
        starts_with: cdktf.stringToTerraform(struct.startsWith),
    };
}
export function dataCloudflareOrganizationsNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ends_with: {
            value: cdktf.stringToHclTerraform(struct.endsWith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        starts_with: {
            value: cdktf.stringToHclTerraform(struct.startsWith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareOrganizationsNameOutputReference extends cdktf.ComplexObject {
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
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._endsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endsWith = this._endsWith;
        }
        if (this._startsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startsWith = this._startsWith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contains = undefined;
            this._endsWith = undefined;
            this._startsWith = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contains = value.contains;
            this._endsWith = value.endsWith;
            this._startsWith = value.startsWith;
        }
    }
    // contains - computed: false, optional: true, required: false
    _contains;
    get contains() {
        return this.getStringAttribute('contains');
    }
    set contains(value) {
        this._contains = value;
    }
    resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containsInput() {
        return this._contains;
    }
    // ends_with - computed: false, optional: true, required: false
    _endsWith;
    get endsWith() {
        return this.getStringAttribute('ends_with');
    }
    set endsWith(value) {
        this._endsWith = value;
    }
    resetEndsWith() {
        this._endsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endsWithInput() {
        return this._endsWith;
    }
    // starts_with - computed: false, optional: true, required: false
    _startsWith;
    get startsWith() {
        return this.getStringAttribute('starts_with');
    }
    set startsWith(value) {
        this._startsWith = value;
    }
    resetStartsWith() {
        this._startsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startsWithInput() {
        return this._startsWith;
    }
}
export function dataCloudflareOrganizationsParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationsParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationsParentOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
export function dataCloudflareOrganizationsResultMetaFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationsResultMetaFlagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationsResultMetaFlagsOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareOrganizationsResultMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationsResultMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationsResultMetaOutputReference extends cdktf.ComplexObject {
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
    _flags = new DataCloudflareOrganizationsResultMetaFlagsOutputReference(this, "flags");
    get flags() {
        return this._flags;
    }
    // managed_by - computed: true, optional: false, required: false
    get managedBy() {
        return this.getStringAttribute('managed_by');
    }
}
export function dataCloudflareOrganizationsResultParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationsResultParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationsResultParentOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export function dataCloudflareOrganizationsResultProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationsResultProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationsResultProfileOutputReference extends cdktf.ComplexObject {
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
}
export function dataCloudflareOrganizationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationsResultOutputReference extends cdktf.ComplexObject {
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
    // create_time - computed: true, optional: false, required: false
    get createTime() {
        return this.getStringAttribute('create_time');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // meta - computed: true, optional: false, required: false
    _meta = new DataCloudflareOrganizationsResultMetaOutputReference(this, "meta");
    get meta() {
        return this._meta;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // parent - computed: true, optional: false, required: false
    _parent = new DataCloudflareOrganizationsResultParentOutputReference(this, "parent");
    get parent() {
        return this._parent;
    }
    // profile - computed: true, optional: false, required: false
    _profile = new DataCloudflareOrganizationsResultProfileOutputReference(this, "profile");
    get profile() {
        return this._profile;
    }
}
export class DataCloudflareOrganizationsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareOrganizationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations cloudflare_organizations}
*/
export class DataCloudflareOrganizations extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_organizations";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganizations to import
    * @param importFromId The id of the existing DataCloudflareOrganizations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganizations to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organizations", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations cloudflare_organizations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_organizations',
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
        this._containing.internalValue = config.containing;
        this._id = config.id;
        this._maxItems = config.maxItems;
        this._name.internalValue = config.name;
        this._pageSize = config.pageSize;
        this._pageToken = config.pageToken;
        this._parent.internalValue = config.parent;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // containing - computed: false, optional: true, required: false
    _containing = new DataCloudflareOrganizationsContainingOutputReference(this, "containing");
    get containing() {
        return this._containing;
    }
    putContaining(value) {
        this._containing.internalValue = value;
    }
    resetContaining() {
        this._containing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containingInput() {
        return this._containing.internalValue;
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getListAttribute('id');
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // name - computed: false, optional: true, required: false
    _name = new DataCloudflareOrganizationsNameOutputReference(this, "name");
    get name() {
        return this._name;
    }
    putName(value) {
        this._name.internalValue = value;
    }
    resetName() {
        this._name.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name.internalValue;
    }
    // page_size - computed: false, optional: true, required: false
    _pageSize;
    get pageSize() {
        return this.getNumberAttribute('page_size');
    }
    set pageSize(value) {
        this._pageSize = value;
    }
    resetPageSize() {
        this._pageSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pageSizeInput() {
        return this._pageSize;
    }
    // page_token - computed: false, optional: true, required: false
    _pageToken;
    get pageToken() {
        return this.getStringAttribute('page_token');
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    resetPageToken() {
        this._pageToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pageTokenInput() {
        return this._pageToken;
    }
    // parent - computed: false, optional: true, required: false
    _parent = new DataCloudflareOrganizationsParentOutputReference(this, "parent");
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
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareOrganizationsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            containing: dataCloudflareOrganizationsContainingToTerraform(this._containing.internalValue),
            id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._id),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: dataCloudflareOrganizationsNameToTerraform(this._name.internalValue),
            page_size: cdktf.numberToTerraform(this._pageSize),
            page_token: cdktf.stringToTerraform(this._pageToken),
            parent: dataCloudflareOrganizationsParentToTerraform(this._parent.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            containing: {
                value: dataCloudflareOrganizationsContainingToHclTerraform(this._containing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationsContaining",
            },
            id: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._id),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: dataCloudflareOrganizationsNameToHclTerraform(this._name.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationsName",
            },
            page_size: {
                value: cdktf.numberToHclTerraform(this._pageSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            page_token: {
                value: cdktf.stringToHclTerraform(this._pageToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent: {
                value: dataCloudflareOrganizationsParentToHclTerraform(this._parent.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationsParent",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
