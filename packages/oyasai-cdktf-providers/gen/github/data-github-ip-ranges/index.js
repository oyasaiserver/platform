"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges
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
exports.DataGithubIpRanges = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges github_ip_ranges}
*/
var DataGithubIpRanges = /** @class */ (function (_super) {
    __extends(DataGithubIpRanges, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges github_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubIpRangesConfig = {}
    */
    function DataGithubIpRanges(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_ip_ranges',
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
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubIpRanges to import
    * @param importFromId The id of the existing DataGithubIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubIpRanges to import is found
    */
    DataGithubIpRanges.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_ip_ranges", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubIpRanges.prototype, "actions", {
        // ==========
        // ATTRIBUTES
        // ==========
        // actions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "actionsIpv4", {
        // actions_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "actionsIpv6", {
        // actions_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "actionsMacos", {
        // actions_macos - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions_macos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "actionsMacosIpv4", {
        // actions_macos_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions_macos_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "actionsMacosIpv6", {
        // actions_macos_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions_macos_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "api", {
        // api - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('api');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "apiIpv4", {
        // api_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('api_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "apiIpv6", {
        // api_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('api_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "dependabot", {
        // dependabot - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dependabot');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "dependabotIpv4", {
        // dependabot_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dependabot_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "dependabotIpv6", {
        // dependabot_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dependabot_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "git", {
        // git - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('git');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "gitIpv4", {
        // git_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('git_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "gitIpv6", {
        // git_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('git_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "githubEnterpriseImporter", {
        // github_enterprise_importer - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('github_enterprise_importer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "githubEnterpriseImporterIpv4", {
        // github_enterprise_importer_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('github_enterprise_importer_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "githubEnterpriseImporterIpv6", {
        // github_enterprise_importer_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('github_enterprise_importer_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "hooks", {
        // hooks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hooks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "hooksIpv4", {
        // hooks_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hooks_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "hooksIpv6", {
        // hooks_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hooks_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubIpRanges.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubIpRanges.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "importer", {
        // importer - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('importer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "importerIpv4", {
        // importer_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('importer_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "importerIpv6", {
        // importer_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('importer_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "packages", {
        // packages - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('packages');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "packagesIpv4", {
        // packages_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('packages_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "packagesIpv6", {
        // packages_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('packages_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "pages", {
        // pages - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pages');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "pagesIpv4", {
        // pages_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pages_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "pagesIpv6", {
        // pages_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pages_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "web", {
        // web - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('web');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "webIpv4", {
        // web_ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('web_ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubIpRanges.prototype, "webIpv6", {
        // web_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('web_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubIpRanges.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubIpRanges.prototype.synthesizeHclAttributes = function () {
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
    DataGithubIpRanges.tfResourceType = "github_ip_ranges";
    return DataGithubIpRanges;
}(cdktf.TerraformDataSource));
exports.DataGithubIpRanges = DataGithubIpRanges;
