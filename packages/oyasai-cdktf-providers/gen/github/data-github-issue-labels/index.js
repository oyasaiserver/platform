"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels
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
exports.DataGithubIssueLabels = exports.DataGithubIssueLabelsLabelsList = exports.DataGithubIssueLabelsLabelsOutputReference = void 0;
exports.dataGithubIssueLabelsLabelsToTerraform = dataGithubIssueLabelsLabelsToTerraform;
exports.dataGithubIssueLabelsLabelsToHclTerraform = dataGithubIssueLabelsLabelsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubIssueLabelsLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubIssueLabelsLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubIssueLabelsLabelsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubIssueLabelsLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubIssueLabelsLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubIssueLabelsLabelsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubIssueLabelsLabelsOutputReference.prototype, "color", {
        // color - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('color');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIssueLabelsLabelsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIssueLabelsLabelsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIssueLabelsLabelsOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubIssueLabelsLabelsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubIssueLabelsLabelsOutputReference = DataGithubIssueLabelsLabelsOutputReference;
var DataGithubIssueLabelsLabelsList = /** @class */ (function (_super) {
    __extends(DataGithubIssueLabelsLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubIssueLabelsLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubIssueLabelsLabelsList.prototype.get = function (index) {
        return new DataGithubIssueLabelsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubIssueLabelsLabelsList;
}(cdktf.ComplexList));
exports.DataGithubIssueLabelsLabelsList = DataGithubIssueLabelsLabelsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels github_issue_labels}
*/
var DataGithubIssueLabels = /** @class */ (function (_super) {
    __extends(DataGithubIssueLabels, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels github_issue_labels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubIssueLabelsConfig
    */
    function DataGithubIssueLabels(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_issue_labels',
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
        // labels - computed: true, optional: false, required: false
        _this._labels = new DataGithubIssueLabelsLabelsList(_this, "labels", false);
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubIssueLabels resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubIssueLabels to import
    * @param importFromId The id of the existing DataGithubIssueLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/issue_labels#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubIssueLabels to import is found
    */
    DataGithubIssueLabels.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_issue_labels", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubIssueLabels.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubIssueLabels.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubIssueLabels.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIssueLabels.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIssueLabels.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIssueLabels.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubIssueLabels.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubIssueLabels.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
    DataGithubIssueLabels.tfResourceType = "github_issue_labels";
    return DataGithubIssueLabels;
}(cdktf.TerraformDataSource));
exports.DataGithubIssueLabels = DataGithubIssueLabels;
