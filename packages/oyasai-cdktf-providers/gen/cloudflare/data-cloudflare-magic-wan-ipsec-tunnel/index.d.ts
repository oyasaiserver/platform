import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicWanIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel#account_id DataCloudflareMagicWanIpsecTunnel#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel#ipsec_tunnel_id DataCloudflareMagicWanIpsecTunnel#ipsec_tunnel_id}
    */
    readonly ipsecTunnelId: string;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgp {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgp): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgp): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgp | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgp | undefined);
    get customerAsn(): any;
    get extraPrefixes(): any;
    get md5Key(): any;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatus {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatus): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatus): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatus | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatus | undefined);
    get bgpState(): any;
    get cfSpeakerIp(): any;
    get cfSpeakerPort(): any;
    get customerSpeakerIp(): any;
    get customerSpeakerPort(): any;
    get state(): any;
    get tcpEstablished(): any;
    get updatedAt(): any;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentities {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentities): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentities): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentities | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentities | undefined);
    get fqdnId(): any;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget | undefined);
    get effective(): any;
    get saved(): any;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck | undefined);
    get direction(): any;
    get enabled(): any;
    get rate(): any;
    private _target;
    get target(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference;
    get type(): any;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata | undefined);
    get lastGeneratedOn(): any;
}
export interface DataCloudflareMagicWanIpsecTunnelIpsecTunnel {
}
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnel): any;
export declare function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToHclTerraform(struct?: DataCloudflareMagicWanIpsecTunnelIpsecTunnel): any;
export declare class DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanIpsecTunnelIpsecTunnel | undefined;
    set internalValue(value: DataCloudflareMagicWanIpsecTunnelIpsecTunnel | undefined);
    get allowNullCipher(): any;
    get automaticReturnRouting(): any;
    private _bgp;
    get bgp(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference;
    private _bgpStatus;
    get bgpStatus(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference;
    get cloudflareEndpoint(): any;
    get createdOn(): any;
    private _customRemoteIdentities;
    get customRemoteIdentities(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference;
    get customerEndpoint(): any;
    get description(): any;
    private _healthCheck;
    get healthCheck(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference;
    get id(): any;
    get interfaceAddress(): any;
    get interfaceAddress6(): any;
    get modifiedOn(): any;
    get name(): any;
    private _pskMetadata;
    get pskMetadata(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference;
    get replayProtection(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
export declare class DataCloudflareMagicWanIpsecTunnel extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanIpsecTunnel to import
    * @param importFromId The id of the existing DataCloudflareMagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanIpsecTunnel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanIpsecTunnelConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicWanIpsecTunnelConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _ipsecTunnel;
    get ipsecTunnel(): DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference;
    private _ipsecTunnelId?;
    get ipsecTunnelId(): string;
    set ipsecTunnelId(value: string);
    get ipsecTunnelIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
