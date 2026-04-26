"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list
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
exports.DataCloudflareZeroTrustDeviceManagedNetworksList = exports.DataCloudflareZeroTrustDeviceManagedNetworksListResultList = exports.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference = exports.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference = void 0;
exports.dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToTerraform = dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToTerraform;
exports.dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToHclTerraform = dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToHclTerraform;
exports.dataCloudflareZeroTrustDeviceManagedNetworksListResultToTerraform = dataCloudflareZeroTrustDeviceManagedNetworksListResultToTerraform;
exports.dataCloudflareZeroTrustDeviceManagedNetworksListResultToHclTerraform = dataCloudflareZeroTrustDeviceManagedNetworksListResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.prototype, "sha256", {
        // sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.prototype, "tlsSockaddr", {
        // tls_sockaddr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tls_sockaddr');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference = DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference;
function dataCloudflareZeroTrustDeviceManagedNetworksListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceManagedNetworksListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.prototype, "networkId", {
        // network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference = DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference;
var DataCloudflareZeroTrustDeviceManagedNetworksListResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceManagedNetworksListResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceManagedNetworksListResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceManagedNetworksListResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceManagedNetworksListResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceManagedNetworksListResultList = DataCloudflareZeroTrustDeviceManagedNetworksListResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list cloudflare_zero_trust_device_managed_networks_list}
*/
var DataCloudflareZeroTrustDeviceManagedNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceManagedNetworksList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list cloudflare_zero_trust_device_managed_networks_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceManagedNetworksListConfig = {}
    */
    function DataCloudflareZeroTrustDeviceManagedNetworksList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_managed_networks_list',
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
        _this._result = new DataCloudflareZeroTrustDeviceManagedNetworksListResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceManagedNetworksList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceManagedNetworksList to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceManagedNetworksList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceManagedNetworksList to import is found
    */
    DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_managed_networks_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksList.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceManagedNetworksList.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksList.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksList.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceManagedNetworksList.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksList.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksList.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDeviceManagedNetworksList.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDeviceManagedNetworksList.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDeviceManagedNetworksList.tfResourceType = "cloudflare_zero_trust_device_managed_networks_list";
    return DataCloudflareZeroTrustDeviceManagedNetworksList;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceManagedNetworksList = DataCloudflareZeroTrustDeviceManagedNetworksList;
