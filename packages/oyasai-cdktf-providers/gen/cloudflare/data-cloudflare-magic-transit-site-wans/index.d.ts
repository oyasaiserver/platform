import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteWansConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wans#account_id DataCloudflareMagicTransitSiteWans#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wans#max_items DataCloudflareMagicTransitSiteWans#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wans#site_id DataCloudflareMagicTransitSiteWans#site_id}
    */
    readonly siteId: string;
}
export interface DataCloudflareMagicTransitSiteWansResultStaticAddressing {
}
export declare function dataCloudflareMagicTransitSiteWansResultStaticAddressingToTerraform(struct?: DataCloudflareMagicTransitSiteWansResultStaticAddressing): any;
export declare function dataCloudflareMagicTransitSiteWansResultStaticAddressingToHclTerraform(struct?: DataCloudflareMagicTransitSiteWansResultStaticAddressing): any;
export declare class DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteWansResultStaticAddressing | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteWansResultStaticAddressing | undefined);
    get address(): any;
    get gatewayAddress(): any;
    get secondaryAddress(): any;
}
export interface DataCloudflareMagicTransitSiteWansResult {
}
export declare function dataCloudflareMagicTransitSiteWansResultToTerraform(struct?: DataCloudflareMagicTransitSiteWansResult): any;
export declare function dataCloudflareMagicTransitSiteWansResultToHclTerraform(struct?: DataCloudflareMagicTransitSiteWansResult): any;
export declare class DataCloudflareMagicTransitSiteWansResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitSiteWansResult | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteWansResult | undefined);
    get healthCheckRate(): any;
    get id(): any;
    get name(): any;
    get physport(): any;
    get priority(): any;
    get siteId(): any;
    private _staticAddressing;
    get staticAddressing(): DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference;
    get vlanTag(): any;
}
export declare class DataCloudflareMagicTransitSiteWansResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicTransitSiteWansResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wans cloudflare_magic_transit_site_wans}
*/
export declare class DataCloudflareMagicTransitSiteWans extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_wans";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteWans resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteWans to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteWans that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wans#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteWans to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wans cloudflare_magic_transit_site_wans} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteWansConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteWansConfig);
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
    get result(): DataCloudflareMagicTransitSiteWansResultList;
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
