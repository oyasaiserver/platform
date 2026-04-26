"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal
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
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortal = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
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
var DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._search = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference;
function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "portalAlias", {
        // portal_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('portal_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.prototype, "serverAlias", {
        // server_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('server_alias');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList = DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList;
function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "portalAlias", {
        // portal_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('portal_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.prototype, "serverAlias", {
        // server_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('server_alias');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList = DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList;
function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalServersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // prompts - computed: true, optional: false, required: false
        _this._prompts = new cdktf.StringMapList(_this, "prompts", false);
        // tools - computed: true, optional: false, required: false
        _this._tools = new cdktf.StringMapList(_this, "tools", false);
        // updated_prompts - computed: true, optional: false, required: false
        _this._updatedPrompts = new DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(_this, "updated_prompts", false);
        // updated_tools - computed: true, optional: false, required: false
        _this._updatedTools = new DataCloudflareZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(_this, "updated_tools", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "authType", {
        // auth_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "defaultDisabled", {
        // default_disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default_disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "error", {
        // error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "lastSuccessfulSync", {
        // last_successful_sync - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_successful_sync');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "lastSynced", {
        // last_synced - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_synced');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "onBehalf", {
        // on_behalf - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_behalf');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "prompts", {
        get: function () {
            return this._prompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "tools", {
        get: function () {
            return this._tools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "updatedPrompts", {
        get: function () {
            return this._updatedPrompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference.prototype, "updatedTools", {
        get: function () {
            return this._updatedTools;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList = DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}
*/
var DataCloudflareZeroTrustAccessAiControlsMcpPortal = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortal, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpPortalConfig = {}
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortal(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustAccessAiControlsMcpPortalFilterOutputReference(_this, "filter");
        // servers - computed: true, optional: false, required: false
        _this._servers = new DataCloudflareZeroTrustAccessAiControlsMcpPortalServersList(_this, "servers", false);
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpPortal to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpPortal to import is found
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_portal", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "allowCodeMode", {
        // allow_code_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_code_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "secureWebGateway", {
        // secure_web_gateway - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secure_web_gateway');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype, "servers", {
        get: function () {
            return this._servers;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToTerraform(this._filter.internalValue),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustAccessAiControlsMcpPortalFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustAccessAiControlsMcpPortalFilter",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataCloudflareZeroTrustAccessAiControlsMcpPortal.tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portal";
    return DataCloudflareZeroTrustAccessAiControlsMcpPortal;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortal = DataCloudflareZeroTrustAccessAiControlsMcpPortal;
