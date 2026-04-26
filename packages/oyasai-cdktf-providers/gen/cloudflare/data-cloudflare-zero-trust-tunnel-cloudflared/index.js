// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConnectionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareZeroTrustTunnelCloudflaredConnectionsList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_prefix: cdktf.stringToTerraform(struct.excludePrefix),
        existed_at: cdktf.stringToTerraform(struct.existedAt),
        include_prefix: cdktf.stringToTerraform(struct.includePrefix),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        name: cdktf.stringToTerraform(struct.name),
        status: cdktf.stringToTerraform(struct.status),
        uuid: cdktf.stringToTerraform(struct.uuid),
        was_active_at: cdktf.stringToTerraform(struct.wasActiveAt),
        was_inactive_at: cdktf.stringToTerraform(struct.wasInactiveAt),
    };
}
export function dataCloudflareZeroTrustTunnelCloudflaredFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exclude_prefix: {
            value: cdktf.stringToHclTerraform(struct.excludePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        existed_at: {
            value: cdktf.stringToHclTerraform(struct.existedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_prefix: {
            value: cdktf.stringToHclTerraform(struct.includePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_deleted: {
            value: cdktf.booleanToHclTerraform(struct.isDeleted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uuid: {
            value: cdktf.stringToHclTerraform(struct.uuid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        was_active_at: {
            value: cdktf.stringToHclTerraform(struct.wasActiveAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        was_inactive_at: {
            value: cdktf.stringToHclTerraform(struct.wasInactiveAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._excludePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludePrefix = this._excludePrefix;
        }
        if (this._existedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.existedAt = this._existedAt;
        }
        if (this._includePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.includePrefix = this._includePrefix;
        }
        if (this._isDeleted !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDeleted = this._isDeleted;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._uuid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uuid = this._uuid;
        }
        if (this._wasActiveAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.wasActiveAt = this._wasActiveAt;
        }
        if (this._wasInactiveAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.wasInactiveAt = this._wasInactiveAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludePrefix = undefined;
            this._existedAt = undefined;
            this._includePrefix = undefined;
            this._isDeleted = undefined;
            this._name = undefined;
            this._status = undefined;
            this._uuid = undefined;
            this._wasActiveAt = undefined;
            this._wasInactiveAt = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludePrefix = value.excludePrefix;
            this._existedAt = value.existedAt;
            this._includePrefix = value.includePrefix;
            this._isDeleted = value.isDeleted;
            this._name = value.name;
            this._status = value.status;
            this._uuid = value.uuid;
            this._wasActiveAt = value.wasActiveAt;
            this._wasInactiveAt = value.wasInactiveAt;
        }
    }
    // exclude_prefix - computed: false, optional: true, required: false
    _excludePrefix;
    get excludePrefix() {
        return this.getStringAttribute('exclude_prefix');
    }
    set excludePrefix(value) {
        this._excludePrefix = value;
    }
    resetExcludePrefix() {
        this._excludePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludePrefixInput() {
        return this._excludePrefix;
    }
    // existed_at - computed: false, optional: true, required: false
    _existedAt;
    get existedAt() {
        return this.getStringAttribute('existed_at');
    }
    set existedAt(value) {
        this._existedAt = value;
    }
    resetExistedAt() {
        this._existedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get existedAtInput() {
        return this._existedAt;
    }
    // include_prefix - computed: false, optional: true, required: false
    _includePrefix;
    get includePrefix() {
        return this.getStringAttribute('include_prefix');
    }
    set includePrefix(value) {
        this._includePrefix = value;
    }
    resetIncludePrefix() {
        this._includePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includePrefixInput() {
        return this._includePrefix;
    }
    // is_deleted - computed: false, optional: true, required: false
    _isDeleted;
    get isDeleted() {
        return this.getBooleanAttribute('is_deleted');
    }
    set isDeleted(value) {
        this._isDeleted = value;
    }
    resetIsDeleted() {
        this._isDeleted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isDeletedInput() {
        return this._isDeleted;
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
    // status - computed: false, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // uuid - computed: false, optional: true, required: false
    _uuid;
    get uuid() {
        return this.getStringAttribute('uuid');
    }
    set uuid(value) {
        this._uuid = value;
    }
    resetUuid() {
        this._uuid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uuidInput() {
        return this._uuid;
    }
    // was_active_at - computed: false, optional: true, required: false
    _wasActiveAt;
    get wasActiveAt() {
        return this.getStringAttribute('was_active_at');
    }
    set wasActiveAt(value) {
        this._wasActiveAt = value;
    }
    resetWasActiveAt() {
        this._wasActiveAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wasActiveAtInput() {
        return this._wasActiveAt;
    }
    // was_inactive_at - computed: false, optional: true, required: false
    _wasInactiveAt;
    get wasInactiveAt() {
        return this.getStringAttribute('was_inactive_at');
    }
    set wasInactiveAt(value) {
        this._wasInactiveAt = value;
    }
    resetWasInactiveAt() {
        this._wasInactiveAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wasInactiveAtInput() {
        return this._wasInactiveAt;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}
*/
export class DataCloudflareZeroTrustTunnelCloudflared extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflared to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflared that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflared to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared',
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
        this._filter.internalValue = config.filter;
        this._tunnelId = config.tunnelId;
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
    // config_src - computed: true, optional: false, required: false
    get configSrc() {
        return this.getStringAttribute('config_src');
    }
    // connections - computed: true, optional: false, required: false
    _connections = new DataCloudflareZeroTrustTunnelCloudflaredConnectionsList(this, "connections", false);
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
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // metadata - computed: true, optional: false, required: false
    get metadata() {
        return this.getStringAttribute('metadata');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // remote_config - computed: true, optional: false, required: false
    get remoteConfig() {
        return this.getBooleanAttribute('remote_config');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tun_type - computed: true, optional: false, required: false
    get tunType() {
        return this.getStringAttribute('tun_type');
    }
    // tunnel_id - computed: false, optional: true, required: false
    _tunnelId;
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    set tunnelId(value) {
        this._tunnelId = value;
    }
    resetTunnelId() {
        this._tunnelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelIdInput() {
        return this._tunnelId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustTunnelCloudflaredFilterToTerraform(this._filter.internalValue),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
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
            filter: {
                value: dataCloudflareZeroTrustTunnelCloudflaredFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredFilter",
            },
            tunnel_id: {
                value: cdktf.stringToHclTerraform(this._tunnelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
