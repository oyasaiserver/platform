"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server
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
exports.DataCloudflareZeroTrustAccessAiControlsMcpServer = exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToTerraform(struct) {
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
function dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToHclTerraform(struct) {
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
var DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference;
function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "alias", {
        // alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList = DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList;
function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "alias", {
        // alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList = DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}
*/
var DataCloudflareZeroTrustAccessAiControlsMcpServer = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpServerConfig = {}
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServer(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference(_this, "filter");
        // prompts - computed: true, optional: false, required: false
        _this._prompts = new cdktf.StringMapList(_this, "prompts", false);
        // tools - computed: true, optional: false, required: false
        _this._tools = new cdktf.StringMapList(_this, "tools", false);
        // updated_prompts - computed: true, optional: false, required: false
        _this._updatedPrompts = new DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(_this, "updated_prompts", false);
        // updated_tools - computed: true, optional: false, required: false
        _this._updatedTools = new DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList(_this, "updated_tools", false);
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServer to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServer to import is found
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_server", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "authType", {
        // auth_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "error", {
        // error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "lastSuccessfulSync", {
        // last_successful_sync - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_successful_sync');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "lastSynced", {
        // last_synced - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_synced');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "prompts", {
        get: function () {
            return this._prompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "tools", {
        get: function () {
            return this._tools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "updatedPrompts", {
        get: function () {
            return this._updatedPrompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype, "updatedTools", {
        get: function () {
            return this._updatedTools;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToTerraform(this._filter.internalValue),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataCloudflareZeroTrustAccessAiControlsMcpServer.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustAccessAiControlsMcpServerFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustAccessAiControlsMcpServerFilter",
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
    DataCloudflareZeroTrustAccessAiControlsMcpServer.tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_server";
    return DataCloudflareZeroTrustAccessAiControlsMcpServer;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServer = DataCloudflareZeroTrustAccessAiControlsMcpServer;
