"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_security_managers
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
exports.DataGithubOrganizationSecurityManagers = exports.DataGithubOrganizationSecurityManagersTeamsList = exports.DataGithubOrganizationSecurityManagersTeamsOutputReference = void 0;
exports.dataGithubOrganizationSecurityManagersTeamsToTerraform = dataGithubOrganizationSecurityManagersTeamsToTerraform;
exports.dataGithubOrganizationSecurityManagersTeamsToHclTerraform = dataGithubOrganizationSecurityManagersTeamsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationSecurityManagersTeamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationSecurityManagersTeamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationSecurityManagersTeamsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationSecurityManagersTeamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationSecurityManagersTeamsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationSecurityManagersTeamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationSecurityManagersTeamsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationSecurityManagersTeamsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationSecurityManagersTeamsOutputReference.prototype, "permission", {
        // permission - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('permission');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationSecurityManagersTeamsOutputReference.prototype, "slug", {
        // slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('slug');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationSecurityManagersTeamsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationSecurityManagersTeamsOutputReference = DataGithubOrganizationSecurityManagersTeamsOutputReference;
var DataGithubOrganizationSecurityManagersTeamsList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationSecurityManagersTeamsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationSecurityManagersTeamsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationSecurityManagersTeamsList.prototype.get = function (index) {
        return new DataGithubOrganizationSecurityManagersTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationSecurityManagersTeamsList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationSecurityManagersTeamsList = DataGithubOrganizationSecurityManagersTeamsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_security_managers github_organization_security_managers}
*/
var DataGithubOrganizationSecurityManagers = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationSecurityManagers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_security_managers github_organization_security_managers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationSecurityManagersConfig = {}
    */
    function DataGithubOrganizationSecurityManagers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_security_managers',
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
        // teams - computed: true, optional: false, required: false
        _this._teams = new DataGithubOrganizationSecurityManagersTeamsList(_this, "teams", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationSecurityManagers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationSecurityManagers to import
    * @param importFromId The id of the existing DataGithubOrganizationSecurityManagers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_security_managers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationSecurityManagers to import is found
    */
    DataGithubOrganizationSecurityManagers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_security_managers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationSecurityManagers.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationSecurityManagers.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationSecurityManagers.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationSecurityManagers.prototype, "teams", {
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationSecurityManagers.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubOrganizationSecurityManagers.prototype.synthesizeHclAttributes = function () {
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
    DataGithubOrganizationSecurityManagers.tfResourceType = "github_organization_security_managers";
    return DataGithubOrganizationSecurityManagers;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationSecurityManagers = DataGithubOrganizationSecurityManagers;
