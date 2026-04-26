"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals
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
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortals = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.prototype, "portalAlias", {
        // portal_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('portal_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.prototype, "serverAlias", {
        // server_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('server_alias');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList;
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.prototype, "portalAlias", {
        // portal_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('portal_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.prototype, "serverAlias", {
        // server_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('server_alias');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList;
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // prompts - computed: true, optional: false, required: false
        _this._prompts = new cdktf.StringMapList(_this, "prompts", false);
        // tools - computed: true, optional: false, required: false
        _this._tools = new cdktf.StringMapList(_this, "tools", false);
        // updated_prompts - computed: true, optional: false, required: false
        _this._updatedPrompts = new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList(_this, "updated_prompts", false);
        // updated_tools - computed: true, optional: false, required: false
        _this._updatedTools = new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList(_this, "updated_tools", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "authType", {
        // auth_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "defaultDisabled", {
        // default_disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default_disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "error", {
        // error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "lastSuccessfulSync", {
        // last_successful_sync - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_successful_sync');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "lastSynced", {
        // last_synced - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_synced');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "onBehalf", {
        // on_behalf - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_behalf');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "prompts", {
        get: function () {
            return this._prompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "tools", {
        get: function () {
            return this._tools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "updatedPrompts", {
        get: function () {
            return this._updatedPrompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.prototype, "updatedTools", {
        get: function () {
            return this._updatedTools;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList;
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpPortalsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // servers - computed: true, optional: false, required: false
        _this._servers = new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList(_this, "servers", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "allowCodeMode", {
        // allow_code_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_code_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "secureWebGateway", {
        // secure_web_gateway - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secure_web_gateway');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.prototype, "servers", {
        get: function () {
            return this._servers;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList = DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals cloudflare_zero_trust_access_ai_controls_mcp_portals}
*/
var DataCloudflareZeroTrustAccessAiControlsMcpPortals = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpPortals, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals cloudflare_zero_trust_access_ai_controls_mcp_portals} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig = {}
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpPortals(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_portals',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortals resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpPortals to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpPortals that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpPortals to import is found
    */
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_portals", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
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
    DataCloudflareZeroTrustAccessAiControlsMcpPortals.tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portals";
    return DataCloudflareZeroTrustAccessAiControlsMcpPortals;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessAiControlsMcpPortals = DataCloudflareZeroTrustAccessAiControlsMcpPortals;
