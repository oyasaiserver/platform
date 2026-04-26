"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_app
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
exports.DataCloudflareCallsTurnApp = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_app cloudflare_calls_turn_app}
*/
var DataCloudflareCallsTurnApp = /** @class */ (function (_super) {
    __extends(DataCloudflareCallsTurnApp, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_app cloudflare_calls_turn_app} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCallsTurnAppConfig
    */
    function DataCloudflareCallsTurnApp(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_calls_turn_app',
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
        _this._keyId = config.keyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCallsTurnApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCallsTurnApp to import
    * @param importFromId The id of the existing DataCloudflareCallsTurnApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCallsTurnApp to import is found
    */
    DataCloudflareCallsTurnApp.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_calls_turn_app", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCallsTurnApp.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCallsTurnApp.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareCallsTurnApp.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            key_id: cdktf.stringToTerraform(this._keyId),
        };
    };
    DataCloudflareCallsTurnApp.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_id: {
                value: cdktf.stringToHclTerraform(this._keyId),
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
    DataCloudflareCallsTurnApp.tfResourceType = "cloudflare_calls_turn_app";
    return DataCloudflareCallsTurnApp;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCallsTurnApp = DataCloudflareCallsTurnApp;
