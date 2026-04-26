"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_variables
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
exports.DataGithubActionsEnvironmentVariables = exports.DataGithubActionsEnvironmentVariablesVariablesList = exports.DataGithubActionsEnvironmentVariablesVariablesOutputReference = void 0;
exports.dataGithubActionsEnvironmentVariablesVariablesToTerraform = dataGithubActionsEnvironmentVariablesVariablesToTerraform;
exports.dataGithubActionsEnvironmentVariablesVariablesToHclTerraform = dataGithubActionsEnvironmentVariablesVariablesToHclTerraform;
var cdktf = require("cdktf");
function dataGithubActionsEnvironmentVariablesVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubActionsEnvironmentVariablesVariablesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubActionsEnvironmentVariablesVariablesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubActionsEnvironmentVariablesVariablesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubActionsEnvironmentVariablesVariablesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubActionsEnvironmentVariablesVariablesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubActionsEnvironmentVariablesVariablesOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariablesVariablesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariablesVariablesOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariablesVariablesOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubActionsEnvironmentVariablesVariablesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubActionsEnvironmentVariablesVariablesOutputReference = DataGithubActionsEnvironmentVariablesVariablesOutputReference;
var DataGithubActionsEnvironmentVariablesVariablesList = /** @class */ (function (_super) {
    __extends(DataGithubActionsEnvironmentVariablesVariablesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubActionsEnvironmentVariablesVariablesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubActionsEnvironmentVariablesVariablesList.prototype.get = function (index) {
        return new DataGithubActionsEnvironmentVariablesVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubActionsEnvironmentVariablesVariablesList;
}(cdktf.ComplexList));
exports.DataGithubActionsEnvironmentVariablesVariablesList = DataGithubActionsEnvironmentVariablesVariablesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_variables github_actions_environment_variables}
*/
var DataGithubActionsEnvironmentVariables = /** @class */ (function (_super) {
    __extends(DataGithubActionsEnvironmentVariables, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_variables github_actions_environment_variables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsEnvironmentVariablesConfig
    */
    function DataGithubActionsEnvironmentVariables(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_environment_variables',
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
        // variables - computed: true, optional: false, required: false
        _this._variables = new DataGithubActionsEnvironmentVariablesVariablesList(_this, "variables", false);
        _this._environment = config.environment;
        _this._fullName = config.fullName;
        _this._id = config.id;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubActionsEnvironmentVariables resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsEnvironmentVariables to import
    * @param importFromId The id of the existing DataGithubActionsEnvironmentVariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_variables#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsEnvironmentVariables to import is found
    */
    DataGithubActionsEnvironmentVariables.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_environment_variables", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "fullName", {
        get: function () {
            return this.getStringAttribute('full_name');
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubActionsEnvironmentVariables.prototype.resetFullName = function () {
        this._fullName = undefined;
    };
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "fullNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fullName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubActionsEnvironmentVariables.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubActionsEnvironmentVariables.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubActionsEnvironmentVariables.prototype, "variables", {
        get: function () {
            return this._variables;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubActionsEnvironmentVariables.prototype.synthesizeAttributes = function () {
        return {
            environment: cdktf.stringToTerraform(this._environment),
            full_name: cdktf.stringToTerraform(this._fullName),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataGithubActionsEnvironmentVariables.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            full_name: {
                value: cdktf.stringToHclTerraform(this._fullName),
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
    DataGithubActionsEnvironmentVariables.tfResourceType = "github_actions_environment_variables";
    return DataGithubActionsEnvironmentVariables;
}(cdktf.TerraformDataSource));
exports.DataGithubActionsEnvironmentVariables = DataGithubActionsEnvironmentVariables;
