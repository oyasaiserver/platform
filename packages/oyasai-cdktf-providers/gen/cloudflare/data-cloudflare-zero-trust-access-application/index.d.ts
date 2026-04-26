import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#account_id DataCloudflareZeroTrustAccessApplication#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#app_id DataCloudflareZeroTrustAccessApplication#app_id}
    */
    readonly appId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#filter DataCloudflareZeroTrustAccessApplication#filter}
    */
    readonly filter?: DataCloudflareZeroTrustAccessApplicationFilter;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#zone_id DataCloudflareZeroTrustAccessApplication#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessApplicationCorsHeaders {
}
export declare function dataCloudflareZeroTrustAccessApplicationCorsHeadersToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationCorsHeaders): any;
export declare function dataCloudflareZeroTrustAccessApplicationCorsHeadersToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationCorsHeaders): any;
export declare class DataCloudflareZeroTrustAccessApplicationCorsHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationCorsHeaders | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationCorsHeaders | undefined);
    get allowAllHeaders(): any;
    get allowAllMethods(): any;
    get allowAllOrigins(): any;
    get allowCredentials(): any;
    get allowedHeaders(): any;
    get allowedMethods(): any;
    get allowedOrigins(): any;
    get maxAge(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationDestinations {
    /**
    * A MCP server id configured in ai-controls. Access will secure the MCP server if accessed through a MCP portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#mcp_server_id DataCloudflareZeroTrustAccessApplication#mcp_server_id}
    */
    readonly mcpServerId?: string;
}
export declare function dataCloudflareZeroTrustAccessApplicationDestinationsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationDestinations): any;
export declare function dataCloudflareZeroTrustAccessApplicationDestinationsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationDestinations): any;
export declare class DataCloudflareZeroTrustAccessApplicationDestinationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationDestinations | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationDestinations | undefined);
    get cidr(): any;
    get hostname(): any;
    get l4Protocol(): any;
    private _mcpServerId?;
    get mcpServerId(): string;
    set mcpServerId(value: string);
    resetMcpServerId(): void;
    get mcpServerIdInput(): string;
    get portRange(): any;
    get type(): any;
    get uri(): any;
    get vnetId(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationDestinationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataCloudflareZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustAccessApplicationDestinationsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationFilter {
    /**
    * The aud of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#aud DataCloudflareZeroTrustAccessApplication#aud}
    */
    readonly aud?: string;
    /**
    * The domain of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#domain DataCloudflareZeroTrustAccessApplication#domain}
    */
    readonly domain?: string;
    /**
    * True for only exact string matches against passed name/domain query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#exact DataCloudflareZeroTrustAccessApplication#exact}
    */
    readonly exact?: boolean | cdktf.IResolvable;
    /**
    * The name of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#name DataCloudflareZeroTrustAccessApplication#name}
    */
    readonly name?: string;
    /**
    * Search for apps by other listed query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#search DataCloudflareZeroTrustAccessApplication#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareZeroTrustAccessApplicationFilterToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustAccessApplicationFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustAccessApplicationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationFilter | cdktf.IResolvable | undefined);
    private _aud?;
    get aud(): string;
    set aud(value: string);
    resetAud(): void;
    get audInput(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    private _exact?;
    get exact(): boolean | cdktf.IResolvable;
    set exact(value: boolean | cdktf.IResolvable);
    resetExact(): void;
    get exactInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
export interface DataCloudflareZeroTrustAccessApplicationFooterLinks {
}
export declare function dataCloudflareZeroTrustAccessApplicationFooterLinksToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationFooterLinks): any;
export declare function dataCloudflareZeroTrustAccessApplicationFooterLinksToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationFooterLinks): any;
export declare class DataCloudflareZeroTrustAccessApplicationFooterLinksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationFooterLinks | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationFooterLinks | undefined);
    get name(): any;
    get url(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationFooterLinksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationFooterLinksOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationLandingPageDesign {
}
export declare function dataCloudflareZeroTrustAccessApplicationLandingPageDesignToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationLandingPageDesign): any;
export declare function dataCloudflareZeroTrustAccessApplicationLandingPageDesignToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationLandingPageDesign): any;
export declare class DataCloudflareZeroTrustAccessApplicationLandingPageDesignOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationLandingPageDesign | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationLandingPageDesign | undefined);
    get buttonColor(): any;
    get buttonTextColor(): any;
    get imageUrl(): any;
    get message(): any;
    get title(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroups {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroupsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroups): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroupsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroups): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroups | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroups | undefined);
    get approvalsNeeded(): any;
    get emailAddresses(): any;
    get emailListUuid(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroupsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSsh {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSshToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSsh): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSshToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSsh): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSsh | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSsh | undefined);
    get allowEmailAlias(): any;
    get usernames(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRules {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRules): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRules): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRules | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRules | undefined);
    private _ssh;
    get ssh(): DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmail {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmail): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmail): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeo {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeo): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeo): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroup {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroup): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroup): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIp {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIp): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIp): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidc {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidc): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidc): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOkta {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOkta): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOkta): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSaml {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSaml): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSaml): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesExclude {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExclude): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesExclude): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesExclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmail {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmail): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmail): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeo {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeo): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeo): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroup {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroup): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroup): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIp {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIp): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIp): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidc {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidc): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidc): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOkta {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOkta): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOkta): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSaml {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSaml): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSaml): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesInclude {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesInclude): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesInclude): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesInclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContext {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContext): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContext): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAd {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAd): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAd): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificate {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificate): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificate): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonName {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonName): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonName): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmail {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmail): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmail): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryone {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryone): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryone): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeo {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeo): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeo): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroup {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroup): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroup): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuite {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuite): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuite): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireIp {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireIp): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireIp): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidc {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireOidcToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidc): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidc): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireOkta {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireOkta): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireOkta): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireSaml {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireSaml): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireSaml): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationPoliciesRequire {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequire): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPoliciesRequire): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPoliciesRequire | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPoliciesRequire | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesRequireList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationPoliciesRequireOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationPolicies {
}
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPolicies): any;
export declare function dataCloudflareZeroTrustAccessApplicationPoliciesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationPolicies): any;
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationPolicies | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationPolicies | undefined);
    private _approvalGroups;
    get approvalGroups(): DataCloudflareZeroTrustAccessApplicationPoliciesApprovalGroupsList;
    get approvalRequired(): any;
    private _connectionRules;
    get connectionRules(): DataCloudflareZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference;
    get createdAt(): any;
    get decision(): any;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustAccessApplicationPoliciesExcludeList;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustAccessApplicationPoliciesIncludeList;
    get isolationRequired(): any;
    get name(): any;
    get precedence(): any;
    get purposeJustificationPrompt(): any;
    get purposeJustificationRequired(): any;
    private _require;
    get require(): DataCloudflareZeroTrustAccessApplicationPoliciesRequireList;
    get sessionDuration(): any;
    get updatedAt(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationPoliciesOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | undefined);
    get idpId(): any;
    get sourceName(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSource {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSource): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSource): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSource | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSource | undefined);
    get name(): any;
    private _nameByIdp;
    get nameByIdp(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributes {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributes): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributes): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributes | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributes | undefined);
    get friendlyName(): any;
    get name(): any;
    get nameFormat(): any;
    get required(): any;
    private _source;
    get source(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSource {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSourceToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSource): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSourceToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSource): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSource | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSource | undefined);
    get name(): any;
    private _nameByIdp;
    get nameByIdp(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaims {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaims): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaims): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaims | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaims | undefined);
    get name(): any;
    get required(): any;
    get scope(): any;
    private _source;
    get source(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | undefined);
    get returnAccessTokenFromAuthorizationEndpoint(): any;
    get returnIdTokenFromAuthorizationEndpoint(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptions {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptions): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptions): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptions | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptions | undefined);
    get lifetime(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationSaasApp {
}
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasApp): any;
export declare function dataCloudflareZeroTrustAccessApplicationSaasAppToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationSaasApp): any;
export declare class DataCloudflareZeroTrustAccessApplicationSaasAppOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationSaasApp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationSaasApp | undefined);
    get accessTokenLifetime(): any;
    get allowPkceWithoutClientSecret(): any;
    get appLauncherUrl(): any;
    get authType(): any;
    get clientId(): any;
    get clientSecret(): any;
    get consumerServiceUrl(): any;
    private _customAttributes;
    get customAttributes(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomAttributesList;
    private _customClaims;
    get customClaims(): DataCloudflareZeroTrustAccessApplicationSaasAppCustomClaimsList;
    get defaultRelayState(): any;
    get grantTypes(): any;
    get groupFilterRegex(): any;
    private _hybridAndImplicitOptions;
    get hybridAndImplicitOptions(): DataCloudflareZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference;
    get idpEntityId(): any;
    get nameIdFormat(): any;
    get nameIdTransformJsonata(): any;
    get publicKey(): any;
    get redirectUris(): any;
    private _refreshTokenOptions;
    get refreshTokenOptions(): DataCloudflareZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference;
    get samlAttributeTransformJsonata(): any;
    get scopes(): any;
    get spEntityId(): any;
    get ssoEndpoint(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationScimConfigAuthentication {
}
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfigAuthentication): any;
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfigAuthentication): any;
export declare class DataCloudflareZeroTrustAccessApplicationScimConfigAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationScimConfigAuthentication | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationScimConfigAuthentication | undefined);
    get authorizationUrl(): any;
    get clientId(): any;
    get clientSecret(): any;
    get password(): any;
    get scheme(): any;
    get scopes(): any;
    get token(): any;
    get tokenUrl(): any;
    get user(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperations {
}
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperations): any;
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperations): any;
export declare class DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperations | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperations | undefined);
    get create(): any;
    get delete(): any;
    get update(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationScimConfigMappings {
}
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigMappingsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfigMappings): any;
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigMappingsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfigMappings): any;
export declare class DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationScimConfigMappings | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationScimConfigMappings | undefined);
    get enabled(): any;
    get filter(): any;
    private _operations;
    get operations(): DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference;
    get schema(): any;
    get strictness(): any;
    get transformJsonata(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationScimConfigMappingsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationScimConfigMappingsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationScimConfig {
}
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfig): any;
export declare function dataCloudflareZeroTrustAccessApplicationScimConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationScimConfig): any;
export declare class DataCloudflareZeroTrustAccessApplicationScimConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationScimConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationScimConfig | undefined);
    private _authentication;
    get authentication(): DataCloudflareZeroTrustAccessApplicationScimConfigAuthenticationOutputReference;
    get deactivateOnDelete(): any;
    get enabled(): any;
    get idpUid(): any;
    private _mappings;
    get mappings(): DataCloudflareZeroTrustAccessApplicationScimConfigMappingsList;
    get remoteUri(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationTargetCriteria {
}
export declare function dataCloudflareZeroTrustAccessApplicationTargetCriteriaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationTargetCriteria): any;
export declare function dataCloudflareZeroTrustAccessApplicationTargetCriteriaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationTargetCriteria): any;
export declare class DataCloudflareZeroTrustAccessApplicationTargetCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationTargetCriteria | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationTargetCriteria | undefined);
    get port(): any;
    get protocol(): any;
    private _targetAttributes;
    get targetAttributes(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationTargetCriteriaList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationTargetCriteriaOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application cloudflare_zero_trust_access_application}
*/
export declare class DataCloudflareZeroTrustAccessApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_application";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessApplication to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_application cloudflare_zero_trust_access_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessApplicationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessApplicationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowAuthenticateViaWarp(): any;
    get allowIframe(): any;
    get allowedIdps(): any;
    private _appId?;
    get appId(): string;
    set appId(value: string);
    resetAppId(): void;
    get appIdInput(): string;
    get appLauncherLogoUrl(): any;
    get appLauncherVisible(): any;
    get aud(): any;
    get autoRedirectToIdentity(): any;
    get bgColor(): any;
    private _corsHeaders;
    get corsHeaders(): DataCloudflareZeroTrustAccessApplicationCorsHeadersOutputReference;
    get customDenyMessage(): any;
    get customDenyUrl(): any;
    get customNonIdentityDenyUrl(): any;
    get customPages(): any;
    private _destinations;
    get destinations(): DataCloudflareZeroTrustAccessApplicationDestinationsList;
    get domain(): any;
    get enableBindingCookie(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustAccessApplicationFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustAccessApplicationFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _footerLinks;
    get footerLinks(): DataCloudflareZeroTrustAccessApplicationFooterLinksList;
    get headerBgColor(): any;
    get httpOnlyCookieAttribute(): any;
    get id(): any;
    private _landingPageDesign;
    get landingPageDesign(): DataCloudflareZeroTrustAccessApplicationLandingPageDesignOutputReference;
    get logoUrl(): any;
    get name(): any;
    get optionsPreflightBypass(): any;
    get pathCookieAttribute(): any;
    private _policies;
    get policies(): DataCloudflareZeroTrustAccessApplicationPoliciesList;
    get readServiceTokensFromHeader(): any;
    private _saasApp;
    get saasApp(): DataCloudflareZeroTrustAccessApplicationSaasAppOutputReference;
    get sameSiteCookieAttribute(): any;
    private _scimConfig;
    get scimConfig(): DataCloudflareZeroTrustAccessApplicationScimConfigOutputReference;
    get selfHostedDomains(): any;
    get serviceAuth401Redirect(): any;
    get sessionDuration(): any;
    get skipAppLauncherLoginPage(): any;
    get skipInterstitial(): any;
    get tags(): any;
    private _targetCriteria;
    get targetCriteria(): DataCloudflareZeroTrustAccessApplicationTargetCriteriaList;
    get type(): any;
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
