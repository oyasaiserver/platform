// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicWanGreTunnelBgpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        customer_asn: cdktf.numberToTerraform(struct.customerAsn),
        extra_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extraPrefixes),
        md5_key: cdktf.stringToTerraform(struct.md5Key),
    };
}
export function magicWanGreTunnelBgpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        customer_asn: {
            value: cdktf.numberToHclTerraform(struct.customerAsn),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        extra_prefixes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extraPrefixes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        md5_key: {
            value: cdktf.stringToHclTerraform(struct.md5Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicWanGreTunnelBgpOutputReference extends cdktf.ComplexObject {
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
        if (this._customerAsn !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerAsn = this._customerAsn;
        }
        if (this._extraPrefixes !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraPrefixes = this._extraPrefixes;
        }
        if (this._md5Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.md5Key = this._md5Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerAsn = undefined;
            this._extraPrefixes = undefined;
            this._md5Key = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerAsn = value.customerAsn;
            this._extraPrefixes = value.extraPrefixes;
            this._md5Key = value.md5Key;
        }
    }
    // customer_asn - computed: false, optional: false, required: true
    _customerAsn;
    get customerAsn() {
        return this.getNumberAttribute('customer_asn');
    }
    set customerAsn(value) {
        this._customerAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    get customerAsnInput() {
        return this._customerAsn;
    }
    // extra_prefixes - computed: true, optional: true, required: false
    _extraPrefixes;
    get extraPrefixes() {
        return this.getListAttribute('extra_prefixes');
    }
    set extraPrefixes(value) {
        this._extraPrefixes = value;
    }
    resetExtraPrefixes() {
        this._extraPrefixes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extraPrefixesInput() {
        return this._extraPrefixes;
    }
    // md5_key - computed: false, optional: true, required: false
    _md5Key;
    get md5Key() {
        return this.getStringAttribute('md5_key');
    }
    set md5Key(value) {
        this._md5Key = value;
    }
    resetMd5Key() {
        this._md5Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get md5KeyInput() {
        return this._md5Key;
    }
}
export function magicWanGreTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function magicWanGreTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class MagicWanGreTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // bgp_state - computed: true, optional: false, required: false
    get bgpState() {
        return this.getStringAttribute('bgp_state');
    }
    // cf_speaker_ip - computed: true, optional: false, required: false
    get cfSpeakerIp() {
        return this.getStringAttribute('cf_speaker_ip');
    }
    // cf_speaker_port - computed: true, optional: false, required: false
    get cfSpeakerPort() {
        return this.getNumberAttribute('cf_speaker_port');
    }
    // customer_speaker_ip - computed: true, optional: false, required: false
    get customerSpeakerIp() {
        return this.getStringAttribute('customer_speaker_ip');
    }
    // customer_speaker_port - computed: true, optional: false, required: false
    get customerSpeakerPort() {
        return this.getNumberAttribute('customer_speaker_port');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // tcp_established - computed: true, optional: false, required: false
    get tcpEstablished() {
        return this.getBooleanAttribute('tcp_established');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
}
export function magicWanGreTunnelHealthCheckTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        saved: cdktf.stringToTerraform(struct.saved),
    };
}
export function magicWanGreTunnelHealthCheckTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        saved: {
            value: cdktf.stringToHclTerraform(struct.saved),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicWanGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._saved !== undefined) {
            hasAnyValues = true;
            internalValueResult.saved = this._saved;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._saved = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._saved = value.saved;
        }
    }
    // effective - computed: true, optional: false, required: false
    get effective() {
        return this.getStringAttribute('effective');
    }
    // saved - computed: true, optional: true, required: false
    _saved;
    get saved() {
        return this.getStringAttribute('saved');
    }
    set saved(value) {
        this._saved = value;
    }
    resetSaved() {
        this._saved = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get savedInput() {
        return this._saved;
    }
}
export function magicWanGreTunnelHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        rate: cdktf.stringToTerraform(struct.rate),
        target: magicWanGreTunnelHealthCheckTargetToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function magicWanGreTunnelHealthCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rate: {
            value: cdktf.stringToHclTerraform(struct.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: magicWanGreTunnelHealthCheckTargetToHclTerraform(struct.target),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicWanGreTunnelHealthCheckTarget",
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
export class MagicWanGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
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
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        if (this._target?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target?.internalValue;
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
            this.resolvableValue = undefined;
            this._direction = undefined;
            this._enabled = undefined;
            this._rate = undefined;
            this._target.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._direction = value.direction;
            this._enabled = value.enabled;
            this._rate = value.rate;
            this._target.internalValue = value.target;
            this._type = value.type;
        }
    }
    // direction - computed: true, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // rate - computed: true, optional: true, required: false
    _rate;
    get rate() {
        return this.getStringAttribute('rate');
    }
    set rate(value) {
        this._rate = value;
    }
    resetRate() {
        this._rate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rateInput() {
        return this._rate;
    }
    // target - computed: true, optional: true, required: false
    _target = new MagicWanGreTunnelHealthCheckTargetOutputReference(this, "target");
    get target() {
        return this._target;
    }
    putTarget(value) {
        this._target.internalValue = value;
    }
    resetTarget() {
        this._target.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target.internalValue;
    }
    // type - computed: true, optional: true, required: false
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
export class MagicWanGreTunnel extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_wan_gre_tunnel";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanGreTunnel to import
    * @param importFromId The id of the existing MagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanGreTunnel to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_gre_tunnel", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanGreTunnelConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_wan_gre_tunnel',
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
        this._automaticReturnRouting = config.automaticReturnRouting;
        this._bgp.internalValue = config.bgp;
        this._cloudflareGreEndpoint = config.cloudflareGreEndpoint;
        this._customerGreEndpoint = config.customerGreEndpoint;
        this._description = config.description;
        this._healthCheck.internalValue = config.healthCheck;
        this._interfaceAddress = config.interfaceAddress;
        this._interfaceAddress6 = config.interfaceAddress6;
        this._mtu = config.mtu;
        this._name = config.name;
        this._ttl = config.ttl;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // automatic_return_routing - computed: true, optional: true, required: false
    _automaticReturnRouting;
    get automaticReturnRouting() {
        return this.getBooleanAttribute('automatic_return_routing');
    }
    set automaticReturnRouting(value) {
        this._automaticReturnRouting = value;
    }
    resetAutomaticReturnRouting() {
        this._automaticReturnRouting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get automaticReturnRoutingInput() {
        return this._automaticReturnRouting;
    }
    // bgp - computed: false, optional: true, required: false
    _bgp = new MagicWanGreTunnelBgpOutputReference(this, "bgp");
    get bgp() {
        return this._bgp;
    }
    putBgp(value) {
        this._bgp.internalValue = value;
    }
    resetBgp() {
        this._bgp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bgpInput() {
        return this._bgp.internalValue;
    }
    // bgp_status - computed: true, optional: false, required: false
    _bgpStatus = new MagicWanGreTunnelBgpStatusOutputReference(this, "bgp_status");
    get bgpStatus() {
        return this._bgpStatus;
    }
    // cloudflare_gre_endpoint - computed: false, optional: false, required: true
    _cloudflareGreEndpoint;
    get cloudflareGreEndpoint() {
        return this.getStringAttribute('cloudflare_gre_endpoint');
    }
    set cloudflareGreEndpoint(value) {
        this._cloudflareGreEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareGreEndpointInput() {
        return this._cloudflareGreEndpoint;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // customer_gre_endpoint - computed: false, optional: false, required: true
    _customerGreEndpoint;
    get customerGreEndpoint() {
        return this.getStringAttribute('customer_gre_endpoint');
    }
    set customerGreEndpoint(value) {
        this._customerGreEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get customerGreEndpointInput() {
        return this._customerGreEndpoint;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // health_check - computed: true, optional: true, required: false
    _healthCheck = new MagicWanGreTunnelHealthCheckOutputReference(this, "health_check");
    get healthCheck() {
        return this._healthCheck;
    }
    putHealthCheck(value) {
        this._healthCheck.internalValue = value;
    }
    resetHealthCheck() {
        this._healthCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckInput() {
        return this._healthCheck.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interface_address - computed: false, optional: false, required: true
    _interfaceAddress;
    get interfaceAddress() {
        return this.getStringAttribute('interface_address');
    }
    set interfaceAddress(value) {
        this._interfaceAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    get interfaceAddressInput() {
        return this._interfaceAddress;
    }
    // interface_address6 - computed: false, optional: true, required: false
    _interfaceAddress6;
    get interfaceAddress6() {
        return this.getStringAttribute('interface_address6');
    }
    set interfaceAddress6(value) {
        this._interfaceAddress6 = value;
    }
    resetInterfaceAddress6() {
        this._interfaceAddress6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get interfaceAddress6Input() {
        return this._interfaceAddress6;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // mtu - computed: true, optional: true, required: false
    _mtu;
    get mtu() {
        return this.getNumberAttribute('mtu');
    }
    set mtu(value) {
        this._mtu = value;
    }
    resetMtu() {
        this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mtuInput() {
        return this._mtu;
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
    // ttl - computed: true, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            automatic_return_routing: cdktf.booleanToTerraform(this._automaticReturnRouting),
            bgp: magicWanGreTunnelBgpToTerraform(this._bgp.internalValue),
            cloudflare_gre_endpoint: cdktf.stringToTerraform(this._cloudflareGreEndpoint),
            customer_gre_endpoint: cdktf.stringToTerraform(this._customerGreEndpoint),
            description: cdktf.stringToTerraform(this._description),
            health_check: magicWanGreTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
            interface_address: cdktf.stringToTerraform(this._interfaceAddress),
            interface_address6: cdktf.stringToTerraform(this._interfaceAddress6),
            mtu: cdktf.numberToTerraform(this._mtu),
            name: cdktf.stringToTerraform(this._name),
            ttl: cdktf.numberToTerraform(this._ttl),
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
            automatic_return_routing: {
                value: cdktf.booleanToHclTerraform(this._automaticReturnRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bgp: {
                value: magicWanGreTunnelBgpToHclTerraform(this._bgp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanGreTunnelBgp",
            },
            cloudflare_gre_endpoint: {
                value: cdktf.stringToHclTerraform(this._cloudflareGreEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_gre_endpoint: {
                value: cdktf.stringToHclTerraform(this._customerGreEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check: {
                value: magicWanGreTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanGreTunnelHealthCheck",
            },
            interface_address: {
                value: cdktf.stringToHclTerraform(this._interfaceAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            interface_address6: {
                value: cdktf.stringToHclTerraform(this._interfaceAddress6),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mtu: {
                value: cdktf.numberToHclTerraform(this._mtu),
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
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
