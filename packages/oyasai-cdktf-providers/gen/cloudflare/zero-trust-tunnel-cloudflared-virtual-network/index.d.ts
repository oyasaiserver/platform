import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustTunnelCloudflaredVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#account_id ZeroTrustTunnelCloudflaredVirtualNetwork#account_id}
    */
    readonly accountId?: string;
    /**
    * Optional remark describing the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#comment ZeroTrustTunnelCloudflaredVirtualNetwork#comment}
    */
    readonly comment?: string;
    /**
    * If `true`, this virtual network is the default for the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#is_default ZeroTrustTunnelCloudflaredVirtualNetwork#is_default}
    */
    readonly isDefault?: boolean | cdktf.IResolvable;
    /**
    * If `true`, this virtual network is the default for the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#is_default_network ZeroTrustTunnelCloudflaredVirtualNetwork#is_default_network}
    */
    readonly isDefaultNetwork?: boolean | cdktf.IResolvable;
    /**
    * A user-friendly name for the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#name ZeroTrustTunnelCloudflaredVirtualNetwork#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}
*/
export declare class ZeroTrustTunnelCloudflaredVirtualNetwork extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_network";
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflaredVirtualNetwork to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflaredVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflaredVirtualNetwork to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredVirtualNetworkConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustTunnelCloudflaredVirtualNetworkConfig);
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
    get createdAt(): any;
    get deletedAt(): any;
    get id(): any;
    private _isDefault?;
    get isDefault(): boolean | cdktf.IResolvable;
    set isDefault(value: boolean | cdktf.IResolvable);
    resetIsDefault(): void;
    get isDefaultInput(): any;
    private _isDefaultNetwork?;
    get isDefaultNetwork(): boolean | cdktf.IResolvable;
    set isDefaultNetwork(value: boolean | cdktf.IResolvable);
    resetIsDefaultNetwork(): void;
    get isDefaultNetworkInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
