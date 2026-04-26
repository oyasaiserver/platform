"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck
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
exports.DataCloudflareHealthcheck = exports.DataCloudflareHealthcheckTcpConfigOutputReference = exports.DataCloudflareHealthcheckHttpConfigOutputReference = void 0;
exports.dataCloudflareHealthcheckHttpConfigToTerraform = dataCloudflareHealthcheckHttpConfigToTerraform;
exports.dataCloudflareHealthcheckHttpConfigToHclTerraform = dataCloudflareHealthcheckHttpConfigToHclTerraform;
exports.dataCloudflareHealthcheckTcpConfigToTerraform = dataCloudflareHealthcheckTcpConfigToTerraform;
exports.dataCloudflareHealthcheckTcpConfigToHclTerraform = dataCloudflareHealthcheckTcpConfigToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareHealthcheckHttpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHealthcheckHttpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHealthcheckHttpConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthcheckHttpConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHealthcheckHttpConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // header - computed: true, optional: false, required: false
        _this._header = new cdktf.StringListMap(_this, "header");
        return _this;
    }
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "allowInsecure", {
        // allow_insecure - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_insecure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "expectedBody", {
        // expected_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expected_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "expectedCodes", {
        // expected_codes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('expected_codes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "followRedirects", {
        // follow_redirects - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('follow_redirects');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckHttpConfigOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHealthcheckHttpConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHealthcheckHttpConfigOutputReference = DataCloudflareHealthcheckHttpConfigOutputReference;
function dataCloudflareHealthcheckTcpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHealthcheckTcpConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHealthcheckTcpConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthcheckTcpConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHealthcheckTcpConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHealthcheckTcpConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHealthcheckTcpConfigOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheckTcpConfigOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHealthcheckTcpConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHealthcheckTcpConfigOutputReference = DataCloudflareHealthcheckTcpConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck cloudflare_healthcheck}
*/
var DataCloudflareHealthcheck = /** @class */ (function (_super) {
    __extends(DataCloudflareHealthcheck, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck cloudflare_healthcheck} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHealthcheckConfig
    */
    function DataCloudflareHealthcheck(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_healthcheck',
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
        // http_config - computed: true, optional: false, required: false
        _this._httpConfig = new DataCloudflareHealthcheckHttpConfigOutputReference(_this, "http_config");
        // tcp_config - computed: true, optional: false, required: false
        _this._tcpConfig = new DataCloudflareHealthcheckTcpConfigOutputReference(_this, "tcp_config");
        _this._healthcheckId = config.healthcheckId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareHealthcheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHealthcheck to import
    * @param importFromId The id of the existing DataCloudflareHealthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHealthcheck to import is found
    */
    DataCloudflareHealthcheck.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_healthcheck", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "address", {
        // ==========
        // ATTRIBUTES
        // ==========
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "checkRegions", {
        // check_regions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_regions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "consecutiveFails", {
        // consecutive_fails - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_fails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "consecutiveSuccesses", {
        // consecutive_successes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consecutive_successes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "healthcheckId", {
        get: function () {
            return this.getStringAttribute('healthcheck_id');
        },
        set: function (value) {
            this._healthcheckId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "healthcheckIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthcheckId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "httpConfig", {
        get: function () {
            return this._httpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "tcpConfig", {
        get: function () {
            return this._tcpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareHealthcheck.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareHealthcheck.prototype, "zoneIdInput", {
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
    DataCloudflareHealthcheck.prototype.synthesizeAttributes = function () {
        return {
            healthcheck_id: cdktf.stringToTerraform(this._healthcheckId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareHealthcheck.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            healthcheck_id: {
                value: cdktf.stringToHclTerraform(this._healthcheckId),
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
    DataCloudflareHealthcheck.tfResourceType = "cloudflare_healthcheck";
    return DataCloudflareHealthcheck;
}(cdktf.TerraformDataSource));
exports.DataCloudflareHealthcheck = DataCloudflareHealthcheck;
