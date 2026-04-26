import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Driver type for the volume. Defaults to `local`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#driver Volume#driver}
    */
    readonly driver?: string;
    /**
    * Options specific to the driver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#driver_opts Volume#driver_opts}
    */
    readonly driverOpts?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#id Volume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the Docker volume (will be generated if not provided).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#name Volume#name}
    */
    readonly name?: string;
    /**
    * cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#cluster Volume#cluster}
    */
    readonly cluster?: VolumeCluster;
    /**
    * labels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#labels Volume#labels}
    */
    readonly labels?: VolumeLabels[] | cdktf.IResolvable;
}
export interface VolumeCluster {
    /**
    * Availability of the volume. Can be `active` (default), `pause`, or `drain`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#availability Volume#availability}
    */
    readonly availability?: string;
    /**
    * Cluster Volume group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#group Volume#group}
    */
    readonly group?: string;
    /**
    * Minimum size of the Cluster Volume in human readable memory bytes (like 128MiB, 2GiB, etc). Must be in format of KiB, MiB, Gib, Tib or PiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#limit_bytes Volume#limit_bytes}
    */
    readonly limitBytes?: string;
    /**
    * Maximum size of the Cluster Volume in human readable memory bytes (like 128MiB, 2GiB, etc). Must be in format of KiB, MiB, Gib, Tib or PiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#required_bytes Volume#required_bytes}
    */
    readonly requiredBytes?: string;
    /**
    * The scope of the volume. Can be `single` (default) or `multi`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#scope Volume#scope}
    */
    readonly scope?: string;
    /**
    * The sharing mode. Can be `none` (default), `readonly`, `onewriter` or `all`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#sharing Volume#sharing}
    */
    readonly sharing?: string;
    /**
    * A topology that the Cluster Volume would be preferred in
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#topology_preferred Volume#topology_preferred}
    */
    readonly topologyPreferred?: string;
    /**
    * A topology that the Cluster Volume must be accessible from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#topology_required Volume#topology_required}
    */
    readonly topologyRequired?: string;
    /**
    * Cluster Volume access type. Can be `mount` or `block` (default).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#type Volume#type}
    */
    readonly type?: string;
}
export declare function volumeClusterToTerraform(struct?: VolumeClusterOutputReference | VolumeCluster): any;
export declare function volumeClusterToHclTerraform(struct?: VolumeClusterOutputReference | VolumeCluster): any;
export declare class VolumeClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VolumeCluster | undefined;
    set internalValue(value: VolumeCluster | undefined);
    private _availability?;
    get availability(): string;
    set availability(value: string);
    resetAvailability(): void;
    get availabilityInput(): string;
    private _group?;
    get group(): string;
    set group(value: string);
    resetGroup(): void;
    get groupInput(): string;
    get id(): any;
    private _limitBytes?;
    get limitBytes(): string;
    set limitBytes(value: string);
    resetLimitBytes(): void;
    get limitBytesInput(): string;
    private _requiredBytes?;
    get requiredBytes(): string;
    set requiredBytes(value: string);
    resetRequiredBytes(): void;
    get requiredBytesInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
    private _sharing?;
    get sharing(): string;
    set sharing(value: string);
    resetSharing(): void;
    get sharingInput(): string;
    private _topologyPreferred?;
    get topologyPreferred(): string;
    set topologyPreferred(value: string);
    resetTopologyPreferred(): void;
    get topologyPreferredInput(): string;
    private _topologyRequired?;
    get topologyRequired(): string;
    set topologyRequired(value: string);
    resetTopologyRequired(): void;
    get topologyRequiredInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface VolumeLabels {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#label Volume#label}
    */
    readonly label: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#value Volume#value}
    */
    readonly value: string;
}
export declare function volumeLabelsToTerraform(struct?: VolumeLabels | cdktf.IResolvable): any;
export declare function volumeLabelsToHclTerraform(struct?: VolumeLabels | cdktf.IResolvable): any;
export declare class VolumeLabelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VolumeLabels | cdktf.IResolvable | undefined;
    set internalValue(value: VolumeLabels | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    get labelInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class VolumeLabelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VolumeLabels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VolumeLabelsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume docker_volume}
*/
export declare class Volume extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_volume";
    /**
    * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Volume to import
    * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Volume to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume docker_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeConfig = {}
    */
    constructor(scope: Construct, id: string, config?: VolumeConfig);
    private _driver?;
    get driver(): string;
    set driver(value: string);
    resetDriver(): void;
    get driverInput(): string;
    private _driverOpts?;
    get driverOpts(): {
        [key: string]: string;
    };
    set driverOpts(value: {
        [key: string]: string;
    });
    resetDriverOpts(): void;
    get driverOptsInput(): {
        [key: string]: string;
    };
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get mountpoint(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _cluster;
    get cluster(): VolumeClusterOutputReference;
    putCluster(value: VolumeCluster): void;
    resetCluster(): void;
    get clusterInput(): VolumeCluster;
    private _labels;
    get labels(): VolumeLabelsList;
    putLabels(value: VolumeLabels[] | cdktf.IResolvable): void;
    resetLabels(): void;
    get labelsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
