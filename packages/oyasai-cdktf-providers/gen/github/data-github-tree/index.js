"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree
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
exports.DataGithubTree = exports.DataGithubTreeEntriesList = exports.DataGithubTreeEntriesOutputReference = void 0;
exports.dataGithubTreeEntriesToTerraform = dataGithubTreeEntriesToTerraform;
exports.dataGithubTreeEntriesToHclTerraform = dataGithubTreeEntriesToHclTerraform;
var cdktf = require("cdktf");
function dataGithubTreeEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubTreeEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubTreeEntriesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubTreeEntriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubTreeEntriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubTreeEntriesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubTreeEntriesOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTreeEntriesOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTreeEntriesOutputReference.prototype, "sha", {
        // sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTreeEntriesOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTreeEntriesOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubTreeEntriesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubTreeEntriesOutputReference = DataGithubTreeEntriesOutputReference;
var DataGithubTreeEntriesList = /** @class */ (function (_super) {
    __extends(DataGithubTreeEntriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubTreeEntriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubTreeEntriesList.prototype.get = function (index) {
        return new DataGithubTreeEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubTreeEntriesList;
}(cdktf.ComplexList));
exports.DataGithubTreeEntriesList = DataGithubTreeEntriesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree github_tree}
*/
var DataGithubTree = /** @class */ (function (_super) {
    __extends(DataGithubTree, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree github_tree} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubTreeConfig
    */
    function DataGithubTree(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_tree',
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
        // entries - computed: true, optional: false, required: false
        _this._entries = new DataGithubTreeEntriesList(_this, "entries", false);
        _this._id = config.id;
        _this._recursive = config.recursive;
        _this._repository = config.repository;
        _this._treeSha = config.treeSha;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubTree resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubTree to import
    * @param importFromId The id of the existing DataGithubTree that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/tree#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubTree to import is found
    */
    DataGithubTree.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_tree", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubTree.prototype, "entries", {
        get: function () {
            return this._entries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTree.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubTree.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubTree.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTree.prototype, "recursive", {
        get: function () {
            return this.getBooleanAttribute('recursive');
        },
        set: function (value) {
            this._recursive = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubTree.prototype.resetRecursive = function () {
        this._recursive = undefined;
    };
    Object.defineProperty(DataGithubTree.prototype, "recursiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recursive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTree.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTree.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTree.prototype, "treeSha", {
        get: function () {
            return this.getStringAttribute('tree_sha');
        },
        set: function (value) {
            this._treeSha = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTree.prototype, "treeShaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._treeSha;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubTree.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            recursive: cdktf.booleanToTerraform(this._recursive),
            repository: cdktf.stringToTerraform(this._repository),
            tree_sha: cdktf.stringToTerraform(this._treeSha),
        };
    };
    DataGithubTree.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recursive: {
                value: cdktf.booleanToHclTerraform(this._recursive),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tree_sha: {
                value: cdktf.stringToHclTerraform(this._treeSha),
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
    DataGithubTree.tfResourceType = "github_tree";
    return DataGithubTree;
}(cdktf.TerraformDataSource));
exports.DataGithubTree = DataGithubTree;
