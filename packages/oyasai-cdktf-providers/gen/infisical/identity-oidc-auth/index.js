// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function identityOidcAuthAccessTokenTrustedIpsToTerraform(struct) {
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
export function identityOidcAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
export class IdentityOidcAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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
export class IdentityOidcAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
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
        return new IdentityOidcAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth infisical_identity_oidc_auth}
*/
export class IdentityOidcAuth extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_identity_oidc_auth";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityOidcAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityOidcAuth to import
    * @param importFromId The id of the existing IdentityOidcAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityOidcAuth to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_oidc_auth", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth infisical_identity_oidc_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityOidcAuthConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_identity_oidc_auth',
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
        this._boundAudiences = config.boundAudiences;
        this._boundClaims = config.boundClaims;
        this._boundIssuer = config.boundIssuer;
        this._boundSubject = config.boundSubject;
        this._claimMetadataMapping = config.claimMetadataMapping;
        this._identityId = config.identityId;
        this._oidcCaCertificate = config.oidcCaCertificate;
        this._oidcDiscoveryUrl = config.oidcDiscoveryUrl;
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
    _accessTokenTrustedIps = new IdentityOidcAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
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
    // bound_audiences - computed: true, optional: true, required: false
    _boundAudiences;
    get boundAudiences() {
        return this.getListAttribute('bound_audiences');
    }
    set boundAudiences(value) {
        this._boundAudiences = value;
    }
    resetBoundAudiences() {
        this._boundAudiences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get boundAudiencesInput() {
        return this._boundAudiences;
    }
    // bound_claims - computed: true, optional: true, required: false
    _boundClaims;
    get boundClaims() {
        return this.getStringMapAttribute('bound_claims');
    }
    set boundClaims(value) {
        this._boundClaims = value;
    }
    resetBoundClaims() {
        this._boundClaims = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get boundClaimsInput() {
        return this._boundClaims;
    }
    // bound_issuer - computed: false, optional: false, required: true
    _boundIssuer;
    get boundIssuer() {
        return this.getStringAttribute('bound_issuer');
    }
    set boundIssuer(value) {
        this._boundIssuer = value;
    }
    // Temporarily expose input value. Use with caution.
    get boundIssuerInput() {
        return this._boundIssuer;
    }
    // bound_subject - computed: true, optional: true, required: false
    _boundSubject;
    get boundSubject() {
        return this.getStringAttribute('bound_subject');
    }
    set boundSubject(value) {
        this._boundSubject = value;
    }
    resetBoundSubject() {
        this._boundSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get boundSubjectInput() {
        return this._boundSubject;
    }
    // claim_metadata_mapping - computed: true, optional: true, required: false
    _claimMetadataMapping;
    get claimMetadataMapping() {
        return this.getStringMapAttribute('claim_metadata_mapping');
    }
    set claimMetadataMapping(value) {
        this._claimMetadataMapping = value;
    }
    resetClaimMetadataMapping() {
        this._claimMetadataMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get claimMetadataMappingInput() {
        return this._claimMetadataMapping;
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
    // oidc_ca_certificate - computed: true, optional: true, required: false
    _oidcCaCertificate;
    get oidcCaCertificate() {
        return this.getStringAttribute('oidc_ca_certificate');
    }
    set oidcCaCertificate(value) {
        this._oidcCaCertificate = value;
    }
    resetOidcCaCertificate() {
        this._oidcCaCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcCaCertificateInput() {
        return this._oidcCaCertificate;
    }
    // oidc_discovery_url - computed: false, optional: false, required: true
    _oidcDiscoveryUrl;
    get oidcDiscoveryUrl() {
        return this.getStringAttribute('oidc_discovery_url');
    }
    set oidcDiscoveryUrl(value) {
        this._oidcDiscoveryUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get oidcDiscoveryUrlInput() {
        return this._oidcDiscoveryUrl;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityOidcAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
            bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
            bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
            bound_subject: cdktf.stringToTerraform(this._boundSubject),
            claim_metadata_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimMetadataMapping),
            identity_id: cdktf.stringToTerraform(this._identityId),
            oidc_ca_certificate: cdktf.stringToTerraform(this._oidcCaCertificate),
            oidc_discovery_url: cdktf.stringToTerraform(this._oidcDiscoveryUrl),
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
                value: cdktf.listMapperHcl(identityOidcAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityOidcAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            bound_audiences: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAudiences),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            bound_claims: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._boundClaims),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            bound_issuer: {
                value: cdktf.stringToHclTerraform(this._boundIssuer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bound_subject: {
                value: cdktf.stringToHclTerraform(this._boundSubject),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            claim_metadata_mapping: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claimMetadataMapping),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oidc_ca_certificate: {
                value: cdktf.stringToHclTerraform(this._oidcCaCertificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oidc_discovery_url: {
                value: cdktf.stringToHclTerraform(this._oidcDiscoveryUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
