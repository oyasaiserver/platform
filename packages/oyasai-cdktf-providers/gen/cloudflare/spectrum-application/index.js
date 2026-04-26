"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application
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
exports.SpectrumApplication = exports.SpectrumApplicationOriginDnsOutputReference = exports.SpectrumApplicationEdgeIpsOutputReference = exports.SpectrumApplicationDnsOutputReference = void 0;
exports.spectrumApplicationDnsToTerraform = spectrumApplicationDnsToTerraform;
exports.spectrumApplicationDnsToHclTerraform = spectrumApplicationDnsToHclTerraform;
exports.spectrumApplicationEdgeIpsToTerraform = spectrumApplicationEdgeIpsToTerraform;
exports.spectrumApplicationEdgeIpsToHclTerraform = spectrumApplicationEdgeIpsToHclTerraform;
exports.spectrumApplicationOriginDnsToTerraform = spectrumApplicationOriginDnsToTerraform;
exports.spectrumApplicationOriginDnsToHclTerraform = spectrumApplicationOriginDnsToHclTerraform;
var cdktf = require("cdktf");
function spectrumApplicationDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function spectrumApplicationDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
var SpectrumApplicationDnsOutputReference = /** @class */ (function (_super) {
    __extends(SpectrumApplicationDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SpectrumApplicationDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SpectrumApplicationDnsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
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
                this._name = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationDnsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationDnsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SpectrumApplicationDnsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationDnsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationDnsOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(SpectrumApplicationDnsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return SpectrumApplicationDnsOutputReference;
}(cdktf.ComplexObject));
exports.SpectrumApplicationDnsOutputReference = SpectrumApplicationDnsOutputReference;
function spectrumApplicationEdgeIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connectivity: cdktf.stringToTerraform(struct.connectivity),
        ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ips),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function spectrumApplicationEdgeIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        connectivity: {
            value: cdktf.stringToHclTerraform(struct.connectivity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ips),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
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
var SpectrumApplicationEdgeIpsOutputReference = /** @class */ (function (_super) {
    __extends(SpectrumApplicationEdgeIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SpectrumApplicationEdgeIpsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._connectivity !== undefined) {
                hasAnyValues = true;
                internalValueResult.connectivity = this._connectivity;
            }
            if (this._ips !== undefined) {
                hasAnyValues = true;
                internalValueResult.ips = this._ips;
            }
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
                this._connectivity = undefined;
                this._ips = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._connectivity = value.connectivity;
                this._ips = value.ips;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "connectivity", {
        get: function () {
            return this.getStringAttribute('connectivity');
        },
        set: function (value) {
            this._connectivity = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationEdgeIpsOutputReference.prototype.resetConnectivity = function () {
        this._connectivity = undefined;
    };
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "connectivityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectivity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "ips", {
        get: function () {
            return this.getListAttribute('ips');
        },
        set: function (value) {
            this._ips = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationEdgeIpsOutputReference.prototype.resetIps = function () {
        this._ips = undefined;
    };
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "ipsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ips;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationEdgeIpsOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(SpectrumApplicationEdgeIpsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return SpectrumApplicationEdgeIpsOutputReference;
}(cdktf.ComplexObject));
exports.SpectrumApplicationEdgeIpsOutputReference = SpectrumApplicationEdgeIpsOutputReference;
function spectrumApplicationOriginDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        ttl: cdktf.numberToTerraform(struct.ttl),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function spectrumApplicationOriginDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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
var SpectrumApplicationOriginDnsOutputReference = /** @class */ (function (_super) {
    __extends(SpectrumApplicationOriginDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SpectrumApplicationOriginDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._ttl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ttl = this._ttl;
            }
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
                this._name = undefined;
                this._ttl = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._ttl = value.ttl;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationOriginDnsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationOriginDnsOutputReference.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplicationOriginDnsOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(SpectrumApplicationOriginDnsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return SpectrumApplicationOriginDnsOutputReference;
}(cdktf.ComplexObject));
exports.SpectrumApplicationOriginDnsOutputReference = SpectrumApplicationOriginDnsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application cloudflare_spectrum_application}
*/
var SpectrumApplication = /** @class */ (function (_super) {
    __extends(SpectrumApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application cloudflare_spectrum_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpectrumApplicationConfig
    */
    function SpectrumApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_spectrum_application',
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
        // dns - computed: false, optional: false, required: true
        _this._dns = new SpectrumApplicationDnsOutputReference(_this, "dns");
        // edge_ips - computed: true, optional: true, required: false
        _this._edgeIps = new SpectrumApplicationEdgeIpsOutputReference(_this, "edge_ips");
        // origin_dns - computed: false, optional: true, required: false
        _this._originDns = new SpectrumApplicationOriginDnsOutputReference(_this, "origin_dns");
        _this._argoSmartRouting = config.argoSmartRouting;
        _this._dns.internalValue = config.dns;
        _this._edgeIps.internalValue = config.edgeIps;
        _this._ipFirewall = config.ipFirewall;
        _this._originDirect = config.originDirect;
        _this._originDns.internalValue = config.originDns;
        _this._originPort = config.originPort;
        _this._protocol = config.protocol;
        _this._proxyProtocol = config.proxyProtocol;
        _this._tls = config.tls;
        _this._trafficType = config.trafficType;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpectrumApplication to import
    * @param importFromId The id of the existing SpectrumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpectrumApplication to import is found
    */
    SpectrumApplication.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_spectrum_application", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SpectrumApplication.prototype, "argoSmartRouting", {
        get: function () {
            return this.getBooleanAttribute('argo_smart_routing');
        },
        set: function (value) {
            this._argoSmartRouting = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetArgoSmartRouting = function () {
        this._argoSmartRouting = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "argoSmartRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._argoSmartRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.putDns = function (value) {
        this._dns.internalValue = value;
    };
    Object.defineProperty(SpectrumApplication.prototype, "dnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dns.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "edgeIps", {
        get: function () {
            return this._edgeIps;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.putEdgeIps = function (value) {
        this._edgeIps.internalValue = value;
    };
    SpectrumApplication.prototype.resetEdgeIps = function () {
        this._edgeIps.internalValue = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "edgeIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._edgeIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "ipFirewall", {
        get: function () {
            return this.getBooleanAttribute('ip_firewall');
        },
        set: function (value) {
            this._ipFirewall = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetIpFirewall = function () {
        this._ipFirewall = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "ipFirewallInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipFirewall;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "originDirect", {
        get: function () {
            return this.getListAttribute('origin_direct');
        },
        set: function (value) {
            this._originDirect = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetOriginDirect = function () {
        this._originDirect = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "originDirectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originDirect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "originDns", {
        get: function () {
            return this._originDns;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.putOriginDns = function (value) {
        this._originDns.internalValue = value;
    };
    SpectrumApplication.prototype.resetOriginDns = function () {
        this._originDns.internalValue = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "originDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originDns.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "originPort", {
        get: function () {
            return this.getAnyMapAttribute('origin_port');
        },
        set: function (value) {
            this._originPort = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetOriginPort = function () {
        this._originPort = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "originPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "proxyProtocol", {
        get: function () {
            return this.getStringAttribute('proxy_protocol');
        },
        set: function (value) {
            this._proxyProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetProxyProtocol = function () {
        this._proxyProtocol = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "proxyProtocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyProtocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "tls", {
        get: function () {
            return this.getStringAttribute('tls');
        },
        set: function (value) {
            this._tls = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetTls = function () {
        this._tls = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "tlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "trafficType", {
        get: function () {
            return this.getStringAttribute('traffic_type');
        },
        set: function (value) {
            this._trafficType = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetTrafficType = function () {
        this._trafficType = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "trafficTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpectrumApplication.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    SpectrumApplication.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(SpectrumApplication.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SpectrumApplication.prototype.synthesizeAttributes = function () {
        return {
            argo_smart_routing: cdktf.booleanToTerraform(this._argoSmartRouting),
            dns: spectrumApplicationDnsToTerraform(this._dns.internalValue),
            edge_ips: spectrumApplicationEdgeIpsToTerraform(this._edgeIps.internalValue),
            ip_firewall: cdktf.booleanToTerraform(this._ipFirewall),
            origin_direct: cdktf.listMapper(cdktf.stringToTerraform, false)(this._originDirect),
            origin_dns: spectrumApplicationOriginDnsToTerraform(this._originDns.internalValue),
            origin_port: cdktf.hashMapper(cdktf.anyToTerraform)(this._originPort),
            protocol: cdktf.stringToTerraform(this._protocol),
            proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
            tls: cdktf.stringToTerraform(this._tls),
            traffic_type: cdktf.stringToTerraform(this._trafficType),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    SpectrumApplication.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            argo_smart_routing: {
                value: cdktf.booleanToHclTerraform(this._argoSmartRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dns: {
                value: spectrumApplicationDnsToHclTerraform(this._dns.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpectrumApplicationDns",
            },
            edge_ips: {
                value: spectrumApplicationEdgeIpsToHclTerraform(this._edgeIps.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpectrumApplicationEdgeIps",
            },
            ip_firewall: {
                value: cdktf.booleanToHclTerraform(this._ipFirewall),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            origin_direct: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._originDirect),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            origin_dns: {
                value: spectrumApplicationOriginDnsToHclTerraform(this._originDns.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpectrumApplicationOriginDns",
            },
            origin_port: {
                value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._originPort),
                isBlock: false,
                type: "map",
                storageClassType: "anyMap",
            },
            protocol: {
                value: cdktf.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proxy_protocol: {
                value: cdktf.stringToHclTerraform(this._proxyProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tls: {
                value: cdktf.stringToHclTerraform(this._tls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            traffic_type: {
                value: cdktf.stringToHclTerraform(this._trafficType),
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SpectrumApplication.tfResourceType = "cloudflare_spectrum_application";
    return SpectrumApplication;
}(cdktf.TerraformResource));
exports.SpectrumApplication = SpectrumApplication;
