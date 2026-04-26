// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicTransitSiteLanNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        static_prefix: cdktf.stringToTerraform(struct.staticPrefix),
    };
}
export function magicTransitSiteLanNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        static_prefix: {
            value: cdktf.stringToHclTerraform(struct.staticPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLanNatOutputReference extends cdktf.ComplexObject {
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
        if (this._staticPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticPrefix = this._staticPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._staticPrefix = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._staticPrefix = value.staticPrefix;
        }
    }
    // static_prefix - computed: false, optional: true, required: false
    _staticPrefix;
    get staticPrefix() {
        return this.getStringAttribute('static_prefix');
    }
    set staticPrefix(value) {
        this._staticPrefix = value;
    }
    resetStaticPrefix() {
        this._staticPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticPrefixInput() {
        return this._staticPrefix;
    }
}
export function magicTransitSiteLanRoutedSubnetsNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        static_prefix: cdktf.stringToTerraform(struct.staticPrefix),
    };
}
export function magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        static_prefix: {
            value: cdktf.stringToHclTerraform(struct.staticPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLanRoutedSubnetsNatOutputReference extends cdktf.ComplexObject {
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
        if (this._staticPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticPrefix = this._staticPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._staticPrefix = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._staticPrefix = value.staticPrefix;
        }
    }
    // static_prefix - computed: false, optional: true, required: false
    _staticPrefix;
    get staticPrefix() {
        return this.getStringAttribute('static_prefix');
    }
    set staticPrefix(value) {
        this._staticPrefix = value;
    }
    resetStaticPrefix() {
        this._staticPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticPrefixInput() {
        return this._staticPrefix;
    }
}
export function magicTransitSiteLanRoutedSubnetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        nat: magicTransitSiteLanRoutedSubnetsNatToTerraform(struct.nat),
        next_hop: cdktf.stringToTerraform(struct.nextHop),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
export function magicTransitSiteLanRoutedSubnetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        nat: {
            value: magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct.nat),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicTransitSiteLanRoutedSubnetsNat",
        },
        next_hop: {
            value: cdktf.stringToHclTerraform(struct.nextHop),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLanRoutedSubnetsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._nat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nat = this._nat?.internalValue;
        }
        if (this._nextHop !== undefined) {
            hasAnyValues = true;
            internalValueResult.nextHop = this._nextHop;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nat.internalValue = undefined;
            this._nextHop = undefined;
            this._prefix = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nat.internalValue = value.nat;
            this._nextHop = value.nextHop;
            this._prefix = value.prefix;
        }
    }
    // nat - computed: false, optional: true, required: false
    _nat = new MagicTransitSiteLanRoutedSubnetsNatOutputReference(this, "nat");
    get nat() {
        return this._nat;
    }
    putNat(value) {
        this._nat.internalValue = value;
    }
    resetNat() {
        this._nat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get natInput() {
        return this._nat.internalValue;
    }
    // next_hop - computed: false, optional: false, required: true
    _nextHop;
    get nextHop() {
        return this.getStringAttribute('next_hop');
    }
    set nextHop(value) {
        this._nextHop = value;
    }
    // Temporarily expose input value. Use with caution.
    get nextHopInput() {
        return this._nextHop;
    }
    // prefix - computed: false, optional: false, required: true
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
}
export class MagicTransitSiteLanRoutedSubnetsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new MagicTransitSiteLanRoutedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        server_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.serverAddresses),
    };
}
export function magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        server_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.serverAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference extends cdktf.ComplexObject {
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
        if (this._serverAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverAddresses = this._serverAddresses;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverAddresses = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverAddresses = value.serverAddresses;
        }
    }
    // server_addresses - computed: false, optional: true, required: false
    _serverAddresses;
    get serverAddresses() {
        return this.getListAttribute('server_addresses');
    }
    set serverAddresses(value) {
        this._serverAddresses = value;
    }
    resetServerAddresses() {
        this._serverAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverAddressesInput() {
        return this._serverAddresses;
    }
}
export function magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dhcp_pool_end: cdktf.stringToTerraform(struct.dhcpPoolEnd),
        dhcp_pool_start: cdktf.stringToTerraform(struct.dhcpPoolStart),
        dns_server: cdktf.stringToTerraform(struct.dnsServer),
        dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dnsServers),
        reservations: cdktf.hashMapper(cdktf.stringToTerraform)(struct.reservations),
    };
}
export function magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dhcp_pool_end: {
            value: cdktf.stringToHclTerraform(struct.dhcpPoolEnd),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dhcp_pool_start: {
            value: cdktf.stringToHclTerraform(struct.dhcpPoolStart),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_server: {
            value: cdktf.stringToHclTerraform(struct.dnsServer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_servers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dnsServers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        reservations: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.reservations),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLanStaticAddressingDhcpServerOutputReference extends cdktf.ComplexObject {
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
        if (this._dhcpPoolEnd !== undefined) {
            hasAnyValues = true;
            internalValueResult.dhcpPoolEnd = this._dhcpPoolEnd;
        }
        if (this._dhcpPoolStart !== undefined) {
            hasAnyValues = true;
            internalValueResult.dhcpPoolStart = this._dhcpPoolStart;
        }
        if (this._dnsServer !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsServer = this._dnsServer;
        }
        if (this._dnsServers !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsServers = this._dnsServers;
        }
        if (this._reservations !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservations = this._reservations;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dhcpPoolEnd = undefined;
            this._dhcpPoolStart = undefined;
            this._dnsServer = undefined;
            this._dnsServers = undefined;
            this._reservations = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dhcpPoolEnd = value.dhcpPoolEnd;
            this._dhcpPoolStart = value.dhcpPoolStart;
            this._dnsServer = value.dnsServer;
            this._dnsServers = value.dnsServers;
            this._reservations = value.reservations;
        }
    }
    // dhcp_pool_end - computed: false, optional: true, required: false
    _dhcpPoolEnd;
    get dhcpPoolEnd() {
        return this.getStringAttribute('dhcp_pool_end');
    }
    set dhcpPoolEnd(value) {
        this._dhcpPoolEnd = value;
    }
    resetDhcpPoolEnd() {
        this._dhcpPoolEnd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dhcpPoolEndInput() {
        return this._dhcpPoolEnd;
    }
    // dhcp_pool_start - computed: false, optional: true, required: false
    _dhcpPoolStart;
    get dhcpPoolStart() {
        return this.getStringAttribute('dhcp_pool_start');
    }
    set dhcpPoolStart(value) {
        this._dhcpPoolStart = value;
    }
    resetDhcpPoolStart() {
        this._dhcpPoolStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dhcpPoolStartInput() {
        return this._dhcpPoolStart;
    }
    // dns_server - computed: false, optional: true, required: false
    _dnsServer;
    get dnsServer() {
        return this.getStringAttribute('dns_server');
    }
    set dnsServer(value) {
        this._dnsServer = value;
    }
    resetDnsServer() {
        this._dnsServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsServerInput() {
        return this._dnsServer;
    }
    // dns_servers - computed: false, optional: true, required: false
    _dnsServers;
    get dnsServers() {
        return this.getListAttribute('dns_servers');
    }
    set dnsServers(value) {
        this._dnsServers = value;
    }
    resetDnsServers() {
        this._dnsServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsServersInput() {
        return this._dnsServers;
    }
    // reservations - computed: false, optional: true, required: false
    _reservations;
    get reservations() {
        return this.getStringMapAttribute('reservations');
    }
    set reservations(value) {
        this._reservations = value;
    }
    resetReservations() {
        this._reservations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reservationsInput() {
        return this._reservations;
    }
}
export function magicTransitSiteLanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        dhcp_relay: magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct.dhcpRelay),
        dhcp_server: magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct.dhcpServer),
        secondary_address: cdktf.stringToTerraform(struct.secondaryAddress),
        virtual_address: cdktf.stringToTerraform(struct.virtualAddress),
    };
}
export function magicTransitSiteLanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dhcp_relay: {
            value: magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct.dhcpRelay),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicTransitSiteLanStaticAddressingDhcpRelay",
        },
        dhcp_server: {
            value: magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct.dhcpServer),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicTransitSiteLanStaticAddressingDhcpServer",
        },
        secondary_address: {
            value: cdktf.stringToHclTerraform(struct.secondaryAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_address: {
            value: cdktf.stringToHclTerraform(struct.virtualAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLanStaticAddressingOutputReference extends cdktf.ComplexObject {
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
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._dhcpRelay?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dhcpRelay = this._dhcpRelay?.internalValue;
        }
        if (this._dhcpServer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
        }
        if (this._secondaryAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryAddress = this._secondaryAddress;
        }
        if (this._virtualAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualAddress = this._virtualAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._dhcpRelay.internalValue = undefined;
            this._dhcpServer.internalValue = undefined;
            this._secondaryAddress = undefined;
            this._virtualAddress = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._dhcpRelay.internalValue = value.dhcpRelay;
            this._dhcpServer.internalValue = value.dhcpServer;
            this._secondaryAddress = value.secondaryAddress;
            this._virtualAddress = value.virtualAddress;
        }
    }
    // address - computed: false, optional: false, required: true
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // dhcp_relay - computed: false, optional: true, required: false
    _dhcpRelay = new MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(this, "dhcp_relay");
    get dhcpRelay() {
        return this._dhcpRelay;
    }
    putDhcpRelay(value) {
        this._dhcpRelay.internalValue = value;
    }
    resetDhcpRelay() {
        this._dhcpRelay.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dhcpRelayInput() {
        return this._dhcpRelay.internalValue;
    }
    // dhcp_server - computed: false, optional: true, required: false
    _dhcpServer = new MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(this, "dhcp_server");
    get dhcpServer() {
        return this._dhcpServer;
    }
    putDhcpServer(value) {
        this._dhcpServer.internalValue = value;
    }
    resetDhcpServer() {
        this._dhcpServer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dhcpServerInput() {
        return this._dhcpServer.internalValue;
    }
    // secondary_address - computed: false, optional: true, required: false
    _secondaryAddress;
    get secondaryAddress() {
        return this.getStringAttribute('secondary_address');
    }
    set secondaryAddress(value) {
        this._secondaryAddress = value;
    }
    resetSecondaryAddress() {
        this._secondaryAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secondaryAddressInput() {
        return this._secondaryAddress;
    }
    // virtual_address - computed: false, optional: true, required: false
    _virtualAddress;
    get virtualAddress() {
        return this.getStringAttribute('virtual_address');
    }
    set virtualAddress(value) {
        this._virtualAddress = value;
    }
    resetVirtualAddress() {
        this._virtualAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualAddressInput() {
        return this._virtualAddress;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
export class MagicTransitSiteLan extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_site_lan";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteLan to import
    * @param importFromId The id of the existing MagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteLan to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_lan", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteLanConfig
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
        this._bondId = config.bondId;
        this._haLink = config.haLink;
        this._isBreakout = config.isBreakout;
        this._isPrioritized = config.isPrioritized;
        this._name = config.name;
        this._nat.internalValue = config.nat;
        this._physport = config.physport;
        this._routedSubnets.internalValue = config.routedSubnets;
        this._siteId = config.siteId;
        this._staticAddressing.internalValue = config.staticAddressing;
        this._vlanTag = config.vlanTag;
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
    // bond_id - computed: false, optional: true, required: false
    _bondId;
    get bondId() {
        return this.getNumberAttribute('bond_id');
    }
    set bondId(value) {
        this._bondId = value;
    }
    resetBondId() {
        this._bondId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bondIdInput() {
        return this._bondId;
    }
    // ha_link - computed: false, optional: true, required: false
    _haLink;
    get haLink() {
        return this.getBooleanAttribute('ha_link');
    }
    set haLink(value) {
        this._haLink = value;
    }
    resetHaLink() {
        this._haLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get haLinkInput() {
        return this._haLink;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_breakout - computed: false, optional: true, required: false
    _isBreakout;
    get isBreakout() {
        return this.getBooleanAttribute('is_breakout');
    }
    set isBreakout(value) {
        this._isBreakout = value;
    }
    resetIsBreakout() {
        this._isBreakout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isBreakoutInput() {
        return this._isBreakout;
    }
    // is_prioritized - computed: false, optional: true, required: false
    _isPrioritized;
    get isPrioritized() {
        return this.getBooleanAttribute('is_prioritized');
    }
    set isPrioritized(value) {
        this._isPrioritized = value;
    }
    resetIsPrioritized() {
        this._isPrioritized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isPrioritizedInput() {
        return this._isPrioritized;
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
    // nat - computed: false, optional: true, required: false
    _nat = new MagicTransitSiteLanNatOutputReference(this, "nat");
    get nat() {
        return this._nat;
    }
    putNat(value) {
        this._nat.internalValue = value;
    }
    resetNat() {
        this._nat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get natInput() {
        return this._nat.internalValue;
    }
    // physport - computed: false, optional: true, required: false
    _physport;
    get physport() {
        return this.getNumberAttribute('physport');
    }
    set physport(value) {
        this._physport = value;
    }
    resetPhysport() {
        this._physport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get physportInput() {
        return this._physport;
    }
    // routed_subnets - computed: false, optional: true, required: false
    _routedSubnets = new MagicTransitSiteLanRoutedSubnetsList(this, "routed_subnets", false);
    get routedSubnets() {
        return this._routedSubnets;
    }
    putRoutedSubnets(value) {
        this._routedSubnets.internalValue = value;
    }
    resetRoutedSubnets() {
        this._routedSubnets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routedSubnetsInput() {
        return this._routedSubnets.internalValue;
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
    // static_addressing - computed: false, optional: true, required: false
    _staticAddressing = new MagicTransitSiteLanStaticAddressingOutputReference(this, "static_addressing");
    get staticAddressing() {
        return this._staticAddressing;
    }
    putStaticAddressing(value) {
        this._staticAddressing.internalValue = value;
    }
    resetStaticAddressing() {
        this._staticAddressing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticAddressingInput() {
        return this._staticAddressing.internalValue;
    }
    // vlan_tag - computed: false, optional: true, required: false
    _vlanTag;
    get vlanTag() {
        return this.getNumberAttribute('vlan_tag');
    }
    set vlanTag(value) {
        this._vlanTag = value;
    }
    resetVlanTag() {
        this._vlanTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vlanTagInput() {
        return this._vlanTag;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bond_id: cdktf.numberToTerraform(this._bondId),
            ha_link: cdktf.booleanToTerraform(this._haLink),
            is_breakout: cdktf.booleanToTerraform(this._isBreakout),
            is_prioritized: cdktf.booleanToTerraform(this._isPrioritized),
            name: cdktf.stringToTerraform(this._name),
            nat: magicTransitSiteLanNatToTerraform(this._nat.internalValue),
            physport: cdktf.numberToTerraform(this._physport),
            routed_subnets: cdktf.listMapper(magicTransitSiteLanRoutedSubnetsToTerraform, false)(this._routedSubnets.internalValue),
            site_id: cdktf.stringToTerraform(this._siteId),
            static_addressing: magicTransitSiteLanStaticAddressingToTerraform(this._staticAddressing.internalValue),
            vlan_tag: cdktf.numberToTerraform(this._vlanTag),
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
            bond_id: {
                value: cdktf.numberToHclTerraform(this._bondId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ha_link: {
                value: cdktf.booleanToHclTerraform(this._haLink),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_breakout: {
                value: cdktf.booleanToHclTerraform(this._isBreakout),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_prioritized: {
                value: cdktf.booleanToHclTerraform(this._isPrioritized),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nat: {
                value: magicTransitSiteLanNatToHclTerraform(this._nat.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteLanNat",
            },
            physport: {
                value: cdktf.numberToHclTerraform(this._physport),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            routed_subnets: {
                value: cdktf.listMapperHcl(magicTransitSiteLanRoutedSubnetsToHclTerraform, false)(this._routedSubnets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "MagicTransitSiteLanRoutedSubnetsList",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_addressing: {
                value: magicTransitSiteLanStaticAddressingToHclTerraform(this._staticAddressing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteLanStaticAddressing",
            },
            vlan_tag: {
                value: cdktf.numberToHclTerraform(this._vlanTag),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
