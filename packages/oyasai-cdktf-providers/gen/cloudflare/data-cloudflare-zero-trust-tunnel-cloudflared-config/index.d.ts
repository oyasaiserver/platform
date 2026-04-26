import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config#account_id DataCloudflareZeroTrustTunnelCloudflaredConfigA#account_id}
    */
    readonly accountId?: string;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredConfigA#tunnel_id}
    */
    readonly tunnelId: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | undefined);
    get audTag(): any;
    get required(): any;
    get teamName(): any;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | undefined);
    private _access;
    get access(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference;
    get caPool(): any;
    get connectTimeout(): any;
    get disableChunkedEncoding(): any;
    get http2Origin(): any;
    get httpHostHeader(): any;
    get keepAliveConnections(): any;
    get keepAliveTimeout(): any;
    get matchSnItoHost(): any;
    get noHappyEyeballs(): any;
    get noTlsVerify(): any;
    get originServerName(): any;
    get proxyType(): any;
    get tcpKeepAlive(): any;
    get tlsTimeout(): any;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress | undefined);
    get hostname(): any;
    private _originRequest;
    get originRequest(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference;
    get path(): any;
    get service(): any;
}
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | undefined);
    get audTag(): any;
    get required(): any;
    get teamName(): any;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest | undefined);
    private _access;
    get access(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference;
    get caPool(): any;
    get connectTimeout(): any;
    get disableChunkedEncoding(): any;
    get http2Origin(): any;
    get httpHostHeader(): any;
    get keepAliveConnections(): any;
    get keepAliveTimeout(): any;
    get matchSnItoHost(): any;
    get noHappyEyeballs(): any;
    get noTlsVerify(): any;
    get originServerName(): any;
    get proxyType(): any;
    get tcpKeepAlive(): any;
    get tlsTimeout(): any;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfig {
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfig): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfig): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfig | undefined);
    private _ingress;
    get ingress(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList;
    private _originRequest;
    get originRequest(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
export declare class DataCloudflareZeroTrustTunnelCloudflaredConfigA extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference;
    get createdAt(): any;
    get source(): any;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    get tunnelIdInput(): string;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
