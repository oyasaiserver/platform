"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations
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
exports.DataGithubOrganizationAppInstallations = exports.DataGithubOrganizationAppInstallationsInstallationsList = exports.DataGithubOrganizationAppInstallationsInstallationsOutputReference = void 0;
exports.dataGithubOrganizationAppInstallationsInstallationsToTerraform = dataGithubOrganizationAppInstallationsInstallationsToTerraform;
exports.dataGithubOrganizationAppInstallationsInstallationsToHclTerraform = dataGithubOrganizationAppInstallationsInstallationsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationAppInstallationsInstallationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationAppInstallationsInstallationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationAppInstallationsInstallationsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationAppInstallationsInstallationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationAppInstallationsInstallationsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permissions - computed: true, optional: false, required: false
        _this._permissions = new cdktf.StringMap(_this, "permissions");
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "appId", {
        // app_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('app_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "appSlug", {
        // app_slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_slug');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "events", {
        // events - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('events');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "repositorySelection", {
        // repository_selection - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_selection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "singleFilePaths", {
        // single_file_paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('single_file_paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "targetId", {
        // target_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('target_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "targetType", {
        // target_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallationsInstallationsOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationAppInstallationsInstallationsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationAppInstallationsInstallationsOutputReference = DataGithubOrganizationAppInstallationsInstallationsOutputReference;
var DataGithubOrganizationAppInstallationsInstallationsList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationAppInstallationsInstallationsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationAppInstallationsInstallationsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationAppInstallationsInstallationsList.prototype.get = function (index) {
        return new DataGithubOrganizationAppInstallationsInstallationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationAppInstallationsInstallationsList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationAppInstallationsInstallationsList = DataGithubOrganizationAppInstallationsInstallationsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations github_organization_app_installations}
*/
var DataGithubOrganizationAppInstallations = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationAppInstallations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations github_organization_app_installations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationAppInstallationsConfig = {}
    */
    function DataGithubOrganizationAppInstallations(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_app_installations',
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
        // installations - computed: true, optional: false, required: false
        _this._installations = new DataGithubOrganizationAppInstallationsInstallationsList(_this, "installations", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationAppInstallations to import
    * @param importFromId The id of the existing DataGithubOrganizationAppInstallations that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationAppInstallations to import is found
    */
    DataGithubOrganizationAppInstallations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_app_installations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationAppInstallations.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationAppInstallations.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationAppInstallations.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationAppInstallations.prototype, "installations", {
        get: function () {
            return this._installations;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationAppInstallations.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubOrganizationAppInstallations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataGithubOrganizationAppInstallations.tfResourceType = "github_organization_app_installations";
    return DataGithubOrganizationAppInstallations;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationAppInstallations = DataGithubOrganizationAppInstallations;
