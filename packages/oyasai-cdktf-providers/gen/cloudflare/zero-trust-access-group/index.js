// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeAuthContextToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeAuthContextOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeAuthMethodToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeAuthMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeAzureAdToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeAzureAdToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeAzureAdOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupExcludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupExcludeCertificateOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeCommonNameToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeCommonNameToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeCommonNameOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeDevicePostureToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeDevicePostureToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeEmailToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeEmailToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeEmailOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeEmailDomainToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeEmailDomainToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeEmailListStructToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeEmailListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupExcludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupExcludeEveryoneOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeGeoToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeGeoToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeGeoOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeGithubOrganizationToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeGroupToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeGroupToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeGroupOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeGsuiteToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeGsuiteOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeIpToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeIpToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeIpOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeIpListStructToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeIpListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeIpListStructOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeLoginMethodToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeLoginMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeOidcToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeOidcToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeOidcOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeOktaToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeOktaToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeOktaOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeSamlToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeSamlToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeSamlOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeServiceTokenToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeServiceTokenToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeUserRiskScoreToTerraform(struct) {
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
export function zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessGroupExcludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessGroupExcludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessGroupExcludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessGroupExcludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessGroupExcludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessGroupExcludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessGroupExcludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessGroupExcludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessGroupExcludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessGroupExcludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessGroupExcludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessGroupExcludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessGroupExcludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessGroupExcludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessGroupExcludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessGroupExcludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessGroupExcludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessGroupExcludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessGroupExcludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessGroupExcludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessGroupExcludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessGroupExcludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
export function zeroTrustAccessGroupExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessGroupExcludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessGroupExcludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessGroupExcludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessGroupExcludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessGroupExcludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessGroupExcludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessGroupExcludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessGroupExcludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessGroupExcludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessGroupExcludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessGroupExcludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeGsuite",
        },
        ip: {
            value: zeroTrustAccessGroupExcludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeIp",
        },
        ip_list: {
            value: zeroTrustAccessGroupExcludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessGroupExcludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessGroupExcludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeOidc",
        },
        okta: {
            value: zeroTrustAccessGroupExcludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeOkta",
        },
        saml: {
            value: zeroTrustAccessGroupExcludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeSaml",
        },
        service_token: {
            value: zeroTrustAccessGroupExcludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupExcludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessGroupExcludeOutputReference extends cdktf.ComplexObject {
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
    _anyValidServiceToken = new ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
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
    _authContext = new ZeroTrustAccessGroupExcludeAuthContextOutputReference(this, "auth_context");
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
    _authMethod = new ZeroTrustAccessGroupExcludeAuthMethodOutputReference(this, "auth_method");
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
    _azureAd = new ZeroTrustAccessGroupExcludeAzureAdOutputReference(this, "azure_ad");
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
    _certificate = new ZeroTrustAccessGroupExcludeCertificateOutputReference(this, "certificate");
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
    _commonName = new ZeroTrustAccessGroupExcludeCommonNameOutputReference(this, "common_name");
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
    _devicePosture = new ZeroTrustAccessGroupExcludeDevicePostureOutputReference(this, "device_posture");
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
    _email = new ZeroTrustAccessGroupExcludeEmailOutputReference(this, "email");
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
    _emailDomain = new ZeroTrustAccessGroupExcludeEmailDomainOutputReference(this, "email_domain");
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
    _emailList = new ZeroTrustAccessGroupExcludeEmailListStructOutputReference(this, "email_list");
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
    _everyone = new ZeroTrustAccessGroupExcludeEveryoneOutputReference(this, "everyone");
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
    _externalEvaluation = new ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(this, "external_evaluation");
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
    _geo = new ZeroTrustAccessGroupExcludeGeoOutputReference(this, "geo");
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
    _githubOrganization = new ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference(this, "github_organization");
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
    _group = new ZeroTrustAccessGroupExcludeGroupOutputReference(this, "group");
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
    _gsuite = new ZeroTrustAccessGroupExcludeGsuiteOutputReference(this, "gsuite");
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
    _ip = new ZeroTrustAccessGroupExcludeIpOutputReference(this, "ip");
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
    _ipList = new ZeroTrustAccessGroupExcludeIpListStructOutputReference(this, "ip_list");
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
    _linkedAppToken = new ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference(this, "linked_app_token");
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
    _loginMethod = new ZeroTrustAccessGroupExcludeLoginMethodOutputReference(this, "login_method");
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
    _oidc = new ZeroTrustAccessGroupExcludeOidcOutputReference(this, "oidc");
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
    _okta = new ZeroTrustAccessGroupExcludeOktaOutputReference(this, "okta");
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
    _saml = new ZeroTrustAccessGroupExcludeSamlOutputReference(this, "saml");
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
    _serviceToken = new ZeroTrustAccessGroupExcludeServiceTokenOutputReference(this, "service_token");
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
    _userRiskScore = new ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference(this, "user_risk_score");
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
export class ZeroTrustAccessGroupExcludeList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessGroupExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeAuthContextToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeAuthContextOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeAuthMethodToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeAuthMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeAzureAdToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeAzureAdToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeAzureAdOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupIncludeCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupIncludeCertificateOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeCommonNameToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeCommonNameToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeCommonNameOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeDevicePostureToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeDevicePostureToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeEmailToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeEmailToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeEmailOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeEmailDomainToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeEmailDomainToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeEmailListStructToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeEmailListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupIncludeEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupIncludeEveryoneOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeGeoToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeGeoToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeGeoOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeGithubOrganizationToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeGroupToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeGroupToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeGroupOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeGsuiteToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeGsuiteOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeIpToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeIpToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeIpOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeIpListStructToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeIpListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeIpListStructOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeLoginMethodToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeLoginMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeOidcToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeOidcToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeOidcOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeOktaToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeOktaToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeOktaOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeSamlToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeSamlToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeSamlOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeServiceTokenToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeServiceTokenToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeUserRiskScoreToTerraform(struct) {
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
export function zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessGroupIncludeAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessGroupIncludeAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessGroupIncludeAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessGroupIncludeCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessGroupIncludeCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessGroupIncludeDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessGroupIncludeEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessGroupIncludeEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessGroupIncludeEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessGroupIncludeEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessGroupIncludeGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessGroupIncludeGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessGroupIncludeGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessGroupIncludeGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessGroupIncludeIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessGroupIncludeIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessGroupIncludeLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessGroupIncludeOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessGroupIncludeOktaToTerraform(struct.okta),
        saml: zeroTrustAccessGroupIncludeSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessGroupIncludeServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessGroupIncludeUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
export function zeroTrustAccessGroupIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessGroupIncludeAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessGroupIncludeAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeAzureAd",
        },
        certificate: {
            value: zeroTrustAccessGroupIncludeCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeCertificate",
        },
        common_name: {
            value: zeroTrustAccessGroupIncludeCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeCommonName",
        },
        device_posture: {
            value: zeroTrustAccessGroupIncludeDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeDevicePosture",
        },
        email: {
            value: zeroTrustAccessGroupIncludeEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEmail",
        },
        email_domain: {
            value: zeroTrustAccessGroupIncludeEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessGroupIncludeEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessGroupIncludeEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessGroupIncludeGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGeo",
        },
        github_organization: {
            value: zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGithubOrganization",
        },
        group: {
            value: zeroTrustAccessGroupIncludeGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGroup",
        },
        gsuite: {
            value: zeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeGsuite",
        },
        ip: {
            value: zeroTrustAccessGroupIncludeIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeIp",
        },
        ip_list: {
            value: zeroTrustAccessGroupIncludeIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessGroupIncludeLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessGroupIncludeOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeOidc",
        },
        okta: {
            value: zeroTrustAccessGroupIncludeOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeOkta",
        },
        saml: {
            value: zeroTrustAccessGroupIncludeSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeSaml",
        },
        service_token: {
            value: zeroTrustAccessGroupIncludeServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupIncludeUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessGroupIncludeOutputReference extends cdktf.ComplexObject {
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
    _anyValidServiceToken = new ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
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
    _authContext = new ZeroTrustAccessGroupIncludeAuthContextOutputReference(this, "auth_context");
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
    _authMethod = new ZeroTrustAccessGroupIncludeAuthMethodOutputReference(this, "auth_method");
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
    _azureAd = new ZeroTrustAccessGroupIncludeAzureAdOutputReference(this, "azure_ad");
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
    _certificate = new ZeroTrustAccessGroupIncludeCertificateOutputReference(this, "certificate");
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
    _commonName = new ZeroTrustAccessGroupIncludeCommonNameOutputReference(this, "common_name");
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
    _devicePosture = new ZeroTrustAccessGroupIncludeDevicePostureOutputReference(this, "device_posture");
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
    _email = new ZeroTrustAccessGroupIncludeEmailOutputReference(this, "email");
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
    _emailDomain = new ZeroTrustAccessGroupIncludeEmailDomainOutputReference(this, "email_domain");
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
    _emailList = new ZeroTrustAccessGroupIncludeEmailListStructOutputReference(this, "email_list");
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
    _everyone = new ZeroTrustAccessGroupIncludeEveryoneOutputReference(this, "everyone");
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
    _externalEvaluation = new ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(this, "external_evaluation");
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
    _geo = new ZeroTrustAccessGroupIncludeGeoOutputReference(this, "geo");
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
    _githubOrganization = new ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference(this, "github_organization");
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
    _group = new ZeroTrustAccessGroupIncludeGroupOutputReference(this, "group");
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
    _gsuite = new ZeroTrustAccessGroupIncludeGsuiteOutputReference(this, "gsuite");
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
    _ip = new ZeroTrustAccessGroupIncludeIpOutputReference(this, "ip");
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
    _ipList = new ZeroTrustAccessGroupIncludeIpListStructOutputReference(this, "ip_list");
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
    _linkedAppToken = new ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference(this, "linked_app_token");
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
    _loginMethod = new ZeroTrustAccessGroupIncludeLoginMethodOutputReference(this, "login_method");
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
    _oidc = new ZeroTrustAccessGroupIncludeOidcOutputReference(this, "oidc");
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
    _okta = new ZeroTrustAccessGroupIncludeOktaOutputReference(this, "okta");
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
    _saml = new ZeroTrustAccessGroupIncludeSamlOutputReference(this, "saml");
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
    _serviceToken = new ZeroTrustAccessGroupIncludeServiceTokenOutputReference(this, "service_token");
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
    _userRiskScore = new ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference(this, "user_risk_score");
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
export class ZeroTrustAccessGroupIncludeList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessGroupIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireAuthContextToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireAuthContextToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireAuthContextOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireAuthMethodToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireAuthMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireAuthMethodOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireAzureAdToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireAzureAdToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireAzureAdOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupRequireCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupRequireCertificateOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireCommonNameToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireCommonNameToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireCommonNameOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireDevicePostureToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireDevicePostureToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireDevicePostureOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireEmailToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireEmailToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireEmailOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireEmailDomainToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireEmailDomainToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireEmailDomainOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireEmailListStructToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireEmailListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireEmailListStructOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireEveryoneToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustAccessGroupRequireEveryoneToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustAccessGroupRequireEveryoneOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireGeoToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireGeoToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireGeoOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireGithubOrganizationToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireGroupToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireGroupToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireGroupOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireGsuiteToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireGsuiteToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireGsuiteOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireIpToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireIpToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireIpOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireIpListStructToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireIpListStructToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireIpListStructOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireLinkedAppTokenToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireLoginMethodToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireLoginMethodToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireLoginMethodOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireOidcToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireOidcToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireOidcOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireOktaToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireOktaToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireOktaOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireSamlToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireSamlToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireSamlOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireServiceTokenToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireServiceTokenToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireServiceTokenOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireUserRiskScoreToTerraform(struct) {
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
export function zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform(struct) {
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
export class ZeroTrustAccessGroupRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
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
export function zeroTrustAccessGroupRequireToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        any_valid_service_token: zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform(struct.anyValidServiceToken),
        auth_context: zeroTrustAccessGroupRequireAuthContextToTerraform(struct.authContext),
        auth_method: zeroTrustAccessGroupRequireAuthMethodToTerraform(struct.authMethod),
        azure_ad: zeroTrustAccessGroupRequireAzureAdToTerraform(struct.azureAd),
        certificate: zeroTrustAccessGroupRequireCertificateToTerraform(struct.certificate),
        common_name: zeroTrustAccessGroupRequireCommonNameToTerraform(struct.commonName),
        device_posture: zeroTrustAccessGroupRequireDevicePostureToTerraform(struct.devicePosture),
        email: zeroTrustAccessGroupRequireEmailToTerraform(struct.email),
        email_domain: zeroTrustAccessGroupRequireEmailDomainToTerraform(struct.emailDomain),
        email_list: zeroTrustAccessGroupRequireEmailListStructToTerraform(struct.emailList),
        everyone: zeroTrustAccessGroupRequireEveryoneToTerraform(struct.everyone),
        external_evaluation: zeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct.externalEvaluation),
        geo: zeroTrustAccessGroupRequireGeoToTerraform(struct.geo),
        github_organization: zeroTrustAccessGroupRequireGithubOrganizationToTerraform(struct.githubOrganization),
        group: zeroTrustAccessGroupRequireGroupToTerraform(struct.group),
        gsuite: zeroTrustAccessGroupRequireGsuiteToTerraform(struct.gsuite),
        ip: zeroTrustAccessGroupRequireIpToTerraform(struct.ip),
        ip_list: zeroTrustAccessGroupRequireIpListStructToTerraform(struct.ipList),
        linked_app_token: zeroTrustAccessGroupRequireLinkedAppTokenToTerraform(struct.linkedAppToken),
        login_method: zeroTrustAccessGroupRequireLoginMethodToTerraform(struct.loginMethod),
        oidc: zeroTrustAccessGroupRequireOidcToTerraform(struct.oidc),
        okta: zeroTrustAccessGroupRequireOktaToTerraform(struct.okta),
        saml: zeroTrustAccessGroupRequireSamlToTerraform(struct.saml),
        service_token: zeroTrustAccessGroupRequireServiceTokenToTerraform(struct.serviceToken),
        user_risk_score: zeroTrustAccessGroupRequireUserRiskScoreToTerraform(struct.userRiskScore),
    };
}
export function zeroTrustAccessGroupRequireToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        any_valid_service_token: {
            value: zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform(struct.anyValidServiceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAnyValidServiceToken",
        },
        auth_context: {
            value: zeroTrustAccessGroupRequireAuthContextToHclTerraform(struct.authContext),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAuthContext",
        },
        auth_method: {
            value: zeroTrustAccessGroupRequireAuthMethodToHclTerraform(struct.authMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAuthMethod",
        },
        azure_ad: {
            value: zeroTrustAccessGroupRequireAzureAdToHclTerraform(struct.azureAd),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireAzureAd",
        },
        certificate: {
            value: zeroTrustAccessGroupRequireCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireCertificate",
        },
        common_name: {
            value: zeroTrustAccessGroupRequireCommonNameToHclTerraform(struct.commonName),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireCommonName",
        },
        device_posture: {
            value: zeroTrustAccessGroupRequireDevicePostureToHclTerraform(struct.devicePosture),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireDevicePosture",
        },
        email: {
            value: zeroTrustAccessGroupRequireEmailToHclTerraform(struct.email),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEmail",
        },
        email_domain: {
            value: zeroTrustAccessGroupRequireEmailDomainToHclTerraform(struct.emailDomain),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEmailDomain",
        },
        email_list: {
            value: zeroTrustAccessGroupRequireEmailListStructToHclTerraform(struct.emailList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEmailListStruct",
        },
        everyone: {
            value: zeroTrustAccessGroupRequireEveryoneToHclTerraform(struct.everyone),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireEveryone",
        },
        external_evaluation: {
            value: zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct.externalEvaluation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireExternalEvaluation",
        },
        geo: {
            value: zeroTrustAccessGroupRequireGeoToHclTerraform(struct.geo),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGeo",
        },
        github_organization: {
            value: zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform(struct.githubOrganization),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGithubOrganization",
        },
        group: {
            value: zeroTrustAccessGroupRequireGroupToHclTerraform(struct.group),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGroup",
        },
        gsuite: {
            value: zeroTrustAccessGroupRequireGsuiteToHclTerraform(struct.gsuite),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireGsuite",
        },
        ip: {
            value: zeroTrustAccessGroupRequireIpToHclTerraform(struct.ip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireIp",
        },
        ip_list: {
            value: zeroTrustAccessGroupRequireIpListStructToHclTerraform(struct.ipList),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireIpListStruct",
        },
        linked_app_token: {
            value: zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform(struct.linkedAppToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireLinkedAppToken",
        },
        login_method: {
            value: zeroTrustAccessGroupRequireLoginMethodToHclTerraform(struct.loginMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireLoginMethod",
        },
        oidc: {
            value: zeroTrustAccessGroupRequireOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireOidc",
        },
        okta: {
            value: zeroTrustAccessGroupRequireOktaToHclTerraform(struct.okta),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireOkta",
        },
        saml: {
            value: zeroTrustAccessGroupRequireSamlToHclTerraform(struct.saml),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireSaml",
        },
        service_token: {
            value: zeroTrustAccessGroupRequireServiceTokenToHclTerraform(struct.serviceToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireServiceToken",
        },
        user_risk_score: {
            value: zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform(struct.userRiskScore),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessGroupRequireUserRiskScore",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessGroupRequireOutputReference extends cdktf.ComplexObject {
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
    _anyValidServiceToken = new ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
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
    _authContext = new ZeroTrustAccessGroupRequireAuthContextOutputReference(this, "auth_context");
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
    _authMethod = new ZeroTrustAccessGroupRequireAuthMethodOutputReference(this, "auth_method");
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
    _azureAd = new ZeroTrustAccessGroupRequireAzureAdOutputReference(this, "azure_ad");
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
    _certificate = new ZeroTrustAccessGroupRequireCertificateOutputReference(this, "certificate");
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
    _commonName = new ZeroTrustAccessGroupRequireCommonNameOutputReference(this, "common_name");
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
    _devicePosture = new ZeroTrustAccessGroupRequireDevicePostureOutputReference(this, "device_posture");
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
    _email = new ZeroTrustAccessGroupRequireEmailOutputReference(this, "email");
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
    _emailDomain = new ZeroTrustAccessGroupRequireEmailDomainOutputReference(this, "email_domain");
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
    _emailList = new ZeroTrustAccessGroupRequireEmailListStructOutputReference(this, "email_list");
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
    _everyone = new ZeroTrustAccessGroupRequireEveryoneOutputReference(this, "everyone");
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
    _externalEvaluation = new ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(this, "external_evaluation");
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
    _geo = new ZeroTrustAccessGroupRequireGeoOutputReference(this, "geo");
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
    _githubOrganization = new ZeroTrustAccessGroupRequireGithubOrganizationOutputReference(this, "github_organization");
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
    _group = new ZeroTrustAccessGroupRequireGroupOutputReference(this, "group");
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
    _gsuite = new ZeroTrustAccessGroupRequireGsuiteOutputReference(this, "gsuite");
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
    _ip = new ZeroTrustAccessGroupRequireIpOutputReference(this, "ip");
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
    _ipList = new ZeroTrustAccessGroupRequireIpListStructOutputReference(this, "ip_list");
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
    _linkedAppToken = new ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference(this, "linked_app_token");
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
    _loginMethod = new ZeroTrustAccessGroupRequireLoginMethodOutputReference(this, "login_method");
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
    _oidc = new ZeroTrustAccessGroupRequireOidcOutputReference(this, "oidc");
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
    _okta = new ZeroTrustAccessGroupRequireOktaOutputReference(this, "okta");
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
    _saml = new ZeroTrustAccessGroupRequireSamlOutputReference(this, "saml");
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
    _serviceToken = new ZeroTrustAccessGroupRequireServiceTokenOutputReference(this, "service_token");
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
    _userRiskScore = new ZeroTrustAccessGroupRequireUserRiskScoreOutputReference(this, "user_risk_score");
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
export class ZeroTrustAccessGroupRequireList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessGroupRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}
*/
export class ZeroTrustAccessGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_group";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessGroup to import
    * @param importFromId The id of the existing ZeroTrustAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessGroup to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_group", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_group',
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
        this._exclude.internalValue = config.exclude;
        this._include.internalValue = config.include;
        this._isDefault = config.isDefault;
        this._name = config.name;
        this._require.internalValue = config.require;
        this._zoneId = config.zoneId;
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
    // exclude - computed: false, optional: true, required: false
    _exclude = new ZeroTrustAccessGroupExcludeList(this, "exclude", false);
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
    // include - computed: false, optional: false, required: true
    _include = new ZeroTrustAccessGroupIncludeList(this, "include", false);
    get include() {
        return this._include;
    }
    putInclude(value) {
        this._include.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include.internalValue;
    }
    // is_default - computed: false, optional: true, required: false
    _isDefault;
    get isDefault() {
        return this.getBooleanAttribute('is_default');
    }
    set isDefault(value) {
        this._isDefault = value;
    }
    resetIsDefault() {
        this._isDefault = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isDefaultInput() {
        return this._isDefault;
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
    // require - computed: false, optional: true, required: false
    _require = new ZeroTrustAccessGroupRequireList(this, "require", false);
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
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            exclude: cdktf.listMapper(zeroTrustAccessGroupExcludeToTerraform, false)(this._exclude.internalValue),
            include: cdktf.listMapper(zeroTrustAccessGroupIncludeToTerraform, false)(this._include.internalValue),
            is_default: cdktf.booleanToTerraform(this._isDefault),
            name: cdktf.stringToTerraform(this._name),
            require: cdktf.listMapper(zeroTrustAccessGroupRequireToTerraform, false)(this._require.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
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
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustAccessGroupExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessGroupExcludeList",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustAccessGroupIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessGroupIncludeList",
            },
            is_default: {
                value: cdktf.booleanToHclTerraform(this._isDefault),
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
            require: {
                value: cdktf.listMapperHcl(zeroTrustAccessGroupRequireToHclTerraform, false)(this._require.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessGroupRequireList",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
