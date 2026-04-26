"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference
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
exports.RepositoryAutolinkReference = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}
*/
var RepositoryAutolinkReference = /** @class */ (function (_super) {
    __extends(RepositoryAutolinkReference, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference github_repository_autolink_reference} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryAutolinkReferenceConfig
    */
    function RepositoryAutolinkReference(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_autolink_reference',
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
        _this._isAlphanumeric = config.isAlphanumeric;
        _this._keyPrefix = config.keyPrefix;
        _this._repository = config.repository;
        _this._targetUrlTemplate = config.targetUrlTemplate;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryAutolinkReference to import
    * @param importFromId The id of the existing RepositoryAutolinkReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryAutolinkReference to import is found
    */
    RepositoryAutolinkReference.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_autolink_reference", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryAutolinkReference.prototype, "etag", {
        // ==========
        // ATTRIBUTES
        // ==========
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryAutolinkReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryAutolinkReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "isAlphanumeric", {
        get: function () {
            return this.getBooleanAttribute('is_alphanumeric');
        },
        set: function (value) {
            this._isAlphanumeric = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryAutolinkReference.prototype.resetIsAlphanumeric = function () {
        this._isAlphanumeric = undefined;
    };
    Object.defineProperty(RepositoryAutolinkReference.prototype, "isAlphanumericInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isAlphanumeric;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "keyPrefix", {
        get: function () {
            return this.getStringAttribute('key_prefix');
        },
        set: function (value) {
            this._keyPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "keyPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "targetUrlTemplate", {
        get: function () {
            return this.getStringAttribute('target_url_template');
        },
        set: function (value) {
            this._targetUrlTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryAutolinkReference.prototype, "targetUrlTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetUrlTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryAutolinkReference.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            is_alphanumeric: cdktf.booleanToTerraform(this._isAlphanumeric),
            key_prefix: cdktf.stringToTerraform(this._keyPrefix),
            repository: cdktf.stringToTerraform(this._repository),
            target_url_template: cdktf.stringToTerraform(this._targetUrlTemplate),
        };
    };
    RepositoryAutolinkReference.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_alphanumeric: {
                value: cdktf.booleanToHclTerraform(this._isAlphanumeric),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_prefix: {
                value: cdktf.stringToHclTerraform(this._keyPrefix),
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
            target_url_template: {
                value: cdktf.stringToHclTerraform(this._targetUrlTemplate),
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
    RepositoryAutolinkReference.tfResourceType = "github_repository_autolink_reference";
    return RepositoryAutolinkReference;
}(cdktf.TerraformResource));
exports.RepositoryAutolinkReference = RepositoryAutolinkReference;
