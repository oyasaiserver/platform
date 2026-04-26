"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_field
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
exports.DataCloudflareLogpushDatasetField = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_field cloudflare_logpush_dataset_field}
*/
var DataCloudflareLogpushDatasetField = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushDatasetField, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_field cloudflare_logpush_dataset_field} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushDatasetFieldConfig = {}
    */
    function DataCloudflareLogpushDatasetField(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_logpush_dataset_field',
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
        _this._accountId = config.accountId;
        _this._datasetId = config.datasetId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushDatasetField resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushDatasetField to import
    * @param importFromId The id of the existing DataCloudflareLogpushDatasetField that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_field#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushDatasetField to import is found
    */
    DataCloudflareLogpushDatasetField.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_dataset_field", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLogpushDatasetField.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushDatasetField.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushDatasetField.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetField.prototype, "datasetId", {
        get: function () {
            return this.getStringAttribute('dataset_id');
        },
        set: function (value) {
            this._datasetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushDatasetField.prototype.resetDatasetId = function () {
        this._datasetId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushDatasetField.prototype, "datasetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datasetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetField.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushDatasetField.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushDatasetField.prototype, "zoneIdInput", {
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
    DataCloudflareLogpushDatasetField.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dataset_id: cdktf.stringToTerraform(this._datasetId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareLogpushDatasetField.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dataset_id: {
                value: cdktf.stringToHclTerraform(this._datasetId),
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
    DataCloudflareLogpushDatasetField.tfResourceType = "cloudflare_logpush_dataset_field";
    return DataCloudflareLogpushDatasetField;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLogpushDatasetField = DataCloudflareLogpushDatasetField;
