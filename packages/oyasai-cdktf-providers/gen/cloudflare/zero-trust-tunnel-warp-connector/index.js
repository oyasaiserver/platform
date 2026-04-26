// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustTunnelWarpConnectorConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustTunnelWarpConnectorConnectionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustTunnelWarpConnectorConnectionsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
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
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_version - computed: true, optional: false, required: false
    get clientVersion() {
        return this.getStringAttribute('client_version');
    }
    // colo_name - computed: true, optional: false, required: false
    get coloName() {
        return this.getStringAttribute('colo_name');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_pending_reconnect - computed: true, optional: false, required: false
    get isPendingReconnect() {
        return this.getBooleanAttribute('is_pending_reconnect');
    }
    // opened_at - computed: true, optional: false, required: false
    get openedAt() {
        return this.getStringAttribute('opened_at');
    }
    // origin_ip - computed: true, optional: false, required: false
    get originIp() {
        return this.getStringAttribute('origin_ip');
    }
    // uuid - computed: true, optional: false, required: false
    get uuid() {
        return this.getStringAttribute('uuid');
    }
}
export class ZeroTrustTunnelWarpConnectorConnectionsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
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
        return new ZeroTrustTunnelWarpConnectorConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}
*/
export class ZeroTrustTunnelWarpConnector extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_warp_connector";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelWarpConnector to import
    * @param importFromId The id of the existing ZeroTrustTunnelWarpConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelWarpConnector to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_warp_connector", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelWarpConnectorConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_warp_connector',
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
        this._ha = config.ha;
        this._name = config.name;
        this._tunnelSecret = config.tunnelSecret;
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
    // account_tag - computed: true, optional: false, required: false
    get accountTag() {
        return this.getStringAttribute('account_tag');
    }
    // connections - computed: true, optional: false, required: false
    _connections = new ZeroTrustTunnelWarpConnectorConnectionsList(this, "connections", false);
    get connections() {
        return this._connections;
    }
    // conns_active_at - computed: true, optional: false, required: false
    get connsActiveAt() {
        return this.getStringAttribute('conns_active_at');
    }
    // conns_inactive_at - computed: true, optional: false, required: false
    get connsInactiveAt() {
        return this.getStringAttribute('conns_inactive_at');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // deleted_at - computed: true, optional: false, required: false
    get deletedAt() {
        return this.getStringAttribute('deleted_at');
    }
    // ha - computed: true, optional: true, required: false
    _ha;
    get ha() {
        return this.getBooleanAttribute('ha');
    }
    set ha(value) {
        this._ha = value;
    }
    resetHa() {
        this._ha = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get haInput() {
        return this._ha;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // metadata - computed: true, optional: false, required: false
    get metadata() {
        return this.getStringAttribute('metadata');
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
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tun_type - computed: true, optional: false, required: false
    get tunType() {
        return this.getStringAttribute('tun_type');
    }
    // tunnel_secret - computed: false, optional: true, required: false
    _tunnelSecret;
    get tunnelSecret() {
        return this.getStringAttribute('tunnel_secret');
    }
    set tunnelSecret(value) {
        this._tunnelSecret = value;
    }
    resetTunnelSecret() {
        this._tunnelSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelSecretInput() {
        return this._tunnelSecret;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ha: cdktf.booleanToTerraform(this._ha),
            name: cdktf.stringToTerraform(this._name),
            tunnel_secret: cdktf.stringToTerraform(this._tunnelSecret),
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
            ha: {
                value: cdktf.booleanToHclTerraform(this._ha),
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
            tunnel_secret: {
                value: cdktf.stringToHclTerraform(this._tunnelSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
