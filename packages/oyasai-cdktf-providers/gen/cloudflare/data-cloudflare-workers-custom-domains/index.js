"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains
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
exports.DataCloudflareWorkersCustomDomains = exports.DataCloudflareWorkersCustomDomainsResultList = exports.DataCloudflareWorkersCustomDomainsResultOutputReference = void 0;
exports.dataCloudflareWorkersCustomDomainsResultToTerraform = dataCloudflareWorkersCustomDomainsResultToTerraform;
exports.dataCloudflareWorkersCustomDomainsResultToHclTerraform = dataCloudflareWorkersCustomDomainsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersCustomDomainsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersCustomDomainsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersCustomDomainsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCustomDomainsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersCustomDomainsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "certId", {
        // cert_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainsResultOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersCustomDomainsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersCustomDomainsResultOutputReference = DataCloudflareWorkersCustomDomainsResultOutputReference;
var DataCloudflareWorkersCustomDomainsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCustomDomainsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersCustomDomainsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersCustomDomainsResultList.prototype.get = function (index) {
        return new DataCloudflareWorkersCustomDomainsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersCustomDomainsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersCustomDomainsResultList = DataCloudflareWorkersCustomDomainsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains cloudflare_workers_custom_domains}
*/
var DataCloudflareWorkersCustomDomains = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCustomDomains, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains cloudflare_workers_custom_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCustomDomainsConfig = {}
    */
    function DataCloudflareWorkersCustomDomains(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_custom_domains',
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
        _this._result = new DataCloudflareWorkersCustomDomainsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._environment = config.environment;
        _this._hostname = config.hostname;
        _this._maxItems = config.maxItems;
        _this._service = config.service;
        _this._zoneId = config.zoneId;
        _this._zoneName = config.zoneName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCustomDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCustomDomains to import
    * @param importFromId The id of the existing DataCloudflareWorkersCustomDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCustomDomains to import is found
    */
    DataCloudflareWorkersCustomDomains.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_custom_domains", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "zoneName", {
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        set: function (value) {
            this._zoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomains.prototype.resetZoneName = function () {
        this._zoneName = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomains.prototype, "zoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkersCustomDomains.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            environment: cdktf.stringToTerraform(this._environment),
            hostname: cdktf.stringToTerraform(this._hostname),
            max_items: cdktf.numberToTerraform(this._maxItems),
            service: cdktf.stringToTerraform(this._service),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            zone_name: cdktf.stringToTerraform(this._zoneName),
        };
    };
    DataCloudflareWorkersCustomDomains.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
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
            service: {
                value: cdktf.stringToHclTerraform(this._service),
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
            zone_name: {
                value: cdktf.stringToHclTerraform(this._zoneName),
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
    DataCloudflareWorkersCustomDomains.tfResourceType = "cloudflare_workers_custom_domains";
    return DataCloudflareWorkersCustomDomains;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersCustomDomains = DataCloudflareWorkersCustomDomains;
