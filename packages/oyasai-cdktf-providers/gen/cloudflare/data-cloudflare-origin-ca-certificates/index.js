"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificates
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
exports.DataCloudflareOriginCaCertificates = exports.DataCloudflareOriginCaCertificatesResultList = exports.DataCloudflareOriginCaCertificatesResultOutputReference = void 0;
exports.dataCloudflareOriginCaCertificatesResultToTerraform = dataCloudflareOriginCaCertificatesResultToTerraform;
exports.dataCloudflareOriginCaCertificatesResultToHclTerraform = dataCloudflareOriginCaCertificatesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareOriginCaCertificatesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareOriginCaCertificatesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareOriginCaCertificatesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareOriginCaCertificatesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareOriginCaCertificatesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "csr", {
        // csr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('csr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "hostnames", {
        // hostnames - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hostnames');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "requestType", {
        // request_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificatesResultOutputReference.prototype, "requestedValidity", {
        // requested_validity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requested_validity');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareOriginCaCertificatesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareOriginCaCertificatesResultOutputReference = DataCloudflareOriginCaCertificatesResultOutputReference;
var DataCloudflareOriginCaCertificatesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareOriginCaCertificatesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareOriginCaCertificatesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareOriginCaCertificatesResultList.prototype.get = function (index) {
        return new DataCloudflareOriginCaCertificatesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareOriginCaCertificatesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareOriginCaCertificatesResultList = DataCloudflareOriginCaCertificatesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificates cloudflare_origin_ca_certificates}
*/
var DataCloudflareOriginCaCertificates = /** @class */ (function (_super) {
    __extends(DataCloudflareOriginCaCertificates, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificates cloudflare_origin_ca_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOriginCaCertificatesConfig
    */
    function DataCloudflareOriginCaCertificates(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_origin_ca_certificates',
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
        _this._result = new DataCloudflareOriginCaCertificatesResultList(_this, "result", false);
        _this._limit = config.limit;
        _this._maxItems = config.maxItems;
        _this._offset = config.offset;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOriginCaCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOriginCaCertificates to import
    * @param importFromId The id of the existing DataCloudflareOriginCaCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOriginCaCertificates to import is found
    */
    DataCloudflareOriginCaCertificates.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_origin_ca_certificates", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificates.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificates.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "offset", {
        get: function () {
            return this.getNumberAttribute('offset');
        },
        set: function (value) {
            this._offset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareOriginCaCertificates.prototype.resetOffset = function () {
        this._offset = undefined;
    };
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "offsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOriginCaCertificates.prototype, "zoneIdInput", {
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
    DataCloudflareOriginCaCertificates.prototype.synthesizeAttributes = function () {
        return {
            limit: cdktf.numberToTerraform(this._limit),
            max_items: cdktf.numberToTerraform(this._maxItems),
            offset: cdktf.numberToTerraform(this._offset),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareOriginCaCertificates.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareOriginCaCertificates.tfResourceType = "cloudflare_origin_ca_certificates";
    return DataCloudflareOriginCaCertificates;
}(cdktf.TerraformDataSource));
exports.DataCloudflareOriginCaCertificates = DataCloudflareOriginCaCertificates;
