import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#account_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#account_id}
    */
    readonly accountId?: string;
    /**
    * Optional remark describing the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#comment DataCloudflareZeroTrustTunnelCloudflaredRoutes#comment}
    */
    readonly comment?: string;
    /**
    * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoutes#existed_at}
    */
    readonly existedAt?: string;
    /**
    * If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoutes#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#max_items DataCloudflareZeroTrustTunnelCloudflaredRoutes#max_items}
    */
    readonly maxItems?: number;
    /**
    * If set, only list routes that are contained within this IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_subset}
    */
    readonly networkSubset?: string;
    /**
    * If set, only list routes that contain this IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_superset}
    */
    readonly networkSuperset?: string;
    /**
    * UUID of the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#route_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#route_id}
    */
    readonly routeId?: string;
    /**
    * The types of tunnels to filter by, separated by commas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoutes#tun_types}
    */
    readonly tunTypes?: string[];
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#tunnel_id}
    */
    readonly tunnelId?: string;
    /**
    * UUID of the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredRoutesResult {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredRoutesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult | undefined);
    get comment(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get id(): any;
    get network(): any;
    get tunType(): any;
    get tunnelId(): any;
    get tunnelName(): any;
    get virtualNetworkId(): any;
    get virtualNetworkName(): any;
}
export declare class DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes}
*/
export declare class DataCloudflareZeroTrustTunnelCloudflaredRoutes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_routes";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig);
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
    private _networkSubset?;
    get networkSubset(): string;
    set networkSubset(value: string);
    resetNetworkSubset(): void;
    get networkSubsetInput(): string;
    private _networkSuperset?;
    get networkSuperset(): string;
    set networkSuperset(value: string);
    resetNetworkSuperset(): void;
    get networkSupersetInput(): string;
    private _result;
    get result(): DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList;
    private _routeId?;
    get routeId(): string;
    set routeId(value: string);
    resetRouteId(): void;
    get routeIdInput(): string;
    private _tunTypes?;
    get tunTypes(): string[];
    set tunTypes(value: string[]);
    resetTunTypes(): void;
    get tunTypesInput(): string[];
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    resetTunnelId(): void;
    get tunnelIdInput(): string;
    private _virtualNetworkId?;
    get virtualNetworkId(): string;
    set virtualNetworkId(value: string);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
