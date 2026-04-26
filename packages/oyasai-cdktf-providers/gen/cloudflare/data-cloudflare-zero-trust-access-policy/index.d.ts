import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy#account_id DataCloudflareZeroTrustAccessPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * The UUID of the policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy#policy_id DataCloudflareZeroTrustAccessPolicy#policy_id}
    */
    readonly policyId: string;
}
export interface DataCloudflareZeroTrustAccessPolicyApprovalGroups {
}
export declare function dataCloudflareZeroTrustAccessPolicyApprovalGroupsToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyApprovalGroups): any;
export declare function dataCloudflareZeroTrustAccessPolicyApprovalGroupsToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyApprovalGroups): any;
export declare class DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyApprovalGroups | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyApprovalGroups | undefined);
    get approvalsNeeded(): any;
    get emailAddresses(): any;
    get emailListUuid(): any;
}
export declare class DataCloudflareZeroTrustAccessPolicyApprovalGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPolicyApprovalGroupsOutputReference;
}
export interface DataCloudflareZeroTrustAccessPolicyConnectionRulesRdp {
}
export declare function dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyConnectionRulesRdp): any;
export declare function dataCloudflareZeroTrustAccessPolicyConnectionRulesRdpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyConnectionRulesRdp): any;
export declare class DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyConnectionRulesRdp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyConnectionRulesRdp | undefined);
    get allowedClipboardLocalToRemoteFormats(): any;
    get allowedClipboardRemoteToLocalFormats(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyConnectionRules {
}
export declare function dataCloudflareZeroTrustAccessPolicyConnectionRulesToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyConnectionRules): any;
export declare function dataCloudflareZeroTrustAccessPolicyConnectionRulesToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyConnectionRules): any;
export declare class DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyConnectionRules | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyConnectionRules | undefined);
    private _rdp;
    get rdp(): DataCloudflareZeroTrustAccessPolicyConnectionRulesRdpOutputReference;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeEmail {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEmail): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEmail): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeGeo {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGeo): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGeo): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeGroup {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGroup): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGroup): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeIp {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeIp): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeIp): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeOidc {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeOidc): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeOidc): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeOkta {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeOkta): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeOkta): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeSaml {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeSaml): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeSaml): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyExclude {
}
export declare function dataCloudflareZeroTrustAccessPolicyExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExclude): any;
export declare function dataCloudflareZeroTrustAccessPolicyExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyExclude): any;
export declare class DataCloudflareZeroTrustAccessPolicyExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyExclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessPolicyExcludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessPolicyExcludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessPolicyExcludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessPolicyExcludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessPolicyExcludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessPolicyExcludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessPolicyExcludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessPolicyExcludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessPolicyExcludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessPolicyExcludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessPolicyExcludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessPolicyExcludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessPolicyExcludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessPolicyExcludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessPolicyExcludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessPolicyExcludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessPolicyExcludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessPolicyExcludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessPolicyExcludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessPolicyExcludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessPolicyExcludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessPolicyExcludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessPolicyExcludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessPolicyExcludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessPolicyExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPolicyExcludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeEmail {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEmail): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEmail): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeGeo {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGeo): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGeo): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeGroup {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGroup): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGroup): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeIp {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeIp): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeIp): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeOidc {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeOidc): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeOidc): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeOkta {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeOkta): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeOkta): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeSaml {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeSaml): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeSaml): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyInclude {
}
export declare function dataCloudflareZeroTrustAccessPolicyIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyInclude): any;
export declare function dataCloudflareZeroTrustAccessPolicyIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyInclude): any;
export declare class DataCloudflareZeroTrustAccessPolicyIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyInclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessPolicyIncludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessPolicyIncludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessPolicyIncludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessPolicyIncludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessPolicyIncludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessPolicyIncludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessPolicyIncludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessPolicyIncludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessPolicyIncludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessPolicyIncludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessPolicyIncludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessPolicyIncludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessPolicyIncludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessPolicyIncludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessPolicyIncludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessPolicyIncludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessPolicyIncludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessPolicyIncludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessPolicyIncludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessPolicyIncludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessPolicyIncludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessPolicyIncludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessPolicyIncludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessPolicyIncludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessPolicyIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPolicyIncludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessPolicyMfaConfig {
}
export declare function dataCloudflareZeroTrustAccessPolicyMfaConfigToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyMfaConfig): any;
export declare function dataCloudflareZeroTrustAccessPolicyMfaConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyMfaConfig): any;
export declare class DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyMfaConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyMfaConfig | undefined);
    get allowedAuthenticators(): any;
    get mfaDisabled(): any;
    get sessionDuration(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyRequireAuthContext {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAuthContext): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAuthContext): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireAzureAd {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAzureAd): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireAzureAd): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireCertificate {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireCertificate): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireCertificate): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyRequireCommonName {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireCommonName): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireCommonName): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireEmail {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEmail): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEmail): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireEveryone {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEveryone): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireEveryone): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireGeo {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGeo): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGeo): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireGroup {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGroup): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGroup): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireGsuite {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGsuite): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireGsuite): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireIp {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireIp): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireIp): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireOidc {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireOidcToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireOidc): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireOidc): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireOkta {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireOkta): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireOkta): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireSaml {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireSaml): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireSaml): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequireUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequireUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequireUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequireUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessPolicyRequire {
}
export declare function dataCloudflareZeroTrustAccessPolicyRequireToTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequire): any;
export declare function dataCloudflareZeroTrustAccessPolicyRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessPolicyRequire): any;
export declare class DataCloudflareZeroTrustAccessPolicyRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPolicyRequire | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPolicyRequire | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessPolicyRequireAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessPolicyRequireAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessPolicyRequireAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessPolicyRequireAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessPolicyRequireCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessPolicyRequireCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessPolicyRequireDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessPolicyRequireEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessPolicyRequireEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessPolicyRequireEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessPolicyRequireEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessPolicyRequireGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessPolicyRequireGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessPolicyRequireGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessPolicyRequireGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessPolicyRequireIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessPolicyRequireIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessPolicyRequireLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessPolicyRequireLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessPolicyRequireOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessPolicyRequireOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessPolicyRequireSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessPolicyRequireServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessPolicyRequireUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessPolicyRequireList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPolicyRequireOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy cloudflare_zero_trust_access_policy}
*/
export declare class DataCloudflareZeroTrustAccessPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_policy";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessPolicy to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policy cloudflare_zero_trust_access_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get appCount(): any;
    private _approvalGroups;
    get approvalGroups(): DataCloudflareZeroTrustAccessPolicyApprovalGroupsList;
    get approvalRequired(): any;
    private _connectionRules;
    get connectionRules(): DataCloudflareZeroTrustAccessPolicyConnectionRulesOutputReference;
    get createdAt(): any;
    get decision(): any;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustAccessPolicyExcludeList;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustAccessPolicyIncludeList;
    get isolationRequired(): any;
    private _mfaConfig;
    get mfaConfig(): DataCloudflareZeroTrustAccessPolicyMfaConfigOutputReference;
    get name(): any;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    get purposeJustificationPrompt(): any;
    get purposeJustificationRequired(): any;
    private _require;
    get require(): DataCloudflareZeroTrustAccessPolicyRequireList;
    get reusable(): any;
    get sessionDuration(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
