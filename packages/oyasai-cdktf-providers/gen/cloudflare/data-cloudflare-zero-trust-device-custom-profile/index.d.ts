import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceCustomProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}
    */
    readonly policyId: string;
}
export interface DataCloudflareZeroTrustDeviceCustomProfileExclude {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfileExcludeToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileExclude): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfileExcludeToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileExclude): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfileExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfileExclude | undefined);
    get address(): any;
    get description(): any;
    get host(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfileExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains | undefined);
    get description(): any;
    get dnsServer(): any;
    get suffix(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfileInclude {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfileIncludeToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileInclude): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfileIncludeToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileInclude): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfileInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfileInclude | undefined);
    get address(): any;
    get description(): any;
    get host(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfileIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference;
}
export interface DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 | undefined);
    get mode(): any;
    get port(): any;
}
export interface DataCloudflareZeroTrustDeviceCustomProfileTargetTests {
}
export declare function dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileTargetTests): any;
export declare function dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToHclTerraform(struct?: DataCloudflareZeroTrustDeviceCustomProfileTargetTests): any;
export declare class DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceCustomProfileTargetTests | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceCustomProfileTargetTests | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}
*/
export declare class DataCloudflareZeroTrustDeviceCustomProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_custom_profile";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceCustomProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceCustomProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    get exclude(): DataCloudflareZeroTrustDeviceCustomProfileExcludeList;
    get excludeOfficeIps(): any;
    private _fallbackDomains;
    get fallbackDomains(): DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList;
    get gatewayUniqueId(): any;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustDeviceCustomProfileIncludeList;
    get lanAllowMinutes(): any;
    get lanAllowSubnetSize(): any;
    get match(): any;
    get name(): any;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    get precedence(): any;
    get registerInterfaceIpWithDns(): any;
    get sccmVpnBoundarySupport(): any;
    private _serviceModeV2;
    get serviceModeV2(): DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
    get supportUrl(): any;
    get switchLocked(): any;
    private _targetTests;
    get targetTests(): DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList;
    get tunnelProtocol(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
