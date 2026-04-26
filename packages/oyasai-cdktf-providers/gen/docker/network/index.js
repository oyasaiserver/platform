// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function networkIpamConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aux_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct.auxAddress),
        gateway: cdktf.stringToTerraform(struct.gateway),
        ip_range: cdktf.stringToTerraform(struct.ipRange),
        subnet: cdktf.stringToTerraform(struct.subnet),
    };
}
export function networkIpamConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aux_address: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.auxAddress),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        gateway: {
            value: cdktf.stringToHclTerraform(struct.gateway),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_range: {
            value: cdktf.stringToHclTerraform(struct.ipRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet: {
            value: cdktf.stringToHclTerraform(struct.subnet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class NetworkIpamConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._auxAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.auxAddress = this._auxAddress;
        }
        if (this._gateway !== undefined) {
            hasAnyValues = true;
            internalValueResult.gateway = this._gateway;
        }
        if (this._ipRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipRange = this._ipRange;
        }
        if (this._subnet !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnet = this._subnet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auxAddress = undefined;
            this._gateway = undefined;
            this._ipRange = undefined;
            this._subnet = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auxAddress = value.auxAddress;
            this._gateway = value.gateway;
            this._ipRange = value.ipRange;
            this._subnet = value.subnet;
        }
    }
    // aux_address - computed: false, optional: true, required: false
    _auxAddress;
    get auxAddress() {
        return this.getStringMapAttribute('aux_address');
    }
    set auxAddress(value) {
        this._auxAddress = value;
    }
    resetAuxAddress() {
        this._auxAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get auxAddressInput() {
        return this._auxAddress;
    }
    // gateway - computed: false, optional: true, required: false
    _gateway;
    get gateway() {
        return this.getStringAttribute('gateway');
    }
    set gateway(value) {
        this._gateway = value;
    }
    resetGateway() {
        this._gateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayInput() {
        return this._gateway;
    }
    // ip_range - computed: false, optional: true, required: false
    _ipRange;
    get ipRange() {
        return this.getStringAttribute('ip_range');
    }
    set ipRange(value) {
        this._ipRange = value;
    }
    resetIpRange() {
        this._ipRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipRangeInput() {
        return this._ipRange;
    }
    // subnet - computed: false, optional: true, required: false
    _subnet;
    get subnet() {
        return this.getStringAttribute('subnet');
    }
    set subnet(value) {
        this._subnet = value;
    }
    resetSubnet() {
        this._subnet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetInput() {
        return this._subnet;
    }
}
export class NetworkIpamConfigList extends cdktf.ComplexList {
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
        return new NetworkIpamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function networkLabelsToTerraform(struct) {
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
export function networkLabelsToHclTerraform(struct) {
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
export class NetworkLabelsOutputReference extends cdktf.ComplexObject {
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
export class NetworkLabelsList extends cdktf.ComplexList {
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
        return new NetworkLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network docker_network}
*/
export class Network extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_network";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Network to import
    * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Network to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_network", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network docker_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_network',
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
        this._attachable = config.attachable;
        this._driver = config.driver;
        this._id = config.id;
        this._ingress = config.ingress;
        this._internal = config.internal;
        this._ipamDriver = config.ipamDriver;
        this._ipamOptions = config.ipamOptions;
        this._ipv6 = config.ipv6;
        this._name = config.name;
        this._options = config.options;
        this._ipamConfig.internalValue = config.ipamConfig;
        this._labels.internalValue = config.labels;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // attachable - computed: false, optional: true, required: false
    _attachable;
    get attachable() {
        return this.getBooleanAttribute('attachable');
    }
    set attachable(value) {
        this._attachable = value;
    }
    resetAttachable() {
        this._attachable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attachableInput() {
        return this._attachable;
    }
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
    // ingress - computed: false, optional: true, required: false
    _ingress;
    get ingress() {
        return this.getBooleanAttribute('ingress');
    }
    set ingress(value) {
        this._ingress = value;
    }
    resetIngress() {
        this._ingress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ingressInput() {
        return this._ingress;
    }
    // internal - computed: true, optional: true, required: false
    _internal;
    get internal() {
        return this.getBooleanAttribute('internal');
    }
    set internal(value) {
        this._internal = value;
    }
    resetInternal() {
        this._internal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get internalInput() {
        return this._internal;
    }
    // ipam_driver - computed: false, optional: true, required: false
    _ipamDriver;
    get ipamDriver() {
        return this.getStringAttribute('ipam_driver');
    }
    set ipamDriver(value) {
        this._ipamDriver = value;
    }
    resetIpamDriver() {
        this._ipamDriver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipamDriverInput() {
        return this._ipamDriver;
    }
    // ipam_options - computed: false, optional: true, required: false
    _ipamOptions;
    get ipamOptions() {
        return this.getStringMapAttribute('ipam_options');
    }
    set ipamOptions(value) {
        this._ipamOptions = value;
    }
    resetIpamOptions() {
        this._ipamOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipamOptionsInput() {
        return this._ipamOptions;
    }
    // ipv6 - computed: false, optional: true, required: false
    _ipv6;
    get ipv6() {
        return this.getBooleanAttribute('ipv6');
    }
    set ipv6(value) {
        this._ipv6 = value;
    }
    resetIpv6() {
        this._ipv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6Input() {
        return this._ipv6;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // options - computed: true, optional: true, required: false
    _options;
    get options() {
        return this.getStringMapAttribute('options');
    }
    set options(value) {
        this._options = value;
    }
    resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options;
    }
    // scope - computed: true, optional: false, required: false
    get scope() {
        return this.getStringAttribute('scope');
    }
    // ipam_config - computed: false, optional: true, required: false
    _ipamConfig = new NetworkIpamConfigList(this, "ipam_config", true);
    get ipamConfig() {
        return this._ipamConfig;
    }
    putIpamConfig(value) {
        this._ipamConfig.internalValue = value;
    }
    resetIpamConfig() {
        this._ipamConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipamConfigInput() {
        return this._ipamConfig.internalValue;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new NetworkLabelsList(this, "labels", true);
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
            attachable: cdktf.booleanToTerraform(this._attachable),
            driver: cdktf.stringToTerraform(this._driver),
            id: cdktf.stringToTerraform(this._id),
            ingress: cdktf.booleanToTerraform(this._ingress),
            internal: cdktf.booleanToTerraform(this._internal),
            ipam_driver: cdktf.stringToTerraform(this._ipamDriver),
            ipam_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._ipamOptions),
            ipv6: cdktf.booleanToTerraform(this._ipv6),
            name: cdktf.stringToTerraform(this._name),
            options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
            ipam_config: cdktf.listMapper(networkIpamConfigToTerraform, true)(this._ipamConfig.internalValue),
            labels: cdktf.listMapper(networkLabelsToTerraform, true)(this._labels.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            attachable: {
                value: cdktf.booleanToHclTerraform(this._attachable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            driver: {
                value: cdktf.stringToHclTerraform(this._driver),
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
            ingress: {
                value: cdktf.booleanToHclTerraform(this._ingress),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            internal: {
                value: cdktf.booleanToHclTerraform(this._internal),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ipam_driver: {
                value: cdktf.stringToHclTerraform(this._ipamDriver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipam_options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ipamOptions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            ipv6: {
                value: cdktf.booleanToHclTerraform(this._ipv6),
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
            options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            ipam_config: {
                value: cdktf.listMapperHcl(networkIpamConfigToHclTerraform, true)(this._ipamConfig.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "NetworkIpamConfigList",
            },
            labels: {
                value: cdktf.listMapperHcl(networkLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "NetworkLabelsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
