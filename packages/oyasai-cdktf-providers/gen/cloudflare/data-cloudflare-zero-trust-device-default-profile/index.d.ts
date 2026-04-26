import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceDefaultProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile#account_id DataCloudflareZeroTrustDeviceDefaultProfile#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareZeroTrustDeviceDefaultProfileExclude {
}
export declare function dataCloudflareZeroTrustDeviceDefaultProfileExcludeToTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileExclude): any;
export declare function dataCloudflareZeroTrustDeviceDefaultProfileExcludeToHclTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileExclude): any;
export declare class DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceDefaultProfileExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceDefaultProfileExclude | undefined);
    get address(): any;
    get description(): any;
    get host(): any;
}
export declare class DataCloudflareZeroTrustDeviceDefaultProfileExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference;
}
export interface DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains {
}
export declare function dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains): any;
export declare function dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains): any;
export declare class DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains | undefined);
    get description(): any;
    get dnsServer(): any;
    get suffix(): any;
}
export declare class DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;
}
export interface DataCloudflareZeroTrustDeviceDefaultProfileInclude {
}
export declare function dataCloudflareZeroTrustDeviceDefaultProfileIncludeToTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileInclude): any;
export declare function dataCloudflareZeroTrustDeviceDefaultProfileIncludeToHclTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileInclude): any;
export declare class DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDeviceDefaultProfileInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceDefaultProfileInclude | undefined);
    get address(): any;
    get description(): any;
    get host(): any;
}
export declare class DataCloudflareZeroTrustDeviceDefaultProfileIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference;
}
export interface DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 {
}
export declare function dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2): any;
export declare function dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(struct?: DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2): any;
export declare class DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 | undefined);
    get mode(): any;
    get port(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}
*/
export declare class DataCloudflareZeroTrustDeviceDefaultProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_default_profile";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDefaultProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceDefaultProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDefaultProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceDefaultProfileConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceDefaultProfileConfig);
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
    get disableAutoFallback(): any;
    get enabled(): any;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustDeviceDefaultProfileExcludeList;
    get excludeOfficeIps(): any;
    private _fallbackDomains;
    get fallbackDomains(): DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList;
    get gatewayUniqueId(): any;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustDeviceDefaultProfileIncludeList;
    get policyId(): any;
    get registerInterfaceIpWithDns(): any;
    get sccmVpnBoundarySupport(): any;
    private _serviceModeV2;
    get serviceModeV2(): DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
    get supportUrl(): any;
    get switchLocked(): any;
    get tunnelProtocol(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
