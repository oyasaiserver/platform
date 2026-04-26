import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessInfrastructureTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#account_id DataCloudflareZeroTrustAccessInfrastructureTarget#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#filter DataCloudflareZeroTrustAccessInfrastructureTarget#filter}
    */
    readonly filter?: DataCloudflareZeroTrustAccessInfrastructureTargetFilter;
    /**
    * Target identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#target_id DataCloudflareZeroTrustAccessInfrastructureTarget#target_id}
    */
    readonly targetId?: string;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetFilter {
    /**
    * Date and time at which the target was created after (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#created_after DataCloudflareZeroTrustAccessInfrastructureTarget#created_after}
    */
    readonly createdAfter?: string;
    /**
    * Date and time at which the target was created before (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#created_before DataCloudflareZeroTrustAccessInfrastructureTarget#created_before}
    */
    readonly createdBefore?: string;
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#direction DataCloudflareZeroTrustAccessInfrastructureTarget#direction}
    */
    readonly direction?: string;
    /**
    * Hostname of a target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#hostname DataCloudflareZeroTrustAccessInfrastructureTarget#hostname}
    */
    readonly hostname?: string;
    /**
    * Partial match to the hostname of a target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#hostname_contains DataCloudflareZeroTrustAccessInfrastructureTarget#hostname_contains}
    */
    readonly hostnameContains?: string;
    /**
    * Filters for targets whose IP addresses look like the specified string.
    * Supports `*` as a wildcard character
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_like DataCloudflareZeroTrustAccessInfrastructureTarget#ip_like}
    */
    readonly ipLike?: string;
    /**
    * IPv4 address of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_v4 DataCloudflareZeroTrustAccessInfrastructureTarget#ip_v4}
    */
    readonly ipV4?: string;
    /**
    * IPv6 address of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_v6 DataCloudflareZeroTrustAccessInfrastructureTarget#ip_v6}
    */
    readonly ipV6?: string;
    /**
    * Filters for targets that have any of the following IP addresses. Specify
    * `ips` multiple times in query parameter to build list of candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ips DataCloudflareZeroTrustAccessInfrastructureTarget#ips}
    */
    readonly ips?: string[];
    /**
    * Defines an IPv4 filter range's ending value (inclusive). Requires
    * `ipv4_start` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv4_end DataCloudflareZeroTrustAccessInfrastructureTarget#ipv4_end}
    */
    readonly ipv4End?: string;
    /**
    * Defines an IPv4 filter range's starting value (inclusive). Requires
    * `ipv4_end` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv4_start DataCloudflareZeroTrustAccessInfrastructureTarget#ipv4_start}
    */
    readonly ipv4Start?: string;
    /**
    * Defines an IPv6 filter range's ending value (inclusive). Requires
    * `ipv6_start` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv6_end DataCloudflareZeroTrustAccessInfrastructureTarget#ipv6_end}
    */
    readonly ipv6End?: string;
    /**
    * Defines an IPv6 filter range's starting value (inclusive). Requires
    * `ipv6_end` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv6_start DataCloudflareZeroTrustAccessInfrastructureTarget#ipv6_start}
    */
    readonly ipv6Start?: string;
    /**
    * Date and time at which the target was modified after (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#modified_after DataCloudflareZeroTrustAccessInfrastructureTarget#modified_after}
    */
    readonly modifiedAfter?: string;
    /**
    * Date and time at which the target was modified before (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#modified_before DataCloudflareZeroTrustAccessInfrastructureTarget#modified_before}
    */
    readonly modifiedBefore?: string;
    /**
    * The field to sort by.
    * Available values: "hostname", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#order DataCloudflareZeroTrustAccessInfrastructureTarget#order}
    */
    readonly order?: string;
    /**
    * Filters for targets that have any of the following UUIDs. Specify
    * `target_ids` multiple times in query parameter to build list of
    * candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#target_ids DataCloudflareZeroTrustAccessInfrastructureTarget#target_ids}
    */
    readonly targetIds?: string[];
    /**
    * Private virtual network identifier of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#virtual_network_id DataCloudflareZeroTrustAccessInfrastructureTarget#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetFilter | cdktf.IResolvable | undefined);
    private _createdAfter?;
    get createdAfter(): string;
    set createdAfter(value: string);
    resetCreatedAfter(): void;
    get createdAfterInput(): string;
    private _createdBefore?;
    get createdBefore(): string;
    set createdBefore(value: string);
    resetCreatedBefore(): void;
    get createdBeforeInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _hostnameContains?;
    get hostnameContains(): string;
    set hostnameContains(value: string);
    resetHostnameContains(): void;
    get hostnameContainsInput(): string;
    private _ipLike?;
    get ipLike(): string;
    set ipLike(value: string);
    resetIpLike(): void;
    get ipLikeInput(): string;
    private _ipV4?;
    get ipV4(): string;
    set ipV4(value: string);
    resetIpV4(): void;
    get ipV4Input(): string;
    private _ipV6?;
    get ipV6(): string;
    set ipV6(value: string);
    resetIpV6(): void;
    get ipV6Input(): string;
    private _ips?;
    get ips(): string[];
    set ips(value: string[]);
    resetIps(): void;
    get ipsInput(): string[];
    private _ipv4End?;
    get ipv4End(): string;
    set ipv4End(value: string);
    resetIpv4End(): void;
    get ipv4EndInput(): string;
    private _ipv4Start?;
    get ipv4Start(): string;
    set ipv4Start(value: string);
    resetIpv4Start(): void;
    get ipv4StartInput(): string;
    private _ipv6End?;
    get ipv6End(): string;
    set ipv6End(value: string);
    resetIpv6End(): void;
    get ipv6EndInput(): string;
    private _ipv6Start?;
    get ipv6Start(): string;
    set ipv6Start(value: string);
    resetIpv6Start(): void;
    get ipv6StartInput(): string;
    private _modifiedAfter?;
    get modifiedAfter(): string;
    set modifiedAfter(value: string);
    resetModifiedAfter(): void;
    get modifiedAfterInput(): string;
    private _modifiedBefore?;
    get modifiedBefore(): string;
    set modifiedBefore(value: string);
    resetModifiedBefore(): void;
    get modifiedBeforeInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _targetIds?;
    get targetIds(): string[];
    set targetIds(value: string[]);
    resetTargetIds(): void;
    get targetIdsInput(): string[];
    private _virtualNetworkId?;
    get virtualNetworkId(): string;
    set virtualNetworkId(value: string);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): string;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 | undefined);
    get ipAddr(): any;
    get virtualNetworkId(): any;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 | undefined);
    get ipAddr(): any;
    get virtualNetworkId(): any;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetIp {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetIpToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIp): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetIp): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetIp | undefined);
    private _ipv4;
    get ipv4(): DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;
    private _ipv6;
    get ipv6(): DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
export declare class DataCloudflareZeroTrustAccessInfrastructureTarget extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTarget to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessInfrastructureTargetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessInfrastructureTargetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustAccessInfrastructureTargetFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostname(): any;
    get id(): any;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference;
    get modifiedAt(): any;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    resetTargetId(): void;
    get targetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
