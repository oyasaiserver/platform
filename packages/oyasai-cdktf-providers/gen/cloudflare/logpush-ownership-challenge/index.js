"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge
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
exports.LogpushOwnershipChallenge = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge cloudflare_logpush_ownership_challenge}
*/
var LogpushOwnershipChallenge = /** @class */ (function (_super) {
    __extends(LogpushOwnershipChallenge, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge cloudflare_logpush_ownership_challenge} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogpushOwnershipChallengeConfig
    */
    function LogpushOwnershipChallenge(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_logpush_ownership_challenge',
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
        _this._destinationConf = config.destinationConf;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LogpushOwnershipChallenge resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LogpushOwnershipChallenge to import
    * @param importFromId The id of the existing LogpushOwnershipChallenge that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LogpushOwnershipChallenge to import is found
    */
    LogpushOwnershipChallenge.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_ownership_challenge", importId: importFromId, provider: provider });
    };
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushOwnershipChallenge.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "destinationConf", {
        get: function () {
            return this.getStringAttribute('destination_conf');
        },
        set: function (value) {
            this._destinationConf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "destinationConfInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "filename", {
        // filename - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('filename');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "valid", {
        // valid - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('valid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushOwnershipChallenge.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(LogpushOwnershipChallenge.prototype, "zoneIdInput", {
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
    LogpushOwnershipChallenge.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            destination_conf: cdktf.stringToTerraform(this._destinationConf),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    LogpushOwnershipChallenge.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_conf: {
                value: cdktf.stringToHclTerraform(this._destinationConf),
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
    LogpushOwnershipChallenge.tfResourceType = "cloudflare_logpush_ownership_challenge";
    return LogpushOwnershipChallenge;
}(cdktf.TerraformResource));
exports.LogpushOwnershipChallenge = LogpushOwnershipChallenge;
