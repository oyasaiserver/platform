"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default
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
exports.BranchDefault = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default github_branch_default}
*/
var BranchDefault = /** @class */ (function (_super) {
    __extends(BranchDefault, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default github_branch_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchDefaultConfig
    */
    function BranchDefault(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_branch_default',
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
        _this._branch = config.branch;
        _this._etag = config.etag;
        _this._id = config.id;
        _this._rename = config.rename;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BranchDefault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BranchDefault to import
    * @param importFromId The id of the existing BranchDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BranchDefault to import is found
    */
    BranchDefault.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch_default", importId: importFromId, provider: provider });
    };
    Object.defineProperty(BranchDefault.prototype, "branch", {
        get: function () {
            return this.getStringAttribute('branch');
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchDefault.prototype, "branchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchDefault.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchDefault.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(BranchDefault.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchDefault.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchDefault.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(BranchDefault.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchDefault.prototype, "rename", {
        get: function () {
            return this.getBooleanAttribute('rename');
        },
        set: function (value) {
            this._rename = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchDefault.prototype.resetRename = function () {
        this._rename = undefined;
    };
    Object.defineProperty(BranchDefault.prototype, "renameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rename;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchDefault.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchDefault.prototype, "repositoryInput", {
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
    BranchDefault.prototype.synthesizeAttributes = function () {
        return {
            branch: cdktf.stringToTerraform(this._branch),
            etag: cdktf.stringToTerraform(this._etag),
            id: cdktf.stringToTerraform(this._id),
            rename: cdktf.booleanToTerraform(this._rename),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    BranchDefault.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            branch: {
                value: cdktf.stringToHclTerraform(this._branch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
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
            rename: {
                value: cdktf.booleanToHclTerraform(this._rename),
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
    BranchDefault.tfResourceType = "github_branch_default";
    return BranchDefault;
}(cdktf.TerraformResource));
exports.BranchDefault = BranchDefault;
