import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDnsLocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location#account_id DataCloudflareZeroTrustDnsLocation#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location#location_id DataCloudflareZeroTrustDnsLocation#location_id}
    */
    readonly locationId: string;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsDoh {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDohToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDoh): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDohToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDoh): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsDoh | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsDoh | undefined);
    get enabled(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList;
    get requireToken(): any;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsDot {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDotToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDot): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsDotToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsDot): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsDot | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsDot | undefined);
    get enabled(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsIpv4 {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsIpv4): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsIpv4): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsIpv4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsIpv4 | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationEndpointsIpv6 {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsIpv6): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpointsIpv6): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpointsIpv6 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpointsIpv6 | undefined);
    get enabled(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList;
}
export interface DataCloudflareZeroTrustDnsLocationEndpoints {
}
export declare function dataCloudflareZeroTrustDnsLocationEndpointsToTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpoints): any;
export declare function dataCloudflareZeroTrustDnsLocationEndpointsToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationEndpoints): any;
export declare class DataCloudflareZeroTrustDnsLocationEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDnsLocationEndpoints | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationEndpoints | undefined);
    private _doh;
    get doh(): DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference;
    private _dot;
    get dot(): DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference;
    private _ipv4;
    get ipv4(): DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference;
    private _ipv6;
    get ipv6(): DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference;
}
export interface DataCloudflareZeroTrustDnsLocationNetworks {
}
export declare function dataCloudflareZeroTrustDnsLocationNetworksToTerraform(struct?: DataCloudflareZeroTrustDnsLocationNetworks): any;
export declare function dataCloudflareZeroTrustDnsLocationNetworksToHclTerraform(struct?: DataCloudflareZeroTrustDnsLocationNetworks): any;
export declare class DataCloudflareZeroTrustDnsLocationNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDnsLocationNetworks | undefined;
    set internalValue(value: DataCloudflareZeroTrustDnsLocationNetworks | undefined);
    get network(): any;
}
export declare class DataCloudflareZeroTrustDnsLocationNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDnsLocationNetworksOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location cloudflare_zero_trust_dns_location}
*/
export declare class DataCloudflareZeroTrustDnsLocation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dns_location";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDnsLocation to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDnsLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDnsLocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location cloudflare_zero_trust_dns_location} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDnsLocationConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDnsLocationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get clientDefault(): any;
    get createdAt(): any;
    get dnsDestinationIpsId(): any;
    get dnsDestinationIpv6BlockId(): any;
    get dohSubdomain(): any;
    get ecsSupport(): any;
    private _endpoints;
    get endpoints(): DataCloudflareZeroTrustDnsLocationEndpointsOutputReference;
    get id(): any;
    get ip(): any;
    get ipv4Destination(): any;
    get ipv4DestinationBackup(): any;
    private _locationId?;
    get locationId(): string;
    set locationId(value: string);
    get locationIdInput(): string;
    get name(): any;
    private _networks;
    get networks(): DataCloudflareZeroTrustDnsLocationNetworksList;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
