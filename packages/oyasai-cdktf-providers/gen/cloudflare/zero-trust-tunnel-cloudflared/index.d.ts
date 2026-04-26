import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustTunnelCloudflaredConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared#account_id ZeroTrustTunnelCloudflared#account_id}
    */
    readonly accountId?: string;
    /**
    * Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard.
    * Available values: "local", "cloudflare".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared#config_src ZeroTrustTunnelCloudflared#config_src}
    */
    readonly configSrc?: string;
    /**
    * A user-friendly name for a tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared#name ZeroTrustTunnelCloudflared#name}
    */
    readonly name: string;
    /**
    * Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared#tunnel_secret ZeroTrustTunnelCloudflared#tunnel_secret}
    */
    readonly tunnelSecret?: string;
}
export interface ZeroTrustTunnelCloudflaredConnections {
}
export declare function zeroTrustTunnelCloudflaredConnectionsToTerraform(struct?: ZeroTrustTunnelCloudflaredConnections): any;
export declare function zeroTrustTunnelCloudflaredConnectionsToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConnections): any;
export declare class ZeroTrustTunnelCloudflaredConnectionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustTunnelCloudflaredConnections | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConnections | undefined);
    get clientId(): any;
    get clientVersion(): any;
    get coloName(): any;
    get id(): any;
    get isPendingReconnect(): any;
    get openedAt(): any;
    get originIp(): any;
    get uuid(): any;
}
export declare class ZeroTrustTunnelCloudflaredConnectionsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustTunnelCloudflaredConnectionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}
*/
export declare class ZeroTrustTunnelCloudflared extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared";
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflared to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflared that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflared to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustTunnelCloudflaredConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get accountTag(): any;
    private _configSrc?;
    get configSrc(): string;
    set configSrc(value: string);
    resetConfigSrc(): void;
    get configSrcInput(): string;
    private _connections;
    get connections(): ZeroTrustTunnelCloudflaredConnectionsList;
    get connsActiveAt(): any;
    get connsInactiveAt(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get id(): any;
    get metadata(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get remoteConfig(): any;
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
