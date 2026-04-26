"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint
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
exports.DataCloudflareZeroTrustGatewayProxyEndpoint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint}
*/
var DataCloudflareZeroTrustGatewayProxyEndpoint = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayProxyEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayProxyEndpointConfig
    */
    function DataCloudflareZeroTrustGatewayProxyEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_proxy_endpoint',
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
        _this._accountId = config.accountId;
        _this._proxyEndpointId = config.proxyEndpointId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayProxyEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayProxyEndpoint to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayProxyEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayProxyEndpoint to import is found
    */
    DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_proxy_endpoint", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayProxyEndpoint.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "ips", {
        // ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "proxyEndpointId", {
        get: function () {
            return this.getStringAttribute('proxy_endpoint_id');
        },
        set: function (value) {
            this._proxyEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "proxyEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "subdomain", {
        // subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayProxyEndpoint.prototype, "updatedAt", {
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
    DataCloudflareZeroTrustGatewayProxyEndpoint.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            proxy_endpoint_id: cdktf.stringToTerraform(this._proxyEndpointId),
        };
    };
    DataCloudflareZeroTrustGatewayProxyEndpoint.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proxy_endpoint_id: {
                value: cdktf.stringToHclTerraform(this._proxyEndpointId),
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
    DataCloudflareZeroTrustGatewayProxyEndpoint.tfResourceType = "cloudflare_zero_trust_gateway_proxy_endpoint";
    return DataCloudflareZeroTrustGatewayProxyEndpoint;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustGatewayProxyEndpoint = DataCloudflareZeroTrustGatewayProxyEndpoint;
