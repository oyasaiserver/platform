import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessApplicationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#account_id DataCloudflareZeroTrustAccessApplications#account_id}
    */
    readonly accountId?: string;
    /**
    * The aud of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#aud DataCloudflareZeroTrustAccessApplications#aud}
    */
    readonly aud?: string;
    /**
    * The domain of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#domain DataCloudflareZeroTrustAccessApplications#domain}
    */
    readonly domain?: string;
    /**
    * True for only exact string matches against passed name/domain query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#exact DataCloudflareZeroTrustAccessApplications#exact}
    */
    readonly exact?: boolean | cdktf.IResolvable;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#max_items DataCloudflareZeroTrustAccessApplications#max_items}
    */
    readonly maxItems?: number;
    /**
    * The name of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#name DataCloudflareZeroTrustAccessApplications#name}
    */
    readonly name?: string;
    /**
    * Search for apps by other listed query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#search DataCloudflareZeroTrustAccessApplications#search}
    */
    readonly search?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#zone_id DataCloudflareZeroTrustAccessApplications#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultCorsHeadersToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultCorsHeadersToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultCorsHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultCorsHeaders | undefined);
    get allowAllHeaders(): any;
    get allowAllMethods(): any;
    get allowAllOrigins(): any;
    get allowCredentials(): any;
    get allowedHeaders(): any;
    get allowedMethods(): any;
    get allowedOrigins(): any;
    get maxAge(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultDestinations {
    /**
    * A MCP server id configured in ai-controls. Access will secure the MCP server if accessed through a MCP portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#mcp_server_id DataCloudflareZeroTrustAccessApplications#mcp_server_id}
    */
    readonly mcpServerId?: string;
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultDestinationsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultDestinations): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultDestinationsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultDestinations): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultDestinationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultDestinations | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultDestinations | undefined);
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
export declare class DataCloudflareZeroTrustAccessApplicationsResultDestinationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataCloudflareZeroTrustAccessApplicationsResultDestinations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultDestinationsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultFooterLinks {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultFooterLinksToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultFooterLinks): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultFooterLinksToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultFooterLinks): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultFooterLinksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultFooterLinks | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultFooterLinks | undefined);
    get name(): any;
    get url(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultFooterLinksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultFooterLinksOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesign | undefined);
    get buttonColor(): any;
    get buttonTextColor(): any;
    get imageUrl(): any;
    get message(): any;
    get title(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroups | undefined);
    get approvalsNeeded(): any;
    get emailAddresses(): any;
    get emailListUuid(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSsh | undefined);
    get allowEmailAlias(): any;
    get usernames(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRules | undefined);
    private _ssh;
    get ssh(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesSshOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidc {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidc): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidc): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesExclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeServiceTokenOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidc {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidc): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidc): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesInclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeServiceTokenOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidc {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidcToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidc): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidc): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequire | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireServiceTokenOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultPolicies {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPolicies): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultPoliciesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultPolicies): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultPolicies | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultPolicies | undefined);
    private _approvalGroups;
    get approvalGroups(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesApprovalGroupsList;
    get approvalRequired(): any;
    private _connectionRules;
    get connectionRules(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesConnectionRulesOutputReference;
    get createdAt(): any;
    get decision(): any;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesExcludeList;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesIncludeList;
    get isolationRequired(): any;
    get name(): any;
    get precedence(): any;
    get purposeJustificationPrompt(): any;
    get purposeJustificationRequired(): any;
    private _require;
    get require(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesRequireList;
    get sessionDuration(): any;
    get updatedAt(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultPoliciesOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdp | undefined);
    get idpId(): any;
    get sourceName(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSource | undefined);
    get name(): any;
    private _nameByIdp;
    get nameByIdp(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceNameByIdpList;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributes | undefined);
    get friendlyName(): any;
    get name(): any;
    get nameFormat(): any;
    get required(): any;
    private _source;
    get source(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesSourceOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSource | undefined);
    get name(): any;
    private _nameByIdp;
    get nameByIdp(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaims | undefined);
    get name(): any;
    get required(): any;
    get scope(): any;
    private _source;
    get source(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsSourceOutputReference;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptions | undefined);
    get returnAccessTokenFromAuthorizationEndpoint(): any;
    get returnIdTokenFromAuthorizationEndpoint(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptions | undefined);
    get lifetime(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultSaasApp {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasApp): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultSaasAppToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultSaasApp): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultSaasAppOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultSaasApp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultSaasApp | undefined);
    get accessTokenLifetime(): any;
    get allowPkceWithoutClientSecret(): any;
    get appLauncherUrl(): any;
    get authType(): any;
    get clientId(): any;
    get clientSecret(): any;
    get consumerServiceUrl(): any;
    private _customAttributes;
    get customAttributes(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomAttributesList;
    private _customClaims;
    get customClaims(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppCustomClaimsList;
    get defaultRelayState(): any;
    get grantTypes(): any;
    get groupFilterRegex(): any;
    private _hybridAndImplicitOptions;
    get hybridAndImplicitOptions(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppHybridAndImplicitOptionsOutputReference;
    get idpEntityId(): any;
    get nameIdFormat(): any;
    get nameIdTransformJsonata(): any;
    get publicKey(): any;
    get redirectUris(): any;
    private _refreshTokenOptions;
    get refreshTokenOptions(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppRefreshTokenOptionsOutputReference;
    get samlAttributeTransformJsonata(): any;
    get scopes(): any;
    get spEntityId(): any;
    get ssoEndpoint(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthentication | undefined);
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
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperations | undefined);
    get create(): any;
    get delete(): any;
    get update(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappings | undefined);
    get enabled(): any;
    get filter(): any;
    private _operations;
    get operations(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOperationsOutputReference;
    get schema(): any;
    get strictness(): any;
    get transformJsonata(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultScimConfig {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfig): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultScimConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultScimConfig): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultScimConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultScimConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultScimConfig | undefined);
    private _authentication;
    get authentication(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigAuthenticationOutputReference;
    get deactivateOnDelete(): any;
    get enabled(): any;
    get idpUid(): any;
    private _mappings;
    get mappings(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigMappingsList;
    get remoteUri(): any;
}
export interface DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResultTargetCriteria | undefined);
    get port(): any;
    get protocol(): any;
    private _targetAttributes;
    get targetAttributes(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaOutputReference;
}
export interface DataCloudflareZeroTrustAccessApplicationsResult {
}
export declare function dataCloudflareZeroTrustAccessApplicationsResultToTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResult): any;
export declare function dataCloudflareZeroTrustAccessApplicationsResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessApplicationsResult): any;
export declare class DataCloudflareZeroTrustAccessApplicationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessApplicationsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessApplicationsResult | undefined);
    get allowAuthenticateViaWarp(): any;
    get allowIframe(): any;
    get allowedIdps(): any;
    get appLauncherLogoUrl(): any;
    get appLauncherVisible(): any;
    get aud(): any;
    get autoRedirectToIdentity(): any;
    get bgColor(): any;
    private _corsHeaders;
    get corsHeaders(): DataCloudflareZeroTrustAccessApplicationsResultCorsHeadersOutputReference;
    get customDenyMessage(): any;
    get customDenyUrl(): any;
    get customNonIdentityDenyUrl(): any;
    get customPages(): any;
    private _destinations;
    get destinations(): DataCloudflareZeroTrustAccessApplicationsResultDestinationsList;
    get domain(): any;
    get enableBindingCookie(): any;
    private _footerLinks;
    get footerLinks(): DataCloudflareZeroTrustAccessApplicationsResultFooterLinksList;
    get headerBgColor(): any;
    get httpOnlyCookieAttribute(): any;
    get id(): any;
    private _landingPageDesign;
    get landingPageDesign(): DataCloudflareZeroTrustAccessApplicationsResultLandingPageDesignOutputReference;
    get logoUrl(): any;
    get name(): any;
    get optionsPreflightBypass(): any;
    get pathCookieAttribute(): any;
    private _policies;
    get policies(): DataCloudflareZeroTrustAccessApplicationsResultPoliciesList;
    get readServiceTokensFromHeader(): any;
    private _saasApp;
    get saasApp(): DataCloudflareZeroTrustAccessApplicationsResultSaasAppOutputReference;
    get sameSiteCookieAttribute(): any;
    private _scimConfig;
    get scimConfig(): DataCloudflareZeroTrustAccessApplicationsResultScimConfigOutputReference;
    get selfHostedDomains(): any;
    get serviceAuth401Redirect(): any;
    get sessionDuration(): any;
    get skipAppLauncherLoginPage(): any;
    get skipInterstitial(): any;
    get tags(): any;
    private _targetCriteria;
    get targetCriteria(): DataCloudflareZeroTrustAccessApplicationsResultTargetCriteriaList;
    get type(): any;
}
export declare class DataCloudflareZeroTrustAccessApplicationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessApplicationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications cloudflare_zero_trust_access_applications}
*/
export declare class DataCloudflareZeroTrustAccessApplications extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_applications";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessApplications resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessApplications to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessApplications to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_applications cloudflare_zero_trust_access_applications} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessApplicationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessApplicationsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareZeroTrustAccessApplicationsResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
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
