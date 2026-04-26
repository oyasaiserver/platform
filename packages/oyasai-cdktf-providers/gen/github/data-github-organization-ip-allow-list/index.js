"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_ip_allow_list
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
exports.DataGithubOrganizationIpAllowList = exports.DataGithubOrganizationIpAllowListIpAllowListStructList = exports.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference = void 0;
exports.dataGithubOrganizationIpAllowListIpAllowListStructToTerraform = dataGithubOrganizationIpAllowListIpAllowListStructToTerraform;
exports.dataGithubOrganizationIpAllowListIpAllowListStructToHclTerraform = dataGithubOrganizationIpAllowListIpAllowListStructToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationIpAllowListIpAllowListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationIpAllowListIpAllowListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationIpAllowListIpAllowListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationIpAllowListIpAllowListStructOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "allowListValue", {
        // allow_list_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('allow_list_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "isActive", {
        // is_active - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationIpAllowListIpAllowListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference = DataGithubOrganizationIpAllowListIpAllowListStructOutputReference;
var DataGithubOrganizationIpAllowListIpAllowListStructList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationIpAllowListIpAllowListStructList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationIpAllowListIpAllowListStructList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationIpAllowListIpAllowListStructList.prototype.get = function (index) {
        return new DataGithubOrganizationIpAllowListIpAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationIpAllowListIpAllowListStructList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationIpAllowListIpAllowListStructList = DataGithubOrganizationIpAllowListIpAllowListStructList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_ip_allow_list github_organization_ip_allow_list}
*/
var DataGithubOrganizationIpAllowList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationIpAllowList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_ip_allow_list github_organization_ip_allow_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationIpAllowListConfig = {}
    */
    function DataGithubOrganizationIpAllowList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_ip_allow_list',
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
        // ip_allow_list - computed: true, optional: false, required: false
        _this._ipAllowList = new DataGithubOrganizationIpAllowListIpAllowListStructList(_this, "ip_allow_list", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationIpAllowList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationIpAllowList to import
    * @param importFromId The id of the existing DataGithubOrganizationIpAllowList that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_ip_allow_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationIpAllowList to import is found
    */
    DataGithubOrganizationIpAllowList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_ip_allow_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationIpAllowList.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationIpAllowList.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationIpAllowList.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationIpAllowList.prototype, "ipAllowList", {
        get: function () {
            return this._ipAllowList;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationIpAllowList.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubOrganizationIpAllowList.prototype.synthesizeHclAttributes = function () {
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
    DataGithubOrganizationIpAllowList.tfResourceType = "github_organization_ip_allow_list";
    return DataGithubOrganizationIpAllowList;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationIpAllowList = DataGithubOrganizationIpAllowList;
