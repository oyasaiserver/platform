import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDnsLocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}
    */
    readonly accountId?: string;
    /**
    * Indicate whether this location is the default location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#client_default ZeroTrustDnsLocation#client_default}
    */
    readonly clientDefault?: boolean | cdktf.IResolvable;
    /**
    * Specify the identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set to null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if this field is absent or set to null, the pre-assigned pair remains unchanged.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#dns_destination_ips_id ZeroTrustDnsLocation#dns_destination_ips_id}
    */
    readonly dnsDestinationIpsId?: string;
    /**
    * Indicate whether the location must resolve EDNS queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#ecs_support ZeroTrustDnsLocation#ecs_support}
    */
    readonly ecsSupport?: boolean | cdktf.IResolvable;
    /**
    * Configure the destination endpoints for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#endpoints ZeroTrustDnsLocation#endpoints}
    */
    readonly endpoints?: ZeroTrustDnsLocationEndpoints;
    /**
    * Specify the location name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#name ZeroTrustDnsLocation#name}
    */
    readonly name: string;
    /**
    * Specify the list of network ranges from which requests at this location originate. The list takes effect only if it is non-empty and the IPv4 endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
    */
    readonly networks?: ZeroTrustDnsLocationNetworks[] | cdktf.IResolvable;
}
export interface ZeroTrustDnsLocationEndpointsDohNetworks {
    /**
    * Specify the IP address or IP CIDR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
    */
    readonly network: string;
}
export declare function zeroTrustDnsLocationEndpointsDohNetworksToTerraform(struct?: ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsDohNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsDohNetworks | cdktf.IResolvable | undefined);
    private _network?;
    get network(): string;
    set network(value: string);
    get networkInput(): string;
}
export declare class ZeroTrustDnsLocationEndpointsDohNetworksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDnsLocationEndpointsDohNetworks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDnsLocationEndpointsDohNetworksOutputReference;
}
export interface ZeroTrustDnsLocationEndpointsDoh {
    /**
    * Indicate whether the DOH endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specify the list of allowed source IP network ranges for this endpoint. When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
    */
    readonly networks?: ZeroTrustDnsLocationEndpointsDohNetworks[] | cdktf.IResolvable;
    /**
    * Specify whether the DOH endpoint requires user identity authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#require_token ZeroTrustDnsLocation#require_token}
    */
    readonly requireToken?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustDnsLocationEndpointsDohToTerraform(struct?: ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsDohToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsDohOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsDoh | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _networks;
    get networks(): ZeroTrustDnsLocationEndpointsDohNetworksList;
    putNetworks(value: ZeroTrustDnsLocationEndpointsDohNetworks[] | cdktf.IResolvable): void;
    resetNetworks(): void;
    get networksInput(): any;
    private _requireToken?;
    get requireToken(): boolean | cdktf.IResolvable;
    set requireToken(value: boolean | cdktf.IResolvable);
    resetRequireToken(): void;
    get requireTokenInput(): any;
}
export interface ZeroTrustDnsLocationEndpointsDotNetworks {
    /**
    * Specify the IP address or IP CIDR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
    */
    readonly network: string;
}
export declare function zeroTrustDnsLocationEndpointsDotNetworksToTerraform(struct?: ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsDotNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsDotNetworks | cdktf.IResolvable | undefined);
    private _network?;
    get network(): string;
    set network(value: string);
    get networkInput(): string;
}
export declare class ZeroTrustDnsLocationEndpointsDotNetworksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDnsLocationEndpointsDotNetworks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDnsLocationEndpointsDotNetworksOutputReference;
}
export interface ZeroTrustDnsLocationEndpointsDot {
    /**
    * Indicate whether the DOT endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specify the list of allowed source IP network ranges for this endpoint. When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
    */
    readonly networks?: ZeroTrustDnsLocationEndpointsDotNetworks[] | cdktf.IResolvable;
}
export declare function zeroTrustDnsLocationEndpointsDotToTerraform(struct?: ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsDotToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsDotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsDot | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _networks;
    get networks(): ZeroTrustDnsLocationEndpointsDotNetworksList;
    putNetworks(value: ZeroTrustDnsLocationEndpointsDotNetworks[] | cdktf.IResolvable): void;
    resetNetworks(): void;
    get networksInput(): any;
}
export interface ZeroTrustDnsLocationEndpointsIpv4 {
    /**
    * Indicate whether the IPv4 endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsIpv4 | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustDnsLocationEndpointsIpv6Networks {
    /**
    * Specify the IPv6 address or IPv6 CIDR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
    */
    readonly network: string;
}
export declare function zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsIpv6Networks | cdktf.IResolvable | undefined);
    private _network?;
    get network(): string;
    set network(value: string);
    get networkInput(): string;
}
export declare class ZeroTrustDnsLocationEndpointsIpv6NetworksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDnsLocationEndpointsIpv6Networks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference;
}
export interface ZeroTrustDnsLocationEndpointsIpv6 {
    /**
    * Indicate whether the IPV6 endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specify the list of allowed source IPv6 network ranges for this endpoint. When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}
    */
    readonly networks?: ZeroTrustDnsLocationEndpointsIpv6Networks[] | cdktf.IResolvable;
}
export declare function zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct?: ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpointsIpv6 | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _networks;
    get networks(): ZeroTrustDnsLocationEndpointsIpv6NetworksList;
    putNetworks(value: ZeroTrustDnsLocationEndpointsIpv6Networks[] | cdktf.IResolvable): void;
    resetNetworks(): void;
    get networksInput(): any;
}
export interface ZeroTrustDnsLocationEndpoints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}
    */
    readonly doh: ZeroTrustDnsLocationEndpointsDoh;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}
    */
    readonly dot: ZeroTrustDnsLocationEndpointsDot;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}
    */
    readonly ipv4: ZeroTrustDnsLocationEndpointsIpv4;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}
    */
    readonly ipv6: ZeroTrustDnsLocationEndpointsIpv6;
}
export declare function zeroTrustDnsLocationEndpointsToTerraform(struct?: ZeroTrustDnsLocationEndpoints | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationEndpointsToHclTerraform(struct?: ZeroTrustDnsLocationEndpoints | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDnsLocationEndpoints | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationEndpoints | cdktf.IResolvable | undefined);
    private _doh;
    get doh(): ZeroTrustDnsLocationEndpointsDohOutputReference;
    putDoh(value: ZeroTrustDnsLocationEndpointsDoh): void;
    get dohInput(): any;
    private _dot;
    get dot(): ZeroTrustDnsLocationEndpointsDotOutputReference;
    putDot(value: ZeroTrustDnsLocationEndpointsDot): void;
    get dotInput(): any;
    private _ipv4;
    get ipv4(): ZeroTrustDnsLocationEndpointsIpv4OutputReference;
    putIpv4(value: ZeroTrustDnsLocationEndpointsIpv4): void;
    get ipv4Input(): any;
    private _ipv6;
    get ipv6(): ZeroTrustDnsLocationEndpointsIpv6OutputReference;
    putIpv6(value: ZeroTrustDnsLocationEndpointsIpv6): void;
    get ipv6Input(): any;
}
export interface ZeroTrustDnsLocationNetworks {
    /**
    * Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}
    */
    readonly network: string;
}
export declare function zeroTrustDnsLocationNetworksToTerraform(struct?: ZeroTrustDnsLocationNetworks | cdktf.IResolvable): any;
export declare function zeroTrustDnsLocationNetworksToHclTerraform(struct?: ZeroTrustDnsLocationNetworks | cdktf.IResolvable): any;
export declare class ZeroTrustDnsLocationNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDnsLocationNetworks | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDnsLocationNetworks | cdktf.IResolvable | undefined);
    private _network?;
    get network(): string;
    set network(value: string);
    get networkInput(): string;
}
export declare class ZeroTrustDnsLocationNetworksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDnsLocationNetworks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDnsLocationNetworksOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}
*/
export declare class ZeroTrustDnsLocation extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dns_location";
    /**
    * Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDnsLocation to import
    * @param importFromId The id of the existing ZeroTrustDnsLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDnsLocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDnsLocationConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDnsLocationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _clientDefault?;
    get clientDefault(): boolean | cdktf.IResolvable;
    set clientDefault(value: boolean | cdktf.IResolvable);
    resetClientDefault(): void;
    get clientDefaultInput(): any;
    get createdAt(): any;
    private _dnsDestinationIpsId?;
    get dnsDestinationIpsId(): string;
    set dnsDestinationIpsId(value: string);
    resetDnsDestinationIpsId(): void;
    get dnsDestinationIpsIdInput(): string;
    get dnsDestinationIpv6BlockId(): any;
    get dohSubdomain(): any;
    private _ecsSupport?;
    get ecsSupport(): boolean | cdktf.IResolvable;
    set ecsSupport(value: boolean | cdktf.IResolvable);
    resetEcsSupport(): void;
    get ecsSupportInput(): any;
    private _endpoints;
    get endpoints(): ZeroTrustDnsLocationEndpointsOutputReference;
    putEndpoints(value: ZeroTrustDnsLocationEndpoints): void;
    resetEndpoints(): void;
    get endpointsInput(): any;
    get id(): any;
    get ip(): any;
    get ipv4Destination(): any;
    get ipv4DestinationBackup(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _networks;
    get networks(): ZeroTrustDnsLocationNetworksList;
    putNetworks(value: ZeroTrustDnsLocationNetworks[] | cdktf.IResolvable): void;
    resetNetworks(): void;
    get networksInput(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
