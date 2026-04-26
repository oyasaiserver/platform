import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteLansConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans#account_id DataCloudflareMagicTransitSiteLans#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans#max_items DataCloudflareMagicTransitSiteLans#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans#site_id DataCloudflareMagicTransitSiteLans#site_id}
    */
    readonly siteId: string;
}
export interface DataCloudflareMagicTransitSiteLansResultNat {
}
export declare function dataCloudflareMagicTransitSiteLansResultNatToTerraform(struct?: DataCloudflareMagicTransitSiteLansResultNat): any;
export declare function dataCloudflareMagicTransitSiteLansResultNatToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResultNat): any;
export declare class DataCloudflareMagicTransitSiteLansResultNatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLansResultNat | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResultNat | undefined);
    get staticPrefix(): any;
}
export interface DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat {
}
export declare function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToTerraform(struct?: DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat): any;
export declare function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat): any;
export declare class DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat | undefined);
    get staticPrefix(): any;
}
export interface DataCloudflareMagicTransitSiteLansResultRoutedSubnets {
}
export declare function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToTerraform(struct?: DataCloudflareMagicTransitSiteLansResultRoutedSubnets): any;
export declare function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResultRoutedSubnets): any;
export declare class DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitSiteLansResultRoutedSubnets | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResultRoutedSubnets | undefined);
    private _nat;
    get nat(): DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference;
    get nextHop(): any;
    get prefix(): any;
}
export declare class DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference;
}
export interface DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay {
}
export declare function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToTerraform(struct?: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay): any;
export declare function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay): any;
export declare class DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay | undefined);
    get serverAddresses(): any;
}
export interface DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer {
}
export declare function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToTerraform(struct?: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer): any;
export declare function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer): any;
export declare class DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer | undefined);
    get dhcpPoolEnd(): any;
    get dhcpPoolStart(): any;
    get dnsServer(): any;
    get dnsServers(): any;
    private _reservations;
    get reservations(): any;
}
export interface DataCloudflareMagicTransitSiteLansResultStaticAddressing {
}
export declare function dataCloudflareMagicTransitSiteLansResultStaticAddressingToTerraform(struct?: DataCloudflareMagicTransitSiteLansResultStaticAddressing): any;
export declare function dataCloudflareMagicTransitSiteLansResultStaticAddressingToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResultStaticAddressing): any;
export declare class DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLansResultStaticAddressing | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResultStaticAddressing | undefined);
    get address(): any;
    private _dhcpRelay;
    get dhcpRelay(): DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference;
    private _dhcpServer;
    get dhcpServer(): DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference;
    get secondaryAddress(): any;
    get virtualAddress(): any;
}
export interface DataCloudflareMagicTransitSiteLansResult {
}
export declare function dataCloudflareMagicTransitSiteLansResultToTerraform(struct?: DataCloudflareMagicTransitSiteLansResult): any;
export declare function dataCloudflareMagicTransitSiteLansResultToHclTerraform(struct?: DataCloudflareMagicTransitSiteLansResult): any;
export declare class DataCloudflareMagicTransitSiteLansResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitSiteLansResult | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLansResult | undefined);
    get bondId(): any;
    get haLink(): any;
    get id(): any;
    get isBreakout(): any;
    get isPrioritized(): any;
    get name(): any;
    private _nat;
    get nat(): DataCloudflareMagicTransitSiteLansResultNatOutputReference;
    get physport(): any;
    private _routedSubnets;
    get routedSubnets(): DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList;
    get siteId(): any;
    private _staticAddressing;
    get staticAddressing(): DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference;
    get vlanTag(): any;
}
export declare class DataCloudflareMagicTransitSiteLansResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicTransitSiteLansResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans cloudflare_magic_transit_site_lans}
*/
export declare class DataCloudflareMagicTransitSiteLans extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_lans";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLans resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteLans to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteLans that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteLans to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans cloudflare_magic_transit_site_lans} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteLansConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteLansConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareMagicTransitSiteLansResultList;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
