import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsFirewallsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls#account_id DataCloudflareDnsFirewalls#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls#max_items DataCloudflareDnsFirewalls#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareDnsFirewallsResultAttackMitigation {
}
export declare function dataCloudflareDnsFirewallsResultAttackMitigationToTerraform(struct?: DataCloudflareDnsFirewallsResultAttackMitigation): any;
export declare function dataCloudflareDnsFirewallsResultAttackMitigationToHclTerraform(struct?: DataCloudflareDnsFirewallsResultAttackMitigation): any;
export declare class DataCloudflareDnsFirewallsResultAttackMitigationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsFirewallsResultAttackMitigation | undefined;
    set internalValue(value: DataCloudflareDnsFirewallsResultAttackMitigation | undefined);
    get enabled(): any;
    get onlyWhenUpstreamUnhealthy(): any;
}
export interface DataCloudflareDnsFirewallsResult {
}
export declare function dataCloudflareDnsFirewallsResultToTerraform(struct?: DataCloudflareDnsFirewallsResult): any;
export declare function dataCloudflareDnsFirewallsResultToHclTerraform(struct?: DataCloudflareDnsFirewallsResult): any;
export declare class DataCloudflareDnsFirewallsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareDnsFirewallsResult | undefined;
    set internalValue(value: DataCloudflareDnsFirewallsResult | undefined);
    private _attackMitigation;
    get attackMitigation(): DataCloudflareDnsFirewallsResultAttackMitigationOutputReference;
    get deprecateAnyRequests(): any;
    get dnsFirewallIps(): any;
    get ecsFallback(): any;
    get id(): any;
    get maximumCacheTtl(): any;
    get minimumCacheTtl(): any;
    get modifiedOn(): any;
    get name(): any;
    get negativeCacheTtl(): any;
    get ratelimit(): any;
    get retries(): any;
    get upstreamIps(): any;
}
export declare class DataCloudflareDnsFirewallsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareDnsFirewallsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls cloudflare_dns_firewalls}
*/
export declare class DataCloudflareDnsFirewalls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_firewalls";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsFirewalls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsFirewalls to import
    * @param importFromId The id of the existing DataCloudflareDnsFirewalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsFirewalls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls cloudflare_dns_firewalls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsFirewallsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsFirewallsConfig);
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
    get result(): DataCloudflareDnsFirewallsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
