"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_column
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
exports.ProjectColumn = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_column github_project_column}
*/
var ProjectColumn = /** @class */ (function (_super) {
    __extends(ProjectColumn, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_column github_project_column} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectColumnConfig
    */
    function ProjectColumn(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_project_column',
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
        _this._id = config.id;
        _this._name = config.name;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectColumn resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectColumn to import
    * @param importFromId The id of the existing ProjectColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_column#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectColumn to import is found
    */
    ProjectColumn.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_project_column", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectColumn.prototype, "columnId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // column_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('column_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectColumn.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectColumn.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectColumn.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ProjectColumn.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectColumn.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectColumn.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectColumn.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectColumn.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectColumn.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    ProjectColumn.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
    ProjectColumn.tfResourceType = "github_project_column";
    return ProjectColumn;
}(cdktf.TerraformResource));
exports.ProjectColumn = ProjectColumn;
