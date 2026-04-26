// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_addr: cdktf.stringToTerraform(struct.ipAddr),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
export function zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip_addr: {
            value: cdktf.stringToHclTerraform(struct.ipAddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference extends cdktf.ComplexObject {
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
        if (this._ipAddr !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddr = this._ipAddr;
        }
        if (this._virtualNetworkId !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualNetworkId = this._virtualNetworkId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddr = undefined;
            this._virtualNetworkId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddr = value.ipAddr;
            this._virtualNetworkId = value.virtualNetworkId;
        }
    }
    // ip_addr - computed: false, optional: true, required: false
    _ipAddr;
    get ipAddr() {
        return this.getStringAttribute('ip_addr');
    }
    set ipAddr(value) {
        this._ipAddr = value;
    }
    resetIpAddr() {
        this._ipAddr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipAddrInput() {
        return this._ipAddr;
    }
    // virtual_network_id - computed: true, optional: true, required: false
    _virtualNetworkId;
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
    set virtualNetworkId(value) {
        this._virtualNetworkId = value;
    }
    resetVirtualNetworkId() {
        this._virtualNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualNetworkIdInput() {
        return this._virtualNetworkId;
    }
}
export function zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_addr: cdktf.stringToTerraform(struct.ipAddr),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
export function zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip_addr: {
            value: cdktf.stringToHclTerraform(struct.ipAddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference extends cdktf.ComplexObject {
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
        if (this._ipAddr !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddr = this._ipAddr;
        }
        if (this._virtualNetworkId !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualNetworkId = this._virtualNetworkId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddr = undefined;
            this._virtualNetworkId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddr = value.ipAddr;
            this._virtualNetworkId = value.virtualNetworkId;
        }
    }
    // ip_addr - computed: false, optional: true, required: false
    _ipAddr;
    get ipAddr() {
        return this.getStringAttribute('ip_addr');
    }
    set ipAddr(value) {
        this._ipAddr = value;
    }
    resetIpAddr() {
        this._ipAddr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipAddrInput() {
        return this._ipAddr;
    }
    // virtual_network_id - computed: true, optional: true, required: false
    _virtualNetworkId;
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
    set virtualNetworkId(value) {
        this._virtualNetworkId = value;
    }
    resetVirtualNetworkId() {
        this._virtualNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualNetworkIdInput() {
        return this._virtualNetworkId;
    }
}
export function zeroTrustAccessInfrastructureTargetIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ipv4: zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct.ipv4),
        ipv6: zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct.ipv6),
    };
}
export function zeroTrustAccessInfrastructureTargetIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ipv4: {
            value: zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct.ipv4),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessInfrastructureTargetIpIpv4",
        },
        ipv6: {
            value: zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct.ipv6),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessInfrastructureTargetIpIpv6",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessInfrastructureTargetIpOutputReference extends cdktf.ComplexObject {
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
        if (this._ipv4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4 = this._ipv4?.internalValue;
        }
        if (this._ipv6?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv4.internalValue = undefined;
            this._ipv6.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv4.internalValue = value.ipv4;
            this._ipv6.internalValue = value.ipv6;
        }
    }
    // ipv4 - computed: false, optional: true, required: false
    _ipv4 = new ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(this, "ipv4");
    get ipv4() {
        return this._ipv4;
    }
    putIpv4(value) {
        this._ipv4.internalValue = value;
    }
    resetIpv4() {
        this._ipv4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4Input() {
        return this._ipv4.internalValue;
    }
    // ipv6 - computed: false, optional: true, required: false
    _ipv6 = new ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(this, "ipv6");
    get ipv6() {
        return this._ipv6;
    }
    putIpv6(value) {
        this._ipv6.internalValue = value;
    }
    resetIpv6() {
        this._ipv6.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6Input() {
        return this._ipv6.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
export class ZeroTrustAccessInfrastructureTarget extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import
    * @param importFromId The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_target", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessInfrastructureTargetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_target',
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
        this._hostname = config.hostname;
        this._ip.internalValue = config.ip;
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // hostname - computed: false, optional: false, required: true
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip - computed: false, optional: false, required: true
    _ip = new ZeroTrustAccessInfrastructureTargetIpOutputReference(this, "ip");
    get ip() {
        return this._ip;
    }
    putIp(value) {
        this._ip.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip.internalValue;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            hostname: cdktf.stringToTerraform(this._hostname),
            ip: zeroTrustAccessInfrastructureTargetIpToTerraform(this._ip.internalValue),
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
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip: {
                value: zeroTrustAccessInfrastructureTargetIpToHclTerraform(this._ip.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessInfrastructureTargetIp",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
