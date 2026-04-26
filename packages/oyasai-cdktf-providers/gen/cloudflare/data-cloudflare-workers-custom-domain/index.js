"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain
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
exports.DataCloudflareWorkersCustomDomain = exports.DataCloudflareWorkersCustomDomainFilterOutputReference = void 0;
exports.dataCloudflareWorkersCustomDomainFilterToTerraform = dataCloudflareWorkersCustomDomainFilterToTerraform;
exports.dataCloudflareWorkersCustomDomainFilterToHclTerraform = dataCloudflareWorkersCustomDomainFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersCustomDomainFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        hostname: cdktf.stringToTerraform(struct.hostname),
        service: cdktf.stringToTerraform(struct.service),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
        zone_name: cdktf.stringToTerraform(struct.zoneName),
    };
}
function dataCloudflareWorkersCustomDomainFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_name: {
            value: cdktf.stringToHclTerraform(struct.zoneName),
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
var DataCloudflareWorkersCustomDomainFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCustomDomainFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersCustomDomainFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            if (this._zoneId !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneId = this._zoneId;
            }
            if (this._zoneName !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneName = this._zoneName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._environment = undefined;
                this._hostname = undefined;
                this._service = undefined;
                this._zoneId = undefined;
                this._zoneName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._environment = value.environment;
                this._hostname = value.hostname;
                this._service = value.service;
                this._zoneId = value.zoneId;
                this._zoneName = value.zoneName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomainFilterOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomainFilterOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomainFilterOutputReference.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomainFilterOutputReference.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "zoneName", {
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        set: function (value) {
            this._zoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomainFilterOutputReference.prototype.resetZoneName = function () {
        this._zoneName = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomainFilterOutputReference.prototype, "zoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneName;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersCustomDomainFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersCustomDomainFilterOutputReference = DataCloudflareWorkersCustomDomainFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain}
*/
var DataCloudflareWorkersCustomDomain = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCustomDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCustomDomainConfig = {}
    */
    function DataCloudflareWorkersCustomDomain(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_custom_domain',
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
        _this._filter = new DataCloudflareWorkersCustomDomainFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._domainId = config.domainId;
        _this._filter.internalValue = config.filter;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCustomDomain to import
    * @param importFromId The id of the existing DataCloudflareWorkersCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCustomDomain to import is found
    */
    DataCloudflareWorkersCustomDomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_custom_domain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "certId", {
        // cert_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "domainId", {
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        set: function (value) {
            this._domainId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomain.prototype.resetDomainId = function () {
        this._domainId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "domainIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCustomDomain.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareWorkersCustomDomain.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCustomDomain.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkersCustomDomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            domain_id: cdktf.stringToTerraform(this._domainId),
            filter: dataCloudflareWorkersCustomDomainFilterToTerraform(this._filter.internalValue),
        };
    };
    DataCloudflareWorkersCustomDomain.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_id: {
                value: cdktf.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareWorkersCustomDomainFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareWorkersCustomDomainFilter",
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
    DataCloudflareWorkersCustomDomain.tfResourceType = "cloudflare_workers_custom_domain";
    return DataCloudflareWorkersCustomDomain;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersCustomDomain = DataCloudflareWorkersCustomDomain;
