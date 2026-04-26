import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSitesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites#account_id DataCloudflareMagicTransitSites#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites#connectorid DataCloudflareMagicTransitSites#connectorid}
    */
    readonly connectorid?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites#max_items DataCloudflareMagicTransitSites#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareMagicTransitSitesResultLocation {
}
export declare function dataCloudflareMagicTransitSitesResultLocationToTerraform(struct?: DataCloudflareMagicTransitSitesResultLocation): any;
export declare function dataCloudflareMagicTransitSitesResultLocationToHclTerraform(struct?: DataCloudflareMagicTransitSitesResultLocation): any;
export declare class DataCloudflareMagicTransitSitesResultLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSitesResultLocation | undefined;
    set internalValue(value: DataCloudflareMagicTransitSitesResultLocation | undefined);
    get lat(): any;
    get lon(): any;
}
export interface DataCloudflareMagicTransitSitesResult {
}
export declare function dataCloudflareMagicTransitSitesResultToTerraform(struct?: DataCloudflareMagicTransitSitesResult): any;
export declare function dataCloudflareMagicTransitSitesResultToHclTerraform(struct?: DataCloudflareMagicTransitSitesResult): any;
export declare class DataCloudflareMagicTransitSitesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitSitesResult | undefined;
    set internalValue(value: DataCloudflareMagicTransitSitesResult | undefined);
    get connectorId(): any;
    get description(): any;
    get haMode(): any;
    get id(): any;
    private _location;
    get location(): DataCloudflareMagicTransitSitesResultLocationOutputReference;
    get name(): any;
    get secondaryConnectorId(): any;
}
export declare class DataCloudflareMagicTransitSitesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicTransitSitesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites cloudflare_magic_transit_sites}
*/
export declare class DataCloudflareMagicTransitSites extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_sites";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSites resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSites to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSites that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSites to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites cloudflare_magic_transit_sites} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSitesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareMagicTransitSitesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _connectorid?;
    get connectorid(): string;
    set connectorid(value: string);
    resetConnectorid(): void;
    get connectoridInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareMagicTransitSitesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
