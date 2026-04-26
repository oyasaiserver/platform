import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDnsLocationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations#account_id DataCloudflareZeroTrustDnsLocations#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations#max_items DataCloudflareZeroTrustDnsLocations#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh | undefined);
    get enabled(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList;
    get requireToken(): any;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsDot {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDot): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsDot): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDot | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsDot | undefined);
    get enabled(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4 {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4 | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6 {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6 | undefined);
    get enabled(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList;
}
export interface DataCloudflareZeroTrustDnsLocationsResultEndpoints {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpoints): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultEndpointsToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultEndpoints): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultEndpoints | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultEndpoints | undefined);
    private _doh;
    get doh(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference;
    private _dot;
    get dot(): DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference;
    private _ipv4;
    get ipv4(): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference;
    private _ipv6;
    get ipv6(): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationsResultNetworks {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultNetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultNetworks): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultNetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResultNetworks): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResultNetworks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResultNetworks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationsResultNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationsResult {
}
export declare function dataCloudflareZeroTrustDnsLocationsResultToTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResult): any;
export declare function dataCloudflareZeroTrustDnsLocationsResultToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationsResult): any;
export declare class DataCloudflareZeroTrustDnsLocationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationsResult | undefined);
    get clientDefault(): any;
    get createdAt(): any;
    get dnsDestinationIpsId(): any;
    get dnsDestinationIpv6BlockId(): any;
    get dohSubdomain(): any;
    get ecsSupport(): any;
    private _endpoints;
    get endpoints(): DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference;
    get id(): any;
    get ip(): any;
    get ipv4Destination(): any;
    get ipv4DestinationBackup(): any;
    get name(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationsResultNetworksList;
    get updatedAt(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations cloudflare_zero_trust_dns_locations}
*/
export declare class DataCloudflareZeroTrustDnsLocations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dns_locations";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDnsLocations to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDnsLocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDnsLocations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations cloudflare_zero_trust_dns_locations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDnsLocationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDnsLocationsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareZeroTrustDnsLocationsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
