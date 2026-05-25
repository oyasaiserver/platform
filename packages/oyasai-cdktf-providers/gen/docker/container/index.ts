// https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#attach Container#attach}
  */
  readonly attach?: boolean | cdktf.IResolvable;
  /**
  * Optional parent cgroup for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cgroup_parent Container#cgroup_parent}
  */
  readonly cgroupParent?: string;
  /**
  * Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cgroupns_mode Container#cgroupns_mode}
  */
  readonly cgroupnsMode?: string;
  /**
  * The command to use to start the container. For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.conf"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#command Container#command}
  */
  readonly command?: string[];
  /**
  * The total number of milliseconds to wait for the container to reach status 'running'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}
  */
  readonly containerReadRefreshTimeoutMilliseconds?: number;
  /**
  * Specify the CPU CFS scheduler period (in microseconds), which is used alongside `cpu-quota`. Is ignored if `cpus` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cpu_period Container#cpu_period}
  */
  readonly cpuPeriod?: number;
  /**
  * Impose a CPU CFS quota on the container (in microseconds). The number of microseconds per `cpu-period` that the container is limited to before throttled. Is ignored if `cpus` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cpu_quota Container#cpu_quota}
  */
  readonly cpuQuota?: number;
  /**
  * A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cpu_set Container#cpu_set}
  */
  readonly cpuSet?: string;
  /**
  * CPU shares (relative weight) for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cpu_shares Container#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * Specify how much of the available CPU resources a container can use. e.g a value of 1.5 means the container is guaranteed at most one and a half of the CPUs. Has precedence over `cpu_period` and `cpu_quota`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#cpus Container#cpus}
  */
  readonly cpus?: string;
  /**
  * If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}
  */
  readonly destroyGraceSeconds?: number;
  /**
  * DNS servers to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#dns Container#dns}
  */
  readonly dns?: string[];
  /**
  * DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#dns_opts Container#dns_opts}
  */
  readonly dnsOpts?: string[];
  /**
  * DNS search domains that are used when bare unqualified hostnames are used inside of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#dns_search Container#dns_search}
  */
  readonly dnsSearch?: string[];
  /**
  * Domain name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#domainname Container#domainname}
  */
  readonly domainname?: string;
  /**
  * The command to use as the Entrypoint for the container. The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogram"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#entrypoint Container#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#env Container#env}
  */
  readonly env?: string[];
  /**
  * GPU devices to add to the container. Supported values are `all` or `device=<id[,id...]>`, for example `device=0,2` or `device=GPU-3a23c669-1f69-c64e-cf85-44e9b07e7a2a`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#gpus Container#gpus}
  */
  readonly gpus?: string;
  /**
  * Additional groups for the container user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#group_add Container#group_add}
  */
  readonly groupAdd?: string[];
  /**
  * Hostname of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#hostname Container#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#id Container#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the image to back this container. The easiest way to get this value is to use the `image_id` attribute of the `docker_image` resource as is shown in the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#image Container#image}
  */
  readonly image: string;
  /**
  * Configured whether an init process should be injected for this container. If unset this will default to the `dockerd` defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#init Container#init}
  */
  readonly init?: boolean | cdktf.IResolvable;
  /**
  * IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ipc_mode Container#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * The logging driver to use for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#log_driver Container#log_driver}
  */
  readonly logDriver?: string;
  /**
  * Key/value pairs to use as options for the logging driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#log_opts Container#log_opts}
  */
  readonly logOpts?: { [key: string]: string };
  /**
  * Save the container logs (`attach` must be enabled). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#logs Container#logs}
  */
  readonly logs?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#max_retry_count Container#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * The memory limit for the container in MBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#memory Container#memory}
  */
  readonly memory?: number;
  /**
  * The memory-resveration for the container in MBs. Defaults to 0. Allows you to specify a soft limit smaller than `memory` which is activated when Docker detects contention or low memory on the host machine. If you use `memory-reservation`, it must be set lower than `memory` for it to take precedence. Because it is a soft limit, it doesn't guarantee that the container doesn't exceed the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#memory_reservation Container#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * The total memory limit (memory + swap) for the container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#memory_swap Container#memory_swap}
  */
  readonly memorySwap?: number;
  /**
  * If `true`, then the Docker container will be kept running. If `false`, Terraform leaves the container alone. This attribute is also used to trigger a restart of a stopped container. If your container is stopped, Terraform will set `must_run` to `false` and this will trigger a change. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#must_run Container#must_run}
  */
  readonly mustRun?: boolean | cdktf.IResolvable;
  /**
  * The name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#name Container#name}
  */
  readonly name: string;
  /**
  * Network mode of the container. Defaults to `bridge`. If your host OS is any other OS, you need to set this value explicitly, e.g. `nat` when your container will be running on an Windows host. See https://docs.docker.com/engine/network/ for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#network_mode Container#network_mode}
  */
  readonly networkMode?: string;
  /**
  * The PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#pid_mode Container#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Platform in the format `os[/arch[/variant]]` used for image lookup and container runtime, for example `linux/amd64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#platform Container#platform}
  */
  readonly platform?: string;
  /**
  * If `true`, the container runs in privileged mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#privileged Container#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Publish all ports of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#publish_all_ports Container#publish_all_ports}
  */
  readonly publishAllPorts?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the container will be started as readonly. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#read_only Container#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#remove_volumes Container#remove_volumes}
  */
  readonly removeVolumes?: boolean | cdktf.IResolvable;
  /**
  * The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#restart Container#restart}
  */
  readonly restart?: string;
  /**
  * If `true`, then the container will be automatically removed when it exits. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#rm Container#rm}
  */
  readonly rm?: boolean | cdktf.IResolvable;
  /**
  * Runtime to use for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#runtime Container#runtime}
  */
  readonly runtime?: string;
  /**
  * List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#security_opts Container#security_opts}
  */
  readonly securityOpts?: string[];
  /**
  * Size of `/dev/shm` in MBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#shm_size Container#shm_size}
  */
  readonly shmSize?: number;
  /**
  * If `true`, then the Docker container will be started after creation. If `false`, then the container is only created. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#start Container#start}
  */
  readonly start?: boolean | cdktf.IResolvable;
  /**
  * If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#stdin_open Container#stdin_open}
  */
  readonly stdinOpen?: boolean | cdktf.IResolvable;
  /**
  * Signal to stop a container (default `SIGTERM`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#stop_signal Container#stop_signal}
  */
  readonly stopSignal?: string;
  /**
  * Timeout (in seconds) to stop a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#stop_timeout Container#stop_timeout}
  */
  readonly stopTimeout?: number;
  /**
  * Key/value pairs for the storage driver options, e.g. `size`: `120G`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#storage_opts Container#storage_opts}
  */
  readonly storageOpts?: { [key: string]: string };
  /**
  * A map of kernel parameters (sysctls) to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#sysctls Container#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#tmpfs Container#tmpfs}
  */
  readonly tmpfs?: { [key: string]: string };
  /**
  * If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#tty Container#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * User used for run the first process. Format is `user` or `user:group` which user and group can be passed literally or by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#user Container#user}
  */
  readonly user?: string;
  /**
  * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#userns_mode Container#userns_mode}
  */
  readonly usernsMode?: string;
  /**
  * If `true`, then the Docker container is waited for being healthy state after creation. This requires your container to have a healthcheck, otherwise this provider will error. If `false`, then the container health state is not checked. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#wait Container#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#wait_timeout Container#wait_timeout}
  */
  readonly waitTimeout?: number;
  /**
  * The working directory for commands to run in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#working_dir Container#working_dir}
  */
  readonly workingDir?: string;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#capabilities Container#capabilities}
  */
  readonly capabilities?: ContainerCapabilities;
  /**
  * device_read_bps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#device_read_bps Container#device_read_bps}
  */
  readonly deviceReadBps?: ContainerDeviceReadBps[] | cdktf.IResolvable;
  /**
  * device_read_iops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#device_read_iops Container#device_read_iops}
  */
  readonly deviceReadIops?: ContainerDeviceReadIops[] | cdktf.IResolvable;
  /**
  * device_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#device_requests Container#device_requests}
  */
  readonly deviceRequests?: ContainerDeviceRequests[] | cdktf.IResolvable;
  /**
  * device_write_bps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#device_write_bps Container#device_write_bps}
  */
  readonly deviceWriteBps?: ContainerDeviceWriteBps[] | cdktf.IResolvable;
  /**
  * device_write_iops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#device_write_iops Container#device_write_iops}
  */
  readonly deviceWriteIops?: ContainerDeviceWriteIops[] | cdktf.IResolvable;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#devices Container#devices}
  */
  readonly devices?: ContainerDevices[] | cdktf.IResolvable;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#healthcheck Container#healthcheck}
  */
  readonly healthcheck?: ContainerHealthcheck;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#host Container#host}
  */
  readonly host?: ContainerHost[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#labels Container#labels}
  */
  readonly labels?: ContainerLabels[] | cdktf.IResolvable;
  /**
  * mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#mounts Container#mounts}
  */
  readonly mounts?: ContainerMounts[] | cdktf.IResolvable;
  /**
  * networks_advanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#networks_advanced Container#networks_advanced}
  */
  readonly networksAdvanced?: ContainerNetworksAdvanced[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ports Container#ports}
  */
  readonly ports?: ContainerPorts[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#timeouts Container#timeouts}
  */
  readonly timeouts?: ContainerTimeouts;
  /**
  * ulimit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ulimit Container#ulimit}
  */
  readonly ulimit?: ContainerUlimit[] | cdktf.IResolvable;
  /**
  * upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#upload Container#upload}
  */
  readonly upload?: ContainerUpload[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#volumes Container#volumes}
  */
  readonly volumes?: ContainerVolumes[] | cdktf.IResolvable;
}
export interface ContainerNetworkData {
}

export function containerNetworkDataToTerraform(struct?: ContainerNetworkData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerNetworkDataToHclTerraform(struct?: ContainerNetworkData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerNetworkDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerNetworkData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNetworkData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // global_ipv6_address - computed: true, optional: false, required: false
  public get globalIpv6Address() {
    return this.getStringAttribute('global_ipv6_address');
  }

  // global_ipv6_prefix_length - computed: true, optional: false, required: false
  public get globalIpv6PrefixLength() {
    return this.getNumberAttribute('global_ipv6_prefix_length');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_prefix_length - computed: true, optional: false, required: false
  public get ipPrefixLength() {
    return this.getNumberAttribute('ip_prefix_length');
  }

  // ipv6_gateway - computed: true, optional: false, required: false
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
}

export class ContainerNetworkDataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNetworkDataOutputReference {
    return new ContainerNetworkDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerCapabilities {
  /**
  * List of linux capabilities to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#add Container#add}
  */
  readonly add?: string[];
  /**
  * List of linux capabilities to drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#drop Container#drop}
  */
  readonly drop?: string[];
}

export function containerCapabilitiesToTerraform(struct?: ContainerCapabilitiesOutputReference | ContainerCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function containerCapabilitiesToHclTerraform(struct?: ContainerCapabilitiesOutputReference | ContainerCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return cdktf.Fn.tolist(this.getListAttribute('add'));
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return cdktf.Fn.tolist(this.getListAttribute('drop'));
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface ContainerDeviceReadBps {
  /**
  * The device path on the host, e.g. `/dev/sda`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#path Container#path}
  */
  readonly path: string;
  /**
  * The read rate limit in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#rate Container#rate}
  */
  readonly rate: number;
}

export function containerDeviceReadBpsToTerraform(struct?: ContainerDeviceReadBps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function containerDeviceReadBpsToHclTerraform(struct?: ContainerDeviceReadBps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerDeviceReadBpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerDeviceReadBps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDeviceReadBps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._rate = value.rate;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class ContainerDeviceReadBpsList extends cdktf.ComplexList {
  public internalValue? : ContainerDeviceReadBps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerDeviceReadBpsOutputReference {
    return new ContainerDeviceReadBpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerDeviceReadIops {
  /**
  * The device path on the host, e.g. `/dev/sda`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#path Container#path}
  */
  readonly path: string;
  /**
  * The read IOPS limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#rate Container#rate}
  */
  readonly rate: number;
}

export function containerDeviceReadIopsToTerraform(struct?: ContainerDeviceReadIops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function containerDeviceReadIopsToHclTerraform(struct?: ContainerDeviceReadIops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerDeviceReadIopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerDeviceReadIops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDeviceReadIops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._rate = value.rate;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class ContainerDeviceReadIopsList extends cdktf.ComplexList {
  public internalValue? : ContainerDeviceReadIops[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerDeviceReadIopsOutputReference {
    return new ContainerDeviceReadIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerDeviceRequests {
  /**
  * List of device capabilities. Only used with `nvidia` driver (e.g., `gpu`, `compute`, `utility`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#capabilities Container#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Number of devices to request. Use -1 for all devices. Only used with `nvidia` driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#count Container#count}
  */
  readonly count?: number;
  /**
  * List of device IDs or CDI device identifiers (e.g., `nvidia.com/gpu=all`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#device_ids Container#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * The device driver to use. Common values: `cdi` for CDI devices, `nvidia` for NVIDIA GPU requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#driver Container#driver}
  */
  readonly driver?: string;
  /**
  * Driver-specific options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#options Container#options}
  */
  readonly options?: { [key: string]: string };
}

export function containerDeviceRequestsToTerraform(struct?: ContainerDeviceRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    count: cdktf.numberToTerraform(struct!.count),
    device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceIds),
    driver: cdktf.stringToTerraform(struct!.driver),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
  }
}


export function containerDeviceRequestsToHclTerraform(struct?: ContainerDeviceRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerDeviceRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerDeviceRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._deviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIds = this._deviceIds;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDeviceRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._count = undefined;
      this._deviceIds = undefined;
      this._driver = undefined;
      this._options = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._count = value.count;
      this._deviceIds = value.deviceIds;
      this._driver = value.driver;
      this._options = value.options;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: string[]; 
  public get deviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
  }
  public set deviceIds(value: string[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}

export class ContainerDeviceRequestsList extends cdktf.ComplexList {
  public internalValue? : ContainerDeviceRequests[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerDeviceRequestsOutputReference {
    return new ContainerDeviceRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerDeviceWriteBps {
  /**
  * The device path on the host, e.g. `/dev/sda`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#path Container#path}
  */
  readonly path: string;
  /**
  * The write rate limit in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#rate Container#rate}
  */
  readonly rate: number;
}

export function containerDeviceWriteBpsToTerraform(struct?: ContainerDeviceWriteBps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function containerDeviceWriteBpsToHclTerraform(struct?: ContainerDeviceWriteBps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerDeviceWriteBpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerDeviceWriteBps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDeviceWriteBps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._rate = value.rate;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class ContainerDeviceWriteBpsList extends cdktf.ComplexList {
  public internalValue? : ContainerDeviceWriteBps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerDeviceWriteBpsOutputReference {
    return new ContainerDeviceWriteBpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerDeviceWriteIops {
  /**
  * The device path on the host, e.g. `/dev/sda`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#path Container#path}
  */
  readonly path: string;
  /**
  * The write IOPS limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#rate Container#rate}
  */
  readonly rate: number;
}

export function containerDeviceWriteIopsToTerraform(struct?: ContainerDeviceWriteIops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function containerDeviceWriteIopsToHclTerraform(struct?: ContainerDeviceWriteIops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerDeviceWriteIopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerDeviceWriteIops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDeviceWriteIops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._rate = value.rate;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class ContainerDeviceWriteIopsList extends cdktf.ComplexList {
  public internalValue? : ContainerDeviceWriteIops[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerDeviceWriteIopsOutputReference {
    return new ContainerDeviceWriteIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerDevices {
  /**
  * The path in the container where the device will be bound. If not set, it defaults to the value of `host_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#container_path Container#container_path}
  */
  readonly containerPath?: string;
  /**
  * The path on the host where the device is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#host_path Container#host_path}
  */
  readonly hostPath: string;
  /**
  * The cgroup permissions given to the container to access the device. Defaults to `rwm`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#permissions Container#permissions}
  */
  readonly permissions?: string;
}

export function containerDevicesToTerraform(struct?: ContainerDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function containerDevicesToHclTerraform(struct?: ContainerDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_path: {
      value: cdktf.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._hostPath = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._hostPath = value.hostPath;
      this._permissions = value.permissions;
    }
  }

  // container_path - computed: false, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // host_path - computed: false, optional: false, required: true
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class ContainerDevicesList extends cdktf.ComplexList {
  public internalValue? : ContainerDevices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerDevicesOutputReference {
    return new ContainerDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerHealthcheck {
  /**
  * Time between running the check (ms|s|m|h). Defaults to `0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#interval Container#interval}
  */
  readonly interval?: string;
  /**
  * Consecutive failures needed to report unhealthy. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#retries Container#retries}
  */
  readonly retries?: number;
  /**
  * Interval before the healthcheck starts (ms|s|m|h). Defaults to `0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#start_interval Container#start_interval}
  */
  readonly startInterval?: string;
  /**
  * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#start_period Container#start_period}
  */
  readonly startPeriod?: string;
  /**
  * Command to run to check health. For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`. It works in the same way, and has the same default values, as the HEALTHCHECK Dockerfile instruction set by the service's Docker image. Your Compose file can override the values set in the Dockerfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#test Container#test}
  */
  readonly test?: string[];
  /**
  * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#timeout Container#timeout}
  */
  readonly timeout?: string;
}

export function containerHealthcheckToTerraform(struct?: ContainerHealthcheckOutputReference | ContainerHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retries: cdktf.numberToTerraform(struct!.retries),
    start_interval: cdktf.stringToTerraform(struct!.startInterval),
    start_period: cdktf.stringToTerraform(struct!.startPeriod),
    test: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.test),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function containerHealthcheckToHclTerraform(struct?: ContainerHealthcheckOutputReference | ContainerHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_interval: {
      value: cdktf.stringToHclTerraform(struct!.startInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_period: {
      value: cdktf.stringToHclTerraform(struct!.startPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.test),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._startInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInterval = this._startInterval;
    }
    if (this._startPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPeriod = this._startPeriod;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._retries = undefined;
      this._startInterval = undefined;
      this._startPeriod = undefined;
      this._test = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._retries = value.retries;
      this._startInterval = value.startInterval;
      this._startPeriod = value.startPeriod;
      this._test = value.test;
      this._timeout = value.timeout;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // start_interval - computed: false, optional: true, required: false
  private _startInterval?: string; 
  public get startInterval() {
    return this.getStringAttribute('start_interval');
  }
  public set startInterval(value: string) {
    this._startInterval = value;
  }
  public resetStartInterval() {
    this._startInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIntervalInput() {
    return this._startInterval;
  }

  // start_period - computed: false, optional: true, required: false
  private _startPeriod?: string; 
  public get startPeriod() {
    return this.getStringAttribute('start_period');
  }
  public set startPeriod(value: string) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // test - computed: false, optional: true, required: false
  private _test?: string[]; 
  public get test() {
    return this.getListAttribute('test');
  }
  public set test(value: string[]) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ContainerHost {
  /**
  * Hostname to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#host Container#host}
  */
  readonly host: string;
  /**
  * IP address this hostname should resolve to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ip Container#ip}
  */
  readonly ip: string;
}

export function containerHostToTerraform(struct?: ContainerHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function containerHostToHclTerraform(struct?: ContainerHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._ip = value.ip;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class ContainerHostList extends cdktf.ComplexList {
  public internalValue? : ContainerHost[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerHostOutputReference {
    return new ContainerHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerLabels {
  /**
  * Name of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#label Container#label}
  */
  readonly label: string;
  /**
  * Value of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#value Container#value}
  */
  readonly value: string;
}

export function containerLabelsToTerraform(struct?: ContainerLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerLabelsToHclTerraform(struct?: ContainerLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerLabelsList extends cdktf.ComplexList {
  public internalValue? : ContainerLabels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerLabelsOutputReference {
    return new ContainerLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerMountsBindOptions {
  /**
  * A propagation mode with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#propagation Container#propagation}
  */
  readonly propagation?: string;
}

export function containerMountsBindOptionsToTerraform(struct?: ContainerMountsBindOptionsOutputReference | ContainerMountsBindOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    propagation: cdktf.stringToTerraform(struct!.propagation),
  }
}


export function containerMountsBindOptionsToHclTerraform(struct?: ContainerMountsBindOptionsOutputReference | ContainerMountsBindOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    propagation: {
      value: cdktf.stringToHclTerraform(struct!.propagation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerMountsBindOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerMountsBindOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagation = this._propagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsBindOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propagation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propagation = value.propagation;
    }
  }

  // propagation - computed: false, optional: true, required: false
  private _propagation?: string; 
  public get propagation() {
    return this.getStringAttribute('propagation');
  }
  public set propagation(value: string) {
    this._propagation = value;
  }
  public resetPropagation() {
    this._propagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationInput() {
    return this._propagation;
  }
}
export interface ContainerMountsTmpfsOptions {
  /**
  * The permission mode for the tmpfs mount in an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#mode Container#mode}
  */
  readonly mode?: number;
  /**
  * The size for the tmpfs mount in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#size_bytes Container#size_bytes}
  */
  readonly sizeBytes?: number;
}

export function containerMountsTmpfsOptionsToTerraform(struct?: ContainerMountsTmpfsOptionsOutputReference | ContainerMountsTmpfsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}


export function containerMountsTmpfsOptionsToHclTerraform(struct?: ContainerMountsTmpfsOptionsOutputReference | ContainerMountsTmpfsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerMountsTmpfsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsTmpfsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._sizeBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._sizeBytes = value.sizeBytes;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: number; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
  }
}
export interface ContainerMountsVolumeOptionsLabels {
  /**
  * Name of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#label Container#label}
  */
  readonly label: string;
  /**
  * Value of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#value Container#value}
  */
  readonly value: string;
}

export function containerMountsVolumeOptionsLabelsToTerraform(struct?: ContainerMountsVolumeOptionsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerMountsVolumeOptionsLabelsToHclTerraform(struct?: ContainerMountsVolumeOptionsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerMountsVolumeOptionsLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerMountsVolumeOptionsLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsVolumeOptionsLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerMountsVolumeOptionsLabelsList extends cdktf.ComplexList {
  public internalValue? : ContainerMountsVolumeOptionsLabels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerMountsVolumeOptionsLabelsOutputReference {
    return new ContainerMountsVolumeOptionsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerMountsVolumeOptions {
  /**
  * Name of the driver to use to create the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#driver_name Container#driver_name}
  */
  readonly driverName?: string;
  /**
  * key/value map of driver specific options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#driver_options Container#driver_options}
  */
  readonly driverOptions?: { [key: string]: string };
  /**
  * Populate volume with data from the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#no_copy Container#no_copy}
  */
  readonly noCopy?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume to mount. Requires docker server version 1.45 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#subpath Container#subpath}
  */
  readonly subpath?: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#labels Container#labels}
  */
  readonly labels?: ContainerMountsVolumeOptionsLabels[] | cdktf.IResolvable;
}

export function containerMountsVolumeOptionsToTerraform(struct?: ContainerMountsVolumeOptionsOutputReference | ContainerMountsVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_name: cdktf.stringToTerraform(struct!.driverName),
    driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverOptions),
    no_copy: cdktf.booleanToTerraform(struct!.noCopy),
    subpath: cdktf.stringToTerraform(struct!.subpath),
    labels: cdktf.listMapper(containerMountsVolumeOptionsLabelsToTerraform, true)(struct!.labels),
  }
}


export function containerMountsVolumeOptionsToHclTerraform(struct?: ContainerMountsVolumeOptionsOutputReference | ContainerMountsVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver_name: {
      value: cdktf.stringToHclTerraform(struct!.driverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.driverOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_copy: {
      value: cdktf.booleanToHclTerraform(struct!.noCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subpath: {
      value: cdktf.stringToHclTerraform(struct!.subpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(containerMountsVolumeOptionsLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerMountsVolumeOptionsLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerMountsVolumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverName = this._driverName;
    }
    if (this._driverOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverOptions = this._driverOptions;
    }
    if (this._noCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCopy = this._noCopy;
    }
    if (this._subpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpath = this._subpath;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsVolumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverName = undefined;
      this._driverOptions = undefined;
      this._noCopy = undefined;
      this._subpath = undefined;
      this._labels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverName = value.driverName;
      this._driverOptions = value.driverOptions;
      this._noCopy = value.noCopy;
      this._subpath = value.subpath;
      this._labels.internalValue = value.labels;
    }
  }

  // driver_name - computed: false, optional: true, required: false
  private _driverName?: string; 
  public get driverName() {
    return this.getStringAttribute('driver_name');
  }
  public set driverName(value: string) {
    this._driverName = value;
  }
  public resetDriverName() {
    this._driverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNameInput() {
    return this._driverName;
  }

  // driver_options - computed: false, optional: true, required: false
  private _driverOptions?: { [key: string]: string }; 
  public get driverOptions() {
    return this.getStringMapAttribute('driver_options');
  }
  public set driverOptions(value: { [key: string]: string }) {
    this._driverOptions = value;
  }
  public resetDriverOptions() {
    this._driverOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptionsInput() {
    return this._driverOptions;
  }

  // no_copy - computed: false, optional: true, required: false
  private _noCopy?: boolean | cdktf.IResolvable; 
  public get noCopy() {
    return this.getBooleanAttribute('no_copy');
  }
  public set noCopy(value: boolean | cdktf.IResolvable) {
    this._noCopy = value;
  }
  public resetNoCopy() {
    this._noCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCopyInput() {
    return this._noCopy;
  }

  // subpath - computed: false, optional: true, required: false
  private _subpath?: string; 
  public get subpath() {
    return this.getStringAttribute('subpath');
  }
  public set subpath(value: string) {
    this._subpath = value;
  }
  public resetSubpath() {
    this._subpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathInput() {
    return this._subpath;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ContainerMountsVolumeOptionsLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ContainerMountsVolumeOptionsLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}
export interface ContainerMounts {
  /**
  * Whether the mount should be read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#read_only Container#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Mount source (e.g. a volume name, a host path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#source Container#source}
  */
  readonly source?: string;
  /**
  * Container path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#target Container#target}
  */
  readonly target: string;
  /**
  * The mount type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#type Container#type}
  */
  readonly type: string;
  /**
  * bind_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#bind_options Container#bind_options}
  */
  readonly bindOptions?: ContainerMountsBindOptions;
  /**
  * tmpfs_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#tmpfs_options Container#tmpfs_options}
  */
  readonly tmpfsOptions?: ContainerMountsTmpfsOptions;
  /**
  * volume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#volume_options Container#volume_options}
  */
  readonly volumeOptions?: ContainerMountsVolumeOptions;
}

export function containerMountsToTerraform(struct?: ContainerMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    bind_options: containerMountsBindOptionsToTerraform(struct!.bindOptions),
    tmpfs_options: containerMountsTmpfsOptionsToTerraform(struct!.tmpfsOptions),
    volume_options: containerMountsVolumeOptionsToTerraform(struct!.volumeOptions),
  }
}


export function containerMountsToHclTerraform(struct?: ContainerMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_options: {
      value: containerMountsBindOptionsToHclTerraform(struct!.bindOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerMountsBindOptionsList",
    },
    tmpfs_options: {
      value: containerMountsTmpfsOptionsToHclTerraform(struct!.tmpfsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerMountsTmpfsOptionsList",
    },
    volume_options: {
      value: containerMountsVolumeOptionsToHclTerraform(struct!.volumeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerMountsVolumeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerMountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._bindOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindOptions = this._bindOptions?.internalValue;
    }
    if (this._tmpfsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpfsOptions = this._tmpfsOptions?.internalValue;
    }
    if (this._volumeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeOptions = this._volumeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnly = undefined;
      this._source = undefined;
      this._target = undefined;
      this._type = undefined;
      this._bindOptions.internalValue = undefined;
      this._tmpfsOptions.internalValue = undefined;
      this._volumeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnly = value.readOnly;
      this._source = value.source;
      this._target = value.target;
      this._type = value.type;
      this._bindOptions.internalValue = value.bindOptions;
      this._tmpfsOptions.internalValue = value.tmpfsOptions;
      this._volumeOptions.internalValue = value.volumeOptions;
    }
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // bind_options - computed: false, optional: true, required: false
  private _bindOptions = new ContainerMountsBindOptionsOutputReference(this, "bind_options");
  public get bindOptions() {
    return this._bindOptions;
  }
  public putBindOptions(value: ContainerMountsBindOptions) {
    this._bindOptions.internalValue = value;
  }
  public resetBindOptions() {
    this._bindOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindOptionsInput() {
    return this._bindOptions.internalValue;
  }

  // tmpfs_options - computed: false, optional: true, required: false
  private _tmpfsOptions = new ContainerMountsTmpfsOptionsOutputReference(this, "tmpfs_options");
  public get tmpfsOptions() {
    return this._tmpfsOptions;
  }
  public putTmpfsOptions(value: ContainerMountsTmpfsOptions) {
    this._tmpfsOptions.internalValue = value;
  }
  public resetTmpfsOptions() {
    this._tmpfsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsOptionsInput() {
    return this._tmpfsOptions.internalValue;
  }

  // volume_options - computed: false, optional: true, required: false
  private _volumeOptions = new ContainerMountsVolumeOptionsOutputReference(this, "volume_options");
  public get volumeOptions() {
    return this._volumeOptions;
  }
  public putVolumeOptions(value: ContainerMountsVolumeOptions) {
    this._volumeOptions.internalValue = value;
  }
  public resetVolumeOptions() {
    this._volumeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeOptionsInput() {
    return this._volumeOptions.internalValue;
  }
}

export class ContainerMountsList extends cdktf.ComplexList {
  public internalValue? : ContainerMounts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerMountsOutputReference {
    return new ContainerMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNetworksAdvanced {
  /**
  * The network aliases of the container in the specific network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#aliases Container#aliases}
  */
  readonly aliases?: string[];
  /**
  * An array of driver options for the network endpoint, e.g. `opts1=value`. This is the equivalent to repeating `--driver-opt` for `docker run`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#driver_opts Container#driver_opts}
  */
  readonly driverOpts?: string[];
  /**
  * Gateway priority for this endpoint. The endpoint with the highest priority will provide the default gateway for the container. This is the equivalent to `--gw-priority` for `docker run`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#gw_priority Container#gw_priority}
  */
  readonly gwPriority?: number;
  /**
  * The IPV4 address of the container in the specific network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ipv4_address Container#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The IPV6 address of the container in the specific network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ipv6_address Container#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The link-local IPs of the container in the specific network. This is the equivalent to repeating `--link-local-ip` for `docker run`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#link_local_ips Container#link_local_ips}
  */
  readonly linkLocalIps?: string[];
  /**
  * The MAC address of the container in the specific network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#mac_address Container#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The name or id of the network to use. You can use `name` or `id` attribute from a `docker_network` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#name Container#name}
  */
  readonly name: string;
}

export function containerNetworksAdvancedToTerraform(struct?: ContainerNetworksAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    driver_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.driverOpts),
    gw_priority: cdktf.numberToTerraform(struct!.gwPriority),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    link_local_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkLocalIps),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function containerNetworksAdvancedToHclTerraform(struct?: ContainerNetworksAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    driver_opts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.driverOpts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    gw_priority: {
      value: cdktf.numberToHclTerraform(struct!.gwPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_local_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkLocalIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNetworksAdvancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerNetworksAdvanced | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._driverOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverOpts = this._driverOpts;
    }
    if (this._gwPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwPriority = this._gwPriority;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._linkLocalIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocalIps = this._linkLocalIps;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNetworksAdvanced | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliases = undefined;
      this._driverOpts = undefined;
      this._gwPriority = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._linkLocalIps = undefined;
      this._macAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliases = value.aliases;
      this._driverOpts = value.driverOpts;
      this._gwPriority = value.gwPriority;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._linkLocalIps = value.linkLocalIps;
      this._macAddress = value.macAddress;
      this._name = value.name;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: string[]; 
  public get driverOpts() {
    return cdktf.Fn.tolist(this.getListAttribute('driver_opts'));
  }
  public set driverOpts(value: string[]) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts;
  }

  // gw_priority - computed: false, optional: true, required: false
  private _gwPriority?: number; 
  public get gwPriority() {
    return this.getNumberAttribute('gw_priority');
  }
  public set gwPriority(value: number) {
    this._gwPriority = value;
  }
  public resetGwPriority() {
    this._gwPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwPriorityInput() {
    return this._gwPriority;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // link_local_ips - computed: false, optional: true, required: false
  private _linkLocalIps?: string[]; 
  public get linkLocalIps() {
    return cdktf.Fn.tolist(this.getListAttribute('link_local_ips'));
  }
  public set linkLocalIps(value: string[]) {
    this._linkLocalIps = value;
  }
  public resetLinkLocalIps() {
    this._linkLocalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalIpsInput() {
    return this._linkLocalIps;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class ContainerNetworksAdvancedList extends cdktf.ComplexList {
  public internalValue? : ContainerNetworksAdvanced[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNetworksAdvancedOutputReference {
    return new ContainerNetworksAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerPorts {
  /**
  * Port exposed out of the container. If not given a free random port `>= 32768` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#external Container#external}
  */
  readonly external?: number;
  /**
  * Port within the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#internal Container#internal}
  */
  readonly internal: number;
  /**
  * IP address/mask that can access this port. Defaults to `0.0.0.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#ip Container#ip}
  */
  readonly ip?: string;
  /**
  * Protocol that can be used over this port. Defaults to `tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#protocol Container#protocol}
  */
  readonly protocol?: string;
}

export function containerPortsToTerraform(struct?: ContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.numberToTerraform(struct!.external),
    internal: cdktf.numberToTerraform(struct!.internal),
    ip: cdktf.stringToTerraform(struct!.ip),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function containerPortsToHclTerraform(struct?: ContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.numberToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal: {
      value: cdktf.numberToHclTerraform(struct!.internal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external = undefined;
      this._internal = undefined;
      this._ip = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external = value.external;
      this._internal = value.internal;
      this._ip = value.ip;
      this._protocol = value.protocol;
    }
  }

  // external - computed: true, optional: true, required: false
  private _external?: number; 
  public get external() {
    return this.getNumberAttribute('external');
  }
  public set external(value: number) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // internal - computed: false, optional: false, required: true
  private _internal?: number; 
  public get internal() {
    return this.getNumberAttribute('internal');
  }
  public set internal(value: number) {
    this._internal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ContainerPortsList extends cdktf.ComplexList {
  public internalValue? : ContainerPorts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerPortsOutputReference {
    return new ContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#create Container#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#delete Container#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#update Container#update}
  */
  readonly update?: string;
}

export function containerTimeoutsToTerraform(struct?: ContainerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function containerTimeoutsToHclTerraform(struct?: ContainerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ContainerUlimit {
  /**
  * The hard limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#hard Container#hard}
  */
  readonly hard: number;
  /**
  * The name of the ulimit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#name Container#name}
  */
  readonly name: string;
  /**
  * The soft limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#soft Container#soft}
  */
  readonly soft: number;
}

export function containerUlimitToTerraform(struct?: ContainerUlimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.numberToTerraform(struct!.hard),
    name: cdktf.stringToTerraform(struct!.name),
    soft: cdktf.numberToTerraform(struct!.soft),
  }
}


export function containerUlimitToHclTerraform(struct?: ContainerUlimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hard: {
      value: cdktf.numberToHclTerraform(struct!.hard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft: {
      value: cdktf.numberToHclTerraform(struct!.soft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerUlimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerUlimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hard !== undefined) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._soft !== undefined) {
      hasAnyValues = true;
      internalValueResult.soft = this._soft;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerUlimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hard = undefined;
      this._name = undefined;
      this._soft = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hard = value.hard;
      this._name = value.name;
      this._soft = value.soft;
    }
  }

  // hard - computed: false, optional: false, required: true
  private _hard?: number; 
  public get hard() {
    return this.getNumberAttribute('hard');
  }
  public set hard(value: number) {
    this._hard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // soft - computed: false, optional: false, required: true
  private _soft?: number; 
  public get soft() {
    return this.getNumberAttribute('soft');
  }
  public set soft(value: number) {
    this._soft = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softInput() {
    return this._soft;
  }
}

export class ContainerUlimitList extends cdktf.ComplexList {
  public internalValue? : ContainerUlimit[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerUlimitOutputReference {
    return new ContainerUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerUpload {
  /**
  * Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. Conflicts with `content_base64` & `source`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#content Container#content}
  */
  readonly content?: string;
  /**
  * Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#content_base64 Container#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * If `true`, the file will be uploaded with user executable permission. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#executable Container#executable}
  */
  readonly executable?: boolean | cdktf.IResolvable;
  /**
  * Path to the file in the container where is upload goes to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#file Container#file}
  */
  readonly file: string;
  /**
  * The permission mode for the file in the container. Has precedence over `executable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#permissions Container#permissions}
  */
  readonly permissions?: string;
  /**
  * A filename that references a file which will be uploaded as the object content. This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#source Container#source}
  */
  readonly source?: string;
  /**
  * If using `source`, this will force an update if the file content has updated but the filename has not. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#source_hash Container#source_hash}
  */
  readonly sourceHash?: string;
}

export function containerUploadToTerraform(struct?: ContainerUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_base64: cdktf.stringToTerraform(struct!.contentBase64),
    executable: cdktf.booleanToTerraform(struct!.executable),
    file: cdktf.stringToTerraform(struct!.file),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    source: cdktf.stringToTerraform(struct!.source),
    source_hash: cdktf.stringToTerraform(struct!.sourceHash),
  }
}


export function containerUploadToHclTerraform(struct?: ContainerUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_base64: {
      value: cdktf.stringToHclTerraform(struct!.contentBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executable: {
      value: cdktf.booleanToHclTerraform(struct!.executable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_hash: {
      value: cdktf.stringToHclTerraform(struct!.sourceHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBase64 = this._contentBase64;
    }
    if (this._executable !== undefined) {
      hasAnyValues = true;
      internalValueResult.executable = this._executable;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHash = this._sourceHash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentBase64 = undefined;
      this._executable = undefined;
      this._file = undefined;
      this._permissions = undefined;
      this._source = undefined;
      this._sourceHash = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentBase64 = value.contentBase64;
      this._executable = value.executable;
      this._file = value.file;
      this._permissions = value.permissions;
      this._source = value.source;
      this._sourceHash = value.sourceHash;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // executable - computed: false, optional: true, required: false
  private _executable?: boolean | cdktf.IResolvable; 
  public get executable() {
    return this.getBooleanAttribute('executable');
  }
  public set executable(value: boolean | cdktf.IResolvable) {
    this._executable = value;
  }
  public resetExecutable() {
    this._executable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableInput() {
    return this._executable;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hash - computed: false, optional: true, required: false
  private _sourceHash?: string; 
  public get sourceHash() {
    return this.getStringAttribute('source_hash');
  }
  public set sourceHash(value: string) {
    this._sourceHash = value;
  }
  public resetSourceHash() {
    this._sourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHashInput() {
    return this._sourceHash;
  }
}

export class ContainerUploadList extends cdktf.ComplexList {
  public internalValue? : ContainerUpload[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerUploadOutputReference {
    return new ContainerUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerVolumes {
  /**
  * The path in the container where the volume will be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#container_path Container#container_path}
  */
  readonly containerPath?: string;
  /**
  * The container where the volume is coming from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#from_container Container#from_container}
  */
  readonly fromContainer?: string;
  /**
  * The path on the host where the volume is coming from. If `host_path` is set, it takes precedence over `volume_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#host_path Container#host_path}
  */
  readonly hostPath?: string;
  /**
  * If `true`, this volume will be readonly. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#read_only Container#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * SELinux relabel mode for bind mounts. Supported values are `z` and `Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#selinux_relabel Container#selinux_relabel}
  */
  readonly selinuxRelabel?: string;
  /**
  * The name of the docker volume which should be mounted. Ignored when `host_path` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#volume_name Container#volume_name}
  */
  readonly volumeName?: string;
}

export function containerVolumesToTerraform(struct?: ContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    from_container: cdktf.stringToTerraform(struct!.fromContainer),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    selinux_relabel: cdktf.stringToTerraform(struct!.selinuxRelabel),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function containerVolumesToHclTerraform(struct?: ContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_path: {
      value: cdktf.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_container: {
      value: cdktf.stringToHclTerraform(struct!.fromContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selinux_relabel: {
      value: cdktf.stringToHclTerraform(struct!.selinuxRelabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._fromContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromContainer = this._fromContainer;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._selinuxRelabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.selinuxRelabel = this._selinuxRelabel;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._fromContainer = undefined;
      this._hostPath = undefined;
      this._readOnly = undefined;
      this._selinuxRelabel = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._fromContainer = value.fromContainer;
      this._hostPath = value.hostPath;
      this._readOnly = value.readOnly;
      this._selinuxRelabel = value.selinuxRelabel;
      this._volumeName = value.volumeName;
    }
  }

  // container_path - computed: false, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // from_container - computed: false, optional: true, required: false
  private _fromContainer?: string; 
  public get fromContainer() {
    return this.getStringAttribute('from_container');
  }
  public set fromContainer(value: string) {
    this._fromContainer = value;
  }
  public resetFromContainer() {
    this._fromContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromContainerInput() {
    return this._fromContainer;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // selinux_relabel - computed: false, optional: true, required: false
  private _selinuxRelabel?: string; 
  public get selinuxRelabel() {
    return this.getStringAttribute('selinux_relabel');
  }
  public set selinuxRelabel(value: string) {
    this._selinuxRelabel = value;
  }
  public resetSelinuxRelabel() {
    this._selinuxRelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selinuxRelabelInput() {
    return this._selinuxRelabel;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class ContainerVolumesList extends cdktf.ComplexList {
  public internalValue? : ContainerVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerVolumesOutputReference {
    return new ContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container docker_container}
*/
export class Container extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Container to import
  * @param importFromId The id of the existing Container that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Container to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/container docker_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_container',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attach = config.attach;
    this._cgroupParent = config.cgroupParent;
    this._cgroupnsMode = config.cgroupnsMode;
    this._command = config.command;
    this._containerReadRefreshTimeoutMilliseconds = config.containerReadRefreshTimeoutMilliseconds;
    this._cpuPeriod = config.cpuPeriod;
    this._cpuQuota = config.cpuQuota;
    this._cpuSet = config.cpuSet;
    this._cpuShares = config.cpuShares;
    this._cpus = config.cpus;
    this._destroyGraceSeconds = config.destroyGraceSeconds;
    this._dns = config.dns;
    this._dnsOpts = config.dnsOpts;
    this._dnsSearch = config.dnsSearch;
    this._domainname = config.domainname;
    this._entrypoint = config.entrypoint;
    this._env = config.env;
    this._gpus = config.gpus;
    this._groupAdd = config.groupAdd;
    this._hostname = config.hostname;
    this._id = config.id;
    this._image = config.image;
    this._init = config.init;
    this._ipcMode = config.ipcMode;
    this._logDriver = config.logDriver;
    this._logOpts = config.logOpts;
    this._logs = config.logs;
    this._maxRetryCount = config.maxRetryCount;
    this._memory = config.memory;
    this._memoryReservation = config.memoryReservation;
    this._memorySwap = config.memorySwap;
    this._mustRun = config.mustRun;
    this._name = config.name;
    this._networkMode = config.networkMode;
    this._pidMode = config.pidMode;
    this._platform = config.platform;
    this._privileged = config.privileged;
    this._publishAllPorts = config.publishAllPorts;
    this._readOnly = config.readOnly;
    this._removeVolumes = config.removeVolumes;
    this._restart = config.restart;
    this._rm = config.rm;
    this._runtime = config.runtime;
    this._securityOpts = config.securityOpts;
    this._shmSize = config.shmSize;
    this._start = config.start;
    this._stdinOpen = config.stdinOpen;
    this._stopSignal = config.stopSignal;
    this._stopTimeout = config.stopTimeout;
    this._storageOpts = config.storageOpts;
    this._sysctls = config.sysctls;
    this._tmpfs = config.tmpfs;
    this._tty = config.tty;
    this._user = config.user;
    this._usernsMode = config.usernsMode;
    this._wait = config.wait;
    this._waitTimeout = config.waitTimeout;
    this._workingDir = config.workingDir;
    this._capabilities.internalValue = config.capabilities;
    this._deviceReadBps.internalValue = config.deviceReadBps;
    this._deviceReadIops.internalValue = config.deviceReadIops;
    this._deviceRequests.internalValue = config.deviceRequests;
    this._deviceWriteBps.internalValue = config.deviceWriteBps;
    this._deviceWriteIops.internalValue = config.deviceWriteIops;
    this._devices.internalValue = config.devices;
    this._healthcheck.internalValue = config.healthcheck;
    this._host.internalValue = config.host;
    this._labels.internalValue = config.labels;
    this._mounts.internalValue = config.mounts;
    this._networksAdvanced.internalValue = config.networksAdvanced;
    this._ports.internalValue = config.ports;
    this._timeouts.internalValue = config.timeouts;
    this._ulimit.internalValue = config.ulimit;
    this._upload.internalValue = config.upload;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach - computed: false, optional: true, required: false
  private _attach?: boolean | cdktf.IResolvable; 
  public get attach() {
    return this.getBooleanAttribute('attach');
  }
  public set attach(value: boolean | cdktf.IResolvable) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach;
  }

  // bridge - computed: true, optional: false, required: false
  public get bridge() {
    return this.getStringAttribute('bridge');
  }

  // cgroup_parent - computed: false, optional: true, required: false
  private _cgroupParent?: string; 
  public get cgroupParent() {
    return this.getStringAttribute('cgroup_parent');
  }
  public set cgroupParent(value: string) {
    this._cgroupParent = value;
  }
  public resetCgroupParent() {
    this._cgroupParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupParentInput() {
    return this._cgroupParent;
  }

  // cgroupns_mode - computed: false, optional: true, required: false
  private _cgroupnsMode?: string; 
  public get cgroupnsMode() {
    return this.getStringAttribute('cgroupns_mode');
  }
  public set cgroupnsMode(value: string) {
    this._cgroupnsMode = value;
  }
  public resetCgroupnsMode() {
    this._cgroupnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupnsModeInput() {
    return this._cgroupnsMode;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container_logs - computed: true, optional: false, required: false
  public get containerLogs() {
    return this.getStringAttribute('container_logs');
  }

  // container_read_refresh_timeout_milliseconds - computed: false, optional: true, required: false
  private _containerReadRefreshTimeoutMilliseconds?: number; 
  public get containerReadRefreshTimeoutMilliseconds() {
    return this.getNumberAttribute('container_read_refresh_timeout_milliseconds');
  }
  public set containerReadRefreshTimeoutMilliseconds(value: number) {
    this._containerReadRefreshTimeoutMilliseconds = value;
  }
  public resetContainerReadRefreshTimeoutMilliseconds() {
    this._containerReadRefreshTimeoutMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerReadRefreshTimeoutMillisecondsInput() {
    return this._containerReadRefreshTimeoutMilliseconds;
  }

  // cpu_period - computed: false, optional: true, required: false
  private _cpuPeriod?: number; 
  public get cpuPeriod() {
    return this.getNumberAttribute('cpu_period');
  }
  public set cpuPeriod(value: number) {
    this._cpuPeriod = value;
  }
  public resetCpuPeriod() {
    this._cpuPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPeriodInput() {
    return this._cpuPeriod;
  }

  // cpu_quota - computed: false, optional: true, required: false
  private _cpuQuota?: number; 
  public get cpuQuota() {
    return this.getNumberAttribute('cpu_quota');
  }
  public set cpuQuota(value: number) {
    this._cpuQuota = value;
  }
  public resetCpuQuota() {
    this._cpuQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQuotaInput() {
    return this._cpuQuota;
  }

  // cpu_set - computed: false, optional: true, required: false
  private _cpuSet?: string; 
  public get cpuSet() {
    return this.getStringAttribute('cpu_set');
  }
  public set cpuSet(value: string) {
    this._cpuSet = value;
  }
  public resetCpuSet() {
    this._cpuSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSetInput() {
    return this._cpuSet;
  }

  // cpu_shares - computed: false, optional: true, required: false
  private _cpuShares?: number; 
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }
  public set cpuShares(value: number) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: string; 
  public get cpus() {
    return this.getStringAttribute('cpus');
  }
  public set cpus(value: string) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // destroy_grace_seconds - computed: false, optional: true, required: false
  private _destroyGraceSeconds?: number; 
  public get destroyGraceSeconds() {
    return this.getNumberAttribute('destroy_grace_seconds');
  }
  public set destroyGraceSeconds(value: number) {
    this._destroyGraceSeconds = value;
  }
  public resetDestroyGraceSeconds() {
    this._destroyGraceSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyGraceSecondsInput() {
    return this._destroyGraceSeconds;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return cdktf.Fn.tolist(this.getListAttribute('dns'));
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_opts - computed: false, optional: true, required: false
  private _dnsOpts?: string[]; 
  public get dnsOpts() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_opts'));
  }
  public set dnsOpts(value: string[]) {
    this._dnsOpts = value;
  }
  public resetDnsOpts() {
    this._dnsOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOptsInput() {
    return this._dnsOpts;
  }

  // dns_search - computed: false, optional: true, required: false
  private _dnsSearch?: string[]; 
  public get dnsSearch() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_search'));
  }
  public set dnsSearch(value: string[]) {
    this._dnsSearch = value;
  }
  public resetDnsSearch() {
    this._dnsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchInput() {
    return this._dnsSearch;
  }

  // domainname - computed: false, optional: true, required: false
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // env - computed: true, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return cdktf.Fn.tolist(this.getListAttribute('env'));
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // exit_code - computed: true, optional: false, required: false
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: string; 
  public get gpus() {
    return this.getStringAttribute('gpus');
  }
  public set gpus(value: string) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // group_add - computed: false, optional: true, required: false
  private _groupAdd?: string[]; 
  public get groupAdd() {
    return cdktf.Fn.tolist(this.getListAttribute('group_add'));
  }
  public set groupAdd(value: string[]) {
    this._groupAdd = value;
  }
  public resetGroupAdd() {
    this._groupAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddInput() {
    return this._groupAdd;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // init - computed: true, optional: true, required: false
  private _init?: boolean | cdktf.IResolvable; 
  public get init() {
    return this.getBooleanAttribute('init');
  }
  public set init(value: boolean | cdktf.IResolvable) {
    this._init = value;
  }
  public resetInit() {
    this._init = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init;
  }

  // ipc_mode - computed: true, optional: true, required: false
  private _ipcMode?: string; 
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode;
  }

  // log_driver - computed: true, optional: true, required: false
  private _logDriver?: string; 
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string) {
    this._logDriver = value;
  }
  public resetLogDriver() {
    this._logDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver;
  }

  // log_opts - computed: false, optional: true, required: false
  private _logOpts?: { [key: string]: string }; 
  public get logOpts() {
    return this.getStringMapAttribute('log_opts');
  }
  public set logOpts(value: { [key: string]: string }) {
    this._logOpts = value;
  }
  public resetLogOpts() {
    this._logOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptsInput() {
    return this._logOpts;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: boolean | cdktf.IResolvable; 
  public get logs() {
    return this.getBooleanAttribute('logs');
  }
  public set logs(value: boolean | cdktf.IResolvable) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number; 
  public get maxRetryCount() {
    return this.getNumberAttribute('max_retry_count');
  }
  public set maxRetryCount(value: number) {
    this._maxRetryCount = value;
  }
  public resetMaxRetryCount() {
    this._maxRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCountInput() {
    return this._maxRetryCount;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_reservation - computed: false, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // memory_swap - computed: false, optional: true, required: false
  private _memorySwap?: number; 
  public get memorySwap() {
    return this.getNumberAttribute('memory_swap');
  }
  public set memorySwap(value: number) {
    this._memorySwap = value;
  }
  public resetMemorySwap() {
    this._memorySwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySwapInput() {
    return this._memorySwap;
  }

  // must_run - computed: false, optional: true, required: false
  private _mustRun?: boolean | cdktf.IResolvable; 
  public get mustRun() {
    return this.getBooleanAttribute('must_run');
  }
  public set mustRun(value: boolean | cdktf.IResolvable) {
    this._mustRun = value;
  }
  public resetMustRun() {
    this._mustRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustRunInput() {
    return this._mustRun;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_data - computed: true, optional: false, required: false
  private _networkData = new ContainerNetworkDataList(this, "network_data", false);
  public get networkData() {
    return this._networkData;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string; 
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // publish_all_ports - computed: false, optional: true, required: false
  private _publishAllPorts?: boolean | cdktf.IResolvable; 
  public get publishAllPorts() {
    return this.getBooleanAttribute('publish_all_ports');
  }
  public set publishAllPorts(value: boolean | cdktf.IResolvable) {
    this._publishAllPorts = value;
  }
  public resetPublishAllPorts() {
    this._publishAllPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishAllPortsInput() {
    return this._publishAllPorts;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // remove_volumes - computed: false, optional: true, required: false
  private _removeVolumes?: boolean | cdktf.IResolvable; 
  public get removeVolumes() {
    return this.getBooleanAttribute('remove_volumes');
  }
  public set removeVolumes(value: boolean | cdktf.IResolvable) {
    this._removeVolumes = value;
  }
  public resetRemoveVolumes() {
    this._removeVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVolumesInput() {
    return this._removeVolumes;
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: string; 
  public get restart() {
    return this.getStringAttribute('restart');
  }
  public set restart(value: string) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // rm - computed: false, optional: true, required: false
  private _rm?: boolean | cdktf.IResolvable; 
  public get rm() {
    return this.getBooleanAttribute('rm');
  }
  public set rm(value: boolean | cdktf.IResolvable) {
    this._rm = value;
  }
  public resetRm() {
    this._rm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmInput() {
    return this._rm;
  }

  // runtime - computed: true, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // security_opts - computed: true, optional: true, required: false
  private _securityOpts?: string[]; 
  public get securityOpts() {
    return cdktf.Fn.tolist(this.getListAttribute('security_opts'));
  }
  public set securityOpts(value: string[]) {
    this._securityOpts = value;
  }
  public resetSecurityOpts() {
    this._securityOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOptsInput() {
    return this._securityOpts;
  }

  // shm_size - computed: true, optional: true, required: false
  private _shmSize?: number; 
  public get shmSize() {
    return this.getNumberAttribute('shm_size');
  }
  public set shmSize(value: number) {
    this._shmSize = value;
  }
  public resetShmSize() {
    this._shmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shmSizeInput() {
    return this._shmSize;
  }

  // start - computed: false, optional: true, required: false
  private _start?: boolean | cdktf.IResolvable; 
  public get start() {
    return this.getBooleanAttribute('start');
  }
  public set start(value: boolean | cdktf.IResolvable) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // stdin_open - computed: false, optional: true, required: false
  private _stdinOpen?: boolean | cdktf.IResolvable; 
  public get stdinOpen() {
    return this.getBooleanAttribute('stdin_open');
  }
  public set stdinOpen(value: boolean | cdktf.IResolvable) {
    this._stdinOpen = value;
  }
  public resetStdinOpen() {
    this._stdinOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinOpenInput() {
    return this._stdinOpen;
  }

  // stop_signal - computed: true, optional: true, required: false
  private _stopSignal?: string; 
  public get stopSignal() {
    return this.getStringAttribute('stop_signal');
  }
  public set stopSignal(value: string) {
    this._stopSignal = value;
  }
  public resetStopSignal() {
    this._stopSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSignalInput() {
    return this._stopSignal;
  }

  // stop_timeout - computed: true, optional: true, required: false
  private _stopTimeout?: number; 
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }
  public set stopTimeout(value: number) {
    this._stopTimeout = value;
  }
  public resetStopTimeout() {
    this._stopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeoutInput() {
    return this._stopTimeout;
  }

  // storage_opts - computed: false, optional: true, required: false
  private _storageOpts?: { [key: string]: string }; 
  public get storageOpts() {
    return this.getStringMapAttribute('storage_opts');
  }
  public set storageOpts(value: { [key: string]: string }) {
    this._storageOpts = value;
  }
  public resetStorageOpts() {
    this._storageOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOptsInput() {
    return this._storageOpts;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // tmpfs - computed: false, optional: true, required: false
  private _tmpfs?: { [key: string]: string }; 
  public get tmpfs() {
    return this.getStringMapAttribute('tmpfs');
  }
  public set tmpfs(value: { [key: string]: string }) {
    this._tmpfs = value;
  }
  public resetTmpfs() {
    this._tmpfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsInput() {
    return this._tmpfs;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: boolean | cdktf.IResolvable; 
  public get tty() {
    return this.getBooleanAttribute('tty');
  }
  public set tty(value: boolean | cdktf.IResolvable) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // userns_mode - computed: false, optional: true, required: false
  private _usernsMode?: string; 
  public get usernsMode() {
    return this.getStringAttribute('userns_mode');
  }
  public set usernsMode(value: string) {
    this._usernsMode = value;
  }
  public resetUsernsMode() {
    this._usernsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernsModeInput() {
    return this._usernsMode;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new ContainerCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: ContainerCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // device_read_bps - computed: false, optional: true, required: false
  private _deviceReadBps = new ContainerDeviceReadBpsList(this, "device_read_bps", true);
  public get deviceReadBps() {
    return this._deviceReadBps;
  }
  public putDeviceReadBps(value: ContainerDeviceReadBps[] | cdktf.IResolvable) {
    this._deviceReadBps.internalValue = value;
  }
  public resetDeviceReadBps() {
    this._deviceReadBps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceReadBpsInput() {
    return this._deviceReadBps.internalValue;
  }

  // device_read_iops - computed: false, optional: true, required: false
  private _deviceReadIops = new ContainerDeviceReadIopsList(this, "device_read_iops", true);
  public get deviceReadIops() {
    return this._deviceReadIops;
  }
  public putDeviceReadIops(value: ContainerDeviceReadIops[] | cdktf.IResolvable) {
    this._deviceReadIops.internalValue = value;
  }
  public resetDeviceReadIops() {
    this._deviceReadIops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceReadIopsInput() {
    return this._deviceReadIops.internalValue;
  }

  // device_requests - computed: false, optional: true, required: false
  private _deviceRequests = new ContainerDeviceRequestsList(this, "device_requests", true);
  public get deviceRequests() {
    return this._deviceRequests;
  }
  public putDeviceRequests(value: ContainerDeviceRequests[] | cdktf.IResolvable) {
    this._deviceRequests.internalValue = value;
  }
  public resetDeviceRequests() {
    this._deviceRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRequestsInput() {
    return this._deviceRequests.internalValue;
  }

  // device_write_bps - computed: false, optional: true, required: false
  private _deviceWriteBps = new ContainerDeviceWriteBpsList(this, "device_write_bps", true);
  public get deviceWriteBps() {
    return this._deviceWriteBps;
  }
  public putDeviceWriteBps(value: ContainerDeviceWriteBps[] | cdktf.IResolvable) {
    this._deviceWriteBps.internalValue = value;
  }
  public resetDeviceWriteBps() {
    this._deviceWriteBps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceWriteBpsInput() {
    return this._deviceWriteBps.internalValue;
  }

  // device_write_iops - computed: false, optional: true, required: false
  private _deviceWriteIops = new ContainerDeviceWriteIopsList(this, "device_write_iops", true);
  public get deviceWriteIops() {
    return this._deviceWriteIops;
  }
  public putDeviceWriteIops(value: ContainerDeviceWriteIops[] | cdktf.IResolvable) {
    this._deviceWriteIops.internalValue = value;
  }
  public resetDeviceWriteIops() {
    this._deviceWriteIops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceWriteIopsInput() {
    return this._deviceWriteIops.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new ContainerDevicesList(this, "devices", true);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: ContainerDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new ContainerHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: ContainerHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new ContainerHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ContainerHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ContainerLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ContainerLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts = new ContainerMountsList(this, "mounts", true);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: ContainerMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }

  // networks_advanced - computed: false, optional: true, required: false
  private _networksAdvanced = new ContainerNetworksAdvancedList(this, "networks_advanced", true);
  public get networksAdvanced() {
    return this._networksAdvanced;
  }
  public putNetworksAdvanced(value: ContainerNetworksAdvanced[] | cdktf.IResolvable) {
    this._networksAdvanced.internalValue = value;
  }
  public resetNetworksAdvanced() {
    this._networksAdvanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksAdvancedInput() {
    return this._networksAdvanced.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new ContainerPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: ContainerPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ulimit - computed: false, optional: true, required: false
  private _ulimit = new ContainerUlimitList(this, "ulimit", true);
  public get ulimit() {
    return this._ulimit;
  }
  public putUlimit(value: ContainerUlimit[] | cdktf.IResolvable) {
    this._ulimit.internalValue = value;
  }
  public resetUlimit() {
    this._ulimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulimitInput() {
    return this._ulimit.internalValue;
  }

  // upload - computed: false, optional: true, required: false
  private _upload = new ContainerUploadList(this, "upload", true);
  public get upload() {
    return this._upload;
  }
  public putUpload(value: ContainerUpload[] | cdktf.IResolvable) {
    this._upload.internalValue = value;
  }
  public resetUpload() {
    this._upload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new ContainerVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ContainerVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach: cdktf.booleanToTerraform(this._attach),
      cgroup_parent: cdktf.stringToTerraform(this._cgroupParent),
      cgroupns_mode: cdktf.stringToTerraform(this._cgroupnsMode),
      command: cdktf.listMapper(cdktf.stringToTerraform, false)(this._command),
      container_read_refresh_timeout_milliseconds: cdktf.numberToTerraform(this._containerReadRefreshTimeoutMilliseconds),
      cpu_period: cdktf.numberToTerraform(this._cpuPeriod),
      cpu_quota: cdktf.numberToTerraform(this._cpuQuota),
      cpu_set: cdktf.stringToTerraform(this._cpuSet),
      cpu_shares: cdktf.numberToTerraform(this._cpuShares),
      cpus: cdktf.stringToTerraform(this._cpus),
      destroy_grace_seconds: cdktf.numberToTerraform(this._destroyGraceSeconds),
      dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
      dns_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsOpts),
      dns_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearch),
      domainname: cdktf.stringToTerraform(this._domainname),
      entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entrypoint),
      env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
      gpus: cdktf.stringToTerraform(this._gpus),
      group_add: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupAdd),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      init: cdktf.booleanToTerraform(this._init),
      ipc_mode: cdktf.stringToTerraform(this._ipcMode),
      log_driver: cdktf.stringToTerraform(this._logDriver),
      log_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._logOpts),
      logs: cdktf.booleanToTerraform(this._logs),
      max_retry_count: cdktf.numberToTerraform(this._maxRetryCount),
      memory: cdktf.numberToTerraform(this._memory),
      memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
      memory_swap: cdktf.numberToTerraform(this._memorySwap),
      must_run: cdktf.booleanToTerraform(this._mustRun),
      name: cdktf.stringToTerraform(this._name),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      pid_mode: cdktf.stringToTerraform(this._pidMode),
      platform: cdktf.stringToTerraform(this._platform),
      privileged: cdktf.booleanToTerraform(this._privileged),
      publish_all_ports: cdktf.booleanToTerraform(this._publishAllPorts),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      remove_volumes: cdktf.booleanToTerraform(this._removeVolumes),
      restart: cdktf.stringToTerraform(this._restart),
      rm: cdktf.booleanToTerraform(this._rm),
      runtime: cdktf.stringToTerraform(this._runtime),
      security_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityOpts),
      shm_size: cdktf.numberToTerraform(this._shmSize),
      start: cdktf.booleanToTerraform(this._start),
      stdin_open: cdktf.booleanToTerraform(this._stdinOpen),
      stop_signal: cdktf.stringToTerraform(this._stopSignal),
      stop_timeout: cdktf.numberToTerraform(this._stopTimeout),
      storage_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageOpts),
      sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(this._sysctls),
      tmpfs: cdktf.hashMapper(cdktf.stringToTerraform)(this._tmpfs),
      tty: cdktf.booleanToTerraform(this._tty),
      user: cdktf.stringToTerraform(this._user),
      userns_mode: cdktf.stringToTerraform(this._usernsMode),
      wait: cdktf.booleanToTerraform(this._wait),
      wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
      working_dir: cdktf.stringToTerraform(this._workingDir),
      capabilities: containerCapabilitiesToTerraform(this._capabilities.internalValue),
      device_read_bps: cdktf.listMapper(containerDeviceReadBpsToTerraform, true)(this._deviceReadBps.internalValue),
      device_read_iops: cdktf.listMapper(containerDeviceReadIopsToTerraform, true)(this._deviceReadIops.internalValue),
      device_requests: cdktf.listMapper(containerDeviceRequestsToTerraform, true)(this._deviceRequests.internalValue),
      device_write_bps: cdktf.listMapper(containerDeviceWriteBpsToTerraform, true)(this._deviceWriteBps.internalValue),
      device_write_iops: cdktf.listMapper(containerDeviceWriteIopsToTerraform, true)(this._deviceWriteIops.internalValue),
      devices: cdktf.listMapper(containerDevicesToTerraform, true)(this._devices.internalValue),
      healthcheck: containerHealthcheckToTerraform(this._healthcheck.internalValue),
      host: cdktf.listMapper(containerHostToTerraform, true)(this._host.internalValue),
      labels: cdktf.listMapper(containerLabelsToTerraform, true)(this._labels.internalValue),
      mounts: cdktf.listMapper(containerMountsToTerraform, true)(this._mounts.internalValue),
      networks_advanced: cdktf.listMapper(containerNetworksAdvancedToTerraform, true)(this._networksAdvanced.internalValue),
      ports: cdktf.listMapper(containerPortsToTerraform, true)(this._ports.internalValue),
      timeouts: containerTimeoutsToTerraform(this._timeouts.internalValue),
      ulimit: cdktf.listMapper(containerUlimitToTerraform, true)(this._ulimit.internalValue),
      upload: cdktf.listMapper(containerUploadToTerraform, true)(this._upload.internalValue),
      volumes: cdktf.listMapper(containerVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach: {
        value: cdktf.booleanToHclTerraform(this._attach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cgroup_parent: {
        value: cdktf.stringToHclTerraform(this._cgroupParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgroupns_mode: {
        value: cdktf.stringToHclTerraform(this._cgroupnsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._command),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      container_read_refresh_timeout_milliseconds: {
        value: cdktf.numberToHclTerraform(this._containerReadRefreshTimeoutMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_period: {
        value: cdktf.numberToHclTerraform(this._cpuPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_quota: {
        value: cdktf.numberToHclTerraform(this._cpuQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_set: {
        value: cdktf.stringToHclTerraform(this._cpuSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_shares: {
        value: cdktf.numberToHclTerraform(this._cpuShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpus: {
        value: cdktf.stringToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_grace_seconds: {
        value: cdktf.numberToHclTerraform(this._destroyGraceSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_opts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsOpts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_search: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearch),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domainname: {
        value: cdktf.stringToHclTerraform(this._domainname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrypoint: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entrypoint),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      env: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gpus: {
        value: cdktf.stringToHclTerraform(this._gpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_add: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupAdd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init: {
        value: cdktf.booleanToHclTerraform(this._init),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipc_mode: {
        value: cdktf.stringToHclTerraform(this._ipcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_driver: {
        value: cdktf.stringToHclTerraform(this._logDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_opts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logOpts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      logs: {
        value: cdktf.booleanToHclTerraform(this._logs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retry_count: {
        value: cdktf.numberToHclTerraform(this._maxRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_reservation: {
        value: cdktf.numberToHclTerraform(this._memoryReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_swap: {
        value: cdktf.numberToHclTerraform(this._memorySwap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      must_run: {
        value: cdktf.booleanToHclTerraform(this._mustRun),
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
      network_mode: {
        value: cdktf.stringToHclTerraform(this._networkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_mode: {
        value: cdktf.stringToHclTerraform(this._pidMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileged: {
        value: cdktf.booleanToHclTerraform(this._privileged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      publish_all_ports: {
        value: cdktf.booleanToHclTerraform(this._publishAllPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_volumes: {
        value: cdktf.booleanToHclTerraform(this._removeVolumes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restart: {
        value: cdktf.stringToHclTerraform(this._restart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rm: {
        value: cdktf.booleanToHclTerraform(this._rm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_opts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityOpts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shm_size: {
        value: cdktf.numberToHclTerraform(this._shmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start: {
        value: cdktf.booleanToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stdin_open: {
        value: cdktf.booleanToHclTerraform(this._stdinOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stop_signal: {
        value: cdktf.stringToHclTerraform(this._stopSignal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_timeout: {
        value: cdktf.numberToHclTerraform(this._stopTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_opts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageOpts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sysctls: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sysctls),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tmpfs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tmpfs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tty: {
        value: cdktf.booleanToHclTerraform(this._tty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userns_mode: {
        value: cdktf.stringToHclTerraform(this._usernsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_timeout: {
        value: cdktf.numberToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      working_dir: {
        value: cdktf.stringToHclTerraform(this._workingDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: containerCapabilitiesToHclTerraform(this._capabilities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerCapabilitiesList",
      },
      device_read_bps: {
        value: cdktf.listMapperHcl(containerDeviceReadBpsToHclTerraform, true)(this._deviceReadBps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerDeviceReadBpsList",
      },
      device_read_iops: {
        value: cdktf.listMapperHcl(containerDeviceReadIopsToHclTerraform, true)(this._deviceReadIops.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerDeviceReadIopsList",
      },
      device_requests: {
        value: cdktf.listMapperHcl(containerDeviceRequestsToHclTerraform, true)(this._deviceRequests.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerDeviceRequestsList",
      },
      device_write_bps: {
        value: cdktf.listMapperHcl(containerDeviceWriteBpsToHclTerraform, true)(this._deviceWriteBps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerDeviceWriteBpsList",
      },
      device_write_iops: {
        value: cdktf.listMapperHcl(containerDeviceWriteIopsToHclTerraform, true)(this._deviceWriteIops.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerDeviceWriteIopsList",
      },
      devices: {
        value: cdktf.listMapperHcl(containerDevicesToHclTerraform, true)(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerDevicesList",
      },
      healthcheck: {
        value: containerHealthcheckToHclTerraform(this._healthcheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerHealthcheckList",
      },
      host: {
        value: cdktf.listMapperHcl(containerHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerHostList",
      },
      labels: {
        value: cdktf.listMapperHcl(containerLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerLabelsList",
      },
      mounts: {
        value: cdktf.listMapperHcl(containerMountsToHclTerraform, true)(this._mounts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerMountsList",
      },
      networks_advanced: {
        value: cdktf.listMapperHcl(containerNetworksAdvancedToHclTerraform, true)(this._networksAdvanced.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerNetworksAdvancedList",
      },
      ports: {
        value: cdktf.listMapperHcl(containerPortsToHclTerraform, true)(this._ports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerPortsList",
      },
      timeouts: {
        value: containerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerTimeouts",
      },
      ulimit: {
        value: cdktf.listMapperHcl(containerUlimitToHclTerraform, true)(this._ulimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerUlimitList",
      },
      upload: {
        value: cdktf.listMapperHcl(containerUploadToHclTerraform, true)(this._upload.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerUploadList",
      },
      volumes: {
        value: cdktf.listMapperHcl(containerVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
