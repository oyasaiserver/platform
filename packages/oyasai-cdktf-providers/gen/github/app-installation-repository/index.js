"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository
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
exports.AppInstallationRepository = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository github_app_installation_repository}
*/
var AppInstallationRepository = /** @class */ (function (_super) {
    __extends(AppInstallationRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository github_app_installation_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppInstallationRepositoryConfig
    */
    function AppInstallationRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_app_installation_repository',
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
        _this._installationId = config.installationId;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppInstallationRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppInstallationRepository to import
    * @param importFromId The id of the existing AppInstallationRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppInstallationRepository to import is found
    */
    AppInstallationRepository.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_app_installation_repository", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppInstallationRepository.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    AppInstallationRepository.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(AppInstallationRepository.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppInstallationRepository.prototype, "installationId", {
        get: function () {
            return this.getStringAttribute('installation_id');
        },
        set: function (value) {
            this._installationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppInstallationRepository.prototype, "installationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._installationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppInstallationRepository.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppInstallationRepository.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppInstallationRepository.prototype, "repositoryInput", {
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
    AppInstallationRepository.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            installation_id: cdktf.stringToTerraform(this._installationId),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    AppInstallationRepository.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            installation_id: {
                value: cdktf.stringToHclTerraform(this._installationId),
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
    AppInstallationRepository.tfResourceType = "github_app_installation_repository";
    return AppInstallationRepository;
}(cdktf.TerraformResource));
exports.AppInstallationRepository = AppInstallationRepository;
