import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelCloudflaredTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_token#account_id DataCloudflareZeroTrustTunnelCloudflaredToken#account_id}
    */
    readonly accountId?: string;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_token#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredToken#tunnel_id}
    */
    readonly tunnelId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_token cloudflare_zero_trust_tunnel_cloudflared_token}
*/
export declare class DataCloudflareZeroTrustTunnelCloudflaredToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_token";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredToken to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_token cloudflare_zero_trust_tunnel_cloudflared_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredTokenConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredTokenConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get token(): any;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    get tunnelIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
