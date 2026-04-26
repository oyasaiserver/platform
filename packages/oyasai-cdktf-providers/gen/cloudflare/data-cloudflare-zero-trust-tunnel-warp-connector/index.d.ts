import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelWarpConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#account_id DataCloudflareZeroTrustTunnelWarpConnector#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#filter DataCloudflareZeroTrustTunnelWarpConnector#filter}
    */
    readonly filter?: DataCloudflareZeroTrustTunnelWarpConnectorFilter;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#tunnel_id DataCloudflareZeroTrustTunnelWarpConnector#tunnel_id}
    */
    readonly tunnelId?: string;
}
export interface DataCloudflareZeroTrustTunnelWarpConnectorConnections {
}
export declare function dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorConnections): any;
export declare function dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToHclTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorConnections): any;
export declare class DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustTunnelWarpConnectorConnections | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelWarpConnectorConnections | undefined);
    get clientId(): any;
    get clientVersion(): any;
    get coloName(): any;
    get id(): any;
    get isPendingReconnect(): any;
    get openedAt(): any;
    get originIp(): any;
    get uuid(): any;
}
export declare class DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference;
}
export interface DataCloudflareZeroTrustTunnelWarpConnectorFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnector#exclude_prefix}
    */
    readonly excludePrefix?: string;
    /**
    * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#existed_at DataCloudflareZeroTrustTunnelWarpConnector#existed_at}
    */
    readonly existedAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#include_prefix DataCloudflareZeroTrustTunnelWarpConnector#include_prefix}
    */
    readonly includePrefix?: string;
    /**
    * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#is_deleted DataCloudflareZeroTrustTunnelWarpConnector#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * A user-friendly name for the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#name DataCloudflareZeroTrustTunnelWarpConnector#name}
    */
    readonly name?: string;
    /**
    * The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
    * Available values: "inactive", "degraded", "healthy", "down".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#status DataCloudflareZeroTrustTunnelWarpConnector#status}
    */
    readonly status?: string;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#uuid DataCloudflareZeroTrustTunnelWarpConnector#uuid}
    */
    readonly uuid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_active_at DataCloudflareZeroTrustTunnelWarpConnector#was_active_at}
    */
    readonly wasActiveAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnector#was_inactive_at}
    */
    readonly wasInactiveAt?: string;
}
export declare function dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable | undefined);
    private _excludePrefix?;
    get excludePrefix(): string;
    set excludePrefix(value: string);
    resetExcludePrefix(): void;
    get excludePrefixInput(): string;
    private _existedAt?;
    get existedAt(): string;
    set existedAt(value: string);
    resetExistedAt(): void;
    get existedAtInput(): string;
    private _includePrefix?;
    get includePrefix(): string;
    set includePrefix(value: string);
    resetIncludePrefix(): void;
    get includePrefixInput(): string;
    private _isDeleted?;
    get isDeleted(): boolean | cdktf.IResolvable;
    set isDeleted(value: boolean | cdktf.IResolvable);
    resetIsDeleted(): void;
    get isDeletedInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _uuid?;
    get uuid(): string;
    set uuid(value: string);
    resetUuid(): void;
    get uuidInput(): string;
    private _wasActiveAt?;
    get wasActiveAt(): string;
    set wasActiveAt(value: string);
    resetWasActiveAt(): void;
    get wasActiveAtInput(): string;
    private _wasInactiveAt?;
    get wasInactiveAt(): string;
    set wasInactiveAt(value: string);
    resetWasInactiveAt(): void;
    get wasInactiveAtInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}
*/
export declare class DataCloudflareZeroTrustTunnelWarpConnector extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_warp_connector";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnector to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelWarpConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelWarpConnectorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustTunnelWarpConnectorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get accountTag(): any;
    private _connections;
    get connections(): DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList;
    get connsActiveAt(): any;
    get connsInactiveAt(): any;
    get createdAt(): any;
    get deletedAt(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustTunnelWarpConnectorFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get metadata(): any;
    get name(): any;
    get status(): any;
    get tunType(): any;
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
