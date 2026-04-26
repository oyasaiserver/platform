// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicWanIpsecTunnelBgpToTerraform(struct) {
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
export function magicWanIpsecTunnelBgpToHclTerraform(struct) {
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
export class MagicWanIpsecTunnelBgpOutputReference extends cdktf.ComplexObject {
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
export function magicWanIpsecTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function magicWanIpsecTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class MagicWanIpsecTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
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
export function magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fqdn_id: cdktf.stringToTerraform(struct.fqdnId),
    };
}
export function magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        fqdn_id: {
            value: cdktf.stringToHclTerraform(struct.fqdnId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference extends cdktf.ComplexObject {
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
        if (this._fqdnId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fqdnId = this._fqdnId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fqdnId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fqdnId = value.fqdnId;
        }
    }
    // fqdn_id - computed: false, optional: true, required: false
    _fqdnId;
    get fqdnId() {
        return this.getStringAttribute('fqdn_id');
    }
    set fqdnId(value) {
        this._fqdnId = value;
    }
    resetFqdnId() {
        this._fqdnId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fqdnIdInput() {
        return this._fqdnId;
    }
}
export function magicWanIpsecTunnelHealthCheckTargetToTerraform(struct) {
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
export function magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct) {
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
export class MagicWanIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
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
export function magicWanIpsecTunnelHealthCheckToTerraform(struct) {
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
        target: magicWanIpsecTunnelHealthCheckTargetToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function magicWanIpsecTunnelHealthCheckToHclTerraform(struct) {
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
            value: magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct.target),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicWanIpsecTunnelHealthCheckTarget",
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
export class MagicWanIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
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
    _target = new MagicWanIpsecTunnelHealthCheckTargetOutputReference(this, "target");
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
export function magicWanIpsecTunnelPskMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function magicWanIpsecTunnelPskMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class MagicWanIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
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
    // last_generated_on - computed: true, optional: false, required: false
    get lastGeneratedOn() {
        return this.getStringAttribute('last_generated_on');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export class MagicWanIpsecTunnel extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanIpsecTunnel to import
    * @param importFromId The id of the existing MagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanIpsecTunnel to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanIpsecTunnelConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_wan_ipsec_tunnel',
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
        this._cloudflareEndpoint = config.cloudflareEndpoint;
        this._customRemoteIdentities.internalValue = config.customRemoteIdentities;
        this._customerEndpoint = config.customerEndpoint;
        this._description = config.description;
        this._healthCheck.internalValue = config.healthCheck;
        this._interfaceAddress = config.interfaceAddress;
        this._interfaceAddress6 = config.interfaceAddress6;
        this._name = config.name;
        this._psk = config.psk;
        this._replayProtection = config.replayProtection;
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
    // allow_null_cipher - computed: true, optional: false, required: false
    get allowNullCipher() {
        return this.getBooleanAttribute('allow_null_cipher');
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
    _bgp = new MagicWanIpsecTunnelBgpOutputReference(this, "bgp");
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
    _bgpStatus = new MagicWanIpsecTunnelBgpStatusOutputReference(this, "bgp_status");
    get bgpStatus() {
        return this._bgpStatus;
    }
    // cloudflare_endpoint - computed: false, optional: false, required: true
    _cloudflareEndpoint;
    get cloudflareEndpoint() {
        return this.getStringAttribute('cloudflare_endpoint');
    }
    set cloudflareEndpoint(value) {
        this._cloudflareEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareEndpointInput() {
        return this._cloudflareEndpoint;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // custom_remote_identities - computed: false, optional: true, required: false
    _customRemoteIdentities = new MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(this, "custom_remote_identities");
    get customRemoteIdentities() {
        return this._customRemoteIdentities;
    }
    putCustomRemoteIdentities(value) {
        this._customRemoteIdentities.internalValue = value;
    }
    resetCustomRemoteIdentities() {
        this._customRemoteIdentities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customRemoteIdentitiesInput() {
        return this._customRemoteIdentities.internalValue;
    }
    // customer_endpoint - computed: false, optional: true, required: false
    _customerEndpoint;
    get customerEndpoint() {
        return this.getStringAttribute('customer_endpoint');
    }
    set customerEndpoint(value) {
        this._customerEndpoint = value;
    }
    resetCustomerEndpoint() {
        this._customerEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerEndpointInput() {
        return this._customerEndpoint;
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
    _healthCheck = new MagicWanIpsecTunnelHealthCheckOutputReference(this, "health_check");
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
    // psk - computed: false, optional: true, required: false
    _psk;
    get psk() {
        return this.getStringAttribute('psk');
    }
    set psk(value) {
        this._psk = value;
    }
    resetPsk() {
        this._psk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pskInput() {
        return this._psk;
    }
    // psk_metadata - computed: true, optional: false, required: false
    _pskMetadata = new MagicWanIpsecTunnelPskMetadataOutputReference(this, "psk_metadata");
    get pskMetadata() {
        return this._pskMetadata;
    }
    // replay_protection - computed: true, optional: true, required: false
    _replayProtection;
    get replayProtection() {
        return this.getBooleanAttribute('replay_protection');
    }
    set replayProtection(value) {
        this._replayProtection = value;
    }
    resetReplayProtection() {
        this._replayProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replayProtectionInput() {
        return this._replayProtection;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            automatic_return_routing: cdktf.booleanToTerraform(this._automaticReturnRouting),
            bgp: magicWanIpsecTunnelBgpToTerraform(this._bgp.internalValue),
            cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
            custom_remote_identities: magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(this._customRemoteIdentities.internalValue),
            customer_endpoint: cdktf.stringToTerraform(this._customerEndpoint),
            description: cdktf.stringToTerraform(this._description),
            health_check: magicWanIpsecTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
            interface_address: cdktf.stringToTerraform(this._interfaceAddress),
            interface_address6: cdktf.stringToTerraform(this._interfaceAddress6),
            name: cdktf.stringToTerraform(this._name),
            psk: cdktf.stringToTerraform(this._psk),
            replay_protection: cdktf.booleanToTerraform(this._replayProtection),
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
                value: magicWanIpsecTunnelBgpToHclTerraform(this._bgp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanIpsecTunnelBgp",
            },
            cloudflare_endpoint: {
                value: cdktf.stringToHclTerraform(this._cloudflareEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_remote_identities: {
                value: magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(this._customRemoteIdentities.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanIpsecTunnelCustomRemoteIdentities",
            },
            customer_endpoint: {
                value: cdktf.stringToHclTerraform(this._customerEndpoint),
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
                value: magicWanIpsecTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanIpsecTunnelHealthCheck",
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            psk: {
                value: cdktf.stringToHclTerraform(this._psk),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replay_protection: {
                value: cdktf.booleanToHclTerraform(this._replayProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
