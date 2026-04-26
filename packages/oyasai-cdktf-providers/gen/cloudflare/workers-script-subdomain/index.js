"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain
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
exports.WorkersScriptSubdomain = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain}
*/
var WorkersScriptSubdomain = /** @class */ (function (_super) {
    __extends(WorkersScriptSubdomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersScriptSubdomainConfig
    */
    function WorkersScriptSubdomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_script_subdomain',
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
        _this._enabled = config.enabled;
        _this._previewsEnabled = config.previewsEnabled;
        _this._scriptName = config.scriptName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersScriptSubdomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersScriptSubdomain to import
    * @param importFromId The id of the existing WorkersScriptSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersScriptSubdomain to import is found
    */
    WorkersScriptSubdomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script_subdomain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkersScriptSubdomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptSubdomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkersScriptSubdomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptSubdomain.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptSubdomain.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptSubdomain.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptSubdomain.prototype, "previewsEnabled", {
        get: function () {
            return this.getBooleanAttribute('previews_enabled');
        },
        set: function (value) {
            this._previewsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptSubdomain.prototype.resetPreviewsEnabled = function () {
        this._previewsEnabled = undefined;
    };
    Object.defineProperty(WorkersScriptSubdomain.prototype, "previewsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._previewsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptSubdomain.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptSubdomain.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkersScriptSubdomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            enabled: cdktf.booleanToTerraform(this._enabled),
            previews_enabled: cdktf.booleanToTerraform(this._previewsEnabled),
            script_name: cdktf.stringToTerraform(this._scriptName),
        };
    };
    WorkersScriptSubdomain.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            previews_enabled: {
                value: cdktf.booleanToHclTerraform(this._previewsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
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
    WorkersScriptSubdomain.tfResourceType = "cloudflare_workers_script_subdomain";
    return WorkersScriptSubdomain;
}(cdktf.TerraformResource));
exports.WorkersScriptSubdomain = WorkersScriptSubdomain;
