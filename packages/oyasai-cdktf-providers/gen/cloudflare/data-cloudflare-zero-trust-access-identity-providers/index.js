// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference extends cdktf.ComplexObject {
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
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // header_name - computed: true, optional: false, required: false
    get headerName() {
        return this.getStringAttribute('header_name');
    }
}
export class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference extends cdktf.ComplexObject {
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
    // apps_domain - computed: true, optional: false, required: false
    get appsDomain() {
        return this.getStringAttribute('apps_domain');
    }
    // attributes - computed: true, optional: false, required: false
    get attributes() {
        return this.getListAttribute('attributes');
    }
    // auth_url - computed: true, optional: false, required: false
    get authUrl() {
        return this.getStringAttribute('auth_url');
    }
    // authorization_server_id - computed: true, optional: false, required: false
    get authorizationServerId() {
        return this.getStringAttribute('authorization_server_id');
    }
    // centrify_account - computed: true, optional: false, required: false
    get centrifyAccount() {
        return this.getStringAttribute('centrify_account');
    }
    // centrify_app_id - computed: true, optional: false, required: false
    get centrifyAppId() {
        return this.getStringAttribute('centrify_app_id');
    }
    // certs_url - computed: true, optional: false, required: false
    get certsUrl() {
        return this.getStringAttribute('certs_url');
    }
    // claims - computed: true, optional: false, required: false
    get claims() {
        return this.getListAttribute('claims');
    }
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // conditional_access_enabled - computed: true, optional: false, required: false
    get conditionalAccessEnabled() {
        return this.getBooleanAttribute('conditional_access_enabled');
    }
    // directory_id - computed: true, optional: false, required: false
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    // email_attribute_name - computed: true, optional: false, required: false
    get emailAttributeName() {
        return this.getStringAttribute('email_attribute_name');
    }
    // email_claim_name - computed: true, optional: false, required: false
    get emailClaimName() {
        return this.getStringAttribute('email_claim_name');
    }
    // header_attributes - computed: true, optional: false, required: false
    _headerAttributes = new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(this, "header_attributes", false);
    get headerAttributes() {
        return this._headerAttributes;
    }
    // idp_public_certs - computed: true, optional: false, required: false
    get idpPublicCerts() {
        return this.getListAttribute('idp_public_certs');
    }
    // issuer_url - computed: true, optional: false, required: false
    get issuerUrl() {
        return this.getStringAttribute('issuer_url');
    }
    // okta_account - computed: true, optional: false, required: false
    get oktaAccount() {
        return this.getStringAttribute('okta_account');
    }
    // onelogin_account - computed: true, optional: false, required: false
    get oneloginAccount() {
        return this.getStringAttribute('onelogin_account');
    }
    // ping_env_id - computed: true, optional: false, required: false
    get pingEnvId() {
        return this.getStringAttribute('ping_env_id');
    }
    // pkce_enabled - computed: true, optional: false, required: false
    get pkceEnabled() {
        return this.getBooleanAttribute('pkce_enabled');
    }
    // prompt - computed: true, optional: false, required: false
    get prompt() {
        return this.getStringAttribute('prompt');
    }
    // scopes - computed: true, optional: false, required: false
    get scopes() {
        return this.getListAttribute('scopes');
    }
    // sign_request - computed: true, optional: false, required: false
    get signRequest() {
        return this.getBooleanAttribute('sign_request');
    }
    // sso_target_url - computed: true, optional: false, required: false
    get ssoTargetUrl() {
        return this.getStringAttribute('sso_target_url');
    }
    // support_groups - computed: true, optional: false, required: false
    get supportGroups() {
        return this.getBooleanAttribute('support_groups');
    }
    // token_url - computed: true, optional: false, required: false
    get tokenUrl() {
        return this.getStringAttribute('token_url');
    }
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference extends cdktf.ComplexObject {
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
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // identity_update_behavior - computed: true, optional: false, required: false
    get identityUpdateBehavior() {
        return this.getStringAttribute('identity_update_behavior');
    }
    // scim_base_url - computed: true, optional: false, required: false
    get scimBaseUrl() {
        return this.getStringAttribute('scim_base_url');
    }
    // seat_deprovision - computed: true, optional: false, required: false
    get seatDeprovision() {
        return this.getBooleanAttribute('seat_deprovision');
    }
    // secret - computed: true, optional: false, required: false
    get secret() {
        return this.getStringAttribute('secret');
    }
    // user_deprovision - computed: true, optional: false, required: false
    get userDeprovision() {
        return this.getBooleanAttribute('user_deprovision');
    }
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustAccessIdentityProvidersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference extends cdktf.ComplexObject {
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
    // config - computed: true, optional: false, required: false
    _config = new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // scim_config - computed: true, optional: false, required: false
    _scimConfig = new DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(this, "scim_config");
    get scimConfig() {
        return this._scimConfig;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class DataCloudflareZeroTrustAccessIdentityProvidersResultList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}
*/
export class DataCloudflareZeroTrustAccessIdentityProviders extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_identity_providers";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_providers", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessIdentityProvidersConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_identity_providers',
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
        this._maxItems = config.maxItems;
        this._scimEnabled = config.scimEnabled;
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
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareZeroTrustAccessIdentityProvidersResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // scim_enabled - computed: false, optional: true, required: false
    _scimEnabled;
    get scimEnabled() {
        return this.getStringAttribute('scim_enabled');
    }
    set scimEnabled(value) {
        this._scimEnabled = value;
    }
    resetScimEnabled() {
        this._scimEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scimEnabledInput() {
        return this._scimEnabled;
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
            max_items: cdktf.numberToTerraform(this._maxItems),
            scim_enabled: cdktf.stringToTerraform(this._scimEnabled),
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
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scim_enabled: {
                value: cdktf.stringToHclTerraform(this._scimEnabled),
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
