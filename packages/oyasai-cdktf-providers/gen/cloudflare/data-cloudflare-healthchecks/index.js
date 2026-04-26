"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks
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
exports.DataCloudflareHealthchecks = exports.DataCloudflareHealthchecksResultList = exports.DataCloudflareHealthchecksResultOutputReference = exports.DataCloudflareHealthchecksResultTcpConfigOutputReference = exports.DataCloudflareHealthchecksResultHttpConfigOutputReference = void 0;
exports.dataCloudflareHealthchecksResultHttpConfigToTerraform = dataCloudflareHealthchecksResultHttpConfigToTerraform;
exports.dataCloudflareHealthchecksResultHttpConfigToHclTerraform = dataCloudflareHealthchecksResultHttpConfigToHclTerraform;
exports.dataCloudflareHealthchecksResultTcpConfigToTerraform = dataCloudflareHealthchecksResultTcpConfigToTerraform;
exports.dataCloudflareHealthchecksResultTcpConfigToHclTerraform = dataCloudflareHealthchecksResultTcpConfigToHclTerraform;
exports.dataCloudflareHealthchecksResultToTerraform = dataCloudflareHealthchecksResultToTerraform;
exports.dataCloudflareHealthchecksResultToHclTerraform = dataCloudflareHealthchecksResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareHealthchecksResultHttpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHealthchecksResultHttpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHealthchecksResultHttpConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthchecksResultHttpConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHealthchecksResultHttpConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // header - computed: true, optional: false, required: false
        _this._header = new cdktf.StringListMap(_this, "header");
        return _this;
    }
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "allowInsecure", {
        // allow_insecure - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_insecure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "expectedBody", {
        // expected_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expected_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "expectedCodes", {
        // expected_codes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('expected_codes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "followRedirects", {
        // follow_redirects - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('follow_redirects');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultHttpConfigOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHealthchecksResultHttpConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHealthchecksResultHttpConfigOutputReference = DataCloudflareHealthchecksResultHttpConfigOutputReference;
function dataCloudflareHealthchecksResultTcpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHealthchecksResultTcpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHealthchecksResultTcpConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthchecksResultTcpConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHealthchecksResultTcpConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHealthchecksResultTcpConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHealthchecksResultTcpConfigOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultTcpConfigOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHealthchecksResultTcpConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHealthchecksResultTcpConfigOutputReference = DataCloudflareHealthchecksResultTcpConfigOutputReference;
function dataCloudflareHealthchecksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHealthchecksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHealthchecksResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthchecksResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareHealthchecksResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // http_config - computed: true, optional: false, required: false
        _this._httpConfig = new DataCloudflareHealthchecksResultHttpConfigOutputReference(_this, "http_config");
        // tcp_config - computed: true, optional: false, required: false
        _this._tcpConfig = new DataCloudflareHealthchecksResultTcpConfigOutputReference(_this, "tcp_config");
        return _this;
    }
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "checkRegions", {
        // check_regions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_regions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "consecutiveFails", {
        // consecutive_fails - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_fails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "consecutiveSuccesses", {
        // consecutive_successes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_successes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "httpConfig", {
        get: function () {
            return this._httpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "tcpConfig", {
        get: function () {
            return this._tcpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecksResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHealthchecksResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHealthchecksResultOutputReference = DataCloudflareHealthchecksResultOutputReference;
var DataCloudflareHealthchecksResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthchecksResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareHealthchecksResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareHealthchecksResultList.prototype.get = function (index) {
        return new DataCloudflareHealthchecksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareHealthchecksResultList;
}(cdktf.ComplexList));
exports.DataCloudflareHealthchecksResultList = DataCloudflareHealthchecksResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks cloudflare_healthchecks}
*/
var DataCloudflareHealthchecks = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthchecks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks cloudflare_healthchecks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHealthchecksConfig = {}
    */
    function DataCloudflareHealthchecks(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_healthchecks',
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
        _this._result = new DataCloudflareHealthchecksResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareHealthchecks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHealthchecks to import
    * @param importFromId The id of the existing DataCloudflareHealthchecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHealthchecks to import is found
    */
    DataCloudflareHealthchecks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthchecks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareHealthchecks.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareHealthchecks.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareHealthchecks.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecks.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthchecks.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareHealthchecks.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareHealthchecks.prototype, "zoneIdInput", {
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
    DataCloudflareHealthchecks.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareHealthchecks.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareHealthchecks.tfResourceType = "cloudflare_healthchecks";
    return DataCloudflareHealthchecks;
}(cdktf.TerraformDataSource));
exports.DataCloudflareHealthchecks = DataCloudflareHealthchecks;
