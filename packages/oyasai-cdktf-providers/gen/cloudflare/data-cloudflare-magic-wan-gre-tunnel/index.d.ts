import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicWanGreTunnelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel#account_id DataCloudflareMagicWanGreTunnel#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel#gre_tunnel_id DataCloudflareMagicWanGreTunnel#gre_tunnel_id}
    */
    readonly greTunnelId: string;
}
export interface DataCloudflareMagicWanGreTunnelGreTunnelBgp {
}
export declare function dataCloudflareMagicWanGreTunnelGreTunnelBgpToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelBgp): any;
export declare function dataCloudflareMagicWanGreTunnelGreTunnelBgpToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelBgp): any;
export declare class DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnelBgp | undefined;
    set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnelBgp | undefined);
    get customerAsn(): any;
    get extraPrefixes(): any;
    get md5Key(): any;
}
export interface DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus {
}
export declare function dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus): any;
export declare function dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus): any;
export declare class DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus | undefined;
    set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus | undefined);
    get bgpState(): any;
    get cfSpeakerIp(): any;
    get cfSpeakerPort(): any;
    get customerSpeakerIp(): any;
    get customerSpeakerPort(): any;
    get state(): any;
    get tcpEstablished(): any;
    get updatedAt(): any;
}
export interface DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget {
}
export declare function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget): any;
export declare function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget): any;
export declare class DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget | undefined;
    set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget | undefined);
    get effective(): any;
    get saved(): any;
}
export interface DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck {
}
export declare function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck): any;
export declare function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck): any;
export declare class DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck | undefined;
    set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck | undefined);
    get direction(): any;
    get enabled(): any;
    get rate(): any;
    private _target;
    get target(): DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference;
    get type(): any;
}
export interface DataCloudflareMagicWanGreTunnelGreTunnel {
}
export declare function dataCloudflareMagicWanGreTunnelGreTunnelToTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnel): any;
export declare function dataCloudflareMagicWanGreTunnelGreTunnelToHclTerraform(struct?: DataCloudflareMagicWanGreTunnelGreTunnel): any;
export declare class DataCloudflareMagicWanGreTunnelGreTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanGreTunnelGreTunnel | undefined;
    set internalValue(value: DataCloudflareMagicWanGreTunnelGreTunnel | undefined);
    get automaticReturnRouting(): any;
    private _bgp;
    get bgp(): DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference;
    private _bgpStatus;
    get bgpStatus(): DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference;
    get cloudflareGreEndpoint(): any;
    get createdOn(): any;
    get customerGreEndpoint(): any;
    get description(): any;
    private _healthCheck;
    get healthCheck(): DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference;
    get id(): any;
    get interfaceAddress(): any;
    get interfaceAddress6(): any;
    get modifiedOn(): any;
    get mtu(): any;
    get name(): any;
    get ttl(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
export declare class DataCloudflareMagicWanGreTunnel extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_wan_gre_tunnel";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanGreTunnel to import
    * @param importFromId The id of the existing DataCloudflareMagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanGreTunnel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanGreTunnelConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicWanGreTunnelConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _greTunnel;
    get greTunnel(): DataCloudflareMagicWanGreTunnelGreTunnelOutputReference;
    private _greTunnelId?;
    get greTunnelId(): string;
    set greTunnelId(value: string);
    get greTunnelIdInput(): string;
    get id(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
