"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages
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
exports.DataGithubRepositoryPagesA = exports.DataGithubRepositoryPagesSourceAList = exports.DataGithubRepositoryPagesSourceAOutputReference = void 0;
exports.dataGithubRepositoryPagesSourceAToTerraform = dataGithubRepositoryPagesSourceAToTerraform;
exports.dataGithubRepositoryPagesSourceAToHclTerraform = dataGithubRepositoryPagesSourceAToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryPagesSourceAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryPagesSourceAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryPagesSourceAOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesSourceAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPagesSourceAOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryPagesSourceAOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubRepositoryPagesSourceAOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesSourceAOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryPagesSourceAOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryPagesSourceAOutputReference = DataGithubRepositoryPagesSourceAOutputReference;
var DataGithubRepositoryPagesSourceAList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesSourceAList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPagesSourceAList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryPagesSourceAList.prototype.get = function (index) {
        return new DataGithubRepositoryPagesSourceAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryPagesSourceAList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryPagesSourceAList = DataGithubRepositoryPagesSourceAList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages github_repository_pages}
*/
var DataGithubRepositoryPagesA = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages github_repository_pages} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPagesAConfig
    */
    function DataGithubRepositoryPagesA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_pages',
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
        // source - computed: true, optional: false, required: false
        _this._source = new DataGithubRepositoryPagesSourceAList(_this, "source", false);
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPagesA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPagesA to import
    * @param importFromId The id of the existing DataGithubRepositoryPagesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPagesA to import is found
    */
    DataGithubRepositoryPagesA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pages", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "apiUrl", {
        // ==========
        // ATTRIBUTES
        // ==========
        // api_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('api_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "buildStatus", {
        // build_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "buildType", {
        // build_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "custom404", {
        // custom_404 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('custom_404');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "httpsEnforced", {
        // https_enforced - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('https_enforced');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPagesA.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "public", {
        // public - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('public');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesA.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubRepositoryPagesA.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubRepositoryPagesA.prototype.synthesizeHclAttributes = function () {
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
    DataGithubRepositoryPagesA.tfResourceType = "github_repository_pages";
    return DataGithubRepositoryPagesA;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryPagesA = DataGithubRepositoryPagesA;
