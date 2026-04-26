import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#id Service#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#name Service#name}
    */
    readonly name: string;
    /**
    * auth block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#auth Service#auth}
    */
    readonly auth?: ServiceAuth;
    /**
    * converge_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#converge_config Service#converge_config}
    */
    readonly convergeConfig?: ServiceConvergeConfig;
    /**
    * endpoint_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#endpoint_spec Service#endpoint_spec}
    */
    readonly endpointSpec?: ServiceEndpointSpec;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#labels Service#labels}
    */
    readonly labels?: ServiceLabels[] | cdktf.IResolvable;
    /**
    * mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#mode Service#mode}
    */
    readonly mode?: ServiceMode;
    /**
    * rollback_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#rollback_config Service#rollback_config}
    */
    readonly rollbackConfig?: ServiceRollbackConfig;
    /**
    * task_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#task_spec Service#task_spec}
    */
    readonly taskSpec: ServiceTaskSpec;
    /**
    * update_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#update_config Service#update_config}
    */
    readonly updateConfig?: ServiceUpdateConfig;
}
export interface ServiceAuth {
    /**
    * The password
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#password Service#password}
    */
    readonly password?: string;
    /**
    * The address of the server for the authentication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#server_address Service#server_address}
    */
    readonly serverAddress: string;
    /**
    * The username
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#username Service#username}
    */
    readonly username?: string;
}
export declare function serviceAuthToTerraform(struct?: ServiceAuthOutputReference | ServiceAuth): any;
export declare function serviceAuthToHclTerraform(struct?: ServiceAuthOutputReference | ServiceAuth): any;
export declare class ServiceAuthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceAuth | undefined;
    set internalValue(value: ServiceAuth | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _serverAddress?;
    get serverAddress(): string;
    set serverAddress(value: string);
    get serverAddressInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
}
export interface ServiceConvergeConfig {
    /**
    * The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#delay Service#delay}
    */
    readonly delay?: string;
    /**
    * The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#timeout Service#timeout}
    */
    readonly timeout?: string;
}
export declare function serviceConvergeConfigToTerraform(struct?: ServiceConvergeConfigOutputReference | ServiceConvergeConfig): any;
export declare function serviceConvergeConfigToHclTerraform(struct?: ServiceConvergeConfigOutputReference | ServiceConvergeConfig): any;
export declare class ServiceConvergeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceConvergeConfig | undefined;
    set internalValue(value: ServiceConvergeConfig | undefined);
    private _delay?;
    get delay(): string;
    set delay(value: string);
    resetDelay(): void;
    get delayInput(): string;
    private _timeout?;
    get timeout(): string;
    set timeout(value: string);
    resetTimeout(): void;
    get timeoutInput(): string;
}
export interface ServiceEndpointSpecPorts {
    /**
    * A random name for the port
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#name Service#name}
    */
    readonly name?: string;
    /**
    * Represents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#protocol Service#protocol}
    */
    readonly protocol?: string;
    /**
    * Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#publish_mode Service#publish_mode}
    */
    readonly publishMode?: string;
    /**
    * The port on the swarm hosts
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#published_port Service#published_port}
    */
    readonly publishedPort?: number;
    /**
    * The port inside the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#target_port Service#target_port}
    */
    readonly targetPort: number;
}
export declare function serviceEndpointSpecPortsToTerraform(struct?: ServiceEndpointSpecPorts | cdktf.IResolvable): any;
export declare function serviceEndpointSpecPortsToHclTerraform(struct?: ServiceEndpointSpecPorts | cdktf.IResolvable): any;
export declare class ServiceEndpointSpecPortsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceEndpointSpecPorts | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceEndpointSpecPorts | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
    private _publishMode?;
    get publishMode(): string;
    set publishMode(value: string);
    resetPublishMode(): void;
    get publishModeInput(): string;
    private _publishedPort?;
    get publishedPort(): number;
    set publishedPort(value: number);
    resetPublishedPort(): void;
    get publishedPortInput(): number;
    private _targetPort?;
    get targetPort(): number;
    set targetPort(value: number);
    get targetPortInput(): number;
}
export declare class ServiceEndpointSpecPortsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceEndpointSpecPorts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceEndpointSpecPortsOutputReference;
}
export interface ServiceEndpointSpec {
    /**
    * The mode of resolution to use for internal load balancing between tasks
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#mode Service#mode}
    */
    readonly mode?: string;
    /**
    * ports block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#ports Service#ports}
    */
    readonly ports?: ServiceEndpointSpecPorts[] | cdktf.IResolvable;
}
export declare function serviceEndpointSpecToTerraform(struct?: ServiceEndpointSpecOutputReference | ServiceEndpointSpec): any;
export declare function serviceEndpointSpecToHclTerraform(struct?: ServiceEndpointSpecOutputReference | ServiceEndpointSpec): any;
export declare class ServiceEndpointSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceEndpointSpec | undefined;
    set internalValue(value: ServiceEndpointSpec | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _ports;
    get ports(): ServiceEndpointSpecPortsList;
    putPorts(value: ServiceEndpointSpecPorts[] | cdktf.IResolvable): void;
    resetPorts(): void;
    get portsInput(): any;
}
export interface ServiceLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#label Service#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#value Service#value}
    */
    readonly value: string;
}
export declare function serviceLabelsToTerraform(struct?: ServiceLabels | cdktf.IResolvable): any;
export declare function serviceLabelsToHclTerraform(struct?: ServiceLabels | cdktf.IResolvable): any;
export declare class ServiceLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceLabels | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class ServiceLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceLabelsOutputReference;
}
export interface ServiceModeReplicated {
    /**
    * The amount of replicas of the service. Defaults to `1`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#replicas Service#replicas}
    */
    readonly replicas?: number;
}
export declare function serviceModeReplicatedToTerraform(struct?: ServiceModeReplicatedOutputReference | ServiceModeReplicated): any;
export declare function serviceModeReplicatedToHclTerraform(struct?: ServiceModeReplicatedOutputReference | ServiceModeReplicated): any;
export declare class ServiceModeReplicatedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceModeReplicated | undefined;
    set internalValue(value: ServiceModeReplicated | undefined);
    private _replicas?;
    get replicas(): number;
    set replicas(value: number);
    resetReplicas(): void;
    get replicasInput(): number;
}
export interface ServiceMode {
    /**
    * The global service mode. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#global Service#global}
    */
    readonly global?: boolean | cdktf.IResolvable;
    /**
    * replicated block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#replicated Service#replicated}
    */
    readonly replicated?: ServiceModeReplicated;
}
export declare function serviceModeToTerraform(struct?: ServiceModeOutputReference | ServiceMode): any;
export declare function serviceModeToHclTerraform(struct?: ServiceModeOutputReference | ServiceMode): any;
export declare class ServiceModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceMode | undefined;
    set internalValue(value: ServiceMode | undefined);
    private _global?;
    get global(): boolean | cdktf.IResolvable;
    set global(value: boolean | cdktf.IResolvable);
    resetGlobal(): void;
    get globalInput(): any;
    private _replicated;
    get replicated(): ServiceModeReplicatedOutputReference;
    putReplicated(value: ServiceModeReplicated): void;
    resetReplicated(): void;
    get replicatedInput(): ServiceModeReplicated;
}
export interface ServiceRollbackConfig {
    /**
    * Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#delay Service#delay}
    */
    readonly delay?: string;
    /**
    * Action on rollback failure: pause | continue. Defaults to `pause`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#failure_action Service#failure_action}
    */
    readonly failureAction?: string;
    /**
    * Failure rate to tolerate during a rollback. Defaults to `0.0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}
    */
    readonly maxFailureRatio?: string;
    /**
    * Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#monitor Service#monitor}
    */
    readonly monitor?: string;
    /**
    * Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#order Service#order}
    */
    readonly order?: string;
    /**
    * Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#parallelism Service#parallelism}
    */
    readonly parallelism?: number;
}
export declare function serviceRollbackConfigToTerraform(struct?: ServiceRollbackConfigOutputReference | ServiceRollbackConfig): any;
export declare function serviceRollbackConfigToHclTerraform(struct?: ServiceRollbackConfigOutputReference | ServiceRollbackConfig): any;
export declare class ServiceRollbackConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceRollbackConfig | undefined;
    set internalValue(value: ServiceRollbackConfig | undefined);
    private _delay?;
    get delay(): string;
    set delay(value: string);
    resetDelay(): void;
    get delayInput(): string;
    private _failureAction?;
    get failureAction(): string;
    set failureAction(value: string);
    resetFailureAction(): void;
    get failureActionInput(): string;
    private _maxFailureRatio?;
    get maxFailureRatio(): string;
    set maxFailureRatio(value: string);
    resetMaxFailureRatio(): void;
    get maxFailureRatioInput(): string;
    private _monitor?;
    get monitor(): string;
    set monitor(value: string);
    resetMonitor(): void;
    get monitorInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _parallelism?;
    get parallelism(): number;
    set parallelism(value: number);
    resetParallelism(): void;
    get parallelismInput(): number;
}
export interface ServiceTaskSpecContainerSpecConfigs {
    /**
    * ID of the specific config that we're referencing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#config_id Service#config_id}
    */
    readonly configId: string;
    /**
    * Name of the config that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#config_name Service#config_name}
    */
    readonly configName?: string;
    /**
    * Represents the file GID. Defaults to `0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_gid Service#file_gid}
    */
    readonly fileGid?: string;
    /**
    * Represents represents the FileMode of the file. Defaults to `0o444`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_mode Service#file_mode}
    */
    readonly fileMode?: number;
    /**
    * Represents the final filename in the filesystem
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_name Service#file_name}
    */
    readonly fileName: string;
    /**
    * Represents the file UID. Defaults to `0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_uid Service#file_uid}
    */
    readonly fileUid?: string;
}
export declare function serviceTaskSpecContainerSpecConfigsToTerraform(struct?: ServiceTaskSpecContainerSpecConfigs | cdktf.IResolvable): any;
export declare function serviceTaskSpecContainerSpecConfigsToHclTerraform(struct?: ServiceTaskSpecContainerSpecConfigs | cdktf.IResolvable): any;
export declare class ServiceTaskSpecContainerSpecConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecContainerSpecConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecConfigs | cdktf.IResolvable | undefined);
    private _configId?;
    get configId(): string;
    set configId(value: string);
    get configIdInput(): string;
    private _configName?;
    get configName(): string;
    set configName(value: string);
    resetConfigName(): void;
    get configNameInput(): string;
    private _fileGid?;
    get fileGid(): string;
    set fileGid(value: string);
    resetFileGid(): void;
    get fileGidInput(): string;
    private _fileMode?;
    get fileMode(): number;
    set fileMode(value: number);
    resetFileMode(): void;
    get fileModeInput(): number;
    private _fileName?;
    get fileName(): string;
    set fileName(value: string);
    get fileNameInput(): string;
    private _fileUid?;
    get fileUid(): string;
    set fileUid(value: string);
    resetFileUid(): void;
    get fileUidInput(): string;
}
export declare class ServiceTaskSpecContainerSpecConfigsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecContainerSpecConfigs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecContainerSpecConfigsOutputReference;
}
export interface ServiceTaskSpecContainerSpecDnsConfig {
    /**
    * The IP addresses of the name servers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#nameservers Service#nameservers}
    */
    readonly nameservers: string[];
    /**
    * A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#options Service#options}
    */
    readonly options?: string[];
    /**
    * A search list for host-name lookup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#search Service#search}
    */
    readonly search?: string[];
}
export declare function serviceTaskSpecContainerSpecDnsConfigToTerraform(struct?: ServiceTaskSpecContainerSpecDnsConfigOutputReference | ServiceTaskSpecContainerSpecDnsConfig): any;
export declare function serviceTaskSpecContainerSpecDnsConfigToHclTerraform(struct?: ServiceTaskSpecContainerSpecDnsConfigOutputReference | ServiceTaskSpecContainerSpecDnsConfig): any;
export declare class ServiceTaskSpecContainerSpecDnsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecDnsConfig | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecDnsConfig | undefined);
    private _nameservers?;
    get nameservers(): string[];
    set nameservers(value: string[]);
    get nameserversInput(): string[];
    private _options?;
    get options(): string[];
    set options(value: string[]);
    resetOptions(): void;
    get optionsInput(): string[];
    private _search?;
    get search(): string[];
    set search(value: string[]);
    resetSearch(): void;
    get searchInput(): string[];
}
export interface ServiceTaskSpecContainerSpecHealthcheck {
    /**
    * Time between running the check (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#interval Service#interval}
    */
    readonly interval?: string;
    /**
    * Consecutive failures needed to report unhealthy. Defaults to `0`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#retries Service#retries}
    */
    readonly retries?: number;
    /**
    * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#start_period Service#start_period}
    */
    readonly startPeriod?: string;
    /**
    * The test to perform as list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#test Service#test}
    */
    readonly test?: string[];
    /**
    * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#timeout Service#timeout}
    */
    readonly timeout?: string;
}
export declare function serviceTaskSpecContainerSpecHealthcheckToTerraform(struct?: ServiceTaskSpecContainerSpecHealthcheckOutputReference | ServiceTaskSpecContainerSpecHealthcheck): any;
export declare function serviceTaskSpecContainerSpecHealthcheckToHclTerraform(struct?: ServiceTaskSpecContainerSpecHealthcheckOutputReference | ServiceTaskSpecContainerSpecHealthcheck): any;
export declare class ServiceTaskSpecContainerSpecHealthcheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecHealthcheck | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecHealthcheck | undefined);
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
export interface ServiceTaskSpecContainerSpecHosts {
    /**
    * The name of the host
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#host Service#host}
    */
    readonly host: string;
    /**
    * The ip of the host
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#ip Service#ip}
    */
    readonly ip: string;
}
export declare function serviceTaskSpecContainerSpecHostsToTerraform(struct?: ServiceTaskSpecContainerSpecHosts | cdktf.IResolvable): any;
export declare function serviceTaskSpecContainerSpecHostsToHclTerraform(struct?: ServiceTaskSpecContainerSpecHosts | cdktf.IResolvable): any;
export declare class ServiceTaskSpecContainerSpecHostsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecContainerSpecHosts | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecHosts | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export declare class ServiceTaskSpecContainerSpecHostsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecContainerSpecHosts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecContainerSpecHostsOutputReference;
}
export interface ServiceTaskSpecContainerSpecLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#label Service#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#value Service#value}
    */
    readonly value: string;
}
export declare function serviceTaskSpecContainerSpecLabelsToTerraform(struct?: ServiceTaskSpecContainerSpecLabels | cdktf.IResolvable): any;
export declare function serviceTaskSpecContainerSpecLabelsToHclTerraform(struct?: ServiceTaskSpecContainerSpecLabels | cdktf.IResolvable): any;
export declare class ServiceTaskSpecContainerSpecLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecContainerSpecLabels | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class ServiceTaskSpecContainerSpecLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecContainerSpecLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecContainerSpecLabelsOutputReference;
}
export interface ServiceTaskSpecContainerSpecMountsBindOptions {
    /**
    * Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#propagation Service#propagation}
    */
    readonly propagation?: string;
}
export declare function serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference | ServiceTaskSpecContainerSpecMountsBindOptions): any;
export declare function serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform(struct?: ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference | ServiceTaskSpecContainerSpecMountsBindOptions): any;
export declare class ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecMountsBindOptions | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecMountsBindOptions | undefined);
    private _propagation?;
    get propagation(): string;
    set propagation(value: string);
    resetPropagation(): void;
    get propagationInput(): string;
}
export interface ServiceTaskSpecContainerSpecMountsTmpfsOptions {
    /**
    * The permission mode for the tmpfs mount in an integer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#mode Service#mode}
    */
    readonly mode?: number;
    /**
    * The size for the tmpfs mount in bytes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#size_bytes Service#size_bytes}
    */
    readonly sizeBytes?: number;
}
export declare function serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference | ServiceTaskSpecContainerSpecMountsTmpfsOptions): any;
export declare function serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform(struct?: ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference | ServiceTaskSpecContainerSpecMountsTmpfsOptions): any;
export declare class ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecMountsTmpfsOptions | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecMountsTmpfsOptions | undefined);
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
export interface ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#label Service#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#value Service#value}
    */
    readonly value: string;
}
export declare function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels | cdktf.IResolvable): any;
export declare function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels | cdktf.IResolvable): any;
export declare class ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference;
}
export interface ServiceTaskSpecContainerSpecMountsVolumeOptions {
    /**
    * Name of the driver to use to create the volume
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#driver_name Service#driver_name}
    */
    readonly driverName?: string;
    /**
    * key/value map of driver specific options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#driver_options Service#driver_options}
    */
    readonly driverOptions?: {
        [key: string]: string;
    };
    /**
    * Populate volume with data from the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#no_copy Service#no_copy}
    */
    readonly noCopy?: boolean | cdktf.IResolvable;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#labels Service#labels}
    */
    readonly labels?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[] | cdktf.IResolvable;
}
export declare function serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference | ServiceTaskSpecContainerSpecMountsVolumeOptions): any;
export declare function serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference | ServiceTaskSpecContainerSpecMountsVolumeOptions): any;
export declare class ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecMountsVolumeOptions | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecMountsVolumeOptions | undefined);
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
    private _labels;
    get labels(): ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList;
    putLabels(value: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
}
export interface ServiceTaskSpecContainerSpecMounts {
    /**
    * Whether the mount should be read-only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#read_only Service#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Mount source (e.g. a volume name, a host path)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#source Service#source}
    */
    readonly source?: string;
    /**
    * Container path
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#target Service#target}
    */
    readonly target: string;
    /**
    * The mount type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#type Service#type}
    */
    readonly type: string;
    /**
    * bind_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#bind_options Service#bind_options}
    */
    readonly bindOptions?: ServiceTaskSpecContainerSpecMountsBindOptions;
    /**
    * tmpfs_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#tmpfs_options Service#tmpfs_options}
    */
    readonly tmpfsOptions?: ServiceTaskSpecContainerSpecMountsTmpfsOptions;
    /**
    * volume_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#volume_options Service#volume_options}
    */
    readonly volumeOptions?: ServiceTaskSpecContainerSpecMountsVolumeOptions;
}
export declare function serviceTaskSpecContainerSpecMountsToTerraform(struct?: ServiceTaskSpecContainerSpecMounts | cdktf.IResolvable): any;
export declare function serviceTaskSpecContainerSpecMountsToHclTerraform(struct?: ServiceTaskSpecContainerSpecMounts | cdktf.IResolvable): any;
export declare class ServiceTaskSpecContainerSpecMountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecContainerSpecMounts | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecMounts | cdktf.IResolvable | undefined);
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
    get bindOptions(): ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference;
    putBindOptions(value: ServiceTaskSpecContainerSpecMountsBindOptions): void;
    resetBindOptions(): void;
    get bindOptionsInput(): ServiceTaskSpecContainerSpecMountsBindOptions;
    private _tmpfsOptions;
    get tmpfsOptions(): ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference;
    putTmpfsOptions(value: ServiceTaskSpecContainerSpecMountsTmpfsOptions): void;
    resetTmpfsOptions(): void;
    get tmpfsOptionsInput(): ServiceTaskSpecContainerSpecMountsTmpfsOptions;
    private _volumeOptions;
    get volumeOptions(): ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference;
    putVolumeOptions(value: ServiceTaskSpecContainerSpecMountsVolumeOptions): void;
    resetVolumeOptions(): void;
    get volumeOptionsInput(): ServiceTaskSpecContainerSpecMountsVolumeOptions;
}
export declare class ServiceTaskSpecContainerSpecMountsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecContainerSpecMounts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecContainerSpecMountsOutputReference;
}
export interface ServiceTaskSpecContainerSpecPrivilegesCredentialSpec {
    /**
    * Load credential spec from this file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file Service#file}
    */
    readonly file?: string;
    /**
    * Load credential spec from this value in the Windows registry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#registry Service#registry}
    */
    readonly registry?: string;
}
export declare function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference | ServiceTaskSpecContainerSpecPrivilegesCredentialSpec): any;
export declare function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference | ServiceTaskSpecContainerSpecPrivilegesCredentialSpec): any;
export declare class ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecPrivilegesCredentialSpec | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec | undefined);
    private _file?;
    get file(): string;
    set file(value: string);
    resetFile(): void;
    get fileInput(): string;
    private _registry?;
    get registry(): string;
    set registry(value: string);
    resetRegistry(): void;
    get registryInput(): string;
}
export interface ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext {
    /**
    * Disable SELinux
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#disable Service#disable}
    */
    readonly disable?: boolean | cdktf.IResolvable;
    /**
    * SELinux level label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#level Service#level}
    */
    readonly level?: string;
    /**
    * SELinux role label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#role Service#role}
    */
    readonly role?: string;
    /**
    * SELinux type label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#type Service#type}
    */
    readonly type?: string;
    /**
    * SELinux user label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#user Service#user}
    */
    readonly user?: string;
}
export declare function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference | ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext): any;
export declare function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference | ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext): any;
export declare class ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext | undefined);
    private _disable?;
    get disable(): boolean | cdktf.IResolvable;
    set disable(value: boolean | cdktf.IResolvable);
    resetDisable(): void;
    get disableInput(): any;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    resetRole(): void;
    get roleInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    resetUser(): void;
    get userInput(): string;
}
export interface ServiceTaskSpecContainerSpecPrivileges {
    /**
    * credential_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#credential_spec Service#credential_spec}
    */
    readonly credentialSpec?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
    /**
    * se_linux_context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#se_linux_context Service#se_linux_context}
    */
    readonly seLinuxContext?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
}
export declare function serviceTaskSpecContainerSpecPrivilegesToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesOutputReference | ServiceTaskSpecContainerSpecPrivileges): any;
export declare function serviceTaskSpecContainerSpecPrivilegesToHclTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesOutputReference | ServiceTaskSpecContainerSpecPrivileges): any;
export declare class ServiceTaskSpecContainerSpecPrivilegesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpecPrivileges | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecPrivileges | undefined);
    private _credentialSpec;
    get credentialSpec(): ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference;
    putCredentialSpec(value: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec): void;
    resetCredentialSpec(): void;
    get credentialSpecInput(): ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
    private _seLinuxContext;
    get seLinuxContext(): ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference;
    putSeLinuxContext(value: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext): void;
    resetSeLinuxContext(): void;
    get seLinuxContextInput(): ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
}
export interface ServiceTaskSpecContainerSpecSecrets {
    /**
    * Represents the file GID. Defaults to `0`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_gid Service#file_gid}
    */
    readonly fileGid?: string;
    /**
    * Represents represents the FileMode of the file. Defaults to `0o444`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_mode Service#file_mode}
    */
    readonly fileMode?: number;
    /**
    * Represents the final filename in the filesystem
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_name Service#file_name}
    */
    readonly fileName: string;
    /**
    * Represents the file UID. Defaults to `0`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#file_uid Service#file_uid}
    */
    readonly fileUid?: string;
    /**
    * ID of the specific secret that we're referencing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#secret_id Service#secret_id}
    */
    readonly secretId: string;
    /**
    * Name of the secret that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#secret_name Service#secret_name}
    */
    readonly secretName?: string;
}
export declare function serviceTaskSpecContainerSpecSecretsToTerraform(struct?: ServiceTaskSpecContainerSpecSecrets | cdktf.IResolvable): any;
export declare function serviceTaskSpecContainerSpecSecretsToHclTerraform(struct?: ServiceTaskSpecContainerSpecSecrets | cdktf.IResolvable): any;
export declare class ServiceTaskSpecContainerSpecSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecContainerSpecSecrets | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpecSecrets | cdktf.IResolvable | undefined);
    private _fileGid?;
    get fileGid(): string;
    set fileGid(value: string);
    resetFileGid(): void;
    get fileGidInput(): string;
    private _fileMode?;
    get fileMode(): number;
    set fileMode(value: number);
    resetFileMode(): void;
    get fileModeInput(): number;
    private _fileName?;
    get fileName(): string;
    set fileName(value: string);
    get fileNameInput(): string;
    private _fileUid?;
    get fileUid(): string;
    set fileUid(value: string);
    resetFileUid(): void;
    get fileUidInput(): string;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    resetSecretName(): void;
    get secretNameInput(): string;
}
export declare class ServiceTaskSpecContainerSpecSecretsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecContainerSpecSecrets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecContainerSpecSecretsOutputReference;
}
export interface ServiceTaskSpecContainerSpec {
    /**
    * Arguments to the command
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#args Service#args}
    */
    readonly args?: string[];
    /**
    * List of Linux capabilities to add to the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#cap_add Service#cap_add}
    */
    readonly capAdd?: string[];
    /**
    * List of Linux capabilities to drop from the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#cap_drop Service#cap_drop}
    */
    readonly capDrop?: string[];
    /**
    * The command/entrypoint to be run in the image. According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#command Service#command}
    */
    readonly command?: string[];
    /**
    * The working directory for commands to run in
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#dir Service#dir}
    */
    readonly dir?: string;
    /**
    * A list of environment variables in the form VAR="value"
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#env Service#env}
    */
    readonly env?: {
        [key: string]: string;
    };
    /**
    * A list of additional groups that the container process will run as
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#groups Service#groups}
    */
    readonly groups?: string[];
    /**
    * The hostname to use for the container, as a valid RFC 1123 hostname
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#hostname Service#hostname}
    */
    readonly hostname?: string;
    /**
    * The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#image Service#image}
    */
    readonly image: string;
    /**
    * Isolation technology of the containers running the service. (Windows only). Defaults to `default`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#isolation Service#isolation}
    */
    readonly isolation?: string;
    /**
    * Mount the container's root filesystem as read only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#read_only Service#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h). If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#stop_grace_period Service#stop_grace_period}
    */
    readonly stopGracePeriod?: string;
    /**
    * Signal to stop the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#stop_signal Service#stop_signal}
    */
    readonly stopSignal?: string;
    /**
    * Sysctls config (Linux only)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#sysctl Service#sysctl}
    */
    readonly sysctl?: {
        [key: string]: string;
    };
    /**
    * The user inside the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#user Service#user}
    */
    readonly user?: string;
    /**
    * configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#configs Service#configs}
    */
    readonly configs?: ServiceTaskSpecContainerSpecConfigs[] | cdktf.IResolvable;
    /**
    * dns_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#dns_config Service#dns_config}
    */
    readonly dnsConfig?: ServiceTaskSpecContainerSpecDnsConfig;
    /**
    * healthcheck block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#healthcheck Service#healthcheck}
    */
    readonly healthcheck?: ServiceTaskSpecContainerSpecHealthcheck;
    /**
    * hosts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#hosts Service#hosts}
    */
    readonly hosts?: ServiceTaskSpecContainerSpecHosts[] | cdktf.IResolvable;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#labels Service#labels}
    */
    readonly labels?: ServiceTaskSpecContainerSpecLabels[] | cdktf.IResolvable;
    /**
    * mounts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#mounts Service#mounts}
    */
    readonly mounts?: ServiceTaskSpecContainerSpecMounts[] | cdktf.IResolvable;
    /**
    * privileges block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#privileges Service#privileges}
    */
    readonly privileges?: ServiceTaskSpecContainerSpecPrivileges;
    /**
    * secrets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#secrets Service#secrets}
    */
    readonly secrets?: ServiceTaskSpecContainerSpecSecrets[] | cdktf.IResolvable;
}
export declare function serviceTaskSpecContainerSpecToTerraform(struct?: ServiceTaskSpecContainerSpecOutputReference | ServiceTaskSpecContainerSpec): any;
export declare function serviceTaskSpecContainerSpecToHclTerraform(struct?: ServiceTaskSpecContainerSpecOutputReference | ServiceTaskSpecContainerSpec): any;
export declare class ServiceTaskSpecContainerSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecContainerSpec | undefined;
    set internalValue(value: ServiceTaskSpecContainerSpec | undefined);
    private _args?;
    get args(): string[];
    set args(value: string[]);
    resetArgs(): void;
    get argsInput(): string[];
    private _capAdd?;
    get capAdd(): string[];
    set capAdd(value: string[]);
    resetCapAdd(): void;
    get capAddInput(): string[];
    private _capDrop?;
    get capDrop(): string[];
    set capDrop(value: string[]);
    resetCapDrop(): void;
    get capDropInput(): string[];
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[];
    private _dir?;
    get dir(): string;
    set dir(value: string);
    resetDir(): void;
    get dirInput(): string;
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
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    resetGroups(): void;
    get groupsInput(): string[];
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string;
    private _isolation?;
    get isolation(): string;
    set isolation(value: string);
    resetIsolation(): void;
    get isolationInput(): string;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): any;
    private _stopGracePeriod?;
    get stopGracePeriod(): string;
    set stopGracePeriod(value: string);
    resetStopGracePeriod(): void;
    get stopGracePeriodInput(): string;
    private _stopSignal?;
    get stopSignal(): string;
    set stopSignal(value: string);
    resetStopSignal(): void;
    get stopSignalInput(): string;
    private _sysctl?;
    get sysctl(): {
        [key: string]: string;
    };
    set sysctl(value: {
        [key: string]: string;
    });
    resetSysctl(): void;
    get sysctlInput(): {
        [key: string]: string;
    };
    private _user?;
    get user(): string;
    set user(value: string);
    resetUser(): void;
    get userInput(): string;
    private _configs;
    get configs(): ServiceTaskSpecContainerSpecConfigsList;
    putConfigs(value: ServiceTaskSpecContainerSpecConfigs[] | cdktf.IResolvable): void;
    resetConfigs(): void;
    get configsInput(): any;
    private _dnsConfig;
    get dnsConfig(): ServiceTaskSpecContainerSpecDnsConfigOutputReference;
    putDnsConfig(value: ServiceTaskSpecContainerSpecDnsConfig): void;
    resetDnsConfig(): void;
    get dnsConfigInput(): ServiceTaskSpecContainerSpecDnsConfig;
    private _healthcheck;
    get healthcheck(): ServiceTaskSpecContainerSpecHealthcheckOutputReference;
    putHealthcheck(value: ServiceTaskSpecContainerSpecHealthcheck): void;
    resetHealthcheck(): void;
    get healthcheckInput(): ServiceTaskSpecContainerSpecHealthcheck;
    private _hosts;
    get hosts(): ServiceTaskSpecContainerSpecHostsList;
    putHosts(value: ServiceTaskSpecContainerSpecHosts[] | cdktf.IResolvable): void;
    resetHosts(): void;
    get hostsInput(): any;
    private _labels;
    get labels(): ServiceTaskSpecContainerSpecLabelsList;
    putLabels(value: ServiceTaskSpecContainerSpecLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
    private _mounts;
    get mounts(): ServiceTaskSpecContainerSpecMountsList;
    putMounts(value: ServiceTaskSpecContainerSpecMounts[] | cdktf.IResolvable): void;
    resetMounts(): void;
    get mountsInput(): any;
    private _privileges;
    get privileges(): ServiceTaskSpecContainerSpecPrivilegesOutputReference;
    putPrivileges(value: ServiceTaskSpecContainerSpecPrivileges): void;
    resetPrivileges(): void;
    get privilegesInput(): ServiceTaskSpecContainerSpecPrivileges;
    private _secrets;
    get secrets(): ServiceTaskSpecContainerSpecSecretsList;
    putSecrets(value: ServiceTaskSpecContainerSpecSecrets[] | cdktf.IResolvable): void;
    resetSecrets(): void;
    get secretsInput(): any;
}
export interface ServiceTaskSpecLogDriver {
    /**
    * The logging driver to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#name Service#name}
    */
    readonly name: string;
    /**
    * The options for the logging driver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#options Service#options}
    */
    readonly options?: {
        [key: string]: string;
    };
}
export declare function serviceTaskSpecLogDriverToTerraform(struct?: ServiceTaskSpecLogDriverOutputReference | ServiceTaskSpecLogDriver): any;
export declare function serviceTaskSpecLogDriverToHclTerraform(struct?: ServiceTaskSpecLogDriverOutputReference | ServiceTaskSpecLogDriver): any;
export declare class ServiceTaskSpecLogDriverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecLogDriver | undefined;
    set internalValue(value: ServiceTaskSpecLogDriver | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
export interface ServiceTaskSpecNetworksAdvanced {
    /**
    * The network aliases of the container in the specific network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#aliases Service#aliases}
    */
    readonly aliases?: string[];
    /**
    * An array of driver options for the network, e.g. `opts1=value`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#driver_opts Service#driver_opts}
    */
    readonly driverOpts?: string[];
    /**
    * The id of the docker network to use. Please use `docker_network.id`. Using the name attribute of the docker network will lead to constant replacements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#id Service#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Deprecated attribute. The name/id of the docker network. Conflicts with `id` attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#name Service#name}
    */
    readonly name?: string;
}
export declare function serviceTaskSpecNetworksAdvancedToTerraform(struct?: ServiceTaskSpecNetworksAdvanced | cdktf.IResolvable): any;
export declare function serviceTaskSpecNetworksAdvancedToHclTerraform(struct?: ServiceTaskSpecNetworksAdvanced | cdktf.IResolvable): any;
export declare class ServiceTaskSpecNetworksAdvancedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecNetworksAdvanced | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecNetworksAdvanced | cdktf.IResolvable | undefined);
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
}
export declare class ServiceTaskSpecNetworksAdvancedList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecNetworksAdvanced[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecNetworksAdvancedOutputReference;
}
export interface ServiceTaskSpecPlacementPlatforms {
    /**
    * The architecture, e.g. `amd64`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#architecture Service#architecture}
    */
    readonly architecture: string;
    /**
    * The operation system, e.g. `linux`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#os Service#os}
    */
    readonly os: string;
}
export declare function serviceTaskSpecPlacementPlatformsToTerraform(struct?: ServiceTaskSpecPlacementPlatforms | cdktf.IResolvable): any;
export declare function serviceTaskSpecPlacementPlatformsToHclTerraform(struct?: ServiceTaskSpecPlacementPlatforms | cdktf.IResolvable): any;
export declare class ServiceTaskSpecPlacementPlatformsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceTaskSpecPlacementPlatforms | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceTaskSpecPlacementPlatforms | cdktf.IResolvable | undefined);
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    get architectureInput(): string;
    private _os?;
    get os(): string;
    set os(value: string);
    get osInput(): string;
}
export declare class ServiceTaskSpecPlacementPlatformsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceTaskSpecPlacementPlatforms[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceTaskSpecPlacementPlatformsOutputReference;
}
export interface ServiceTaskSpecPlacement {
    /**
    * An array of constraints. e.g.: `node.role==manager`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#constraints Service#constraints}
    */
    readonly constraints?: string[];
    /**
    * Maximum number of replicas for per node (default value is `0`, which is unlimited)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#max_replicas Service#max_replicas}
    */
    readonly maxReplicas?: number;
    /**
    * Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence, e.g.: `spread=node.role.manager`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#prefs Service#prefs}
    */
    readonly prefs?: string[];
    /**
    * platforms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#platforms Service#platforms}
    */
    readonly platforms?: ServiceTaskSpecPlacementPlatforms[] | cdktf.IResolvable;
}
export declare function serviceTaskSpecPlacementToTerraform(struct?: ServiceTaskSpecPlacementOutputReference | ServiceTaskSpecPlacement): any;
export declare function serviceTaskSpecPlacementToHclTerraform(struct?: ServiceTaskSpecPlacementOutputReference | ServiceTaskSpecPlacement): any;
export declare class ServiceTaskSpecPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecPlacement | undefined;
    set internalValue(value: ServiceTaskSpecPlacement | undefined);
    private _constraints?;
    get constraints(): string[];
    set constraints(value: string[]);
    resetConstraints(): void;
    get constraintsInput(): string[];
    private _maxReplicas?;
    get maxReplicas(): number;
    set maxReplicas(value: number);
    resetMaxReplicas(): void;
    get maxReplicasInput(): number;
    private _prefs?;
    get prefs(): string[];
    set prefs(value: string[]);
    resetPrefs(): void;
    get prefsInput(): string[];
    private _platforms;
    get platforms(): ServiceTaskSpecPlacementPlatformsList;
    putPlatforms(value: ServiceTaskSpecPlacementPlatforms[] | cdktf.IResolvable): void;
    resetPlatforms(): void;
    get platformsInput(): any;
}
export interface ServiceTaskSpecResourcesLimits {
    /**
    * The amount of memory in bytes the container allocates
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#memory_bytes Service#memory_bytes}
    */
    readonly memoryBytes?: number;
    /**
    * CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#nano_cpus Service#nano_cpus}
    */
    readonly nanoCpus?: number;
}
export declare function serviceTaskSpecResourcesLimitsToTerraform(struct?: ServiceTaskSpecResourcesLimitsOutputReference | ServiceTaskSpecResourcesLimits): any;
export declare function serviceTaskSpecResourcesLimitsToHclTerraform(struct?: ServiceTaskSpecResourcesLimitsOutputReference | ServiceTaskSpecResourcesLimits): any;
export declare class ServiceTaskSpecResourcesLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecResourcesLimits | undefined;
    set internalValue(value: ServiceTaskSpecResourcesLimits | undefined);
    private _memoryBytes?;
    get memoryBytes(): number;
    set memoryBytes(value: number);
    resetMemoryBytes(): void;
    get memoryBytesInput(): number;
    private _nanoCpus?;
    get nanoCpus(): number;
    set nanoCpus(value: number);
    resetNanoCpus(): void;
    get nanoCpusInput(): number;
}
export interface ServiceTaskSpecResourcesReservationGenericResources {
    /**
    * The Integer resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#discrete_resources_spec Service#discrete_resources_spec}
    */
    readonly discreteResourcesSpec?: string[];
    /**
    * The String resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#named_resources_spec Service#named_resources_spec}
    */
    readonly namedResourcesSpec?: string[];
}
export declare function serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct?: ServiceTaskSpecResourcesReservationGenericResourcesOutputReference | ServiceTaskSpecResourcesReservationGenericResources): any;
export declare function serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform(struct?: ServiceTaskSpecResourcesReservationGenericResourcesOutputReference | ServiceTaskSpecResourcesReservationGenericResources): any;
export declare class ServiceTaskSpecResourcesReservationGenericResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecResourcesReservationGenericResources | undefined;
    set internalValue(value: ServiceTaskSpecResourcesReservationGenericResources | undefined);
    private _discreteResourcesSpec?;
    get discreteResourcesSpec(): string[];
    set discreteResourcesSpec(value: string[]);
    resetDiscreteResourcesSpec(): void;
    get discreteResourcesSpecInput(): string[];
    private _namedResourcesSpec?;
    get namedResourcesSpec(): string[];
    set namedResourcesSpec(value: string[]);
    resetNamedResourcesSpec(): void;
    get namedResourcesSpecInput(): string[];
}
export interface ServiceTaskSpecResourcesReservation {
    /**
    * The amount of memory in bytes the container allocates
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#memory_bytes Service#memory_bytes}
    */
    readonly memoryBytes?: number;
    /**
    * CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#nano_cpus Service#nano_cpus}
    */
    readonly nanoCpus?: number;
    /**
    * generic_resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#generic_resources Service#generic_resources}
    */
    readonly genericResources?: ServiceTaskSpecResourcesReservationGenericResources;
}
export declare function serviceTaskSpecResourcesReservationToTerraform(struct?: ServiceTaskSpecResourcesReservationOutputReference | ServiceTaskSpecResourcesReservation): any;
export declare function serviceTaskSpecResourcesReservationToHclTerraform(struct?: ServiceTaskSpecResourcesReservationOutputReference | ServiceTaskSpecResourcesReservation): any;
export declare class ServiceTaskSpecResourcesReservationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecResourcesReservation | undefined;
    set internalValue(value: ServiceTaskSpecResourcesReservation | undefined);
    private _memoryBytes?;
    get memoryBytes(): number;
    set memoryBytes(value: number);
    resetMemoryBytes(): void;
    get memoryBytesInput(): number;
    private _nanoCpus?;
    get nanoCpus(): number;
    set nanoCpus(value: number);
    resetNanoCpus(): void;
    get nanoCpusInput(): number;
    private _genericResources;
    get genericResources(): ServiceTaskSpecResourcesReservationGenericResourcesOutputReference;
    putGenericResources(value: ServiceTaskSpecResourcesReservationGenericResources): void;
    resetGenericResources(): void;
    get genericResourcesInput(): ServiceTaskSpecResourcesReservationGenericResources;
}
export interface ServiceTaskSpecResources {
    /**
    * limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#limits Service#limits}
    */
    readonly limits?: ServiceTaskSpecResourcesLimits;
    /**
    * reservation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#reservation Service#reservation}
    */
    readonly reservation?: ServiceTaskSpecResourcesReservation;
}
export declare function serviceTaskSpecResourcesToTerraform(struct?: ServiceTaskSpecResourcesOutputReference | ServiceTaskSpecResources): any;
export declare function serviceTaskSpecResourcesToHclTerraform(struct?: ServiceTaskSpecResourcesOutputReference | ServiceTaskSpecResources): any;
export declare class ServiceTaskSpecResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecResources | undefined;
    set internalValue(value: ServiceTaskSpecResources | undefined);
    private _limits;
    get limits(): ServiceTaskSpecResourcesLimitsOutputReference;
    putLimits(value: ServiceTaskSpecResourcesLimits): void;
    resetLimits(): void;
    get limitsInput(): ServiceTaskSpecResourcesLimits;
    private _reservation;
    get reservation(): ServiceTaskSpecResourcesReservationOutputReference;
    putReservation(value: ServiceTaskSpecResourcesReservation): void;
    resetReservation(): void;
    get reservationInput(): ServiceTaskSpecResourcesReservation;
}
export interface ServiceTaskSpecRestartPolicy {
    /**
    * Condition for restart
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#condition Service#condition}
    */
    readonly condition?: string;
    /**
    * Delay between restart attempts (ms|s|m|h)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#delay Service#delay}
    */
    readonly delay?: string;
    /**
    * Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#max_attempts Service#max_attempts}
    */
    readonly maxAttempts?: number;
    /**
    * The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#window Service#window}
    */
    readonly window?: string;
}
export declare function serviceTaskSpecRestartPolicyToTerraform(struct?: ServiceTaskSpecRestartPolicyOutputReference | ServiceTaskSpecRestartPolicy): any;
export declare function serviceTaskSpecRestartPolicyToHclTerraform(struct?: ServiceTaskSpecRestartPolicyOutputReference | ServiceTaskSpecRestartPolicy): any;
export declare class ServiceTaskSpecRestartPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpecRestartPolicy | undefined;
    set internalValue(value: ServiceTaskSpecRestartPolicy | undefined);
    private _condition?;
    get condition(): string;
    set condition(value: string);
    resetCondition(): void;
    get conditionInput(): string;
    private _delay?;
    get delay(): string;
    set delay(value: string);
    resetDelay(): void;
    get delayInput(): string;
    private _maxAttempts?;
    get maxAttempts(): number;
    set maxAttempts(value: number);
    resetMaxAttempts(): void;
    get maxAttemptsInput(): number;
    private _window?;
    get window(): string;
    set window(value: string);
    resetWindow(): void;
    get windowInput(): string;
}
export interface ServiceTaskSpec {
    /**
    * A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#force_update Service#force_update}
    */
    readonly forceUpdate?: number;
    /**
    * Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#runtime Service#runtime}
    */
    readonly runtime?: string;
    /**
    * container_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#container_spec Service#container_spec}
    */
    readonly containerSpec: ServiceTaskSpecContainerSpec;
    /**
    * log_driver block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#log_driver Service#log_driver}
    */
    readonly logDriver?: ServiceTaskSpecLogDriver;
    /**
    * networks_advanced block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#networks_advanced Service#networks_advanced}
    */
    readonly networksAdvanced?: ServiceTaskSpecNetworksAdvanced[] | cdktf.IResolvable;
    /**
    * placement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#placement Service#placement}
    */
    readonly placement?: ServiceTaskSpecPlacement;
    /**
    * resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#resources Service#resources}
    */
    readonly resources?: ServiceTaskSpecResources;
    /**
    * restart_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#restart_policy Service#restart_policy}
    */
    readonly restartPolicy?: ServiceTaskSpecRestartPolicy;
}
export declare function serviceTaskSpecToTerraform(struct?: ServiceTaskSpecOutputReference | ServiceTaskSpec): any;
export declare function serviceTaskSpecToHclTerraform(struct?: ServiceTaskSpecOutputReference | ServiceTaskSpec): any;
export declare class ServiceTaskSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceTaskSpec | undefined;
    set internalValue(value: ServiceTaskSpec | undefined);
    private _forceUpdate?;
    get forceUpdate(): number;
    set forceUpdate(value: number);
    resetForceUpdate(): void;
    get forceUpdateInput(): number;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string;
    private _containerSpec;
    get containerSpec(): ServiceTaskSpecContainerSpecOutputReference;
    putContainerSpec(value: ServiceTaskSpecContainerSpec): void;
    get containerSpecInput(): ServiceTaskSpecContainerSpec;
    private _logDriver;
    get logDriver(): ServiceTaskSpecLogDriverOutputReference;
    putLogDriver(value: ServiceTaskSpecLogDriver): void;
    resetLogDriver(): void;
    get logDriverInput(): ServiceTaskSpecLogDriver;
    private _networksAdvanced;
    get networksAdvanced(): ServiceTaskSpecNetworksAdvancedList;
    putNetworksAdvanced(value: ServiceTaskSpecNetworksAdvanced[] | cdktf.IResolvable): void;
    resetNetworksAdvanced(): void;
    get networksAdvancedInput(): any;
    private _placement;
    get placement(): ServiceTaskSpecPlacementOutputReference;
    putPlacement(value: ServiceTaskSpecPlacement): void;
    resetPlacement(): void;
    get placementInput(): ServiceTaskSpecPlacement;
    private _resources;
    get resources(): ServiceTaskSpecResourcesOutputReference;
    putResources(value: ServiceTaskSpecResources): void;
    resetResources(): void;
    get resourcesInput(): ServiceTaskSpecResources;
    private _restartPolicy;
    get restartPolicy(): ServiceTaskSpecRestartPolicyOutputReference;
    putRestartPolicy(value: ServiceTaskSpecRestartPolicy): void;
    resetRestartPolicy(): void;
    get restartPolicyInput(): ServiceTaskSpecRestartPolicy;
}
export interface ServiceUpdateConfig {
    /**
    * Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#delay Service#delay}
    */
    readonly delay?: string;
    /**
    * Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#failure_action Service#failure_action}
    */
    readonly failureAction?: string;
    /**
    * Failure rate to tolerate during an update. Defaults to `0.0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}
    */
    readonly maxFailureRatio?: string;
    /**
    * Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#monitor Service#monitor}
    */
    readonly monitor?: string;
    /**
    * Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#order Service#order}
    */
    readonly order?: string;
    /**
    * Maximum number of tasks to be updated in one iteration. Defaults to `1`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#parallelism Service#parallelism}
    */
    readonly parallelism?: number;
}
export declare function serviceUpdateConfigToTerraform(struct?: ServiceUpdateConfigOutputReference | ServiceUpdateConfig): any;
export declare function serviceUpdateConfigToHclTerraform(struct?: ServiceUpdateConfigOutputReference | ServiceUpdateConfig): any;
export declare class ServiceUpdateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceUpdateConfig | undefined;
    set internalValue(value: ServiceUpdateConfig | undefined);
    private _delay?;
    get delay(): string;
    set delay(value: string);
    resetDelay(): void;
    get delayInput(): string;
    private _failureAction?;
    get failureAction(): string;
    set failureAction(value: string);
    resetFailureAction(): void;
    get failureActionInput(): string;
    private _maxFailureRatio?;
    get maxFailureRatio(): string;
    set maxFailureRatio(value: string);
    resetMaxFailureRatio(): void;
    get maxFailureRatioInput(): string;
    private _monitor?;
    get monitor(): string;
    set monitor(value: string);
    resetMonitor(): void;
    get monitorInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _parallelism?;
    get parallelism(): number;
    set parallelism(value: number);
    resetParallelism(): void;
    get parallelismInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service docker_service}
*/
export declare class Service extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_service";
    /**
    * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Service to import
    * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Service to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service docker_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceConfig
    */
    constructor(scope: Construct, id: string, config: ServiceConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _auth;
    get auth(): ServiceAuthOutputReference;
    putAuth(value: ServiceAuth): void;
    resetAuth(): void;
    get authInput(): ServiceAuth;
    private _convergeConfig;
    get convergeConfig(): ServiceConvergeConfigOutputReference;
    putConvergeConfig(value: ServiceConvergeConfig): void;
    resetConvergeConfig(): void;
    get convergeConfigInput(): ServiceConvergeConfig;
    private _endpointSpec;
    get endpointSpec(): ServiceEndpointSpecOutputReference;
    putEndpointSpec(value: ServiceEndpointSpec): void;
    resetEndpointSpec(): void;
    get endpointSpecInput(): ServiceEndpointSpec;
    private _labels;
    get labels(): ServiceLabelsList;
    putLabels(value: ServiceLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
    private _mode;
    get mode(): ServiceModeOutputReference;
    putMode(value: ServiceMode): void;
    resetMode(): void;
    get modeInput(): ServiceMode;
    private _rollbackConfig;
    get rollbackConfig(): ServiceRollbackConfigOutputReference;
    putRollbackConfig(value: ServiceRollbackConfig): void;
    resetRollbackConfig(): void;
    get rollbackConfigInput(): ServiceRollbackConfig;
    private _taskSpec;
    get taskSpec(): ServiceTaskSpecOutputReference;
    putTaskSpec(value: ServiceTaskSpec): void;
    get taskSpecInput(): ServiceTaskSpec;
    private _updateConfig;
    get updateConfig(): ServiceUpdateConfigOutputReference;
    putUpdateConfig(value: ServiceUpdateConfig): void;
    resetUpdateConfig(): void;
    get updateConfigInput(): ServiceUpdateConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
