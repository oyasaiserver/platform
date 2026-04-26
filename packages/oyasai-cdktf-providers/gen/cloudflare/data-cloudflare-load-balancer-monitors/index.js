"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors
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
exports.DataCloudflareLoadBalancerMonitors = exports.DataCloudflareLoadBalancerMonitorsResultList = exports.DataCloudflareLoadBalancerMonitorsResultOutputReference = void 0;
exports.dataCloudflareLoadBalancerMonitorsResultToTerraform = dataCloudflareLoadBalancerMonitorsResultToTerraform;
exports.dataCloudflareLoadBalancerMonitorsResultToHclTerraform = dataCloudflareLoadBalancerMonitorsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLoadBalancerMonitorsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerMonitorsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerMonitorsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerMonitorsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerMonitorsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // header - computed: true, optional: false, required: false
        _this._header = new cdktf.StringListMap(_this, "header");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "allowInsecure", {
        // allow_insecure - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_insecure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "consecutiveDown", {
        // consecutive_down - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_down');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "consecutiveUp", {
        // consecutive_up - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_up');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "expectedBody", {
        // expected_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expected_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "expectedCodes", {
        // expected_codes - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expected_codes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "followRedirects", {
        // follow_redirects - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('follow_redirects');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "probeZone", {
        // probe_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('probe_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitorsResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerMonitorsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerMonitorsResultOutputReference = DataCloudflareLoadBalancerMonitorsResultOutputReference;
var DataCloudflareLoadBalancerMonitorsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerMonitorsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerMonitorsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancerMonitorsResultList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancerMonitorsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancerMonitorsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancerMonitorsResultList = DataCloudflareLoadBalancerMonitorsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors cloudflare_load_balancer_monitors}
*/
var DataCloudflareLoadBalancerMonitors = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerMonitors, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors cloudflare_load_balancer_monitors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerMonitorsConfig = {}
    */
    function DataCloudflareLoadBalancerMonitors(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_load_balancer_monitors',
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
        _this._result = new DataCloudflareLoadBalancerMonitorsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerMonitors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerMonitors to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerMonitors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_monitors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerMonitors to import is found
    */
    DataCloudflareLoadBalancerMonitors.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitors", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLoadBalancerMonitors.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerMonitors.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerMonitors.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitors.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerMonitors.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerMonitors.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerMonitors.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareLoadBalancerMonitors.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareLoadBalancerMonitors.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareLoadBalancerMonitors.tfResourceType = "cloudflare_load_balancer_monitors";
    return DataCloudflareLoadBalancerMonitors;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLoadBalancerMonitors = DataCloudflareLoadBalancerMonitors;
