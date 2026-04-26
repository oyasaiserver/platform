"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl
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
exports.DataCloudflareCustomSsl = exports.DataCloudflareCustomSslKeylessServerOutputReference = exports.DataCloudflareCustomSslKeylessServerTunnelOutputReference = exports.DataCloudflareCustomSslGeoRestrictionsOutputReference = exports.DataCloudflareCustomSslFilterOutputReference = void 0;
exports.dataCloudflareCustomSslFilterToTerraform = dataCloudflareCustomSslFilterToTerraform;
exports.dataCloudflareCustomSslFilterToHclTerraform = dataCloudflareCustomSslFilterToHclTerraform;
exports.dataCloudflareCustomSslGeoRestrictionsToTerraform = dataCloudflareCustomSslGeoRestrictionsToTerraform;
exports.dataCloudflareCustomSslGeoRestrictionsToHclTerraform = dataCloudflareCustomSslGeoRestrictionsToHclTerraform;
exports.dataCloudflareCustomSslKeylessServerTunnelToTerraform = dataCloudflareCustomSslKeylessServerTunnelToTerraform;
exports.dataCloudflareCustomSslKeylessServerTunnelToHclTerraform = dataCloudflareCustomSslKeylessServerTunnelToHclTerraform;
exports.dataCloudflareCustomSslKeylessServerToTerraform = dataCloudflareCustomSslKeylessServerToTerraform;
exports.dataCloudflareCustomSslKeylessServerToHclTerraform = dataCloudflareCustomSslKeylessServerToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCustomSslFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: cdktf.stringToTerraform(struct.match),
        status: cdktf.stringToTerraform(struct.status),
    };
}
function dataCloudflareCustomSslFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var DataCloudflareCustomSslFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._match !== undefined) {
                hasAnyValues = true;
                internalValueResult.match = this._match;
            }
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._match = undefined;
                this._status = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._match = value.match;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslFilterOutputReference.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSslFilterOutputReference.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSslFilterOutputReference.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSslFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSslFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslFilterOutputReference = DataCloudflareCustomSslFilterOutputReference;
function dataCloudflareCustomSslGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslGeoRestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslGeoRestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslGeoRestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslGeoRestrictionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslGeoRestrictionsOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslGeoRestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslGeoRestrictionsOutputReference = DataCloudflareCustomSslGeoRestrictionsOutputReference;
function dataCloudflareCustomSslKeylessServerTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslKeylessServerTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslKeylessServerTunnelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslKeylessServerTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslKeylessServerTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslKeylessServerTunnelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslKeylessServerTunnelOutputReference.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerTunnelOutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslKeylessServerTunnelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslKeylessServerTunnelOutputReference = DataCloudflareCustomSslKeylessServerTunnelOutputReference;
function dataCloudflareCustomSslKeylessServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomSslKeylessServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomSslKeylessServerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSslKeylessServerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomSslKeylessServerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // tunnel - computed: true, optional: false, required: false
        _this._tunnel = new DataCloudflareCustomSslKeylessServerTunnelOutputReference(_this, "tunnel");
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSslKeylessServerOutputReference.prototype, "tunnel", {
        get: function () {
            return this._tunnel;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomSslKeylessServerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomSslKeylessServerOutputReference = DataCloudflareCustomSslKeylessServerOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl cloudflare_custom_ssl}
*/
var DataCloudflareCustomSsl = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomSsl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl cloudflare_custom_ssl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomSslConfig = {}
    */
    function DataCloudflareCustomSsl(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_ssl',
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
        _this._filter = new DataCloudflareCustomSslFilterOutputReference(_this, "filter");
        // geo_restrictions - computed: true, optional: false, required: false
        _this._geoRestrictions = new DataCloudflareCustomSslGeoRestrictionsOutputReference(_this, "geo_restrictions");
        // keyless_server - computed: true, optional: false, required: false
        _this._keylessServer = new DataCloudflareCustomSslKeylessServerOutputReference(_this, "keyless_server");
        _this._customCertificateId = config.customCertificateId;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomSsl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomSsl to import
    * @param importFromId The id of the existing DataCloudflareCustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_ssl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomSsl to import is found
    */
    DataCloudflareCustomSsl.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_ssl", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "bundleMethod", {
        // ==========
        // ATTRIBUTES
        // ==========
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "customCertificateId", {
        get: function () {
            return this.getStringAttribute('custom_certificate_id');
        },
        set: function (value) {
            this._customCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsl.prototype.resetCustomCertificateId = function () {
        this._customCertificateId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "customCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "customCsrId", {
        // custom_csr_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_csr_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsl.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareCustomSsl.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "geoRestrictions", {
        get: function () {
            return this._geoRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "keylessServer", {
        get: function () {
            return this._keylessServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "policyRestrictions", {
        // policy_restrictions - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_restrictions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomSsl.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomSsl.prototype, "zoneIdInput", {
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
    DataCloudflareCustomSsl.prototype.synthesizeAttributes = function () {
        return {
            custom_certificate_id: cdktf.stringToTerraform(this._customCertificateId),
            filter: dataCloudflareCustomSslFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCustomSsl.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            custom_certificate_id: {
                value: cdktf.stringToHclTerraform(this._customCertificateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareCustomSslFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCustomSslFilter",
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
    DataCloudflareCustomSsl.tfResourceType = "cloudflare_custom_ssl";
    return DataCloudflareCustomSsl;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCustomSsl = DataCloudflareCustomSsl;
