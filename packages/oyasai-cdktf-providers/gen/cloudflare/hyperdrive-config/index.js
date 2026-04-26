// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function hyperdriveConfigCachingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disabled: cdktf.booleanToTerraform(struct.disabled),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        stale_while_revalidate: cdktf.numberToTerraform(struct.staleWhileRevalidate),
    };
}
export function hyperdriveConfigCachingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stale_while_revalidate: {
            value: cdktf.numberToHclTerraform(struct.staleWhileRevalidate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class HyperdriveConfigCachingOutputReference extends cdktf.ComplexObject {
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
        if (this._disabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabled = this._disabled;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
        }
        if (this._staleWhileRevalidate !== undefined) {
            hasAnyValues = true;
            internalValueResult.staleWhileRevalidate = this._staleWhileRevalidate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disabled = undefined;
            this._maxAge = undefined;
            this._staleWhileRevalidate = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disabled = value.disabled;
            this._maxAge = value.maxAge;
            this._staleWhileRevalidate = value.staleWhileRevalidate;
        }
    }
    // disabled - computed: true, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
    // max_age - computed: false, optional: true, required: false
    _maxAge;
    get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    set maxAge(value) {
        this._maxAge = value;
    }
    resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeInput() {
        return this._maxAge;
    }
    // stale_while_revalidate - computed: false, optional: true, required: false
    _staleWhileRevalidate;
    get staleWhileRevalidate() {
        return this.getNumberAttribute('stale_while_revalidate');
    }
    set staleWhileRevalidate(value) {
        this._staleWhileRevalidate = value;
    }
    resetStaleWhileRevalidate() {
        this._staleWhileRevalidate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staleWhileRevalidateInput() {
        return this._staleWhileRevalidate;
    }
}
export function hyperdriveConfigMtlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca_certificate_id: cdktf.stringToTerraform(struct.caCertificateId),
        mtls_certificate_id: cdktf.stringToTerraform(struct.mtlsCertificateId),
        sslmode: cdktf.stringToTerraform(struct.sslmode),
    };
}
export function hyperdriveConfigMtlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ca_certificate_id: {
            value: cdktf.stringToHclTerraform(struct.caCertificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mtls_certificate_id: {
            value: cdktf.stringToHclTerraform(struct.mtlsCertificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sslmode: {
            value: cdktf.stringToHclTerraform(struct.sslmode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class HyperdriveConfigMtlsOutputReference extends cdktf.ComplexObject {
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
        if (this._caCertificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.caCertificateId = this._caCertificateId;
        }
        if (this._mtlsCertificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtlsCertificateId = this._mtlsCertificateId;
        }
        if (this._sslmode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslmode = this._sslmode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._caCertificateId = undefined;
            this._mtlsCertificateId = undefined;
            this._sslmode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._caCertificateId = value.caCertificateId;
            this._mtlsCertificateId = value.mtlsCertificateId;
            this._sslmode = value.sslmode;
        }
    }
    // ca_certificate_id - computed: false, optional: true, required: false
    _caCertificateId;
    get caCertificateId() {
        return this.getStringAttribute('ca_certificate_id');
    }
    set caCertificateId(value) {
        this._caCertificateId = value;
    }
    resetCaCertificateId() {
        this._caCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caCertificateIdInput() {
        return this._caCertificateId;
    }
    // mtls_certificate_id - computed: false, optional: true, required: false
    _mtlsCertificateId;
    get mtlsCertificateId() {
        return this.getStringAttribute('mtls_certificate_id');
    }
    set mtlsCertificateId(value) {
        this._mtlsCertificateId = value;
    }
    resetMtlsCertificateId() {
        this._mtlsCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mtlsCertificateIdInput() {
        return this._mtlsCertificateId;
    }
    // sslmode - computed: false, optional: true, required: false
    _sslmode;
    get sslmode() {
        return this.getStringAttribute('sslmode');
    }
    set sslmode(value) {
        this._sslmode = value;
    }
    resetSslmode() {
        this._sslmode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslmodeInput() {
        return this._sslmode;
    }
}
export function hyperdriveConfigOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_client_id: cdktf.stringToTerraform(struct.accessClientId),
        access_client_secret: cdktf.stringToTerraform(struct.accessClientSecret),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        password: cdktf.stringToTerraform(struct.password),
        port: cdktf.numberToTerraform(struct.port),
        scheme: cdktf.stringToTerraform(struct.scheme),
        service_id: cdktf.stringToTerraform(struct.serviceId),
        user: cdktf.stringToTerraform(struct.user),
    };
}
export function hyperdriveConfigOriginToHclTerraform(struct) {
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
        database: {
            value: cdktf.stringToHclTerraform(struct.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scheme: {
            value: cdktf.stringToHclTerraform(struct.scheme),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_id: {
            value: cdktf.stringToHclTerraform(struct.serviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class HyperdriveConfigOriginOutputReference extends cdktf.ComplexObject {
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
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._scheme !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheme = this._scheme;
        }
        if (this._serviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceId = this._serviceId;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessClientId = undefined;
            this._accessClientSecret = undefined;
            this._database = undefined;
            this._host = undefined;
            this._password = undefined;
            this._port = undefined;
            this._scheme = undefined;
            this._serviceId = undefined;
            this._user = undefined;
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
            this._database = value.database;
            this._host = value.host;
            this._password = value.password;
            this._port = value.port;
            this._scheme = value.scheme;
            this._serviceId = value.serviceId;
            this._user = value.user;
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
    // database - computed: false, optional: false, required: true
    _database;
    get database() {
        return this.getStringAttribute('database');
    }
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    get databaseInput() {
        return this._database;
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // password - computed: false, optional: false, required: true
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // port - computed: false, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // scheme - computed: false, optional: false, required: true
    _scheme;
    get scheme() {
        return this.getStringAttribute('scheme');
    }
    set scheme(value) {
        this._scheme = value;
    }
    // Temporarily expose input value. Use with caution.
    get schemeInput() {
        return this._scheme;
    }
    // service_id - computed: false, optional: true, required: false
    _serviceId;
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    set serviceId(value) {
        this._serviceId = value;
    }
    resetServiceId() {
        this._serviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceIdInput() {
        return this._serviceId;
    }
    // user - computed: false, optional: false, required: true
    _user;
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}
*/
export class HyperdriveConfig extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_hyperdrive_config";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a HyperdriveConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the HyperdriveConfig to import
    * @param importFromId The id of the existing HyperdriveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the HyperdriveConfig to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hyperdrive_config", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HyperdriveConfigConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_hyperdrive_config',
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
        this._caching.internalValue = config.caching;
        this._mtls.internalValue = config.mtls;
        this._name = config.name;
        this._origin.internalValue = config.origin;
        this._originConnectionLimit = config.originConnectionLimit;
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
    // caching - computed: false, optional: true, required: false
    _caching = new HyperdriveConfigCachingOutputReference(this, "caching");
    get caching() {
        return this._caching;
    }
    putCaching(value) {
        this._caching.internalValue = value;
    }
    resetCaching() {
        this._caching.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cachingInput() {
        return this._caching.internalValue;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // mtls - computed: false, optional: true, required: false
    _mtls = new HyperdriveConfigMtlsOutputReference(this, "mtls");
    get mtls() {
        return this._mtls;
    }
    putMtls(value) {
        this._mtls.internalValue = value;
    }
    resetMtls() {
        this._mtls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mtlsInput() {
        return this._mtls.internalValue;
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
    // origin - computed: false, optional: false, required: true
    _origin = new HyperdriveConfigOriginOutputReference(this, "origin");
    get origin() {
        return this._origin;
    }
    putOrigin(value) {
        this._origin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get originInput() {
        return this._origin.internalValue;
    }
    // origin_connection_limit - computed: false, optional: true, required: false
    _originConnectionLimit;
    get originConnectionLimit() {
        return this.getNumberAttribute('origin_connection_limit');
    }
    set originConnectionLimit(value) {
        this._originConnectionLimit = value;
    }
    resetOriginConnectionLimit() {
        this._originConnectionLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originConnectionLimitInput() {
        return this._originConnectionLimit;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            caching: hyperdriveConfigCachingToTerraform(this._caching.internalValue),
            mtls: hyperdriveConfigMtlsToTerraform(this._mtls.internalValue),
            name: cdktf.stringToTerraform(this._name),
            origin: hyperdriveConfigOriginToTerraform(this._origin.internalValue),
            origin_connection_limit: cdktf.numberToTerraform(this._originConnectionLimit),
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
            caching: {
                value: hyperdriveConfigCachingToHclTerraform(this._caching.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HyperdriveConfigCaching",
            },
            mtls: {
                value: hyperdriveConfigMtlsToHclTerraform(this._mtls.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HyperdriveConfigMtls",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            origin: {
                value: hyperdriveConfigOriginToHclTerraform(this._origin.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HyperdriveConfigOrigin",
            },
            origin_connection_limit: {
                value: cdktf.numberToHclTerraform(this._originConnectionLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
