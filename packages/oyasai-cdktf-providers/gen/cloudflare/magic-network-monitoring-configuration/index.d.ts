import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicNetworkMonitoringConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}
    */
    readonly accountId?: string;
    /**
    * Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#default_sampling MagicNetworkMonitoringConfiguration#default_sampling}
    */
    readonly defaultSampling?: number;
    /**
    * The account name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}
    */
    readonly routerIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}
    */
    readonly warpDevices?: MagicNetworkMonitoringConfigurationWarpDevices[] | cdktf.IResolvable;
}
export interface MagicNetworkMonitoringConfigurationWarpDevices {
    /**
    * Unique identifier for the warp device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#id MagicNetworkMonitoringConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Name of the warp device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}
    */
    readonly name: string;
    /**
    * IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#router_ip MagicNetworkMonitoringConfiguration#router_ip}
    */
    readonly routerIp: string;
}
export declare function magicNetworkMonitoringConfigurationWarpDevicesToTerraform(struct?: MagicNetworkMonitoringConfigurationWarpDevices | cdktf.IResolvable): any;
export declare function magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform(struct?: MagicNetworkMonitoringConfigurationWarpDevices | cdktf.IResolvable): any;
export declare class MagicNetworkMonitoringConfigurationWarpDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MagicNetworkMonitoringConfigurationWarpDevices | cdktf.IResolvable | undefined;
    set internalValue(value: MagicNetworkMonitoringConfigurationWarpDevices | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _routerIp?;
    get routerIp(): string;
    set routerIp(value: string);
    get routerIpInput(): string;
}
export declare class MagicNetworkMonitoringConfigurationWarpDevicesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MagicNetworkMonitoringConfigurationWarpDevices[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MagicNetworkMonitoringConfigurationWarpDevicesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}
*/
export declare class MagicNetworkMonitoringConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_network_monitoring_configuration";
    /**
    * Generates CDKTF code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringConfiguration to import
    * @param importFromId The id of the existing MagicNetworkMonitoringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicNetworkMonitoringConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicNetworkMonitoringConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: MagicNetworkMonitoringConfigurationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _defaultSampling?;
    get defaultSampling(): number;
    set defaultSampling(value: number);
    resetDefaultSampling(): void;
    get defaultSamplingInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _routerIps?;
    get routerIps(): string[];
    set routerIps(value: string[]);
    resetRouterIps(): void;
    get routerIpsInput(): string[];
    private _warpDevices;
    get warpDevices(): MagicNetworkMonitoringConfigurationWarpDevicesList;
    putWarpDevices(value: MagicNetworkMonitoringConfigurationWarpDevices[] | cdktf.IResolvable): void;
    resetWarpDevices(): void;
    get warpDevicesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
