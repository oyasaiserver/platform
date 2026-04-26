import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#account_id DataCloudflareZeroTrustAccessGroup#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#filter DataCloudflareZeroTrustAccessGroup#filter}
    */
    readonly filter?: DataCloudflareZeroTrustAccessGroupFilter;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#group_id DataCloudflareZeroTrustAccessGroup#group_id}
    */
    readonly groupId?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#zone_id DataCloudflareZeroTrustAccessGroup#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupExcludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupExcludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeIp {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeIp): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeIp): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExcludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExcludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExcludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExcludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupExclude {
}
export declare function dataCloudflareZeroTrustAccessGroupExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessGroupExclude): any;
export declare function dataCloudflareZeroTrustAccessGroupExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupExclude): any;
export declare class DataCloudflareZeroTrustAccessGroupExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupExclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupExcludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupExcludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupExcludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupExcludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupExcludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupExcludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupExcludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupExcludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupExcludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupExcludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupExcludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupExcludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupExcludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupExcludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupExcludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupExcludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupExcludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupExcludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupExcludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupExcludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupExcludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupExcludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupExcludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupExcludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupFilter {
    /**
    * The name of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#name DataCloudflareZeroTrustAccessGroup#name}
    */
    readonly name?: string;
    /**
    * Search for groups by other listed query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#search DataCloudflareZeroTrustAccessGroup#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareZeroTrustAccessGroupFilterToTerraform(struct?: DataCloudflareZeroTrustAccessGroupFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustAccessGroupFilterToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustAccessGroupFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupFilter | cdktf.IResolvable | undefined);
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
export interface DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupIncludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupIncludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeIp {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeIp): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeIp): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIncludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIncludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIncludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIncludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupInclude {
}
export declare function dataCloudflareZeroTrustAccessGroupIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessGroupInclude): any;
export declare function dataCloudflareZeroTrustAccessGroupIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupInclude): any;
export declare class DataCloudflareZeroTrustAccessGroupIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupInclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupIncludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupIncludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupIncludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupIncludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupIncludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupIncludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupIncludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupIncludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupIncludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupIncludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupIncludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupIncludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupIncludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupIncludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupIncludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupIncludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupIncludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupIncludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupIncludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupIncludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupIncludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupIncludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupIncludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupIncludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultIp {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultIp): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultIp): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupIsDefault {
}
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultToTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefault): any;
export declare function dataCloudflareZeroTrustAccessGroupIsDefaultToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupIsDefault): any;
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupIsDefault | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupIsDefault | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupIsDefaultAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupIsDefaultAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupIsDefaultAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupIsDefaultAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupIsDefaultCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupIsDefaultCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupIsDefaultDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupIsDefaultEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupIsDefaultEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupIsDefaultEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupIsDefaultEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupIsDefaultExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupIsDefaultGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupIsDefaultGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupIsDefaultGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupIsDefaultGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupIsDefaultIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupIsDefaultIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupIsDefaultLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupIsDefaultLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupIsDefaultOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupIsDefaultOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupIsDefaultSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupIsDefaultServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupIsDefaultUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupIsDefaultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupIsDefaultOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupRequireAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupRequireCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupRequireExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireIp {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireIp): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireIp): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequireUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequireUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequireUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequireUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupRequire {
}
export declare function dataCloudflareZeroTrustAccessGroupRequireToTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequire): any;
export declare function dataCloudflareZeroTrustAccessGroupRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupRequire): any;
export declare class DataCloudflareZeroTrustAccessGroupRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupRequire | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupRequire | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupRequireAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupRequireAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupRequireAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupRequireCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupRequireCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupRequireDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupRequireEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupRequireEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupRequireEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupRequireEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupRequireExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupRequireGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupRequireGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupRequireGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupRequireGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupRequireIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupRequireIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupRequireLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupRequireLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupRequireOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupRequireOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupRequireSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupRequireServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupRequireUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupRequireList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupRequireOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group cloudflare_zero_trust_access_group}
*/
export declare class DataCloudflareZeroTrustAccessGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_group";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessGroup to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_group cloudflare_zero_trust_access_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessGroupConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _exclude;
    get exclude(): DataCloudflareZeroTrustAccessGroupExcludeList;
    private _filter;
    get filter(): DataCloudflareZeroTrustAccessGroupFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustAccessGroupFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustAccessGroupIncludeList;
    private _isDefault;
    get isDefault(): DataCloudflareZeroTrustAccessGroupIsDefaultList;
    get name(): any;
    private _require;
    get require(): DataCloudflareZeroTrustAccessGroupRequireList;
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
