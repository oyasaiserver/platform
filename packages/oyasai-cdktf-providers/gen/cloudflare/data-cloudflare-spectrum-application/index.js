"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application
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
exports.DataCloudflareSpectrumApplication = exports.DataCloudflareSpectrumApplicationOriginDnsOutputReference = exports.DataCloudflareSpectrumApplicationFilterOutputReference = exports.DataCloudflareSpectrumApplicationEdgeIpsOutputReference = exports.DataCloudflareSpectrumApplicationDnsOutputReference = void 0;
exports.dataCloudflareSpectrumApplicationDnsToTerraform = dataCloudflareSpectrumApplicationDnsToTerraform;
exports.dataCloudflareSpectrumApplicationDnsToHclTerraform = dataCloudflareSpectrumApplicationDnsToHclTerraform;
exports.dataCloudflareSpectrumApplicationEdgeIpsToTerraform = dataCloudflareSpectrumApplicationEdgeIpsToTerraform;
exports.dataCloudflareSpectrumApplicationEdgeIpsToHclTerraform = dataCloudflareSpectrumApplicationEdgeIpsToHclTerraform;
exports.dataCloudflareSpectrumApplicationFilterToTerraform = dataCloudflareSpectrumApplicationFilterToTerraform;
exports.dataCloudflareSpectrumApplicationFilterToHclTerraform = dataCloudflareSpectrumApplicationFilterToHclTerraform;
exports.dataCloudflareSpectrumApplicationOriginDnsToTerraform = dataCloudflareSpectrumApplicationOriginDnsToTerraform;
exports.dataCloudflareSpectrumApplicationOriginDnsToHclTerraform = dataCloudflareSpectrumApplicationOriginDnsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareSpectrumApplicationDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationDnsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationDnsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationDnsOutputReference = DataCloudflareSpectrumApplicationDnsOutputReference;
function dataCloudflareSpectrumApplicationEdgeIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationEdgeIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationEdgeIpsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationEdgeIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationEdgeIpsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationEdgeIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationEdgeIpsOutputReference.prototype, "connectivity", {
        // connectivity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connectivity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationEdgeIpsOutputReference.prototype, "ips", {
        // ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationEdgeIpsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationEdgeIpsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationEdgeIpsOutputReference = DataCloudflareSpectrumApplicationEdgeIpsOutputReference;
function dataCloudflareSpectrumApplicationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        order: cdktf.stringToTerraform(struct.order),
    };
}
function dataCloudflareSpectrumApplicationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
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
var DataCloudflareSpectrumApplicationFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._order = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._order = value.order;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplicationFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplicationFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplicationFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplicationFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationFilterOutputReference = DataCloudflareSpectrumApplicationFilterOutputReference;
function dataCloudflareSpectrumApplicationOriginDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationOriginDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationOriginDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationOriginDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationOriginDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationOriginDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationOriginDnsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationOriginDnsOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationOriginDnsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationOriginDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationOriginDnsOutputReference = DataCloudflareSpectrumApplicationOriginDnsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application cloudflare_spectrum_application}
*/
var DataCloudflareSpectrumApplication = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application cloudflare_spectrum_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSpectrumApplicationConfig = {}
    */
    function DataCloudflareSpectrumApplication(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareSpectrumApplicationDnsOutputReference(_this, "dns");
        // edge_ips - computed: true, optional: false, required: false
        _this._edgeIps = new DataCloudflareSpectrumApplicationEdgeIpsOutputReference(_this, "edge_ips");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareSpectrumApplicationFilterOutputReference(_this, "filter");
        // origin_dns - computed: true, optional: false, required: false
        _this._originDns = new DataCloudflareSpectrumApplicationOriginDnsOutputReference(_this, "origin_dns");
        // origin_port - computed: true, optional: false, required: false
        _this._originPort = new cdktf.AnyMap(_this, "origin_port");
        _this._appId = config.appId;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareSpectrumApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSpectrumApplication to import
    * @param importFromId The id of the existing DataCloudflareSpectrumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSpectrumApplication to import is found
    */
    DataCloudflareSpectrumApplication.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_spectrum_application", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplication.prototype.resetAppId = function () {
        this._appId = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "argoSmartRouting", {
        // argo_smart_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('argo_smart_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "edgeIps", {
        get: function () {
            return this._edgeIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplication.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareSpectrumApplication.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "ipFirewall", {
        // ip_firewall - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ip_firewall');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "originDirect", {
        // origin_direct - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('origin_direct');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "originDns", {
        get: function () {
            return this._originDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "originPort", {
        get: function () {
            return this._originPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "proxyProtocol", {
        // proxy_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('proxy_protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "tls", {
        // tls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "trafficType", {
        // traffic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('traffic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplication.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplication.prototype, "zoneIdInput", {
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
    DataCloudflareSpectrumApplication.prototype.synthesizeAttributes = function () {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            filter: dataCloudflareSpectrumApplicationFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareSpectrumApplication.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            app_id: {
                value: cdktf.stringToHclTerraform(this._appId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareSpectrumApplicationFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareSpectrumApplicationFilter",
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
    DataCloudflareSpectrumApplication.tfResourceType = "cloudflare_spectrum_application";
    return DataCloudflareSpectrumApplication;
}(cdktf.TerraformDataSource));
exports.DataCloudflareSpectrumApplication = DataCloudflareSpectrumApplication;
