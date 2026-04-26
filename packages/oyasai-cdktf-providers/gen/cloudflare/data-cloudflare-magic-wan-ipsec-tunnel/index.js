// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference extends cdktf.ComplexObject {
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
    // fqdn_id - computed: true, optional: false, required: false
    get fqdnId() {
        return this.getStringAttribute('fqdn_id');
    }
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
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
    _target = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(this, "target");
    get target() {
        return this._target;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference extends cdktf.ComplexObject {
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
    // allow_null_cipher - computed: true, optional: false, required: false
    get allowNullCipher() {
        return this.getBooleanAttribute('allow_null_cipher');
    }
    // automatic_return_routing - computed: true, optional: false, required: false
    get automaticReturnRouting() {
        return this.getBooleanAttribute('automatic_return_routing');
    }
    // bgp - computed: true, optional: false, required: false
    _bgp = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference(this, "bgp");
    get bgp() {
        return this._bgp;
    }
    // bgp_status - computed: true, optional: false, required: false
    _bgpStatus = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference(this, "bgp_status");
    get bgpStatus() {
        return this._bgpStatus;
    }
    // cloudflare_endpoint - computed: true, optional: false, required: false
    get cloudflareEndpoint() {
        return this.getStringAttribute('cloudflare_endpoint');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // custom_remote_identities - computed: true, optional: false, required: false
    _customRemoteIdentities = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference(this, "custom_remote_identities");
    get customRemoteIdentities() {
        return this._customRemoteIdentities;
    }
    // customer_endpoint - computed: true, optional: false, required: false
    get customerEndpoint() {
        return this.getStringAttribute('customer_endpoint');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // health_check - computed: true, optional: false, required: false
    _healthCheck = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(this, "health_check");
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
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // psk_metadata - computed: true, optional: false, required: false
    _pskMetadata = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(this, "psk_metadata");
    get pskMetadata() {
        return this._pskMetadata;
    }
    // replay_protection - computed: true, optional: false, required: false
    get replayProtection() {
        return this.getBooleanAttribute('replay_protection');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export class DataCloudflareMagicWanIpsecTunnel extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanIpsecTunnel to import
    * @param importFromId The id of the existing DataCloudflareMagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanIpsecTunnel to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanIpsecTunnelConfig
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
        this._ipsecTunnelId = config.ipsecTunnelId;
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ipsec_tunnel - computed: true, optional: false, required: false
    _ipsecTunnel = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference(this, "ipsec_tunnel");
    get ipsecTunnel() {
        return this._ipsecTunnel;
    }
    // ipsec_tunnel_id - computed: false, optional: false, required: true
    _ipsecTunnelId;
    get ipsecTunnelId() {
        return this.getStringAttribute('ipsec_tunnel_id');
    }
    set ipsecTunnelId(value) {
        this._ipsecTunnelId = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipsecTunnelIdInput() {
        return this._ipsecTunnelId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ipsec_tunnel_id: cdktf.stringToTerraform(this._ipsecTunnelId),
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
            ipsec_tunnel_id: {
                value: cdktf.stringToHclTerraform(this._ipsecTunnelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
