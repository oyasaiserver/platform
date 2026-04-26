"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret_repository
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
exports.DependabotOrganizationSecretRepository = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret_repository github_dependabot_organization_secret_repository}
*/
var DependabotOrganizationSecretRepository = /** @class */ (function (_super) {
    __extends(DependabotOrganizationSecretRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret_repository github_dependabot_organization_secret_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DependabotOrganizationSecretRepositoryConfig
    */
    function DependabotOrganizationSecretRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_dependabot_organization_secret_repository',
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
        _this._repositoryId = config.repositoryId;
        _this._secretName = config.secretName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DependabotOrganizationSecretRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DependabotOrganizationSecretRepository to import
    * @param importFromId The id of the existing DependabotOrganizationSecretRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DependabotOrganizationSecretRepository to import is found
    */
    DependabotOrganizationSecretRepository.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_dependabot_organization_secret_repository", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DependabotOrganizationSecretRepository.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecretRepository.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecretRepository.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecretRepository.prototype, "repositoryId", {
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        set: function (value) {
            this._repositoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecretRepository.prototype, "repositoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecretRepository.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecretRepository.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DependabotOrganizationSecretRepository.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository_id: cdktf.numberToTerraform(this._repositoryId),
            secret_name: cdktf.stringToTerraform(this._secretName),
        };
    };
    DependabotOrganizationSecretRepository.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_id: {
                value: cdktf.numberToHclTerraform(this._repositoryId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secret_name: {
                value: cdktf.stringToHclTerraform(this._secretName),
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
    DependabotOrganizationSecretRepository.tfResourceType = "github_dependabot_organization_secret_repository";
    return DependabotOrganizationSecretRepository;
}(cdktf.TerraformResource));
exports.DependabotOrganizationSecretRepository = DependabotOrganizationSecretRepository;
