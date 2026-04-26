"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image
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
exports.DataDockerRegistryImage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image docker_registry_image}
*/
var DataDockerRegistryImage = /** @class */ (function (_super) {
    __extends(DataDockerRegistryImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image docker_registry_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageConfig
    */
    function DataDockerRegistryImage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_registry_image',
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
        _this._id = config.id;
        _this._insecureSkipVerify = config.insecureSkipVerify;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImage to import
    * @param importFromId The id of the existing DataDockerRegistryImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImage to import is found
    */
    DataDockerRegistryImage.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerRegistryImage.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImage.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataDockerRegistryImage.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImage.prototype, "insecureSkipVerify", {
        get: function () {
            return this.getBooleanAttribute('insecure_skip_verify');
        },
        set: function (value) {
            this._insecureSkipVerify = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImage.prototype.resetInsecureSkipVerify = function () {
        this._insecureSkipVerify = undefined;
    };
    Object.defineProperty(DataDockerRegistryImage.prototype, "insecureSkipVerifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecureSkipVerify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImage.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImage.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImage.prototype, "sha256Digest", {
        // sha256_digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha256_digest');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerRegistryImage.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataDockerRegistryImage.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
    DataDockerRegistryImage.tfResourceType = "docker_registry_image";
    return DataDockerRegistryImage;
}(cdktf.TerraformDataSource));
exports.DataDockerRegistryImage = DataDockerRegistryImage;
