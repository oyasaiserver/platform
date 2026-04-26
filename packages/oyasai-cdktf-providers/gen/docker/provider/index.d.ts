import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DockerProviderConfig {
    /**
    * PEM-encoded content of Docker host CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#ca_material DockerProvider#ca_material}
    */
    readonly caMaterial?: string;
    /**
    * PEM-encoded content of Docker client certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#cert_material DockerProvider#cert_material}
    */
    readonly certMaterial?: string;
    /**
    * Path to directory with Docker TLS config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#cert_path DockerProvider#cert_path}
    */
    readonly certPath?: string;
    /**
    * The name of the Docker context to use. Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#context DockerProvider#context}
    */
    readonly context?: string;
    /**
    * If set to `true`, the provider will not check if the Docker daemon is running. This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}
    */
    readonly disableDockerDaemonCheck?: boolean | cdktf.IResolvable;
    /**
    * The Docker daemon address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#host DockerProvider#host}
    */
    readonly host?: string;
    /**
    * PEM-encoded content of Docker client private key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#key_material DockerProvider#key_material}
    */
    readonly keyMaterial?: string;
    /**
    * Additional SSH option flags to be appended when using `ssh://` protocol
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#ssh_opts DockerProvider#ssh_opts}
    */
    readonly sshOpts?: string[];
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#alias DockerProvider#alias}
    */
    readonly alias?: string;
    /**
    * registry_auth block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#registry_auth DockerProvider#registry_auth}
    */
    readonly registryAuth?: DockerProviderRegistryAuth[] | cdktf.IResolvable;
}
export interface DockerProviderRegistryAuth {
    /**
    * Address of the registry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#address DockerProvider#address}
    */
    readonly address: string;
    /**
    * Setting this to `true` will tell the provider that this registry does not need authentication. Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#auth_disabled DockerProvider#auth_disabled}
    */
    readonly authDisabled?: boolean | cdktf.IResolvable;
    /**
    * Path to docker json file for registry auth. Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` env variable is set, the value of `DOCKER_CONFIG` is used as the path. `DOCKER_CONFIG` can be set to a directory (as per Docker CLI) or a file path directly. `config_file` has precedence over all other options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#config_file DockerProvider#config_file}
    */
    readonly configFile?: string;
    /**
    * Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#config_file_content DockerProvider#config_file_content}
    */
    readonly configFileContent?: string;
    /**
    * Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#password DockerProvider#password}
    */
    readonly password?: string;
    /**
    * Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#username DockerProvider#username}
    */
    readonly username?: string;
}
export declare function dockerProviderRegistryAuthToTerraform(struct?: DockerProviderRegistryAuth | cdktf.IResolvable): any;
export declare function dockerProviderRegistryAuthToHclTerraform(struct?: DockerProviderRegistryAuth | cdktf.IResolvable): any;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs docker}
*/
export declare class DockerProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType = "docker";
    /**
    * Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DockerProvider to import
    * @param importFromId The id of the existing DockerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DockerProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs docker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DockerProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DockerProviderConfig);
    private _caMaterial?;
    get caMaterial(): string | undefined;
    set caMaterial(value: string | undefined);
    resetCaMaterial(): void;
    get caMaterialInput(): string;
    private _certMaterial?;
    get certMaterial(): string | undefined;
    set certMaterial(value: string | undefined);
    resetCertMaterial(): void;
    get certMaterialInput(): string;
    private _certPath?;
    get certPath(): string | undefined;
    set certPath(value: string | undefined);
    resetCertPath(): void;
    get certPathInput(): string;
    private _context?;
    get context(): string | undefined;
    set context(value: string | undefined);
    resetContext(): void;
    get contextInput(): string;
    private _disableDockerDaemonCheck?;
    get disableDockerDaemonCheck(): boolean | cdktf.IResolvable | undefined;
    set disableDockerDaemonCheck(value: boolean | cdktf.IResolvable | undefined);
    resetDisableDockerDaemonCheck(): void;
    get disableDockerDaemonCheckInput(): any;
    private _host?;
    get host(): string | undefined;
    set host(value: string | undefined);
    resetHost(): void;
    get hostInput(): string;
    private _keyMaterial?;
    get keyMaterial(): string | undefined;
    set keyMaterial(value: string | undefined);
    resetKeyMaterial(): void;
    get keyMaterialInput(): string;
    private _sshOpts?;
    get sshOpts(): string[] | undefined;
    set sshOpts(value: string[] | undefined);
    resetSshOpts(): void;
    get sshOptsInput(): string[];
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string;
    private _registryAuth?;
    get registryAuth(): DockerProviderRegistryAuth[] | cdktf.IResolvable | undefined;
    set registryAuth(value: DockerProviderRegistryAuth[] | cdktf.IResolvable | undefined);
    resetRegistryAuth(): void;
    get registryAuthInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
