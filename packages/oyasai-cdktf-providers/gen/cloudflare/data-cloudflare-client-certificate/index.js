"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate
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
exports.DataCloudflareClientCertificate = exports.DataCloudflareClientCertificateFilterOutputReference = exports.DataCloudflareClientCertificateCertificateAuthorityOutputReference = void 0;
exports.dataCloudflareClientCertificateCertificateAuthorityToTerraform = dataCloudflareClientCertificateCertificateAuthorityToTerraform;
exports.dataCloudflareClientCertificateCertificateAuthorityToHclTerraform = dataCloudflareClientCertificateCertificateAuthorityToHclTerraform;
exports.dataCloudflareClientCertificateFilterToTerraform = dataCloudflareClientCertificateFilterToTerraform;
exports.dataCloudflareClientCertificateFilterToHclTerraform = dataCloudflareClientCertificateFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareClientCertificateCertificateAuthorityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareClientCertificateCertificateAuthorityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareClientCertificateCertificateAuthorityOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificateCertificateAuthorityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareClientCertificateCertificateAuthorityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareClientCertificateCertificateAuthorityOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareClientCertificateCertificateAuthorityOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificateCertificateAuthorityOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareClientCertificateCertificateAuthorityOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareClientCertificateCertificateAuthorityOutputReference = DataCloudflareClientCertificateCertificateAuthorityOutputReference;
function dataCloudflareClientCertificateFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        offset: cdktf.numberToTerraform(struct.offset),
        status: cdktf.stringToTerraform(struct.status),
    };
}
function dataCloudflareClientCertificateFilterToHclTerraform(struct) {
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
var DataCloudflareClientCertificateFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificateFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareClientCertificateFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "internalValue", {
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
                this._limit = undefined;
                this._offset = undefined;
                this._status = undefined;
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
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificateFilterOutputReference.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "offset", {
        get: function () {
            return this.getNumberAttribute('offset');
        },
        set: function (value) {
            this._offset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificateFilterOutputReference.prototype.resetOffset = function () {
        this._offset = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "offsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificateFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificateFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareClientCertificateFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareClientCertificateFilterOutputReference = DataCloudflareClientCertificateFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate cloudflare_client_certificate}
*/
var DataCloudflareClientCertificate = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate cloudflare_client_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareClientCertificateConfig = {}
    */
    function DataCloudflareClientCertificate(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_client_certificate',
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
        // certificate_authority - computed: true, optional: false, required: false
        _this._certificateAuthority = new DataCloudflareClientCertificateCertificateAuthorityOutputReference(_this, "certificate_authority");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareClientCertificateFilterOutputReference(_this, "filter");
        _this._clientCertificateId = config.clientCertificateId;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareClientCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareClientCertificate to import
    * @param importFromId The id of the existing DataCloudflareClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareClientCertificate to import is found
    */
    DataCloudflareClientCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_client_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "certificate", {
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
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "certificateAuthority", {
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "clientCertificateId", {
        get: function () {
            return this.getStringAttribute('client_certificate_id');
        },
        set: function (value) {
            this._clientCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificate.prototype.resetClientCertificateId = function () {
        this._clientCertificateId = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "clientCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "commonName", {
        // common_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('common_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "country", {
        // country - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "csr", {
        // csr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('csr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificate.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareClientCertificate.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "fingerprintSha256", {
        // fingerprint_sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint_sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "organization", {
        // organization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "organizationalUnit", {
        // organizational_unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organizational_unit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "ski", {
        // ski - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ski');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "validityDays", {
        // validity_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('validity_days');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificate.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificate.prototype, "zoneIdInput", {
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
    DataCloudflareClientCertificate.prototype.synthesizeAttributes = function () {
        return {
            client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
            filter: dataCloudflareClientCertificateFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareClientCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            client_certificate_id: {
                value: cdktf.stringToHclTerraform(this._clientCertificateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareClientCertificateFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareClientCertificateFilter",
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
    DataCloudflareClientCertificate.tfResourceType = "cloudflare_client_certificate";
    return DataCloudflareClientCertificate;
}(cdktf.TerraformDataSource));
exports.DataCloudflareClientCertificate = DataCloudflareClientCertificate;
