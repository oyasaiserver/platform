// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDevicePostureIntegrationConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_client_id: cdktf.stringToTerraform(struct.accessClientId),
        access_client_secret: cdktf.stringToTerraform(struct.accessClientSecret),
        api_url: cdktf.stringToTerraform(struct.apiUrl),
        auth_url: cdktf.stringToTerraform(struct.authUrl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_key: cdktf.stringToTerraform(struct.clientKey),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        customer_id: cdktf.stringToTerraform(struct.customerId),
    };
}
export function zeroTrustDevicePostureIntegrationConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_client_id: {
            value: cdktf.stringToHclTerraform(struct.accessClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        access_client_secret: {
            value: cdktf.stringToHclTerraform(struct.accessClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_url: {
            value: cdktf.stringToHclTerraform(struct.apiUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_url: {
            value: cdktf.stringToHclTerraform(struct.authUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_key: {
            value: cdktf.stringToHclTerraform(struct.clientKey),
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
        customer_id: {
            value: cdktf.stringToHclTerraform(struct.customerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDevicePostureIntegrationConfigAOutputReference extends cdktf.ComplexObject {
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
        if (this._accessClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessClientId = this._accessClientId;
        }
        if (this._accessClientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessClientSecret = this._accessClientSecret;
        }
        if (this._apiUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiUrl = this._apiUrl;
        }
        if (this._authUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authUrl = this._authUrl;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientKey = this._clientKey;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._customerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerId = this._customerId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessClientId = undefined;
            this._accessClientSecret = undefined;
            this._apiUrl = undefined;
            this._authUrl = undefined;
            this._clientId = undefined;
            this._clientKey = undefined;
            this._clientSecret = undefined;
            this._customerId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessClientId = value.accessClientId;
            this._accessClientSecret = value.accessClientSecret;
            this._apiUrl = value.apiUrl;
            this._authUrl = value.authUrl;
            this._clientId = value.clientId;
            this._clientKey = value.clientKey;
            this._clientSecret = value.clientSecret;
            this._customerId = value.customerId;
        }
    }
    // access_client_id - computed: false, optional: true, required: false
    _accessClientId;
    get accessClientId() {
        return this.getStringAttribute('access_client_id');
    }
    set accessClientId(value) {
        this._accessClientId = value;
    }
    resetAccessClientId() {
        this._accessClientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessClientIdInput() {
        return this._accessClientId;
    }
    // access_client_secret - computed: false, optional: true, required: false
    _accessClientSecret;
    get accessClientSecret() {
        return this.getStringAttribute('access_client_secret');
    }
    set accessClientSecret(value) {
        this._accessClientSecret = value;
    }
    resetAccessClientSecret() {
        this._accessClientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessClientSecretInput() {
        return this._accessClientSecret;
    }
    // api_url - computed: false, optional: true, required: false
    _apiUrl;
    get apiUrl() {
        return this.getStringAttribute('api_url');
    }
    set apiUrl(value) {
        this._apiUrl = value;
    }
    resetApiUrl() {
        this._apiUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiUrlInput() {
        return this._apiUrl;
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
    // client_key - computed: false, optional: true, required: false
    _clientKey;
    get clientKey() {
        return this.getStringAttribute('client_key');
    }
    set clientKey(value) {
        this._clientKey = value;
    }
    resetClientKey() {
        this._clientKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientKeyInput() {
        return this._clientKey;
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
    // customer_id - computed: false, optional: true, required: false
    _customerId;
    get customerId() {
        return this.getStringAttribute('customer_id');
    }
    set customerId(value) {
        this._customerId = value;
    }
    resetCustomerId() {
        this._customerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerIdInput() {
        return this._customerId;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}
*/
export class ZeroTrustDevicePostureIntegration extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_posture_integration";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import
    * @param importFromId The id of the existing ZeroTrustDevicePostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_integration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDevicePostureIntegrationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_integration',
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
        this._interval = config.interval;
        this._name = config.name;
        this._type = config.type;
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
    _config = new ZeroTrustDevicePostureIntegrationConfigAOutputReference(this, "config");
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
    // interval - computed: false, optional: false, required: true
    _interval;
    get interval() {
        return this.getStringAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustDevicePostureIntegrationConfigAToTerraform(this._config.internalValue),
            interval: cdktf.stringToTerraform(this._interval),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
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
                value: zeroTrustDevicePostureIntegrationConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDevicePostureIntegrationConfigA",
            },
            interval: {
                value: cdktf.stringToHclTerraform(this._interval),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
