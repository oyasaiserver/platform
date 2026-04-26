// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function connectivityDirectoryServiceHostNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
    };
}
export function connectivityDirectoryServiceHostNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ConnectivityDirectoryServiceHostNetworkOutputReference extends cdktf.ComplexObject {
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
        if (this._tunnelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelId = this._tunnelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tunnelId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tunnelId = value.tunnelId;
        }
    }
    // tunnel_id - computed: false, optional: false, required: true
    _tunnelId;
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    set tunnelId(value) {
        this._tunnelId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelIdInput() {
        return this._tunnelId;
    }
}
export function connectivityDirectoryServiceHostResolverNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resolver_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.resolverIps),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
    };
}
export function connectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resolver_ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.resolverIps),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ConnectivityDirectoryServiceHostResolverNetworkOutputReference extends cdktf.ComplexObject {
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
        if (this._resolverIps !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolverIps = this._resolverIps;
        }
        if (this._tunnelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelId = this._tunnelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resolverIps = undefined;
            this._tunnelId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resolverIps = value.resolverIps;
            this._tunnelId = value.tunnelId;
        }
    }
    // resolver_ips - computed: false, optional: true, required: false
    _resolverIps;
    get resolverIps() {
        return this.getListAttribute('resolver_ips');
    }
    set resolverIps(value) {
        this._resolverIps = value;
    }
    resetResolverIps() {
        this._resolverIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolverIpsInput() {
        return this._resolverIps;
    }
    // tunnel_id - computed: false, optional: false, required: true
    _tunnelId;
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    set tunnelId(value) {
        this._tunnelId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelIdInput() {
        return this._tunnelId;
    }
}
export function connectivityDirectoryServiceHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
        ipv4: cdktf.stringToTerraform(struct.ipv4),
        ipv6: cdktf.stringToTerraform(struct.ipv6),
        network: connectivityDirectoryServiceHostNetworkToTerraform(struct.network),
        resolver_network: connectivityDirectoryServiceHostResolverNetworkToTerraform(struct.resolverNetwork),
    };
}
export function connectivityDirectoryServiceHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv4: {
            value: cdktf.stringToHclTerraform(struct.ipv4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6: {
            value: cdktf.stringToHclTerraform(struct.ipv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network: {
            value: connectivityDirectoryServiceHostNetworkToHclTerraform(struct.network),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectivityDirectoryServiceHostNetwork",
        },
        resolver_network: {
            value: connectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct.resolverNetwork),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectivityDirectoryServiceHostResolverNetwork",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ConnectivityDirectoryServiceHostOutputReference extends cdktf.ComplexObject {
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
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._ipv4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4 = this._ipv4;
        }
        if (this._ipv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6;
        }
        if (this._network?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.network = this._network?.internalValue;
        }
        if (this._resolverNetwork?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolverNetwork = this._resolverNetwork?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostname = undefined;
            this._ipv4 = undefined;
            this._ipv6 = undefined;
            this._network.internalValue = undefined;
            this._resolverNetwork.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostname = value.hostname;
            this._ipv4 = value.ipv4;
            this._ipv6 = value.ipv6;
            this._network.internalValue = value.network;
            this._resolverNetwork.internalValue = value.resolverNetwork;
        }
    }
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // ipv4 - computed: false, optional: true, required: false
    _ipv4;
    get ipv4() {
        return this.getStringAttribute('ipv4');
    }
    set ipv4(value) {
        this._ipv4 = value;
    }
    resetIpv4() {
        this._ipv4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4Input() {
        return this._ipv4;
    }
    // ipv6 - computed: false, optional: true, required: false
    _ipv6;
    get ipv6() {
        return this.getStringAttribute('ipv6');
    }
    set ipv6(value) {
        this._ipv6 = value;
    }
    resetIpv6() {
        this._ipv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6Input() {
        return this._ipv6;
    }
    // network - computed: false, optional: true, required: false
    _network = new ConnectivityDirectoryServiceHostNetworkOutputReference(this, "network");
    get network() {
        return this._network;
    }
    putNetwork(value) {
        this._network.internalValue = value;
    }
    resetNetwork() {
        this._network.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInput() {
        return this._network.internalValue;
    }
    // resolver_network - computed: false, optional: true, required: false
    _resolverNetwork = new ConnectivityDirectoryServiceHostResolverNetworkOutputReference(this, "resolver_network");
    get resolverNetwork() {
        return this._resolverNetwork;
    }
    putResolverNetwork(value) {
        this._resolverNetwork.internalValue = value;
    }
    resetResolverNetwork() {
        this._resolverNetwork.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resolverNetworkInput() {
        return this._resolverNetwork.internalValue;
    }
}
export function connectivityDirectoryServiceTlsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cert_verification_mode: cdktf.stringToTerraform(struct.certVerificationMode),
    };
}
export function connectivityDirectoryServiceTlsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cert_verification_mode: {
            value: cdktf.stringToHclTerraform(struct.certVerificationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ConnectivityDirectoryServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._certVerificationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.certVerificationMode = this._certVerificationMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certVerificationMode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certVerificationMode = value.certVerificationMode;
        }
    }
    // cert_verification_mode - computed: false, optional: false, required: true
    _certVerificationMode;
    get certVerificationMode() {
        return this.getStringAttribute('cert_verification_mode');
    }
    set certVerificationMode(value) {
        this._certVerificationMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get certVerificationModeInput() {
        return this._certVerificationMode;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}
*/
export class ConnectivityDirectoryService extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_connectivity_directory_service";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectivityDirectoryService to import
    * @param importFromId The id of the existing ConnectivityDirectoryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectivityDirectoryService to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_connectivity_directory_service", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectivityDirectoryServiceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_connectivity_directory_service',
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
        this._appProtocol = config.appProtocol;
        this._host.internalValue = config.host;
        this._httpPort = config.httpPort;
        this._httpsPort = config.httpsPort;
        this._name = config.name;
        this._tcpPort = config.tcpPort;
        this._tlsSettings.internalValue = config.tlsSettings;
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
    // app_protocol - computed: false, optional: true, required: false
    _appProtocol;
    get appProtocol() {
        return this.getStringAttribute('app_protocol');
    }
    set appProtocol(value) {
        this._appProtocol = value;
    }
    resetAppProtocol() {
        this._appProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appProtocolInput() {
        return this._appProtocol;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // host - computed: false, optional: false, required: true
    _host = new ConnectivityDirectoryServiceHostOutputReference(this, "host");
    get host() {
        return this._host;
    }
    putHost(value) {
        this._host.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host.internalValue;
    }
    // http_port - computed: false, optional: true, required: false
    _httpPort;
    get httpPort() {
        return this.getNumberAttribute('http_port');
    }
    set httpPort(value) {
        this._httpPort = value;
    }
    resetHttpPort() {
        this._httpPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpPortInput() {
        return this._httpPort;
    }
    // https_port - computed: false, optional: true, required: false
    _httpsPort;
    get httpsPort() {
        return this.getNumberAttribute('https_port');
    }
    set httpsPort(value) {
        this._httpsPort = value;
    }
    resetHttpsPort() {
        this._httpsPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpsPortInput() {
        return this._httpsPort;
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
    // service_id - computed: true, optional: false, required: false
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    // tcp_port - computed: false, optional: true, required: false
    _tcpPort;
    get tcpPort() {
        return this.getNumberAttribute('tcp_port');
    }
    set tcpPort(value) {
        this._tcpPort = value;
    }
    resetTcpPort() {
        this._tcpPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tcpPortInput() {
        return this._tcpPort;
    }
    // tls_settings - computed: false, optional: true, required: false
    _tlsSettings = new ConnectivityDirectoryServiceTlsSettingsOutputReference(this, "tls_settings");
    get tlsSettings() {
        return this._tlsSettings;
    }
    putTlsSettings(value) {
        this._tlsSettings.internalValue = value;
    }
    resetTlsSettings() {
        this._tlsSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsSettingsInput() {
        return this._tlsSettings.internalValue;
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
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            app_protocol: cdktf.stringToTerraform(this._appProtocol),
            host: connectivityDirectoryServiceHostToTerraform(this._host.internalValue),
            http_port: cdktf.numberToTerraform(this._httpPort),
            https_port: cdktf.numberToTerraform(this._httpsPort),
            name: cdktf.stringToTerraform(this._name),
            tcp_port: cdktf.numberToTerraform(this._tcpPort),
            tls_settings: connectivityDirectoryServiceTlsSettingsToTerraform(this._tlsSettings.internalValue),
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
            app_protocol: {
                value: cdktf.stringToHclTerraform(this._appProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: connectivityDirectoryServiceHostToHclTerraform(this._host.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ConnectivityDirectoryServiceHost",
            },
            http_port: {
                value: cdktf.numberToHclTerraform(this._httpPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            https_port: {
                value: cdktf.numberToHclTerraform(this._httpsPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tcp_port: {
                value: cdktf.numberToHclTerraform(this._tcpPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tls_settings: {
                value: connectivityDirectoryServiceTlsSettingsToHclTerraform(this._tlsSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ConnectivityDirectoryServiceTlsSettings",
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
