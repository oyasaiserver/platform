import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustNetworkHostnameRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route#account_id ZeroTrustNetworkHostnameRoute#account_id}
    */
    readonly accountId?: string;
    /**
    * An optional description of the hostname route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route#comment ZeroTrustNetworkHostnameRoute#comment}
    */
    readonly comment?: string;
    /**
    * The hostname of the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route#hostname ZeroTrustNetworkHostnameRoute#hostname}
    */
    readonly hostname?: string;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route#tunnel_id ZeroTrustNetworkHostnameRoute#tunnel_id}
    */
    readonly tunnelId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}
*/
export declare class ZeroTrustNetworkHostnameRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_network_hostname_route";
    /**
    * Generates CDKTF code for importing a ZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustNetworkHostnameRoute to import
    * @param importFromId The id of the existing ZeroTrustNetworkHostnameRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustNetworkHostnameRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustNetworkHostnameRouteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ZeroTrustNetworkHostnameRouteConfig);
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
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    get id(): any;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    resetTunnelId(): void;
    get tunnelIdInput(): string;
    get tunnelName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
