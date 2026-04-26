// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export function zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform(struct) {
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
        header_name: {
            value: cdktf.stringToHclTerraform(struct.headerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._headerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._headerName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._headerName = value.headerName;
        }
    }
    // attribute_name - computed: false, optional: true, required: false
    _attributeName;
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    set attributeName(value) {
        this._attributeName = value;
    }
    resetAttributeName() {
        this._attributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attributeNameInput() {
        return this._attributeName;
    }
    // header_name - computed: false, optional: true, required: false
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    resetHeaderName() {
        this._headerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export class ZeroTrustAccessIdentityProviderConfigHeaderAttributesList extends cdktf.ComplexList {
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
        return new ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessIdentityProviderConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        apps_domain: cdktf.stringToTerraform(struct.appsDomain),
        attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.attributes),
        auth_url: cdktf.stringToTerraform(struct.authUrl),
        authorization_server_id: cdktf.stringToTerraform(struct.authorizationServerId),
        centrify_account: cdktf.stringToTerraform(struct.centrifyAccount),
        centrify_app_id: cdktf.stringToTerraform(struct.centrifyAppId),
        certs_url: cdktf.stringToTerraform(struct.certsUrl),
        claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.claims),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        conditional_access_enabled: cdktf.booleanToTerraform(struct.conditionalAccessEnabled),
        directory_id: cdktf.stringToTerraform(struct.directoryId),
        email_attribute_name: cdktf.stringToTerraform(struct.emailAttributeName),
        email_claim_name: cdktf.stringToTerraform(struct.emailClaimName),
        header_attributes: cdktf.listMapper(zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform, false)(struct.headerAttributes),
        idp_public_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.idpPublicCerts),
        issuer_url: cdktf.stringToTerraform(struct.issuerUrl),
        okta_account: cdktf.stringToTerraform(struct.oktaAccount),
        onelogin_account: cdktf.stringToTerraform(struct.oneloginAccount),
        ping_env_id: cdktf.stringToTerraform(struct.pingEnvId),
        pkce_enabled: cdktf.booleanToTerraform(struct.pkceEnabled),
        prompt: cdktf.stringToTerraform(struct.prompt),
        scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.scopes),
        sign_request: cdktf.booleanToTerraform(struct.signRequest),
        sso_target_url: cdktf.stringToTerraform(struct.ssoTargetUrl),
        support_groups: cdktf.booleanToTerraform(struct.supportGroups),
        token_url: cdktf.stringToTerraform(struct.tokenUrl),
    };
}
export function zeroTrustAccessIdentityProviderConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        apps_domain: {
            value: cdktf.stringToHclTerraform(struct.appsDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attributes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.attributes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        auth_url: {
            value: cdktf.stringToHclTerraform(struct.authUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_server_id: {
            value: cdktf.stringToHclTerraform(struct.authorizationServerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        centrify_account: {
            value: cdktf.stringToHclTerraform(struct.centrifyAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        centrify_app_id: {
            value: cdktf.stringToHclTerraform(struct.centrifyAppId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certs_url: {
            value: cdktf.stringToHclTerraform(struct.certsUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claims: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.claims),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditional_access_enabled: {
            value: cdktf.booleanToHclTerraform(struct.conditionalAccessEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        directory_id: {
            value: cdktf.stringToHclTerraform(struct.directoryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_attribute_name: {
            value: cdktf.stringToHclTerraform(struct.emailAttributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_claim_name: {
            value: cdktf.stringToHclTerraform(struct.emailClaimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_attributes: {
            value: cdktf.listMapperHcl(zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform, false)(struct.headerAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessIdentityProviderConfigHeaderAttributesList",
        },
        idp_public_certs: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.idpPublicCerts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        issuer_url: {
            value: cdktf.stringToHclTerraform(struct.issuerUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        okta_account: {
            value: cdktf.stringToHclTerraform(struct.oktaAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        onelogin_account: {
            value: cdktf.stringToHclTerraform(struct.oneloginAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ping_env_id: {
            value: cdktf.stringToHclTerraform(struct.pingEnvId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pkce_enabled: {
            value: cdktf.booleanToHclTerraform(struct.pkceEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        prompt: {
            value: cdktf.stringToHclTerraform(struct.prompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sign_request: {
            value: cdktf.booleanToHclTerraform(struct.signRequest),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sso_target_url: {
            value: cdktf.stringToHclTerraform(struct.ssoTargetUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        support_groups: {
            value: cdktf.booleanToHclTerraform(struct.supportGroups),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        token_url: {
            value: cdktf.stringToHclTerraform(struct.tokenUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessIdentityProviderConfigAOutputReference extends cdktf.ComplexObject {
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
        if (this._appsDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.appsDomain = this._appsDomain;
        }
        if (this._attributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        if (this._authUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authUrl = this._authUrl;
        }
        if (this._authorizationServerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationServerId = this._authorizationServerId;
        }
        if (this._centrifyAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.centrifyAccount = this._centrifyAccount;
        }
        if (this._centrifyAppId !== undefined) {
            hasAnyValues = true;
            internalValueResult.centrifyAppId = this._centrifyAppId;
        }
        if (this._certsUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.certsUrl = this._certsUrl;
        }
        if (this._claims !== undefined) {
            hasAnyValues = true;
            internalValueResult.claims = this._claims;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._conditionalAccessEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionalAccessEnabled = this._conditionalAccessEnabled;
        }
        if (this._directoryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryId = this._directoryId;
        }
        if (this._emailAttributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAttributeName = this._emailAttributeName;
        }
        if (this._emailClaimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailClaimName = this._emailClaimName;
        }
        if (this._headerAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerAttributes = this._headerAttributes?.internalValue;
        }
        if (this._idpPublicCerts !== undefined) {
            hasAnyValues = true;
            internalValueResult.idpPublicCerts = this._idpPublicCerts;
        }
        if (this._issuerUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuerUrl = this._issuerUrl;
        }
        if (this._oktaAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.oktaAccount = this._oktaAccount;
        }
        if (this._oneloginAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.oneloginAccount = this._oneloginAccount;
        }
        if (this._pingEnvId !== undefined) {
            hasAnyValues = true;
            internalValueResult.pingEnvId = this._pingEnvId;
        }
        if (this._pkceEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.pkceEnabled = this._pkceEnabled;
        }
        if (this._prompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.prompt = this._prompt;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        if (this._signRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.signRequest = this._signRequest;
        }
        if (this._ssoTargetUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssoTargetUrl = this._ssoTargetUrl;
        }
        if (this._supportGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportGroups = this._supportGroups;
        }
        if (this._tokenUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appsDomain = undefined;
            this._attributes = undefined;
            this._authUrl = undefined;
            this._authorizationServerId = undefined;
            this._centrifyAccount = undefined;
            this._centrifyAppId = undefined;
            this._certsUrl = undefined;
            this._claims = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._conditionalAccessEnabled = undefined;
            this._directoryId = undefined;
            this._emailAttributeName = undefined;
            this._emailClaimName = undefined;
            this._headerAttributes.internalValue = undefined;
            this._idpPublicCerts = undefined;
            this._issuerUrl = undefined;
            this._oktaAccount = undefined;
            this._oneloginAccount = undefined;
            this._pingEnvId = undefined;
            this._pkceEnabled = undefined;
            this._prompt = undefined;
            this._scopes = undefined;
            this._signRequest = undefined;
            this._ssoTargetUrl = undefined;
            this._supportGroups = undefined;
            this._tokenUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appsDomain = value.appsDomain;
            this._attributes = value.attributes;
            this._authUrl = value.authUrl;
            this._authorizationServerId = value.authorizationServerId;
            this._centrifyAccount = value.centrifyAccount;
            this._centrifyAppId = value.centrifyAppId;
            this._certsUrl = value.certsUrl;
            this._claims = value.claims;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._conditionalAccessEnabled = value.conditionalAccessEnabled;
            this._directoryId = value.directoryId;
            this._emailAttributeName = value.emailAttributeName;
            this._emailClaimName = value.emailClaimName;
            this._headerAttributes.internalValue = value.headerAttributes;
            this._idpPublicCerts = value.idpPublicCerts;
            this._issuerUrl = value.issuerUrl;
            this._oktaAccount = value.oktaAccount;
            this._oneloginAccount = value.oneloginAccount;
            this._pingEnvId = value.pingEnvId;
            this._pkceEnabled = value.pkceEnabled;
            this._prompt = value.prompt;
            this._scopes = value.scopes;
            this._signRequest = value.signRequest;
            this._ssoTargetUrl = value.ssoTargetUrl;
            this._supportGroups = value.supportGroups;
            this._tokenUrl = value.tokenUrl;
        }
    }
    // apps_domain - computed: false, optional: true, required: false
    _appsDomain;
    get appsDomain() {
        return this.getStringAttribute('apps_domain');
    }
    set appsDomain(value) {
        this._appsDomain = value;
    }
    resetAppsDomain() {
        this._appsDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appsDomainInput() {
        return this._appsDomain;
    }
    // attributes - computed: false, optional: true, required: false
    _attributes;
    get attributes() {
        return this.getListAttribute('attributes');
    }
    set attributes(value) {
        this._attributes = value;
    }
    resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attributesInput() {
        return this._attributes;
    }
    // auth_url - computed: false, optional: true, required: false
    _authUrl;
    get authUrl() {
        return this.getStringAttribute('auth_url');
    }
    set authUrl(value) {
        this._authUrl = value;
    }
    resetAuthUrl() {
        this._authUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authUrlInput() {
        return this._authUrl;
    }
    // authorization_server_id - computed: false, optional: true, required: false
    _authorizationServerId;
    get authorizationServerId() {
        return this.getStringAttribute('authorization_server_id');
    }
    set authorizationServerId(value) {
        this._authorizationServerId = value;
    }
    resetAuthorizationServerId() {
        this._authorizationServerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationServerIdInput() {
        return this._authorizationServerId;
    }
    // centrify_account - computed: false, optional: true, required: false
    _centrifyAccount;
    get centrifyAccount() {
        return this.getStringAttribute('centrify_account');
    }
    set centrifyAccount(value) {
        this._centrifyAccount = value;
    }
    resetCentrifyAccount() {
        this._centrifyAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get centrifyAccountInput() {
        return this._centrifyAccount;
    }
    // centrify_app_id - computed: false, optional: true, required: false
    _centrifyAppId;
    get centrifyAppId() {
        return this.getStringAttribute('centrify_app_id');
    }
    set centrifyAppId(value) {
        this._centrifyAppId = value;
    }
    resetCentrifyAppId() {
        this._centrifyAppId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get centrifyAppIdInput() {
        return this._centrifyAppId;
    }
    // certs_url - computed: false, optional: true, required: false
    _certsUrl;
    get certsUrl() {
        return this.getStringAttribute('certs_url');
    }
    set certsUrl(value) {
        this._certsUrl = value;
    }
    resetCertsUrl() {
        this._certsUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certsUrlInput() {
        return this._certsUrl;
    }
    // claims - computed: false, optional: true, required: false
    _claims;
    get claims() {
        return this.getListAttribute('claims');
    }
    set claims(value) {
        this._claims = value;
    }
    resetClaims() {
        this._claims = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get claimsInput() {
        return this._claims;
    }
    // client_id - computed: false, optional: true, required: false
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // client_secret - computed: false, optional: true, required: false
    _clientSecret;
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    set clientSecret(value) {
        this._clientSecret = value;
    }
    resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretInput() {
        return this._clientSecret;
    }
    // conditional_access_enabled - computed: false, optional: true, required: false
    _conditionalAccessEnabled;
    get conditionalAccessEnabled() {
        return this.getBooleanAttribute('conditional_access_enabled');
    }
    set conditionalAccessEnabled(value) {
        this._conditionalAccessEnabled = value;
    }
    resetConditionalAccessEnabled() {
        this._conditionalAccessEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionalAccessEnabledInput() {
        return this._conditionalAccessEnabled;
    }
    // directory_id - computed: false, optional: true, required: false
    _directoryId;
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    set directoryId(value) {
        this._directoryId = value;
    }
    resetDirectoryId() {
        this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directoryIdInput() {
        return this._directoryId;
    }
    // email_attribute_name - computed: false, optional: true, required: false
    _emailAttributeName;
    get emailAttributeName() {
        return this.getStringAttribute('email_attribute_name');
    }
    set emailAttributeName(value) {
        this._emailAttributeName = value;
    }
    resetEmailAttributeName() {
        this._emailAttributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailAttributeNameInput() {
        return this._emailAttributeName;
    }
    // email_claim_name - computed: false, optional: true, required: false
    _emailClaimName;
    get emailClaimName() {
        return this.getStringAttribute('email_claim_name');
    }
    set emailClaimName(value) {
        this._emailClaimName = value;
    }
    resetEmailClaimName() {
        this._emailClaimName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailClaimNameInput() {
        return this._emailClaimName;
    }
    // header_attributes - computed: false, optional: true, required: false
    _headerAttributes = new ZeroTrustAccessIdentityProviderConfigHeaderAttributesList(this, "header_attributes", false);
    get headerAttributes() {
        return this._headerAttributes;
    }
    putHeaderAttributes(value) {
        this._headerAttributes.internalValue = value;
    }
    resetHeaderAttributes() {
        this._headerAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerAttributesInput() {
        return this._headerAttributes.internalValue;
    }
    // idp_public_certs - computed: false, optional: true, required: false
    _idpPublicCerts;
    get idpPublicCerts() {
        return this.getListAttribute('idp_public_certs');
    }
    set idpPublicCerts(value) {
        this._idpPublicCerts = value;
    }
    resetIdpPublicCerts() {
        this._idpPublicCerts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idpPublicCertsInput() {
        return this._idpPublicCerts;
    }
    // issuer_url - computed: false, optional: true, required: false
    _issuerUrl;
    get issuerUrl() {
        return this.getStringAttribute('issuer_url');
    }
    set issuerUrl(value) {
        this._issuerUrl = value;
    }
    resetIssuerUrl() {
        this._issuerUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get issuerUrlInput() {
        return this._issuerUrl;
    }
    // okta_account - computed: false, optional: true, required: false
    _oktaAccount;
    get oktaAccount() {
        return this.getStringAttribute('okta_account');
    }
    set oktaAccount(value) {
        this._oktaAccount = value;
    }
    resetOktaAccount() {
        this._oktaAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oktaAccountInput() {
        return this._oktaAccount;
    }
    // onelogin_account - computed: false, optional: true, required: false
    _oneloginAccount;
    get oneloginAccount() {
        return this.getStringAttribute('onelogin_account');
    }
    set oneloginAccount(value) {
        this._oneloginAccount = value;
    }
    resetOneloginAccount() {
        this._oneloginAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oneloginAccountInput() {
        return this._oneloginAccount;
    }
    // ping_env_id - computed: false, optional: true, required: false
    _pingEnvId;
    get pingEnvId() {
        return this.getStringAttribute('ping_env_id');
    }
    set pingEnvId(value) {
        this._pingEnvId = value;
    }
    resetPingEnvId() {
        this._pingEnvId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pingEnvIdInput() {
        return this._pingEnvId;
    }
    // pkce_enabled - computed: false, optional: true, required: false
    _pkceEnabled;
    get pkceEnabled() {
        return this.getBooleanAttribute('pkce_enabled');
    }
    set pkceEnabled(value) {
        this._pkceEnabled = value;
    }
    resetPkceEnabled() {
        this._pkceEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pkceEnabledInput() {
        return this._pkceEnabled;
    }
    // prompt - computed: false, optional: true, required: false
    _prompt;
    get prompt() {
        return this.getStringAttribute('prompt');
    }
    set prompt(value) {
        this._prompt = value;
    }
    resetPrompt() {
        this._prompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get promptInput() {
        return this._prompt;
    }
    // redirect_url - computed: true, optional: false, required: false
    get redirectUrl() {
        return this.getStringAttribute('redirect_url');
    }
    // scopes - computed: false, optional: true, required: false
    _scopes;
    get scopes() {
        return this.getListAttribute('scopes');
    }
    set scopes(value) {
        this._scopes = value;
    }
    resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopesInput() {
        return this._scopes;
    }
    // sign_request - computed: false, optional: true, required: false
    _signRequest;
    get signRequest() {
        return this.getBooleanAttribute('sign_request');
    }
    set signRequest(value) {
        this._signRequest = value;
    }
    resetSignRequest() {
        this._signRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get signRequestInput() {
        return this._signRequest;
    }
    // sso_target_url - computed: false, optional: true, required: false
    _ssoTargetUrl;
    get ssoTargetUrl() {
        return this.getStringAttribute('sso_target_url');
    }
    set ssoTargetUrl(value) {
        this._ssoTargetUrl = value;
    }
    resetSsoTargetUrl() {
        this._ssoTargetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ssoTargetUrlInput() {
        return this._ssoTargetUrl;
    }
    // support_groups - computed: false, optional: true, required: false
    _supportGroups;
    get supportGroups() {
        return this.getBooleanAttribute('support_groups');
    }
    set supportGroups(value) {
        this._supportGroups = value;
    }
    resetSupportGroups() {
        this._supportGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportGroupsInput() {
        return this._supportGroups;
    }
    // token_url - computed: false, optional: true, required: false
    _tokenUrl;
    get tokenUrl() {
        return this.getStringAttribute('token_url');
    }
    set tokenUrl(value) {
        this._tokenUrl = value;
    }
    resetTokenUrl() {
        this._tokenUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenUrlInput() {
        return this._tokenUrl;
    }
}
export function zeroTrustAccessIdentityProviderScimConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        identity_update_behavior: cdktf.stringToTerraform(struct.identityUpdateBehavior),
        seat_deprovision: cdktf.booleanToTerraform(struct.seatDeprovision),
        user_deprovision: cdktf.booleanToTerraform(struct.userDeprovision),
    };
}
export function zeroTrustAccessIdentityProviderScimConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        identity_update_behavior: {
            value: cdktf.stringToHclTerraform(struct.identityUpdateBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        seat_deprovision: {
            value: cdktf.booleanToHclTerraform(struct.seatDeprovision),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_deprovision: {
            value: cdktf.booleanToHclTerraform(struct.userDeprovision),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessIdentityProviderScimConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._identityUpdateBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityUpdateBehavior = this._identityUpdateBehavior;
        }
        if (this._seatDeprovision !== undefined) {
            hasAnyValues = true;
            internalValueResult.seatDeprovision = this._seatDeprovision;
        }
        if (this._userDeprovision !== undefined) {
            hasAnyValues = true;
            internalValueResult.userDeprovision = this._userDeprovision;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._identityUpdateBehavior = undefined;
            this._seatDeprovision = undefined;
            this._userDeprovision = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._identityUpdateBehavior = value.identityUpdateBehavior;
            this._seatDeprovision = value.seatDeprovision;
            this._userDeprovision = value.userDeprovision;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // identity_update_behavior - computed: true, optional: true, required: false
    _identityUpdateBehavior;
    get identityUpdateBehavior() {
        return this.getStringAttribute('identity_update_behavior');
    }
    set identityUpdateBehavior(value) {
        this._identityUpdateBehavior = value;
    }
    resetIdentityUpdateBehavior() {
        this._identityUpdateBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityUpdateBehaviorInput() {
        return this._identityUpdateBehavior;
    }
    // scim_base_url - computed: true, optional: false, required: false
    get scimBaseUrl() {
        return this.getStringAttribute('scim_base_url');
    }
    // seat_deprovision - computed: true, optional: true, required: false
    _seatDeprovision;
    get seatDeprovision() {
        return this.getBooleanAttribute('seat_deprovision');
    }
    set seatDeprovision(value) {
        this._seatDeprovision = value;
    }
    resetSeatDeprovision() {
        this._seatDeprovision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get seatDeprovisionInput() {
        return this._seatDeprovision;
    }
    // secret - computed: true, optional: false, required: false
    get secret() {
        return this.getStringAttribute('secret');
    }
    // user_deprovision - computed: true, optional: true, required: false
    _userDeprovision;
    get userDeprovision() {
        return this.getBooleanAttribute('user_deprovision');
    }
    set userDeprovision(value) {
        this._userDeprovision = value;
    }
    resetUserDeprovision() {
        this._userDeprovision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userDeprovisionInput() {
        return this._userDeprovision;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}
*/
export class ZeroTrustAccessIdentityProvider extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_identity_provider";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import
    * @param importFromId The id of the existing ZeroTrustAccessIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_provider", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessIdentityProviderConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_identity_provider',
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
        this._config.internalValue = config.config;
        this._name = config.name;
        this._scimConfig.internalValue = config.scimConfig;
        this._type = config.type;
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
    // config - computed: false, optional: false, required: true
    _config = new ZeroTrustAccessIdentityProviderConfigAOutputReference(this, "config");
    get config() {
        return this._config;
    }
    putConfig(value) {
        this._config.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get configInput() {
        return this._config.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // scim_config - computed: true, optional: true, required: false
    _scimConfig = new ZeroTrustAccessIdentityProviderScimConfigOutputReference(this, "scim_config");
    get scimConfig() {
        return this._scimConfig;
    }
    putScimConfig(value) {
        this._scimConfig.internalValue = value;
    }
    resetScimConfig() {
        this._scimConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scimConfigInput() {
        return this._scimConfig.internalValue;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
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
            config: zeroTrustAccessIdentityProviderConfigAToTerraform(this._config.internalValue),
            name: cdktf.stringToTerraform(this._name),
            scim_config: zeroTrustAccessIdentityProviderScimConfigToTerraform(this._scimConfig.internalValue),
            type: cdktf.stringToTerraform(this._type),
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
            config: {
                value: zeroTrustAccessIdentityProviderConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessIdentityProviderConfigA",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scim_config: {
                value: zeroTrustAccessIdentityProviderScimConfigToHclTerraform(this._scimConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessIdentityProviderScimConfig",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
