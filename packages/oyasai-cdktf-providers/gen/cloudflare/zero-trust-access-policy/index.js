// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustAccessPolicyApprovalGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        approvals_needed: cdktf.numberToTerraform(struct.approvalsNeeded),
        email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.emailAddresses),
        email_list_uuid: cdktf.stringToTerraform(struct.emailListUuid),
    };
}
export function zeroTrustAccessPolicyApprovalGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        approvals_needed: {
            value: cdktf.numberToHclTerraform(struct.approvalsNeeded),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        email_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.emailAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        email_list_uuid: {
            value: cdktf.stringToHclTerraform(struct.emailListUuid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyApprovalGroupsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._approvalsNeeded !== undefined) {
            hasAnyValues = true;
            internalValueResult.approvalsNeeded = this._approvalsNeeded;
        }
        if (this._emailAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddresses = this._emailAddresses;
        }
        if (this._emailListUuid !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailListUuid = this._emailListUuid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._approvalsNeeded = undefined;
            this._emailAddresses = undefined;
            this._emailListUuid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._approvalsNeeded = value.approvalsNeeded;
            this._emailAddresses = value.emailAddresses;
            this._emailListUuid = value.emailListUuid;
        }
    }
    // approvals_needed - computed: false, optional: false, required: true
    _approvalsNeeded;
    get approvalsNeeded() {
        return this.getNumberAttribute('approvals_needed');
    }
    set approvalsNeeded(value) {
        this._approvalsNeeded = value;
    }
    // Temporarily expose input value. Use with caution.
    get approvalsNeededInput() {
        return this._approvalsNeeded;
    }
    // email_addresses - computed: false, optional: true, required: false
    _emailAddresses;
    get emailAddresses() {
        return this.getListAttribute('email_addresses');
    }
    set emailAddresses(value) {
        this._emailAddresses = value;
    }
    resetEmailAddresses() {
        this._emailAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailAddressesInput() {
        return this._emailAddresses;
    }
    // email_list_uuid - computed: false, optional: true, required: false
    _emailListUuid;
    get emailListUuid() {
        return this.getStringAttribute('email_list_uuid');
    }
    set emailListUuid(value) {
        this._emailListUuid = value;
    }
    resetEmailListUuid() {
        this._emailListUuid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListUuidInput() {
        return this._emailListUuid;
    }
}
export class ZeroTrustAccessPolicyApprovalGroupsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessPolicyApprovalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_clipboard_local_to_remote_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedClipboardLocalToRemoteFormats),
        allowed_clipboard_remote_to_local_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedClipboardRemoteToLocalFormats),
    };
}
export function zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_clipboard_local_to_remote_formats: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedClipboardLocalToRemoteFormats),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_clipboard_remote_to_local_formats: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedClipboardRemoteToLocalFormats),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyConnectionRulesRdpOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedClipboardLocalToRemoteFormats !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedClipboardLocalToRemoteFormats = this._allowedClipboardLocalToRemoteFormats;
        }
        if (this._allowedClipboardRemoteToLocalFormats !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedClipboardRemoteToLocalFormats = this._allowedClipboardRemoteToLocalFormats;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedClipboardLocalToRemoteFormats = undefined;
            this._allowedClipboardRemoteToLocalFormats = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedClipboardLocalToRemoteFormats = value.allowedClipboardLocalToRemoteFormats;
            this._allowedClipboardRemoteToLocalFormats = value.allowedClipboardRemoteToLocalFormats;
        }
    }
    // allowed_clipboard_local_to_remote_formats - computed: false, optional: true, required: false
    _allowedClipboardLocalToRemoteFormats;
    get allowedClipboardLocalToRemoteFormats() {
        return this.getListAttribute('allowed_clipboard_local_to_remote_formats');
    }
    set allowedClipboardLocalToRemoteFormats(value) {
        this._allowedClipboardLocalToRemoteFormats = value;
    }
    resetAllowedClipboardLocalToRemoteFormats() {
        this._allowedClipboardLocalToRemoteFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedClipboardLocalToRemoteFormatsInput() {
        return this._allowedClipboardLocalToRemoteFormats;
    }
    // allowed_clipboard_remote_to_local_formats - computed: false, optional: true, required: false
    _allowedClipboardRemoteToLocalFormats;
    get allowedClipboardRemoteToLocalFormats() {
        return this.getListAttribute('allowed_clipboard_remote_to_local_formats');
    }
    set allowedClipboardRemoteToLocalFormats(value) {
        this._allowedClipboardRemoteToLocalFormats = value;
    }
    resetAllowedClipboardRemoteToLocalFormats() {
        this._allowedClipboardRemoteToLocalFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedClipboardRemoteToLocalFormatsInput() {
        return this._allowedClipboardRemoteToLocalFormats;
    }
}
export function zeroTrustAccessPolicyConnectionRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rdp: zeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct.rdp),
    };
}
export function zeroTrustAccessPolicyConnectionRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        rdp: {
            value: zeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct.rdp),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyConnectionRulesRdp",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyConnectionRulesOutputReference extends cdktf.ComplexObject {
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
        if (this._rdp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdp = this._rdp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rdp.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rdp.internalValue = value.rdp;
        }
    }
    // rdp - computed: false, optional: true, required: false
    _rdp = new ZeroTrustAccessPolicyConnectionRulesRdpOutputReference(this, "rdp");
    get rdp() {
        return this._rdp;
    }
    putRdp(value) {
        this._rdp.internalValue = value;
    }
    resetRdp() {
        this._rdp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rdpInput() {
        return this._rdp.internalValue;
    }
}
export function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeAuthContextOutputReference extends cdktf.ComplexObject {
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
        if (this._acId !== undefined) {
            hasAnyValues = true;
            internalValueResult.acId = this._acId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acId = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acId = value.acId;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // ac_id - computed: false, optional: false, required: true
    _acId;
    get acId() {
        return this.getStringAttribute('ac_id');
    }
    set acId(value) {
        this._acId = value;
    }
    // Temporarily expose input value. Use with caution.
    get acIdInput() {
        return this._acId;
    }
    // id - computed: false, optional: false, required: true
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
export function zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMethod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMethod = value.authMethod;
        }
    }
    // auth_method - computed: false, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
}
export function zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct) {
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
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeAzureAdOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // id - computed: false, optional: false, required: true
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyExcludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyExcludeCertificateOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
export function zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeCommonNameOutputReference extends cdktf.ComplexObject {
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
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
        }
    }
    // common_name - computed: false, optional: false, required: true
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
}
export function zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
export function zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
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
        if (this._integrationUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationUid = this._integrationUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integrationUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integrationUid = value.integrationUid;
        }
    }
    // integration_uid - computed: false, optional: false, required: true
    _integrationUid;
    get integrationUid() {
        return this.getStringAttribute('integration_uid');
    }
    set integrationUid(value) {
        this._integrationUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUidInput() {
        return this._integrationUid;
    }
}
export function zeroTrustAccessPolicyExcludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
export function zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeEmailOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
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
}
export function zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
export function zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
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
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
export function zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct) {
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
export function zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyExcludeEveryoneOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
export function zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
        if (this._evaluateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateUrl = this._evaluateUrl;
        }
        if (this._keysUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.keysUrl = this._keysUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluateUrl = undefined;
            this._keysUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluateUrl = value.evaluateUrl;
            this._keysUrl = value.keysUrl;
        }
    }
    // evaluate_url - computed: false, optional: false, required: true
    _evaluateUrl;
    get evaluateUrl() {
        return this.getStringAttribute('evaluate_url');
    }
    set evaluateUrl(value) {
        this._evaluateUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateUrlInput() {
        return this._evaluateUrl;
    }
    // keys_url - computed: false, optional: false, required: true
    _keysUrl;
    get keysUrl() {
        return this.getStringAttribute('keys_url');
    }
    set keysUrl(value) {
        this._keysUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysUrlInput() {
        return this._keysUrl;
    }
}
export function zeroTrustAccessPolicyExcludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
export function zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeGeoOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
        }
    }
    // country_code - computed: false, optional: false, required: true
    _countryCode;
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    set countryCode(value) {
        this._countryCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodeInput() {
        return this._countryCode;
    }
}
export function zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
export function zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._team !== undefined) {
            hasAnyValues = true;
            internalValueResult.team = this._team;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
            this._team = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
            this._team = value.team;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
    // team - computed: false, optional: true, required: false
    _team;
    get team() {
        return this.getStringAttribute('team');
    }
    set team(value) {
        this._team = value;
    }
    resetTeam() {
        this._team = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team;
    }
}
export function zeroTrustAccessPolicyExcludeGroupToTerraform(struct) {
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
export function zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyExcludeGroupOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._identityProviderId = value.identityProviderId;
        }
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyExcludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function zeroTrustAccessPolicyExcludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
        }
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
}
export function zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct) {
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
export function zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyExcludeIpListStructOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
export function zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._appUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.appUid = this._appUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appUid = value.appUid;
        }
    }
    // app_uid - computed: false, optional: false, required: true
    _appUid;
    get appUid() {
        return this.getStringAttribute('app_uid');
    }
    set appUid(value) {
        this._appUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get appUidInput() {
        return this._appUid;
    }
}
export function zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct) {
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
export function zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyExcludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._claimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimName = this._claimName;
        }
        if (this._claimValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimValue = this._claimValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimName = undefined;
            this._claimValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimName = value.claimName;
            this._claimValue = value.claimValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // claim_name - computed: false, optional: false, required: true
    _claimName;
    get claimName() {
        return this.getStringAttribute('claim_name');
    }
    set claimName(value) {
        this._claimName = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimNameInput() {
        return this._claimName;
    }
    // claim_value - computed: false, optional: false, required: true
    _claimValue;
    get claimValue() {
        return this.getStringAttribute('claim_value');
    }
    set claimValue(value) {
        this._claimValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimValueInput() {
        return this._claimValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyExcludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeOktaOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
}
export function zeroTrustAccessPolicyExcludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeSamlOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValue = this._attributeValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeValue = value.attributeValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // attribute_name - computed: false, optional: false, required: true
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // attribute_value - computed: false, optional: false, required: true
    _attributeValue;
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
    set attributeValue(value) {
        this._attributeValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeValueInput() {
        return this._attributeValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
export function zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._tokenId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenId = this._tokenId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenId = value.tokenId;
        }
    }
    // token_id - computed: false, optional: false, required: true
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
}
export function zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        user_risk_score: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.userRiskScore),
    };
}
export function zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        user_risk_score: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.userRiskScore),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
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
        if (this._userRiskScore !== undefined) {
            hasAnyValues = true;
            internalValueResult.userRiskScore = this._userRiskScore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._userRiskScore = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._userRiskScore = value.userRiskScore;
        }
    }
    // user_risk_score - computed: false, optional: false, required: true
    _userRiskScore;
    get userRiskScore() {
        return this.getListAttribute('user_risk_score');
    }
    set userRiskScore(value) {
        this._userRiskScore = value;
    }
    // Temporarily expose input value. Use with caution.
    get userRiskScoreInput() {
        return this._userRiskScore;
    }
}
export function zeroTrustAccessPolicyExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessPolicyExcludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessPolicyExcludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessPolicyExcludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessPolicyExcludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessPolicyExcludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessPolicyExcludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessPolicyExcludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessPolicyExcludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessPolicyExcludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessPolicyExcludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessPolicyExcludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessPolicyExcludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessPolicyExcludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessPolicyExcludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
export function zeroTrustAccessPolicyExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessPolicyExcludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessPolicyExcludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessPolicyExcludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeGsuite",
        },
        ip: {
            value: zeroTrustAccessPolicyExcludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeIp",
        },
        ip_list: {
            value: zeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessPolicyExcludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeOidc",
        },
        okta: {
            value: zeroTrustAccessPolicyExcludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeOkta",
        },
        saml: {
            value: zeroTrustAccessPolicyExcludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeSaml",
        },
        service_token: {
            value: zeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyExcludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyExcludeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._anyValidServiceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
        }
        if (this._authContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authContext = this._authContext?.internalValue;
        }
        if (this._authMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod?.internalValue;
        }
        if (this._azureAd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureAd = this._azureAd?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._commonName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName?.internalValue;
        }
        if (this._devicePosture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devicePosture = this._devicePosture?.internalValue;
        }
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._emailDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailDomain = this._emailDomain?.internalValue;
        }
        if (this._emailList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailList = this._emailList?.internalValue;
        }
        if (this._everyone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.everyone = this._everyone?.internalValue;
        }
        if (this._externalEvaluation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
        }
        if (this._geo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo?.internalValue;
        }
        if (this._githubOrganization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._gsuite?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsuite = this._gsuite?.internalValue;
        }
        if (this._ip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip?.internalValue;
        }
        if (this._ipList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipList = this._ipList?.internalValue;
        }
        if (this._linkedAppToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
        }
        if (this._loginMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginMethod = this._loginMethod?.internalValue;
        }
        if (this._oidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidc = this._oidc?.internalValue;
        }
        if (this._okta?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.okta = this._okta?.internalValue;
        }
        if (this._saml?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saml = this._saml?.internalValue;
        }
        if (this._serviceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceToken = this._serviceToken?.internalValue;
        }
        if (this._userRiskScore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userRiskScore = this._userRiskScore?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = undefined;
            this._authContext.internalValue = undefined;
            this._authMethod.internalValue = undefined;
            this._azureAd.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._commonName.internalValue = undefined;
            this._devicePosture.internalValue = undefined;
            this._email.internalValue = undefined;
            this._emailDomain.internalValue = undefined;
            this._emailList.internalValue = undefined;
            this._everyone.internalValue = undefined;
            this._externalEvaluation.internalValue = undefined;
            this._geo.internalValue = undefined;
            this._githubOrganization.internalValue = undefined;
            this._group.internalValue = undefined;
            this._gsuite.internalValue = undefined;
            this._ip.internalValue = undefined;
            this._ipList.internalValue = undefined;
            this._linkedAppToken.internalValue = undefined;
            this._loginMethod.internalValue = undefined;
            this._oidc.internalValue = undefined;
            this._okta.internalValue = undefined;
            this._saml.internalValue = undefined;
            this._serviceToken.internalValue = undefined;
            this._userRiskScore.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
            this._authContext.internalValue = value.authContext;
            this._authMethod.internalValue = value.authMethod;
            this._azureAd.internalValue = value.azureAd;
            this._certificate.internalValue = value.certificate;
            this._commonName.internalValue = value.commonName;
            this._devicePosture.internalValue = value.devicePosture;
            this._email.internalValue = value.email;
            this._emailDomain.internalValue = value.emailDomain;
            this._emailList.internalValue = value.emailList;
            this._everyone.internalValue = value.everyone;
            this._externalEvaluation.internalValue = value.externalEvaluation;
            this._geo.internalValue = value.geo;
            this._githubOrganization.internalValue = value.githubOrganization;
            this._group.internalValue = value.group;
            this._gsuite.internalValue = value.gsuite;
            this._ip.internalValue = value.ip;
            this._ipList.internalValue = value.ipList;
            this._linkedAppToken.internalValue = value.linkedAppToken;
            this._loginMethod.internalValue = value.loginMethod;
            this._oidc.internalValue = value.oidc;
            this._okta.internalValue = value.okta;
            this._saml.internalValue = value.saml;
            this._serviceToken.internalValue = value.serviceToken;
            this._userRiskScore.internalValue = value.userRiskScore;
        }
    }
    // any_valid_service_token - computed: false, optional: true, required: false
    _anyValidServiceToken = new ZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
    get anyValidServiceToken() {
        return this._anyValidServiceToken;
    }
    putAnyValidServiceToken(value) {
        this._anyValidServiceToken.internalValue = value;
    }
    resetAnyValidServiceToken() {
        this._anyValidServiceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get anyValidServiceTokenInput() {
        return this._anyValidServiceToken.internalValue;
    }
    // auth_context - computed: false, optional: true, required: false
    _authContext = new ZeroTrustAccessPolicyExcludeAuthContextOutputReference(this, "auth_context");
    get authContext() {
        return this._authContext;
    }
    putAuthContext(value) {
        this._authContext.internalValue = value;
    }
    resetAuthContext() {
        this._authContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authContextInput() {
        return this._authContext.internalValue;
    }
    // auth_method - computed: false, optional: true, required: false
    _authMethod = new ZeroTrustAccessPolicyExcludeAuthMethodOutputReference(this, "auth_method");
    get authMethod() {
        return this._authMethod;
    }
    putAuthMethod(value) {
        this._authMethod.internalValue = value;
    }
    resetAuthMethod() {
        this._authMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod.internalValue;
    }
    // azure_ad - computed: false, optional: true, required: false
    _azureAd = new ZeroTrustAccessPolicyExcludeAzureAdOutputReference(this, "azure_ad");
    get azureAd() {
        return this._azureAd;
    }
    putAzureAd(value) {
        this._azureAd.internalValue = value;
    }
    resetAzureAd() {
        this._azureAd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azureAdInput() {
        return this._azureAd.internalValue;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate = new ZeroTrustAccessPolicyExcludeCertificateOutputReference(this, "certificate");
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    // common_name - computed: false, optional: true, required: false
    _commonName = new ZeroTrustAccessPolicyExcludeCommonNameOutputReference(this, "common_name");
    get commonName() {
        return this._commonName;
    }
    putCommonName(value) {
        this._commonName.internalValue = value;
    }
    resetCommonName() {
        this._commonName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName.internalValue;
    }
    // device_posture - computed: false, optional: true, required: false
    _devicePosture = new ZeroTrustAccessPolicyExcludeDevicePostureOutputReference(this, "device_posture");
    get devicePosture() {
        return this._devicePosture;
    }
    putDevicePosture(value) {
        this._devicePosture.internalValue = value;
    }
    resetDevicePosture() {
        this._devicePosture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture.internalValue;
    }
    // email - computed: false, optional: true, required: false
    _email = new ZeroTrustAccessPolicyExcludeEmailOutputReference(this, "email");
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // email_domain - computed: false, optional: true, required: false
    _emailDomain = new ZeroTrustAccessPolicyExcludeEmailDomainOutputReference(this, "email_domain");
    get emailDomain() {
        return this._emailDomain;
    }
    putEmailDomain(value) {
        this._emailDomain.internalValue = value;
    }
    resetEmailDomain() {
        this._emailDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain.internalValue;
    }
    // email_list - computed: false, optional: true, required: false
    _emailList = new ZeroTrustAccessPolicyExcludeEmailListStructOutputReference(this, "email_list");
    get emailList() {
        return this._emailList;
    }
    putEmailList(value) {
        this._emailList.internalValue = value;
    }
    resetEmailList() {
        this._emailList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListInput() {
        return this._emailList.internalValue;
    }
    // everyone - computed: false, optional: true, required: false
    _everyone = new ZeroTrustAccessPolicyExcludeEveryoneOutputReference(this, "everyone");
    get everyone() {
        return this._everyone;
    }
    putEveryone(value) {
        this._everyone.internalValue = value;
    }
    resetEveryone() {
        this._everyone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get everyoneInput() {
        return this._everyone.internalValue;
    }
    // external_evaluation - computed: false, optional: true, required: false
    _externalEvaluation = new ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(this, "external_evaluation");
    get externalEvaluation() {
        return this._externalEvaluation;
    }
    putExternalEvaluation(value) {
        this._externalEvaluation.internalValue = value;
    }
    resetExternalEvaluation() {
        this._externalEvaluation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEvaluationInput() {
        return this._externalEvaluation.internalValue;
    }
    // geo - computed: false, optional: true, required: false
    _geo = new ZeroTrustAccessPolicyExcludeGeoOutputReference(this, "geo");
    get geo() {
        return this._geo;
    }
    putGeo(value) {
        this._geo.internalValue = value;
    }
    resetGeo() {
        this._geo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo.internalValue;
    }
    // github_organization - computed: false, optional: true, required: false
    _githubOrganization = new ZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference(this, "github_organization");
    get githubOrganization() {
        return this._githubOrganization;
    }
    putGithubOrganization(value) {
        this._githubOrganization.internalValue = value;
    }
    resetGithubOrganization() {
        this._githubOrganization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get githubOrganizationInput() {
        return this._githubOrganization.internalValue;
    }
    // group - computed: false, optional: true, required: false
    _group = new ZeroTrustAccessPolicyExcludeGroupOutputReference(this, "group");
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // gsuite - computed: false, optional: true, required: false
    _gsuite = new ZeroTrustAccessPolicyExcludeGsuiteOutputReference(this, "gsuite");
    get gsuite() {
        return this._gsuite;
    }
    putGsuite(value) {
        this._gsuite.internalValue = value;
    }
    resetGsuite() {
        this._gsuite.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gsuiteInput() {
        return this._gsuite.internalValue;
    }
    // ip - computed: false, optional: true, required: false
    _ip = new ZeroTrustAccessPolicyExcludeIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    resetIp() {
        this._ip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // ip_list - computed: false, optional: true, required: false
    _ipList = new ZeroTrustAccessPolicyExcludeIpListStructOutputReference(this, "ip_list");
    get ipList() {
        return this._ipList;
    }
    putIpList(value) {
        this._ipList.internalValue = value;
    }
    resetIpList() {
        this._ipList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipListInput() {
        return this._ipList.internalValue;
    }
    // linked_app_token - computed: false, optional: true, required: false
    _linkedAppToken = new ZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference(this, "linked_app_token");
    get linkedAppToken() {
        return this._linkedAppToken;
    }
    putLinkedAppToken(value) {
        this._linkedAppToken.internalValue = value;
    }
    resetLinkedAppToken() {
        this._linkedAppToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkedAppTokenInput() {
        return this._linkedAppToken.internalValue;
    }
    // login_method - computed: false, optional: true, required: false
    _loginMethod = new ZeroTrustAccessPolicyExcludeLoginMethodOutputReference(this, "login_method");
    get loginMethod() {
        return this._loginMethod;
    }
    putLoginMethod(value) {
        this._loginMethod.internalValue = value;
    }
    resetLoginMethod() {
        this._loginMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginMethodInput() {
        return this._loginMethod.internalValue;
    }
    // oidc - computed: false, optional: true, required: false
    _oidc = new ZeroTrustAccessPolicyExcludeOidcOutputReference(this, "oidc");
    get oidc() {
        return this._oidc;
    }
    putOidc(value) {
        this._oidc.internalValue = value;
    }
    resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcInput() {
        return this._oidc.internalValue;
    }
    // okta - computed: false, optional: true, required: false
    _okta = new ZeroTrustAccessPolicyExcludeOktaOutputReference(this, "okta");
    get okta() {
        return this._okta;
    }
    putOkta(value) {
        this._okta.internalValue = value;
    }
    resetOkta() {
        this._okta.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaInput() {
        return this._okta.internalValue;
    }
    // saml - computed: false, optional: true, required: false
    _saml = new ZeroTrustAccessPolicyExcludeSamlOutputReference(this, "saml");
    get saml() {
        return this._saml;
    }
    putSaml(value) {
        this._saml.internalValue = value;
    }
    resetSaml() {
        this._saml.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlInput() {
        return this._saml.internalValue;
    }
    // service_token - computed: false, optional: true, required: false
    _serviceToken = new ZeroTrustAccessPolicyExcludeServiceTokenOutputReference(this, "service_token");
    get serviceToken() {
        return this._serviceToken;
    }
    putServiceToken(value) {
        this._serviceToken.internalValue = value;
    }
    resetServiceToken() {
        this._serviceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken.internalValue;
    }
    // user_risk_score - computed: false, optional: true, required: false
    _userRiskScore = new ZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference(this, "user_risk_score");
    get userRiskScore() {
        return this._userRiskScore;
    }
    putUserRiskScore(value) {
        this._userRiskScore.internalValue = value;
    }
    resetUserRiskScore() {
        this._userRiskScore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userRiskScoreInput() {
        return this._userRiskScore.internalValue;
    }
}
export class ZeroTrustAccessPolicyExcludeList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessPolicyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeAuthContextOutputReference extends cdktf.ComplexObject {
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
        if (this._acId !== undefined) {
            hasAnyValues = true;
            internalValueResult.acId = this._acId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acId = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acId = value.acId;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // ac_id - computed: true, optional: false, required: true
    _acId;
    get acId() {
        return this.getStringAttribute('ac_id');
    }
    set acId(value) {
        this._acId = value;
    }
    // Temporarily expose input value. Use with caution.
    get acIdInput() {
        return this._acId;
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
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
export function zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMethod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMethod = value.authMethod;
        }
    }
    // auth_method - computed: true, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
}
export function zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct) {
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
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeAzureAdOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
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
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyIncludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyIncludeCertificateOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
export function zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeCommonNameOutputReference extends cdktf.ComplexObject {
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
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
        }
    }
    // common_name - computed: true, optional: false, required: true
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
}
export function zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
export function zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
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
        if (this._integrationUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationUid = this._integrationUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integrationUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integrationUid = value.integrationUid;
        }
    }
    // integration_uid - computed: true, optional: false, required: true
    _integrationUid;
    get integrationUid() {
        return this.getStringAttribute('integration_uid');
    }
    set integrationUid(value) {
        this._integrationUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUidInput() {
        return this._integrationUid;
    }
}
export function zeroTrustAccessPolicyIncludeEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
export function zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeEmailOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
    }
    // email - computed: true, optional: false, required: true
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
}
export function zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
export function zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
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
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }
    // domain - computed: true, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
export function zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct) {
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
export function zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyIncludeEveryoneOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
export function zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
        if (this._evaluateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateUrl = this._evaluateUrl;
        }
        if (this._keysUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.keysUrl = this._keysUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluateUrl = undefined;
            this._keysUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluateUrl = value.evaluateUrl;
            this._keysUrl = value.keysUrl;
        }
    }
    // evaluate_url - computed: true, optional: false, required: true
    _evaluateUrl;
    get evaluateUrl() {
        return this.getStringAttribute('evaluate_url');
    }
    set evaluateUrl(value) {
        this._evaluateUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateUrlInput() {
        return this._evaluateUrl;
    }
    // keys_url - computed: true, optional: false, required: true
    _keysUrl;
    get keysUrl() {
        return this.getStringAttribute('keys_url');
    }
    set keysUrl(value) {
        this._keysUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysUrlInput() {
        return this._keysUrl;
    }
}
export function zeroTrustAccessPolicyIncludeGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
export function zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeGeoOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
        }
    }
    // country_code - computed: true, optional: false, required: true
    _countryCode;
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    set countryCode(value) {
        this._countryCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodeInput() {
        return this._countryCode;
    }
}
export function zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
export function zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._team !== undefined) {
            hasAnyValues = true;
            internalValueResult.team = this._team;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
            this._team = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
            this._team = value.team;
        }
    }
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
    // name - computed: true, optional: false, required: true
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
    // team - computed: true, optional: true, required: false
    _team;
    get team() {
        return this.getStringAttribute('team');
    }
    set team(value) {
        this._team = value;
    }
    resetTeam() {
        this._team = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team;
    }
}
export function zeroTrustAccessPolicyIncludeGroupToTerraform(struct) {
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
export function zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyIncludeGroupOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // email - computed: true, optional: false, required: true
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
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyIncludeIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function zeroTrustAccessPolicyIncludeIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
        }
    }
    // ip - computed: true, optional: false, required: true
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
}
export function zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct) {
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
export function zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyIncludeIpListStructOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
export function zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._appUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.appUid = this._appUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appUid = value.appUid;
        }
    }
    // app_uid - computed: true, optional: false, required: true
    _appUid;
    get appUid() {
        return this.getStringAttribute('app_uid');
    }
    set appUid(value) {
        this._appUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get appUidInput() {
        return this._appUid;
    }
}
export function zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct) {
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
export function zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyIncludeOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._claimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimName = this._claimName;
        }
        if (this._claimValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimValue = this._claimValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimName = undefined;
            this._claimValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimName = value.claimName;
            this._claimValue = value.claimValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // claim_name - computed: true, optional: false, required: true
    _claimName;
    get claimName() {
        return this.getStringAttribute('claim_name');
    }
    set claimName(value) {
        this._claimName = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimNameInput() {
        return this._claimName;
    }
    // claim_value - computed: true, optional: false, required: true
    _claimValue;
    get claimValue() {
        return this.getStringAttribute('claim_value');
    }
    set claimValue(value) {
        this._claimValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimValueInput() {
        return this._claimValue;
    }
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyIncludeOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeOktaOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
        }
    }
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
    // name - computed: true, optional: false, required: true
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
}
export function zeroTrustAccessPolicyIncludeSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeSamlOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValue = this._attributeValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeValue = value.attributeValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // attribute_name - computed: true, optional: false, required: true
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // attribute_value - computed: true, optional: false, required: true
    _attributeValue;
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
    set attributeValue(value) {
        this._attributeValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeValueInput() {
        return this._attributeValue;
    }
    // identity_provider_id - computed: true, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
export function zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._tokenId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenId = this._tokenId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenId = value.tokenId;
        }
    }
    // token_id - computed: true, optional: false, required: true
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
}
export function zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        user_risk_score: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.userRiskScore),
    };
}
export function zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        user_risk_score: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.userRiskScore),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
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
        if (this._userRiskScore !== undefined) {
            hasAnyValues = true;
            internalValueResult.userRiskScore = this._userRiskScore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._userRiskScore = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._userRiskScore = value.userRiskScore;
        }
    }
    // user_risk_score - computed: true, optional: false, required: true
    _userRiskScore;
    get userRiskScore() {
        return this.getListAttribute('user_risk_score');
    }
    set userRiskScore(value) {
        this._userRiskScore = value;
    }
    // Temporarily expose input value. Use with caution.
    get userRiskScoreInput() {
        return this._userRiskScore;
    }
}
export function zeroTrustAccessPolicyIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessPolicyIncludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessPolicyIncludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessPolicyIncludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessPolicyIncludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessPolicyIncludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessPolicyIncludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessPolicyIncludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessPolicyIncludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessPolicyIncludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessPolicyIncludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessPolicyIncludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessPolicyIncludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessPolicyIncludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessPolicyIncludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
export function zeroTrustAccessPolicyIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessPolicyIncludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessPolicyIncludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessPolicyIncludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeGsuite",
        },
        ip: {
            value: zeroTrustAccessPolicyIncludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeIp",
        },
        ip_list: {
            value: zeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessPolicyIncludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeOidc",
        },
        okta: {
            value: zeroTrustAccessPolicyIncludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeOkta",
        },
        saml: {
            value: zeroTrustAccessPolicyIncludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeSaml",
        },
        service_token: {
            value: zeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyIncludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyIncludeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._anyValidServiceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
        }
        if (this._authContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authContext = this._authContext?.internalValue;
        }
        if (this._authMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod?.internalValue;
        }
        if (this._azureAd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureAd = this._azureAd?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._commonName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName?.internalValue;
        }
        if (this._devicePosture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devicePosture = this._devicePosture?.internalValue;
        }
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._emailDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailDomain = this._emailDomain?.internalValue;
        }
        if (this._emailList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailList = this._emailList?.internalValue;
        }
        if (this._everyone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.everyone = this._everyone?.internalValue;
        }
        if (this._externalEvaluation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
        }
        if (this._geo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo?.internalValue;
        }
        if (this._githubOrganization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._gsuite?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsuite = this._gsuite?.internalValue;
        }
        if (this._ip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip?.internalValue;
        }
        if (this._ipList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipList = this._ipList?.internalValue;
        }
        if (this._linkedAppToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
        }
        if (this._loginMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginMethod = this._loginMethod?.internalValue;
        }
        if (this._oidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidc = this._oidc?.internalValue;
        }
        if (this._okta?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.okta = this._okta?.internalValue;
        }
        if (this._saml?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saml = this._saml?.internalValue;
        }
        if (this._serviceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceToken = this._serviceToken?.internalValue;
        }
        if (this._userRiskScore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userRiskScore = this._userRiskScore?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = undefined;
            this._authContext.internalValue = undefined;
            this._authMethod.internalValue = undefined;
            this._azureAd.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._commonName.internalValue = undefined;
            this._devicePosture.internalValue = undefined;
            this._email.internalValue = undefined;
            this._emailDomain.internalValue = undefined;
            this._emailList.internalValue = undefined;
            this._everyone.internalValue = undefined;
            this._externalEvaluation.internalValue = undefined;
            this._geo.internalValue = undefined;
            this._githubOrganization.internalValue = undefined;
            this._group.internalValue = undefined;
            this._gsuite.internalValue = undefined;
            this._ip.internalValue = undefined;
            this._ipList.internalValue = undefined;
            this._linkedAppToken.internalValue = undefined;
            this._loginMethod.internalValue = undefined;
            this._oidc.internalValue = undefined;
            this._okta.internalValue = undefined;
            this._saml.internalValue = undefined;
            this._serviceToken.internalValue = undefined;
            this._userRiskScore.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
            this._authContext.internalValue = value.authContext;
            this._authMethod.internalValue = value.authMethod;
            this._azureAd.internalValue = value.azureAd;
            this._certificate.internalValue = value.certificate;
            this._commonName.internalValue = value.commonName;
            this._devicePosture.internalValue = value.devicePosture;
            this._email.internalValue = value.email;
            this._emailDomain.internalValue = value.emailDomain;
            this._emailList.internalValue = value.emailList;
            this._everyone.internalValue = value.everyone;
            this._externalEvaluation.internalValue = value.externalEvaluation;
            this._geo.internalValue = value.geo;
            this._githubOrganization.internalValue = value.githubOrganization;
            this._group.internalValue = value.group;
            this._gsuite.internalValue = value.gsuite;
            this._ip.internalValue = value.ip;
            this._ipList.internalValue = value.ipList;
            this._linkedAppToken.internalValue = value.linkedAppToken;
            this._loginMethod.internalValue = value.loginMethod;
            this._oidc.internalValue = value.oidc;
            this._okta.internalValue = value.okta;
            this._saml.internalValue = value.saml;
            this._serviceToken.internalValue = value.serviceToken;
            this._userRiskScore.internalValue = value.userRiskScore;
        }
    }
    // any_valid_service_token - computed: true, optional: true, required: false
    _anyValidServiceToken = new ZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
    get anyValidServiceToken() {
        return this._anyValidServiceToken;
    }
    putAnyValidServiceToken(value) {
        this._anyValidServiceToken.internalValue = value;
    }
    resetAnyValidServiceToken() {
        this._anyValidServiceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get anyValidServiceTokenInput() {
        return this._anyValidServiceToken.internalValue;
    }
    // auth_context - computed: true, optional: true, required: false
    _authContext = new ZeroTrustAccessPolicyIncludeAuthContextOutputReference(this, "auth_context");
    get authContext() {
        return this._authContext;
    }
    putAuthContext(value) {
        this._authContext.internalValue = value;
    }
    resetAuthContext() {
        this._authContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authContextInput() {
        return this._authContext.internalValue;
    }
    // auth_method - computed: true, optional: true, required: false
    _authMethod = new ZeroTrustAccessPolicyIncludeAuthMethodOutputReference(this, "auth_method");
    get authMethod() {
        return this._authMethod;
    }
    putAuthMethod(value) {
        this._authMethod.internalValue = value;
    }
    resetAuthMethod() {
        this._authMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod.internalValue;
    }
    // azure_ad - computed: true, optional: true, required: false
    _azureAd = new ZeroTrustAccessPolicyIncludeAzureAdOutputReference(this, "azure_ad");
    get azureAd() {
        return this._azureAd;
    }
    putAzureAd(value) {
        this._azureAd.internalValue = value;
    }
    resetAzureAd() {
        this._azureAd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azureAdInput() {
        return this._azureAd.internalValue;
    }
    // certificate - computed: true, optional: true, required: false
    _certificate = new ZeroTrustAccessPolicyIncludeCertificateOutputReference(this, "certificate");
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    // common_name - computed: true, optional: true, required: false
    _commonName = new ZeroTrustAccessPolicyIncludeCommonNameOutputReference(this, "common_name");
    get commonName() {
        return this._commonName;
    }
    putCommonName(value) {
        this._commonName.internalValue = value;
    }
    resetCommonName() {
        this._commonName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName.internalValue;
    }
    // device_posture - computed: true, optional: true, required: false
    _devicePosture = new ZeroTrustAccessPolicyIncludeDevicePostureOutputReference(this, "device_posture");
    get devicePosture() {
        return this._devicePosture;
    }
    putDevicePosture(value) {
        this._devicePosture.internalValue = value;
    }
    resetDevicePosture() {
        this._devicePosture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture.internalValue;
    }
    // email - computed: true, optional: true, required: false
    _email = new ZeroTrustAccessPolicyIncludeEmailOutputReference(this, "email");
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // email_domain - computed: true, optional: true, required: false
    _emailDomain = new ZeroTrustAccessPolicyIncludeEmailDomainOutputReference(this, "email_domain");
    get emailDomain() {
        return this._emailDomain;
    }
    putEmailDomain(value) {
        this._emailDomain.internalValue = value;
    }
    resetEmailDomain() {
        this._emailDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain.internalValue;
    }
    // email_list - computed: true, optional: true, required: false
    _emailList = new ZeroTrustAccessPolicyIncludeEmailListStructOutputReference(this, "email_list");
    get emailList() {
        return this._emailList;
    }
    putEmailList(value) {
        this._emailList.internalValue = value;
    }
    resetEmailList() {
        this._emailList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListInput() {
        return this._emailList.internalValue;
    }
    // everyone - computed: true, optional: true, required: false
    _everyone = new ZeroTrustAccessPolicyIncludeEveryoneOutputReference(this, "everyone");
    get everyone() {
        return this._everyone;
    }
    putEveryone(value) {
        this._everyone.internalValue = value;
    }
    resetEveryone() {
        this._everyone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get everyoneInput() {
        return this._everyone.internalValue;
    }
    // external_evaluation - computed: true, optional: true, required: false
    _externalEvaluation = new ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(this, "external_evaluation");
    get externalEvaluation() {
        return this._externalEvaluation;
    }
    putExternalEvaluation(value) {
        this._externalEvaluation.internalValue = value;
    }
    resetExternalEvaluation() {
        this._externalEvaluation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEvaluationInput() {
        return this._externalEvaluation.internalValue;
    }
    // geo - computed: true, optional: true, required: false
    _geo = new ZeroTrustAccessPolicyIncludeGeoOutputReference(this, "geo");
    get geo() {
        return this._geo;
    }
    putGeo(value) {
        this._geo.internalValue = value;
    }
    resetGeo() {
        this._geo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo.internalValue;
    }
    // github_organization - computed: true, optional: true, required: false
    _githubOrganization = new ZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference(this, "github_organization");
    get githubOrganization() {
        return this._githubOrganization;
    }
    putGithubOrganization(value) {
        this._githubOrganization.internalValue = value;
    }
    resetGithubOrganization() {
        this._githubOrganization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get githubOrganizationInput() {
        return this._githubOrganization.internalValue;
    }
    // group - computed: true, optional: true, required: false
    _group = new ZeroTrustAccessPolicyIncludeGroupOutputReference(this, "group");
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // gsuite - computed: true, optional: true, required: false
    _gsuite = new ZeroTrustAccessPolicyIncludeGsuiteOutputReference(this, "gsuite");
    get gsuite() {
        return this._gsuite;
    }
    putGsuite(value) {
        this._gsuite.internalValue = value;
    }
    resetGsuite() {
        this._gsuite.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gsuiteInput() {
        return this._gsuite.internalValue;
    }
    // ip - computed: true, optional: true, required: false
    _ip = new ZeroTrustAccessPolicyIncludeIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    resetIp() {
        this._ip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // ip_list - computed: true, optional: true, required: false
    _ipList = new ZeroTrustAccessPolicyIncludeIpListStructOutputReference(this, "ip_list");
    get ipList() {
        return this._ipList;
    }
    putIpList(value) {
        this._ipList.internalValue = value;
    }
    resetIpList() {
        this._ipList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipListInput() {
        return this._ipList.internalValue;
    }
    // linked_app_token - computed: true, optional: true, required: false
    _linkedAppToken = new ZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference(this, "linked_app_token");
    get linkedAppToken() {
        return this._linkedAppToken;
    }
    putLinkedAppToken(value) {
        this._linkedAppToken.internalValue = value;
    }
    resetLinkedAppToken() {
        this._linkedAppToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkedAppTokenInput() {
        return this._linkedAppToken.internalValue;
    }
    // login_method - computed: true, optional: true, required: false
    _loginMethod = new ZeroTrustAccessPolicyIncludeLoginMethodOutputReference(this, "login_method");
    get loginMethod() {
        return this._loginMethod;
    }
    putLoginMethod(value) {
        this._loginMethod.internalValue = value;
    }
    resetLoginMethod() {
        this._loginMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginMethodInput() {
        return this._loginMethod.internalValue;
    }
    // oidc - computed: true, optional: true, required: false
    _oidc = new ZeroTrustAccessPolicyIncludeOidcOutputReference(this, "oidc");
    get oidc() {
        return this._oidc;
    }
    putOidc(value) {
        this._oidc.internalValue = value;
    }
    resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcInput() {
        return this._oidc.internalValue;
    }
    // okta - computed: true, optional: true, required: false
    _okta = new ZeroTrustAccessPolicyIncludeOktaOutputReference(this, "okta");
    get okta() {
        return this._okta;
    }
    putOkta(value) {
        this._okta.internalValue = value;
    }
    resetOkta() {
        this._okta.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaInput() {
        return this._okta.internalValue;
    }
    // saml - computed: true, optional: true, required: false
    _saml = new ZeroTrustAccessPolicyIncludeSamlOutputReference(this, "saml");
    get saml() {
        return this._saml;
    }
    putSaml(value) {
        this._saml.internalValue = value;
    }
    resetSaml() {
        this._saml.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlInput() {
        return this._saml.internalValue;
    }
    // service_token - computed: true, optional: true, required: false
    _serviceToken = new ZeroTrustAccessPolicyIncludeServiceTokenOutputReference(this, "service_token");
    get serviceToken() {
        return this._serviceToken;
    }
    putServiceToken(value) {
        this._serviceToken.internalValue = value;
    }
    resetServiceToken() {
        this._serviceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken.internalValue;
    }
    // user_risk_score - computed: true, optional: true, required: false
    _userRiskScore = new ZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference(this, "user_risk_score");
    get userRiskScore() {
        return this._userRiskScore;
    }
    putUserRiskScore(value) {
        this._userRiskScore.internalValue = value;
    }
    resetUserRiskScore() {
        this._userRiskScore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userRiskScoreInput() {
        return this._userRiskScore.internalValue;
    }
}
export class ZeroTrustAccessPolicyIncludeList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessPolicyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessPolicyMfaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_authenticators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedAuthenticators),
        mfa_disabled: cdktf.booleanToTerraform(struct.mfaDisabled),
        session_duration: cdktf.stringToTerraform(struct.sessionDuration),
    };
}
export function zeroTrustAccessPolicyMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_authenticators: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedAuthenticators),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        mfa_disabled: {
            value: cdktf.booleanToHclTerraform(struct.mfaDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        session_duration: {
            value: cdktf.stringToHclTerraform(struct.sessionDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyMfaConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedAuthenticators !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAuthenticators = this._allowedAuthenticators;
        }
        if (this._mfaDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.mfaDisabled = this._mfaDisabled;
        }
        if (this._sessionDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionDuration = this._sessionDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAuthenticators = undefined;
            this._mfaDisabled = undefined;
            this._sessionDuration = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAuthenticators = value.allowedAuthenticators;
            this._mfaDisabled = value.mfaDisabled;
            this._sessionDuration = value.sessionDuration;
        }
    }
    // allowed_authenticators - computed: false, optional: true, required: false
    _allowedAuthenticators;
    get allowedAuthenticators() {
        return this.getListAttribute('allowed_authenticators');
    }
    set allowedAuthenticators(value) {
        this._allowedAuthenticators = value;
    }
    resetAllowedAuthenticators() {
        this._allowedAuthenticators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedAuthenticatorsInput() {
        return this._allowedAuthenticators;
    }
    // mfa_disabled - computed: false, optional: true, required: false
    _mfaDisabled;
    get mfaDisabled() {
        return this.getBooleanAttribute('mfa_disabled');
    }
    set mfaDisabled(value) {
        this._mfaDisabled = value;
    }
    resetMfaDisabled() {
        this._mfaDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaDisabledInput() {
        return this._mfaDisabled;
    }
    // session_duration - computed: false, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
}
export function zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyRequireAuthContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ac_id: cdktf.stringToTerraform(struct.acId),
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ac_id: {
            value: cdktf.stringToHclTerraform(struct.acId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireAuthContextOutputReference extends cdktf.ComplexObject {
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
        if (this._acId !== undefined) {
            hasAnyValues = true;
            internalValueResult.acId = this._acId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acId = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acId = value.acId;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // ac_id - computed: false, optional: false, required: true
    _acId;
    get acId() {
        return this.getStringAttribute('ac_id');
    }
    set acId(value) {
        this._acId = value;
    }
    // Temporarily expose input value. Use with caution.
    get acIdInput() {
        return this._acId;
    }
    // id - computed: false, optional: false, required: true
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_method: cdktf.stringToTerraform(struct.authMethod),
    };
}
export function zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireAuthMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMethod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMethod = value.authMethod;
        }
    }
    // auth_method - computed: false, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
}
export function zeroTrustAccessPolicyRequireAzureAdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct) {
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
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireAzureAdOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // id - computed: false, optional: false, required: true
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyRequireCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyRequireCertificateOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyRequireCommonNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
    };
}
export function zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        common_name: {
            value: cdktf.stringToHclTerraform(struct.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireCommonNameOutputReference extends cdktf.ComplexObject {
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
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
        }
    }
    // common_name - computed: false, optional: false, required: true
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
}
export function zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        integration_uid: cdktf.stringToTerraform(struct.integrationUid),
    };
}
export function zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        integration_uid: {
            value: cdktf.stringToHclTerraform(struct.integrationUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireDevicePostureOutputReference extends cdktf.ComplexObject {
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
        if (this._integrationUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationUid = this._integrationUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integrationUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integrationUid = value.integrationUid;
        }
    }
    // integration_uid - computed: false, optional: false, required: true
    _integrationUid;
    get integrationUid() {
        return this.getStringAttribute('integration_uid');
    }
    set integrationUid(value) {
        this._integrationUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUidInput() {
        return this._integrationUid;
    }
}
export function zeroTrustAccessPolicyRequireEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
    };
}
export function zeroTrustAccessPolicyRequireEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireEmailOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
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
}
export function zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
export function zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireEmailDomainOutputReference extends cdktf.ComplexObject {
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
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
export function zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct) {
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
export function zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyRequireEmailListStructOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyRequireEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessPolicyRequireEveryoneOutputReference extends cdktf.ComplexObject {
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
}
export function zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_url: cdktf.stringToTerraform(struct.evaluateUrl),
        keys_url: cdktf.stringToTerraform(struct.keysUrl),
    };
}
export function zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        evaluate_url: {
            value: cdktf.stringToHclTerraform(struct.evaluateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys_url: {
            value: cdktf.stringToHclTerraform(struct.keysUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
        if (this._evaluateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateUrl = this._evaluateUrl;
        }
        if (this._keysUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.keysUrl = this._keysUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluateUrl = undefined;
            this._keysUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluateUrl = value.evaluateUrl;
            this._keysUrl = value.keysUrl;
        }
    }
    // evaluate_url - computed: false, optional: false, required: true
    _evaluateUrl;
    get evaluateUrl() {
        return this.getStringAttribute('evaluate_url');
    }
    set evaluateUrl(value) {
        this._evaluateUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateUrlInput() {
        return this._evaluateUrl;
    }
    // keys_url - computed: false, optional: false, required: true
    _keysUrl;
    get keysUrl() {
        return this.getStringAttribute('keys_url');
    }
    set keysUrl(value) {
        this._keysUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysUrlInput() {
        return this._keysUrl;
    }
}
export function zeroTrustAccessPolicyRequireGeoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_code: cdktf.stringToTerraform(struct.countryCode),
    };
}
export function zeroTrustAccessPolicyRequireGeoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        country_code: {
            value: cdktf.stringToHclTerraform(struct.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireGeoOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
        }
    }
    // country_code - computed: false, optional: false, required: true
    _countryCode;
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    set countryCode(value) {
        this._countryCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodeInput() {
        return this._countryCode;
    }
}
export function zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
        team: cdktf.stringToTerraform(struct.team),
    };
}
export function zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        team: {
            value: cdktf.stringToHclTerraform(struct.team),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._team !== undefined) {
            hasAnyValues = true;
            internalValueResult.team = this._team;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
            this._team = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
            this._team = value.team;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
    // team - computed: false, optional: true, required: false
    _team;
    get team() {
        return this.getStringAttribute('team');
    }
    set team(value) {
        this._team = value;
    }
    resetTeam() {
        this._team = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team;
    }
}
export function zeroTrustAccessPolicyRequireGroupToTerraform(struct) {
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
export function zeroTrustAccessPolicyRequireGroupToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyRequireGroupOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyRequireGsuiteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireGsuiteOutputReference extends cdktf.ComplexObject {
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
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._identityProviderId = value.identityProviderId;
        }
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
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyRequireIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function zeroTrustAccessPolicyRequireIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
        }
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
}
export function zeroTrustAccessPolicyRequireIpListStructToTerraform(struct) {
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
export function zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyRequireIpListStructOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_uid: cdktf.stringToTerraform(struct.appUid),
    };
}
export function zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_uid: {
            value: cdktf.stringToHclTerraform(struct.appUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._appUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.appUid = this._appUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appUid = value.appUid;
        }
    }
    // app_uid - computed: false, optional: false, required: true
    _appUid;
    get appUid() {
        return this.getStringAttribute('app_uid');
    }
    set appUid(value) {
        this._appUid = value;
    }
    // Temporarily expose input value. Use with caution.
    get appUidInput() {
        return this._appUid;
    }
}
export function zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct) {
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
export function zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessPolicyRequireLoginMethodOutputReference extends cdktf.ComplexObject {
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
    // id - computed: false, optional: false, required: true
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
}
export function zeroTrustAccessPolicyRequireOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        claim_name: cdktf.stringToTerraform(struct.claimName),
        claim_value: cdktf.stringToTerraform(struct.claimValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyRequireOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        claim_name: {
            value: cdktf.stringToHclTerraform(struct.claimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_value: {
            value: cdktf.stringToHclTerraform(struct.claimValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._claimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimName = this._claimName;
        }
        if (this._claimValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimValue = this._claimValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimName = undefined;
            this._claimValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimName = value.claimName;
            this._claimValue = value.claimValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // claim_name - computed: false, optional: false, required: true
    _claimName;
    get claimName() {
        return this.getStringAttribute('claim_name');
    }
    set claimName(value) {
        this._claimName = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimNameInput() {
        return this._claimName;
    }
    // claim_value - computed: false, optional: false, required: true
    _claimValue;
    get claimValue() {
        return this.getStringAttribute('claim_value');
    }
    set claimValue(value) {
        this._claimValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get claimValueInput() {
        return this._claimValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyRequireOktaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessPolicyRequireOktaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireOktaOutputReference extends cdktf.ComplexObject {
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
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderId = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderId = value.identityProviderId;
            this._name = value.name;
        }
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
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
}
export function zeroTrustAccessPolicyRequireSamlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
        identity_provider_id: cdktf.stringToTerraform(struct.identityProviderId),
    };
}
export function zeroTrustAccessPolicyRequireSamlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_value: {
            value: cdktf.stringToHclTerraform(struct.attributeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_id: {
            value: cdktf.stringToHclTerraform(struct.identityProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireSamlOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValue = this._attributeValue;
        }
        if (this._identityProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderId = this._identityProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeValue = undefined;
            this._identityProviderId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeValue = value.attributeValue;
            this._identityProviderId = value.identityProviderId;
        }
    }
    // attribute_name - computed: false, optional: false, required: true
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // attribute_value - computed: false, optional: false, required: true
    _attributeValue;
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
    set attributeValue(value) {
        this._attributeValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeValueInput() {
        return this._attributeValue;
    }
    // identity_provider_id - computed: false, optional: false, required: true
    _identityProviderId;
    get identityProviderId() {
        return this.getStringAttribute('identity_provider_id');
    }
    set identityProviderId(value) {
        this._identityProviderId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityProviderIdInput() {
        return this._identityProviderId;
    }
}
export function zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        token_id: cdktf.stringToTerraform(struct.tokenId),
    };
}
export function zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        token_id: {
            value: cdktf.stringToHclTerraform(struct.tokenId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireServiceTokenOutputReference extends cdktf.ComplexObject {
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
        if (this._tokenId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenId = this._tokenId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenId = value.tokenId;
        }
    }
    // token_id - computed: false, optional: false, required: true
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
}
export function zeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        user_risk_score: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.userRiskScore),
    };
}
export function zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        user_risk_score: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.userRiskScore),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
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
        if (this._userRiskScore !== undefined) {
            hasAnyValues = true;
            internalValueResult.userRiskScore = this._userRiskScore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._userRiskScore = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._userRiskScore = value.userRiskScore;
        }
    }
    // user_risk_score - computed: false, optional: false, required: true
    _userRiskScore;
    get userRiskScore() {
        return this.getListAttribute('user_risk_score');
    }
    set userRiskScore(value) {
        this._userRiskScore = value;
    }
    // Temporarily expose input value. Use with caution.
    get userRiskScoreInput() {
        return this._userRiskScore;
    }
}
export function zeroTrustAccessPolicyRequireToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessPolicyRequireAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessPolicyRequireAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessPolicyRequireAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessPolicyRequireCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessPolicyRequireCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessPolicyRequireDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessPolicyRequireEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessPolicyRequireEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessPolicyRequireEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessPolicyRequireEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessPolicyRequireGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessPolicyRequireGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessPolicyRequireGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessPolicyRequireIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessPolicyRequireIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessPolicyRequireLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessPolicyRequireOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessPolicyRequireOktaToTerraform(struct.okta),
        saml: zeroTrustAccessPolicyRequireSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessPolicyRequireServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
export function zeroTrustAccessPolicyRequireToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireAzureAd",
        },
        certificate: {
            value: zeroTrustAccessPolicyRequireCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireCertificate",
        },
        common_name: {
            value: zeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireCommonName",
        },
        device_posture: {
            value: zeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireDevicePosture",
        },
        email: {
            value: zeroTrustAccessPolicyRequireEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEmail",
        },
        email_domain: {
            value: zeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessPolicyRequireGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGeo",
        },
        github_organization: {
            value: zeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGithubOrganization",
        },
        group: {
            value: zeroTrustAccessPolicyRequireGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGroup",
        },
        gsuite: {
            value: zeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireGsuite",
        },
        ip: {
            value: zeroTrustAccessPolicyRequireIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireIp",
        },
        ip_list: {
            value: zeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessPolicyRequireOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireOidc",
        },
        okta: {
            value: zeroTrustAccessPolicyRequireOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireOkta",
        },
        saml: {
            value: zeroTrustAccessPolicyRequireSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireSaml",
        },
        service_token: {
            value: zeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessPolicyRequireUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessPolicyRequireOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._anyValidServiceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
        }
        if (this._authContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authContext = this._authContext?.internalValue;
        }
        if (this._authMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod?.internalValue;
        }
        if (this._azureAd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureAd = this._azureAd?.internalValue;
        }
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._commonName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName?.internalValue;
        }
        if (this._devicePosture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devicePosture = this._devicePosture?.internalValue;
        }
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._emailDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailDomain = this._emailDomain?.internalValue;
        }
        if (this._emailList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailList = this._emailList?.internalValue;
        }
        if (this._everyone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.everyone = this._everyone?.internalValue;
        }
        if (this._externalEvaluation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
        }
        if (this._geo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geo = this._geo?.internalValue;
        }
        if (this._githubOrganization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._gsuite?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsuite = this._gsuite?.internalValue;
        }
        if (this._ip?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip?.internalValue;
        }
        if (this._ipList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipList = this._ipList?.internalValue;
        }
        if (this._linkedAppToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
        }
        if (this._loginMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginMethod = this._loginMethod?.internalValue;
        }
        if (this._oidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidc = this._oidc?.internalValue;
        }
        if (this._okta?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.okta = this._okta?.internalValue;
        }
        if (this._saml?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saml = this._saml?.internalValue;
        }
        if (this._serviceToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceToken = this._serviceToken?.internalValue;
        }
        if (this._userRiskScore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userRiskScore = this._userRiskScore?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = undefined;
            this._authContext.internalValue = undefined;
            this._authMethod.internalValue = undefined;
            this._azureAd.internalValue = undefined;
            this._certificate.internalValue = undefined;
            this._commonName.internalValue = undefined;
            this._devicePosture.internalValue = undefined;
            this._email.internalValue = undefined;
            this._emailDomain.internalValue = undefined;
            this._emailList.internalValue = undefined;
            this._everyone.internalValue = undefined;
            this._externalEvaluation.internalValue = undefined;
            this._geo.internalValue = undefined;
            this._githubOrganization.internalValue = undefined;
            this._group.internalValue = undefined;
            this._gsuite.internalValue = undefined;
            this._ip.internalValue = undefined;
            this._ipList.internalValue = undefined;
            this._linkedAppToken.internalValue = undefined;
            this._loginMethod.internalValue = undefined;
            this._oidc.internalValue = undefined;
            this._okta.internalValue = undefined;
            this._saml.internalValue = undefined;
            this._serviceToken.internalValue = undefined;
            this._userRiskScore.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
            this._authContext.internalValue = value.authContext;
            this._authMethod.internalValue = value.authMethod;
            this._azureAd.internalValue = value.azureAd;
            this._certificate.internalValue = value.certificate;
            this._commonName.internalValue = value.commonName;
            this._devicePosture.internalValue = value.devicePosture;
            this._email.internalValue = value.email;
            this._emailDomain.internalValue = value.emailDomain;
            this._emailList.internalValue = value.emailList;
            this._everyone.internalValue = value.everyone;
            this._externalEvaluation.internalValue = value.externalEvaluation;
            this._geo.internalValue = value.geo;
            this._githubOrganization.internalValue = value.githubOrganization;
            this._group.internalValue = value.group;
            this._gsuite.internalValue = value.gsuite;
            this._ip.internalValue = value.ip;
            this._ipList.internalValue = value.ipList;
            this._linkedAppToken.internalValue = value.linkedAppToken;
            this._loginMethod.internalValue = value.loginMethod;
            this._oidc.internalValue = value.oidc;
            this._okta.internalValue = value.okta;
            this._saml.internalValue = value.saml;
            this._serviceToken.internalValue = value.serviceToken;
            this._userRiskScore.internalValue = value.userRiskScore;
        }
    }
    // any_valid_service_token - computed: false, optional: true, required: false
    _anyValidServiceToken = new ZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
    get anyValidServiceToken() {
        return this._anyValidServiceToken;
    }
    putAnyValidServiceToken(value) {
        this._anyValidServiceToken.internalValue = value;
    }
    resetAnyValidServiceToken() {
        this._anyValidServiceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get anyValidServiceTokenInput() {
        return this._anyValidServiceToken.internalValue;
    }
    // auth_context - computed: false, optional: true, required: false
    _authContext = new ZeroTrustAccessPolicyRequireAuthContextOutputReference(this, "auth_context");
    get authContext() {
        return this._authContext;
    }
    putAuthContext(value) {
        this._authContext.internalValue = value;
    }
    resetAuthContext() {
        this._authContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authContextInput() {
        return this._authContext.internalValue;
    }
    // auth_method - computed: false, optional: true, required: false
    _authMethod = new ZeroTrustAccessPolicyRequireAuthMethodOutputReference(this, "auth_method");
    get authMethod() {
        return this._authMethod;
    }
    putAuthMethod(value) {
        this._authMethod.internalValue = value;
    }
    resetAuthMethod() {
        this._authMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod.internalValue;
    }
    // azure_ad - computed: false, optional: true, required: false
    _azureAd = new ZeroTrustAccessPolicyRequireAzureAdOutputReference(this, "azure_ad");
    get azureAd() {
        return this._azureAd;
    }
    putAzureAd(value) {
        this._azureAd.internalValue = value;
    }
    resetAzureAd() {
        this._azureAd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azureAdInput() {
        return this._azureAd.internalValue;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate = new ZeroTrustAccessPolicyRequireCertificateOutputReference(this, "certificate");
    get certificate() {
        return this._certificate;
    }
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate.internalValue;
    }
    // common_name - computed: false, optional: true, required: false
    _commonName = new ZeroTrustAccessPolicyRequireCommonNameOutputReference(this, "common_name");
    get commonName() {
        return this._commonName;
    }
    putCommonName(value) {
        this._commonName.internalValue = value;
    }
    resetCommonName() {
        this._commonName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName.internalValue;
    }
    // device_posture - computed: false, optional: true, required: false
    _devicePosture = new ZeroTrustAccessPolicyRequireDevicePostureOutputReference(this, "device_posture");
    get devicePosture() {
        return this._devicePosture;
    }
    putDevicePosture(value) {
        this._devicePosture.internalValue = value;
    }
    resetDevicePosture() {
        this._devicePosture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicePostureInput() {
        return this._devicePosture.internalValue;
    }
    // email - computed: false, optional: true, required: false
    _email = new ZeroTrustAccessPolicyRequireEmailOutputReference(this, "email");
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // email_domain - computed: false, optional: true, required: false
    _emailDomain = new ZeroTrustAccessPolicyRequireEmailDomainOutputReference(this, "email_domain");
    get emailDomain() {
        return this._emailDomain;
    }
    putEmailDomain(value) {
        this._emailDomain.internalValue = value;
    }
    resetEmailDomain() {
        this._emailDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailDomainInput() {
        return this._emailDomain.internalValue;
    }
    // email_list - computed: false, optional: true, required: false
    _emailList = new ZeroTrustAccessPolicyRequireEmailListStructOutputReference(this, "email_list");
    get emailList() {
        return this._emailList;
    }
    putEmailList(value) {
        this._emailList.internalValue = value;
    }
    resetEmailList() {
        this._emailList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailListInput() {
        return this._emailList.internalValue;
    }
    // everyone - computed: false, optional: true, required: false
    _everyone = new ZeroTrustAccessPolicyRequireEveryoneOutputReference(this, "everyone");
    get everyone() {
        return this._everyone;
    }
    putEveryone(value) {
        this._everyone.internalValue = value;
    }
    resetEveryone() {
        this._everyone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get everyoneInput() {
        return this._everyone.internalValue;
    }
    // external_evaluation - computed: false, optional: true, required: false
    _externalEvaluation = new ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(this, "external_evaluation");
    get externalEvaluation() {
        return this._externalEvaluation;
    }
    putExternalEvaluation(value) {
        this._externalEvaluation.internalValue = value;
    }
    resetExternalEvaluation() {
        this._externalEvaluation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEvaluationInput() {
        return this._externalEvaluation.internalValue;
    }
    // geo - computed: false, optional: true, required: false
    _geo = new ZeroTrustAccessPolicyRequireGeoOutputReference(this, "geo");
    get geo() {
        return this._geo;
    }
    putGeo(value) {
        this._geo.internalValue = value;
    }
    resetGeo() {
        this._geo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoInput() {
        return this._geo.internalValue;
    }
    // github_organization - computed: false, optional: true, required: false
    _githubOrganization = new ZeroTrustAccessPolicyRequireGithubOrganizationOutputReference(this, "github_organization");
    get githubOrganization() {
        return this._githubOrganization;
    }
    putGithubOrganization(value) {
        this._githubOrganization.internalValue = value;
    }
    resetGithubOrganization() {
        this._githubOrganization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get githubOrganizationInput() {
        return this._githubOrganization.internalValue;
    }
    // group - computed: false, optional: true, required: false
    _group = new ZeroTrustAccessPolicyRequireGroupOutputReference(this, "group");
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // gsuite - computed: false, optional: true, required: false
    _gsuite = new ZeroTrustAccessPolicyRequireGsuiteOutputReference(this, "gsuite");
    get gsuite() {
        return this._gsuite;
    }
    putGsuite(value) {
        this._gsuite.internalValue = value;
    }
    resetGsuite() {
        this._gsuite.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gsuiteInput() {
        return this._gsuite.internalValue;
    }
    // ip - computed: false, optional: true, required: false
    _ip = new ZeroTrustAccessPolicyRequireIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    resetIp() {
        this._ip.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // ip_list - computed: false, optional: true, required: false
    _ipList = new ZeroTrustAccessPolicyRequireIpListStructOutputReference(this, "ip_list");
    get ipList() {
        return this._ipList;
    }
    putIpList(value) {
        this._ipList.internalValue = value;
    }
    resetIpList() {
        this._ipList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipListInput() {
        return this._ipList.internalValue;
    }
    // linked_app_token - computed: false, optional: true, required: false
    _linkedAppToken = new ZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference(this, "linked_app_token");
    get linkedAppToken() {
        return this._linkedAppToken;
    }
    putLinkedAppToken(value) {
        this._linkedAppToken.internalValue = value;
    }
    resetLinkedAppToken() {
        this._linkedAppToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkedAppTokenInput() {
        return this._linkedAppToken.internalValue;
    }
    // login_method - computed: false, optional: true, required: false
    _loginMethod = new ZeroTrustAccessPolicyRequireLoginMethodOutputReference(this, "login_method");
    get loginMethod() {
        return this._loginMethod;
    }
    putLoginMethod(value) {
        this._loginMethod.internalValue = value;
    }
    resetLoginMethod() {
        this._loginMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loginMethodInput() {
        return this._loginMethod.internalValue;
    }
    // oidc - computed: false, optional: true, required: false
    _oidc = new ZeroTrustAccessPolicyRequireOidcOutputReference(this, "oidc");
    get oidc() {
        return this._oidc;
    }
    putOidc(value) {
        this._oidc.internalValue = value;
    }
    resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcInput() {
        return this._oidc.internalValue;
    }
    // okta - computed: false, optional: true, required: false
    _okta = new ZeroTrustAccessPolicyRequireOktaOutputReference(this, "okta");
    get okta() {
        return this._okta;
    }
    putOkta(value) {
        this._okta.internalValue = value;
    }
    resetOkta() {
        this._okta.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaInput() {
        return this._okta.internalValue;
    }
    // saml - computed: false, optional: true, required: false
    _saml = new ZeroTrustAccessPolicyRequireSamlOutputReference(this, "saml");
    get saml() {
        return this._saml;
    }
    putSaml(value) {
        this._saml.internalValue = value;
    }
    resetSaml() {
        this._saml.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlInput() {
        return this._saml.internalValue;
    }
    // service_token - computed: false, optional: true, required: false
    _serviceToken = new ZeroTrustAccessPolicyRequireServiceTokenOutputReference(this, "service_token");
    get serviceToken() {
        return this._serviceToken;
    }
    putServiceToken(value) {
        this._serviceToken.internalValue = value;
    }
    resetServiceToken() {
        this._serviceToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken.internalValue;
    }
    // user_risk_score - computed: false, optional: true, required: false
    _userRiskScore = new ZeroTrustAccessPolicyRequireUserRiskScoreOutputReference(this, "user_risk_score");
    get userRiskScore() {
        return this._userRiskScore;
    }
    putUserRiskScore(value) {
        this._userRiskScore.internalValue = value;
    }
    resetUserRiskScore() {
        this._userRiskScore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userRiskScoreInput() {
        return this._userRiskScore.internalValue;
    }
}
export class ZeroTrustAccessPolicyRequireList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessPolicyRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
*/
export class ZeroTrustAccessPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessPolicy to import
    * @param importFromId The id of the existing ZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_policy',
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
        this._approvalGroups.internalValue = config.approvalGroups;
        this._approvalRequired = config.approvalRequired;
        this._connectionRules.internalValue = config.connectionRules;
        this._decision = config.decision;
        this._exclude.internalValue = config.exclude;
        this._include.internalValue = config.include;
        this._isolationRequired = config.isolationRequired;
        this._mfaConfig.internalValue = config.mfaConfig;
        this._name = config.name;
        this._purposeJustificationPrompt = config.purposeJustificationPrompt;
        this._purposeJustificationRequired = config.purposeJustificationRequired;
        this._require.internalValue = config.require;
        this._sessionDuration = config.sessionDuration;
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
    // approval_groups - computed: false, optional: true, required: false
    _approvalGroups = new ZeroTrustAccessPolicyApprovalGroupsList(this, "approval_groups", true);
    get approvalGroups() {
        return this._approvalGroups;
    }
    putApprovalGroups(value) {
        this._approvalGroups.internalValue = value;
    }
    resetApprovalGroups() {
        this._approvalGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get approvalGroupsInput() {
        return this._approvalGroups.internalValue;
    }
    // approval_required - computed: false, optional: true, required: false
    _approvalRequired;
    get approvalRequired() {
        return this.getBooleanAttribute('approval_required');
    }
    set approvalRequired(value) {
        this._approvalRequired = value;
    }
    resetApprovalRequired() {
        this._approvalRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get approvalRequiredInput() {
        return this._approvalRequired;
    }
    // connection_rules - computed: false, optional: true, required: false
    _connectionRules = new ZeroTrustAccessPolicyConnectionRulesOutputReference(this, "connection_rules");
    get connectionRules() {
        return this._connectionRules;
    }
    putConnectionRules(value) {
        this._connectionRules.internalValue = value;
    }
    resetConnectionRules() {
        this._connectionRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionRulesInput() {
        return this._connectionRules.internalValue;
    }
    // decision - computed: false, optional: false, required: true
    _decision;
    get decision() {
        return this.getStringAttribute('decision');
    }
    set decision(value) {
        this._decision = value;
    }
    // Temporarily expose input value. Use with caution.
    get decisionInput() {
        return this._decision;
    }
    // exclude - computed: false, optional: true, required: false
    _exclude = new ZeroTrustAccessPolicyExcludeList(this, "exclude", true);
    get exclude() {
        return this._exclude;
    }
    putExclude(value) {
        this._exclude.internalValue = value;
    }
    resetExclude() {
        this._exclude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeInput() {
        return this._exclude.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include - computed: true, optional: true, required: false
    _include = new ZeroTrustAccessPolicyIncludeList(this, "include", true);
    get include() {
        return this._include;
    }
    putInclude(value) {
        this._include.internalValue = value;
    }
    resetInclude() {
        this._include.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include.internalValue;
    }
    // isolation_required - computed: false, optional: true, required: false
    _isolationRequired;
    get isolationRequired() {
        return this.getBooleanAttribute('isolation_required');
    }
    set isolationRequired(value) {
        this._isolationRequired = value;
    }
    resetIsolationRequired() {
        this._isolationRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isolationRequiredInput() {
        return this._isolationRequired;
    }
    // mfa_config - computed: false, optional: true, required: false
    _mfaConfig = new ZeroTrustAccessPolicyMfaConfigOutputReference(this, "mfa_config");
    get mfaConfig() {
        return this._mfaConfig;
    }
    putMfaConfig(value) {
        this._mfaConfig.internalValue = value;
    }
    resetMfaConfig() {
        this._mfaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaConfigInput() {
        return this._mfaConfig.internalValue;
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
    // purpose_justification_prompt - computed: false, optional: true, required: false
    _purposeJustificationPrompt;
    get purposeJustificationPrompt() {
        return this.getStringAttribute('purpose_justification_prompt');
    }
    set purposeJustificationPrompt(value) {
        this._purposeJustificationPrompt = value;
    }
    resetPurposeJustificationPrompt() {
        this._purposeJustificationPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get purposeJustificationPromptInput() {
        return this._purposeJustificationPrompt;
    }
    // purpose_justification_required - computed: false, optional: true, required: false
    _purposeJustificationRequired;
    get purposeJustificationRequired() {
        return this.getBooleanAttribute('purpose_justification_required');
    }
    set purposeJustificationRequired(value) {
        this._purposeJustificationRequired = value;
    }
    resetPurposeJustificationRequired() {
        this._purposeJustificationRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get purposeJustificationRequiredInput() {
        return this._purposeJustificationRequired;
    }
    // require - computed: false, optional: true, required: false
    _require = new ZeroTrustAccessPolicyRequireList(this, "require", true);
    get require() {
        return this._require;
    }
    putRequire(value) {
        this._require.internalValue = value;
    }
    resetRequire() {
        this._require.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireInput() {
        return this._require.internalValue;
    }
    // session_duration - computed: true, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getStringAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            approval_groups: cdktf.listMapper(zeroTrustAccessPolicyApprovalGroupsToTerraform, false)(this._approvalGroups.internalValue),
            approval_required: cdktf.booleanToTerraform(this._approvalRequired),
            connection_rules: zeroTrustAccessPolicyConnectionRulesToTerraform(this._connectionRules.internalValue),
            decision: cdktf.stringToTerraform(this._decision),
            exclude: cdktf.listMapper(zeroTrustAccessPolicyExcludeToTerraform, false)(this._exclude.internalValue),
            include: cdktf.listMapper(zeroTrustAccessPolicyIncludeToTerraform, false)(this._include.internalValue),
            isolation_required: cdktf.booleanToTerraform(this._isolationRequired),
            mfa_config: zeroTrustAccessPolicyMfaConfigToTerraform(this._mfaConfig.internalValue),
            name: cdktf.stringToTerraform(this._name),
            purpose_justification_prompt: cdktf.stringToTerraform(this._purposeJustificationPrompt),
            purpose_justification_required: cdktf.booleanToTerraform(this._purposeJustificationRequired),
            require: cdktf.listMapper(zeroTrustAccessPolicyRequireToTerraform, false)(this._require.internalValue),
            session_duration: cdktf.stringToTerraform(this._sessionDuration),
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
            approval_groups: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyApprovalGroupsToHclTerraform, false)(this._approvalGroups.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyApprovalGroupsList",
            },
            approval_required: {
                value: cdktf.booleanToHclTerraform(this._approvalRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            connection_rules: {
                value: zeroTrustAccessPolicyConnectionRulesToHclTerraform(this._connectionRules.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessPolicyConnectionRules",
            },
            decision: {
                value: cdktf.stringToHclTerraform(this._decision),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyExcludeList",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyIncludeList",
            },
            isolation_required: {
                value: cdktf.booleanToHclTerraform(this._isolationRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mfa_config: {
                value: zeroTrustAccessPolicyMfaConfigToHclTerraform(this._mfaConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessPolicyMfaConfig",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            purpose_justification_prompt: {
                value: cdktf.stringToHclTerraform(this._purposeJustificationPrompt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            purpose_justification_required: {
                value: cdktf.booleanToHclTerraform(this._purposeJustificationRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            require: {
                value: cdktf.listMapperHcl(zeroTrustAccessPolicyRequireToHclTerraform, false)(this._require.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustAccessPolicyRequireList",
            },
            session_duration: {
                value: cdktf.stringToHclTerraform(this._sessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
