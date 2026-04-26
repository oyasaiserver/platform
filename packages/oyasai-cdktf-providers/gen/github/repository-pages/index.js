"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages
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
exports.RepositoryPagesA = exports.RepositoryPagesSourceAOutputReference = void 0;
exports.repositoryPagesSourceAToTerraform = repositoryPagesSourceAToTerraform;
exports.repositoryPagesSourceAToHclTerraform = repositoryPagesSourceAToHclTerraform;
var cdktf = require("cdktf");
function repositoryPagesSourceAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        branch: cdktf.stringToTerraform(struct.branch),
        path: cdktf.stringToTerraform(struct.path),
    };
}
function repositoryPagesSourceAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        branch: {
            value: cdktf.stringToHclTerraform(struct.branch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
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
}
var RepositoryPagesSourceAOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryPagesSourceAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryPagesSourceAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryPagesSourceAOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._branch !== undefined) {
                hasAnyValues = true;
                internalValueResult.branch = this._branch;
            }
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._branch = undefined;
                this._path = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._branch = value.branch;
                this._path = value.path;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesSourceAOutputReference.prototype, "branch", {
        get: function () {
            return this.getStringAttribute('branch');
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesSourceAOutputReference.prototype, "branchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesSourceAOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesSourceAOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(RepositoryPagesSourceAOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryPagesSourceAOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryPagesSourceAOutputReference = RepositoryPagesSourceAOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages}
*/
var RepositoryPagesA = /** @class */ (function (_super) {
    __extends(RepositoryPagesA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryPagesAConfig
    */
    function RepositoryPagesA(scope, id, config) {
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
        // source - computed: false, optional: true, required: false
        _this._source = new RepositoryPagesSourceAOutputReference(_this, "source");
        _this._buildType = config.buildType;
        _this._cname = config.cname;
        _this._httpsEnforced = config.httpsEnforced;
        _this._id = config.id;
        _this._public = config.public;
        _this._repository = config.repository;
        _this._source.internalValue = config.source;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryPagesA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryPagesA to import
    * @param importFromId The id of the existing RepositoryPagesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryPagesA to import is found
    */
    RepositoryPagesA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pages", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryPagesA.prototype, "apiUrl", {
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
    Object.defineProperty(RepositoryPagesA.prototype, "buildStatus", {
        // build_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "buildType", {
        get: function () {
            return this.getStringAttribute('build_type');
        },
        set: function (value) {
            this._buildType = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesA.prototype.resetBuildType = function () {
        this._buildType = undefined;
    };
    Object.defineProperty(RepositoryPagesA.prototype, "buildTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "cname", {
        get: function () {
            return this.getStringAttribute('cname');
        },
        set: function (value) {
            this._cname = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesA.prototype.resetCname = function () {
        this._cname = undefined;
    };
    Object.defineProperty(RepositoryPagesA.prototype, "cnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "custom404", {
        // custom_404 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('custom_404');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "httpsEnforced", {
        get: function () {
            return this.getBooleanAttribute('https_enforced');
        },
        set: function (value) {
            this._httpsEnforced = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesA.prototype.resetHttpsEnforced = function () {
        this._httpsEnforced = undefined;
    };
    Object.defineProperty(RepositoryPagesA.prototype, "httpsEnforcedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpsEnforced;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesA.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryPagesA.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "public", {
        get: function () {
            return this.getBooleanAttribute('public');
        },
        set: function (value) {
            this._public = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesA.prototype.resetPublic = function () {
        this._public = undefined;
    };
    Object.defineProperty(RepositoryPagesA.prototype, "publicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._public;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesA.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesA.prototype.putSource = function (value) {
        this._source.internalValue = value;
    };
    RepositoryPagesA.prototype.resetSource = function () {
        this._source.internalValue = undefined;
    };
    Object.defineProperty(RepositoryPagesA.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryPagesA.prototype.synthesizeAttributes = function () {
        return {
            build_type: cdktf.stringToTerraform(this._buildType),
            cname: cdktf.stringToTerraform(this._cname),
            https_enforced: cdktf.booleanToTerraform(this._httpsEnforced),
            id: cdktf.stringToTerraform(this._id),
            public: cdktf.booleanToTerraform(this._public),
            repository: cdktf.stringToTerraform(this._repository),
            source: repositoryPagesSourceAToTerraform(this._source.internalValue),
        };
    };
    RepositoryPagesA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            build_type: {
                value: cdktf.stringToHclTerraform(this._buildType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cname: {
                value: cdktf.stringToHclTerraform(this._cname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            https_enforced: {
                value: cdktf.booleanToHclTerraform(this._httpsEnforced),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public: {
                value: cdktf.booleanToHclTerraform(this._public),
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
            source: {
                value: repositoryPagesSourceAToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryPagesSourceAList",
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
    RepositoryPagesA.tfResourceType = "github_repository_pages";
    return RepositoryPagesA;
}(cdktf.TerraformResource));
exports.RepositoryPagesA = RepositoryPagesA;
