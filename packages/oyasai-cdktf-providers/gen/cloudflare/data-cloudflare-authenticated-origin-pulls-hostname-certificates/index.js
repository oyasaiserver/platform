"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates
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
exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificates = exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList = exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference = void 0;
exports.dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToTerraform = dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToTerraform;
exports.dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToHclTerraform = dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference = DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference;
var DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.prototype.get = function (index) {
        return new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList = DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates}
*/
var DataCloudflareAuthenticatedOriginPullsHostnameCertificates = /** @class */ (function (_super) {
    __extends(DataCloudflareAuthenticatedOriginPullsHostnameCertificates, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig
    */
    function DataCloudflareAuthenticatedOriginPullsHostnameCertificates(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_authenticated_origin_pulls_hostname_certificates',
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
        _this._result = new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import is found
    */
    DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_authenticated_origin_pulls_hostname_certificates", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype, "zoneIdInput", {
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
    DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareAuthenticatedOriginPullsHostnameCertificates.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
    DataCloudflareAuthenticatedOriginPullsHostnameCertificates.tfResourceType = "cloudflare_authenticated_origin_pulls_hostname_certificates";
    return DataCloudflareAuthenticatedOriginPullsHostnameCertificates;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAuthenticatedOriginPullsHostnameCertificates = DataCloudflareAuthenticatedOriginPullsHostnameCertificates;
