import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessPoliciesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policies#account_id DataCloudflareZeroTrustAccessPolicies#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policies#max_items DataCloudflareZeroTrustAccessPolicies#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultApprovalGroups {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultApprovalGroupsToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultApprovalGroups): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultApprovalGroupsToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultApprovalGroups): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultApprovalGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultApprovalGroups | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultApprovalGroups | undefined);
    get approvalsNeeded(): any;
    get emailAddresses(): any;
    get emailListUuid(): any;
}
export declare class DataCloudflareZeroTrustAccessPoliciesResultApprovalGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPoliciesResultApprovalGroupsOutputReference;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdp {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdpToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdp): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdp): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdp | undefined);
    get allowedClipboardLocalToRemoteFormats(): any;
    get allowedClipboardRemoteToLocalFormats(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultConnectionRules {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultConnectionRulesToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultConnectionRules): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultConnectionRulesToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultConnectionRules): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultConnectionRules | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultConnectionRules | undefined);
    private _rdp;
    get rdp(): DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesRdpOutputReference;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeEmail {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmail): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmail): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeGeo {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGeo): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGeo): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeGroup {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGroup): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGroup): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeIp {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeIp): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeIp): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeOidc {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeOidc): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeOidc): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeOkta {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeOkta): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeOkta): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeSaml {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeSaml): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeSaml): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultExclude {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExclude): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultExclude): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultExclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessPoliciesResultExcludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessPoliciesResultExcludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessPoliciesResultExcludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessPoliciesResultExcludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessPoliciesResultExcludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessPoliciesResultExcludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessPoliciesResultExcludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessPoliciesResultExcludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessPoliciesResultExcludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessPoliciesResultExcludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessPoliciesResultExcludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessPoliciesResultExcludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessPoliciesResultExcludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessPoliciesResultExcludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessPoliciesResultExcludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessPoliciesResultExcludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessPoliciesResultExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPoliciesResultExcludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeEmail {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmail): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmail): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeGeo {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGeo): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGeo): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeGroup {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGroup): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGroup): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeIp {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeIp): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeIp): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeOidc {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeOidc): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeOidc): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeOkta {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeOkta): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeOkta): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeSaml {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeSaml): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeSaml): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultInclude {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultInclude): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultInclude): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultInclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessPoliciesResultIncludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessPoliciesResultIncludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessPoliciesResultIncludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessPoliciesResultIncludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessPoliciesResultIncludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessPoliciesResultIncludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessPoliciesResultIncludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessPoliciesResultIncludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessPoliciesResultIncludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessPoliciesResultIncludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessPoliciesResultIncludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessPoliciesResultIncludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessPoliciesResultIncludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessPoliciesResultIncludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessPoliciesResultIncludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessPoliciesResultIncludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessPoliciesResultIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPoliciesResultIncludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultMfaConfig {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultMfaConfigToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultMfaConfig): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultMfaConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultMfaConfig): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultMfaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultMfaConfig | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultMfaConfig | undefined);
    get allowedAuthenticators(): any;
    get mfaDisabled(): any;
    get sessionDuration(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContext {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContext): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContext): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAd {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAd): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAd): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireCertificate {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireCertificate): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireCertificate): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireCommonName {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireCommonName): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireCommonName): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireEmail {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEmail): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEmail): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireEveryone {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEveryone): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireEveryone): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireGeo {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGeo): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGeo): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireGroup {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGroup): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGroup): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireGsuite {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGsuite): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireGsuite): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireIp {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireIp): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireIp): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireOidc {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireOidcToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireOidc): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireOidc): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireOkta {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireOkta): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireOkta): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireSaml {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireSaml): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireSaml): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireServiceToken {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireServiceToken): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireServiceToken): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessPoliciesResultRequire {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequire): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResultRequire): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResultRequire | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResultRequire | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessPoliciesResultRequireAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessPoliciesResultRequireAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessPoliciesResultRequireAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessPoliciesResultRequireAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessPoliciesResultRequireCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessPoliciesResultRequireCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessPoliciesResultRequireDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessPoliciesResultRequireEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessPoliciesResultRequireEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessPoliciesResultRequireEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessPoliciesResultRequireEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessPoliciesResultRequireExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessPoliciesResultRequireGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessPoliciesResultRequireGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessPoliciesResultRequireGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessPoliciesResultRequireGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessPoliciesResultRequireIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessPoliciesResultRequireIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessPoliciesResultRequireLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessPoliciesResultRequireLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessPoliciesResultRequireOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessPoliciesResultRequireOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessPoliciesResultRequireSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessPoliciesResultRequireServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessPoliciesResultRequireUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessPoliciesResultRequireList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPoliciesResultRequireOutputReference;
}
export interface DataCloudflareZeroTrustAccessPoliciesResult {
}
export declare function dataCloudflareZeroTrustAccessPoliciesResultToTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResult): any;
export declare function dataCloudflareZeroTrustAccessPoliciesResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessPoliciesResult): any;
export declare class DataCloudflareZeroTrustAccessPoliciesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessPoliciesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessPoliciesResult | undefined);
    get appCount(): any;
    private _approvalGroups;
    get approvalGroups(): DataCloudflareZeroTrustAccessPoliciesResultApprovalGroupsList;
    get approvalRequired(): any;
    private _connectionRules;
    get connectionRules(): DataCloudflareZeroTrustAccessPoliciesResultConnectionRulesOutputReference;
    get createdAt(): any;
    get decision(): any;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustAccessPoliciesResultExcludeList;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustAccessPoliciesResultIncludeList;
    get isolationRequired(): any;
    private _mfaConfig;
    get mfaConfig(): DataCloudflareZeroTrustAccessPoliciesResultMfaConfigOutputReference;
    get name(): any;
    get purposeJustificationPrompt(): any;
    get purposeJustificationRequired(): any;
    private _require;
    get require(): DataCloudflareZeroTrustAccessPoliciesResultRequireList;
    get reusable(): any;
    get sessionDuration(): any;
    get updatedAt(): any;
}
export declare class DataCloudflareZeroTrustAccessPoliciesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessPoliciesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policies cloudflare_zero_trust_access_policies}
*/
export declare class DataCloudflareZeroTrustAccessPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_policies";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessPolicies to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessPolicies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_policies cloudflare_zero_trust_access_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessPoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessPoliciesConfig);
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
    get result(): DataCloudflareZeroTrustAccessPoliciesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
