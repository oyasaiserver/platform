"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook
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
exports.RepositoryWebhook = exports.RepositoryWebhookConfigurationOutputReference = void 0;
exports.repositoryWebhookConfigurationToTerraform = repositoryWebhookConfigurationToTerraform;
exports.repositoryWebhookConfigurationToHclTerraform = repositoryWebhookConfigurationToHclTerraform;
var cdktf = require("cdktf");
function repositoryWebhookConfigurationToTerraform(struct) {
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
function repositoryWebhookConfigurationToHclTerraform(struct) {
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
var RepositoryWebhookConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryWebhookConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryWebhookConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhookConfigurationOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "insecureSsl", {
        get: function () {
            return this.getBooleanAttribute('insecure_ssl');
        },
        set: function (value) {
            this._insecureSsl = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhookConfigurationOutputReference.prototype.resetInsecureSsl = function () {
        this._insecureSsl = undefined;
    };
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "insecureSslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecureSsl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "secret", {
        get: function () {
            return this.getStringAttribute('secret');
        },
        set: function (value) {
            this._secret = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhookConfigurationOutputReference.prototype.resetSecret = function () {
        this._secret = undefined;
    };
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "secretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhookConfigurationOutputReference.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryWebhookConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryWebhookConfigurationOutputReference = RepositoryWebhookConfigurationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook github_repository_webhook}
*/
var RepositoryWebhook = /** @class */ (function (_super) {
    __extends(RepositoryWebhook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook github_repository_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryWebhookConfig
    */
    function RepositoryWebhook(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_webhook',
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
        _this._configuration = new RepositoryWebhookConfigurationOutputReference(_this, "configuration");
        _this._active = config.active;
        _this._etag = config.etag;
        _this._events = config.events;
        _this._id = config.id;
        _this._repository = config.repository;
        _this._configuration.internalValue = config.configuration;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryWebhook to import
    * @param importFromId The id of the existing RepositoryWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryWebhook to import is found
    */
    RepositoryWebhook.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_webhook", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryWebhook.prototype, "active", {
        get: function () {
            return this.getBooleanAttribute('active');
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhook.prototype.resetActive = function () {
        this._active = undefined;
    };
    Object.defineProperty(RepositoryWebhook.prototype, "activeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhook.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(RepositoryWebhook.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "events", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('events'));
        },
        set: function (value) {
            this._events = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "eventsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._events;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhook.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryWebhook.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryWebhook.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryWebhook.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    RepositoryWebhook.prototype.resetConfiguration = function () {
        this._configuration.internalValue = undefined;
    };
    Object.defineProperty(RepositoryWebhook.prototype, "configurationInput", {
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
    RepositoryWebhook.prototype.synthesizeAttributes = function () {
        return {
            active: cdktf.booleanToTerraform(this._active),
            etag: cdktf.stringToTerraform(this._etag),
            events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            configuration: repositoryWebhookConfigurationToTerraform(this._configuration.internalValue),
        };
    };
    RepositoryWebhook.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            active: {
                value: cdktf.booleanToHclTerraform(this._active),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: repositoryWebhookConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryWebhookConfigurationList",
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
    RepositoryWebhook.tfResourceType = "github_repository_webhook";
    return RepositoryWebhook;
}(cdktf.TerraformResource));
exports.RepositoryWebhook = RepositoryWebhook;
