import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicTransitSiteLanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#bond_id MagicTransitSiteLan#bond_id}
    */
    readonly bondId?: number;
    /**
    * mark true to use this LAN for HA probing. only works for site with HA turned on. only one LAN can be set as the ha_link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}
    */
    readonly haLink?: boolean | cdktf.IResolvable;
    /**
    * mark true to use this LAN for source-based breakout traffic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#is_breakout MagicTransitSiteLan#is_breakout}
    */
    readonly isBreakout?: boolean | cdktf.IResolvable;
    /**
    * mark true to use this LAN for source-based prioritized traffic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#is_prioritized MagicTransitSiteLan#is_prioritized}
    */
    readonly isPrioritized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}
    */
    readonly nat?: MagicTransitSiteLanNat;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}
    */
    readonly physport?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}
    */
    readonly routedSubnets?: MagicTransitSiteLanRoutedSubnets[] | cdktf.IResolvable;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}
    */
    readonly siteId: string;
    /**
    * If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). However, if in high availability mode, static_address is required along with secondary and virtual address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}
    */
    readonly staticAddressing?: MagicTransitSiteLanStaticAddressing;
    /**
    * VLAN ID. Use zero for untagged.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}
    */
    readonly vlanTag?: number;
}
export interface MagicTransitSiteLanNat {
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}
    */
    readonly staticPrefix?: string;
}
export declare function magicTransitSiteLanNatToTerraform(struct?: MagicTransitSiteLanNat | cdktf.IResolvable): any;
export declare function magicTransitSiteLanNatToHclTerraform(struct?: MagicTransitSiteLanNat | cdktf.IResolvable): any;
export declare class MagicTransitSiteLanNatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteLanNat | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLanNat | cdktf.IResolvable | undefined);
    private _staticPrefix?;
    get staticPrefix(): string;
    set staticPrefix(value: string);
    resetStaticPrefix(): void;
    get staticPrefixInput(): string;
}
export interface MagicTransitSiteLanRoutedSubnetsNat {
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}
    */
    readonly staticPrefix?: string;
}
export declare function magicTransitSiteLanRoutedSubnetsNatToTerraform(struct?: MagicTransitSiteLanRoutedSubnetsNat | cdktf.IResolvable): any;
export declare function magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct?: MagicTransitSiteLanRoutedSubnetsNat | cdktf.IResolvable): any;
export declare class MagicTransitSiteLanRoutedSubnetsNatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteLanRoutedSubnetsNat | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLanRoutedSubnetsNat | cdktf.IResolvable | undefined);
    private _staticPrefix?;
    get staticPrefix(): string;
    set staticPrefix(value: string);
    resetStaticPrefix(): void;
    get staticPrefixInput(): string;
}
export interface MagicTransitSiteLanRoutedSubnets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}
    */
    readonly nat?: MagicTransitSiteLanRoutedSubnetsNat;
    /**
    * A valid IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#next_hop MagicTransitSiteLan#next_hop}
    */
    readonly nextHop: string;
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#prefix MagicTransitSiteLan#prefix}
    */
    readonly prefix: string;
}
export declare function magicTransitSiteLanRoutedSubnetsToTerraform(struct?: MagicTransitSiteLanRoutedSubnets | cdktf.IResolvable): any;
export declare function magicTransitSiteLanRoutedSubnetsToHclTerraform(struct?: MagicTransitSiteLanRoutedSubnets | cdktf.IResolvable): any;
export declare class MagicTransitSiteLanRoutedSubnetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MagicTransitSiteLanRoutedSubnets | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLanRoutedSubnets | cdktf.IResolvable | undefined);
    private _nat;
    get nat(): MagicTransitSiteLanRoutedSubnetsNatOutputReference;
    putNat(value: MagicTransitSiteLanRoutedSubnetsNat): void;
    resetNat(): void;
    get natInput(): any;
    private _nextHop?;
    get nextHop(): string;
    set nextHop(value: string);
    get nextHopInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
}
export declare class MagicTransitSiteLanRoutedSubnetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MagicTransitSiteLanRoutedSubnets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MagicTransitSiteLanRoutedSubnetsOutputReference;
}
export interface MagicTransitSiteLanStaticAddressingDhcpRelay {
    /**
    * List of DHCP server IPs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#server_addresses MagicTransitSiteLan#server_addresses}
    */
    readonly serverAddresses?: string[];
}
export declare function magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpRelay | cdktf.IResolvable): any;
export declare function magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpRelay | cdktf.IResolvable): any;
export declare class MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteLanStaticAddressingDhcpRelay | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLanStaticAddressingDhcpRelay | cdktf.IResolvable | undefined);
    private _serverAddresses?;
    get serverAddresses(): string[];
    set serverAddresses(value: string[]);
    resetServerAddresses(): void;
    get serverAddressesInput(): string[];
}
export interface MagicTransitSiteLanStaticAddressingDhcpServer {
    /**
    * A valid IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#dhcp_pool_end MagicTransitSiteLan#dhcp_pool_end}
    */
    readonly dhcpPoolEnd?: string;
    /**
    * A valid IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#dhcp_pool_start MagicTransitSiteLan#dhcp_pool_start}
    */
    readonly dhcpPoolStart?: string;
    /**
    * A valid IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#dns_server MagicTransitSiteLan#dns_server}
    */
    readonly dnsServer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}
    */
    readonly dnsServers?: string[];
    /**
    * Mapping of MAC addresses to IP addresses
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#reservations MagicTransitSiteLan#reservations}
    */
    readonly reservations?: {
        [key: string]: string;
    };
}
export declare function magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpServer | cdktf.IResolvable): any;
export declare function magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct?: MagicTransitSiteLanStaticAddressingDhcpServer | cdktf.IResolvable): any;
export declare class MagicTransitSiteLanStaticAddressingDhcpServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteLanStaticAddressingDhcpServer | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLanStaticAddressingDhcpServer | cdktf.IResolvable | undefined);
    private _dhcpPoolEnd?;
    get dhcpPoolEnd(): string;
    set dhcpPoolEnd(value: string);
    resetDhcpPoolEnd(): void;
    get dhcpPoolEndInput(): string;
    private _dhcpPoolStart?;
    get dhcpPoolStart(): string;
    set dhcpPoolStart(value: string);
    resetDhcpPoolStart(): void;
    get dhcpPoolStartInput(): string;
    private _dnsServer?;
    get dnsServer(): string;
    set dnsServer(value: string);
    resetDnsServer(): void;
    get dnsServerInput(): string;
    private _dnsServers?;
    get dnsServers(): string[];
    set dnsServers(value: string[]);
    resetDnsServers(): void;
    get dnsServersInput(): string[];
    private _reservations?;
    get reservations(): {
        [key: string]: string;
    };
    set reservations(value: {
        [key: string]: string;
    });
    resetReservations(): void;
    get reservationsInput(): {
        [key: string]: string;
    };
}
export interface MagicTransitSiteLanStaticAddressing {
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#address MagicTransitSiteLan#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}
    */
    readonly dhcpRelay?: MagicTransitSiteLanStaticAddressingDhcpRelay;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}
    */
    readonly dhcpServer?: MagicTransitSiteLanStaticAddressingDhcpServer;
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#secondary_address MagicTransitSiteLan#secondary_address}
    */
    readonly secondaryAddress?: string;
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#virtual_address MagicTransitSiteLan#virtual_address}
    */
    readonly virtualAddress?: string;
}
export declare function magicTransitSiteLanStaticAddressingToTerraform(struct?: MagicTransitSiteLanStaticAddressing | cdktf.IResolvable): any;
export declare function magicTransitSiteLanStaticAddressingToHclTerraform(struct?: MagicTransitSiteLanStaticAddressing | cdktf.IResolvable): any;
export declare class MagicTransitSiteLanStaticAddressingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteLanStaticAddressing | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLanStaticAddressing | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string;
    private _dhcpRelay;
    get dhcpRelay(): MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
    putDhcpRelay(value: MagicTransitSiteLanStaticAddressingDhcpRelay): void;
    resetDhcpRelay(): void;
    get dhcpRelayInput(): any;
    private _dhcpServer;
    get dhcpServer(): MagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
    putDhcpServer(value: MagicTransitSiteLanStaticAddressingDhcpServer): void;
    resetDhcpServer(): void;
    get dhcpServerInput(): any;
    private _secondaryAddress?;
    get secondaryAddress(): string;
    set secondaryAddress(value: string);
    resetSecondaryAddress(): void;
    get secondaryAddressInput(): string;
    private _virtualAddress?;
    get virtualAddress(): string;
    set virtualAddress(value: string);
    resetVirtualAddress(): void;
    get virtualAddressInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
export declare class MagicTransitSiteLan extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_lan";
    /**
    * Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteLan to import
    * @param importFromId The id of the existing MagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteLan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteLanConfig
    */
    constructor(scope: Construct, id: string, config: MagicTransitSiteLanConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bondId?;
    get bondId(): number;
    set bondId(value: number);
    resetBondId(): void;
    get bondIdInput(): number;
    private _haLink?;
    get haLink(): boolean | cdktf.IResolvable;
    set haLink(value: boolean | cdktf.IResolvable);
    resetHaLink(): void;
    get haLinkInput(): any;
    get id(): any;
    private _isBreakout?;
    get isBreakout(): boolean | cdktf.IResolvable;
    set isBreakout(value: boolean | cdktf.IResolvable);
    resetIsBreakout(): void;
    get isBreakoutInput(): any;
    private _isPrioritized?;
    get isPrioritized(): boolean | cdktf.IResolvable;
    set isPrioritized(value: boolean | cdktf.IResolvable);
    resetIsPrioritized(): void;
    get isPrioritizedInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _nat;
    get nat(): MagicTransitSiteLanNatOutputReference;
    putNat(value: MagicTransitSiteLanNat): void;
    resetNat(): void;
    get natInput(): any;
    private _physport?;
    get physport(): number;
    set physport(value: number);
    resetPhysport(): void;
    get physportInput(): number;
    private _routedSubnets;
    get routedSubnets(): MagicTransitSiteLanRoutedSubnetsList;
    putRoutedSubnets(value: MagicTransitSiteLanRoutedSubnets[] | cdktf.IResolvable): void;
    resetRoutedSubnets(): void;
    get routedSubnetsInput(): any;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    private _staticAddressing;
    get staticAddressing(): MagicTransitSiteLanStaticAddressingOutputReference;
    putStaticAddressing(value: MagicTransitSiteLanStaticAddressing): void;
    resetStaticAddressing(): void;
    get staticAddressingInput(): any;
    private _vlanTag?;
    get vlanTag(): number;
    set vlanTag(value: number);
    resetVlanTag(): void;
    get vlanTagInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
