"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv
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
exports.WorkersKv = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv cloudflare_workers_kv}
*/
var WorkersKv = /** @class */ (function (_super) {
    __extends(WorkersKv, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv cloudflare_workers_kv} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersKvConfig
    */
    function WorkersKv(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_kv',
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
        _this._keyName = config.keyName;
        _this._metadata = config.metadata;
        _this._namespaceId = config.namespaceId;
        _this._value = config.value;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersKv resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersKv to import
    * @param importFromId The id of the existing WorkersKv that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_kv#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersKv to import is found
    */
    WorkersKv.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_kv", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkersKv.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersKv.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkersKv.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "metadata", {
        get: function () {
            return this.getStringAttribute('metadata');
        },
        set: function (value) {
            this._metadata = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersKv.prototype.resetMetadata = function () {
        this._metadata = undefined;
    };
    Object.defineProperty(WorkersKv.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersKv.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkersKv.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            key_name: cdktf.stringToTerraform(this._keyName),
            metadata: cdktf.stringToTerraform(this._metadata),
            namespace_id: cdktf.stringToTerraform(this._namespaceId),
            value: cdktf.stringToTerraform(this._value),
        };
    };
    WorkersKv.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_name: {
                value: cdktf.stringToHclTerraform(this._keyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.stringToHclTerraform(this._metadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace_id: {
                value: cdktf.stringToHclTerraform(this._namespaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
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
    WorkersKv.tfResourceType = "cloudflare_workers_kv";
    return WorkersKv;
}(cdktf.TerraformResource));
exports.WorkersKv = WorkersKv;
