"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications
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
exports.DataCloudflareSpectrumApplications = exports.DataCloudflareSpectrumApplicationsResultList = exports.DataCloudflareSpectrumApplicationsResultOutputReference = exports.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference = exports.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference = exports.DataCloudflareSpectrumApplicationsResultDnsOutputReference = void 0;
exports.dataCloudflareSpectrumApplicationsResultDnsToTerraform = dataCloudflareSpectrumApplicationsResultDnsToTerraform;
exports.dataCloudflareSpectrumApplicationsResultDnsToHclTerraform = dataCloudflareSpectrumApplicationsResultDnsToHclTerraform;
exports.dataCloudflareSpectrumApplicationsResultEdgeIpsToTerraform = dataCloudflareSpectrumApplicationsResultEdgeIpsToTerraform;
exports.dataCloudflareSpectrumApplicationsResultEdgeIpsToHclTerraform = dataCloudflareSpectrumApplicationsResultEdgeIpsToHclTerraform;
exports.dataCloudflareSpectrumApplicationsResultOriginDnsToTerraform = dataCloudflareSpectrumApplicationsResultOriginDnsToTerraform;
exports.dataCloudflareSpectrumApplicationsResultOriginDnsToHclTerraform = dataCloudflareSpectrumApplicationsResultOriginDnsToHclTerraform;
exports.dataCloudflareSpectrumApplicationsResultToTerraform = dataCloudflareSpectrumApplicationsResultToTerraform;
exports.dataCloudflareSpectrumApplicationsResultToHclTerraform = dataCloudflareSpectrumApplicationsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareSpectrumApplicationsResultDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationsResultDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationsResultDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationsResultDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationsResultDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultDnsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultDnsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationsResultDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationsResultDnsOutputReference = DataCloudflareSpectrumApplicationsResultDnsOutputReference;
function dataCloudflareSpectrumApplicationsResultEdgeIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationsResultEdgeIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.prototype, "connectivity", {
        // connectivity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connectivity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.prototype, "ips", {
        // ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference = DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference;
function dataCloudflareSpectrumApplicationsResultOriginDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationsResultOriginDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference = DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference;
function dataCloudflareSpectrumApplicationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSpectrumApplicationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSpectrumApplicationsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareSpectrumApplicationsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareSpectrumApplicationsResultDnsOutputReference(_this, "dns");
        // edge_ips - computed: true, optional: false, required: false
        _this._edgeIps = new DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference(_this, "edge_ips");
        // origin_dns - computed: true, optional: false, required: false
        _this._originDns = new DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference(_this, "origin_dns");
        // origin_port - computed: true, optional: false, required: false
        _this._originPort = new cdktf.AnyMap(_this, "origin_port");
        return _this;
    }
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "argoSmartRouting", {
        // argo_smart_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('argo_smart_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "edgeIps", {
        get: function () {
            return this._edgeIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "ipFirewall", {
        // ip_firewall - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ip_firewall');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "originDirect", {
        // origin_direct - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('origin_direct');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "originDns", {
        get: function () {
            return this._originDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "originPort", {
        get: function () {
            return this._originPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "proxyProtocol", {
        // proxy_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('proxy_protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "tls", {
        // tls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplicationsResultOutputReference.prototype, "trafficType", {
        // traffic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('traffic_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSpectrumApplicationsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSpectrumApplicationsResultOutputReference = DataCloudflareSpectrumApplicationsResultOutputReference;
var DataCloudflareSpectrumApplicationsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplicationsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareSpectrumApplicationsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareSpectrumApplicationsResultList.prototype.get = function (index) {
        return new DataCloudflareSpectrumApplicationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareSpectrumApplicationsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareSpectrumApplicationsResultList = DataCloudflareSpectrumApplicationsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications}
*/
var DataCloudflareSpectrumApplications = /** @class */ (function (_super) {
    __extends(DataCloudflareSpectrumApplications, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSpectrumApplicationsConfig = {}
    */
    function DataCloudflareSpectrumApplications(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_spectrum_applications',
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
        _this._result = new DataCloudflareSpectrumApplicationsResultList(_this, "result", false);
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareSpectrumApplications resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSpectrumApplications to import
    * @param importFromId The id of the existing DataCloudflareSpectrumApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/spectrum_applications#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSpectrumApplications to import is found
    */
    DataCloudflareSpectrumApplications.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_spectrum_applications", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplications.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplications.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplications.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSpectrumApplications.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareSpectrumApplications.prototype, "zoneIdInput", {
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
    DataCloudflareSpectrumApplications.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareSpectrumApplications.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
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
            order: {
                value: cdktf.stringToHclTerraform(this._order),
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
    DataCloudflareSpectrumApplications.tfResourceType = "cloudflare_spectrum_applications";
    return DataCloudflareSpectrumApplications;
}(cdktf.TerraformDataSource));
exports.DataCloudflareSpectrumApplications = DataCloudflareSpectrumApplications;
