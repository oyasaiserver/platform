import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteAclsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls#account_id DataCloudflareMagicTransitSiteAcls#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls#max_items DataCloudflareMagicTransitSiteAcls#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls#site_id DataCloudflareMagicTransitSiteAcls#site_id}
    */
    readonly siteId: string;
}
export interface DataCloudflareMagicTransitSiteAclsResultLan1 {
}
export declare function dataCloudflareMagicTransitSiteAclsResultLan1ToTerraform(struct?: DataCloudflareMagicTransitSiteAclsResultLan1): any;
export declare function dataCloudflareMagicTransitSiteAclsResultLan1ToHclTerraform(struct?: DataCloudflareMagicTransitSiteAclsResultLan1): any;
export declare class DataCloudflareMagicTransitSiteAclsResultLan1OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteAclsResultLan1 | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteAclsResultLan1 | undefined);
    get lanId(): any;
    get lanName(): any;
    get portRanges(): any;
    get ports(): any;
    get subnets(): any;
}
export interface DataCloudflareMagicTransitSiteAclsResultLan2 {
}
export declare function dataCloudflareMagicTransitSiteAclsResultLan2ToTerraform(struct?: DataCloudflareMagicTransitSiteAclsResultLan2): any;
export declare function dataCloudflareMagicTransitSiteAclsResultLan2ToHclTerraform(struct?: DataCloudflareMagicTransitSiteAclsResultLan2): any;
export declare class DataCloudflareMagicTransitSiteAclsResultLan2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteAclsResultLan2 | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteAclsResultLan2 | undefined);
    get lanId(): any;
    get lanName(): any;
    get portRanges(): any;
    get ports(): any;
    get subnets(): any;
}
export interface DataCloudflareMagicTransitSiteAclsResult {
}
export declare function dataCloudflareMagicTransitSiteAclsResultToTerraform(struct?: DataCloudflareMagicTransitSiteAclsResult): any;
export declare function dataCloudflareMagicTransitSiteAclsResultToHclTerraform(struct?: DataCloudflareMagicTransitSiteAclsResult): any;
export declare class DataCloudflareMagicTransitSiteAclsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitSiteAclsResult | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteAclsResult | undefined);
    get description(): any;
    get forwardLocally(): any;
    get id(): any;
    private _lan1;
    get lan1(): DataCloudflareMagicTransitSiteAclsResultLan1OutputReference;
    private _lan2;
    get lan2(): DataCloudflareMagicTransitSiteAclsResultLan2OutputReference;
    get name(): any;
    get protocols(): any;
    get unidirectional(): any;
}
export declare class DataCloudflareMagicTransitSiteAclsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicTransitSiteAclsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls cloudflare_magic_transit_site_acls}
*/
export declare class DataCloudflareMagicTransitSiteAcls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_acls";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcls to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteAcls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls cloudflare_magic_transit_site_acls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteAclsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteAclsConfig);
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
    get result(): DataCloudflareMagicTransitSiteAclsResultList;
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
