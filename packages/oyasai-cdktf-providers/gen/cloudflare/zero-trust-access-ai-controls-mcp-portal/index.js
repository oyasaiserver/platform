"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal
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
exports.ZeroTrustAccessAiControlsMcpPortal = exports.ZeroTrustAccessAiControlsMcpPortalServersList = exports.ZeroTrustAccessAiControlsMcpPortalServersOutputReference = exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList = exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference = exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList = exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference = void 0;
exports.zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform = zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform;
exports.zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform = zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform;
exports.zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform = zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform;
exports.zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform = zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform;
exports.zeroTrustAccessAiControlsMcpPortalServersToTerraform = zeroTrustAccessAiControlsMcpPortalServersToTerraform;
exports.zeroTrustAccessAiControlsMcpPortalServersToHclTerraform = zeroTrustAccessAiControlsMcpPortalServersToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform(struct) {
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
function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform(struct) {
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
var ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference = ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference;
var ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.prototype.get = function (index) {
        return new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList = ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList;
function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform(struct) {
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
function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform(struct) {
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
var ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference = ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference;
var ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.prototype.get = function (index) {
        return new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList = ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList;
function zeroTrustAccessAiControlsMcpPortalServersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_disabled: cdktf.booleanToTerraform(struct.defaultDisabled),
        on_behalf: cdktf.booleanToTerraform(struct.onBehalf),
        server_id: cdktf.stringToTerraform(struct.serverId),
        updated_prompts: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform, false)(struct.updatedPrompts),
        updated_tools: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform, false)(struct.updatedTools),
    };
}
function zeroTrustAccessAiControlsMcpPortalServersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        default_disabled: {
            value: cdktf.booleanToHclTerraform(struct.defaultDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        on_behalf: {
            value: cdktf.booleanToHclTerraform(struct.onBehalf),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        server_id: {
            value: cdktf.stringToHclTerraform(struct.serverId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        updated_prompts: {
            value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform, false)(struct.updatedPrompts),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList",
        },
        updated_tools: {
            value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform, false)(struct.updatedTools),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessAiControlsMcpPortalServersOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortalServersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpPortalServersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // updated_prompts - computed: true, optional: true, required: false
        _this._updatedPrompts = new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(_this, "updated_prompts", false);
        // updated_tools - computed: true, optional: true, required: false
        _this._updatedTools = new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(_this, "updated_tools", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._defaultDisabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultDisabled = this._defaultDisabled;
            }
            if (this._onBehalf !== undefined) {
                hasAnyValues = true;
                internalValueResult.onBehalf = this._onBehalf;
            }
            if (this._serverId !== undefined) {
                hasAnyValues = true;
                internalValueResult.serverId = this._serverId;
            }
            if (((_a = this._updatedPrompts) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.updatedPrompts = (_b = this._updatedPrompts) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._updatedTools) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.updatedTools = (_d = this._updatedTools) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._defaultDisabled = undefined;
                this._onBehalf = undefined;
                this._serverId = undefined;
                this._updatedPrompts.internalValue = undefined;
                this._updatedTools.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._defaultDisabled = value.defaultDisabled;
                this._onBehalf = value.onBehalf;
                this._serverId = value.serverId;
                this._updatedPrompts.internalValue = value.updatedPrompts;
                this._updatedTools.internalValue = value.updatedTools;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "defaultDisabled", {
        get: function () {
            return this.getBooleanAttribute('default_disabled');
        },
        set: function (value) {
            this._defaultDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype.resetDefaultDisabled = function () {
        this._defaultDisabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "defaultDisabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultDisabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "onBehalf", {
        get: function () {
            return this.getBooleanAttribute('on_behalf');
        },
        set: function (value) {
            this._onBehalf = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype.resetOnBehalf = function () {
        this._onBehalf = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "onBehalfInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onBehalf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "serverId", {
        get: function () {
            return this.getStringAttribute('server_id');
        },
        set: function (value) {
            this._serverId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "serverIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "updatedPrompts", {
        get: function () {
            return this._updatedPrompts;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype.putUpdatedPrompts = function (value) {
        this._updatedPrompts.internalValue = value;
    };
    ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype.resetUpdatedPrompts = function () {
        this._updatedPrompts.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "updatedPromptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updatedPrompts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "updatedTools", {
        get: function () {
            return this._updatedTools;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype.putUpdatedTools = function (value) {
        this._updatedTools.internalValue = value;
    };
    ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype.resetUpdatedTools = function () {
        this._updatedTools.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "updatedToolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updatedTools.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessAiControlsMcpPortalServersOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessAiControlsMcpPortalServersOutputReference = ZeroTrustAccessAiControlsMcpPortalServersOutputReference;
var ZeroTrustAccessAiControlsMcpPortalServersList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortalServersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessAiControlsMcpPortalServersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessAiControlsMcpPortalServersList.prototype.get = function (index) {
        return new ZeroTrustAccessAiControlsMcpPortalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessAiControlsMcpPortalServersList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessAiControlsMcpPortalServersList = ZeroTrustAccessAiControlsMcpPortalServersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}
*/
var ZeroTrustAccessAiControlsMcpPortal = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessAiControlsMcpPortal, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessAiControlsMcpPortalConfig
    */
    function ZeroTrustAccessAiControlsMcpPortal(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_portal',
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
        // servers - computed: true, optional: true, required: false
        _this._servers = new ZeroTrustAccessAiControlsMcpPortalServersList(_this, "servers", false);
        _this._accountId = config.accountId;
        _this._allowCodeMode = config.allowCodeMode;
        _this._description = config.description;
        _this._hostname = config.hostname;
        _this._id = config.id;
        _this._name = config.name;
        _this._secureWebGateway = config.secureWebGateway;
        _this._servers.internalValue = config.servers;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import
    * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found
    */
    ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_portal", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortal.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "allowCodeMode", {
        get: function () {
            return this.getBooleanAttribute('allow_code_mode');
        },
        set: function (value) {
            this._allowCodeMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortal.prototype.resetAllowCodeMode = function () {
        this._allowCodeMode = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "allowCodeModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowCodeMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortal.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "secureWebGateway", {
        get: function () {
            return this.getBooleanAttribute('secure_web_gateway');
        },
        set: function (value) {
            this._secureWebGateway = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortal.prototype.resetSecureWebGateway = function () {
        this._secureWebGateway = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "secureWebGatewayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secureWebGateway;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "servers", {
        get: function () {
            return this._servers;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessAiControlsMcpPortal.prototype.putServers = function (value) {
        this._servers.internalValue = value;
    };
    ZeroTrustAccessAiControlsMcpPortal.prototype.resetServers = function () {
        this._servers.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessAiControlsMcpPortal.prototype, "serversInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._servers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessAiControlsMcpPortal.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_code_mode: cdktf.booleanToTerraform(this._allowCodeMode),
            description: cdktf.stringToTerraform(this._description),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            secure_web_gateway: cdktf.booleanToTerraform(this._secureWebGateway),
            servers: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersToTerraform, false)(this._servers.internalValue),
        };
    };
    ZeroTrustAccessAiControlsMcpPortal.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allow_code_mode: {
                value: cdktf.booleanToHclTerraform(this._allowCodeMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            secure_web_gateway: {
                value: cdktf.booleanToHclTerraform(this._secureWebGateway),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            servers: {
                value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersToHclTerraform, false)(this._servers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersList",
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
    ZeroTrustAccessAiControlsMcpPortal.tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portal";
    return ZeroTrustAccessAiControlsMcpPortal;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessAiControlsMcpPortal = ZeroTrustAccessAiControlsMcpPortal;
