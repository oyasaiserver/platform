import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Enable manual container attachment to the network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#attachable Network#attachable}
    */
    readonly attachable?: boolean | cdktf.IResolvable;
    /**
    * The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#driver Network#driver}
    */
    readonly driver?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#id Network#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Create swarm routing-mesh network. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#ingress Network#ingress}
    */
    readonly ingress?: boolean | cdktf.IResolvable;
    /**
    * Whether the network is internal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#internal Network#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Driver used by the custom IP scheme of the network. Defaults to `default`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#ipam_driver Network#ipam_driver}
    */
    readonly ipamDriver?: string;
    /**
    * Provide explicit options to the IPAM driver. Valid options vary with `ipam_driver` and refer to that driver's documentation for more details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#ipam_options Network#ipam_options}
    */
    readonly ipamOptions?: {
        [key: string]: string;
    };
    /**
    * Enable IPv6 networking. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#ipv6 Network#ipv6}
    */
    readonly ipv6?: boolean | cdktf.IResolvable;
    /**
    * The name of the Docker network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#name Network#name}
    */
    readonly name: string;
    /**
    * Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#options Network#options}
    */
    readonly options?: {
        [key: string]: string;
    };
    /**
    * ipam_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#ipam_config Network#ipam_config}
    */
    readonly ipamConfig?: NetworkIpamConfig[] | cdktf.IResolvable;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#labels Network#labels}
    */
    readonly labels?: NetworkLabels[] | cdktf.IResolvable;
}
export interface NetworkIpamConfig {
    /**
    * Auxiliary IPv4 or IPv6 addresses used by Network driver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#aux_address Network#aux_address}
    */
    readonly auxAddress?: {
        [key: string]: string;
    };
    /**
    * The IP address of the gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#gateway Network#gateway}
    */
    readonly gateway?: string;
    /**
    * The ip range in CIDR form
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#ip_range Network#ip_range}
    */
    readonly ipRange?: string;
    /**
    * The subnet in CIDR form
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#subnet Network#subnet}
    */
    readonly subnet?: string;
}
export declare function networkIpamConfigToTerraform(struct?: NetworkIpamConfig | cdktf.IResolvable): any;
export declare function networkIpamConfigToHclTerraform(struct?: NetworkIpamConfig | cdktf.IResolvable): any;
export declare class NetworkIpamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkIpamConfig | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkIpamConfig | cdktf.IResolvable | undefined);
    private _auxAddress?;
    get auxAddress(): {
        [key: string]: string;
    };
    set auxAddress(value: {
        [key: string]: string;
    });
    resetAuxAddress(): void;
    get auxAddressInput(): {
        [key: string]: string;
    };
    private _gateway?;
    get gateway(): string;
    set gateway(value: string);
    resetGateway(): void;
    get gatewayInput(): string;
    private _ipRange?;
    get ipRange(): string;
    set ipRange(value: string);
    resetIpRange(): void;
    get ipRangeInput(): string;
    private _subnet?;
    get subnet(): string;
    set subnet(value: string);
    resetSubnet(): void;
    get subnetInput(): string;
}
export declare class NetworkIpamConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkIpamConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkIpamConfigOutputReference;
}
export interface NetworkLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#label Network#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#value Network#value}
    */
    readonly value: string;
}
export declare function networkLabelsToTerraform(struct?: NetworkLabels | cdktf.IResolvable): any;
export declare function networkLabelsToHclTerraform(struct?: NetworkLabels | cdktf.IResolvable): any;
export declare class NetworkLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkLabels | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class NetworkLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkLabelsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network docker_network}
*/
export declare class Network extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_network";
    /**
    * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Network to import
    * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Network to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network docker_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkConfig
    */
    constructor(scope: Construct, id: string, config: NetworkConfig);
    private _attachable?;
    get attachable(): boolean | cdktf.IResolvable;
    set attachable(value: boolean | cdktf.IResolvable);
    resetAttachable(): void;
    get attachableInput(): any;
    private _driver?;
    get driver(): string;
    set driver(value: string);
    resetDriver(): void;
    get driverInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _ingress?;
    get ingress(): boolean | cdktf.IResolvable;
    set ingress(value: boolean | cdktf.IResolvable);
    resetIngress(): void;
    get ingressInput(): any;
    private _internal?;
    get internal(): boolean | cdktf.IResolvable;
    set internal(value: boolean | cdktf.IResolvable);
    resetInternal(): void;
    get internalInput(): any;
    private _ipamDriver?;
    get ipamDriver(): string;
    set ipamDriver(value: string);
    resetIpamDriver(): void;
    get ipamDriverInput(): string;
    private _ipamOptions?;
    get ipamOptions(): {
        [key: string]: string;
    };
    set ipamOptions(value: {
        [key: string]: string;
    });
    resetIpamOptions(): void;
    get ipamOptionsInput(): {
        [key: string]: string;
    };
    private _ipv6?;
    get ipv6(): boolean | cdktf.IResolvable;
    set ipv6(value: boolean | cdktf.IResolvable);
    resetIpv6(): void;
    get ipv6Input(): any;
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
    get scope(): any;
    private _ipamConfig;
    get ipamConfig(): NetworkIpamConfigList;
    putIpamConfig(value: NetworkIpamConfig[] | cdktf.IResolvable): void;
    resetIpamConfig(): void;
    get ipamConfigInput(): any;
    private _labels;
    get labels(): NetworkLabelsList;
    putLabels(value: NetworkLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
