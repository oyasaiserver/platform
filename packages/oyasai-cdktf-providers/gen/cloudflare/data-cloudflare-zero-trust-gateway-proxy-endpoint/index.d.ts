import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayProxyEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#account_id DataCloudflareZeroTrustGatewayProxyEndpoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#proxy_endpoint_id DataCloudflareZeroTrustGatewayProxyEndpoint#proxy_endpoint_id}
    */
    readonly proxyEndpointId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint}
*/
export declare class DataCloudflareZeroTrustGatewayProxyEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_proxy_endpoint";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayProxyEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayProxyEndpoint to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayProxyEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayProxyEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayProxyEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayProxyEndpointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get id(): any;
    get ips(): any;
    get kind(): any;
    get name(): any;
    private _proxyEndpointId?;
    get proxyEndpointId(): string;
    set proxyEndpointId(value: string);
    get proxyEndpointIdInput(): string;
    get subdomain(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
