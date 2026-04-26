"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services
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
exports.DataCloudflareConnectivityDirectoryServices = exports.DataCloudflareConnectivityDirectoryServicesResultList = exports.DataCloudflareConnectivityDirectoryServicesResultOutputReference = exports.DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference = exports.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference = exports.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference = exports.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference = void 0;
exports.dataCloudflareConnectivityDirectoryServicesResultHostNetworkToTerraform = dataCloudflareConnectivityDirectoryServicesResultHostNetworkToTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultHostNetworkToHclTerraform = dataCloudflareConnectivityDirectoryServicesResultHostNetworkToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToTerraform = dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToHclTerraform = dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultHostToTerraform = dataCloudflareConnectivityDirectoryServicesResultHostToTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultHostToHclTerraform = dataCloudflareConnectivityDirectoryServicesResultHostToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToTerraform = dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToHclTerraform = dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToHclTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultToTerraform = dataCloudflareConnectivityDirectoryServicesResultToTerraform;
exports.dataCloudflareConnectivityDirectoryServicesResultToHclTerraform = dataCloudflareConnectivityDirectoryServicesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareConnectivityDirectoryServicesResultHostNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServicesResultHostNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference = DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference;
function dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.prototype, "resolverIps", {
        // resolver_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('resolver_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference = DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference;
function dataCloudflareConnectivityDirectoryServicesResultHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServicesResultHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServicesResultHostOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServicesResultHostOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // network - computed: true, optional: false, required: false
        _this._network = new DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference(_this, "network");
        // resolver_network - computed: true, optional: false, required: false
        _this._resolverNetwork = new DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference(_this, "resolver_network");
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.prototype, "ipv4", {
        // ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.prototype, "ipv6", {
        // ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.prototype, "network", {
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.prototype, "resolverNetwork", {
        get: function () {
            return this._resolverNetwork;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServicesResultHostOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference = DataCloudflareConnectivityDirectoryServicesResultHostOutputReference;
function dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference.prototype, "certVerificationMode", {
        // cert_verification_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_verification_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference = DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference;
function dataCloudflareConnectivityDirectoryServicesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareConnectivityDirectoryServicesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareConnectivityDirectoryServicesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServicesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareConnectivityDirectoryServicesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // host - computed: true, optional: false, required: false
        _this._host = new DataCloudflareConnectivityDirectoryServicesResultHostOutputReference(_this, "host");
        // tls_settings - computed: true, optional: false, required: false
        _this._tlsSettings = new DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference(_this, "tls_settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "appProtocol", {
        // app_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "httpPort", {
        // http_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('http_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "httpsPort", {
        // https_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('https_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "tcpPort", {
        // tcp_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tcp_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "tlsSettings", {
        get: function () {
            return this._tlsSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServicesResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareConnectivityDirectoryServicesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareConnectivityDirectoryServicesResultOutputReference = DataCloudflareConnectivityDirectoryServicesResultOutputReference;
var DataCloudflareConnectivityDirectoryServicesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServicesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareConnectivityDirectoryServicesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareConnectivityDirectoryServicesResultList.prototype.get = function (index) {
        return new DataCloudflareConnectivityDirectoryServicesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareConnectivityDirectoryServicesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareConnectivityDirectoryServicesResultList = DataCloudflareConnectivityDirectoryServicesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services}
*/
var DataCloudflareConnectivityDirectoryServices = /** @class */ (function (_super) {
    __extends(DataCloudflareConnectivityDirectoryServices, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareConnectivityDirectoryServicesConfig = {}
    */
    function DataCloudflareConnectivityDirectoryServices(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_connectivity_directory_services',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareConnectivityDirectoryServicesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareConnectivityDirectoryServices to import
    * @param importFromId The id of the existing DataCloudflareConnectivityDirectoryServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareConnectivityDirectoryServices to import is found
    */
    DataCloudflareConnectivityDirectoryServices.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_connectivity_directory_services", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryServices.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryServices.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareConnectivityDirectoryServices.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflareConnectivityDirectoryServices.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareConnectivityDirectoryServices.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    DataCloudflareConnectivityDirectoryServices.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareConnectivityDirectoryServices.tfResourceType = "cloudflare_connectivity_directory_services";
    return DataCloudflareConnectivityDirectoryServices;
}(cdktf.TerraformDataSource));
exports.DataCloudflareConnectivityDirectoryServices = DataCloudflareConnectivityDirectoryServices;
