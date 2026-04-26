"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue
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
exports.Issue = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue github_issue}
*/
var Issue = /** @class */ (function (_super) {
    __extends(Issue, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue github_issue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IssueConfig
    */
    function Issue(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_issue',
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
        _this._assignees = config.assignees;
        _this._body = config.body;
        _this._id = config.id;
        _this._labels = config.labels;
        _this._milestoneNumber = config.milestoneNumber;
        _this._repository = config.repository;
        _this._title = config.title;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Issue to import
    * @param importFromId The id of the existing Issue that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Issue to import is found
    */
    Issue.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_issue", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Issue.prototype, "assignees", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('assignees'));
        },
        set: function (value) {
            this._assignees = value;
        },
        enumerable: false,
        configurable: true
    });
    Issue.prototype.resetAssignees = function () {
        this._assignees = undefined;
    };
    Object.defineProperty(Issue.prototype, "assigneesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assignees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    Issue.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(Issue.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Issue.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Issue.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "issueId", {
        // issue_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('issue_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "labels", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('labels'));
        },
        set: function (value) {
            this._labels = value;
        },
        enumerable: false,
        configurable: true
    });
    Issue.prototype.resetLabels = function () {
        this._labels = undefined;
    };
    Object.defineProperty(Issue.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "milestoneNumber", {
        get: function () {
            return this.getNumberAttribute('milestone_number');
        },
        set: function (value) {
            this._milestoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Issue.prototype.resetMilestoneNumber = function () {
        this._milestoneNumber = undefined;
    };
    Object.defineProperty(Issue.prototype, "milestoneNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._milestoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "title", {
        get: function () {
            return this.getStringAttribute('title');
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Issue.prototype, "titleInput", {
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
    Issue.prototype.synthesizeAttributes = function () {
        return {
            assignees: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignees),
            body: cdktf.stringToTerraform(this._body),
            id: cdktf.stringToTerraform(this._id),
            labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
            milestone_number: cdktf.numberToTerraform(this._milestoneNumber),
            repository: cdktf.stringToTerraform(this._repository),
            title: cdktf.stringToTerraform(this._title),
        };
    };
    Issue.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            assignees: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignees),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            body: {
                value: cdktf.stringToHclTerraform(this._body),
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
            labels: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            milestone_number: {
                value: cdktf.numberToHclTerraform(this._milestoneNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
    Issue.tfResourceType = "github_issue";
    return Issue;
}(cdktf.TerraformResource));
exports.Issue = Issue;
