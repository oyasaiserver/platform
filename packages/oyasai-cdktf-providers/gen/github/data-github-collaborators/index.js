"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators
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
exports.DataGithubCollaborators = exports.DataGithubCollaboratorsCollaboratorList = exports.DataGithubCollaboratorsCollaboratorOutputReference = void 0;
exports.dataGithubCollaboratorsCollaboratorToTerraform = dataGithubCollaboratorsCollaboratorToTerraform;
exports.dataGithubCollaboratorsCollaboratorToHclTerraform = dataGithubCollaboratorsCollaboratorToHclTerraform;
var cdktf = require("cdktf");
function dataGithubCollaboratorsCollaboratorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubCollaboratorsCollaboratorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubCollaboratorsCollaboratorOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubCollaboratorsCollaboratorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubCollaboratorsCollaboratorOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "eventsUrl", {
        // events_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('events_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "followersUrl", {
        // followers_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('followers_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "followingUrl", {
        // following_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('following_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "gistsUrl", {
        // gists_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gists_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "login", {
        // login - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('login');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "organizationsUrl", {
        // organizations_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organizations_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "permission", {
        // permission - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('permission');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "receivedEventsUrl", {
        // received_events_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('received_events_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "reposUrl", {
        // repos_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repos_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "siteAdmin", {
        // site_admin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('site_admin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "starredUrl", {
        // starred_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('starred_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "subscriptionsUrl", {
        // subscriptions_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subscriptions_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaboratorsCollaboratorOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubCollaboratorsCollaboratorOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubCollaboratorsCollaboratorOutputReference = DataGithubCollaboratorsCollaboratorOutputReference;
var DataGithubCollaboratorsCollaboratorList = /** @class */ (function (_super) {
    __extends(DataGithubCollaboratorsCollaboratorList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubCollaboratorsCollaboratorList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubCollaboratorsCollaboratorList.prototype.get = function (index) {
        return new DataGithubCollaboratorsCollaboratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubCollaboratorsCollaboratorList;
}(cdktf.ComplexList));
exports.DataGithubCollaboratorsCollaboratorList = DataGithubCollaboratorsCollaboratorList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators github_collaborators}
*/
var DataGithubCollaborators = /** @class */ (function (_super) {
    __extends(DataGithubCollaborators, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators github_collaborators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubCollaboratorsConfig
    */
    function DataGithubCollaborators(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_collaborators',
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
        // collaborator - computed: true, optional: false, required: false
        _this._collaborator = new DataGithubCollaboratorsCollaboratorList(_this, "collaborator", false);
        _this._affiliation = config.affiliation;
        _this._id = config.id;
        _this._owner = config.owner;
        _this._permission = config.permission;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubCollaborators to import
    * @param importFromId The id of the existing DataGithubCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubCollaborators to import is found
    */
    DataGithubCollaborators.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_collaborators", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubCollaborators.prototype, "affiliation", {
        get: function () {
            return this.getStringAttribute('affiliation');
        },
        set: function (value) {
            this._affiliation = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCollaborators.prototype.resetAffiliation = function () {
        this._affiliation = undefined;
    };
    Object.defineProperty(DataGithubCollaborators.prototype, "affiliationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._affiliation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "collaborator", {
        get: function () {
            return this._collaborator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCollaborators.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubCollaborators.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "permission", {
        get: function () {
            return this.getStringAttribute('permission');
        },
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCollaborators.prototype.resetPermission = function () {
        this._permission = undefined;
    };
    Object.defineProperty(DataGithubCollaborators.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCollaborators.prototype, "repositoryInput", {
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
    DataGithubCollaborators.prototype.synthesizeAttributes = function () {
        return {
            affiliation: cdktf.stringToTerraform(this._affiliation),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            permission: cdktf.stringToTerraform(this._permission),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubCollaborators.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            affiliation: {
                value: cdktf.stringToHclTerraform(this._affiliation),
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
            permission: {
                value: cdktf.stringToHclTerraform(this._permission),
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
    DataGithubCollaborators.tfResourceType = "github_collaborators";
    return DataGithubCollaborators;
}(cdktf.TerraformDataSource));
exports.DataGithubCollaborators = DataGithubCollaborators;
