// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function identityAwsAuthAccessTokenTrustedIpsToTerraform(struct) {
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
export function identityAwsAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
export class IdentityAwsAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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
export class IdentityAwsAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
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
        return new IdentityAwsAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth infisical_identity_aws_auth}
*/
export class IdentityAwsAuth extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_identity_aws_auth";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityAwsAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityAwsAuth to import
    * @param importFromId The id of the existing IdentityAwsAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityAwsAuth to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_aws_auth", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth infisical_identity_aws_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityAwsAuthConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_identity_aws_auth',
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
        this._allowedAccountIds = config.allowedAccountIds;
        this._allowedPrincipalArns = config.allowedPrincipalArns;
        this._identityId = config.identityId;
        this._stsEndpoint = config.stsEndpoint;
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
    _accessTokenTrustedIps = new IdentityAwsAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
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
    // allowed_account_ids - computed: true, optional: true, required: false
    _allowedAccountIds;
    get allowedAccountIds() {
        return this.getListAttribute('allowed_account_ids');
    }
    set allowedAccountIds(value) {
        this._allowedAccountIds = value;
    }
    resetAllowedAccountIds() {
        this._allowedAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedAccountIdsInput() {
        return this._allowedAccountIds;
    }
    // allowed_principal_arns - computed: true, optional: true, required: false
    _allowedPrincipalArns;
    get allowedPrincipalArns() {
        return this.getListAttribute('allowed_principal_arns');
    }
    set allowedPrincipalArns(value) {
        this._allowedPrincipalArns = value;
    }
    resetAllowedPrincipalArns() {
        this._allowedPrincipalArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedPrincipalArnsInput() {
        return this._allowedPrincipalArns;
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
    // sts_endpoint - computed: true, optional: true, required: false
    _stsEndpoint;
    get stsEndpoint() {
        return this.getStringAttribute('sts_endpoint');
    }
    set stsEndpoint(value) {
        this._stsEndpoint = value;
    }
    resetStsEndpoint() {
        this._stsEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stsEndpointInput() {
        return this._stsEndpoint;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityAwsAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
            allowed_principal_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipalArns),
            identity_id: cdktf.stringToTerraform(this._identityId),
            sts_endpoint: cdktf.stringToTerraform(this._stsEndpoint),
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
                value: cdktf.listMapperHcl(identityAwsAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityAwsAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_account_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_principal_arns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrincipalArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sts_endpoint: {
                value: cdktf.stringToHclTerraform(this._stsEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
