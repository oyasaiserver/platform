// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        is_default: cdktf.booleanToTerraform(struct.isDefault),
        is_default_network: cdktf.booleanToTerraform(struct.isDefaultNetwork),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_default: {
            value: cdktf.booleanToHclTerraform(struct.isDefault),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_default_network: {
            value: cdktf.booleanToHclTerraform(struct.isDefaultNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._isDefault !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDefault = this._isDefault;
        }
        if (this._isDefaultNetwork !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDefaultNetwork = this._isDefaultNetwork;
        }
        if (this._isDeleted !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDeleted = this._isDeleted;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._isDefault = undefined;
            this._isDefaultNetwork = undefined;
            this._isDeleted = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._isDefault = value.isDefault;
            this._isDefaultNetwork = value.isDefaultNetwork;
            this._isDeleted = value.isDeleted;
            this._name = value.name;
        }
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
    // is_default - computed: false, optional: true, required: false
    _isDefault;
    get isDefault() {
        return this.getBooleanAttribute('is_default');
    }
    set isDefault(value) {
        this._isDefault = value;
    }
    resetIsDefault() {
        this._isDefault = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isDefaultInput() {
        return this._isDefault;
    }
    // is_default_network - computed: false, optional: true, required: false
    _isDefaultNetwork;
    get isDefaultNetwork() {
        return this.getBooleanAttribute('is_default_network');
    }
    set isDefaultNetwork(value) {
        this._isDefaultNetwork = value;
    }
    resetIsDefaultNetwork() {
        this._isDefaultNetwork = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isDefaultNetworkInput() {
        return this._isDefaultNetwork;
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_network";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_network", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_virtual_network',
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
    _filter = new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference(this, "filter");
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
    // is_default_network - computed: true, optional: false, required: false
    get isDefaultNetwork() {
        return this.getBooleanAttribute('is_default_network');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
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
            filter: dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(this._filter.internalValue),
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
            filter: {
                value: dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter",
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
