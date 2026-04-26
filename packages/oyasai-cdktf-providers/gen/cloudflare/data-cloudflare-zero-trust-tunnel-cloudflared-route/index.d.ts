import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelCloudflaredRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#account_id DataCloudflareZeroTrustTunnelCloudflaredRoute#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#filter DataCloudflareZeroTrustTunnelCloudflaredRoute#filter}
    */
    readonly filter?: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter;
    /**
    * UUID of the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#route_id DataCloudflareZeroTrustTunnelCloudflaredRoute#route_id}
    */
    readonly routeId?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredRouteFilter {
    /**
    * Optional remark describing the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#comment DataCloudflareZeroTrustTunnelCloudflaredRoute#comment}
    */
    readonly comment?: string;
    /**
    * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoute#existed_at}
    */
    readonly existedAt?: string;
    /**
    * If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoute#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * If set, only list routes that are contained within this IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoute#network_subset}
    */
    readonly networkSubset?: string;
    /**
    * If set, only list routes that contain this IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoute#network_superset}
    */
    readonly networkSuperset?: string;
    /**
    * The types of tunnels to filter by, separated by commas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoute#tun_types}
    */
    readonly tunTypes?: string[];
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoute#tunnel_id}
    */
    readonly tunnelId?: string;
    /**
    * UUID of the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoute#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}
*/
export declare class DataCloudflareZeroTrustTunnelCloudflaredRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_route";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoute to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredRouteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustTunnelCloudflaredRouteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comment(): any;
    get createdAt(): any;
    get deletedAt(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get network(): any;
    private _routeId?;
    get routeId(): string;
    set routeId(value: string);
    resetRouteId(): void;
    get routeIdInput(): string;
    get tunnelId(): any;
    get virtualNetworkId(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
