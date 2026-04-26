"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate
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
exports.DataCloudflareOriginCaCertificate = exports.DataCloudflareOriginCaCertificateFilterOutputReference = void 0;
exports.dataCloudflareOriginCaCertificateFilterToTerraform = dataCloudflareOriginCaCertificateFilterToTerraform;
exports.dataCloudflareOriginCaCertificateFilterToHclTerraform = dataCloudflareOriginCaCertificateFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareOriginCaCertificateFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        offset: cdktf.numberToTerraform(struct.offset),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
    };
}
function dataCloudflareOriginCaCertificateFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        limit: {
            value: cdktf.numberToHclTerraform(struct.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        offset: {
            value: cdktf.numberToHclTerraform(struct.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
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
var DataCloudflareOriginCaCertificateFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOriginCaCertificateFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareOriginCaCertificateFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._limit !== undefined) {
                hasAnyValues = true;
                internalValueResult.limit = this._limit;
            }
            if (this._offset !== undefined) {
                hasAnyValues = true;
                internalValueResult.offset = this._offset;
            }
            if (this._zoneId !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneId = this._zoneId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._limit = undefined;
                this._offset = undefined;
                this._zoneId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._limit = value.limit;
                this._offset = value.offset;
                this._zoneId = value.zoneId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificateFilterOutputReference.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "offset", {
        get: function () {
            return this.getNumberAttribute('offset');
        },
        set: function (value) {
            this._offset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificateFilterOutputReference.prototype.resetOffset = function () {
        this._offset = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "offsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificateFilterOutputReference.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOriginCaCertificateFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOriginCaCertificateFilterOutputReference = DataCloudflareOriginCaCertificateFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
var DataCloudflareOriginCaCertificate = /** @class */ (function (_super) {
    __extends(DataCloudflareOriginCaCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate cloudflare_origin_ca_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOriginCaCertificateConfig = {}
    */
    function DataCloudflareOriginCaCertificate(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_origin_ca_certificate',
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
        _this._filter = new DataCloudflareOriginCaCertificateFilterOutputReference(_this, "filter");
        _this._certificateId = config.certificateId;
        _this._filter.internalValue = config.filter;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOriginCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOriginCaCertificate to import
    * @param importFromId The id of the existing DataCloudflareOriginCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOriginCaCertificate to import is found
    */
    DataCloudflareOriginCaCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_origin_ca_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "certificate", {
        // ==========
        // ATTRIBUTES
        // ==========
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificate.prototype.resetCertificateId = function () {
        this._certificateId = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "csr", {
        // csr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('csr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificate.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareOriginCaCertificate.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "hostnames", {
        // hostnames - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hostnames');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "requestType", {
        // request_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificate.prototype, "requestedValidity", {
        // requested_validity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requested_validity');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareOriginCaCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_id: cdktf.stringToTerraform(this._certificateId),
            filter: dataCloudflareOriginCaCertificateFilterToTerraform(this._filter.internalValue),
        };
    };
    DataCloudflareOriginCaCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            certificate_id: {
                value: cdktf.stringToHclTerraform(this._certificateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareOriginCaCertificateFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareOriginCaCertificateFilter",
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
    DataCloudflareOriginCaCertificate.tfResourceType = "cloudflare_origin_ca_certificate";
    return DataCloudflareOriginCaCertificate;
}(cdktf.TerraformDataSource));
exports.DataCloudflareOriginCaCertificate = DataCloudflareOriginCaCertificate;
