// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        existed_at: cdktf.stringToTerraform(struct.existedAt),
        hostname: cdktf.stringToTerraform(struct.hostname),
        id: cdktf.stringToTerraform(struct.id),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
    };
}
export function dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(struct) {
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
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._isDeleted !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDeleted = this._isDeleted;
        }
        if (this._tunnelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelId = this._tunnelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._existedAt = undefined;
            this._hostname = undefined;
            this._id = undefined;
            this._isDeleted = undefined;
            this._tunnelId = undefined;
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
            this._hostname = value.hostname;
            this._id = value.id;
            this._isDeleted = value.isDeleted;
            this._tunnelId = value.tunnelId;
        }
    }
    // comment - computed: false, optional: true, required: false
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
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // is_deleted - computed: true, optional: true, required: false
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}
*/
export class DataCloudflareZeroTrustNetworkHostnameRoute extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_network_hostname_route";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_network_hostname_route", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustNetworkHostnameRouteConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_network_hostname_route',
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
        this._hostnameRouteId = config.hostnameRouteId;
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
    _filter = new DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(this, "filter");
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
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // hostname_route_id - computed: false, optional: true, required: false
    _hostnameRouteId;
    get hostnameRouteId() {
        return this.getStringAttribute('hostname_route_id');
    }
    set hostnameRouteId(value) {
        this._hostnameRouteId = value;
    }
    resetHostnameRouteId() {
        this._hostnameRouteId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameRouteIdInput() {
        return this._hostnameRouteId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // tunnel_id - computed: true, optional: false, required: false
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    // tunnel_name - computed: true, optional: false, required: false
    get tunnelName() {
        return this.getStringAttribute('tunnel_name');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(this._filter.internalValue),
            hostname_route_id: cdktf.stringToTerraform(this._hostnameRouteId),
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
                value: dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustNetworkHostnameRouteFilter",
            },
            hostname_route_id: {
                value: cdktf.stringToHclTerraform(this._hostnameRouteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
