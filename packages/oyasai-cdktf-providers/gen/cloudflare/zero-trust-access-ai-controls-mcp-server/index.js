"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server
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
exports.ZeroTrustAccessAiControlsMcpServer = exports.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList = exports.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference = exports.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList = exports.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference = void 0;
exports.zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform = zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform;
exports.zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform = zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform;
exports.zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform = zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform;
exports.zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform = zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alias: cdktf.stringToTerraform(struct.alias),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        alias: {
            value: cdktf.stringToHclTerraform(struct.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._alias !== undefined) {
                hasAnyValues = true;
                internalValueResult.alias = this._alias;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._alias = undefined;
                this._description = undefined;
                this._enabled = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._alias = value.alias;
                this._description = value.description;
                this._enabled = value.enabled;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference = ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference;
var ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.prototype.get = function (index) {
        return new ZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList = ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList;
function zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alias: cdktf.stringToTerraform(struct.alias),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        alias: {
            value: cdktf.stringToHclTerraform(struct.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._alias !== undefined) {
                hasAnyValues = true;
                internalValueResult.alias = this._alias;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._alias = undefined;
                this._description = undefined;
                this._enabled = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._alias = value.alias;
                this._description = value.description;
                this._enabled = value.enabled;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference = ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference;
var ZeroTrustAccessAiControlsMcpServerUpdatedToolsList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpServerUpdatedToolsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpServerUpdatedToolsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessAiControlsMcpServerUpdatedToolsList.prototype.get = function (index) {
        return new ZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessAiControlsMcpServerUpdatedToolsList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessAiControlsMcpServerUpdatedToolsList = ZeroTrustAccessAiControlsMcpServerUpdatedToolsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}
*/
var ZeroTrustAccessAiControlsMcpServer = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpServer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessAiControlsMcpServerConfig
    */
    function ZeroTrustAccessAiControlsMcpServer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_server',
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
        // prompts - computed: true, optional: false, required: false
        _this._prompts = new cdktf.StringMapList(_this, "prompts", false);
        // tools - computed: true, optional: false, required: false
        _this._tools = new cdktf.StringMapList(_this, "tools", false);
        // updated_prompts - computed: false, optional: true, required: false
        _this._updatedPrompts = new ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(_this, "updated_prompts", false);
        // updated_tools - computed: false, optional: true, required: false
        _this._updatedTools = new ZeroTrustAccessAiControlsMcpServerUpdatedToolsList(_this, "updated_tools", false);
        _this._accountId = config.accountId;
        _this._authCredentials = config.authCredentials;
        _this._authType = config.authType;
        _this._description = config.description;
        _this._hostname = config.hostname;
        _this._id = config.id;
        _this._name = config.name;
        _this._updatedPrompts.internalValue = config.updatedPrompts;
        _this._updatedTools.internalValue = config.updatedTools;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpServer to import
    * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpServer to import is found
    */
    ZeroTrustAccessAiControlsMcpServer.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_server", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServer.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "authCredentials", {
        get: function () {
            return this.getStringAttribute('auth_credentials');
        },
        set: function (value) {
            this._authCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServer.prototype.resetAuthCredentials = function () {
        this._authCredentials = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "authCredentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authCredentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "authType", {
        get: function () {
            return this.getStringAttribute('auth_type');
        },
        set: function (value) {
            this._authType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "authTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServer.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "error", {
        // error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "lastSuccessfulSync", {
        // last_successful_sync - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_successful_sync');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "lastSynced", {
        // last_synced - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_synced');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "prompts", {
        get: function () {
            return this._prompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "tools", {
        get: function () {
            return this._tools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "updatedPrompts", {
        get: function () {
            return this._updatedPrompts;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServer.prototype.putUpdatedPrompts = function (value) {
        this._updatedPrompts.internalValue = value;
    };
    ZeroTrustAccessAiControlsMcpServer.prototype.resetUpdatedPrompts = function () {
        this._updatedPrompts.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "updatedPromptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updatedPrompts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "updatedTools", {
        get: function () {
            return this._updatedTools;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpServer.prototype.putUpdatedTools = function (value) {
        this._updatedTools.internalValue = value;
    };
    ZeroTrustAccessAiControlsMcpServer.prototype.resetUpdatedTools = function () {
        this._updatedTools.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpServer.prototype, "updatedToolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updatedTools.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessAiControlsMcpServer.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            auth_credentials: cdktf.stringToTerraform(this._authCredentials),
            auth_type: cdktf.stringToTerraform(this._authType),
            description: cdktf.stringToTerraform(this._description),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            updated_prompts: cdktf.listMapper(zeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform, false)(this._updatedPrompts.internalValue),
            updated_tools: cdktf.listMapper(zeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform, false)(this._updatedTools.internalValue),
        };
    };
    ZeroTrustAccessAiControlsMcpServer.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_credentials: {
                value: cdktf.stringToHclTerraform(this._authCredentials),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_type: {
                value: cdktf.stringToHclTerraform(this._authType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            updated_prompts: {
                value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform, false)(this._updatedPrompts.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessAiControlsMcpServerUpdatedPromptsList",
            },
            updated_tools: {
                value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform, false)(this._updatedTools.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessAiControlsMcpServerUpdatedToolsList",
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
    ZeroTrustAccessAiControlsMcpServer.tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_server";
    return ZeroTrustAccessAiControlsMcpServer;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessAiControlsMcpServer = ZeroTrustAccessAiControlsMcpServer;
