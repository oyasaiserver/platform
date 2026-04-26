"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls
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
exports.DataCloudflareCustomSsls = exports.DataCloudflareCustomSslsResultList = exports.DataCloudflareCustomSslsResultOutputReference = exports.DataCloudflareCustomSslsResultKeylessServerOutputReference = exports.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference = exports.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference = void 0;
exports.dataCloudflareCustomSslsResultGeoRestrictionsToTerraform = dataCloudflareCustomSslsResultGeoRestrictionsToTerraform;
exports.dataCloudflareCustomSslsResultGeoRestrictionsToHclTerraform = dataCloudflareCustomSslsResultGeoRestrictionsToHclTerraform;
exports.dataCloudflareCustomSslsResultKeylessServerTunnelToTerraform = dataCloudflareCustomSslsResultKeylessServerTunnelToTerraform;
exports.dataCloudflareCustomSslsResultKeylessServerTunnelToHclTerraform = dataCloudflareCustomSslsResultKeylessServerTunnelToHclTerraform;
exports.dataCloudflareCustomSslsResultKeylessServerToTerraform = dataCloudflareCustomSslsResultKeylessServerToTerraform;
exports.dataCloudflareCustomSslsResultKeylessServerToHclTerraform = dataCloudflareCustomSslsResultKeylessServerToHclTerraform;
exports.dataCloudflareCustomSslsResultToTerraform = dataCloudflareCustomSslsResultToTerraform;
exports.dataCloudflareCustomSslsResultToHclTerraform = dataCloudflareCustomSslsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCustomSslsResultGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslsResultGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslsResultGeoRestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslsResultGeoRestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslsResultGeoRestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslsResultGeoRestrictionsOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslsResultGeoRestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslsResultGeoRestrictionsOutputReference = DataCloudflareCustomSslsResultGeoRestrictionsOutputReference;
function dataCloudflareCustomSslsResultKeylessServerTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslsResultKeylessServerTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference = DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference;
function dataCloudflareCustomSslsResultKeylessServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslsResultKeylessServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslsResultKeylessServerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslsResultKeylessServerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslsResultKeylessServerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // tunnel - computed: true, optional: false, required: false
        _this._tunnel = new DataCloudflareCustomSslsResultKeylessServerTunnelOutputReference(_this, "tunnel");
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultKeylessServerOutputReference.prototype, "tunnel", {
        get: function () {
            return this._tunnel;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslsResultKeylessServerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslsResultKeylessServerOutputReference = DataCloudflareCustomSslsResultKeylessServerOutputReference;
function dataCloudflareCustomSslsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomSslsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // geo_restrictions - computed: true, optional: false, required: false
        _this._geoRestrictions = new DataCloudflareCustomSslsResultGeoRestrictionsOutputReference(_this, "geo_restrictions");
        // keyless_server - computed: true, optional: false, required: false
        _this._keylessServer = new DataCloudflareCustomSslsResultKeylessServerOutputReference(_this, "keyless_server");
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "bundleMethod", {
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "customCsrId", {
        // custom_csr_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_csr_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "geoRestrictions", {
        get: function () {
            return this._geoRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "keylessServer", {
        get: function () {
            return this._keylessServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "policyRestrictions", {
        // policy_restrictions - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_restrictions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslsResultOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslsResultOutputReference = DataCloudflareCustomSslsResultOutputReference;
var DataCloudflareCustomSslsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomSslsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomSslsResultList.prototype.get = function (index) {
        return new DataCloudflareCustomSslsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomSslsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomSslsResultList = DataCloudflareCustomSslsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls cloudflare_custom_ssls}
*/
var DataCloudflareCustomSsls = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSsls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls cloudflare_custom_ssls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomSslsConfig = {}
    */
    function DataCloudflareCustomSsls(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_ssls',
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
        _this._result = new DataCloudflareCustomSslsResultList(_this, "result", false);
        _this._match = config.match;
        _this._maxItems = config.maxItems;
        _this._status = config.status;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomSsls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomSsls to import
    * @param importFromId The id of the existing DataCloudflareCustomSsls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomSsls to import is found
    */
    DataCloudflareCustomSsls.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_ssls", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsls.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsls.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsls.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsls.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsls.prototype, "zoneIdInput", {
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
    DataCloudflareCustomSsls.prototype.synthesizeAttributes = function () {
        return {
            match: cdktf.stringToTerraform(this._match),
            max_items: cdktf.numberToTerraform(this._maxItems),
            status: cdktf.stringToTerraform(this._status),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCustomSsls.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            match: {
                value: cdktf.stringToHclTerraform(this._match),
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
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    DataCloudflareCustomSsls.tfResourceType = "cloudflare_custom_ssls";
    return DataCloudflareCustomSsls;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCustomSsls = DataCloudflareCustomSsls;
