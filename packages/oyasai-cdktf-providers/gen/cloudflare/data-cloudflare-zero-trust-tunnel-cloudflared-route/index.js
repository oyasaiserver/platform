// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        existed_at: cdktf.stringToTerraform(struct.existedAt),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        network_subset: cdktf.stringToTerraform(struct.networkSubset),
        network_superset: cdktf.stringToTerraform(struct.networkSuperset),
        tun_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tunTypes),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
export function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comment: {
            value: cdktf.stringToHclTerraform(struct.comment),
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
        is_deleted: {
            value: cdktf.booleanToHclTerraform(struct.isDeleted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        network_subset: {
            value: cdktf.stringToHclTerraform(struct.networkSubset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_superset: {
            value: cdktf.stringToHclTerraform(struct.networkSuperset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tun_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tunTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
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
export class DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._existedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.existedAt = this._existedAt;
        }
        if (this._isDeleted !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDeleted = this._isDeleted;
        }
        if (this._networkSubset !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSubset = this._networkSubset;
        }
        if (this._networkSuperset !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSuperset = this._networkSuperset;
        }
        if (this._tunTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunTypes = this._tunTypes;
        }
        if (this._tunnelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelId = this._tunnelId;
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
            this._comment = undefined;
            this._existedAt = undefined;
            this._isDeleted = undefined;
            this._networkSubset = undefined;
            this._networkSuperset = undefined;
            this._tunTypes = undefined;
            this._tunnelId = undefined;
            this._virtualNetworkId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._existedAt = value.existedAt;
            this._isDeleted = value.isDeleted;
            this._networkSubset = value.networkSubset;
            this._networkSuperset = value.networkSuperset;
            this._tunTypes = value.tunTypes;
            this._tunnelId = value.tunnelId;
            this._virtualNetworkId = value.virtualNetworkId;
        }
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredRoute extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_route";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoute to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoute to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_route", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredRouteConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_route',
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
        this._routeId = config.routeId;
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
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference(this, "filter");
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
    // network - computed: true, optional: false, required: false
    get network() {
        return this.getStringAttribute('network');
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
    // tunnel_id - computed: true, optional: false, required: false
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    // virtual_network_id - computed: true, optional: false, required: false
    get virtualNetworkId() {
        return this.getStringAttribute('virtual_network_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(this._filter.internalValue),
            route_id: cdktf.stringToTerraform(this._routeId),
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
                value: dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredRouteFilter",
            },
            route_id: {
                value: cdktf.stringToHclTerraform(this._routeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
