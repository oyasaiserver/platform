"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references
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
exports.DataGithubRepositoryAutolinkReferences = exports.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList = exports.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference = void 0;
exports.dataGithubRepositoryAutolinkReferencesAutolinkReferencesToTerraform = dataGithubRepositoryAutolinkReferencesAutolinkReferencesToTerraform;
exports.dataGithubRepositoryAutolinkReferencesAutolinkReferencesToHclTerraform = dataGithubRepositoryAutolinkReferencesAutolinkReferencesToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryAutolinkReferencesAutolinkReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryAutolinkReferencesAutolinkReferencesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.prototype, "isAlphanumeric", {
        // is_alphanumeric - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_alphanumeric');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.prototype, "keyPrefix", {
        // key_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.prototype, "targetUrlTemplate", {
        // target_url_template - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_url_template');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference = DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference;
var DataGithubRepositoryAutolinkReferencesAutolinkReferencesList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryAutolinkReferencesAutolinkReferencesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryAutolinkReferencesAutolinkReferencesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.prototype.get = function (index) {
        return new DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryAutolinkReferencesAutolinkReferencesList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList = DataGithubRepositoryAutolinkReferencesAutolinkReferencesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references github_repository_autolink_references}
*/
var DataGithubRepositoryAutolinkReferences = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryAutolinkReferences, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references github_repository_autolink_references} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryAutolinkReferencesConfig
    */
    function DataGithubRepositoryAutolinkReferences(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_autolink_references',
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
        // autolink_references - computed: true, optional: false, required: false
        _this._autolinkReferences = new DataGithubRepositoryAutolinkReferencesAutolinkReferencesList(_this, "autolink_references", false);
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryAutolinkReferences to import
    * @param importFromId The id of the existing DataGithubRepositoryAutolinkReferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_autolink_references#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryAutolinkReferences to import is found
    */
    DataGithubRepositoryAutolinkReferences.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_autolink_references", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryAutolinkReferences.prototype, "autolinkReferences", {
        get: function () {
            return this._autolinkReferences;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryAutolinkReferences.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryAutolinkReferences.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryAutolinkReferences.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryAutolinkReferences.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryAutolinkReferences.prototype, "repositoryInput", {
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
    DataGithubRepositoryAutolinkReferences.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubRepositoryAutolinkReferences.prototype.synthesizeHclAttributes = function () {
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
    DataGithubRepositoryAutolinkReferences.tfResourceType = "github_repository_autolink_references";
    return DataGithubRepositoryAutolinkReferences;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryAutolinkReferences = DataGithubRepositoryAutolinkReferences;
