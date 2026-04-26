"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook
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
exports.OrganizationWebhook = exports.OrganizationWebhookConfigurationOutputReference = void 0;
exports.organizationWebhookConfigurationToTerraform = organizationWebhookConfigurationToTerraform;
exports.organizationWebhookConfigurationToHclTerraform = organizationWebhookConfigurationToHclTerraform;
var cdktf = require("cdktf");
function organizationWebhookConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        insecure_ssl: cdktf.booleanToTerraform(struct.insecureSsl),
        secret: cdktf.stringToTerraform(struct.secret),
        url: cdktf.stringToTerraform(struct.url),
    };
}
function organizationWebhookConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        insecure_ssl: {
            value: cdktf.booleanToHclTerraform(struct.insecureSsl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        secret: {
            value: cdktf.stringToHclTerraform(struct.secret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktf.stringToHclTerraform(struct.url),
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
}
var OrganizationWebhookConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationWebhookConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationWebhookConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            if (this._insecureSsl !== undefined) {
                hasAnyValues = true;
                internalValueResult.insecureSsl = this._insecureSsl;
            }
            if (this._secret !== undefined) {
                hasAnyValues = true;
                internalValueResult.secret = this._secret;
            }
            if (this._url !== undefined) {
                hasAnyValues = true;
                internalValueResult.url = this._url;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._contentType = undefined;
                this._insecureSsl = undefined;
                this._secret = undefined;
                this._url = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._contentType = value.contentType;
                this._insecureSsl = value.insecureSsl;
                this._secret = value.secret;
                this._url = value.url;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationWebhookConfigurationOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "insecureSsl", {
        get: function () {
            return this.getBooleanAttribute('insecure_ssl');
        },
        set: function (value) {
            this._insecureSsl = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationWebhookConfigurationOutputReference.prototype.resetInsecureSsl = function () {
        this._insecureSsl = undefined;
    };
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "insecureSslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecureSsl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "secret", {
        get: function () {
            return this.getStringAttribute('secret');
        },
        set: function (value) {
            this._secret = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationWebhookConfigurationOutputReference.prototype.resetSecret = function () {
        this._secret = undefined;
    };
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "secretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhookConfigurationOutputReference.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationWebhookConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationWebhookConfigurationOutputReference = OrganizationWebhookConfigurationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook github_organization_webhook}
*/
var OrganizationWebhook = /** @class */ (function (_super) {
    __extends(OrganizationWebhook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook github_organization_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationWebhookConfig
    */
    function OrganizationWebhook(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_webhook',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // configuration - computed: false, optional: true, required: false
        _this._configuration = new OrganizationWebhookConfigurationOutputReference(_this, "configuration");
        _this._active = config.active;
        _this._events = config.events;
        _this._id = config.id;
        _this._configuration.internalValue = config.configuration;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationWebhook to import
    * @param importFromId The id of the existing OrganizationWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationWebhook to import is found
    */
    OrganizationWebhook.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_webhook", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationWebhook.prototype, "active", {
        get: function () {
            return this.getBooleanAttribute('active');
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationWebhook.prototype.resetActive = function () {
        this._active = undefined;
    };
    Object.defineProperty(OrganizationWebhook.prototype, "activeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhook.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhook.prototype, "events", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('events'));
        },
        set: function (value) {
            this._events = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhook.prototype, "eventsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._events;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhook.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationWebhook.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationWebhook.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhook.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationWebhook.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationWebhook.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    OrganizationWebhook.prototype.resetConfiguration = function () {
        this._configuration.internalValue = undefined;
    };
    Object.defineProperty(OrganizationWebhook.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationWebhook.prototype.synthesizeAttributes = function () {
        return {
            active: cdktf.booleanToTerraform(this._active),
            events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
            id: cdktf.stringToTerraform(this._id),
            configuration: organizationWebhookConfigurationToTerraform(this._configuration.internalValue),
        };
    };
    OrganizationWebhook.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            active: {
                value: cdktf.booleanToHclTerraform(this._active),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            events: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: organizationWebhookConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "OrganizationWebhookConfigurationList",
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
    OrganizationWebhook.tfResourceType = "github_organization_webhook";
    return OrganizationWebhook;
}(cdktf.TerraformResource));
exports.OrganizationWebhook = OrganizationWebhook;
