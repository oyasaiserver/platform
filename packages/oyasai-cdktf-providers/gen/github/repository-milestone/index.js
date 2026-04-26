"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone
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
exports.RepositoryMilestone = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone github_repository_milestone}
*/
var RepositoryMilestone = /** @class */ (function (_super) {
    __extends(RepositoryMilestone, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone github_repository_milestone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryMilestoneConfig
    */
    function RepositoryMilestone(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_milestone',
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
        _this._description = config.description;
        _this._dueDate = config.dueDate;
        _this._id = config.id;
        _this._owner = config.owner;
        _this._repository = config.repository;
        _this._state = config.state;
        _this._title = config.title;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryMilestone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryMilestone to import
    * @param importFromId The id of the existing RepositoryMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_milestone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryMilestone to import is found
    */
    RepositoryMilestone.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_milestone", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryMilestone.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryMilestone.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(RepositoryMilestone.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "dueDate", {
        get: function () {
            return this.getStringAttribute('due_date');
        },
        set: function (value) {
            this._dueDate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryMilestone.prototype.resetDueDate = function () {
        this._dueDate = undefined;
    };
    Object.defineProperty(RepositoryMilestone.prototype, "dueDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dueDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryMilestone.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryMilestone.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryMilestone.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(RepositoryMilestone.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "title", {
        get: function () {
            return this.getStringAttribute('title');
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryMilestone.prototype, "titleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryMilestone.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            due_date: cdktf.stringToTerraform(this._dueDate),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            repository: cdktf.stringToTerraform(this._repository),
            state: cdktf.stringToTerraform(this._state),
            title: cdktf.stringToTerraform(this._title),
        };
    };
    RepositoryMilestone.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            due_date: {
                value: cdktf.stringToHclTerraform(this._dueDate),
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
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
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
            state: {
                value: cdktf.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
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
    RepositoryMilestone.tfResourceType = "github_repository_milestone";
    return RepositoryMilestone;
}(cdktf.TerraformResource));
exports.RepositoryMilestone = RepositoryMilestone;
