"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment
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
exports.ProjectEnvironment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment infisical_project_environment}
*/
var ProjectEnvironment = /** @class */ (function (_super) {
    __extends(ProjectEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment infisical_project_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectEnvironmentConfig
    */
    function ProjectEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_project_environment',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._name = config.name;
        _this._position = config.position;
        _this._projectId = config.projectId;
        _this._slug = config.slug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectEnvironment to import
    * @param importFromId The id of the existing ProjectEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectEnvironment to import is found
    */
    ProjectEnvironment.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_environment", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectEnvironment.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "position", {
        get: function () {
            return this.getNumberAttribute('position');
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectEnvironment.prototype.resetPosition = function () {
        this._position = undefined;
    };
    Object.defineProperty(ProjectEnvironment.prototype, "positionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectEnvironment.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectEnvironment.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            position: cdktf.numberToTerraform(this._position),
            project_id: cdktf.stringToTerraform(this._projectId),
            slug: cdktf.stringToTerraform(this._slug),
        };
    };
    ProjectEnvironment.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            position: {
                value: cdktf.numberToHclTerraform(this._position),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
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
    ProjectEnvironment.tfResourceType = "infisical_project_environment";
    return ProjectEnvironment;
}(cdktf.TerraformResource));
exports.ProjectEnvironment = ProjectEnvironment;
