import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteLanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan#account_id DataCloudflareMagicTransitSiteLan#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan#lan_id DataCloudflareMagicTransitSiteLan#lan_id}
    */
    readonly lanId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan#site_id DataCloudflareMagicTransitSiteLan#site_id}
    */
    readonly siteId: string;
}
export interface DataCloudflareMagicTransitSiteLanNat {
}
export declare function dataCloudflareMagicTransitSiteLanNatToTerraform(struct?: DataCloudflareMagicTransitSiteLanNat): any;
export declare function dataCloudflareMagicTransitSiteLanNatToHclTerraform(struct?: DataCloudflareMagicTransitSiteLanNat): any;
export declare class DataCloudflareMagicTransitSiteLanNatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLanNat | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLanNat | undefined);
    get staticPrefix(): any;
}
export interface DataCloudflareMagicTransitSiteLanRoutedSubnetsNat {
}
export declare function dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToTerraform(struct?: DataCloudflareMagicTransitSiteLanRoutedSubnetsNat): any;
export declare function dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct?: DataCloudflareMagicTransitSiteLanRoutedSubnetsNat): any;
export declare class DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLanRoutedSubnetsNat | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLanRoutedSubnetsNat | undefined);
    get staticPrefix(): any;
}
export interface DataCloudflareMagicTransitSiteLanRoutedSubnets {
}
export declare function dataCloudflareMagicTransitSiteLanRoutedSubnetsToTerraform(struct?: DataCloudflareMagicTransitSiteLanRoutedSubnets): any;
export declare function dataCloudflareMagicTransitSiteLanRoutedSubnetsToHclTerraform(struct?: DataCloudflareMagicTransitSiteLanRoutedSubnets): any;
export declare class DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitSiteLanRoutedSubnets | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLanRoutedSubnets | undefined);
    private _nat;
    get nat(): DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference;
    get nextHop(): any;
    get prefix(): any;
}
export declare class DataCloudflareMagicTransitSiteLanRoutedSubnetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference;
}
export interface DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay {
}
export declare function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct?: DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay): any;
export declare function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct?: DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay): any;
export declare class DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay | undefined);
    get serverAddresses(): any;
}
export interface DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer {
}
export declare function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct?: DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer): any;
export declare function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct?: DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer): any;
export declare class DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer | undefined);
    get dhcpPoolEnd(): any;
    get dhcpPoolStart(): any;
    get dnsServer(): any;
    get dnsServers(): any;
    private _reservations;
    get reservations(): any;
}
export interface DataCloudflareMagicTransitSiteLanStaticAddressing {
}
export declare function dataCloudflareMagicTransitSiteLanStaticAddressingToTerraform(struct?: DataCloudflareMagicTransitSiteLanStaticAddressing): any;
export declare function dataCloudflareMagicTransitSiteLanStaticAddressingToHclTerraform(struct?: DataCloudflareMagicTransitSiteLanStaticAddressing): any;
export declare class DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLanStaticAddressing | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLanStaticAddressing | undefined);
    get address(): any;
    private _dhcpRelay;
    get dhcpRelay(): DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
    private _dhcpServer;
    get dhcpServer(): DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
    get secondaryAddress(): any;
    get virtualAddress(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
export declare class DataCloudflareMagicTransitSiteLan extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_lan";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteLan to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteLan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteLanConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteLanConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get bondId(): any;
    get haLink(): any;
    get id(): any;
    get isBreakout(): any;
    get isPrioritized(): any;
    private _lanId?;
    get lanId(): string;
    set lanId(value: string);
    get lanIdInput(): string;
    get name(): any;
    private _nat;
    get nat(): DataCloudflareMagicTransitSiteLanNatOutputReference;
    get physport(): any;
    private _routedSubnets;
    get routedSubnets(): DataCloudflareMagicTransitSiteLanRoutedSubnetsList;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    private _staticAddressing;
    get staticAddressing(): DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference;
    get vlanTag(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
