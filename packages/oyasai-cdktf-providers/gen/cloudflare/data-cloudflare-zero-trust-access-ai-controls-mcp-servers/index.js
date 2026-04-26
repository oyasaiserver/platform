"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers
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
exports.DataCloudflareZeroTrustAccessAiControlsMcpServers = exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList = exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference = exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList = exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToHclTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServersResultToTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServersResultToTerraform;
exports.dataCloudflareZeroTrustAccessAiControlsMcpServersResultToHclTerraform = dataCloudflareZeroTrustAccessAiControlsMcpServersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.prototype, "alias", {
        // alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList = DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList;
function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.prototype, "alias", {
        // alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList = DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList;
function dataCloudflareZeroTrustAccessAiControlsMcpServersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessAiControlsMcpServersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // prompts - computed: true, optional: false, required: false
        _this._prompts = new cdktf.StringMapList(_this, "prompts", false);
        // tools - computed: true, optional: false, required: false
        _this._tools = new cdktf.StringMapList(_this, "tools", false);
        // updated_prompts - computed: true, optional: false, required: false
        _this._updatedPrompts = new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedPromptsList(_this, "updated_prompts", false);
        // updated_tools - computed: true, optional: false, required: false
        _this._updatedTools = new DataCloudflareZeroTrustAccessAiControlsMcpServersResultUpdatedToolsList(_this, "updated_tools", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "authType", {
        // auth_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "error", {
        // error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "lastSuccessfulSync", {
        // last_successful_sync - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_successful_sync');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "lastSynced", {
        // last_synced - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_synced');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "prompts", {
        get: function () {
            return this._prompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "tools", {
        get: function () {
            return this._tools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "updatedPrompts", {
        get: function () {
            return this._updatedPrompts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference.prototype, "updatedTools", {
        get: function () {
            return this._updatedTools;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference = DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference;
var DataCloudflareZeroTrustAccessAiControlsMcpServersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServersResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessAiControlsMcpServersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessAiControlsMcpServersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServersResultList = DataCloudflareZeroTrustAccessAiControlsMcpServersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers cloudflare_zero_trust_access_ai_controls_mcp_servers}
*/
var DataCloudflareZeroTrustAccessAiControlsMcpServers = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessAiControlsMcpServers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers cloudflare_zero_trust_access_ai_controls_mcp_servers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessAiControlsMcpServersConfig = {}
    */
    function DataCloudflareZeroTrustAccessAiControlsMcpServers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_servers',
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
        _this._result = new DataCloudflareZeroTrustAccessAiControlsMcpServersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServers to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_ai_controls_mcp_servers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServers to import is found
    */
    DataCloudflareZeroTrustAccessAiControlsMcpServers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_servers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype, "searchInput", {
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
    DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareZeroTrustAccessAiControlsMcpServers.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustAccessAiControlsMcpServers.tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_servers";
    return DataCloudflareZeroTrustAccessAiControlsMcpServers;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessAiControlsMcpServers = DataCloudflareZeroTrustAccessAiControlsMcpServers;
