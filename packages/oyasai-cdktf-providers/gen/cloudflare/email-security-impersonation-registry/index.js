"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry
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
exports.EmailSecurityImpersonationRegistry = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
var EmailSecurityImpersonationRegistry = /** @class */ (function (_super) {
    __extends(EmailSecurityImpersonationRegistry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityImpersonationRegistryConfig
    */
    function EmailSecurityImpersonationRegistry(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_impersonation_registry',
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
        _this._email = config.email;
        _this._isEmailRegex = config.isEmailRegex;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import
    * @param importFromId The id of the existing EmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found
    */
    EmailSecurityImpersonationRegistry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_impersonation_registry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityImpersonationRegistry.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "comments", {
        // comments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "directoryId", {
        // directory_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('directory_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "directoryNodeId", {
        // directory_node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('directory_node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "externalDirectoryNodeId", {
        // external_directory_node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_directory_node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "isEmailRegex", {
        get: function () {
            return this.getBooleanAttribute('is_email_regex');
        },
        set: function (value) {
            this._isEmailRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "isEmailRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isEmailRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityImpersonationRegistry.prototype, "provenance", {
        // provenance - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provenance');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmailSecurityImpersonationRegistry.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            email: cdktf.stringToTerraform(this._email),
            is_email_regex: cdktf.booleanToTerraform(this._isEmailRegex),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    EmailSecurityImpersonationRegistry.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email: {
                value: cdktf.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_email_regex: {
                value: cdktf.booleanToHclTerraform(this._isEmailRegex),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    EmailSecurityImpersonationRegistry.tfResourceType = "cloudflare_email_security_impersonation_registry";
    return EmailSecurityImpersonationRegistry;
}(cdktf.TerraformResource));
exports.EmailSecurityImpersonationRegistry = EmailSecurityImpersonationRegistry;
