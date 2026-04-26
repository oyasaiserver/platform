import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BuildxBuilderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Append a node to builder instead of changing it
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#append BuildxBuilder#append}
    */
    readonly append?: boolean | cdktf.IResolvable;
    /**
    * Automatically boot the builder after creation. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}
    */
    readonly bootstrap?: boolean | cdktf.IResolvable;
    /**
    * BuildKit daemon config file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}
    */
    readonly buildkitConfig?: string;
    /**
    * BuildKit flags to set for the builder.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}
    */
    readonly buildkitFlags?: string;
    /**
    * The driver to use for the Buildx builder (e.g., docker-container, kubernetes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#driver BuildxBuilder#driver}
    */
    readonly driver?: string;
    /**
    * Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}
    */
    readonly driverOptions?: {
        [key: string]: string;
    };
    /**
    * The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg. DOCKER_HOST value). By default, the current Docker configuration is used for determining the context/endpoint value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#endpoint BuildxBuilder#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#id BuildxBuilder#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the Buildx builder. IF not specified, a random name will be generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#name BuildxBuilder#name}
    */
    readonly name?: string;
    /**
    * Create/modify node with given name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#node BuildxBuilder#node}
    */
    readonly nodeAttribute?: string;
    /**
    * Fixed platforms for current node
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#platform BuildxBuilder#platform}
    */
    readonly platform?: string[];
    /**
    * Set the current builder instance as the default for the current context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#use BuildxBuilder#use}
    */
    readonly use?: boolean | cdktf.IResolvable;
    /**
    * docker_container block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}
    */
    readonly dockerContainer?: BuildxBuilderDockerContainer;
    /**
    * kubernetes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}
    */
    readonly kubernetes?: BuildxBuilderKubernetes;
    /**
    * remote block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#remote BuildxBuilder#remote}
    */
    readonly remote?: BuildxBuilderRemote;
}
export interface BuildxBuilderDockerContainer {
    /**
    * Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}
    */
    readonly cgroupParent?: string;
    /**
    * Sets the CPU CFS scheduler period for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}
    */
    readonly cpuPeriod?: string;
    /**
    * Imposes a CPU CFS quota on the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}
    */
    readonly cpuQuota?: string;
    /**
    * Configures CPU shares (relative weight) of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}
    */
    readonly cpuShares?: string;
    /**
    * Limits the set of CPU cores the container can use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}
    */
    readonly cpusetCpus?: string;
    /**
    * Limits the set of CPU memory nodes the container can use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}
    */
    readonly cpusetMems?: string;
    /**
    * Automatically load images to the Docker Engine image store. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}
    */
    readonly defaultLoad?: boolean | cdktf.IResolvable;
    /**
    * Sets environment variables in the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#env BuildxBuilder#env}
    */
    readonly env?: {
        [key: string]: string;
    };
    /**
    * Sets the BuildKit image to use for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#image BuildxBuilder#image}
    */
    readonly image?: string;
    /**
    * Sets the amount of memory the container can use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}
    */
    readonly memory?: string;
    /**
    * Sets the memory swap limit for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}
    */
    readonly memorySwap?: string;
    /**
    * Sets the network mode for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#network BuildxBuilder#network}
    */
    readonly network?: string;
    /**
    * Sets the container's restart policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}
    */
    readonly restartPolicy?: string;
}
export declare function buildxBuilderDockerContainerToTerraform(struct?: BuildxBuilderDockerContainerOutputReference | BuildxBuilderDockerContainer): any;
export declare function buildxBuilderDockerContainerToHclTerraform(struct?: BuildxBuilderDockerContainerOutputReference | BuildxBuilderDockerContainer): any;
export declare class BuildxBuilderDockerContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BuildxBuilderDockerContainer | undefined;
    set internalValue(value: BuildxBuilderDockerContainer | undefined);
    private _cgroupParent?;
    get cgroupParent(): string;
    set cgroupParent(value: string);
    resetCgroupParent(): void;
    get cgroupParentInput(): string;
    private _cpuPeriod?;
    get cpuPeriod(): string;
    set cpuPeriod(value: string);
    resetCpuPeriod(): void;
    get cpuPeriodInput(): string;
    private _cpuQuota?;
    get cpuQuota(): string;
    set cpuQuota(value: string);
    resetCpuQuota(): void;
    get cpuQuotaInput(): string;
    private _cpuShares?;
    get cpuShares(): string;
    set cpuShares(value: string);
    resetCpuShares(): void;
    get cpuSharesInput(): string;
    private _cpusetCpus?;
    get cpusetCpus(): string;
    set cpusetCpus(value: string);
    resetCpusetCpus(): void;
    get cpusetCpusInput(): string;
    private _cpusetMems?;
    get cpusetMems(): string;
    set cpusetMems(value: string);
    resetCpusetMems(): void;
    get cpusetMemsInput(): string;
    private _defaultLoad?;
    get defaultLoad(): boolean | cdktf.IResolvable;
    set defaultLoad(value: boolean | cdktf.IResolvable);
    resetDefaultLoad(): void;
    get defaultLoadInput(): any;
    private _env?;
    get env(): {
        [key: string]: string;
    };
    set env(value: {
        [key: string]: string;
    });
    resetEnv(): void;
    get envInput(): {
        [key: string]: string;
    };
    private _image?;
    get image(): string;
    set image(value: string);
    resetImage(): void;
    get imageInput(): string;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string;
    private _memorySwap?;
    get memorySwap(): string;
    set memorySwap(value: string);
    resetMemorySwap(): void;
    get memorySwapInput(): string;
    private _network?;
    get network(): string;
    set network(value: string);
    resetNetwork(): void;
    get networkInput(): string;
    private _restartPolicy?;
    get restartPolicy(): string;
    set restartPolicy(value: string);
    resetRestartPolicy(): void;
    get restartPolicyInput(): string;
}
export interface BuildxBuilderKubernetesLimits {
    /**
    * CPU limit for the Kubernetes pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}
    */
    readonly cpu?: string;
    /**
    * Ephemeral storage limit for the Kubernetes pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}
    */
    readonly ephemeralStorage?: string;
    /**
    * Memory limit for the Kubernetes pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}
    */
    readonly memory?: string;
}
export declare function buildxBuilderKubernetesLimitsToTerraform(struct?: BuildxBuilderKubernetesLimitsOutputReference | BuildxBuilderKubernetesLimits): any;
export declare function buildxBuilderKubernetesLimitsToHclTerraform(struct?: BuildxBuilderKubernetesLimitsOutputReference | BuildxBuilderKubernetesLimits): any;
export declare class BuildxBuilderKubernetesLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BuildxBuilderKubernetesLimits | undefined;
    set internalValue(value: BuildxBuilderKubernetesLimits | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string;
    private _ephemeralStorage?;
    get ephemeralStorage(): string;
    set ephemeralStorage(value: string);
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): string;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string;
}
export interface BuildxBuilderKubernetesQemu {
    /**
    * Sets the QEMU emulation image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#image BuildxBuilder#image}
    */
    readonly image?: string;
    /**
    * Install QEMU emulation for multi-platform support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#install BuildxBuilder#install}
    */
    readonly install?: boolean | cdktf.IResolvable;
}
export declare function buildxBuilderKubernetesQemuToTerraform(struct?: BuildxBuilderKubernetesQemuOutputReference | BuildxBuilderKubernetesQemu): any;
export declare function buildxBuilderKubernetesQemuToHclTerraform(struct?: BuildxBuilderKubernetesQemuOutputReference | BuildxBuilderKubernetesQemu): any;
export declare class BuildxBuilderKubernetesQemuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BuildxBuilderKubernetesQemu | undefined;
    set internalValue(value: BuildxBuilderKubernetesQemu | undefined);
    private _image?;
    get image(): string;
    set image(value: string);
    resetImage(): void;
    get imageInput(): string;
    private _install?;
    get install(): boolean | cdktf.IResolvable;
    set install(value: boolean | cdktf.IResolvable);
    resetInstall(): void;
    get installInput(): any;
}
export interface BuildxBuilderKubernetesRequests {
    /**
    * CPU limit for the Kubernetes pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}
    */
    readonly cpu?: string;
    /**
    * Ephemeral storage limit for the Kubernetes pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}
    */
    readonly ephemeralStorage?: string;
    /**
    * Memory limit for the Kubernetes pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}
    */
    readonly memory?: string;
}
export declare function buildxBuilderKubernetesRequestsToTerraform(struct?: BuildxBuilderKubernetesRequestsOutputReference | BuildxBuilderKubernetesRequests): any;
export declare function buildxBuilderKubernetesRequestsToHclTerraform(struct?: BuildxBuilderKubernetesRequestsOutputReference | BuildxBuilderKubernetesRequests): any;
export declare class BuildxBuilderKubernetesRequestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BuildxBuilderKubernetesRequests | undefined;
    set internalValue(value: BuildxBuilderKubernetesRequests | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string;
    private _ephemeralStorage?;
    get ephemeralStorage(): string;
    set ephemeralStorage(value: string);
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): string;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string;
}
export interface BuildxBuilderKubernetes {
    /**
    * Sets additional annotations on the deployments and pods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}
    */
    readonly annotations?: string;
    /**
    * Automatically load images to the Docker Engine image store. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}
    */
    readonly defaultLoad?: boolean | cdktf.IResolvable;
    /**
    * Sets the image to use for running BuildKit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#image BuildxBuilder#image}
    */
    readonly image?: string;
    /**
    * Sets additional labels on the deployments and pods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#labels BuildxBuilder#labels}
    */
    readonly labels?: string;
    /**
    * Load-balancing strategy (sticky or random).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}
    */
    readonly loadbalance?: string;
    /**
    * Sets the Kubernetes namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}
    */
    readonly namespace?: string;
    /**
    * Sets the pod's nodeSelector label(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}
    */
    readonly nodeselector?: string;
    /**
    * Sets the number of Pod replicas to create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}
    */
    readonly replicas?: number;
    /**
    * Run the container as a non-root user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}
    */
    readonly rootless?: boolean | cdktf.IResolvable;
    /**
    * Sets the scheduler responsible for scheduling the pod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}
    */
    readonly schedulername?: string;
    /**
    * Sets the pod's serviceAccountName.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}
    */
    readonly serviceaccount?: string;
    /**
    * Set the timeout limit for pod provisioning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}
    */
    readonly timeout?: string;
    /**
    * Configures the pod's taint toleration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}
    */
    readonly tolerations?: string;
    /**
    * limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#limits BuildxBuilder#limits}
    */
    readonly limits?: BuildxBuilderKubernetesLimits;
    /**
    * qemu block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}
    */
    readonly qemu?: BuildxBuilderKubernetesQemu;
    /**
    * requests block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#requests BuildxBuilder#requests}
    */
    readonly requests?: BuildxBuilderKubernetesRequests;
}
export declare function buildxBuilderKubernetesToTerraform(struct?: BuildxBuilderKubernetesOutputReference | BuildxBuilderKubernetes): any;
export declare function buildxBuilderKubernetesToHclTerraform(struct?: BuildxBuilderKubernetesOutputReference | BuildxBuilderKubernetes): any;
export declare class BuildxBuilderKubernetesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BuildxBuilderKubernetes | undefined;
    set internalValue(value: BuildxBuilderKubernetes | undefined);
    private _annotations?;
    get annotations(): string;
    set annotations(value: string);
    resetAnnotations(): void;
    get annotationsInput(): string;
    private _defaultLoad?;
    get defaultLoad(): boolean | cdktf.IResolvable;
    set defaultLoad(value: boolean | cdktf.IResolvable);
    resetDefaultLoad(): void;
    get defaultLoadInput(): any;
    private _image?;
    get image(): string;
    set image(value: string);
    resetImage(): void;
    get imageInput(): string;
    private _labels?;
    get labels(): string;
    set labels(value: string);
    resetLabels(): void;
    get labelsInput(): string;
    private _loadbalance?;
    get loadbalance(): string;
    set loadbalance(value: string);
    resetLoadbalance(): void;
    get loadbalanceInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _nodeselector?;
    get nodeselector(): string;
    set nodeselector(value: string);
    resetNodeselector(): void;
    get nodeselectorInput(): string;
    private _replicas?;
    get replicas(): number;
    set replicas(value: number);
    resetReplicas(): void;
    get replicasInput(): number;
    private _rootless?;
    get rootless(): boolean | cdktf.IResolvable;
    set rootless(value: boolean | cdktf.IResolvable);
    resetRootless(): void;
    get rootlessInput(): any;
    private _schedulername?;
    get schedulername(): string;
    set schedulername(value: string);
    resetSchedulername(): void;
    get schedulernameInput(): string;
    private _serviceaccount?;
    get serviceaccount(): string;
    set serviceaccount(value: string);
    resetServiceaccount(): void;
    get serviceaccountInput(): string;
    private _timeout?;
    get timeout(): string;
    set timeout(value: string);
    resetTimeout(): void;
    get timeoutInput(): string;
    private _tolerations?;
    get tolerations(): string;
    set tolerations(value: string);
    resetTolerations(): void;
    get tolerationsInput(): string;
    private _limits;
    get limits(): BuildxBuilderKubernetesLimitsOutputReference;
    putLimits(value: BuildxBuilderKubernetesLimits): void;
    resetLimits(): void;
    get limitsInput(): BuildxBuilderKubernetesLimits;
    private _qemu;
    get qemu(): BuildxBuilderKubernetesQemuOutputReference;
    putQemu(value: BuildxBuilderKubernetesQemu): void;
    resetQemu(): void;
    get qemuInput(): BuildxBuilderKubernetesQemu;
    private _requests;
    get requests(): BuildxBuilderKubernetesRequestsOutputReference;
    putRequests(value: BuildxBuilderKubernetesRequests): void;
    resetRequests(): void;
    get requestsInput(): BuildxBuilderKubernetesRequests;
}
export interface BuildxBuilderRemote {
    /**
    * Absolute path to the TLS certificate authority used for validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}
    */
    readonly cacert?: string;
    /**
    * Absolute path to the TLS client certificate to present to buildkitd.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#cert BuildxBuilder#cert}
    */
    readonly cert?: string;
    /**
    * Automatically load images to the Docker Engine image store. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}
    */
    readonly defaultLoad?: boolean | cdktf.IResolvable;
    /**
    * Sets the TLS client key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#key BuildxBuilder#key}
    */
    readonly key?: string;
    /**
    * TLS server name used in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#servername BuildxBuilder#servername}
    */
    readonly servername?: string;
}
export declare function buildxBuilderRemoteToTerraform(struct?: BuildxBuilderRemoteOutputReference | BuildxBuilderRemote): any;
export declare function buildxBuilderRemoteToHclTerraform(struct?: BuildxBuilderRemoteOutputReference | BuildxBuilderRemote): any;
export declare class BuildxBuilderRemoteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BuildxBuilderRemote | undefined;
    set internalValue(value: BuildxBuilderRemote | undefined);
    private _cacert?;
    get cacert(): string;
    set cacert(value: string);
    resetCacert(): void;
    get cacertInput(): string;
    private _cert?;
    get cert(): string;
    set cert(value: string);
    resetCert(): void;
    get certInput(): string;
    private _defaultLoad?;
    get defaultLoad(): boolean | cdktf.IResolvable;
    set defaultLoad(value: boolean | cdktf.IResolvable);
    resetDefaultLoad(): void;
    get defaultLoadInput(): any;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _servername?;
    get servername(): string;
    set servername(value: string);
    resetServername(): void;
    get servernameInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder docker_buildx_builder}
*/
export declare class BuildxBuilder extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_buildx_builder";
    /**
    * Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BuildxBuilder to import
    * @param importFromId The id of the existing BuildxBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BuildxBuilder to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder docker_buildx_builder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BuildxBuilderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: BuildxBuilderConfig);
    private _append?;
    get append(): boolean | cdktf.IResolvable;
    set append(value: boolean | cdktf.IResolvable);
    resetAppend(): void;
    get appendInput(): any;
    private _bootstrap?;
    get bootstrap(): boolean | cdktf.IResolvable;
    set bootstrap(value: boolean | cdktf.IResolvable);
    resetBootstrap(): void;
    get bootstrapInput(): any;
    private _buildkitConfig?;
    get buildkitConfig(): string;
    set buildkitConfig(value: string);
    resetBuildkitConfig(): void;
    get buildkitConfigInput(): string;
    private _buildkitFlags?;
    get buildkitFlags(): string;
    set buildkitFlags(value: string);
    resetBuildkitFlags(): void;
    get buildkitFlagsInput(): string;
    private _driver?;
    get driver(): string;
    set driver(value: string);
    resetDriver(): void;
    get driverInput(): string;
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
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _node?;
    get nodeAttribute(): string;
    set nodeAttribute(value: string);
    resetNodeAttribute(): void;
    get nodeAttributeInput(): string;
    private _platform?;
    get platform(): string[];
    set platform(value: string[]);
    resetPlatform(): void;
    get platformInput(): string[];
    private _use?;
    get use(): boolean | cdktf.IResolvable;
    set use(value: boolean | cdktf.IResolvable);
    resetUse(): void;
    get useInput(): any;
    private _dockerContainer;
    get dockerContainer(): BuildxBuilderDockerContainerOutputReference;
    putDockerContainer(value: BuildxBuilderDockerContainer): void;
    resetDockerContainer(): void;
    get dockerContainerInput(): BuildxBuilderDockerContainer;
    private _kubernetes;
    get kubernetes(): BuildxBuilderKubernetesOutputReference;
    putKubernetes(value: BuildxBuilderKubernetes): void;
    resetKubernetes(): void;
    get kubernetesInput(): BuildxBuilderKubernetes;
    private _remote;
    get remote(): BuildxBuilderRemoteOutputReference;
    putRemote(value: BuildxBuilderRemote): void;
    resetRemote(): void;
    get remoteInput(): BuildxBuilderRemote;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
