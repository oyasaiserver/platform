"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates
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
exports.DataCloudflareClientCertificates = exports.DataCloudflareClientCertificatesResultList = exports.DataCloudflareClientCertificatesResultOutputReference = exports.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference = void 0;
exports.dataCloudflareClientCertificatesResultCertificateAuthorityToTerraform = dataCloudflareClientCertificatesResultCertificateAuthorityToTerraform;
exports.dataCloudflareClientCertificatesResultCertificateAuthorityToHclTerraform = dataCloudflareClientCertificatesResultCertificateAuthorityToHclTerraform;
exports.dataCloudflareClientCertificatesResultToTerraform = dataCloudflareClientCertificatesResultToTerraform;
exports.dataCloudflareClientCertificatesResultToHclTerraform = dataCloudflareClientCertificatesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareClientCertificatesResultCertificateAuthorityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareClientCertificatesResultCertificateAuthorityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference = DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference;
function dataCloudflareClientCertificatesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareClientCertificatesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareClientCertificatesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificatesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareClientCertificatesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // certificate_authority - computed: true, optional: false, required: false
        _this._certificateAuthority = new DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference(_this, "certificate_authority");
        return _this;
    }
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "certificateAuthority", {
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "commonName", {
        // common_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('common_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "country", {
        // country - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "csr", {
        // csr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('csr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "fingerprintSha256", {
        // fingerprint_sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint_sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "organization", {
        // organization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "organizationalUnit", {
        // organizational_unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organizational_unit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "ski", {
        // ski - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ski');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificatesResultOutputReference.prototype, "validityDays", {
        // validity_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('validity_days');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareClientCertificatesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareClientCertificatesResultOutputReference = DataCloudflareClientCertificatesResultOutputReference;
var DataCloudflareClientCertificatesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificatesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareClientCertificatesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareClientCertificatesResultList.prototype.get = function (index) {
        return new DataCloudflareClientCertificatesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareClientCertificatesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareClientCertificatesResultList = DataCloudflareClientCertificatesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates cloudflare_client_certificates}
*/
var DataCloudflareClientCertificates = /** @class */ (function (_super) {
    __extends(DataCloudflareClientCertificates, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates cloudflare_client_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareClientCertificatesConfig = {}
    */
    function DataCloudflareClientCertificates(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_client_certificates',
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
        _this._result = new DataCloudflareClientCertificatesResultList(_this, "result", false);
        _this._limit = config.limit;
        _this._maxItems = config.maxItems;
        _this._offset = config.offset;
        _this._status = config.status;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareClientCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareClientCertificates to import
    * @param importFromId The id of the existing DataCloudflareClientCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareClientCertificates to import is found
    */
    DataCloudflareClientCertificates.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_client_certificates", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificates.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificates.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "offset", {
        get: function () {
            return this.getNumberAttribute('offset');
        },
        set: function (value) {
            this._offset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificates.prototype.resetOffset = function () {
        this._offset = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "offsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificates.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareClientCertificates.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareClientCertificates.prototype, "zoneIdInput", {
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
    DataCloudflareClientCertificates.prototype.synthesizeAttributes = function () {
        return {
            limit: cdktf.numberToTerraform(this._limit),
            max_items: cdktf.numberToTerraform(this._maxItems),
            offset: cdktf.numberToTerraform(this._offset),
            status: cdktf.stringToTerraform(this._status),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareClientCertificates.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            limit: {
                value: cdktf.numberToHclTerraform(this._limit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            offset: {
                value: cdktf.numberToHclTerraform(this._offset),
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
    DataCloudflareClientCertificates.tfResourceType = "cloudflare_client_certificates";
    return DataCloudflareClientCertificates;
}(cdktf.TerraformDataSource));
exports.DataCloudflareClientCertificates = DataCloudflareClientCertificates;
