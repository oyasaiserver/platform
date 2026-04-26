import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#account_id DataCloudflareZeroTrustAccessInfrastructureTargets#account_id}
    */
    readonly accountId?: string;
    /**
    * Date and time at which the target was created after (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#created_after DataCloudflareZeroTrustAccessInfrastructureTargets#created_after}
    */
    readonly createdAfter?: string;
    /**
    * Date and time at which the target was created before (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#created_before DataCloudflareZeroTrustAccessInfrastructureTargets#created_before}
    */
    readonly createdBefore?: string;
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#direction DataCloudflareZeroTrustAccessInfrastructureTargets#direction}
    */
    readonly direction?: string;
    /**
    * Hostname of a target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#hostname DataCloudflareZeroTrustAccessInfrastructureTargets#hostname}
    */
    readonly hostname?: string;
    /**
    * Partial match to the hostname of a target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#hostname_contains DataCloudflareZeroTrustAccessInfrastructureTargets#hostname_contains}
    */
    readonly hostnameContains?: string;
    /**
    * Filters for targets whose IP addresses look like the specified string.
    * Supports `*` as a wildcard character
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_like DataCloudflareZeroTrustAccessInfrastructureTargets#ip_like}
    */
    readonly ipLike?: string;
    /**
    * IPv4 address of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_v4 DataCloudflareZeroTrustAccessInfrastructureTargets#ip_v4}
    */
    readonly ipV4?: string;
    /**
    * IPv6 address of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_v6 DataCloudflareZeroTrustAccessInfrastructureTargets#ip_v6}
    */
    readonly ipV6?: string;
    /**
    * Filters for targets that have any of the following IP addresses. Specify
    * `ips` multiple times in query parameter to build list of candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ips DataCloudflareZeroTrustAccessInfrastructureTargets#ips}
    */
    readonly ips?: string[];
    /**
    * Defines an IPv4 filter range's ending value (inclusive). Requires
    * `ipv4_start` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv4_end DataCloudflareZeroTrustAccessInfrastructureTargets#ipv4_end}
    */
    readonly ipv4End?: string;
    /**
    * Defines an IPv4 filter range's starting value (inclusive). Requires
    * `ipv4_end` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv4_start DataCloudflareZeroTrustAccessInfrastructureTargets#ipv4_start}
    */
    readonly ipv4Start?: string;
    /**
    * Defines an IPv6 filter range's ending value (inclusive). Requires
    * `ipv6_start` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv6_end DataCloudflareZeroTrustAccessInfrastructureTargets#ipv6_end}
    */
    readonly ipv6End?: string;
    /**
    * Defines an IPv6 filter range's starting value (inclusive). Requires
    * `ipv6_end` to be specified as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv6_start DataCloudflareZeroTrustAccessInfrastructureTargets#ipv6_start}
    */
    readonly ipv6Start?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#max_items DataCloudflareZeroTrustAccessInfrastructureTargets#max_items}
    */
    readonly maxItems?: number;
    /**
    * Date and time at which the target was modified after (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#modified_after DataCloudflareZeroTrustAccessInfrastructureTargets#modified_after}
    */
    readonly modifiedAfter?: string;
    /**
    * Date and time at which the target was modified before (inclusive)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#modified_before DataCloudflareZeroTrustAccessInfrastructureTargets#modified_before}
    */
    readonly modifiedBefore?: string;
    /**
    * The field to sort by.
    * Available values: "hostname", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#order DataCloudflareZeroTrustAccessInfrastructureTargets#order}
    */
    readonly order?: string;
    /**
    * Filters for targets that have any of the following UUIDs. Specify
    * `target_ids` multiple times in query parameter to build list of
    * candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#target_ids DataCloudflareZeroTrustAccessInfrastructureTargets#target_ids}
    */
    readonly targetIds?: string[];
    /**
    * Private virtual network identifier of the target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#virtual_network_id DataCloudflareZeroTrustAccessInfrastructureTargets#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 | undefined);
    get ipAddr(): any;
    get virtualNetworkId(): any;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 | undefined);
    get ipAddr(): any;
    get virtualNetworkId(): any;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp | undefined);
    private _ipv4;
    get ipv4(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference;
    private _ipv6;
    get ipv6(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference;
}
export interface DataCloudflareZeroTrustAccessInfrastructureTargetsResult {
}
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResult): any;
export declare function dataCloudflareZeroTrustAccessInfrastructureTargetsResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessInfrastructureTargetsResult): any;
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessInfrastructureTargetsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessInfrastructureTargetsResult | undefined);
    get createdAt(): any;
    get hostname(): any;
    get id(): any;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference;
    get modifiedAt(): any;
}
export declare class DataCloudflareZeroTrustAccessInfrastructureTargetsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets}
*/
export declare class DataCloudflareZeroTrustAccessInfrastructureTargets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_infrastructure_targets";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTargets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTargets to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTargets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessInfrastructureTargetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessInfrastructureTargetsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
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
    private _result;
    get result(): DataCloudflareZeroTrustAccessInfrastructureTargetsResultList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
