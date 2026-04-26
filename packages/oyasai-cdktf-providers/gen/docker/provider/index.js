"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs
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
exports.DockerProvider = void 0;
exports.dockerProviderRegistryAuthToTerraform = dockerProviderRegistryAuthToTerraform;
exports.dockerProviderRegistryAuthToHclTerraform = dockerProviderRegistryAuthToHclTerraform;
var cdktf = require("cdktf");
function dockerProviderRegistryAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        auth_disabled: cdktf.booleanToTerraform(struct.authDisabled),
        config_file: cdktf.stringToTerraform(struct.configFile),
        config_file_content: cdktf.stringToTerraform(struct.configFileContent),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function dockerProviderRegistryAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_disabled: {
            value: cdktf.booleanToHclTerraform(struct.authDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        config_file: {
            value: cdktf.stringToHclTerraform(struct.configFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        config_file_content: {
            value: cdktf.stringToHclTerraform(struct.configFileContent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs docker}
*/
var DockerProvider = /** @class */ (function (_super) {
    __extends(DockerProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs docker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DockerProviderConfig = {}
    */
    function DockerProvider(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            terraformProviderSource: 'kreuzwerker/docker'
        }) || this;
        _this._caMaterial = config.caMaterial;
        _this._certMaterial = config.certMaterial;
        _this._certPath = config.certPath;
        _this._context = config.context;
        _this._disableDockerDaemonCheck = config.disableDockerDaemonCheck;
        _this._host = config.host;
        _this._keyMaterial = config.keyMaterial;
        _this._sshOpts = config.sshOpts;
        _this._alias = config.alias;
        _this._registryAuth = config.registryAuth;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DockerProvider to import
    * @param importFromId The id of the existing DockerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DockerProvider to import is found
    */
    DockerProvider.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DockerProvider.prototype, "caMaterial", {
        get: function () {
            return this._caMaterial;
        },
        set: function (value) {
            this._caMaterial = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetCaMaterial = function () {
        this._caMaterial = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "caMaterialInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caMaterial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "certMaterial", {
        get: function () {
            return this._certMaterial;
        },
        set: function (value) {
            this._certMaterial = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetCertMaterial = function () {
        this._certMaterial = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "certMaterialInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certMaterial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "certPath", {
        get: function () {
            return this._certPath;
        },
        set: function (value) {
            this._certPath = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetCertPath = function () {
        this._certPath = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "certPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetContext = function () {
        this._context = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "contextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "disableDockerDaemonCheck", {
        get: function () {
            return this._disableDockerDaemonCheck;
        },
        set: function (value) {
            this._disableDockerDaemonCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetDisableDockerDaemonCheck = function () {
        this._disableDockerDaemonCheck = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "disableDockerDaemonCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableDockerDaemonCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "host", {
        get: function () {
            return this._host;
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "keyMaterial", {
        get: function () {
            return this._keyMaterial;
        },
        set: function (value) {
            this._keyMaterial = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetKeyMaterial = function () {
        this._keyMaterial = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "keyMaterialInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyMaterial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "sshOpts", {
        get: function () {
            return this._sshOpts;
        },
        set: function (value) {
            this._sshOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetSshOpts = function () {
        this._sshOpts = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "sshOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerProvider.prototype, "registryAuth", {
        get: function () {
            return this._registryAuth;
        },
        set: function (value) {
            this._registryAuth = value;
        },
        enumerable: false,
        configurable: true
    });
    DockerProvider.prototype.resetRegistryAuth = function () {
        this._registryAuth = undefined;
    };
    Object.defineProperty(DockerProvider.prototype, "registryAuthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registryAuth;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DockerProvider.prototype.synthesizeAttributes = function () {
        return {
            ca_material: cdktf.stringToTerraform(this._caMaterial),
            cert_material: cdktf.stringToTerraform(this._certMaterial),
            cert_path: cdktf.stringToTerraform(this._certPath),
            context: cdktf.stringToTerraform(this._context),
            disable_docker_daemon_check: cdktf.booleanToTerraform(this._disableDockerDaemonCheck),
            host: cdktf.stringToTerraform(this._host),
            key_material: cdktf.stringToTerraform(this._keyMaterial),
            ssh_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshOpts),
            alias: cdktf.stringToTerraform(this._alias),
            registry_auth: cdktf.listMapper(dockerProviderRegistryAuthToTerraform, true)(this._registryAuth),
        };
    };
    DockerProvider.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            ca_material: {
                value: cdktf.stringToHclTerraform(this._caMaterial),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cert_material: {
                value: cdktf.stringToHclTerraform(this._certMaterial),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cert_path: {
                value: cdktf.stringToHclTerraform(this._certPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context: {
                value: cdktf.stringToHclTerraform(this._context),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_docker_daemon_check: {
                value: cdktf.booleanToHclTerraform(this._disableDockerDaemonCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_material: {
                value: cdktf.stringToHclTerraform(this._keyMaterial),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssh_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshOpts),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            registry_auth: {
                value: cdktf.listMapperHcl(dockerProviderRegistryAuthToHclTerraform, true)(this._registryAuth),
                isBlock: true,
                type: "set",
                storageClassType: "DockerProviderRegistryAuthList",
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
    DockerProvider.tfResourceType = "docker";
    return DockerProvider;
}(cdktf.TerraformProvider));
exports.DockerProvider = DockerProvider;
