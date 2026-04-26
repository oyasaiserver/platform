// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference extends cdktf.ComplexObject {
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
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
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
    // network - computed: true, optional: false, required: false
    get network() {
        return this.getStringAttribute('network');
    }
    // tun_type - computed: true, optional: false, required: false
    get tunType() {
        return this.getStringAttribute('tun_type');
    }
    // tunnel_id - computed: true, optional: false, required: false
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    // tunnel_name - computed: true, optional: false, required: false
    get tunnelName() {
        return this.getStringAttribute('tunnel_name');
    }
    // virtual_network_id - computed: true, optional: false, required: false
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
    // virtual_network_name - computed: true, optional: false, required: false
    get virtualNetworkName() {
        return this.getStringAttribute('virtual_network_name');
    }
}
export class DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredRoutes extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_routes";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_routes", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_routes',
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
        this._comment = config.comment;
        this._existedAt = config.existedAt;
        this._isDeleted = config.isDeleted;
        this._maxItems = config.maxItems;
        this._networkSubset = config.networkSubset;
        this._networkSuperset = config.networkSuperset;
        this._routeId = config.routeId;
        this._tunTypes = config.tunTypes;
        this._tunnelId = config.tunnelId;
        this._virtualNetworkId = config.virtualNetworkId;
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
    // comment - computed: true, optional: true, required: false
    _comment;
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
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
    // network_subset - computed: false, optional: true, required: false
    _networkSubset;
    get networkSubset() {
        return this.getStringAttribute('network_subset');
    }
    set networkSubset(value) {
        this._networkSubset = value;
    }
    resetNetworkSubset() {
        this._networkSubset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSubsetInput() {
        return this._networkSubset;
    }
    // network_superset - computed: false, optional: true, required: false
    _networkSuperset;
    get networkSuperset() {
        return this.getStringAttribute('network_superset');
    }
    set networkSuperset(value) {
        this._networkSuperset = value;
    }
    resetNetworkSuperset() {
        this._networkSuperset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSupersetInput() {
        return this._networkSuperset;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // route_id - computed: false, optional: true, required: false
    _routeId;
    get routeId() {
        return this.getStringAttribute('route_id');
    }
    set routeId(value) {
        this._routeId = value;
    }
    resetRouteId() {
        this._routeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeIdInput() {
        return this._routeId;
    }
    // tun_types - computed: false, optional: true, required: false
    _tunTypes;
    get tunTypes() {
        return this.getListAttribute('tun_types');
    }
    set tunTypes(value) {
        this._tunTypes = value;
    }
    resetTunTypes() {
        this._tunTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunTypesInput() {
        return this._tunTypes;
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
    // virtual_network_id - computed: false, optional: true, required: false
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comment: cdktf.stringToTerraform(this._comment),
            existed_at: cdktf.stringToTerraform(this._existedAt),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            network_subset: cdktf.stringToTerraform(this._networkSubset),
            network_superset: cdktf.stringToTerraform(this._networkSuperset),
            route_id: cdktf.stringToTerraform(this._routeId),
            tun_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunTypes),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
            virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
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
            comment: {
                value: cdktf.stringToHclTerraform(this._comment),
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
            network_subset: {
                value: cdktf.stringToHclTerraform(this._networkSubset),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_superset: {
                value: cdktf.stringToHclTerraform(this._networkSuperset),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_id: {
                value: cdktf.stringToHclTerraform(this._routeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tun_types: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tunnel_id: {
                value: cdktf.stringToHclTerraform(this._tunnelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            virtual_network_id: {
                value: cdktf.stringToHclTerraform(this._virtualNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
