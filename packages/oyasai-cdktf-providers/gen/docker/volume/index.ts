// https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Driver type for the volume. Defaults to `local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#driver Volume#driver}
  */
  readonly driver?: string;
  /**
  * Options specific to the driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#driver_opts Volume#driver_opts}
  */
  readonly driverOpts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#id Volume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Docker volume (will be generated if not provided).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#name Volume#name}
  */
  readonly name?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#cluster Volume#cluster}
  */
  readonly cluster?: VolumeCluster;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#labels Volume#labels}
  */
  readonly labels?: VolumeLabels[] | cdktf.IResolvable;
}
export interface VolumeCluster {
  /**
  * Availability of the volume. Can be `active` (default), `pause`, or `drain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#availability Volume#availability}
  */
  readonly availability?: string;
  /**
  * Cluster Volume group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#group Volume#group}
  */
  readonly group?: string;
  /**
  * Minimum size of the Cluster Volume in human readable memory bytes (like 128MiB, 2GiB, etc). Must be in format of KiB, MiB, Gib, Tib or PiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#limit_bytes Volume#limit_bytes}
  */
  readonly limitBytes?: string;
  /**
  * Maximum size of the Cluster Volume in human readable memory bytes (like 128MiB, 2GiB, etc). Must be in format of KiB, MiB, Gib, Tib or PiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#required_bytes Volume#required_bytes}
  */
  readonly requiredBytes?: string;
  /**
  * The scope of the volume. Can be `single` (default) or `multi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#scope Volume#scope}
  */
  readonly scope?: string;
  /**
  * The sharing mode. Can be `none` (default), `readonly`, `onewriter` or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#sharing Volume#sharing}
  */
  readonly sharing?: string;
  /**
  * A topology that the Cluster Volume would be preferred in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#topology_preferred Volume#topology_preferred}
  */
  readonly topologyPreferred?: string;
  /**
  * A topology that the Cluster Volume must be accessible from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#topology_required Volume#topology_required}
  */
  readonly topologyRequired?: string;
  /**
  * Cluster Volume access type. Can be `mount` or `block` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#type Volume#type}
  */
  readonly type?: string;
}

export function volumeClusterToTerraform(struct?: VolumeClusterOutputReference | VolumeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    group: cdktf.stringToTerraform(struct!.group),
    limit_bytes: cdktf.stringToTerraform(struct!.limitBytes),
    required_bytes: cdktf.stringToTerraform(struct!.requiredBytes),
    scope: cdktf.stringToTerraform(struct!.scope),
    sharing: cdktf.stringToTerraform(struct!.sharing),
    topology_preferred: cdktf.stringToTerraform(struct!.topologyPreferred),
    topology_required: cdktf.stringToTerraform(struct!.topologyRequired),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function volumeClusterToHclTerraform(struct?: VolumeClusterOutputReference | VolumeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_bytes: {
      value: cdktf.stringToHclTerraform(struct!.limitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_bytes: {
      value: cdktf.stringToHclTerraform(struct!.requiredBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharing: {
      value: cdktf.stringToHclTerraform(struct!.sharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_preferred: {
      value: cdktf.stringToHclTerraform(struct!.topologyPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_required: {
      value: cdktf.stringToHclTerraform(struct!.topologyRequired),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VolumeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._limitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitBytes = this._limitBytes;
    }
    if (this._requiredBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredBytes = this._requiredBytes;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing;
    }
    if (this._topologyPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyPreferred = this._topologyPreferred;
    }
    if (this._topologyRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyRequired = this._topologyRequired;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._group = undefined;
      this._limitBytes = undefined;
      this._requiredBytes = undefined;
      this._scope = undefined;
      this._sharing = undefined;
      this._topologyPreferred = undefined;
      this._topologyRequired = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._group = value.group;
      this._limitBytes = value.limitBytes;
      this._requiredBytes = value.requiredBytes;
      this._scope = value.scope;
      this._sharing = value.sharing;
      this._topologyPreferred = value.topologyPreferred;
      this._topologyRequired = value.topologyRequired;
      this._type = value.type;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit_bytes - computed: false, optional: true, required: false
  private _limitBytes?: string; 
  public get limitBytes() {
    return this.getStringAttribute('limit_bytes');
  }
  public set limitBytes(value: string) {
    this._limitBytes = value;
  }
  public resetLimitBytes() {
    this._limitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesInput() {
    return this._limitBytes;
  }

  // required_bytes - computed: false, optional: true, required: false
  private _requiredBytes?: string; 
  public get requiredBytes() {
    return this.getStringAttribute('required_bytes');
  }
  public set requiredBytes(value: string) {
    this._requiredBytes = value;
  }
  public resetRequiredBytes() {
    this._requiredBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredBytesInput() {
    return this._requiredBytes;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing?: string; 
  public get sharing() {
    return this.getStringAttribute('sharing');
  }
  public set sharing(value: string) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing;
  }

  // topology_preferred - computed: false, optional: true, required: false
  private _topologyPreferred?: string; 
  public get topologyPreferred() {
    return this.getStringAttribute('topology_preferred');
  }
  public set topologyPreferred(value: string) {
    this._topologyPreferred = value;
  }
  public resetTopologyPreferred() {
    this._topologyPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyPreferredInput() {
    return this._topologyPreferred;
  }

  // topology_required - computed: false, optional: true, required: false
  private _topologyRequired?: string; 
  public get topologyRequired() {
    return this.getStringAttribute('topology_required');
  }
  public set topologyRequired(value: string) {
    this._topologyRequired = value;
  }
  public resetTopologyRequired() {
    this._topologyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyRequiredInput() {
    return this._topologyRequired;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface VolumeLabels {
  /**
  * Name of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#label Volume#label}
  */
  readonly label: string;
  /**
  * Value of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#value Volume#value}
  */
  readonly value: string;
}

export function volumeLabelsToTerraform(struct?: VolumeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function volumeLabelsToHclTerraform(struct?: VolumeLabels | cdktf.IResolvable): any {
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

export class VolumeLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeLabels | cdktf.IResolvable | undefined) {
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

export class VolumeLabelsList extends cdktf.ComplexList {
  public internalValue? : VolumeLabels[] | cdktf.IResolvable

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
  public get(index: number): VolumeLabelsOutputReference {
    return new VolumeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume docker_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.0.0/docs/resources/volume docker_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'docker_volume',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._driver = config.driver;
    this._driverOpts = config.driverOpts;
    this._id = config.id;
    this._name = config.name;
    this._cluster.internalValue = config.cluster;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver - computed: true, optional: true, required: false
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

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string }; 
  public get driverOpts() {
    return this.getStringMapAttribute('driver_opts');
  }
  public set driverOpts(value: { [key: string]: string }) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts;
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

  // mountpoint - computed: true, optional: false, required: false
  public get mountpoint() {
    return this.getStringAttribute('mountpoint');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new VolumeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: VolumeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new VolumeLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: VolumeLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      driver: cdktf.stringToTerraform(this._driver),
      driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._driverOpts),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      cluster: volumeClusterToTerraform(this._cluster.internalValue),
      labels: cdktf.listMapper(volumeLabelsToTerraform, true)(this._labels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_opts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._driverOpts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: volumeClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeClusterList",
      },
      labels: {
        value: cdktf.listMapperHcl(volumeLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VolumeLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
