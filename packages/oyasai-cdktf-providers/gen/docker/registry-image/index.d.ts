import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RegistryImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#id RegistryImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#insecure_skip_verify RegistryImage#insecure_skip_verify}
    */
    readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
    /**
    * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#keep_remotely RegistryImage#keep_remotely}
    */
    readonly keepRemotely?: boolean | cdktf.IResolvable;
    /**
    * The name of the Docker image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#name RegistryImage#name}
    */
    readonly name: string;
    /**
    * A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced. This can be used to repush a local image
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#triggers RegistryImage#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
    * auth_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#auth_config RegistryImage#auth_config}
    */
    readonly authConfig?: RegistryImageAuthConfig;
    /**
    * build block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#build RegistryImage#build}
    */
    readonly buildAttribute?: RegistryImageBuild;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#timeouts RegistryImage#timeouts}
    */
    readonly timeouts?: RegistryImageTimeouts;
}
export interface RegistryImageAuthConfig {
    /**
    * The address of the Docker registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#address RegistryImage#address}
    */
    readonly address: string;
    /**
    * The password for the Docker registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#password RegistryImage#password}
    */
    readonly password?: string;
    /**
    * The username for the Docker registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#username RegistryImage#username}
    */
    readonly username?: string;
}
export declare function registryImageAuthConfigToTerraform(struct?: RegistryImageAuthConfigOutputReference | RegistryImageAuthConfig): any;
export declare function registryImageAuthConfigToHclTerraform(struct?: RegistryImageAuthConfigOutputReference | RegistryImageAuthConfig): any;
export declare class RegistryImageAuthConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RegistryImageAuthConfig | undefined;
    set internalValue(value: RegistryImageAuthConfig | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
}
export interface RegistryImageBuildAuthConfig {
    /**
    * the auth token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#auth RegistryImage#auth}
    */
    readonly auth?: string;
    /**
    * the user emal
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#email RegistryImage#email}
    */
    readonly email?: string;
    /**
    * hostname of the registry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#host_name RegistryImage#host_name}
    */
    readonly hostName: string;
    /**
    * the identity token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#identity_token RegistryImage#identity_token}
    */
    readonly identityToken?: string;
    /**
    * the registry password
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#password RegistryImage#password}
    */
    readonly password?: string;
    /**
    * the registry token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#registry_token RegistryImage#registry_token}
    */
    readonly registryToken?: string;
    /**
    * the server address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#server_address RegistryImage#server_address}
    */
    readonly serverAddress?: string;
    /**
    * the registry user name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#user_name RegistryImage#user_name}
    */
    readonly userName?: string;
}
export declare function registryImageBuildAuthConfigToTerraform(struct?: RegistryImageBuildAuthConfig | cdktf.IResolvable): any;
export declare function registryImageBuildAuthConfigToHclTerraform(struct?: RegistryImageBuildAuthConfig | cdktf.IResolvable): any;
export declare class RegistryImageBuildAuthConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RegistryImageBuildAuthConfig | cdktf.IResolvable | undefined;
    set internalValue(value: RegistryImageBuildAuthConfig | cdktf.IResolvable | undefined);
    private _auth?;
    get auth(): string;
    set auth(value: string);
    resetAuth(): void;
    get authInput(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string;
    private _hostName?;
    get hostName(): string;
    set hostName(value: string);
    get hostNameInput(): string;
    private _identityToken?;
    get identityToken(): string;
    set identityToken(value: string);
    resetIdentityToken(): void;
    get identityTokenInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _registryToken?;
    get registryToken(): string;
    set registryToken(value: string);
    resetRegistryToken(): void;
    get registryTokenInput(): string;
    private _serverAddress?;
    get serverAddress(): string;
    set serverAddress(value: string);
    resetServerAddress(): void;
    get serverAddressInput(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string;
}
export declare class RegistryImageBuildAuthConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RegistryImageBuildAuthConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RegistryImageBuildAuthConfigOutputReference;
}
export interface RegistryImageBuildSecrets {
    /**
    * Environment variable source of the secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#env RegistryImage#env}
    */
    readonly env?: string;
    /**
    * ID of the secret. By default, secrets are mounted to /run/secrets/<id>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#id RegistryImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * File source of the secret. Takes precedence over `env`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#src RegistryImage#src}
    */
    readonly src?: string;
}
export declare function registryImageBuildSecretsToTerraform(struct?: RegistryImageBuildSecrets | cdktf.IResolvable): any;
export declare function registryImageBuildSecretsToHclTerraform(struct?: RegistryImageBuildSecrets | cdktf.IResolvable): any;
export declare class RegistryImageBuildSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RegistryImageBuildSecrets | cdktf.IResolvable | undefined;
    set internalValue(value: RegistryImageBuildSecrets | cdktf.IResolvable | undefined);
    private _env?;
    get env(): string;
    set env(value: string);
    resetEnv(): void;
    get envInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _src?;
    get src(): string;
    set src(value: string);
    resetSrc(): void;
    get srcInput(): string;
}
export declare class RegistryImageBuildSecretsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RegistryImageBuildSecrets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RegistryImageBuildSecretsOutputReference;
}
export interface RegistryImageBuildUlimit {
    /**
    * soft limit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#hard RegistryImage#hard}
    */
    readonly hard: number;
    /**
    * type of ulimit, e.g. `nofile`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#name RegistryImage#name}
    */
    readonly name: string;
    /**
    * hard limit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#soft RegistryImage#soft}
    */
    readonly soft: number;
}
export declare function registryImageBuildUlimitToTerraform(struct?: RegistryImageBuildUlimit | cdktf.IResolvable): any;
export declare function registryImageBuildUlimitToHclTerraform(struct?: RegistryImageBuildUlimit | cdktf.IResolvable): any;
export declare class RegistryImageBuildUlimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RegistryImageBuildUlimit | cdktf.IResolvable | undefined;
    set internalValue(value: RegistryImageBuildUlimit | cdktf.IResolvable | undefined);
    private _hard?;
    get hard(): number;
    set hard(value: number);
    get hardInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _soft?;
    get soft(): number;
    set soft(value: number);
    get softInput(): number;
}
export declare class RegistryImageBuildUlimitList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RegistryImageBuildUlimit[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RegistryImageBuildUlimitOutputReference;
}
export interface RegistryImageBuild {
    /**
    * A list of additional build contexts. Only supported when using a buildx builder. Example: `["name=path", "src = https://example.org"}`. Please see https://docs.docker.com/reference/cli/docker/buildx/build/#build-context for more information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#additional_contexts RegistryImage#additional_contexts}
    */
    readonly additionalContexts?: string[];
    /**
    * Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#build_args RegistryImage#build_args}
    */
    readonly buildArgs?: {
        [key: string]: string;
    };
    /**
    * BuildID is an optional identifier that can be passed together with the build request. The same identifier can be used to gracefully cancel the build with the cancel request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#build_id RegistryImage#build_id}
    */
    readonly buildId?: string;
    /**
    * Path to a file where the buildx log are written to. Only available when `builder` is set. If not set, no logs are available. The path is taken as is, so make sure to use a path that is available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#build_log_file RegistryImage#build_log_file}
    */
    readonly buildLogFile?: string;
    /**
    * The name of the buildx builder to use. If BUILDX_BUILDER environment variable is set, it will be used. If left empty, the provider tries to resolve to the default builder - which might not always work. If you are in Windows, the legacy builder is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#builder RegistryImage#builder}
    */
    readonly builder?: string;
    /**
    * External cache sources (e.g., `user/app:cache`, `type=local,src=path/to/dir`). Only supported when using a buildx builder.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cache_from RegistryImage#cache_from}
    */
    readonly cacheFrom?: string[];
    /**
    * Cache export destinations (e.g., `user/app:cache`, `type=local,dest=path/to/dir`). Only supported when using a buildx builder.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cache_to RegistryImage#cache_to}
    */
    readonly cacheTo?: string[];
    /**
    * Optional parent cgroup for the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cgroup_parent RegistryImage#cgroup_parent}
    */
    readonly cgroupParent?: string;
    /**
    * Value to specify the build context. Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. This always refers to the local working directory, even when building images on remote hosts. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#context RegistryImage#context}
    */
    readonly context: string;
    /**
    * The length of a CPU period in microseconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cpu_period RegistryImage#cpu_period}
    */
    readonly cpuPeriod?: number;
    /**
    * Microseconds of CPU time that the container can get in a CPU period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cpu_quota RegistryImage#cpu_quota}
    */
    readonly cpuQuota?: number;
    /**
    * CPUs in which to allow execution (e.g., `0-3`, `0`, `1`)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cpu_set_cpus RegistryImage#cpu_set_cpus}
    */
    readonly cpuSetCpus?: string;
    /**
    * MEMs in which to allow execution (`0-3`, `0`, `1`)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cpu_set_mems RegistryImage#cpu_set_mems}
    */
    readonly cpuSetMems?: string;
    /**
    * CPU shares (relative weight)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#cpu_shares RegistryImage#cpu_shares}
    */
    readonly cpuShares?: number;
    /**
    * Name of the Dockerfile. Defaults to `Dockerfile`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#dockerfile RegistryImage#dockerfile}
    */
    readonly dockerfile?: string;
    /**
    * A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#extra_hosts RegistryImage#extra_hosts}
    */
    readonly extraHosts?: string[];
    /**
    * Always remove intermediate containers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#force_remove RegistryImage#force_remove}
    */
    readonly forceRemove?: boolean | cdktf.IResolvable;
    /**
    * Isolation represents the isolation technology of a container. The supported values are
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#isolation RegistryImage#isolation}
    */
    readonly isolation?: string;
    /**
    * Set metadata for an image
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#label RegistryImage#label}
    */
    readonly label?: {
        [key: string]: string;
    };
    /**
    * User-defined key/value metadata
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#labels RegistryImage#labels}
    */
    readonly labels?: {
        [key: string]: string;
    };
    /**
    * Set memory limit for build
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#memory RegistryImage#memory}
    */
    readonly memory?: number;
    /**
    * Total memory (memory + swap), -1 to enable unlimited swap
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#memory_swap RegistryImage#memory_swap}
    */
    readonly memorySwap?: number;
    /**
    * Set the networking mode for the RUN instructions during build
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#network_mode RegistryImage#network_mode}
    */
    readonly networkMode?: string;
    /**
    * Do not use the cache when building the image
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#no_cache RegistryImage#no_cache}
    */
    readonly noCache?: boolean | cdktf.IResolvable;
    /**
    * Set the target platform for the build. Defaults to `GOOS/GOARCH`. For more information see the [docker documentation](https://github.com/docker/buildx/blob/master/docs/reference/buildx.md#-set-the-target-platforms-for-the-build---platform)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#platform RegistryImage#platform}
    */
    readonly platform?: string;
    /**
    * Attempt to pull the image even if an older image exists locally
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#pull_parent RegistryImage#pull_parent}
    */
    readonly pullParent?: boolean | cdktf.IResolvable;
    /**
    * A Git repository URI or HTTP/HTTPS context URI. Will be ignored if `builder` is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#remote_context RegistryImage#remote_context}
    */
    readonly remoteContext?: string;
    /**
    * Remove intermediate containers after a successful build. Defaults to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#remove RegistryImage#remove}
    */
    readonly remove?: boolean | cdktf.IResolvable;
    /**
    * The security options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#security_opt RegistryImage#security_opt}
    */
    readonly securityOpt?: string[];
    /**
    * Set an ID for the build session
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#session_id RegistryImage#session_id}
    */
    readonly sessionId?: string;
    /**
    * Size of /dev/shm in bytes. The size must be greater than 0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#shm_size RegistryImage#shm_size}
    */
    readonly shmSize?: number;
    /**
    * If true the new layers are squashed into a new image with a single new layer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#squash RegistryImage#squash}
    */
    readonly squash?: boolean | cdktf.IResolvable;
    /**
    * Suppress the build output and print image ID on success
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#suppress_output RegistryImage#suppress_output}
    */
    readonly suppressOutput?: boolean | cdktf.IResolvable;
    /**
    * Name and optionally a tag in the 'name:tag' format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#tag RegistryImage#tag}
    */
    readonly tag?: string[];
    /**
    * Set the target build stage to build
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#target RegistryImage#target}
    */
    readonly target?: string;
    /**
    * Force using the legacy Docker builder for image builds, even if buildx/buildkit would be available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#use_legacy_builder RegistryImage#use_legacy_builder}
    */
    readonly useLegacyBuilder?: boolean | cdktf.IResolvable;
    /**
    * Version of the underlying builder to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#version RegistryImage#version}
    */
    readonly version?: string;
    /**
    * auth_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#auth_config RegistryImage#auth_config}
    */
    readonly authConfig?: RegistryImageBuildAuthConfig[] | cdktf.IResolvable;
    /**
    * secrets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#secrets RegistryImage#secrets}
    */
    readonly secrets?: RegistryImageBuildSecrets[] | cdktf.IResolvable;
    /**
    * ulimit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#ulimit RegistryImage#ulimit}
    */
    readonly ulimit?: RegistryImageBuildUlimit[] | cdktf.IResolvable;
}
export declare function registryImageBuildToTerraform(struct?: RegistryImageBuildOutputReference | RegistryImageBuild): any;
export declare function registryImageBuildToHclTerraform(struct?: RegistryImageBuildOutputReference | RegistryImageBuild): any;
export declare class RegistryImageBuildOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RegistryImageBuild | undefined;
    set internalValue(value: RegistryImageBuild | undefined);
    private _additionalContexts?;
    get additionalContexts(): string[];
    set additionalContexts(value: string[]);
    resetAdditionalContexts(): void;
    get additionalContextsInput(): string[];
    private _buildArgs?;
    get buildArgs(): {
        [key: string]: string;
    };
    set buildArgs(value: {
        [key: string]: string;
    });
    resetBuildArgs(): void;
    get buildArgsInput(): {
        [key: string]: string;
    };
    private _buildId?;
    get buildId(): string;
    set buildId(value: string);
    resetBuildId(): void;
    get buildIdInput(): string;
    private _buildLogFile?;
    get buildLogFile(): string;
    set buildLogFile(value: string);
    resetBuildLogFile(): void;
    get buildLogFileInput(): string;
    private _builder?;
    get builder(): string;
    set builder(value: string);
    resetBuilder(): void;
    get builderInput(): string;
    private _cacheFrom?;
    get cacheFrom(): string[];
    set cacheFrom(value: string[]);
    resetCacheFrom(): void;
    get cacheFromInput(): string[];
    private _cacheTo?;
    get cacheTo(): string[];
    set cacheTo(value: string[]);
    resetCacheTo(): void;
    get cacheToInput(): string[];
    private _cgroupParent?;
    get cgroupParent(): string;
    set cgroupParent(value: string);
    resetCgroupParent(): void;
    get cgroupParentInput(): string;
    private _context?;
    get context(): string;
    set context(value: string);
    get contextInput(): string;
    private _cpuPeriod?;
    get cpuPeriod(): number;
    set cpuPeriod(value: number);
    resetCpuPeriod(): void;
    get cpuPeriodInput(): number;
    private _cpuQuota?;
    get cpuQuota(): number;
    set cpuQuota(value: number);
    resetCpuQuota(): void;
    get cpuQuotaInput(): number;
    private _cpuSetCpus?;
    get cpuSetCpus(): string;
    set cpuSetCpus(value: string);
    resetCpuSetCpus(): void;
    get cpuSetCpusInput(): string;
    private _cpuSetMems?;
    get cpuSetMems(): string;
    set cpuSetMems(value: string);
    resetCpuSetMems(): void;
    get cpuSetMemsInput(): string;
    private _cpuShares?;
    get cpuShares(): number;
    set cpuShares(value: number);
    resetCpuShares(): void;
    get cpuSharesInput(): number;
    private _dockerfile?;
    get dockerfile(): string;
    set dockerfile(value: string);
    resetDockerfile(): void;
    get dockerfileInput(): string;
    private _extraHosts?;
    get extraHosts(): string[];
    set extraHosts(value: string[]);
    resetExtraHosts(): void;
    get extraHostsInput(): string[];
    private _forceRemove?;
    get forceRemove(): boolean | cdktf.IResolvable;
    set forceRemove(value: boolean | cdktf.IResolvable);
    resetForceRemove(): void;
    get forceRemoveInput(): any;
    private _isolation?;
    get isolation(): string;
    set isolation(value: string);
    resetIsolation(): void;
    get isolationInput(): string;
    private _label?;
    get label(): {
        [key: string]: string;
    };
    set label(value: {
        [key: string]: string;
    });
    resetLabel(): void;
    get labelInput(): {
        [key: string]: string;
    };
    private _labels?;
    get labels(): {
        [key: string]: string;
    };
    set labels(value: {
        [key: string]: string;
    });
    resetLabels(): void;
    get labelsInput(): {
        [key: string]: string;
    };
    private _memory?;
    get memory(): number;
    set memory(value: number);
    resetMemory(): void;
    get memoryInput(): number;
    private _memorySwap?;
    get memorySwap(): number;
    set memorySwap(value: number);
    resetMemorySwap(): void;
    get memorySwapInput(): number;
    private _networkMode?;
    get networkMode(): string;
    set networkMode(value: string);
    resetNetworkMode(): void;
    get networkModeInput(): string;
    private _noCache?;
    get noCache(): boolean | cdktf.IResolvable;
    set noCache(value: boolean | cdktf.IResolvable);
    resetNoCache(): void;
    get noCacheInput(): any;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string;
    private _pullParent?;
    get pullParent(): boolean | cdktf.IResolvable;
    set pullParent(value: boolean | cdktf.IResolvable);
    resetPullParent(): void;
    get pullParentInput(): any;
    private _remoteContext?;
    get remoteContext(): string;
    set remoteContext(value: string);
    resetRemoteContext(): void;
    get remoteContextInput(): string;
    private _remove?;
    get remove(): boolean | cdktf.IResolvable;
    set remove(value: boolean | cdktf.IResolvable);
    resetRemove(): void;
    get removeInput(): any;
    private _securityOpt?;
    get securityOpt(): string[];
    set securityOpt(value: string[]);
    resetSecurityOpt(): void;
    get securityOptInput(): string[];
    private _sessionId?;
    get sessionId(): string;
    set sessionId(value: string);
    resetSessionId(): void;
    get sessionIdInput(): string;
    private _shmSize?;
    get shmSize(): number;
    set shmSize(value: number);
    resetShmSize(): void;
    get shmSizeInput(): number;
    private _squash?;
    get squash(): boolean | cdktf.IResolvable;
    set squash(value: boolean | cdktf.IResolvable);
    resetSquash(): void;
    get squashInput(): any;
    private _suppressOutput?;
    get suppressOutput(): boolean | cdktf.IResolvable;
    set suppressOutput(value: boolean | cdktf.IResolvable);
    resetSuppressOutput(): void;
    get suppressOutputInput(): any;
    private _tag?;
    get tag(): string[];
    set tag(value: string[]);
    resetTag(): void;
    get tagInput(): string[];
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _useLegacyBuilder?;
    get useLegacyBuilder(): boolean | cdktf.IResolvable;
    set useLegacyBuilder(value: boolean | cdktf.IResolvable);
    resetUseLegacyBuilder(): void;
    get useLegacyBuilderInput(): any;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _authConfig;
    get authConfig(): RegistryImageBuildAuthConfigList;
    putAuthConfig(value: RegistryImageBuildAuthConfig[] | cdktf.IResolvable): void;
    resetAuthConfig(): void;
    get authConfigInput(): any;
    private _secrets;
    get secrets(): RegistryImageBuildSecretsList;
    putSecrets(value: RegistryImageBuildSecrets[] | cdktf.IResolvable): void;
    resetSecrets(): void;
    get secretsInput(): any;
    private _ulimit;
    get ulimit(): RegistryImageBuildUlimitList;
    putUlimit(value: RegistryImageBuildUlimit[] | cdktf.IResolvable): void;
    resetUlimit(): void;
    get ulimitInput(): any;
}
export interface RegistryImageTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#create RegistryImage#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#delete RegistryImage#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#update RegistryImage#update}
    */
    readonly update?: string;
}
export declare function registryImageTimeoutsToTerraform(struct?: RegistryImageTimeouts | cdktf.IResolvable): any;
export declare function registryImageTimeoutsToHclTerraform(struct?: RegistryImageTimeouts | cdktf.IResolvable): any;
export declare class RegistryImageTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RegistryImageTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RegistryImageTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image docker_registry_image}
*/
export declare class RegistryImage extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_registry_image";
    /**
    * Generates CDKTF code for importing a RegistryImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegistryImage to import
    * @param importFromId The id of the existing RegistryImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegistryImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image docker_registry_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegistryImageConfig
    */
    constructor(scope: Construct, id: string, config: RegistryImageConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _insecureSkipVerify?;
    get insecureSkipVerify(): boolean | cdktf.IResolvable;
    set insecureSkipVerify(value: boolean | cdktf.IResolvable);
    resetInsecureSkipVerify(): void;
    get insecureSkipVerifyInput(): any;
    private _keepRemotely?;
    get keepRemotely(): boolean | cdktf.IResolvable;
    set keepRemotely(value: boolean | cdktf.IResolvable);
    resetKeepRemotely(): void;
    get keepRemotelyInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get sha256Digest(): any;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    };
    private _authConfig;
    get authConfig(): RegistryImageAuthConfigOutputReference;
    putAuthConfig(value: RegistryImageAuthConfig): void;
    resetAuthConfig(): void;
    get authConfigInput(): RegistryImageAuthConfig;
    private _build;
    get buildAttribute(): RegistryImageBuildOutputReference;
    putBuildAttribute(value: RegistryImageBuild): void;
    resetBuildAttribute(): void;
    get buildAttributeInput(): RegistryImageBuild;
    private _timeouts;
    get timeouts(): RegistryImageTimeoutsOutputReference;
    putTimeouts(value: RegistryImageTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
