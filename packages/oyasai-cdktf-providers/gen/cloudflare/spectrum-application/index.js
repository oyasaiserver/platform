// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function spectrumApplicationDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function spectrumApplicationDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
export class SpectrumApplicationDnsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
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
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
        }
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
export function spectrumApplicationEdgeIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connectivity: cdktf.stringToTerraform(struct.connectivity),
        ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ips),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function spectrumApplicationEdgeIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        connectivity: {
            value: cdktf.stringToHclTerraform(struct.connectivity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ips),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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
export class SpectrumApplicationEdgeIpsOutputReference extends cdktf.ComplexObject {
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
        if (this._connectivity !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectivity = this._connectivity;
        }
        if (this._ips !== undefined) {
            hasAnyValues = true;
            internalValueResult.ips = this._ips;
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
            this._connectivity = undefined;
            this._ips = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectivity = value.connectivity;
            this._ips = value.ips;
            this._type = value.type;
        }
    }
    // connectivity - computed: true, optional: true, required: false
    _connectivity;
    get connectivity() {
        return this.getStringAttribute('connectivity');
    }
    set connectivity(value) {
        this._connectivity = value;
    }
    resetConnectivity() {
        this._connectivity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectivityInput() {
        return this._connectivity;
    }
    // ips - computed: true, optional: true, required: false
    _ips;
    get ips() {
        return this.getListAttribute('ips');
    }
    set ips(value) {
        this._ips = value;
    }
    resetIps() {
        this._ips = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipsInput() {
        return this._ips;
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
export function spectrumApplicationOriginDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        ttl: cdktf.numberToTerraform(struct.ttl),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function spectrumApplicationOriginDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
export class SpectrumApplicationOriginDnsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
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
            this._name = undefined;
            this._ttl = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._ttl = value.ttl;
            this._type = value.type;
        }
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
    // ttl - computed: false, optional: true, required: false
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application cloudflare_spectrum_application}
*/
export class SpectrumApplication extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_spectrum_application";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpectrumApplication to import
    * @param importFromId The id of the existing SpectrumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpectrumApplication to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_spectrum_application", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/spectrum_application cloudflare_spectrum_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpectrumApplicationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_spectrum_application',
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
        this._argoSmartRouting = config.argoSmartRouting;
        this._dns.internalValue = config.dns;
        this._edgeIps.internalValue = config.edgeIps;
        this._ipFirewall = config.ipFirewall;
        this._originDirect = config.originDirect;
        this._originDns.internalValue = config.originDns;
        this._originPort = config.originPort;
        this._protocol = config.protocol;
        this._proxyProtocol = config.proxyProtocol;
        this._tls = config.tls;
        this._trafficType = config.trafficType;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // argo_smart_routing - computed: true, optional: true, required: false
    _argoSmartRouting;
    get argoSmartRouting() {
        return this.getBooleanAttribute('argo_smart_routing');
    }
    set argoSmartRouting(value) {
        this._argoSmartRouting = value;
    }
    resetArgoSmartRouting() {
        this._argoSmartRouting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get argoSmartRoutingInput() {
        return this._argoSmartRouting;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // dns - computed: false, optional: false, required: true
    _dns = new SpectrumApplicationDnsOutputReference(this, "dns");
    get dns() {
        return this._dns;
    }
    putDns(value) {
        this._dns.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnsInput() {
        return this._dns.internalValue;
    }
    // edge_ips - computed: true, optional: true, required: false
    _edgeIps = new SpectrumApplicationEdgeIpsOutputReference(this, "edge_ips");
    get edgeIps() {
        return this._edgeIps;
    }
    putEdgeIps(value) {
        this._edgeIps.internalValue = value;
    }
    resetEdgeIps() {
        this._edgeIps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get edgeIpsInput() {
        return this._edgeIps.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip_firewall - computed: true, optional: true, required: false
    _ipFirewall;
    get ipFirewall() {
        return this.getBooleanAttribute('ip_firewall');
    }
    set ipFirewall(value) {
        this._ipFirewall = value;
    }
    resetIpFirewall() {
        this._ipFirewall = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipFirewallInput() {
        return this._ipFirewall;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // origin_direct - computed: false, optional: true, required: false
    _originDirect;
    get originDirect() {
        return this.getListAttribute('origin_direct');
    }
    set originDirect(value) {
        this._originDirect = value;
    }
    resetOriginDirect() {
        this._originDirect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originDirectInput() {
        return this._originDirect;
    }
    // origin_dns - computed: false, optional: true, required: false
    _originDns = new SpectrumApplicationOriginDnsOutputReference(this, "origin_dns");
    get originDns() {
        return this._originDns;
    }
    putOriginDns(value) {
        this._originDns.internalValue = value;
    }
    resetOriginDns() {
        this._originDns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originDnsInput() {
        return this._originDns.internalValue;
    }
    // origin_port - computed: false, optional: true, required: false
    _originPort;
    get originPort() {
        return this.getAnyMapAttribute('origin_port');
    }
    set originPort(value) {
        this._originPort = value;
    }
    resetOriginPort() {
        this._originPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originPortInput() {
        return this._originPort;
    }
    // protocol - computed: false, optional: false, required: true
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // proxy_protocol - computed: true, optional: true, required: false
    _proxyProtocol;
    get proxyProtocol() {
        return this.getStringAttribute('proxy_protocol');
    }
    set proxyProtocol(value) {
        this._proxyProtocol = value;
    }
    resetProxyProtocol() {
        this._proxyProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxyProtocolInput() {
        return this._proxyProtocol;
    }
    // tls - computed: true, optional: true, required: false
    _tls;
    get tls() {
        return this.getStringAttribute('tls');
    }
    set tls(value) {
        this._tls = value;
    }
    resetTls() {
        this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsInput() {
        return this._tls;
    }
    // traffic_type - computed: true, optional: true, required: false
    _trafficType;
    get trafficType() {
        return this.getStringAttribute('traffic_type');
    }
    set trafficType(value) {
        this._trafficType = value;
    }
    resetTrafficType() {
        this._trafficType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trafficTypeInput() {
        return this._trafficType;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            argo_smart_routing: cdktf.booleanToTerraform(this._argoSmartRouting),
            dns: spectrumApplicationDnsToTerraform(this._dns.internalValue),
            edge_ips: spectrumApplicationEdgeIpsToTerraform(this._edgeIps.internalValue),
            ip_firewall: cdktf.booleanToTerraform(this._ipFirewall),
            origin_direct: cdktf.listMapper(cdktf.stringToTerraform, false)(this._originDirect),
            origin_dns: spectrumApplicationOriginDnsToTerraform(this._originDns.internalValue),
            origin_port: cdktf.hashMapper(cdktf.anyToTerraform)(this._originPort),
            protocol: cdktf.stringToTerraform(this._protocol),
            proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
            tls: cdktf.stringToTerraform(this._tls),
            traffic_type: cdktf.stringToTerraform(this._trafficType),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            argo_smart_routing: {
                value: cdktf.booleanToHclTerraform(this._argoSmartRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dns: {
                value: spectrumApplicationDnsToHclTerraform(this._dns.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpectrumApplicationDns",
            },
            edge_ips: {
                value: spectrumApplicationEdgeIpsToHclTerraform(this._edgeIps.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpectrumApplicationEdgeIps",
            },
            ip_firewall: {
                value: cdktf.booleanToHclTerraform(this._ipFirewall),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            origin_direct: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._originDirect),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            origin_dns: {
                value: spectrumApplicationOriginDnsToHclTerraform(this._originDns.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpectrumApplicationOriginDns",
            },
            origin_port: {
                value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._originPort),
                isBlock: false,
                type: "map",
                storageClassType: "anyMap",
            },
            protocol: {
                value: cdktf.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proxy_protocol: {
                value: cdktf.stringToHclTerraform(this._proxyProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tls: {
                value: cdktf.stringToHclTerraform(this._tls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            traffic_type: {
                value: cdktf.stringToHclTerraform(this._trafficType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
