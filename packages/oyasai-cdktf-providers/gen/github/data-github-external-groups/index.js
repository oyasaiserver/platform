"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/external_groups
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
exports.DataGithubExternalGroups = exports.DataGithubExternalGroupsExternalGroupsList = exports.DataGithubExternalGroupsExternalGroupsOutputReference = void 0;
exports.dataGithubExternalGroupsExternalGroupsToTerraform = dataGithubExternalGroupsExternalGroupsToTerraform;
exports.dataGithubExternalGroupsExternalGroupsToHclTerraform = dataGithubExternalGroupsExternalGroupsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubExternalGroupsExternalGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubExternalGroupsExternalGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubExternalGroupsExternalGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubExternalGroupsExternalGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubExternalGroupsExternalGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubExternalGroupsExternalGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubExternalGroupsExternalGroupsOutputReference.prototype, "groupId", {
        // group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubExternalGroupsExternalGroupsOutputReference.prototype, "groupName", {
        // group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubExternalGroupsExternalGroupsOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubExternalGroupsExternalGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubExternalGroupsExternalGroupsOutputReference = DataGithubExternalGroupsExternalGroupsOutputReference;
var DataGithubExternalGroupsExternalGroupsList = /** @class */ (function (_super) {
    __extends(DataGithubExternalGroupsExternalGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubExternalGroupsExternalGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubExternalGroupsExternalGroupsList.prototype.get = function (index) {
        return new DataGithubExternalGroupsExternalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubExternalGroupsExternalGroupsList;
}(cdktf.ComplexList));
exports.DataGithubExternalGroupsExternalGroupsList = DataGithubExternalGroupsExternalGroupsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/external_groups github_external_groups}
*/
var DataGithubExternalGroups = /** @class */ (function (_super) {
    __extends(DataGithubExternalGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/external_groups github_external_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubExternalGroupsConfig = {}
    */
    function DataGithubExternalGroups(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_external_groups',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // external_groups - computed: true, optional: false, required: false
        _this._externalGroups = new DataGithubExternalGroupsExternalGroupsList(_this, "external_groups", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubExternalGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubExternalGroups to import
    * @param importFromId The id of the existing DataGithubExternalGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/external_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubExternalGroups to import is found
    */
    DataGithubExternalGroups.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_external_groups", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubExternalGroups.prototype, "externalGroups", {
        get: function () {
            return this._externalGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubExternalGroups.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubExternalGroups.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubExternalGroups.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubExternalGroups.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubExternalGroups.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataGithubExternalGroups.tfResourceType = "github_external_groups";
    return DataGithubExternalGroups;
}(cdktf.TerraformDataSource));
exports.DataGithubExternalGroups = DataGithubExternalGroups;
