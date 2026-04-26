import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups#account_id DataCloudflareZeroTrustAccessGroups#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups#max_items DataCloudflareZeroTrustAccessGroups#max_items}
    */
    readonly maxItems?: number;
    /**
    * The name of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups#name DataCloudflareZeroTrustAccessGroups#name}
    */
    readonly name?: string;
    /**
    * Search for groups by other listed query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups#search DataCloudflareZeroTrustAccessGroups#search}
    */
    readonly search?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups#zone_id DataCloudflareZeroTrustAccessGroups#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeIp {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeIp): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeIp): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultExclude {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExclude): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultExcludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultExclude): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultExclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultExclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupsResultExcludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupsResultExcludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupsResultExcludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupsResultExcludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupsResultExcludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupsResultExcludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupsResultExcludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupsResultExcludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupsResultExcludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupsResultExcludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupsResultExcludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupsResultExcludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupsResultExcludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupsResultExcludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupsResultExcludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupsResultExcludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupsResultExcludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupsResultExcludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupsResultExcludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupsResultExcludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupsResultExcludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupsResultExcludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupsResultExcludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupsResultExcludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupsResultExcludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupsResultExcludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupsResultExcludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeIp {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeIp): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeIp): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultInclude {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultInclude): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIncludeToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultInclude): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultInclude | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultInclude | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupsResultIncludeAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupsResultIncludeAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupsResultIncludeAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupsResultIncludeAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupsResultIncludeCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupsResultIncludeCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupsResultIncludeDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupsResultIncludeEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupsResultIncludeEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupsResultIncludeEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupsResultIncludeEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupsResultIncludeExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupsResultIncludeGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupsResultIncludeGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupsResultIncludeGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupsResultIncludeGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupsResultIncludeIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupsResultIncludeIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupsResultIncludeLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupsResultIncludeLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupsResultIncludeOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupsResultIncludeOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupsResultIncludeSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupsResultIncludeServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupsResultIncludeUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupsResultIncludeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupsResultIncludeOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultIp {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultIp): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultIp): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultIsDefault {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefault): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultIsDefaultToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultIsDefault): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultIsDefault | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultIsDefault | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupsResultIsDefaultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupsResultIsDefaultOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceToken | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireAuthContext {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAuthContextToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAuthContext): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAuthContextToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAuthContext): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireAuthContext | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireAuthContext | undefined);
    get acId(): any;
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAuthMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAuthMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethod | undefined);
    get authMethod(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireAzureAd {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAzureAdToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAzureAd): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireAzureAdToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireAzureAd): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireAzureAd | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireAzureAd | undefined);
    get id(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireCertificate {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireCertificateToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireCertificate): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireCertificateToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireCertificate): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireCertificate | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireCommonName {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireCommonNameToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireCommonName): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireCommonNameToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireCommonName): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireCommonName | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireCommonName | undefined);
    get commonName(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireDevicePosture {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireDevicePostureToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireDevicePosture): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireDevicePostureToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireDevicePosture): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireDevicePosture | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireDevicePosture | undefined);
    get integrationUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireEmail {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEmailToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEmail): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEmailToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEmail): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireEmail | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireEmail | undefined);
    get email(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomain {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEmailDomainToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomain): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEmailDomainToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomain): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomain | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomain | undefined);
    get domain(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEmailListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEmailListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireEveryone {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEveryoneToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEveryone): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireEveryoneToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireEveryone): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireEveryone | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireEveryone | undefined);
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluation {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluation): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluation): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluation | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluation | undefined);
    get evaluateUrl(): any;
    get keysUrl(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireGeo {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGeoToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGeo): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGeoToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGeo): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireGeo | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireGeo | undefined);
    get countryCode(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganization {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganizationToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganization): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganizationToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganization): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganization | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganization | undefined);
    get identityProviderId(): any;
    get name(): any;
    get team(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireGroup {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGroupToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGroup): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGroupToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGroup): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireGroup | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireGroup | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireGsuite {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGsuiteToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGsuite): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireGsuiteToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireGsuite): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireGsuite | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireGsuite | undefined);
    get email(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireIp {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireIpToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireIp): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireIpToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireIp): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireIp | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireIp | undefined);
    get ip(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireIpListStruct {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireIpListStructToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireIpListStruct): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireIpListStructToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireIpListStruct): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireIpListStruct | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireIpListStruct | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppToken | undefined);
    get appUid(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethod {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireLoginMethodToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethod): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireLoginMethodToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethod): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethod | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethod | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireOidc {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireOidcToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireOidc): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireOidcToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireOidc): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireOidc | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireOidc | undefined);
    get claimName(): any;
    get claimValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireOkta {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireOktaToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireOkta): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireOktaToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireOkta): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireOkta | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireOkta | undefined);
    get identityProviderId(): any;
    get name(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireSaml {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireSamlToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireSaml): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireSamlToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireSaml): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireSaml | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireSaml | undefined);
    get attributeName(): any;
    get attributeValue(): any;
    get identityProviderId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireServiceToken {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireServiceTokenToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireServiceToken): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireServiceTokenToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireServiceToken): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireServiceToken | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireServiceToken | undefined);
    get tokenId(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScore {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScoreToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScore): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScoreToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScore): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScore | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScore | undefined);
    get userRiskScore(): any;
}
export interface DataCloudflareZeroTrustAccessGroupsResultRequire {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequire): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultRequireToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResultRequire): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResultRequire | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResultRequire | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): DataCloudflareZeroTrustAccessGroupsResultRequireAnyValidServiceTokenOutputReference;
    private _authContext;
    get authContext(): DataCloudflareZeroTrustAccessGroupsResultRequireAuthContextOutputReference;
    private _authMethod;
    get authMethod(): DataCloudflareZeroTrustAccessGroupsResultRequireAuthMethodOutputReference;
    private _azureAd;
    get azureAd(): DataCloudflareZeroTrustAccessGroupsResultRequireAzureAdOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustAccessGroupsResultRequireCertificateOutputReference;
    private _commonName;
    get commonName(): DataCloudflareZeroTrustAccessGroupsResultRequireCommonNameOutputReference;
    private _devicePosture;
    get devicePosture(): DataCloudflareZeroTrustAccessGroupsResultRequireDevicePostureOutputReference;
    private _email;
    get email(): DataCloudflareZeroTrustAccessGroupsResultRequireEmailOutputReference;
    private _emailDomain;
    get emailDomain(): DataCloudflareZeroTrustAccessGroupsResultRequireEmailDomainOutputReference;
    private _emailList;
    get emailList(): DataCloudflareZeroTrustAccessGroupsResultRequireEmailListStructOutputReference;
    private _everyone;
    get everyone(): DataCloudflareZeroTrustAccessGroupsResultRequireEveryoneOutputReference;
    private _externalEvaluation;
    get externalEvaluation(): DataCloudflareZeroTrustAccessGroupsResultRequireExternalEvaluationOutputReference;
    private _geo;
    get geo(): DataCloudflareZeroTrustAccessGroupsResultRequireGeoOutputReference;
    private _githubOrganization;
    get githubOrganization(): DataCloudflareZeroTrustAccessGroupsResultRequireGithubOrganizationOutputReference;
    private _group;
    get group(): DataCloudflareZeroTrustAccessGroupsResultRequireGroupOutputReference;
    private _gsuite;
    get gsuite(): DataCloudflareZeroTrustAccessGroupsResultRequireGsuiteOutputReference;
    private _ip;
    get ip(): DataCloudflareZeroTrustAccessGroupsResultRequireIpOutputReference;
    private _ipList;
    get ipList(): DataCloudflareZeroTrustAccessGroupsResultRequireIpListStructOutputReference;
    private _linkedAppToken;
    get linkedAppToken(): DataCloudflareZeroTrustAccessGroupsResultRequireLinkedAppTokenOutputReference;
    private _loginMethod;
    get loginMethod(): DataCloudflareZeroTrustAccessGroupsResultRequireLoginMethodOutputReference;
    private _oidc;
    get oidc(): DataCloudflareZeroTrustAccessGroupsResultRequireOidcOutputReference;
    private _okta;
    get okta(): DataCloudflareZeroTrustAccessGroupsResultRequireOktaOutputReference;
    private _saml;
    get saml(): DataCloudflareZeroTrustAccessGroupsResultRequireSamlOutputReference;
    private _serviceToken;
    get serviceToken(): DataCloudflareZeroTrustAccessGroupsResultRequireServiceTokenOutputReference;
    private _userRiskScore;
    get userRiskScore(): DataCloudflareZeroTrustAccessGroupsResultRequireUserRiskScoreOutputReference;
}
export declare class DataCloudflareZeroTrustAccessGroupsResultRequireList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupsResultRequireOutputReference;
}
export interface DataCloudflareZeroTrustAccessGroupsResult {
}
export declare function dataCloudflareZeroTrustAccessGroupsResultToTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResult): any;
export declare function dataCloudflareZeroTrustAccessGroupsResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessGroupsResult): any;
export declare class DataCloudflareZeroTrustAccessGroupsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustAccessGroupsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustAccessGroupsResult | undefined);
    private _exclude;
    get exclude(): DataCloudflareZeroTrustAccessGroupsResultExcludeList;
    get id(): any;
    private _include;
    get include(): DataCloudflareZeroTrustAccessGroupsResultIncludeList;
    private _isDefault;
    get isDefault(): DataCloudflareZeroTrustAccessGroupsResultIsDefaultList;
    get name(): any;
    private _require;
    get require(): DataCloudflareZeroTrustAccessGroupsResultRequireList;
}
export declare class DataCloudflareZeroTrustAccessGroupsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustAccessGroupsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups cloudflare_zero_trust_access_groups}
*/
export declare class DataCloudflareZeroTrustAccessGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_groups";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessGroups to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_groups cloudflare_zero_trust_access_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessGroupsConfig);
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
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareZeroTrustAccessGroupsResultList;
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
