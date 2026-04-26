import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelCloudflaredsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#account_id DataCloudflareZeroTrustTunnelCloudflareds#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#exclude_prefix DataCloudflareZeroTrustTunnelCloudflareds#exclude_prefix}
    */
    readonly excludePrefix?: string;
    /**
    * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#existed_at DataCloudflareZeroTrustTunnelCloudflareds#existed_at}
    */
    readonly existedAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#include_prefix DataCloudflareZeroTrustTunnelCloudflareds#include_prefix}
    */
    readonly includePrefix?: string;
    /**
    * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#is_deleted DataCloudflareZeroTrustTunnelCloudflareds#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#max_items DataCloudflareZeroTrustTunnelCloudflareds#max_items}
    */
    readonly maxItems?: number;
    /**
    * A user-friendly name for a tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#name DataCloudflareZeroTrustTunnelCloudflareds#name}
    */
    readonly name?: string;
    /**
    * The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
    * Available values: "inactive", "degraded", "healthy", "down".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#status DataCloudflareZeroTrustTunnelCloudflareds#status}
    */
    readonly status?: string;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#uuid DataCloudflareZeroTrustTunnelCloudflareds#uuid}
    */
    readonly uuid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_active_at DataCloudflareZeroTrustTunnelCloudflareds#was_active_at}
    */
    readonly wasActiveAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_inactive_at DataCloudflareZeroTrustTunnelCloudflareds#was_inactive_at}
    */
    readonly wasInactiveAt?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredsResultConnections {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredsResultConnections | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections | undefined);
    get clientId(): any;
    get clientVersion(): any;
    get coloName(): any;
    get id(): any;
    get isPendingReconnect(): any;
    get openedAt(): any;
    get originIp(): any;
    get uuid(): any;
}
export declare class DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredsResult {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredsResultToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResult): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredsResultToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResult): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredsResult | undefined);
    get accountTag(): any;
    get configSrc(): any;
    private _connections;
    get connections(): DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList;
    get connsActiveAt(): any;
    get connsInactiveAt(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get id(): any;
    get metadata(): any;
    get name(): any;
    get remoteConfig(): any;
    get status(): any;
    get tunType(): any;
}
export declare class DataCloudflareZeroTrustTunnelCloudflaredsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds}
*/
export declare class DataCloudflareZeroTrustTunnelCloudflareds extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflareds";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflareds resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflareds to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflareds that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflareds to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustTunnelCloudflaredsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareZeroTrustTunnelCloudflaredsResultList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
