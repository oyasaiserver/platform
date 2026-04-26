// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function keylessCertificateTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        private_ip: cdktf.stringToTerraform(struct.privateIp),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
export function keylessCertificateTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        private_ip: {
            value: cdktf.stringToHclTerraform(struct.privateIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vnet_id: {
            value: cdktf.stringToHclTerraform(struct.vnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class KeylessCertificateTunnelOutputReference extends cdktf.ComplexObject {
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
        if (this._privateIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIp = this._privateIp;
        }
        if (this._vnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vnetId = this._vnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._privateIp = undefined;
            this._vnetId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._privateIp = value.privateIp;
            this._vnetId = value.vnetId;
        }
    }
    // private_ip - computed: false, optional: false, required: true
    _privateIp;
    get privateIp() {
        return this.getStringAttribute('private_ip');
    }
    set privateIp(value) {
        this._privateIp = value;
    }
    // Temporarily expose input value. Use with caution.
    get privateIpInput() {
        return this._privateIp;
    }
    // vnet_id - computed: false, optional: false, required: true
    _vnetId;
    get vnetId() {
        return this.getStringAttribute('vnet_id');
    }
    set vnetId(value) {
        this._vnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vnetIdInput() {
        return this._vnetId;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate cloudflare_keyless_certificate}
*/
export class KeylessCertificate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_keyless_certificate";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a KeylessCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KeylessCertificate to import
    * @param importFromId The id of the existing KeylessCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KeylessCertificate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_keyless_certificate", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate cloudflare_keyless_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeylessCertificateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_keyless_certificate',
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
        this._bundleMethod = config.bundleMethod;
        this._certificate = config.certificate;
        this._enabled = config.enabled;
        this._host = config.host;
        this._name = config.name;
        this._port = config.port;
        this._tunnel.internalValue = config.tunnel;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // bundle_method - computed: true, optional: true, required: false
    _bundleMethod;
    get bundleMethod() {
        return this.getStringAttribute('bundle_method');
    }
    set bundleMethod(value) {
        this._bundleMethod = value;
    }
    resetBundleMethod() {
        this._bundleMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bundleMethodInput() {
        return this._bundleMethod;
    }
    // certificate - computed: false, optional: false, required: true
    _certificate;
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    set certificate(value) {
        this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // enabled - computed: false, optional: true, required: false
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
    // host - computed: false, optional: false, required: true
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
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
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // port - computed: true, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tunnel - computed: false, optional: true, required: false
    _tunnel = new KeylessCertificateTunnelOutputReference(this, "tunnel");
    get tunnel() {
        return this._tunnel;
    }
    putTunnel(value) {
        this._tunnel.internalValue = value;
    }
    resetTunnel() {
        this._tunnel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelInput() {
        return this._tunnel.internalValue;
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
            bundle_method: cdktf.stringToTerraform(this._bundleMethod),
            certificate: cdktf.stringToTerraform(this._certificate),
            enabled: cdktf.booleanToTerraform(this._enabled),
            host: cdktf.stringToTerraform(this._host),
            name: cdktf.stringToTerraform(this._name),
            port: cdktf.numberToTerraform(this._port),
            tunnel: keylessCertificateTunnelToTerraform(this._tunnel.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            bundle_method: {
                value: cdktf.stringToHclTerraform(this._bundleMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate: {
                value: cdktf.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
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
            port: {
                value: cdktf.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel: {
                value: keylessCertificateTunnelToHclTerraform(this._tunnel.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "KeylessCertificateTunnel",
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
