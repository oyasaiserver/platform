// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference extends cdktf.ComplexObject {
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
    // account_tag - computed: true, optional: false, required: false
    get accountTag() {
        return this.getStringAttribute('account_tag');
    }
    // config_src - computed: true, optional: false, required: false
    get configSrc() {
        return this.getStringAttribute('config_src');
    }
    // connections - computed: true, optional: false, required: false
    _connections = new DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList(this, "connections", false);
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
}
export class DataCloudflareZeroTrustTunnelCloudflaredsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds}
*/
export class DataCloudflareZeroTrustTunnelCloudflareds extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflareds";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflareds resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflareds to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflareds that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflareds to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflareds", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflareds',
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
        this._excludePrefix = config.excludePrefix;
        this._existedAt = config.existedAt;
        this._includePrefix = config.includePrefix;
        this._isDeleted = config.isDeleted;
        this._maxItems = config.maxItems;
        this._name = config.name;
        this._status = config.status;
        this._uuid = config.uuid;
        this._wasActiveAt = config.wasActiveAt;
        this._wasInactiveAt = config.wasInactiveAt;
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
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
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareZeroTrustTunnelCloudflaredsResultList(this, "result", false);
    get result() {
        return this._result;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            exclude_prefix: cdktf.stringToTerraform(this._excludePrefix),
            existed_at: cdktf.stringToTerraform(this._existedAt),
            include_prefix: cdktf.stringToTerraform(this._includePrefix),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            status: cdktf.stringToTerraform(this._status),
            uuid: cdktf.stringToTerraform(this._uuid),
            was_active_at: cdktf.stringToTerraform(this._wasActiveAt),
            was_inactive_at: cdktf.stringToTerraform(this._wasInactiveAt),
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
            exclude_prefix: {
                value: cdktf.stringToHclTerraform(this._excludePrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            existed_at: {
                value: cdktf.stringToHclTerraform(this._existedAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include_prefix: {
                value: cdktf.stringToHclTerraform(this._includePrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_deleted: {
                value: cdktf.booleanToHclTerraform(this._isDeleted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            uuid: {
                value: cdktf.stringToHclTerraform(this._uuid),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            was_active_at: {
                value: cdktf.stringToHclTerraform(this._wasActiveAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            was_inactive_at: {
                value: cdktf.stringToHclTerraform(this._wasInactiveAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
