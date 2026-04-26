// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareMagicTransitSiteLanNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitSiteLanNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitSiteLanNatOutputReference extends cdktf.ComplexObject {
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
    // static_prefix - computed: true, optional: false, required: false
    get staticPrefix() {
        return this.getStringAttribute('static_prefix');
    }
}
export function dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference extends cdktf.ComplexObject {
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
    // static_prefix - computed: true, optional: false, required: false
    get staticPrefix() {
        return this.getStringAttribute('static_prefix');
    }
}
export function dataCloudflareMagicTransitSiteLanRoutedSubnetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitSiteLanRoutedSubnetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference extends cdktf.ComplexObject {
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
    // nat - computed: true, optional: false, required: false
    _nat = new DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference(this, "nat");
    get nat() {
        return this._nat;
    }
    // next_hop - computed: true, optional: false, required: false
    get nextHop() {
        return this.getStringAttribute('next_hop');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
}
export class DataCloudflareMagicTransitSiteLanRoutedSubnetsList extends cdktf.ComplexList {
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
        return new DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference extends cdktf.ComplexObject {
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
    // server_addresses - computed: true, optional: false, required: false
    get serverAddresses() {
        return this.getListAttribute('server_addresses');
    }
}
export function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference extends cdktf.ComplexObject {
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
    // dhcp_pool_end - computed: true, optional: false, required: false
    get dhcpPoolEnd() {
        return this.getStringAttribute('dhcp_pool_end');
    }
    // dhcp_pool_start - computed: true, optional: false, required: false
    get dhcpPoolStart() {
        return this.getStringAttribute('dhcp_pool_start');
    }
    // dns_server - computed: true, optional: false, required: false
    get dnsServer() {
        return this.getStringAttribute('dns_server');
    }
    // dns_servers - computed: true, optional: false, required: false
    get dnsServers() {
        return this.getListAttribute('dns_servers');
    }
    // reservations - computed: true, optional: false, required: false
    _reservations = new cdktf.StringMap(this, "reservations");
    get reservations() {
        return this._reservations;
    }
}
export function dataCloudflareMagicTransitSiteLanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareMagicTransitSiteLanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference extends cdktf.ComplexObject {
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
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // dhcp_relay - computed: true, optional: false, required: false
    _dhcpRelay = new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(this, "dhcp_relay");
    get dhcpRelay() {
        return this._dhcpRelay;
    }
    // dhcp_server - computed: true, optional: false, required: false
    _dhcpServer = new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference(this, "dhcp_server");
    get dhcpServer() {
        return this._dhcpServer;
    }
    // secondary_address - computed: true, optional: false, required: false
    get secondaryAddress() {
        return this.getStringAttribute('secondary_address');
    }
    // virtual_address - computed: true, optional: false, required: false
    get virtualAddress() {
        return this.getStringAttribute('virtual_address');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
export class DataCloudflareMagicTransitSiteLan extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_site_lan";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteLan to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteLan to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_lan", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteLanConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_lan',
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
        this._lanId = config.lanId;
        this._siteId = config.siteId;
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
    // bond_id - computed: true, optional: false, required: false
    get bondId() {
        return this.getNumberAttribute('bond_id');
    }
    // ha_link - computed: true, optional: false, required: false
    get haLink() {
        return this.getBooleanAttribute('ha_link');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_breakout - computed: true, optional: false, required: false
    get isBreakout() {
        return this.getBooleanAttribute('is_breakout');
    }
    // is_prioritized - computed: true, optional: false, required: false
    get isPrioritized() {
        return this.getBooleanAttribute('is_prioritized');
    }
    // lan_id - computed: false, optional: false, required: true
    _lanId;
    get lanId() {
        return this.getStringAttribute('lan_id');
    }
    set lanId(value) {
        this._lanId = value;
    }
    // Temporarily expose input value. Use with caution.
    get lanIdInput() {
        return this._lanId;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // nat - computed: true, optional: false, required: false
    _nat = new DataCloudflareMagicTransitSiteLanNatOutputReference(this, "nat");
    get nat() {
        return this._nat;
    }
    // physport - computed: true, optional: false, required: false
    get physport() {
        return this.getNumberAttribute('physport');
    }
    // routed_subnets - computed: true, optional: false, required: false
    _routedSubnets = new DataCloudflareMagicTransitSiteLanRoutedSubnetsList(this, "routed_subnets", false);
    get routedSubnets() {
        return this._routedSubnets;
    }
    // site_id - computed: false, optional: false, required: true
    _siteId;
    get siteId() {
        return this.getStringAttribute('site_id');
    }
    set siteId(value) {
        this._siteId = value;
    }
    // Temporarily expose input value. Use with caution.
    get siteIdInput() {
        return this._siteId;
    }
    // static_addressing - computed: true, optional: false, required: false
    _staticAddressing = new DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference(this, "static_addressing");
    get staticAddressing() {
        return this._staticAddressing;
    }
    // vlan_tag - computed: true, optional: false, required: false
    get vlanTag() {
        return this.getNumberAttribute('vlan_tag');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            lan_id: cdktf.stringToTerraform(this._lanId),
            site_id: cdktf.stringToTerraform(this._siteId),
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
            lan_id: {
                value: cdktf.stringToHclTerraform(this._lanId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
