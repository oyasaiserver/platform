import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsZoneTransfersAclsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acls#account_id DataCloudflareDnsZoneTransfersAcls#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acls#max_items DataCloudflareDnsZoneTransfersAcls#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareDnsZoneTransfersAclsResult {
}
export declare function dataCloudflareDnsZoneTransfersAclsResultToTerraform(struct?: DataCloudflareDnsZoneTransfersAclsResult): any;
export declare function dataCloudflareDnsZoneTransfersAclsResultToHclTerraform(struct?: DataCloudflareDnsZoneTransfersAclsResult): any;
export declare class DataCloudflareDnsZoneTransfersAclsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareDnsZoneTransfersAclsResult | undefined;
    set internalValue(value: DataCloudflareDnsZoneTransfersAclsResult | undefined);
    get id(): any;
    get ipRange(): any;
    get name(): any;
}
export declare class DataCloudflareDnsZoneTransfersAclsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareDnsZoneTransfersAclsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acls cloudflare_dns_zone_transfers_acls}
*/
export declare class DataCloudflareDnsZoneTransfersAcls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_acls";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersAcls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersAcls to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersAcls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersAcls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acls cloudflare_dns_zone_transfers_acls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersAclsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsZoneTransfersAclsConfig);
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
    get result(): DataCloudflareDnsZoneTransfersAclsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
