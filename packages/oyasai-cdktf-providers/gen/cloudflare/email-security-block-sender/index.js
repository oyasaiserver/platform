"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender
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
exports.EmailSecurityBlockSender = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender}
*/
var EmailSecurityBlockSender = /** @class */ (function (_super) {
    __extends(EmailSecurityBlockSender, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityBlockSenderConfig
    */
    function EmailSecurityBlockSender(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_block_sender',
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
        _this._comments = config.comments;
        _this._isRegex = config.isRegex;
        _this._pattern = config.pattern;
        _this._patternType = config.patternType;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityBlockSender to import
    * @param importFromId The id of the existing EmailSecurityBlockSender that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityBlockSender to import is found
    */
    EmailSecurityBlockSender.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_block_sender", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmailSecurityBlockSender.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityBlockSender.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(EmailSecurityBlockSender.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "comments", {
        get: function () {
            return this.getStringAttribute('comments');
        },
        set: function (value) {
            this._comments = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityBlockSender.prototype.resetComments = function () {
        this._comments = undefined;
    };
    Object.defineProperty(EmailSecurityBlockSender.prototype, "commentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "isRegex", {
        get: function () {
            return this.getBooleanAttribute('is_regex');
        },
        set: function (value) {
            this._isRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "isRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "patternType", {
        get: function () {
            return this.getStringAttribute('pattern_type');
        },
        set: function (value) {
            this._patternType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityBlockSender.prototype, "patternTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternType;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmailSecurityBlockSender.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comments: cdktf.stringToTerraform(this._comments),
            is_regex: cdktf.booleanToTerraform(this._isRegex),
            pattern: cdktf.stringToTerraform(this._pattern),
            pattern_type: cdktf.stringToTerraform(this._patternType),
        };
    };
    EmailSecurityBlockSender.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            comments: {
                value: cdktf.stringToHclTerraform(this._comments),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_regex: {
                value: cdktf.booleanToHclTerraform(this._isRegex),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pattern: {
                value: cdktf.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pattern_type: {
                value: cdktf.stringToHclTerraform(this._patternType),
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
    EmailSecurityBlockSender.tfResourceType = "cloudflare_email_security_block_sender";
    return EmailSecurityBlockSender;
}(cdktf.TerraformResource));
exports.EmailSecurityBlockSender = EmailSecurityBlockSender;
