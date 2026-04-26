import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceManagedNetworksListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list#account_id DataCloudflareZeroTrustDeviceManagedNetworksList#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list#max_items DataCloudflareZeroTrustDeviceManagedNetworksList#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig {
}
export declare function dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToTerraform(struct?: DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig): any;
export declare function dataCloudflareZeroTrustDeviceManagedNetworksListResultConfigToHclTerraform(struct?: DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig): any;
export declare class DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig | undefined);
    get sha256(): any;
    get tlsSockaddr(): any;
}
export interface DataCloudflareZeroTrustDeviceManagedNetworksListResult {
}
export declare function dataCloudflareZeroTrustDeviceManagedNetworksListResultToTerraform(struct?: DataCloudflareZeroTrustDeviceManagedNetworksListResult): any;
export declare function dataCloudflareZeroTrustDeviceManagedNetworksListResultToHclTerraform(struct?: DataCloudflareZeroTrustDeviceManagedNetworksListResult): any;
export declare class DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceManagedNetworksListResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceManagedNetworksListResult | undefined);
    private _config;
    get config(): DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference;
    get id(): any;
    get name(): any;
    get networkId(): any;
    get type(): any;
}
export declare class DataCloudflareZeroTrustDeviceManagedNetworksListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list cloudflare_zero_trust_device_managed_networks_list}
*/
export declare class DataCloudflareZeroTrustDeviceManagedNetworksList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_managed_networks_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceManagedNetworksList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceManagedNetworksList to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceManagedNetworksList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceManagedNetworksList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks_list cloudflare_zero_trust_device_managed_networks_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceManagedNetworksListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceManagedNetworksListConfig);
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
    get result(): DataCloudflareZeroTrustDeviceManagedNetworksListResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
