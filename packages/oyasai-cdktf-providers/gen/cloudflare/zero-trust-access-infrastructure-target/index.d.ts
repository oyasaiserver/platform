import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessInfrastructureTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}
    */
    readonly accountId?: string;
    /**
    * A non-unique field that refers to a target. Case insensitive, maximum
    * length of 255 characters, supports the use of special characters dash
    * and period, does not support spaces, and must start and end with an
    * alphanumeric character.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}
    */
    readonly hostname: string;
    /**
    * The IPv4/IPv6 address that identifies where to reach a target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}
    */
    readonly ip: ZeroTrustAccessInfrastructureTargetIp;
}
export interface ZeroTrustAccessInfrastructureTargetIpIpv4 {
    /**
    * IP address of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}
    */
    readonly ipAddr?: string;
    /**
    * (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export declare function zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable): any;
export declare function zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable): any;
export declare class ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessInfrastructureTargetIpIpv4 | cdktf.IResolvable | undefined);
    private _ipAddr?;
    get ipAddr(): string;
    set ipAddr(value: string);
    resetIpAddr(): void;
    get ipAddrInput(): string;
    private _virtualNetworkId?;
    get virtualNetworkId(): string;
    set virtualNetworkId(value: string);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): string;
}
export interface ZeroTrustAccessInfrastructureTargetIpIpv6 {
    /**
    * IP address of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}
    */
    readonly ipAddr?: string;
    /**
    * (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export declare function zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable): any;
export declare function zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct?: ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable): any;
export declare class ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessInfrastructureTargetIpIpv6 | cdktf.IResolvable | undefined);
    private _ipAddr?;
    get ipAddr(): string;
    set ipAddr(value: string);
    resetIpAddr(): void;
    get ipAddrInput(): string;
    private _virtualNetworkId?;
    get virtualNetworkId(): string;
    set virtualNetworkId(value: string);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): string;
}
export interface ZeroTrustAccessInfrastructureTargetIp {
    /**
    * The target's IPv4 address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#ipv4 ZeroTrustAccessInfrastructureTarget#ipv4}
    */
    readonly ipv4?: ZeroTrustAccessInfrastructureTargetIpIpv4;
    /**
    * The target's IPv6 address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#ipv6 ZeroTrustAccessInfrastructureTarget#ipv6}
    */
    readonly ipv6?: ZeroTrustAccessInfrastructureTargetIpIpv6;
}
export declare function zeroTrustAccessInfrastructureTargetIpToTerraform(struct?: ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessInfrastructureTargetIpToHclTerraform(struct?: ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessInfrastructureTargetIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessInfrastructureTargetIp | cdktf.IResolvable | undefined);
    private _ipv4;
    get ipv4(): ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;
    putIpv4(value: ZeroTrustAccessInfrastructureTargetIpIpv4): void;
    resetIpv4(): void;
    get ipv4Input(): any;
    private _ipv6;
    get ipv6(): ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;
    putIpv6(value: ZeroTrustAccessInfrastructureTargetIpIpv6): void;
    resetIpv6(): void;
    get ipv6Input(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
export declare class ZeroTrustAccessInfrastructureTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import
    * @param importFromId The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessInfrastructureTargetConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessInfrastructureTargetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get id(): any;
    private _ip;
    get ip(): ZeroTrustAccessInfrastructureTargetIpOutputReference;
    putIp(value: ZeroTrustAccessInfrastructureTargetIp): void;
    get ipInput(): any;
    get modifiedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
