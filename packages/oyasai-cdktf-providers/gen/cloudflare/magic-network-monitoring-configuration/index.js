// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicNetworkMonitoringConfigurationWarpDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        router_ip: cdktf.stringToTerraform(struct.routerIp),
    };
}
export function magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        router_ip: {
            value: cdktf.stringToHclTerraform(struct.routerIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicNetworkMonitoringConfigurationWarpDevicesOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._routerIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.routerIp = this._routerIp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._name = undefined;
            this._routerIp = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._name = value.name;
            this._routerIp = value.routerIp;
        }
    }
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
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
    // router_ip - computed: false, optional: false, required: true
    _routerIp;
    get routerIp() {
        return this.getStringAttribute('router_ip');
    }
    set routerIp(value) {
        this._routerIp = value;
    }
    // Temporarily expose input value. Use with caution.
    get routerIpInput() {
        return this._routerIp;
    }
}
export class MagicNetworkMonitoringConfigurationWarpDevicesList extends cdktf.ComplexList {
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
        return new MagicNetworkMonitoringConfigurationWarpDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}
*/
export class MagicNetworkMonitoringConfiguration extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_network_monitoring_configuration";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringConfiguration to import
    * @param importFromId The id of the existing MagicNetworkMonitoringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicNetworkMonitoringConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicNetworkMonitoringConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_network_monitoring_configuration',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountId = config.accountId;
        this._defaultSampling = config.defaultSampling;
        this._name = config.name;
        this._routerIps = config.routerIps;
        this._warpDevices.internalValue = config.warpDevices;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // default_sampling - computed: true, optional: true, required: false
    _defaultSampling;
    get defaultSampling() {
        return this.getNumberAttribute('default_sampling');
    }
    set defaultSampling(value) {
        this._defaultSampling = value;
    }
    resetDefaultSampling() {
        this._defaultSampling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultSamplingInput() {
        return this._defaultSampling;
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
    // router_ips - computed: false, optional: true, required: false
    _routerIps;
    get routerIps() {
        return this.getListAttribute('router_ips');
    }
    set routerIps(value) {
        this._routerIps = value;
    }
    resetRouterIps() {
        this._routerIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routerIpsInput() {
        return this._routerIps;
    }
    // warp_devices - computed: false, optional: true, required: false
    _warpDevices = new MagicNetworkMonitoringConfigurationWarpDevicesList(this, "warp_devices", false);
    get warpDevices() {
        return this._warpDevices;
    }
    putWarpDevices(value) {
        this._warpDevices.internalValue = value;
    }
    resetWarpDevices() {
        this._warpDevices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get warpDevicesInput() {
        return this._warpDevices.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            default_sampling: cdktf.numberToTerraform(this._defaultSampling),
            name: cdktf.stringToTerraform(this._name),
            router_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routerIps),
            warp_devices: cdktf.listMapper(magicNetworkMonitoringConfigurationWarpDevicesToTerraform, false)(this._warpDevices.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_sampling: {
                value: cdktf.numberToHclTerraform(this._defaultSampling),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            router_ips: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routerIps),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            warp_devices: {
                value: cdktf.listMapperHcl(magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform, false)(this._warpDevices.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "MagicNetworkMonitoringConfigurationWarpDevicesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
