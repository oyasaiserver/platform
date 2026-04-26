import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingAddressesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses#account_id DataCloudflareEmailRoutingAddresses#account_id}
    */
    readonly accountId?: string;
    /**
    * Sorts results in an ascending or descending order.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses#direction DataCloudflareEmailRoutingAddresses#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses#max_items DataCloudflareEmailRoutingAddresses#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter by verified destination addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses#verified DataCloudflareEmailRoutingAddresses#verified}
    */
    readonly verified?: boolean | cdktf.IResolvable;
}
export interface DataCloudflareEmailRoutingAddressesResult {
}
export declare function dataCloudflareEmailRoutingAddressesResultToTerraform(struct?: DataCloudflareEmailRoutingAddressesResult): any;
export declare function dataCloudflareEmailRoutingAddressesResultToHclTerraform(struct?: DataCloudflareEmailRoutingAddressesResult): any;
export declare class DataCloudflareEmailRoutingAddressesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingAddressesResult | undefined;
    set internalValue(value: DataCloudflareEmailRoutingAddressesResult | undefined);
    get created(): any;
    get email(): any;
    get id(): any;
    get modified(): any;
    get tag(): any;
    get verified(): any;
}
export declare class DataCloudflareEmailRoutingAddressesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingAddressesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses cloudflare_email_routing_addresses}
*/
export declare class DataCloudflareEmailRoutingAddresses extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_addresses";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingAddresses resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingAddresses to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingAddresses to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_addresses cloudflare_email_routing_addresses} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingAddressesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingAddressesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareEmailRoutingAddressesResultList;
    private _verified?;
    get verified(): boolean | cdktf.IResolvable;
    set verified(value: boolean | cdktf.IResolvable);
    resetVerified(): void;
    get verifiedInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
