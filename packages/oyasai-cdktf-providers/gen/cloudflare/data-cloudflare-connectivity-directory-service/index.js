"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service
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
exports.DataCloudflareConnectivityDirectoryService = exports.DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference = exports.DataCloudflareConnectivityDirectoryServiceHostOutputReference = exports.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference = exports.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference = exports.DataCloudflareConnectivityDirectoryServiceFilterOutputReference = void 0;
exports.dataCloudflareConnectivityDirectoryServiceFilterToTerraform = dataCloudflareConnectivityDirectoryServiceFilterToTerraform;
exports.dataCloudflareConnectivityDirectoryServiceFilterToHclTerraform = dataCloudflareConnectivityDirectoryServiceFilterToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServiceHostNetworkToTerraform = dataCloudflareConnectivityDirectoryServiceHostNetworkToTerraform;
exports.dataCloudflareConnectivityDirectoryServiceHostNetworkToHclTerraform = dataCloudflareConnectivityDirectoryServiceHostNetworkToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToTerraform = dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToTerraform;
exports.dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToHclTerraform = dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServiceHostToTerraform = dataCloudflareConnectivityDirectoryServiceHostToTerraform;
exports.dataCloudflareConnectivityDirectoryServiceHostToHclTerraform = dataCloudflareConnectivityDirectoryServiceHostToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServiceTlsSettingsToTerraform = dataCloudflareConnectivityDirectoryServiceTlsSettingsToTerraform;
exports.dataCloudflareConnectivityDirectoryServiceTlsSettingsToHclTerraform = dataCloudflareConnectivityDirectoryServiceTlsSettingsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareConnectivityDirectoryServiceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function dataCloudflareConnectivityDirectoryServiceFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var DataCloudflareConnectivityDirectoryServiceFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServiceFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServiceFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceFilterOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryServiceFilterOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceFilterOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServiceFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServiceFilterOutputReference = DataCloudflareConnectivityDirectoryServiceFilterOutputReference;
function dataCloudflareConnectivityDirectoryServiceHostNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServiceHostNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference = DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference;
function dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "resolverIps", {
        // resolver_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('resolver_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference = DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference;
function dataCloudflareConnectivityDirectoryServiceHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServiceHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServiceHostOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServiceHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServiceHostOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // network - computed: true, optional: false, required: false
        _this._network = new DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference(_this, "network");
        // resolver_network - computed: true, optional: false, required: false
        _this._resolverNetwork = new DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference(_this, "resolver_network");
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostOutputReference.prototype, "ipv4", {
        // ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostOutputReference.prototype, "ipv6", {
        // ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostOutputReference.prototype, "network", {
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceHostOutputReference.prototype, "resolverNetwork", {
        get: function () {
            return this._resolverNetwork;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServiceHostOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServiceHostOutputReference = DataCloudflareConnectivityDirectoryServiceHostOutputReference;
function dataCloudflareConnectivityDirectoryServiceTlsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServiceTlsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference.prototype, "certVerificationMode", {
        // cert_verification_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_verification_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference = DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service}
*/
var DataCloudflareConnectivityDirectoryService = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareConnectivityDirectoryServiceConfig = {}
    */
    function DataCloudflareConnectivityDirectoryService(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareConnectivityDirectoryServiceFilterOutputReference(_this, "filter");
        // host - computed: true, optional: false, required: false
        _this._host = new DataCloudflareConnectivityDirectoryServiceHostOutputReference(_this, "host");
        // tls_settings - computed: true, optional: false, required: false
        _this._tlsSettings = new DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference(_this, "tls_settings");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._serviceId = config.serviceId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareConnectivityDirectoryService to import
    * @param importFromId The id of the existing DataCloudflareConnectivityDirectoryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareConnectivityDirectoryService to import is found
    */
    DataCloudflareConnectivityDirectoryService.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_connectivity_directory_service", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryService.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "appProtocol", {
        // app_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryService.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareConnectivityDirectoryService.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "httpPort", {
        // http_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('http_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "httpsPort", {
        // https_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('https_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "serviceId", {
        get: function () {
            return this.getStringAttribute('service_id');
        },
        set: function (value) {
            this._serviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryService.prototype.resetServiceId = function () {
        this._serviceId = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "serviceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "tcpPort", {
        // tcp_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tcp_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "tlsSettings", {
        get: function () {
            return this._tlsSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryService.prototype, "updatedAt", {
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
    DataCloudflareConnectivityDirectoryService.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareConnectivityDirectoryServiceFilterToTerraform(this._filter.internalValue),
            service_id: cdktf.stringToTerraform(this._serviceId),
        };
    };
    DataCloudflareConnectivityDirectoryService.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareConnectivityDirectoryServiceFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareConnectivityDirectoryServiceFilter",
            },
            service_id: {
                value: cdktf.stringToHclTerraform(this._serviceId),
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
    DataCloudflareConnectivityDirectoryService.tfResourceType = "cloudflare_connectivity_directory_service";
    return DataCloudflareConnectivityDirectoryService;
}(cdktf.TerraformDataSource));
exports.DataCloudflareConnectivityDirectoryService = DataCloudflareConnectivityDirectoryService;
