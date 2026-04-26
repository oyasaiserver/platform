import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustNetworkHostnameRoutesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#account_id DataCloudflareZeroTrustNetworkHostnameRoutes#account_id}
    */
    readonly accountId?: string;
    /**
    * If set, only list hostname routes with the given comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#comment DataCloudflareZeroTrustNetworkHostnameRoutes#comment}
    */
    readonly comment?: string;
    /**
    * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#existed_at DataCloudflareZeroTrustNetworkHostnameRoutes#existed_at}
    */
    readonly existedAt?: string;
    /**
    * If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#hostname DataCloudflareZeroTrustNetworkHostnameRoutes#hostname}
    */
    readonly hostname?: string;
    /**
    * The hostname route ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#id DataCloudflareZeroTrustNetworkHostnameRoutes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#is_deleted DataCloudflareZeroTrustNetworkHostnameRoutes#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#max_items DataCloudflareZeroTrustNetworkHostnameRoutes#max_items}
    */
    readonly maxItems?: number;
    /**
    * If set, only list hostname routes that point to a specific tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoutes#tunnel_id}
    */
    readonly tunnelId?: string;
}
export interface DataCloudflareZeroTrustNetworkHostnameRoutesResult {
}
export declare function dataCloudflareZeroTrustNetworkHostnameRoutesResultToTerraform(struct?: DataCloudflareZeroTrustNetworkHostnameRoutesResult): any;
export declare function dataCloudflareZeroTrustNetworkHostnameRoutesResultToHclTerraform(struct?: DataCloudflareZeroTrustNetworkHostnameRoutesResult): any;
export declare class DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustNetworkHostnameRoutesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustNetworkHostnameRoutesResult | undefined);
    get comment(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get hostname(): any;
    get id(): any;
    get tunnelId(): any;
    get tunnelName(): any;
}
export declare class DataCloudflareZeroTrustNetworkHostnameRoutesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes cloudflare_zero_trust_network_hostname_routes}
*/
export declare class DataCloudflareZeroTrustNetworkHostnameRoutes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_network_hostname_routes";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoutes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoutes to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustNetworkHostnameRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoutes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes cloudflare_zero_trust_network_hostname_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustNetworkHostnameRoutesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustNetworkHostnameRoutesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _existedAt?;
    get existedAt(): string;
    set existedAt(value: string);
    resetExistedAt(): void;
    get existedAtInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _isDeleted?;
    get isDeleted(): boolean | cdktf.IResolvable;
    set isDeleted(value: boolean | cdktf.IResolvable);
    resetIsDeleted(): void;
    get isDeletedInput(): any;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareZeroTrustNetworkHostnameRoutesResultList;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    resetTunnelId(): void;
    get tunnelIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
