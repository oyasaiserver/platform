"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test
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
exports.DataCloudflareObservatoryScheduledTest = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
var DataCloudflareObservatoryScheduledTest = /** @class */ (function (_super) {
    __extends(DataCloudflareObservatoryScheduledTest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareObservatoryScheduledTestConfig
    */
    function DataCloudflareObservatoryScheduledTest(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_observatory_scheduled_test',
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
        _this._region = config.region;
        _this._url = config.url;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareObservatoryScheduledTest to import
    * @param importFromId The id of the existing DataCloudflareObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareObservatoryScheduledTest to import is found
    */
    DataCloudflareObservatoryScheduledTest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_observatory_scheduled_test", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "frequency", {
        // ==========
        // ATTRIBUTES
        // ==========
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareObservatoryScheduledTest.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareObservatoryScheduledTest.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareObservatoryScheduledTest.prototype, "zoneIdInput", {
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
    DataCloudflareObservatoryScheduledTest.prototype.synthesizeAttributes = function () {
        return {
            region: cdktf.stringToTerraform(this._region),
            url: cdktf.stringToTerraform(this._url),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareObservatoryScheduledTest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            region: {
                value: cdktf.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            url: {
                value: cdktf.stringToHclTerraform(this._url),
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
    DataCloudflareObservatoryScheduledTest.tfResourceType = "cloudflare_observatory_scheduled_test";
    return DataCloudflareObservatoryScheduledTest;
}(cdktf.TerraformDataSource));
exports.DataCloudflareObservatoryScheduledTest = DataCloudflareObservatoryScheduledTest;
