// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dockerProviderRegistryAuthToTerraform(struct) {
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
export function dockerProviderRegistryAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs docker}
*/
export class DockerProvider extends cdktf.TerraformProvider {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker", importId: importFromId, provider });
    }
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
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'docker',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            terraformProviderSource: 'kreuzwerker/docker'
        });
        this._caMaterial = config.caMaterial;
        this._certMaterial = config.certMaterial;
        this._certPath = config.certPath;
        this._context = config.context;
        this._disableDockerDaemonCheck = config.disableDockerDaemonCheck;
        this._host = config.host;
        this._keyMaterial = config.keyMaterial;
        this._sshOpts = config.sshOpts;
        this._alias = config.alias;
        this._registryAuth = config.registryAuth;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ca_material - computed: false, optional: true, required: false
    _caMaterial;
    get caMaterial() {
        return this._caMaterial;
    }
    set caMaterial(value) {
        this._caMaterial = value;
    }
    resetCaMaterial() {
        this._caMaterial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caMaterialInput() {
        return this._caMaterial;
    }
    // cert_material - computed: false, optional: true, required: false
    _certMaterial;
    get certMaterial() {
        return this._certMaterial;
    }
    set certMaterial(value) {
        this._certMaterial = value;
    }
    resetCertMaterial() {
        this._certMaterial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certMaterialInput() {
        return this._certMaterial;
    }
    // cert_path - computed: false, optional: true, required: false
    _certPath;
    get certPath() {
        return this._certPath;
    }
    set certPath(value) {
        this._certPath = value;
    }
    resetCertPath() {
        this._certPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certPathInput() {
        return this._certPath;
    }
    // context - computed: false, optional: true, required: false
    _context;
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    resetContext() {
        this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contextInput() {
        return this._context;
    }
    // disable_docker_daemon_check - computed: false, optional: true, required: false
    _disableDockerDaemonCheck;
    get disableDockerDaemonCheck() {
        return this._disableDockerDaemonCheck;
    }
    set disableDockerDaemonCheck(value) {
        this._disableDockerDaemonCheck = value;
    }
    resetDisableDockerDaemonCheck() {
        this._disableDockerDaemonCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableDockerDaemonCheckInput() {
        return this._disableDockerDaemonCheck;
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this._host;
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // key_material - computed: false, optional: true, required: false
    _keyMaterial;
    get keyMaterial() {
        return this._keyMaterial;
    }
    set keyMaterial(value) {
        this._keyMaterial = value;
    }
    resetKeyMaterial() {
        this._keyMaterial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyMaterialInput() {
        return this._keyMaterial;
    }
    // ssh_opts - computed: false, optional: true, required: false
    _sshOpts;
    get sshOpts() {
        return this._sshOpts;
    }
    set sshOpts(value) {
        this._sshOpts = value;
    }
    resetSshOpts() {
        this._sshOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshOptsInput() {
        return this._sshOpts;
    }
    // alias - computed: false, optional: true, required: false
    _alias;
    get alias() {
        return this._alias;
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // registry_auth - computed: false, optional: true, required: false
    _registryAuth;
    get registryAuth() {
        return this._registryAuth;
    }
    set registryAuth(value) {
        this._registryAuth = value;
    }
    resetRegistryAuth() {
        this._registryAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registryAuthInput() {
        return this._registryAuth;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
