"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects
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
exports.DataInfisicalProjects = exports.DataInfisicalProjectsEnvironmentsMap = exports.DataInfisicalProjectsEnvironmentsOutputReference = void 0;
exports.dataInfisicalProjectsEnvironmentsToTerraform = dataInfisicalProjectsEnvironmentsToTerraform;
exports.dataInfisicalProjectsEnvironmentsToHclTerraform = dataInfisicalProjectsEnvironmentsToHclTerraform;
var cdktf = require("cdktf");
function dataInfisicalProjectsEnvironmentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalProjectsEnvironmentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalProjectsEnvironmentsOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalProjectsEnvironmentsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataInfisicalProjectsEnvironmentsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalProjectsEnvironmentsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataInfisicalProjectsEnvironmentsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjectsEnvironmentsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjectsEnvironmentsOutputReference.prototype, "slug", {
        // slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('slug');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalProjectsEnvironmentsOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalProjectsEnvironmentsOutputReference = DataInfisicalProjectsEnvironmentsOutputReference;
var DataInfisicalProjectsEnvironmentsMap = /** @class */ (function (_super) {
    __extends(DataInfisicalProjectsEnvironmentsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataInfisicalProjectsEnvironmentsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataInfisicalProjectsEnvironmentsMap.prototype.get = function (key) {
        return new DataInfisicalProjectsEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataInfisicalProjectsEnvironmentsMap;
}(cdktf.ComplexMap));
exports.DataInfisicalProjectsEnvironmentsMap = DataInfisicalProjectsEnvironmentsMap;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects infisical_projects}
*/
var DataInfisicalProjects = /** @class */ (function (_super) {
    __extends(DataInfisicalProjects, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects infisical_projects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalProjectsConfig
    */
    function DataInfisicalProjects(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_projects',
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
        // environments - computed: true, optional: false, required: false
        _this._environments = new DataInfisicalProjectsEnvironmentsMap(_this, "environments");
        _this._slug = config.slug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalProjects resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalProjects to import
    * @param importFromId The id of the existing DataInfisicalProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalProjects to import is found
    */
    DataInfisicalProjects.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_projects", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalProjects.prototype, "autoCapitalization", {
        // ==========
        // ATTRIBUTES
        // ==========
        // auto_capitalization - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_capitalization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "environments", {
        get: function () {
            return this._environments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "orgId", {
        // org_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('org_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "upgradeStatus", {
        // upgrade_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upgrade_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalProjects.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalProjects.prototype.synthesizeAttributes = function () {
        return {
            slug: cdktf.stringToTerraform(this._slug),
        };
    };
    DataInfisicalProjects.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataInfisicalProjects.tfResourceType = "infisical_projects";
    return DataInfisicalProjects;
}(cdktf.TerraformDataSource));
exports.DataInfisicalProjects = DataInfisicalProjects;
