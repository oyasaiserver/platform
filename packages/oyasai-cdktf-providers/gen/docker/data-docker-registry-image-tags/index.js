"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags
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
exports.DataDockerRegistryImageTags = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags docker_registry_image_tags}
*/
var DataDockerRegistryImageTags = /** @class */ (function (_super) {
    __extends(DataDockerRegistryImageTags, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags docker_registry_image_tags} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageTagsConfig
    */
    function DataDockerRegistryImageTags(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_registry_image_tags',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._insecureSkipVerify = config.insecureSkipVerify;
        _this._name = config.name;
        _this._strictSemver = config.strictSemver;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImageTags resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImageTags to import
    * @param importFromId The id of the existing DataDockerRegistryImageTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImageTags to import is found
    */
    DataDockerRegistryImageTags.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image_tags", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "insecureSkipVerify", {
        get: function () {
            return this.getBooleanAttribute('insecure_skip_verify');
        },
        set: function (value) {
            this._insecureSkipVerify = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageTags.prototype.resetInsecureSkipVerify = function () {
        this._insecureSkipVerify = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "insecureSkipVerifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecureSkipVerify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "strictSemver", {
        get: function () {
            return this.getBooleanAttribute('strict_semver');
        },
        set: function (value) {
            this._strictSemver = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageTags.prototype.resetStrictSemver = function () {
        this._strictSemver = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "strictSemverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strictSemver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageTags.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tags');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerRegistryImageTags.prototype.synthesizeAttributes = function () {
        return {
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            name: cdktf.stringToTerraform(this._name),
            strict_semver: cdktf.booleanToTerraform(this._strictSemver),
        };
    };
    DataDockerRegistryImageTags.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            insecure_skip_verify: {
                value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            strict_semver: {
                value: cdktf.booleanToHclTerraform(this._strictSemver),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    DataDockerRegistryImageTags.tfResourceType = "docker_registry_image_tags";
    return DataDockerRegistryImageTags;
}(cdktf.TerraformDataSource));
exports.DataDockerRegistryImageTags = DataDockerRegistryImageTags;
