import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ContainerConfig extends cdktf.TerraformMetaArguments {
    /**
    * If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#attach Container#attach}
    */
    readonly attach?: boolean | cdktf.IResolvable;
    /**
    * Optional parent cgroup for the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cgroup_parent Container#cgroup_parent}
    */
    readonly cgroupParent?: string;
    /**
    * Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cgroupns_mode Container#cgroupns_mode}
    */
    readonly cgroupnsMode?: string;
    /**
    * The command to use to start the container. For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.conf"]`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#command Container#command}
    */
    readonly command?: string[];
    /**
    * The total number of milliseconds to wait for the container to reach status 'running'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}
    */
    readonly containerReadRefreshTimeoutMilliseconds?: number;
    /**
    * Specify the CPU CFS scheduler period (in microseconds), which is used alongside `cpu-quota`. Is ignored if `cpus` is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cpu_period Container#cpu_period}
    */
    readonly cpuPeriod?: number;
    /**
    * Impose a CPU CFS quota on the container (in microseconds). The number of microseconds per `cpu-period` that the container is limited to before throttled. Is ignored if `cpus` is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cpu_quota Container#cpu_quota}
    */
    readonly cpuQuota?: number;
    /**
    * A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cpu_set Container#cpu_set}
    */
    readonly cpuSet?: string;
    /**
    * CPU shares (relative weight) for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cpu_shares Container#cpu_shares}
    */
    readonly cpuShares?: number;
    /**
    * Specify how much of the available CPU resources a container can use. e.g a value of 1.5 means the container is guaranteed at most one and a half of the CPUs. Has precedence over `cpu_period` and `cpu_quota`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#cpus Container#cpus}
    */
    readonly cpus?: string;
    /**
    * If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}
    */
    readonly destroyGraceSeconds?: number;
    /**
    * DNS servers to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#dns Container#dns}
    */
    readonly dns?: string[];
    /**
    * DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#dns_opts Container#dns_opts}
    */
    readonly dnsOpts?: string[];
    /**
    * DNS search domains that are used when bare unqualified hostnames are used inside of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#dns_search Container#dns_search}
    */
    readonly dnsSearch?: string[];
    /**
    * Domain name of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#domainname Container#domainname}
    */
    readonly domainname?: string;
    /**
    * The command to use as the Entrypoint for the container. The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogram"]`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#entrypoint Container#entrypoint}
    */
    readonly entrypoint?: string[];
    /**
    * Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#env Container#env}
    */
    readonly env?: string[];
    /**
    * GPU devices to add to the container. Supported values are `all` or `device=<id[,id...]>`, for example `device=0,2` or `device=GPU-3a23c669-1f69-c64e-cf85-44e9b07e7a2a`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#gpus Container#gpus}
    */
    readonly gpus?: string;
    /**
    * Additional groups for the container user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#group_add Container#group_add}
    */
    readonly groupAdd?: string[];
    /**
    * Hostname of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#hostname Container#hostname}
    */
    readonly hostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#id Container#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The ID of the image to back this container. The easiest way to get this value is to use the `image_id` attribute of the `docker_image` resource as is shown in the example.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#image Container#image}
    */
    readonly image: string;
    /**
    * Configured whether an init process should be injected for this container. If unset this will default to the `dockerd` defaults.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#init Container#init}
    */
    readonly init?: boolean | cdktf.IResolvable;
    /**
    * IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ipc_mode Container#ipc_mode}
    */
    readonly ipcMode?: string;
    /**
    * The logging driver to use for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#log_driver Container#log_driver}
    */
    readonly logDriver?: string;
    /**
    * Key/value pairs to use as options for the logging driver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#log_opts Container#log_opts}
    */
    readonly logOpts?: {
        [key: string]: string;
    };
    /**
    * Save the container logs (`attach` must be enabled). Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#logs Container#logs}
    */
    readonly logs?: boolean | cdktf.IResolvable;
    /**
    * The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#max_retry_count Container#max_retry_count}
    */
    readonly maxRetryCount?: number;
    /**
    * The memory limit for the container in MBs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#memory Container#memory}
    */
    readonly memory?: number;
    /**
    * The memory-resveration for the container in MBs. Defaults to 0. Allows you to specify a soft limit smaller than `memory` which is activated when Docker detects contention or low memory on the host machine. If you use `memory-reservation`, it must be set lower than `memory` for it to take precedence. Because it is a soft limit, it doesn't guarantee that the container doesn't exceed the limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#memory_reservation Container#memory_reservation}
    */
    readonly memoryReservation?: number;
    /**
    * The total memory limit (memory + swap) for the container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#memory_swap Container#memory_swap}
    */
    readonly memorySwap?: number;
    /**
    * If `true`, then the Docker container will be kept running. If `false`, Terraform leaves the container alone. This attribute is also used to trigger a restart of a stopped container. If your container is stopped, Terraform will set `must_run` to `false` and this will trigger a change. Defaults to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#must_run Container#must_run}
    */
    readonly mustRun?: boolean | cdktf.IResolvable;
    /**
    * The name of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#name Container#name}
    */
    readonly name: string;
    /**
    * Network mode of the container. Defaults to `bridge`. If your host OS is any other OS, you need to set this value explicitly, e.g. `nat` when your container will be running on an Windows host. See https://docs.docker.com/engine/network/ for more information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#network_mode Container#network_mode}
    */
    readonly networkMode?: string;
    /**
    * The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#pid_mode Container#pid_mode}
    */
    readonly pidMode?: string;
    /**
    * Platform in the format `os[/arch[/variant]]` used for image lookup and container runtime, for example `linux/amd64`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#platform Container#platform}
    */
    readonly platform?: string;
    /**
    * If `true`, the container runs in privileged mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#privileged Container#privileged}
    */
    readonly privileged?: boolean | cdktf.IResolvable;
    /**
    * Publish all ports of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#publish_all_ports Container#publish_all_ports}
    */
    readonly publishAllPorts?: boolean | cdktf.IResolvable;
    /**
    * If `true`, the container will be started as readonly. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#read_only Container#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#remove_volumes Container#remove_volumes}
    */
    readonly removeVolumes?: boolean | cdktf.IResolvable;
    /**
    * The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#restart Container#restart}
    */
    readonly restart?: string;
    /**
    * If `true`, then the container will be automatically removed when it exits. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#rm Container#rm}
    */
    readonly rm?: boolean | cdktf.IResolvable;
    /**
    * Runtime to use for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#runtime Container#runtime}
    */
    readonly runtime?: string;
    /**
    * List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#security_opts Container#security_opts}
    */
    readonly securityOpts?: string[];
    /**
    * Size of `/dev/shm` in MBs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#shm_size Container#shm_size}
    */
    readonly shmSize?: number;
    /**
    * If `true`, then the Docker container will be started after creation. If `false`, then the container is only created. Defaults to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#start Container#start}
    */
    readonly start?: boolean | cdktf.IResolvable;
    /**
    * If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#stdin_open Container#stdin_open}
    */
    readonly stdinOpen?: boolean | cdktf.IResolvable;
    /**
    * Signal to stop a container (default `SIGTERM`).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#stop_signal Container#stop_signal}
    */
    readonly stopSignal?: string;
    /**
    * Timeout (in seconds) to stop a container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#stop_timeout Container#stop_timeout}
    */
    readonly stopTimeout?: number;
    /**
    * Key/value pairs for the storage driver options, e.g. `size`: `120G`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#storage_opts Container#storage_opts}
    */
    readonly storageOpts?: {
        [key: string]: string;
    };
    /**
    * A map of kernel parameters (sysctls) to set in the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#sysctls Container#sysctls}
    */
    readonly sysctls?: {
        [key: string]: string;
    };
    /**
    * A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#tmpfs Container#tmpfs}
    */
    readonly tmpfs?: {
        [key: string]: string;
    };
    /**
    * If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#tty Container#tty}
    */
    readonly tty?: boolean | cdktf.IResolvable;
    /**
    * User used for run the first process. Format is `user` or `user:group` which user and group can be passed literally or by name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#user Container#user}
    */
    readonly user?: string;
    /**
    * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#userns_mode Container#userns_mode}
    */
    readonly usernsMode?: string;
    /**
    * If `true`, then the Docker container is waited for being healthy state after creation. This requires your container to have a healthcheck, otherwise this provider will error. If `false`, then the container health state is not checked. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#wait Container#wait}
    */
    readonly wait?: boolean | cdktf.IResolvable;
    /**
    * The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#wait_timeout Container#wait_timeout}
    */
    readonly waitTimeout?: number;
    /**
    * The working directory for commands to run in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#working_dir Container#working_dir}
    */
    readonly workingDir?: string;
    /**
    * capabilities block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#capabilities Container#capabilities}
    */
    readonly capabilities?: ContainerCapabilities;
    /**
    * device_read_bps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#device_read_bps Container#device_read_bps}
    */
    readonly deviceReadBps?: ContainerDeviceReadBps[] | cdktf.IResolvable;
    /**
    * device_read_iops block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#device_read_iops Container#device_read_iops}
    */
    readonly deviceReadIops?: ContainerDeviceReadIops[] | cdktf.IResolvable;
    /**
    * device_requests block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#device_requests Container#device_requests}
    */
    readonly deviceRequests?: ContainerDeviceRequests[] | cdktf.IResolvable;
    /**
    * device_write_bps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#device_write_bps Container#device_write_bps}
    */
    readonly deviceWriteBps?: ContainerDeviceWriteBps[] | cdktf.IResolvable;
    /**
    * device_write_iops block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#device_write_iops Container#device_write_iops}
    */
    readonly deviceWriteIops?: ContainerDeviceWriteIops[] | cdktf.IResolvable;
    /**
    * devices block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#devices Container#devices}
    */
    readonly devices?: ContainerDevices[] | cdktf.IResolvable;
    /**
    * healthcheck block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#healthcheck Container#healthcheck}
    */
    readonly healthcheck?: ContainerHealthcheck;
    /**
    * host block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#host Container#host}
    */
    readonly host?: ContainerHost[] | cdktf.IResolvable;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#labels Container#labels}
    */
    readonly labels?: ContainerLabels[] | cdktf.IResolvable;
    /**
    * mounts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#mounts Container#mounts}
    */
    readonly mounts?: ContainerMounts[] | cdktf.IResolvable;
    /**
    * networks_advanced block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#networks_advanced Container#networks_advanced}
    */
    readonly networksAdvanced?: ContainerNetworksAdvanced[] | cdktf.IResolvable;
    /**
    * ports block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ports Container#ports}
    */
    readonly ports?: ContainerPorts[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#timeouts Container#timeouts}
    */
    readonly timeouts?: ContainerTimeouts;
    /**
    * ulimit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ulimit Container#ulimit}
    */
    readonly ulimit?: ContainerUlimit[] | cdktf.IResolvable;
    /**
    * upload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#upload Container#upload}
    */
    readonly upload?: ContainerUpload[] | cdktf.IResolvable;
    /**
    * volumes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#volumes Container#volumes}
    */
    readonly volumes?: ContainerVolumes[] | cdktf.IResolvable;
}
export interface ContainerNetworkData {
}
export declare function containerNetworkDataToTerraform(struct?: ContainerNetworkData): any;
export declare function containerNetworkDataToHclTerraform(struct?: ContainerNetworkData): any;
export declare class ContainerNetworkDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerNetworkData | undefined;
    set internalValue(value: ContainerNetworkData | undefined);
    get gateway(): any;
    get globalIpv6Address(): any;
    get globalIpv6PrefixLength(): any;
    get ipAddress(): any;
    get ipPrefixLength(): any;
    get ipv6Gateway(): any;
    get macAddress(): any;
    get networkName(): any;
}
export declare class ContainerNetworkDataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerNetworkDataOutputReference;
}
export interface ContainerCapabilities {
    /**
    * List of linux capabilities to add.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#add Container#add}
    */
    readonly add?: string[];
    /**
    * List of linux capabilities to drop.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#drop Container#drop}
    */
    readonly drop?: string[];
}
export declare function containerCapabilitiesToTerraform(struct?: ContainerCapabilitiesOutputReference | ContainerCapabilities): any;
export declare function containerCapabilitiesToHclTerraform(struct?: ContainerCapabilitiesOutputReference | ContainerCapabilities): any;
export declare class ContainerCapabilitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ContainerCapabilities | undefined;
    set internalValue(value: ContainerCapabilities | undefined);
    private _add?;
    get add(): string[];
    set add(value: string[]);
    resetAdd(): void;
    get addInput(): string[];
    private _drop?;
    get drop(): string[];
    set drop(value: string[]);
    resetDrop(): void;
    get dropInput(): string[];
}
export interface ContainerDeviceReadBps {
    /**
    * The device path on the host, e.g. `/dev/sda`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#path Container#path}
    */
    readonly path: string;
    /**
    * The read rate limit in bytes per second.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#rate Container#rate}
    */
    readonly rate: number;
}
export declare function containerDeviceReadBpsToTerraform(struct?: ContainerDeviceReadBps | cdktf.IResolvable): any;
export declare function containerDeviceReadBpsToHclTerraform(struct?: ContainerDeviceReadBps | cdktf.IResolvable): any;
export declare class ContainerDeviceReadBpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerDeviceReadBps | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerDeviceReadBps | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _rate?;
    get rate(): number;
    set rate(value: number);
    get rateInput(): number;
}
export declare class ContainerDeviceReadBpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerDeviceReadBps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerDeviceReadBpsOutputReference;
}
export interface ContainerDeviceReadIops {
    /**
    * The device path on the host, e.g. `/dev/sda`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#path Container#path}
    */
    readonly path: string;
    /**
    * The read IOPS limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#rate Container#rate}
    */
    readonly rate: number;
}
export declare function containerDeviceReadIopsToTerraform(struct?: ContainerDeviceReadIops | cdktf.IResolvable): any;
export declare function containerDeviceReadIopsToHclTerraform(struct?: ContainerDeviceReadIops | cdktf.IResolvable): any;
export declare class ContainerDeviceReadIopsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerDeviceReadIops | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerDeviceReadIops | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _rate?;
    get rate(): number;
    set rate(value: number);
    get rateInput(): number;
}
export declare class ContainerDeviceReadIopsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerDeviceReadIops[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerDeviceReadIopsOutputReference;
}
export interface ContainerDeviceRequests {
    /**
    * List of device capabilities. Only used with `nvidia` driver (e.g., `gpu`, `compute`, `utility`).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#capabilities Container#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Number of devices to request. Use -1 for all devices. Only used with `nvidia` driver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#count Container#count}
    */
    readonly count?: number;
    /**
    * List of device IDs or CDI device identifiers (e.g., `nvidia.com/gpu=all`).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#device_ids Container#device_ids}
    */
    readonly deviceIds?: string[];
    /**
    * The device driver to use. Common values: `cdi` for CDI devices, `nvidia` for NVIDIA GPU requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#driver Container#driver}
    */
    readonly driver?: string;
    /**
    * Driver-specific options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#options Container#options}
    */
    readonly options?: {
        [key: string]: string;
    };
}
export declare function containerDeviceRequestsToTerraform(struct?: ContainerDeviceRequests | cdktf.IResolvable): any;
export declare function containerDeviceRequestsToHclTerraform(struct?: ContainerDeviceRequests | cdktf.IResolvable): any;
export declare class ContainerDeviceRequestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerDeviceRequests | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerDeviceRequests | cdktf.IResolvable | undefined);
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[];
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number;
    private _deviceIds?;
    get deviceIds(): string[];
    set deviceIds(value: string[]);
    resetDeviceIds(): void;
    get deviceIdsInput(): string[];
    private _driver?;
    get driver(): string;
    set driver(value: string);
    resetDriver(): void;
    get driverInput(): string;
    private _options?;
    get options(): {
        [key: string]: string;
    };
    set options(value: {
        [key: string]: string;
    });
    resetOptions(): void;
    get optionsInput(): {
        [key: string]: string;
    };
}
export declare class ContainerDeviceRequestsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerDeviceRequests[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerDeviceRequestsOutputReference;
}
export interface ContainerDeviceWriteBps {
    /**
    * The device path on the host, e.g. `/dev/sda`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#path Container#path}
    */
    readonly path: string;
    /**
    * The write rate limit in bytes per second.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#rate Container#rate}
    */
    readonly rate: number;
}
export declare function containerDeviceWriteBpsToTerraform(struct?: ContainerDeviceWriteBps | cdktf.IResolvable): any;
export declare function containerDeviceWriteBpsToHclTerraform(struct?: ContainerDeviceWriteBps | cdktf.IResolvable): any;
export declare class ContainerDeviceWriteBpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerDeviceWriteBps | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerDeviceWriteBps | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _rate?;
    get rate(): number;
    set rate(value: number);
    get rateInput(): number;
}
export declare class ContainerDeviceWriteBpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerDeviceWriteBps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerDeviceWriteBpsOutputReference;
}
export interface ContainerDeviceWriteIops {
    /**
    * The device path on the host, e.g. `/dev/sda`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#path Container#path}
    */
    readonly path: string;
    /**
    * The write IOPS limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#rate Container#rate}
    */
    readonly rate: number;
}
export declare function containerDeviceWriteIopsToTerraform(struct?: ContainerDeviceWriteIops | cdktf.IResolvable): any;
export declare function containerDeviceWriteIopsToHclTerraform(struct?: ContainerDeviceWriteIops | cdktf.IResolvable): any;
export declare class ContainerDeviceWriteIopsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerDeviceWriteIops | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerDeviceWriteIops | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _rate?;
    get rate(): number;
    set rate(value: number);
    get rateInput(): number;
}
export declare class ContainerDeviceWriteIopsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerDeviceWriteIops[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerDeviceWriteIopsOutputReference;
}
export interface ContainerDevices {
    /**
    * The path in the container where the device will be bound. If not set, it defaults to the value of `host_path`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#container_path Container#container_path}
    */
    readonly containerPath?: string;
    /**
    * The path on the host where the device is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#host_path Container#host_path}
    */
    readonly hostPath: string;
    /**
    * The cgroup permissions given to the container to access the device. Defaults to `rwm`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#permissions Container#permissions}
    */
    readonly permissions?: string;
}
export declare function containerDevicesToTerraform(struct?: ContainerDevices | cdktf.IResolvable): any;
export declare function containerDevicesToHclTerraform(struct?: ContainerDevices | cdktf.IResolvable): any;
export declare class ContainerDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerDevices | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerDevices | cdktf.IResolvable | undefined);
    private _containerPath?;
    get containerPath(): string;
    set containerPath(value: string);
    resetContainerPath(): void;
    get containerPathInput(): string;
    private _hostPath?;
    get hostPath(): string;
    set hostPath(value: string);
    get hostPathInput(): string;
    private _permissions?;
    get permissions(): string;
    set permissions(value: string);
    resetPermissions(): void;
    get permissionsInput(): string;
}
export declare class ContainerDevicesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerDevices[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerDevicesOutputReference;
}
export interface ContainerHealthcheck {
    /**
    * Time between running the check (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#interval Container#interval}
    */
    readonly interval?: string;
    /**
    * Consecutive failures needed to report unhealthy. Defaults to `0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#retries Container#retries}
    */
    readonly retries?: number;
    /**
    * Interval before the healthcheck starts (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#start_interval Container#start_interval}
    */
    readonly startInterval?: string;
    /**
    * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#start_period Container#start_period}
    */
    readonly startPeriod?: string;
    /**
    * Command to run to check health. For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`. It works in the same way, and has the same default values, as the HEALTHCHECK Dockerfile instruction set by the service's Docker image. Your Compose file can override the values set in the Dockerfile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#test Container#test}
    */
    readonly test?: string[];
    /**
    * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#timeout Container#timeout}
    */
    readonly timeout?: string;
}
export declare function containerHealthcheckToTerraform(struct?: ContainerHealthcheckOutputReference | ContainerHealthcheck): any;
export declare function containerHealthcheckToHclTerraform(struct?: ContainerHealthcheckOutputReference | ContainerHealthcheck): any;
export declare class ContainerHealthcheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ContainerHealthcheck | undefined;
    set internalValue(value: ContainerHealthcheck | undefined);
    private _interval?;
    get interval(): string;
    set interval(value: string);
    resetInterval(): void;
    get intervalInput(): string;
    private _retries?;
    get retries(): number;
    set retries(value: number);
    resetRetries(): void;
    get retriesInput(): number;
    private _startInterval?;
    get startInterval(): string;
    set startInterval(value: string);
    resetStartInterval(): void;
    get startIntervalInput(): string;
    private _startPeriod?;
    get startPeriod(): string;
    set startPeriod(value: string);
    resetStartPeriod(): void;
    get startPeriodInput(): string;
    private _test?;
    get test(): string[];
    set test(value: string[]);
    resetTest(): void;
    get testInput(): string[];
    private _timeout?;
    get timeout(): string;
    set timeout(value: string);
    resetTimeout(): void;
    get timeoutInput(): string;
}
export interface ContainerHost {
    /**
    * Hostname to add
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#host Container#host}
    */
    readonly host: string;
    /**
    * IP address this hostname should resolve to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ip Container#ip}
    */
    readonly ip: string;
}
export declare function containerHostToTerraform(struct?: ContainerHost | cdktf.IResolvable): any;
export declare function containerHostToHclTerraform(struct?: ContainerHost | cdktf.IResolvable): any;
export declare class ContainerHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerHost | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerHost | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export declare class ContainerHostList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerHost[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerHostOutputReference;
}
export interface ContainerLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#label Container#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#value Container#value}
    */
    readonly value: string;
}
export declare function containerLabelsToTerraform(struct?: ContainerLabels | cdktf.IResolvable): any;
export declare function containerLabelsToHclTerraform(struct?: ContainerLabels | cdktf.IResolvable): any;
export declare class ContainerLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerLabels | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class ContainerLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerLabelsOutputReference;
}
export interface ContainerMountsBindOptions {
    /**
    * A propagation mode with the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#propagation Container#propagation}
    */
    readonly propagation?: string;
}
export declare function containerMountsBindOptionsToTerraform(struct?: ContainerMountsBindOptionsOutputReference | ContainerMountsBindOptions): any;
export declare function containerMountsBindOptionsToHclTerraform(struct?: ContainerMountsBindOptionsOutputReference | ContainerMountsBindOptions): any;
export declare class ContainerMountsBindOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ContainerMountsBindOptions | undefined;
    set internalValue(value: ContainerMountsBindOptions | undefined);
    private _propagation?;
    get propagation(): string;
    set propagation(value: string);
    resetPropagation(): void;
    get propagationInput(): string;
}
export interface ContainerMountsTmpfsOptions {
    /**
    * The permission mode for the tmpfs mount in an integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#mode Container#mode}
    */
    readonly mode?: number;
    /**
    * The size for the tmpfs mount in bytes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#size_bytes Container#size_bytes}
    */
    readonly sizeBytes?: number;
}
export declare function containerMountsTmpfsOptionsToTerraform(struct?: ContainerMountsTmpfsOptionsOutputReference | ContainerMountsTmpfsOptions): any;
export declare function containerMountsTmpfsOptionsToHclTerraform(struct?: ContainerMountsTmpfsOptionsOutputReference | ContainerMountsTmpfsOptions): any;
export declare class ContainerMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ContainerMountsTmpfsOptions | undefined;
    set internalValue(value: ContainerMountsTmpfsOptions | undefined);
    private _mode?;
    get mode(): number;
    set mode(value: number);
    resetMode(): void;
    get modeInput(): number;
    private _sizeBytes?;
    get sizeBytes(): number;
    set sizeBytes(value: number);
    resetSizeBytes(): void;
    get sizeBytesInput(): number;
}
export interface ContainerMountsVolumeOptionsLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#label Container#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#value Container#value}
    */
    readonly value: string;
}
export declare function containerMountsVolumeOptionsLabelsToTerraform(struct?: ContainerMountsVolumeOptionsLabels | cdktf.IResolvable): any;
export declare function containerMountsVolumeOptionsLabelsToHclTerraform(struct?: ContainerMountsVolumeOptionsLabels | cdktf.IResolvable): any;
export declare class ContainerMountsVolumeOptionsLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerMountsVolumeOptionsLabels | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerMountsVolumeOptionsLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class ContainerMountsVolumeOptionsLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerMountsVolumeOptionsLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerMountsVolumeOptionsLabelsOutputReference;
}
export interface ContainerMountsVolumeOptions {
    /**
    * Name of the driver to use to create the volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#driver_name Container#driver_name}
    */
    readonly driverName?: string;
    /**
    * key/value map of driver specific options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#driver_options Container#driver_options}
    */
    readonly driverOptions?: {
        [key: string]: string;
    };
    /**
    * Populate volume with data from the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#no_copy Container#no_copy}
    */
    readonly noCopy?: boolean | cdktf.IResolvable;
    /**
    * Path within the volume to mount. Requires docker server version 1.45 or higher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#subpath Container#subpath}
    */
    readonly subpath?: string;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#labels Container#labels}
    */
    readonly labels?: ContainerMountsVolumeOptionsLabels[] | cdktf.IResolvable;
}
export declare function containerMountsVolumeOptionsToTerraform(struct?: ContainerMountsVolumeOptionsOutputReference | ContainerMountsVolumeOptions): any;
export declare function containerMountsVolumeOptionsToHclTerraform(struct?: ContainerMountsVolumeOptionsOutputReference | ContainerMountsVolumeOptions): any;
export declare class ContainerMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ContainerMountsVolumeOptions | undefined;
    set internalValue(value: ContainerMountsVolumeOptions | undefined);
    private _driverName?;
    get driverName(): string;
    set driverName(value: string);
    resetDriverName(): void;
    get driverNameInput(): string;
    private _driverOptions?;
    get driverOptions(): {
        [key: string]: string;
    };
    set driverOptions(value: {
        [key: string]: string;
    });
    resetDriverOptions(): void;
    get driverOptionsInput(): {
        [key: string]: string;
    };
    private _noCopy?;
    get noCopy(): boolean | cdktf.IResolvable;
    set noCopy(value: boolean | cdktf.IResolvable);
    resetNoCopy(): void;
    get noCopyInput(): any;
    private _subpath?;
    get subpath(): string;
    set subpath(value: string);
    resetSubpath(): void;
    get subpathInput(): string;
    private _labels;
    get labels(): ContainerMountsVolumeOptionsLabelsList;
    putLabels(value: ContainerMountsVolumeOptionsLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
}
export interface ContainerMounts {
    /**
    * Whether the mount should be read-only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#read_only Container#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Mount source (e.g. a volume name, a host path).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#source Container#source}
    */
    readonly source?: string;
    /**
    * Container path
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#target Container#target}
    */
    readonly target: string;
    /**
    * The mount type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#type Container#type}
    */
    readonly type: string;
    /**
    * bind_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#bind_options Container#bind_options}
    */
    readonly bindOptions?: ContainerMountsBindOptions;
    /**
    * tmpfs_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#tmpfs_options Container#tmpfs_options}
    */
    readonly tmpfsOptions?: ContainerMountsTmpfsOptions;
    /**
    * volume_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#volume_options Container#volume_options}
    */
    readonly volumeOptions?: ContainerMountsVolumeOptions;
}
export declare function containerMountsToTerraform(struct?: ContainerMounts | cdktf.IResolvable): any;
export declare function containerMountsToHclTerraform(struct?: ContainerMounts | cdktf.IResolvable): any;
export declare class ContainerMountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerMounts | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerMounts | cdktf.IResolvable | undefined);
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): any;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _bindOptions;
    get bindOptions(): ContainerMountsBindOptionsOutputReference;
    putBindOptions(value: ContainerMountsBindOptions): void;
    resetBindOptions(): void;
    get bindOptionsInput(): ContainerMountsBindOptions;
    private _tmpfsOptions;
    get tmpfsOptions(): ContainerMountsTmpfsOptionsOutputReference;
    putTmpfsOptions(value: ContainerMountsTmpfsOptions): void;
    resetTmpfsOptions(): void;
    get tmpfsOptionsInput(): ContainerMountsTmpfsOptions;
    private _volumeOptions;
    get volumeOptions(): ContainerMountsVolumeOptionsOutputReference;
    putVolumeOptions(value: ContainerMountsVolumeOptions): void;
    resetVolumeOptions(): void;
    get volumeOptionsInput(): ContainerMountsVolumeOptions;
}
export declare class ContainerMountsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerMounts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerMountsOutputReference;
}
export interface ContainerNetworksAdvanced {
    /**
    * The network aliases of the container in the specific network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#aliases Container#aliases}
    */
    readonly aliases?: string[];
    /**
    * An array of driver options for the network endpoint, e.g. `opts1=value`. This is the equivalent to repeating `--driver-opt` for `docker run`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#driver_opts Container#driver_opts}
    */
    readonly driverOpts?: string[];
    /**
    * Gateway priority for this endpoint. The endpoint with the highest priority will provide the default gateway for the container. This is the equivalent to `--gw-priority` for `docker run`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#gw_priority Container#gw_priority}
    */
    readonly gwPriority?: number;
    /**
    * The IPV4 address of the container in the specific network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ipv4_address Container#ipv4_address}
    */
    readonly ipv4Address?: string;
    /**
    * The IPV6 address of the container in the specific network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ipv6_address Container#ipv6_address}
    */
    readonly ipv6Address?: string;
    /**
    * The link-local IPs of the container in the specific network. This is the equivalent to repeating `--link-local-ip` for `docker run`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#link_local_ips Container#link_local_ips}
    */
    readonly linkLocalIps?: string[];
    /**
    * The MAC address of the container in the specific network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#mac_address Container#mac_address}
    */
    readonly macAddress?: string;
    /**
    * The name or id of the network to use. You can use `name` or `id` attribute from a `docker_network` resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#name Container#name}
    */
    readonly name: string;
}
export declare function containerNetworksAdvancedToTerraform(struct?: ContainerNetworksAdvanced | cdktf.IResolvable): any;
export declare function containerNetworksAdvancedToHclTerraform(struct?: ContainerNetworksAdvanced | cdktf.IResolvable): any;
export declare class ContainerNetworksAdvancedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerNetworksAdvanced | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerNetworksAdvanced | cdktf.IResolvable | undefined);
    private _aliases?;
    get aliases(): string[];
    set aliases(value: string[]);
    resetAliases(): void;
    get aliasesInput(): string[];
    private _driverOpts?;
    get driverOpts(): string[];
    set driverOpts(value: string[]);
    resetDriverOpts(): void;
    get driverOptsInput(): string[];
    private _gwPriority?;
    get gwPriority(): number;
    set gwPriority(value: number);
    resetGwPriority(): void;
    get gwPriorityInput(): number;
    private _ipv4Address?;
    get ipv4Address(): string;
    set ipv4Address(value: string);
    resetIpv4Address(): void;
    get ipv4AddressInput(): string;
    private _ipv6Address?;
    get ipv6Address(): string;
    set ipv6Address(value: string);
    resetIpv6Address(): void;
    get ipv6AddressInput(): string;
    private _linkLocalIps?;
    get linkLocalIps(): string[];
    set linkLocalIps(value: string[]);
    resetLinkLocalIps(): void;
    get linkLocalIpsInput(): string[];
    private _macAddress?;
    get macAddress(): string;
    set macAddress(value: string);
    resetMacAddress(): void;
    get macAddressInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class ContainerNetworksAdvancedList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerNetworksAdvanced[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerNetworksAdvancedOutputReference;
}
export interface ContainerPorts {
    /**
    * Port exposed out of the container. If not given a free random port `>= 32768` will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#external Container#external}
    */
    readonly external?: number;
    /**
    * Port within the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#internal Container#internal}
    */
    readonly internal: number;
    /**
    * IP address/mask that can access this port. Defaults to `0.0.0.0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#ip Container#ip}
    */
    readonly ip?: string;
    /**
    * Protocol that can be used over this port. Defaults to `tcp`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#protocol Container#protocol}
    */
    readonly protocol?: string;
}
export declare function containerPortsToTerraform(struct?: ContainerPorts | cdktf.IResolvable): any;
export declare function containerPortsToHclTerraform(struct?: ContainerPorts | cdktf.IResolvable): any;
export declare class ContainerPortsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerPorts | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerPorts | cdktf.IResolvable | undefined);
    private _external?;
    get external(): number;
    set external(value: number);
    resetExternal(): void;
    get externalInput(): number;
    private _internal?;
    get internal(): number;
    set internal(value: number);
    get internalInput(): number;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
}
export declare class ContainerPortsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerPorts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerPortsOutputReference;
}
export interface ContainerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#create Container#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#delete Container#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#update Container#update}
    */
    readonly update?: string;
}
export declare function containerTimeoutsToTerraform(struct?: ContainerTimeouts | cdktf.IResolvable): any;
export declare function containerTimeoutsToHclTerraform(struct?: ContainerTimeouts | cdktf.IResolvable): any;
export declare class ContainerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ContainerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerTimeouts | cdktf.IResolvable | undefined);
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
export interface ContainerUlimit {
    /**
    * The hard limit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#hard Container#hard}
    */
    readonly hard: number;
    /**
    * The name of the ulimit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#name Container#name}
    */
    readonly name: string;
    /**
    * The soft limit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#soft Container#soft}
    */
    readonly soft: number;
}
export declare function containerUlimitToTerraform(struct?: ContainerUlimit | cdktf.IResolvable): any;
export declare function containerUlimitToHclTerraform(struct?: ContainerUlimit | cdktf.IResolvable): any;
export declare class ContainerUlimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerUlimit | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerUlimit | cdktf.IResolvable | undefined);
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
export declare class ContainerUlimitList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerUlimit[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerUlimitOutputReference;
}
export interface ContainerUpload {
    /**
    * Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. Conflicts with `content_base64` & `source`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#content Container#content}
    */
    readonly content?: string;
    /**
    * Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#content_base64 Container#content_base64}
    */
    readonly contentBase64?: string;
    /**
    * If `true`, the file will be uploaded with user executable permission. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#executable Container#executable}
    */
    readonly executable?: boolean | cdktf.IResolvable;
    /**
    * Path to the file in the container where is upload goes to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#file Container#file}
    */
    readonly file: string;
    /**
    * The permission mode for the file in the container. Has precedence over `executable`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#permissions Container#permissions}
    */
    readonly permissions?: string;
    /**
    * A filename that references a file which will be uploaded as the object content. This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#source Container#source}
    */
    readonly source?: string;
    /**
    * If using `source`, this will force an update if the file content has updated but the filename has not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#source_hash Container#source_hash}
    */
    readonly sourceHash?: string;
}
export declare function containerUploadToTerraform(struct?: ContainerUpload | cdktf.IResolvable): any;
export declare function containerUploadToHclTerraform(struct?: ContainerUpload | cdktf.IResolvable): any;
export declare class ContainerUploadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerUpload | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerUpload | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    private _contentBase64?;
    get contentBase64(): string;
    set contentBase64(value: string);
    resetContentBase64(): void;
    get contentBase64Input(): string;
    private _executable?;
    get executable(): boolean | cdktf.IResolvable;
    set executable(value: boolean | cdktf.IResolvable);
    resetExecutable(): void;
    get executableInput(): any;
    private _file?;
    get file(): string;
    set file(value: string);
    get fileInput(): string;
    private _permissions?;
    get permissions(): string;
    set permissions(value: string);
    resetPermissions(): void;
    get permissionsInput(): string;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
    private _sourceHash?;
    get sourceHash(): string;
    set sourceHash(value: string);
    resetSourceHash(): void;
    get sourceHashInput(): string;
}
export declare class ContainerUploadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerUpload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerUploadOutputReference;
}
export interface ContainerVolumes {
    /**
    * The path in the container where the volume will be mounted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#container_path Container#container_path}
    */
    readonly containerPath?: string;
    /**
    * The container where the volume is coming from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#from_container Container#from_container}
    */
    readonly fromContainer?: string;
    /**
    * The path on the host where the volume is coming from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#host_path Container#host_path}
    */
    readonly hostPath?: string;
    /**
    * If `true`, this volume will be readonly. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#read_only Container#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * SELinux relabel mode for bind mounts. Supported values are `z` and `Z`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#selinux_relabel Container#selinux_relabel}
    */
    readonly selinuxRelabel?: string;
    /**
    * The name of the docker volume which should be mounted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#volume_name Container#volume_name}
    */
    readonly volumeName?: string;
}
export declare function containerVolumesToTerraform(struct?: ContainerVolumes | cdktf.IResolvable): any;
export declare function containerVolumesToHclTerraform(struct?: ContainerVolumes | cdktf.IResolvable): any;
export declare class ContainerVolumesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContainerVolumes | cdktf.IResolvable | undefined;
    set internalValue(value: ContainerVolumes | cdktf.IResolvable | undefined);
    private _containerPath?;
    get containerPath(): string;
    set containerPath(value: string);
    resetContainerPath(): void;
    get containerPathInput(): string;
    private _fromContainer?;
    get fromContainer(): string;
    set fromContainer(value: string);
    resetFromContainer(): void;
    get fromContainerInput(): string;
    private _hostPath?;
    get hostPath(): string;
    set hostPath(value: string);
    resetHostPath(): void;
    get hostPathInput(): string;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): any;
    private _selinuxRelabel?;
    get selinuxRelabel(): string;
    set selinuxRelabel(value: string);
    resetSelinuxRelabel(): void;
    get selinuxRelabelInput(): string;
    private _volumeName?;
    get volumeName(): string;
    set volumeName(value: string);
    resetVolumeName(): void;
    get volumeNameInput(): string;
}
export declare class ContainerVolumesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContainerVolumes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContainerVolumesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container docker_container}
*/
export declare class Container extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_container";
    /**
    * Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Container to import
    * @param importFromId The id of the existing Container that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Container to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container docker_container} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContainerConfig
    */
    constructor(scope: Construct, id: string, config: ContainerConfig);
    private _attach?;
    get attach(): boolean | cdktf.IResolvable;
    set attach(value: boolean | cdktf.IResolvable);
    resetAttach(): void;
    get attachInput(): any;
    get bridge(): any;
    private _cgroupParent?;
    get cgroupParent(): string;
    set cgroupParent(value: string);
    resetCgroupParent(): void;
    get cgroupParentInput(): string;
    private _cgroupnsMode?;
    get cgroupnsMode(): string;
    set cgroupnsMode(value: string);
    resetCgroupnsMode(): void;
    get cgroupnsModeInput(): string;
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[];
    get containerLogs(): any;
    private _containerReadRefreshTimeoutMilliseconds?;
    get containerReadRefreshTimeoutMilliseconds(): number;
    set containerReadRefreshTimeoutMilliseconds(value: number);
    resetContainerReadRefreshTimeoutMilliseconds(): void;
    get containerReadRefreshTimeoutMillisecondsInput(): number;
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
    private _cpuSet?;
    get cpuSet(): string;
    set cpuSet(value: string);
    resetCpuSet(): void;
    get cpuSetInput(): string;
    private _cpuShares?;
    get cpuShares(): number;
    set cpuShares(value: number);
    resetCpuShares(): void;
    get cpuSharesInput(): number;
    private _cpus?;
    get cpus(): string;
    set cpus(value: string);
    resetCpus(): void;
    get cpusInput(): string;
    private _destroyGraceSeconds?;
    get destroyGraceSeconds(): number;
    set destroyGraceSeconds(value: number);
    resetDestroyGraceSeconds(): void;
    get destroyGraceSecondsInput(): number;
    private _dns?;
    get dns(): string[];
    set dns(value: string[]);
    resetDns(): void;
    get dnsInput(): string[];
    private _dnsOpts?;
    get dnsOpts(): string[];
    set dnsOpts(value: string[]);
    resetDnsOpts(): void;
    get dnsOptsInput(): string[];
    private _dnsSearch?;
    get dnsSearch(): string[];
    set dnsSearch(value: string[]);
    resetDnsSearch(): void;
    get dnsSearchInput(): string[];
    private _domainname?;
    get domainname(): string;
    set domainname(value: string);
    resetDomainname(): void;
    get domainnameInput(): string;
    private _entrypoint?;
    get entrypoint(): string[];
    set entrypoint(value: string[]);
    resetEntrypoint(): void;
    get entrypointInput(): string[];
    private _env?;
    get env(): string[];
    set env(value: string[]);
    resetEnv(): void;
    get envInput(): string[];
    get exitCode(): any;
    private _gpus?;
    get gpus(): string;
    set gpus(value: string);
    resetGpus(): void;
    get gpusInput(): string;
    private _groupAdd?;
    get groupAdd(): string[];
    set groupAdd(value: string[]);
    resetGroupAdd(): void;
    get groupAddInput(): string[];
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string;
    private _init?;
    get init(): boolean | cdktf.IResolvable;
    set init(value: boolean | cdktf.IResolvable);
    resetInit(): void;
    get initInput(): any;
    private _ipcMode?;
    get ipcMode(): string;
    set ipcMode(value: string);
    resetIpcMode(): void;
    get ipcModeInput(): string;
    private _logDriver?;
    get logDriver(): string;
    set logDriver(value: string);
    resetLogDriver(): void;
    get logDriverInput(): string;
    private _logOpts?;
    get logOpts(): {
        [key: string]: string;
    };
    set logOpts(value: {
        [key: string]: string;
    });
    resetLogOpts(): void;
    get logOptsInput(): {
        [key: string]: string;
    };
    private _logs?;
    get logs(): boolean | cdktf.IResolvable;
    set logs(value: boolean | cdktf.IResolvable);
    resetLogs(): void;
    get logsInput(): any;
    private _maxRetryCount?;
    get maxRetryCount(): number;
    set maxRetryCount(value: number);
    resetMaxRetryCount(): void;
    get maxRetryCountInput(): number;
    private _memory?;
    get memory(): number;
    set memory(value: number);
    resetMemory(): void;
    get memoryInput(): number;
    private _memoryReservation?;
    get memoryReservation(): number;
    set memoryReservation(value: number);
    resetMemoryReservation(): void;
    get memoryReservationInput(): number;
    private _memorySwap?;
    get memorySwap(): number;
    set memorySwap(value: number);
    resetMemorySwap(): void;
    get memorySwapInput(): number;
    private _mustRun?;
    get mustRun(): boolean | cdktf.IResolvable;
    set mustRun(value: boolean | cdktf.IResolvable);
    resetMustRun(): void;
    get mustRunInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _networkData;
    get networkData(): ContainerNetworkDataList;
    private _networkMode?;
    get networkMode(): string;
    set networkMode(value: string);
    resetNetworkMode(): void;
    get networkModeInput(): string;
    private _pidMode?;
    get pidMode(): string;
    set pidMode(value: string);
    resetPidMode(): void;
    get pidModeInput(): string;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string;
    private _privileged?;
    get privileged(): boolean | cdktf.IResolvable;
    set privileged(value: boolean | cdktf.IResolvable);
    resetPrivileged(): void;
    get privilegedInput(): any;
    private _publishAllPorts?;
    get publishAllPorts(): boolean | cdktf.IResolvable;
    set publishAllPorts(value: boolean | cdktf.IResolvable);
    resetPublishAllPorts(): void;
    get publishAllPortsInput(): any;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): any;
    private _removeVolumes?;
    get removeVolumes(): boolean | cdktf.IResolvable;
    set removeVolumes(value: boolean | cdktf.IResolvable);
    resetRemoveVolumes(): void;
    get removeVolumesInput(): any;
    private _restart?;
    get restart(): string;
    set restart(value: string);
    resetRestart(): void;
    get restartInput(): string;
    private _rm?;
    get rm(): boolean | cdktf.IResolvable;
    set rm(value: boolean | cdktf.IResolvable);
    resetRm(): void;
    get rmInput(): any;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string;
    private _securityOpts?;
    get securityOpts(): string[];
    set securityOpts(value: string[]);
    resetSecurityOpts(): void;
    get securityOptsInput(): string[];
    private _shmSize?;
    get shmSize(): number;
    set shmSize(value: number);
    resetShmSize(): void;
    get shmSizeInput(): number;
    private _start?;
    get start(): boolean | cdktf.IResolvable;
    set start(value: boolean | cdktf.IResolvable);
    resetStart(): void;
    get startInput(): any;
    private _stdinOpen?;
    get stdinOpen(): boolean | cdktf.IResolvable;
    set stdinOpen(value: boolean | cdktf.IResolvable);
    resetStdinOpen(): void;
    get stdinOpenInput(): any;
    private _stopSignal?;
    get stopSignal(): string;
    set stopSignal(value: string);
    resetStopSignal(): void;
    get stopSignalInput(): string;
    private _stopTimeout?;
    get stopTimeout(): number;
    set stopTimeout(value: number);
    resetStopTimeout(): void;
    get stopTimeoutInput(): number;
    private _storageOpts?;
    get storageOpts(): {
        [key: string]: string;
    };
    set storageOpts(value: {
        [key: string]: string;
    });
    resetStorageOpts(): void;
    get storageOptsInput(): {
        [key: string]: string;
    };
    private _sysctls?;
    get sysctls(): {
        [key: string]: string;
    };
    set sysctls(value: {
        [key: string]: string;
    });
    resetSysctls(): void;
    get sysctlsInput(): {
        [key: string]: string;
    };
    private _tmpfs?;
    get tmpfs(): {
        [key: string]: string;
    };
    set tmpfs(value: {
        [key: string]: string;
    });
    resetTmpfs(): void;
    get tmpfsInput(): {
        [key: string]: string;
    };
    private _tty?;
    get tty(): boolean | cdktf.IResolvable;
    set tty(value: boolean | cdktf.IResolvable);
    resetTty(): void;
    get ttyInput(): any;
    private _user?;
    get user(): string;
    set user(value: string);
    resetUser(): void;
    get userInput(): string;
    private _usernsMode?;
    get usernsMode(): string;
    set usernsMode(value: string);
    resetUsernsMode(): void;
    get usernsModeInput(): string;
    private _wait?;
    get wait(): boolean | cdktf.IResolvable;
    set wait(value: boolean | cdktf.IResolvable);
    resetWait(): void;
    get waitInput(): any;
    private _waitTimeout?;
    get waitTimeout(): number;
    set waitTimeout(value: number);
    resetWaitTimeout(): void;
    get waitTimeoutInput(): number;
    private _workingDir?;
    get workingDir(): string;
    set workingDir(value: string);
    resetWorkingDir(): void;
    get workingDirInput(): string;
    private _capabilities;
    get capabilities(): ContainerCapabilitiesOutputReference;
    putCapabilities(value: ContainerCapabilities): void;
    resetCapabilities(): void;
    get capabilitiesInput(): ContainerCapabilities;
    private _deviceReadBps;
    get deviceReadBps(): ContainerDeviceReadBpsList;
    putDeviceReadBps(value: ContainerDeviceReadBps[] | cdktf.IResolvable): void;
    resetDeviceReadBps(): void;
    get deviceReadBpsInput(): any;
    private _deviceReadIops;
    get deviceReadIops(): ContainerDeviceReadIopsList;
    putDeviceReadIops(value: ContainerDeviceReadIops[] | cdktf.IResolvable): void;
    resetDeviceReadIops(): void;
    get deviceReadIopsInput(): any;
    private _deviceRequests;
    get deviceRequests(): ContainerDeviceRequestsList;
    putDeviceRequests(value: ContainerDeviceRequests[] | cdktf.IResolvable): void;
    resetDeviceRequests(): void;
    get deviceRequestsInput(): any;
    private _deviceWriteBps;
    get deviceWriteBps(): ContainerDeviceWriteBpsList;
    putDeviceWriteBps(value: ContainerDeviceWriteBps[] | cdktf.IResolvable): void;
    resetDeviceWriteBps(): void;
    get deviceWriteBpsInput(): any;
    private _deviceWriteIops;
    get deviceWriteIops(): ContainerDeviceWriteIopsList;
    putDeviceWriteIops(value: ContainerDeviceWriteIops[] | cdktf.IResolvable): void;
    resetDeviceWriteIops(): void;
    get deviceWriteIopsInput(): any;
    private _devices;
    get devices(): ContainerDevicesList;
    putDevices(value: ContainerDevices[] | cdktf.IResolvable): void;
    resetDevices(): void;
    get devicesInput(): any;
    private _healthcheck;
    get healthcheck(): ContainerHealthcheckOutputReference;
    putHealthcheck(value: ContainerHealthcheck): void;
    resetHealthcheck(): void;
    get healthcheckInput(): ContainerHealthcheck;
    private _host;
    get host(): ContainerHostList;
    putHost(value: ContainerHost[] | cdktf.IResolvable): void;
    resetHost(): void;
    get hostInput(): any;
    private _labels;
    get labels(): ContainerLabelsList;
    putLabels(value: ContainerLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
    private _mounts;
    get mounts(): ContainerMountsList;
    putMounts(value: ContainerMounts[] | cdktf.IResolvable): void;
    resetMounts(): void;
    get mountsInput(): any;
    private _networksAdvanced;
    get networksAdvanced(): ContainerNetworksAdvancedList;
    putNetworksAdvanced(value: ContainerNetworksAdvanced[] | cdktf.IResolvable): void;
    resetNetworksAdvanced(): void;
    get networksAdvancedInput(): any;
    private _ports;
    get ports(): ContainerPortsList;
    putPorts(value: ContainerPorts[] | cdktf.IResolvable): void;
    resetPorts(): void;
    get portsInput(): any;
    private _timeouts;
    get timeouts(): ContainerTimeoutsOutputReference;
    putTimeouts(value: ContainerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): any;
    private _ulimit;
    get ulimit(): ContainerUlimitList;
    putUlimit(value: ContainerUlimit[] | cdktf.IResolvable): void;
    resetUlimit(): void;
    get ulimitInput(): any;
    private _upload;
    get upload(): ContainerUploadList;
    putUpload(value: ContainerUpload[] | cdktf.IResolvable): void;
    resetUpload(): void;
    get uploadInput(): any;
    private _volumes;
    get volumes(): ContainerVolumesList;
    putVolumes(value: ContainerVolumes[] | cdktf.IResolvable): void;
    resetVolumes(): void;
    get volumesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
