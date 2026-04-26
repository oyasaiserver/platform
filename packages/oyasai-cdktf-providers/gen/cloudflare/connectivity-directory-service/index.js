"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectivityDirectoryService = exports.ConnectivityDirectoryServiceTlsSettingsOutputReference = exports.ConnectivityDirectoryServiceHostOutputReference = exports.ConnectivityDirectoryServiceHostResolverNetworkOutputReference = exports.ConnectivityDirectoryServiceHostNetworkOutputReference = void 0;
exports.connectivityDirectoryServiceHostNetworkToTerraform = connectivityDirectoryServiceHostNetworkToTerraform;
exports.connectivityDirectoryServiceHostNetworkToHclTerraform = connectivityDirectoryServiceHostNetworkToHclTerraform;
exports.connectivityDirectoryServiceHostResolverNetworkToTerraform = connectivityDirectoryServiceHostResolverNetworkToTerraform;
exports.connectivityDirectoryServiceHostResolverNetworkToHclTerraform = connectivityDirectoryServiceHostResolverNetworkToHclTerraform;
exports.connectivityDirectoryServiceHostToTerraform = connectivityDirectoryServiceHostToTerraform;
exports.connectivityDirectoryServiceHostToHclTerraform = connectivityDirectoryServiceHostToHclTerraform;
exports.connectivityDirectoryServiceTlsSettingsToTerraform = connectivityDirectoryServiceTlsSettingsToTerraform;
exports.connectivityDirectoryServiceTlsSettingsToHclTerraform = connectivityDirectoryServiceTlsSettingsToHclTerraform;
var cdktf = require("cdktf");
function connectivityDirectoryServiceHostNetworkToTerraform(struct) {
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
function connectivityDirectoryServiceHostNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ConnectivityDirectoryServiceHostNetworkOutputReference = /** @class */ (function (_super) {
    __extends(ConnectivityDirectoryServiceHostNetworkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ConnectivityDirectoryServiceHostNetworkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ConnectivityDirectoryServiceHostNetworkOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._tunnelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelId = this._tunnelId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostNetworkOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostNetworkOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    return ConnectivityDirectoryServiceHostNetworkOutputReference;
}(cdktf.ComplexObject));
exports.ConnectivityDirectoryServiceHostNetworkOutputReference = ConnectivityDirectoryServiceHostNetworkOutputReference;
function connectivityDirectoryServiceHostResolverNetworkToTerraform(struct) {
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
function connectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ConnectivityDirectoryServiceHostResolverNetworkOutputReference = /** @class */ (function (_super) {
    __extends(ConnectivityDirectoryServiceHostResolverNetworkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ConnectivityDirectoryServiceHostResolverNetworkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._resolverIps !== undefined) {
                hasAnyValues = true;
                internalValueResult.resolverIps = this._resolverIps;
            }
            if (this._tunnelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelId = this._tunnelId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "resolverIps", {
        get: function () {
            return this.getListAttribute('resolver_ips');
        },
        set: function (value) {
            this._resolverIps = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype.resetResolverIps = function () {
        this._resolverIps = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "resolverIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    return ConnectivityDirectoryServiceHostResolverNetworkOutputReference;
}(cdktf.ComplexObject));
exports.ConnectivityDirectoryServiceHostResolverNetworkOutputReference = ConnectivityDirectoryServiceHostResolverNetworkOutputReference;
function connectivityDirectoryServiceHostToTerraform(struct) {
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
function connectivityDirectoryServiceHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ConnectivityDirectoryServiceHostOutputReference = /** @class */ (function (_super) {
    __extends(ConnectivityDirectoryServiceHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ConnectivityDirectoryServiceHostOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // network - computed: false, optional: true, required: false
        _this._network = new ConnectivityDirectoryServiceHostNetworkOutputReference(_this, "network");
        // resolver_network - computed: false, optional: true, required: false
        _this._resolverNetwork = new ConnectivityDirectoryServiceHostResolverNetworkOutputReference(_this, "resolver_network");
        return _this;
    }
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
            if (((_a = this._network) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.network = (_b = this._network) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._resolverNetwork) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.resolverNetwork = (_d = this._resolverNetwork) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryServiceHostOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "ipv4", {
        get: function () {
            return this.getStringAttribute('ipv4');
        },
        set: function (value) {
            this._ipv4 = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryServiceHostOutputReference.prototype.resetIpv4 = function () {
        this._ipv4 = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "ipv4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "ipv6", {
        get: function () {
            return this.getStringAttribute('ipv6');
        },
        set: function (value) {
            this._ipv6 = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryServiceHostOutputReference.prototype.resetIpv6 = function () {
        this._ipv6 = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "ipv6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "network", {
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryServiceHostOutputReference.prototype.putNetwork = function (value) {
        this._network.internalValue = value;
    };
    ConnectivityDirectoryServiceHostOutputReference.prototype.resetNetwork = function () {
        this._network.internalValue = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "resolverNetwork", {
        get: function () {
            return this._resolverNetwork;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryServiceHostOutputReference.prototype.putResolverNetwork = function (value) {
        this._resolverNetwork.internalValue = value;
    };
    ConnectivityDirectoryServiceHostOutputReference.prototype.resetResolverNetwork = function () {
        this._resolverNetwork.internalValue = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryServiceHostOutputReference.prototype, "resolverNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverNetwork.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ConnectivityDirectoryServiceHostOutputReference;
}(cdktf.ComplexObject));
exports.ConnectivityDirectoryServiceHostOutputReference = ConnectivityDirectoryServiceHostOutputReference;
function connectivityDirectoryServiceTlsSettingsToTerraform(struct) {
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
function connectivityDirectoryServiceTlsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cert_verification_mode: {
            value: cdktf.stringToHclTerraform(struct.certVerificationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ConnectivityDirectoryServiceTlsSettingsOutputReference = /** @class */ (function (_super) {
    __extends(ConnectivityDirectoryServiceTlsSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ConnectivityDirectoryServiceTlsSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ConnectivityDirectoryServiceTlsSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._certVerificationMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.certVerificationMode = this._certVerificationMode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceTlsSettingsOutputReference.prototype, "certVerificationMode", {
        get: function () {
            return this.getStringAttribute('cert_verification_mode');
        },
        set: function (value) {
            this._certVerificationMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryServiceTlsSettingsOutputReference.prototype, "certVerificationModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certVerificationMode;
        },
        enumerable: false,
        configurable: true
    });
    return ConnectivityDirectoryServiceTlsSettingsOutputReference;
}(cdktf.ComplexObject));
exports.ConnectivityDirectoryServiceTlsSettingsOutputReference = ConnectivityDirectoryServiceTlsSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}
*/
var ConnectivityDirectoryService = /** @class */ (function (_super) {
    __extends(ConnectivityDirectoryService, _super);
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
    function ConnectivityDirectoryService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // host - computed: false, optional: false, required: true
        _this._host = new ConnectivityDirectoryServiceHostOutputReference(_this, "host");
        // tls_settings - computed: false, optional: true, required: false
        _this._tlsSettings = new ConnectivityDirectoryServiceTlsSettingsOutputReference(_this, "tls_settings");
        _this._accountId = config.accountId;
        _this._appProtocol = config.appProtocol;
        _this._host.internalValue = config.host;
        _this._httpPort = config.httpPort;
        _this._httpsPort = config.httpsPort;
        _this._name = config.name;
        _this._tcpPort = config.tcpPort;
        _this._tlsSettings.internalValue = config.tlsSettings;
        _this._type = config.type;
        return _this;
    }
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
    ConnectivityDirectoryService.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_connectivity_directory_service", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "appProtocol", {
        get: function () {
            return this.getStringAttribute('app_protocol');
        },
        set: function (value) {
            this._appProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.resetAppProtocol = function () {
        this._appProtocol = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "appProtocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appProtocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.putHost = function (value) {
        this._host.internalValue = value;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "httpPort", {
        get: function () {
            return this.getNumberAttribute('http_port');
        },
        set: function (value) {
            this._httpPort = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.resetHttpPort = function () {
        this._httpPort = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "httpPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "httpsPort", {
        get: function () {
            return this.getNumberAttribute('https_port');
        },
        set: function (value) {
            this._httpsPort = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.resetHttpsPort = function () {
        this._httpsPort = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "httpsPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpsPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "tcpPort", {
        get: function () {
            return this.getNumberAttribute('tcp_port');
        },
        set: function (value) {
            this._tcpPort = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.resetTcpPort = function () {
        this._tcpPort = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "tcpPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tcpPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "tlsSettings", {
        get: function () {
            return this._tlsSettings;
        },
        enumerable: false,
        configurable: true
    });
    ConnectivityDirectoryService.prototype.putTlsSettings = function (value) {
        this._tlsSettings.internalValue = value;
    };
    ConnectivityDirectoryService.prototype.resetTlsSettings = function () {
        this._tlsSettings.internalValue = undefined;
    };
    Object.defineProperty(ConnectivityDirectoryService.prototype, "tlsSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsSettings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectivityDirectoryService.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConnectivityDirectoryService.prototype.synthesizeAttributes = function () {
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
    };
    ConnectivityDirectoryService.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConnectivityDirectoryService.tfResourceType = "cloudflare_connectivity_directory_service";
    return ConnectivityDirectoryService;
}(cdktf.TerraformResource));
exports.ConnectivityDirectoryService = ConnectivityDirectoryService;
