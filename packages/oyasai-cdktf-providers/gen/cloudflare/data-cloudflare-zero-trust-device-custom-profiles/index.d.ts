import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceCustomProfilesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles#max_items DataCloudflareZeroTrustDeviceCustomProfiles#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDeviceCustomProfilesResultExclude {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultExclude): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultExclude): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfilesResultExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfilesResultExclude | undefined);
    get address(): any;
    get description(): any;
    get host(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains | undefined);
    get description(): any;
    get dnsServer(): any;
    get suffix(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfilesResultInclude {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultInclude): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultInclude): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfilesResultInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfilesResultInclude | undefined);
    get address(): any;
    get description(): any;
    get host(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 | undefined);
    get mode(): any;
    get port(): any;
}
export interface DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfilesResult {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResult): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfilesResultToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfilesResult): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfilesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfilesResult | undefined);
    get allowModeSwitch(): any;
    get allowUpdates(): any;
    get allowedToLeave(): any;
    get autoConnect(): any;
    get captivePortal(): any;
    get default(): any;
    get description(): any;
    get disableAutoFallback(): any;
    get enabled(): any;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList;
    get excludeOfficeIps(): any;
    private _fallbackDomains;
    get fallbackDomains(): DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList;
    get gatewayUniqueId(): any;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList;
    get lanAllowMinutes(): any;
    get lanAllowSubnetSize(): any;
    get match(): any;
    get name(): any;
    get policyId(): any;
    get precedence(): any;
    get registerInterfaceIpWithDns(): any;
    get sccmVpnBoundarySupport(): any;
    private _serviceModeV2;
    get serviceModeV2(): DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference;
    get supportUrl(): any;
    get switchLocked(): any;
    private _targetTests;
    get targetTests(): DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList;
    get tunnelProtocol(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfilesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles}
*/
export declare class DataCloudflareZeroTrustDeviceCustomProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_custom_profiles";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfiles to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceCustomProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfiles to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceCustomProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceCustomProfilesConfig);
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
    get result(): DataCloudflareZeroTrustDeviceCustomProfilesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
