// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function volumeClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        availability: cdktf.stringToTerraform(struct.availability),
        group: cdktf.stringToTerraform(struct.group),
        limit_bytes: cdktf.stringToTerraform(struct.limitBytes),
        required_bytes: cdktf.stringToTerraform(struct.requiredBytes),
        scope: cdktf.stringToTerraform(struct.scope),
        sharing: cdktf.stringToTerraform(struct.sharing),
        topology_preferred: cdktf.stringToTerraform(struct.topologyPreferred),
        topology_required: cdktf.stringToTerraform(struct.topologyRequired),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function volumeClusterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        availability: {
            value: cdktf.stringToHclTerraform(struct.availability),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group: {
            value: cdktf.stringToHclTerraform(struct.group),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        limit_bytes: {
            value: cdktf.stringToHclTerraform(struct.limitBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required_bytes: {
            value: cdktf.stringToHclTerraform(struct.requiredBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sharing: {
            value: cdktf.stringToHclTerraform(struct.sharing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topology_preferred: {
            value: cdktf.stringToHclTerraform(struct.topologyPreferred),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topology_required: {
            value: cdktf.stringToHclTerraform(struct.topologyRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class VolumeClusterOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _availability;
    get availability() {
        return this.getStringAttribute('availability');
    }
    set availability(value) {
        this._availability = value;
    }
    resetAvailability() {
        this._availability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityInput() {
        return this._availability;
    }
    // group - computed: false, optional: true, required: false
    _group;
    get group() {
        return this.getStringAttribute('group');
    }
    set group(value) {
        this._group = value;
    }
    resetGroup() {
        this._group = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // limit_bytes - computed: false, optional: true, required: false
    _limitBytes;
    get limitBytes() {
        return this.getStringAttribute('limit_bytes');
    }
    set limitBytes(value) {
        this._limitBytes = value;
    }
    resetLimitBytes() {
        this._limitBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitBytesInput() {
        return this._limitBytes;
    }
    // required_bytes - computed: false, optional: true, required: false
    _requiredBytes;
    get requiredBytes() {
        return this.getStringAttribute('required_bytes');
    }
    set requiredBytes(value) {
        this._requiredBytes = value;
    }
    resetRequiredBytes() {
        this._requiredBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredBytesInput() {
        return this._requiredBytes;
    }
    // scope - computed: false, optional: true, required: false
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    // sharing - computed: false, optional: true, required: false
    _sharing;
    get sharing() {
        return this.getStringAttribute('sharing');
    }
    set sharing(value) {
        this._sharing = value;
    }
    resetSharing() {
        this._sharing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sharingInput() {
        return this._sharing;
    }
    // topology_preferred - computed: false, optional: true, required: false
    _topologyPreferred;
    get topologyPreferred() {
        return this.getStringAttribute('topology_preferred');
    }
    set topologyPreferred(value) {
        this._topologyPreferred = value;
    }
    resetTopologyPreferred() {
        this._topologyPreferred = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topologyPreferredInput() {
        return this._topologyPreferred;
    }
    // topology_required - computed: false, optional: true, required: false
    _topologyRequired;
    get topologyRequired() {
        return this.getStringAttribute('topology_required');
    }
    set topologyRequired(value) {
        this._topologyRequired = value;
    }
    resetTopologyRequired() {
        this._topologyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topologyRequiredInput() {
        return this._topologyRequired;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
export function volumeLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function volumeLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class VolumeLabelsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    set internalValue(value) {
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
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class VolumeLabelsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new VolumeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume docker_volume}
*/
export class Volume extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_volume";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Volume to import
    * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Volume to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_volume", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume docker_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'docker_volume',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
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
    _driver;
    get driver() {
        return this.getStringAttribute('driver');
    }
    set driver(value) {
        this._driver = value;
    }
    resetDriver() {
        this._driver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverInput() {
        return this._driver;
    }
    // driver_opts - computed: false, optional: true, required: false
    _driverOpts;
    get driverOpts() {
        return this.getStringMapAttribute('driver_opts');
    }
    set driverOpts(value) {
        this._driverOpts = value;
    }
    resetDriverOpts() {
        this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptsInput() {
        return this._driverOpts;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // mountpoint - computed: true, optional: false, required: false
    get mountpoint() {
        return this.getStringAttribute('mountpoint');
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // cluster - computed: false, optional: true, required: false
    _cluster = new VolumeClusterOutputReference(this, "cluster");
    get cluster() {
        return this._cluster;
    }
    putCluster(value) {
        this._cluster.internalValue = value;
    }
    resetCluster() {
        this._cluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterInput() {
        return this._cluster.internalValue;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new VolumeLabelsList(this, "labels", true);
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            driver: cdktf.stringToTerraform(this._driver),
            driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._driverOpts),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            cluster: volumeClusterToTerraform(this._cluster.internalValue),
            labels: cdktf.listMapper(volumeLabelsToTerraform, true)(this._labels.internalValue),
        };
    }
    synthesizeHclAttributes() {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
