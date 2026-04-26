import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessIdentityProvidersConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#account_id DataCloudflareZeroTrustAccessIdentityProviders#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#max_items DataCloudflareZeroTrustAccessIdentityProviders#max_items}
    */
    readonly maxItems?: number;
    /**
    * Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#scim_enabled DataCloudflareZeroTrustAccessIdentityProviders#scim_enabled}
    */
    readonly scimEnabled?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#zone_id DataCloudflareZeroTrustAccessIdentityProviders#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes {
}
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes): any;
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes): any;
export declare class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes | undefined);
    get attributeName(): any;
    get headerName(): any;
}
export declare class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference;
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResultConfig {
}
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig): any;
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig): any;
export declare class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResultConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig | undefined);
    get appsDomain(): any;
    get attributes(): any;
    get authUrl(): any;
    get authorizationServerId(): any;
    get centrifyAccount(): any;
    get centrifyAppId(): any;
    get certsUrl(): any;
    get claims(): any;
    get clientId(): any;
    get clientSecret(): any;
    get conditionalAccessEnabled(): any;
    get directoryId(): any;
    get emailAttributeName(): any;
    get emailClaimName(): any;
    private _headerAttributes;
    get headerAttributes(): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList;
    get idpPublicCerts(): any;
    get issuerUrl(): any;
    get oktaAccount(): any;
    get oneloginAccount(): any;
    get pingEnvId(): any;
    get pkceEnabled(): any;
    get prompt(): any;
    get scopes(): any;
    get signRequest(): any;
    get ssoTargetUrl(): any;
    get supportGroups(): any;
    get tokenUrl(): any;
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig {
}
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig): any;
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig): any;
export declare class DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig | undefined);
    get enabled(): any;
    get identityUpdateBehavior(): any;
    get scimBaseUrl(): any;
    get seatDeprovision(): any;
    get secret(): any;
    get userDeprovision(): any;
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResult {
}
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResult): any;
export declare function dataCloudflareZeroTrustAccessIdentityProvidersResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResult): any;
export declare class DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResult | undefined);
    private _config;
    get config(): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference;
    get id(): any;
    get name(): any;
    private _scimConfig;
    get scimConfig(): DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference;
    get type(): any;
}
export declare class DataCloudflareZeroTrustAccessIdentityProvidersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}
*/
export declare class DataCloudflareZeroTrustAccessIdentityProviders extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_identity_providers";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessIdentityProvidersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessIdentityProvidersConfig);
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
    get result(): DataCloudflareZeroTrustAccessIdentityProvidersResultList;
    private _scimEnabled?;
    get scimEnabled(): string;
    set scimEnabled(value: string);
    resetScimEnabled(): void;
    get scimEnabledInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
