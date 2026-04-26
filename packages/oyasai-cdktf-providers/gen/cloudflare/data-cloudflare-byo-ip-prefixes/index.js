"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes
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
exports.DataCloudflareByoIpPrefixes = exports.DataCloudflareByoIpPrefixesResultList = exports.DataCloudflareByoIpPrefixesResultOutputReference = void 0;
exports.dataCloudflareByoIpPrefixesResultToTerraform = dataCloudflareByoIpPrefixesResultToTerraform;
exports.dataCloudflareByoIpPrefixesResultToHclTerraform = dataCloudflareByoIpPrefixesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareByoIpPrefixesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareByoIpPrefixesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareByoIpPrefixesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareByoIpPrefixesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareByoIpPrefixesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "accountId", {
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "advertised", {
        // advertised - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('advertised');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "advertisedModifiedAt", {
        // advertised_modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('advertised_modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "approved", {
        // approved - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('approved');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "asn", {
        // asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "cidr", {
        // cidr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "delegateLoaCreation", {
        // delegate_loa_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delegate_loa_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "irrValidationState", {
        // irr_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('irr_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "loaDocumentId", {
        // loa_document_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('loa_document_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "onDemandEnabled", {
        // on_demand_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_demand_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "onDemandLocked", {
        // on_demand_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_demand_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "ownershipValidationState", {
        // ownership_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "ownershipValidationToken", {
        // ownership_validation_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership_validation_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixesResultOutputReference.prototype, "rpkiValidationState", {
        // rpki_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rpki_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareByoIpPrefixesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareByoIpPrefixesResultOutputReference = DataCloudflareByoIpPrefixesResultOutputReference;
var DataCloudflareByoIpPrefixesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareByoIpPrefixesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareByoIpPrefixesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareByoIpPrefixesResultList.prototype.get = function (index) {
        return new DataCloudflareByoIpPrefixesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareByoIpPrefixesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareByoIpPrefixesResultList = DataCloudflareByoIpPrefixesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes cloudflare_byo_ip_prefixes}
*/
var DataCloudflareByoIpPrefixes = /** @class */ (function (_super) {
    __extends(DataCloudflareByoIpPrefixes, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes cloudflare_byo_ip_prefixes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareByoIpPrefixesConfig = {}
    */
    function DataCloudflareByoIpPrefixes(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_byo_ip_prefixes',
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
        _this._result = new DataCloudflareByoIpPrefixesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareByoIpPrefixes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareByoIpPrefixes to import
    * @param importFromId The id of the existing DataCloudflareByoIpPrefixes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefixes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareByoIpPrefixes to import is found
    */
    DataCloudflareByoIpPrefixes.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefixes", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareByoIpPrefixes.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareByoIpPrefixes.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareByoIpPrefixes.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixes.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareByoIpPrefixes.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareByoIpPrefixes.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefixes.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareByoIpPrefixes.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareByoIpPrefixes.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareByoIpPrefixes.tfResourceType = "cloudflare_byo_ip_prefixes";
    return DataCloudflareByoIpPrefixes;
}(cdktf.TerraformDataSource));
exports.DataCloudflareByoIpPrefixes = DataCloudflareByoIpPrefixes;
