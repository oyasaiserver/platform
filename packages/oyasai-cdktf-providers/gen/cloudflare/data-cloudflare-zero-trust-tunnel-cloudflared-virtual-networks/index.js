// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference extends cdktf.ComplexObject {
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
    // is_default_network - computed: true, optional: false, required: false
    get isDefaultNetwork() {
        return this.getBooleanAttribute('is_default_network');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_networks";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_networks", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_virtual_networks',
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
        this._id = config.id;
        this._isDefault = config.isDefault;
        this._isDefaultNetwork = config.isDefaultNetwork;
        this._isDeleted = config.isDeleted;
        this._maxItems = config.maxItems;
        this._name = config.name;
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
    _result = new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            id: cdktf.stringToTerraform(this._id),
            is_default: cdktf.booleanToTerraform(this._isDefault),
            is_default_network: cdktf.booleanToTerraform(this._isDefaultNetwork),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
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
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_default: {
                value: cdktf.booleanToHclTerraform(this._isDefault),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_default_network: {
                value: cdktf.booleanToHclTerraform(this._isDefaultNetwork),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
