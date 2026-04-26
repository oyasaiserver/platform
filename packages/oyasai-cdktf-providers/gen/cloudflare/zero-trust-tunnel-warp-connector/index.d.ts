import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustTunnelWarpConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector#account_id ZeroTrustTunnelWarpConnector#account_id}
    */
    readonly accountId?: string;
    /**
    * Indicates that the tunnel will be created to be highly available. If omitted, defaults to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector#ha ZeroTrustTunnelWarpConnector#ha}
    */
    readonly ha?: boolean | cdktf.IResolvable;
    /**
    * A user-friendly name for a tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector#name ZeroTrustTunnelWarpConnector#name}
    */
    readonly name: string;
    /**
    * Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector#tunnel_secret ZeroTrustTunnelWarpConnector#tunnel_secret}
    */
    readonly tunnelSecret?: string;
}
export interface ZeroTrustTunnelWarpConnectorConnections {
}
export declare function zeroTrustTunnelWarpConnectorConnectionsToTerraform(struct?: ZeroTrustTunnelWarpConnectorConnections): any;
export declare function zeroTrustTunnelWarpConnectorConnectionsToHclTerraform(struct?: ZeroTrustTunnelWarpConnectorConnections): any;
export declare class ZeroTrustTunnelWarpConnectorConnectionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustTunnelWarpConnectorConnections | undefined;
    set internalValue(value: ZeroTrustTunnelWarpConnectorConnections | undefined);
    get clientId(): any;
    get clientVersion(): any;
    get coloName(): any;
    get id(): any;
    get isPendingReconnect(): any;
    get openedAt(): any;
    get originIp(): any;
    get uuid(): any;
}
export declare class ZeroTrustTunnelWarpConnectorConnectionsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustTunnelWarpConnectorConnectionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}
*/
export declare class ZeroTrustTunnelWarpConnector extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_warp_connector";
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelWarpConnector to import
    * @param importFromId The id of the existing ZeroTrustTunnelWarpConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelWarpConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelWarpConnectorConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustTunnelWarpConnectorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get accountTag(): any;
    private _connections;
    get connections(): ZeroTrustTunnelWarpConnectorConnectionsList;
    get connsActiveAt(): any;
    get connsInactiveAt(): any;
    get createdAt(): any;
    get deletedAt(): any;
    private _ha?;
    get ha(): boolean | cdktf.IResolvable;
    set ha(value: boolean | cdktf.IResolvable);
    resetHa(): void;
    get haInput(): any;
    get id(): any;
    get metadata(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get status(): any;
    get tunType(): any;
    private _tunnelSecret?;
    get tunnelSecret(): string;
    set tunnelSecret(value: string);
    resetTunnelSecret(): void;
    get tunnelSecretInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
