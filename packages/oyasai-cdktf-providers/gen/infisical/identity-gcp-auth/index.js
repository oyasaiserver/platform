// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function identityGcpAuthAccessTokenTrustedIpsToTerraform(struct) {
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
export function identityGcpAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
export class IdentityGcpAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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
export class IdentityGcpAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
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
        return new IdentityGcpAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth}
*/
export class IdentityGcpAuth extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_identity_gcp_auth";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityGcpAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityGcpAuth to import
    * @param importFromId The id of the existing IdentityGcpAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityGcpAuth to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_gcp_auth", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityGcpAuthConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_identity_gcp_auth',
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
        this._allowedProjects = config.allowedProjects;
        this._allowedServiceAccountEmails = config.allowedServiceAccountEmails;
        this._allowedZones = config.allowedZones;
        this._identityId = config.identityId;
        this._type = config.type;
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
    _accessTokenTrustedIps = new IdentityGcpAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
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
    // allowed_projects - computed: true, optional: true, required: false
    _allowedProjects;
    get allowedProjects() {
        return this.getListAttribute('allowed_projects');
    }
    set allowedProjects(value) {
        this._allowedProjects = value;
    }
    resetAllowedProjects() {
        this._allowedProjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedProjectsInput() {
        return this._allowedProjects;
    }
    // allowed_service_account_emails - computed: true, optional: true, required: false
    _allowedServiceAccountEmails;
    get allowedServiceAccountEmails() {
        return this.getListAttribute('allowed_service_account_emails');
    }
    set allowedServiceAccountEmails(value) {
        this._allowedServiceAccountEmails = value;
    }
    resetAllowedServiceAccountEmails() {
        this._allowedServiceAccountEmails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedServiceAccountEmailsInput() {
        return this._allowedServiceAccountEmails;
    }
    // allowed_zones - computed: true, optional: true, required: false
    _allowedZones;
    get allowedZones() {
        return this.getListAttribute('allowed_zones');
    }
    set allowedZones(value) {
        this._allowedZones = value;
    }
    resetAllowedZones() {
        this._allowedZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedZonesInput() {
        return this._allowedZones;
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
    // type - computed: true, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityGcpAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            allowed_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedProjects),
            allowed_service_account_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccountEmails),
            allowed_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedZones),
            identity_id: cdktf.stringToTerraform(this._identityId),
            type: cdktf.stringToTerraform(this._type),
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
                value: cdktf.listMapperHcl(identityGcpAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityGcpAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_projects: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedProjects),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_service_account_emails: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccountEmails),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_zones: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedZones),
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
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
