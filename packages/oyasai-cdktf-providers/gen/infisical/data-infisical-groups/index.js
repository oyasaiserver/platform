"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups
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
exports.DataInfisicalGroups = exports.DataInfisicalGroupsGroupsList = exports.DataInfisicalGroupsGroupsOutputReference = void 0;
exports.dataInfisicalGroupsGroupsToTerraform = dataInfisicalGroupsGroupsToTerraform;
exports.dataInfisicalGroupsGroupsToHclTerraform = dataInfisicalGroupsGroupsToHclTerraform;
var cdktf = require("cdktf");
function dataInfisicalGroupsGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalGroupsGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalGroupsGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalGroupsGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalGroupsGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalGroupsGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataInfisicalGroupsGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalGroupsGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalGroupsGroupsOutputReference.prototype, "orgId", {
        // org_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('org_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalGroupsGroupsOutputReference.prototype, "role", {
        // role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalGroupsGroupsOutputReference.prototype, "roleId", {
        // role_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalGroupsGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalGroupsGroupsOutputReference = DataInfisicalGroupsGroupsOutputReference;
var DataInfisicalGroupsGroupsList = /** @class */ (function (_super) {
    __extends(DataInfisicalGroupsGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalGroupsGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataInfisicalGroupsGroupsList.prototype.get = function (index) {
        return new DataInfisicalGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataInfisicalGroupsGroupsList;
}(cdktf.ComplexList));
exports.DataInfisicalGroupsGroupsList = DataInfisicalGroupsGroupsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups infisical_groups}
*/
var DataInfisicalGroups = /** @class */ (function (_super) {
    __extends(DataInfisicalGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups infisical_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalGroupsConfig = {}
    */
    function DataInfisicalGroups(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_groups',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
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
        // groups - computed: true, optional: false, required: false
        _this._groups = new DataInfisicalGroupsGroupsList(_this, "groups", false);
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalGroups to import
    * @param importFromId The id of the existing DataInfisicalGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalGroups to import is found
    */
    DataInfisicalGroups.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_groups", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalGroups.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalGroups.prototype.synthesizeAttributes = function () {
        return {};
    };
    DataInfisicalGroups.prototype.synthesizeHclAttributes = function () {
        var attrs = {};
        return attrs;
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataInfisicalGroups.tfResourceType = "infisical_groups";
    return DataInfisicalGroups;
}(cdktf.TerraformDataSource));
exports.DataInfisicalGroups = DataInfisicalGroups;
