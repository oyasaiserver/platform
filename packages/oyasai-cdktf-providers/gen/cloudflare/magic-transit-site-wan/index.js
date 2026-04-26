// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicTransitSiteWanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        gateway_address: cdktf.stringToTerraform(struct.gatewayAddress),
        secondary_address: cdktf.stringToTerraform(struct.secondaryAddress),
    };
}
export function magicTransitSiteWanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gateway_address: {
            value: cdktf.stringToHclTerraform(struct.gatewayAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secondary_address: {
            value: cdktf.stringToHclTerraform(struct.secondaryAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteWanStaticAddressingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._gatewayAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.gatewayAddress = this._gatewayAddress;
        }
        if (this._secondaryAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryAddress = this._secondaryAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._gatewayAddress = undefined;
            this._secondaryAddress = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._gatewayAddress = value.gatewayAddress;
            this._secondaryAddress = value.secondaryAddress;
        }
    }
    // address - computed: false, optional: false, required: true
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // gateway_address - computed: false, optional: false, required: true
    _gatewayAddress;
    get gatewayAddress() {
        return this.getStringAttribute('gateway_address');
    }
    set gatewayAddress(value) {
        this._gatewayAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayAddressInput() {
        return this._gatewayAddress;
    }
    // secondary_address - computed: false, optional: true, required: false
    _secondaryAddress;
    get secondaryAddress() {
        return this.getStringAttribute('secondary_address');
    }
    set secondaryAddress(value) {
        this._secondaryAddress = value;
    }
    resetSecondaryAddress() {
        this._secondaryAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secondaryAddressInput() {
        return this._secondaryAddress;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}
*/
export class MagicTransitSiteWan extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_site_wan";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteWan to import
    * @param importFromId The id of the existing MagicTransitSiteWan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteWan to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_wan", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteWanConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_wan',
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
        this._name = config.name;
        this._physport = config.physport;
        this._priority = config.priority;
        this._siteId = config.siteId;
        this._staticAddressing.internalValue = config.staticAddressing;
        this._vlanTag = config.vlanTag;
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
    // health_check_rate - computed: true, optional: false, required: false
    get healthCheckRate() {
        return this.getStringAttribute('health_check_rate');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: false, optional: true, required: false
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
    // physport - computed: false, optional: false, required: true
    _physport;
    get physport() {
        return this.getNumberAttribute('physport');
    }
    set physport(value) {
        this._physport = value;
    }
    // Temporarily expose input value. Use with caution.
    get physportInput() {
        return this._physport;
    }
    // priority - computed: false, optional: true, required: false
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // site_id - computed: false, optional: false, required: true
    _siteId;
    get siteId() {
        return this.getStringAttribute('site_id');
    }
    set siteId(value) {
        this._siteId = value;
    }
    // Temporarily expose input value. Use with caution.
    get siteIdInput() {
        return this._siteId;
    }
    // static_addressing - computed: false, optional: true, required: false
    _staticAddressing = new MagicTransitSiteWanStaticAddressingOutputReference(this, "static_addressing");
    get staticAddressing() {
        return this._staticAddressing;
    }
    putStaticAddressing(value) {
        this._staticAddressing.internalValue = value;
    }
    resetStaticAddressing() {
        this._staticAddressing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticAddressingInput() {
        return this._staticAddressing.internalValue;
    }
    // vlan_tag - computed: false, optional: true, required: false
    _vlanTag;
    get vlanTag() {
        return this.getNumberAttribute('vlan_tag');
    }
    set vlanTag(value) {
        this._vlanTag = value;
    }
    resetVlanTag() {
        this._vlanTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vlanTagInput() {
        return this._vlanTag;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            physport: cdktf.numberToTerraform(this._physport),
            priority: cdktf.numberToTerraform(this._priority),
            site_id: cdktf.stringToTerraform(this._siteId),
            static_addressing: magicTransitSiteWanStaticAddressingToTerraform(this._staticAddressing.internalValue),
            vlan_tag: cdktf.numberToTerraform(this._vlanTag),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            physport: {
                value: cdktf.numberToHclTerraform(this._physport),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_addressing: {
                value: magicTransitSiteWanStaticAddressingToHclTerraform(this._staticAddressing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteWanStaticAddressing",
            },
            vlan_tag: {
                value: cdktf.numberToHclTerraform(this._vlanTag),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
