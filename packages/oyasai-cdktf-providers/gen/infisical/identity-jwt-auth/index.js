// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function identityJwtAuthAccessTokenTrustedIpsToTerraform(struct) {
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
export function identityJwtAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
export class IdentityJwtAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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
export class IdentityJwtAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
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
        return new IdentityJwtAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth infisical_identity_jwt_auth}
*/
export class IdentityJwtAuth extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_identity_jwt_auth";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityJwtAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityJwtAuth to import
    * @param importFromId The id of the existing IdentityJwtAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityJwtAuth to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_jwt_auth", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth infisical_identity_jwt_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityJwtAuthConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_identity_jwt_auth',
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
        this._configurationType = config.configurationType;
        this._identityId = config.identityId;
        this._jwksCaCert = config.jwksCaCert;
        this._jwksUrl = config.jwksUrl;
        this._publicKeys = config.publicKeys;
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
    _accessTokenTrustedIps = new IdentityJwtAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
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
    // bound_issuer - computed: true, optional: true, required: false
    _boundIssuer;
    get boundIssuer() {
        return this.getStringAttribute('bound_issuer');
    }
    set boundIssuer(value) {
        this._boundIssuer = value;
    }
    resetBoundIssuer() {
        this._boundIssuer = undefined;
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
    // configuration_type - computed: false, optional: false, required: true
    _configurationType;
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationTypeInput() {
        return this._configurationType;
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
    // jwks_ca_cert - computed: true, optional: true, required: false
    _jwksCaCert;
    get jwksCaCert() {
        return this.getStringAttribute('jwks_ca_cert');
    }
    set jwksCaCert(value) {
        this._jwksCaCert = value;
    }
    resetJwksCaCert() {
        this._jwksCaCert = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jwksCaCertInput() {
        return this._jwksCaCert;
    }
    // jwks_url - computed: true, optional: true, required: false
    _jwksUrl;
    get jwksUrl() {
        return this.getStringAttribute('jwks_url');
    }
    set jwksUrl(value) {
        this._jwksUrl = value;
    }
    resetJwksUrl() {
        this._jwksUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jwksUrlInput() {
        return this._jwksUrl;
    }
    // public_keys - computed: true, optional: true, required: false
    _publicKeys;
    get publicKeys() {
        return this.getListAttribute('public_keys');
    }
    set publicKeys(value) {
        this._publicKeys = value;
    }
    resetPublicKeys() {
        this._publicKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicKeysInput() {
        return this._publicKeys;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityJwtAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
            bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
            bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
            bound_subject: cdktf.stringToTerraform(this._boundSubject),
            configuration_type: cdktf.stringToTerraform(this._configurationType),
            identity_id: cdktf.stringToTerraform(this._identityId),
            jwks_ca_cert: cdktf.stringToTerraform(this._jwksCaCert),
            jwks_url: cdktf.stringToTerraform(this._jwksUrl),
            public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
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
                value: cdktf.listMapperHcl(identityJwtAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityJwtAuthAccessTokenTrustedIpsList",
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
            configuration_type: {
                value: cdktf.stringToHclTerraform(this._configurationType),
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
            jwks_ca_cert: {
                value: cdktf.stringToHclTerraform(this._jwksCaCert),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jwks_url: {
                value: cdktf.stringToHclTerraform(this._jwksUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_keys: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicKeys),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
