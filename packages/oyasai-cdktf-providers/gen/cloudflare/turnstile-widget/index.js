"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget
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
exports.TurnstileWidget = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}
*/
var TurnstileWidget = /** @class */ (function (_super) {
    __extends(TurnstileWidget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget cloudflare_turnstile_widget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TurnstileWidgetConfig
    */
    function TurnstileWidget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_turnstile_widget',
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
        _this._botFightMode = config.botFightMode;
        _this._clearanceLevel = config.clearanceLevel;
        _this._domains = config.domains;
        _this._ephemeralId = config.ephemeralId;
        _this._mode = config.mode;
        _this._name = config.name;
        _this._offlabel = config.offlabel;
        _this._region = config.region;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TurnstileWidget to import
    * @param importFromId The id of the existing TurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TurnstileWidget to import is found
    */
    TurnstileWidget.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widget", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TurnstileWidget.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    TurnstileWidget.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(TurnstileWidget.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "botFightMode", {
        get: function () {
            return this.getBooleanAttribute('bot_fight_mode');
        },
        set: function (value) {
            this._botFightMode = value;
        },
        enumerable: false,
        configurable: true
    });
    TurnstileWidget.prototype.resetBotFightMode = function () {
        this._botFightMode = undefined;
    };
    Object.defineProperty(TurnstileWidget.prototype, "botFightModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._botFightMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "clearanceLevel", {
        get: function () {
            return this.getStringAttribute('clearance_level');
        },
        set: function (value) {
            this._clearanceLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    TurnstileWidget.prototype.resetClearanceLevel = function () {
        this._clearanceLevel = undefined;
    };
    Object.defineProperty(TurnstileWidget.prototype, "clearanceLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clearanceLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "domains", {
        get: function () {
            return this.getListAttribute('domains');
        },
        set: function (value) {
            this._domains = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "domainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "ephemeralId", {
        get: function () {
            return this.getBooleanAttribute('ephemeral_id');
        },
        set: function (value) {
            this._ephemeralId = value;
        },
        enumerable: false,
        configurable: true
    });
    TurnstileWidget.prototype.resetEphemeralId = function () {
        this._ephemeralId = undefined;
    };
    Object.defineProperty(TurnstileWidget.prototype, "ephemeralIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "offlabel", {
        get: function () {
            return this.getBooleanAttribute('offlabel');
        },
        set: function (value) {
            this._offlabel = value;
        },
        enumerable: false,
        configurable: true
    });
    TurnstileWidget.prototype.resetOfflabel = function () {
        this._offlabel = undefined;
    };
    Object.defineProperty(TurnstileWidget.prototype, "offlabelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offlabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    TurnstileWidget.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(TurnstileWidget.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnstileWidget.prototype, "sitekey", {
        // sitekey - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sitekey');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TurnstileWidget.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bot_fight_mode: cdktf.booleanToTerraform(this._botFightMode),
            clearance_level: cdktf.stringToTerraform(this._clearanceLevel),
            domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
            ephemeral_id: cdktf.booleanToTerraform(this._ephemeralId),
            mode: cdktf.stringToTerraform(this._mode),
            name: cdktf.stringToTerraform(this._name),
            offlabel: cdktf.booleanToTerraform(this._offlabel),
            region: cdktf.stringToTerraform(this._region),
        };
    };
    TurnstileWidget.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bot_fight_mode: {
                value: cdktf.booleanToHclTerraform(this._botFightMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            clearance_level: {
                value: cdktf.stringToHclTerraform(this._clearanceLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domains: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ephemeral_id: {
                value: cdktf.booleanToHclTerraform(this._ephemeralId),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mode: {
                value: cdktf.stringToHclTerraform(this._mode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            offlabel: {
                value: cdktf.booleanToHclTerraform(this._offlabel),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            region: {
                value: cdktf.stringToHclTerraform(this._region),
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
    TurnstileWidget.tfResourceType = "cloudflare_turnstile_widget";
    return TurnstileWidget;
}(cdktf.TerraformResource));
exports.TurnstileWidget = TurnstileWidget;
