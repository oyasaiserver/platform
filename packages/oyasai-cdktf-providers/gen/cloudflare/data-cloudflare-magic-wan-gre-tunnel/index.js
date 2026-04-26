// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareMagicWanGreTunnelGreTunnelBgpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanGreTunnelGreTunnelBgpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference extends cdktf.ComplexObject {
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
    // customer_asn - computed: true, optional: false, required: false
    get customerAsn() {
        return this.getNumberAttribute('customer_asn');
    }
    // extra_prefixes - computed: true, optional: false, required: false
    get extraPrefixes() {
        return this.getListAttribute('extra_prefixes');
    }
    // md5_key - computed: true, optional: false, required: false
    get md5Key() {
        return this.getStringAttribute('md5_key');
    }
}
export function dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
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
    // effective - computed: true, optional: false, required: false
    get effective() {
        return this.getStringAttribute('effective');
    }
    // saved - computed: true, optional: false, required: false
    get saved() {
        return this.getStringAttribute('saved');
    }
}
export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
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
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // rate - computed: true, optional: false, required: false
    get rate() {
        return this.getStringAttribute('rate');
    }
    // target - computed: true, optional: false, required: false
    _target = new DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(this, "target");
    get target() {
        return this._target;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function dataCloudflareMagicWanGreTunnelGreTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanGreTunnelGreTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanGreTunnelGreTunnelOutputReference extends cdktf.ComplexObject {
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
    // automatic_return_routing - computed: true, optional: false, required: false
    get automaticReturnRouting() {
        return this.getBooleanAttribute('automatic_return_routing');
    }
    // bgp - computed: true, optional: false, required: false
    _bgp = new DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference(this, "bgp");
    get bgp() {
        return this._bgp;
    }
    // bgp_status - computed: true, optional: false, required: false
    _bgpStatus = new DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference(this, "bgp_status");
    get bgpStatus() {
        return this._bgpStatus;
    }
    // cloudflare_gre_endpoint - computed: true, optional: false, required: false
    get cloudflareGreEndpoint() {
        return this.getStringAttribute('cloudflare_gre_endpoint');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // customer_gre_endpoint - computed: true, optional: false, required: false
    get customerGreEndpoint() {
        return this.getStringAttribute('customer_gre_endpoint');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // health_check - computed: true, optional: false, required: false
    _healthCheck = new DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference(this, "health_check");
    get healthCheck() {
        return this._healthCheck;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // interface_address - computed: true, optional: false, required: false
    get interfaceAddress() {
        return this.getStringAttribute('interface_address');
    }
    // interface_address6 - computed: true, optional: false, required: false
    get interfaceAddress6() {
        return this.getStringAttribute('interface_address6');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // mtu - computed: true, optional: false, required: false
    get mtu() {
        return this.getNumberAttribute('mtu');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // ttl - computed: true, optional: false, required: false
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
export class DataCloudflareMagicWanGreTunnel extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_wan_gre_tunnel";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanGreTunnel to import
    * @param importFromId The id of the existing DataCloudflareMagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanGreTunnel to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_gre_tunnel", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanGreTunnelConfig
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
        this._greTunnelId = config.greTunnelId;
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
    // gre_tunnel - computed: true, optional: false, required: false
    _greTunnel = new DataCloudflareMagicWanGreTunnelGreTunnelOutputReference(this, "gre_tunnel");
    get greTunnel() {
        return this._greTunnel;
    }
    // gre_tunnel_id - computed: false, optional: false, required: true
    _greTunnelId;
    get greTunnelId() {
        return this.getStringAttribute('gre_tunnel_id');
    }
    set greTunnelId(value) {
        this._greTunnelId = value;
    }
    // Temporarily expose input value. Use with caution.
    get greTunnelIdInput() {
        return this._greTunnelId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            gre_tunnel_id: cdktf.stringToTerraform(this._greTunnelId),
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
            gre_tunnel_id: {
                value: cdktf.stringToHclTerraform(this._greTunnelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
