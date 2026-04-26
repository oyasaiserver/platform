// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareOrganizationFilterContainingToTerraform(struct) {
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
export function dataCloudflareOrganizationFilterContainingToHclTerraform(struct) {
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
export class DataCloudflareOrganizationFilterContainingOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareOrganizationFilterNameToTerraform(struct) {
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
export function dataCloudflareOrganizationFilterNameToHclTerraform(struct) {
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
export class DataCloudflareOrganizationFilterNameOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareOrganizationFilterParentToTerraform(struct) {
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
export function dataCloudflareOrganizationFilterParentToHclTerraform(struct) {
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
export class DataCloudflareOrganizationFilterParentOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: true, required: false
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
}
export function dataCloudflareOrganizationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        containing: dataCloudflareOrganizationFilterContainingToTerraform(struct.containing),
        id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.id),
        name: dataCloudflareOrganizationFilterNameToTerraform(struct.name),
        page_size: cdktf.numberToTerraform(struct.pageSize),
        page_token: cdktf.stringToTerraform(struct.pageToken),
        parent: dataCloudflareOrganizationFilterParentToTerraform(struct.parent),
    };
}
export function dataCloudflareOrganizationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        containing: {
            value: dataCloudflareOrganizationFilterContainingToHclTerraform(struct.containing),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareOrganizationFilterContaining",
        },
        id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.id),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: dataCloudflareOrganizationFilterNameToHclTerraform(struct.name),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareOrganizationFilterName",
        },
        page_size: {
            value: cdktf.numberToHclTerraform(struct.pageSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        page_token: {
            value: cdktf.stringToHclTerraform(struct.pageToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parent: {
            value: dataCloudflareOrganizationFilterParentToHclTerraform(struct.parent),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareOrganizationFilterParent",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareOrganizationFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._containing?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containing = this._containing?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name?.internalValue;
        }
        if (this._pageSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.pageSize = this._pageSize;
        }
        if (this._pageToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.pageToken = this._pageToken;
        }
        if (this._parent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parent = this._parent?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containing.internalValue = undefined;
            this._id = undefined;
            this._name.internalValue = undefined;
            this._pageSize = undefined;
            this._pageToken = undefined;
            this._parent.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containing.internalValue = value.containing;
            this._id = value.id;
            this._name.internalValue = value.name;
            this._pageSize = value.pageSize;
            this._pageToken = value.pageToken;
            this._parent.internalValue = value.parent;
        }
    }
    // containing - computed: false, optional: true, required: false
    _containing = new DataCloudflareOrganizationFilterContainingOutputReference(this, "containing");
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
    // name - computed: false, optional: true, required: false
    _name = new DataCloudflareOrganizationFilterNameOutputReference(this, "name");
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
    _parent = new DataCloudflareOrganizationFilterParentOutputReference(this, "parent");
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
}
export function dataCloudflareOrganizationMetaFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationMetaFlagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationMetaFlagsOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareOrganizationMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationMetaOutputReference extends cdktf.ComplexObject {
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
    _flags = new DataCloudflareOrganizationMetaFlagsOutputReference(this, "flags");
    get flags() {
        return this._flags;
    }
    // managed_by - computed: true, optional: false, required: false
    get managedBy() {
        return this.getStringAttribute('managed_by');
    }
}
export function dataCloudflareOrganizationParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationParentOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareOrganizationProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareOrganizationProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareOrganizationProfileOutputReference extends cdktf.ComplexObject {
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization cloudflare_organization}
*/
export class DataCloudflareOrganization extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_organization";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganization to import
    * @param importFromId The id of the existing DataCloudflareOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganization to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization cloudflare_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._filter.internalValue = config.filter;
        this._organizationId = config.organizationId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // create_time - computed: true, optional: false, required: false
    get createTime() {
        return this.getStringAttribute('create_time');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareOrganizationFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // meta - computed: true, optional: false, required: false
    _meta = new DataCloudflareOrganizationMetaOutputReference(this, "meta");
    get meta() {
        return this._meta;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // organization_id - computed: false, optional: true, required: false
    _organizationId;
    get organizationId() {
        return this.getStringAttribute('organization_id');
    }
    set organizationId(value) {
        this._organizationId = value;
    }
    resetOrganizationId() {
        this._organizationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get organizationIdInput() {
        return this._organizationId;
    }
    // parent - computed: true, optional: false, required: false
    _parent = new DataCloudflareOrganizationParentOutputReference(this, "parent");
    get parent() {
        return this._parent;
    }
    // profile - computed: true, optional: false, required: false
    _profile = new DataCloudflareOrganizationProfileOutputReference(this, "profile");
    get profile() {
        return this._profile;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            filter: dataCloudflareOrganizationFilterToTerraform(this._filter.internalValue),
            organization_id: cdktf.stringToTerraform(this._organizationId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            filter: {
                value: dataCloudflareOrganizationFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOrganizationFilter",
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
