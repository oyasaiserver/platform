// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDeviceManagedNetworksConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        sha256: cdktf.stringToTerraform(struct.sha256),
        tls_sockaddr: cdktf.stringToTerraform(struct.tlsSockaddr),
    };
}
export function zeroTrustDeviceManagedNetworksConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        sha256: {
            value: cdktf.stringToHclTerraform(struct.sha256),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tls_sockaddr: {
            value: cdktf.stringToHclTerraform(struct.tlsSockaddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDeviceManagedNetworksConfigAOutputReference extends cdktf.ComplexObject {
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
        if (this._sha256 !== undefined) {
            hasAnyValues = true;
            internalValueResult.sha256 = this._sha256;
        }
        if (this._tlsSockaddr !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsSockaddr = this._tlsSockaddr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sha256 = undefined;
            this._tlsSockaddr = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sha256 = value.sha256;
            this._tlsSockaddr = value.tlsSockaddr;
        }
    }
    // sha256 - computed: false, optional: true, required: false
    _sha256;
    get sha256() {
        return this.getStringAttribute('sha256');
    }
    set sha256(value) {
        this._sha256 = value;
    }
    resetSha256() {
        this._sha256 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sha256Input() {
        return this._sha256;
    }
    // tls_sockaddr - computed: false, optional: false, required: true
    _tlsSockaddr;
    get tlsSockaddr() {
        return this.getStringAttribute('tls_sockaddr');
    }
    set tlsSockaddr(value) {
        this._tlsSockaddr = value;
    }
    // Temporarily expose input value. Use with caution.
    get tlsSockaddrInput() {
        return this._tlsSockaddr;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}
*/
export class ZeroTrustDeviceManagedNetworks extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_managed_networks";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceManagedNetworks to import
    * @param importFromId The id of the existing ZeroTrustDeviceManagedNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceManagedNetworks to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_managed_networks", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceManagedNetworksConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_managed_networks',
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
        this._config.internalValue = config.config;
        this._name = config.name;
        this._type = config.type;
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
    // config - computed: false, optional: false, required: true
    _config = new ZeroTrustDeviceManagedNetworksConfigAOutputReference(this, "config");
    get config() {
        return this._config;
    }
    putConfig(value) {
        this._config.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get configInput() {
        return this._config.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // network_id - computed: true, optional: false, required: false
    get networkId() {
        return this.getStringAttribute('network_id');
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustDeviceManagedNetworksConfigAToTerraform(this._config.internalValue),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
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
            config: {
                value: zeroTrustDeviceManagedNetworksConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDeviceManagedNetworksConfigA",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
