"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card
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
exports.ProjectCard = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card github_project_card}
*/
var ProjectCard = /** @class */ (function (_super) {
    __extends(ProjectCard, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card github_project_card} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectCardConfig
    */
    function ProjectCard(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_project_card',
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
        _this._columnId = config.columnId;
        _this._contentId = config.contentId;
        _this._contentType = config.contentType;
        _this._id = config.id;
        _this._note = config.note;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectCard resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectCard to import
    * @param importFromId The id of the existing ProjectCard that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectCard to import is found
    */
    ProjectCard.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_project_card", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectCard.prototype, "cardId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // card_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('card_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "columnId", {
        get: function () {
            return this.getStringAttribute('column_id');
        },
        set: function (value) {
            this._columnId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "columnIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._columnId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "contentId", {
        get: function () {
            return this.getNumberAttribute('content_id');
        },
        set: function (value) {
            this._contentId = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectCard.prototype.resetContentId = function () {
        this._contentId = undefined;
    };
    Object.defineProperty(ProjectCard.prototype, "contentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectCard.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(ProjectCard.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectCard.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ProjectCard.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCard.prototype, "note", {
        get: function () {
            return this.getStringAttribute('note');
        },
        set: function (value) {
            this._note = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectCard.prototype.resetNote = function () {
        this._note = undefined;
    };
    Object.defineProperty(ProjectCard.prototype, "noteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._note;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectCard.prototype.synthesizeAttributes = function () {
        return {
            column_id: cdktf.stringToTerraform(this._columnId),
            content_id: cdktf.numberToTerraform(this._contentId),
            content_type: cdktf.stringToTerraform(this._contentType),
            id: cdktf.stringToTerraform(this._id),
            note: cdktf.stringToTerraform(this._note),
        };
    };
    ProjectCard.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            column_id: {
                value: cdktf.stringToHclTerraform(this._columnId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_id: {
                value: cdktf.numberToHclTerraform(this._contentId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            content_type: {
                value: cdktf.stringToHclTerraform(this._contentType),
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
            note: {
                value: cdktf.stringToHclTerraform(this._note),
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
    ProjectCard.tfResourceType = "github_project_card";
    return ProjectCard;
}(cdktf.TerraformResource));
exports.ProjectCard = ProjectCard;
