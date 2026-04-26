import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsZoneTransfersPeersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers#account_id DataCloudflareDnsZoneTransfersPeers#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers#max_items DataCloudflareDnsZoneTransfersPeers#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareDnsZoneTransfersPeersResult {
}
export declare function dataCloudflareDnsZoneTransfersPeersResultToTerraform(struct?: DataCloudflareDnsZoneTransfersPeersResult): any;
export declare function dataCloudflareDnsZoneTransfersPeersResultToHclTerraform(struct?: DataCloudflareDnsZoneTransfersPeersResult): any;
export declare class DataCloudflareDnsZoneTransfersPeersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareDnsZoneTransfersPeersResult | undefined;
    set internalValue(value: DataCloudflareDnsZoneTransfersPeersResult | undefined);
    get id(): any;
    get ip(): any;
    get ixfrEnable(): any;
    get name(): any;
    get port(): any;
    get tsigId(): any;
}
export declare class DataCloudflareDnsZoneTransfersPeersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareDnsZoneTransfersPeersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers cloudflare_dns_zone_transfers_peers}
*/
export declare class DataCloudflareDnsZoneTransfersPeers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_peers";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersPeers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersPeers to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersPeers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersPeers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers cloudflare_dns_zone_transfers_peers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersPeersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsZoneTransfersPeersConfig);
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
    get result(): DataCloudflareDnsZoneTransfersPeersResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
