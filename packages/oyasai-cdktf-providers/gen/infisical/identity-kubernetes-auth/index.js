// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function identityKubernetesAuthAccessTokenTrustedIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_address: cdktf.stringToTerraform(struct.ipAddress),
    };
}
export function identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip_address: {
            value: cdktf.stringToHclTerraform(struct.ipAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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
        if (this._ipAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddress = this._ipAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddress = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddress = value.ipAddress;
        }
    }
    // ip_address - computed: true, optional: true, required: false
    _ipAddress;
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    set ipAddress(value) {
        this._ipAddress = value;
    }
    resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipAddressInput() {
        return this._ipAddress;
    }
}
export class IdentityKubernetesAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
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
        return new IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth}
*/
export class IdentityKubernetesAuth extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_identity_kubernetes_auth";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityKubernetesAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityKubernetesAuth to import
    * @param importFromId The id of the existing IdentityKubernetesAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityKubernetesAuth to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_kubernetes_auth", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityKubernetesAuthConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_identity_kubernetes_auth',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        this._accessTokenTtl = config.accessTokenTtl;
        this._allowedAudience = config.allowedAudience;
        this._allowedNamespaces = config.allowedNamespaces;
        this._allowedServiceAccountNames = config.allowedServiceAccountNames;
        this._gatewayId = config.gatewayId;
        this._identityId = config.identityId;
        this._kubernetesCaCertificate = config.kubernetesCaCertificate;
        this._kubernetesHost = config.kubernetesHost;
        this._tokenReviewerJwt = config.tokenReviewerJwt;
        this._tokenReviewerMode = config.tokenReviewerMode;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_token_max_ttl - computed: true, optional: true, required: false
    _accessTokenMaxTtl;
    get accessTokenMaxTtl() {
        return this.getNumberAttribute('access_token_max_ttl');
    }
    set accessTokenMaxTtl(value) {
        this._accessTokenMaxTtl = value;
    }
    resetAccessTokenMaxTtl() {
        this._accessTokenMaxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenMaxTtlInput() {
        return this._accessTokenMaxTtl;
    }
    // access_token_num_uses_limit - computed: true, optional: true, required: false
    _accessTokenNumUsesLimit;
    get accessTokenNumUsesLimit() {
        return this.getNumberAttribute('access_token_num_uses_limit');
    }
    set accessTokenNumUsesLimit(value) {
        this._accessTokenNumUsesLimit = value;
    }
    resetAccessTokenNumUsesLimit() {
        this._accessTokenNumUsesLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenNumUsesLimitInput() {
        return this._accessTokenNumUsesLimit;
    }
    // access_token_trusted_ips - computed: true, optional: true, required: false
    _accessTokenTrustedIps = new IdentityKubernetesAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
    get accessTokenTrustedIps() {
        return this._accessTokenTrustedIps;
    }
    putAccessTokenTrustedIps(value) {
        this._accessTokenTrustedIps.internalValue = value;
    }
    resetAccessTokenTrustedIps() {
        this._accessTokenTrustedIps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenTrustedIpsInput() {
        return this._accessTokenTrustedIps.internalValue;
    }
    // access_token_ttl - computed: true, optional: true, required: false
    _accessTokenTtl;
    get accessTokenTtl() {
        return this.getNumberAttribute('access_token_ttl');
    }
    set accessTokenTtl(value) {
        this._accessTokenTtl = value;
    }
    resetAccessTokenTtl() {
        this._accessTokenTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenTtlInput() {
        return this._accessTokenTtl;
    }
    // allowed_audience - computed: true, optional: true, required: false
    _allowedAudience;
    get allowedAudience() {
        return this.getStringAttribute('allowed_audience');
    }
    set allowedAudience(value) {
        this._allowedAudience = value;
    }
    resetAllowedAudience() {
        this._allowedAudience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedAudienceInput() {
        return this._allowedAudience;
    }
    // allowed_namespaces - computed: true, optional: true, required: false
    _allowedNamespaces;
    get allowedNamespaces() {
        return this.getListAttribute('allowed_namespaces');
    }
    set allowedNamespaces(value) {
        this._allowedNamespaces = value;
    }
    resetAllowedNamespaces() {
        this._allowedNamespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedNamespacesInput() {
        return this._allowedNamespaces;
    }
    // allowed_service_account_names - computed: true, optional: true, required: false
    _allowedServiceAccountNames;
    get allowedServiceAccountNames() {
        return this.getListAttribute('allowed_service_account_names');
    }
    set allowedServiceAccountNames(value) {
        this._allowedServiceAccountNames = value;
    }
    resetAllowedServiceAccountNames() {
        this._allowedServiceAccountNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedServiceAccountNamesInput() {
        return this._allowedServiceAccountNames;
    }
    // gateway_id - computed: false, optional: true, required: false
    _gatewayId;
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    resetGatewayId() {
        this._gatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identity_id - computed: false, optional: false, required: true
    _identityId;
    get identityId() {
        return this.getStringAttribute('identity_id');
    }
    set identityId(value) {
        this._identityId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityIdInput() {
        return this._identityId;
    }
    // kubernetes_ca_certificate - computed: true, optional: true, required: false
    _kubernetesCaCertificate;
    get kubernetesCaCertificate() {
        return this.getStringAttribute('kubernetes_ca_certificate');
    }
    set kubernetesCaCertificate(value) {
        this._kubernetesCaCertificate = value;
    }
    resetKubernetesCaCertificate() {
        this._kubernetesCaCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kubernetesCaCertificateInput() {
        return this._kubernetesCaCertificate;
    }
    // kubernetes_host - computed: false, optional: true, required: false
    _kubernetesHost;
    get kubernetesHost() {
        return this.getStringAttribute('kubernetes_host');
    }
    set kubernetesHost(value) {
        this._kubernetesHost = value;
    }
    resetKubernetesHost() {
        this._kubernetesHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kubernetesHostInput() {
        return this._kubernetesHost;
    }
    // token_reviewer_jwt - computed: false, optional: true, required: false
    _tokenReviewerJwt;
    get tokenReviewerJwt() {
        return this.getStringAttribute('token_reviewer_jwt');
    }
    set tokenReviewerJwt(value) {
        this._tokenReviewerJwt = value;
    }
    resetTokenReviewerJwt() {
        this._tokenReviewerJwt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenReviewerJwtInput() {
        return this._tokenReviewerJwt;
    }
    // token_reviewer_mode - computed: true, optional: true, required: false
    _tokenReviewerMode;
    get tokenReviewerMode() {
        return this.getStringAttribute('token_reviewer_mode');
    }
    set tokenReviewerMode(value) {
        this._tokenReviewerMode = value;
    }
    resetTokenReviewerMode() {
        this._tokenReviewerMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenReviewerModeInput() {
        return this._tokenReviewerMode;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityKubernetesAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            allowed_audience: cdktf.stringToTerraform(this._allowedAudience),
            allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNamespaces),
            allowed_service_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccountNames),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            identity_id: cdktf.stringToTerraform(this._identityId),
            kubernetes_ca_certificate: cdktf.stringToTerraform(this._kubernetesCaCertificate),
            kubernetes_host: cdktf.stringToTerraform(this._kubernetesHost),
            token_reviewer_jwt: cdktf.stringToTerraform(this._tokenReviewerJwt),
            token_reviewer_mode: cdktf.stringToTerraform(this._tokenReviewerMode),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            access_token_max_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenMaxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            access_token_num_uses_limit: {
                value: cdktf.numberToHclTerraform(this._accessTokenNumUsesLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            access_token_trusted_ips: {
                value: cdktf.listMapperHcl(identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityKubernetesAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_audience: {
                value: cdktf.stringToHclTerraform(this._allowedAudience),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allowed_namespaces: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNamespaces),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_service_account_names: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccountNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            gateway_id: {
                value: cdktf.stringToHclTerraform(this._gatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kubernetes_ca_certificate: {
                value: cdktf.stringToHclTerraform(this._kubernetesCaCertificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kubernetes_host: {
                value: cdktf.stringToHclTerraform(this._kubernetesHost),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_reviewer_jwt: {
                value: cdktf.stringToHclTerraform(this._tokenReviewerJwt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_reviewer_mode: {
                value: cdktf.stringToHclTerraform(this._tokenReviewerMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
