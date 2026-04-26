import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}
    */
    readonly accountId?: string;
    /**
    * Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}
    */
    readonly exclude?: ZeroTrustAccessGroupExclude[] | cdktf.IResolvable;
    /**
    * Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}
    */
    readonly include: ZeroTrustAccessGroupInclude[] | cdktf.IResolvable;
    /**
    * Whether this is the default group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#is_default ZeroTrustAccessGroup#is_default}
    */
    readonly isDefault?: boolean | cdktf.IResolvable;
    /**
    * The name of the Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
    /**
    * Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}
    */
    readonly require?: ZeroTrustAccessGroupRequire[] | cdktf.IResolvable;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}
    */
    readonly zoneId?: string;
}
export interface ZeroTrustAccessGroupExcludeAnyValidServiceToken {
}
export declare function zeroTrustAccessGroupExcludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessGroupExcludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessGroupExcludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupExcludeAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupExcludeAuthContextToTerraform(struct?: ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeAuthContextToHclTerraform(struct?: ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeAuthContext | cdktf.IResolvable | undefined);
    private _acId?;
    get acId(): string;
    set acId(value: string);
    get acIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupExcludeAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessGroupExcludeAuthMethodToTerraform(struct?: ZeroTrustAccessGroupExcludeAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessGroupExcludeAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessGroupExcludeAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupExcludeAzureAdToTerraform(struct?: ZeroTrustAccessGroupExcludeAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeAzureAdToHclTerraform(struct?: ZeroTrustAccessGroupExcludeAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupExcludeCertificate {
}
export declare function zeroTrustAccessGroupExcludeCertificateToTerraform(struct?: ZeroTrustAccessGroupExcludeCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeCertificateToHclTerraform(struct?: ZeroTrustAccessGroupExcludeCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupExcludeCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessGroupExcludeCommonNameToTerraform(struct?: ZeroTrustAccessGroupExcludeCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeCommonNameToHclTerraform(struct?: ZeroTrustAccessGroupExcludeCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessGroupExcludeDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#integration_uid ZeroTrustAccessGroup#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessGroupExcludeDevicePostureToTerraform(struct?: ZeroTrustAccessGroupExcludeDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessGroupExcludeDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessGroupExcludeEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessGroupExcludeEmailToTerraform(struct?: ZeroTrustAccessGroupExcludeEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeEmailToHclTerraform(struct?: ZeroTrustAccessGroupExcludeEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessGroupExcludeEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#domain ZeroTrustAccessGroup#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessGroupExcludeEmailDomainToTerraform(struct?: ZeroTrustAccessGroupExcludeEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessGroupExcludeEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessGroupExcludeEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupExcludeEmailListStructToTerraform(struct?: ZeroTrustAccessGroupExcludeEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessGroupExcludeEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupExcludeEveryone {
}
export declare function zeroTrustAccessGroupExcludeEveryoneToTerraform(struct?: ZeroTrustAccessGroupExcludeEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeEveryoneToHclTerraform(struct?: ZeroTrustAccessGroupExcludeEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupExcludeExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessGroupExcludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessGroupExcludeGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#country_code ZeroTrustAccessGroup#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessGroupExcludeGeoToTerraform(struct?: ZeroTrustAccessGroupExcludeGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeGeoToHclTerraform(struct?: ZeroTrustAccessGroupExcludeGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessGroupExcludeGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#team ZeroTrustAccessGroup#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessGroupExcludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessGroupExcludeGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessGroupExcludeGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeGithubOrganization | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _team?;
    get team(): string;
    set team(value: string);
    resetTeam(): void;
    get teamInput(): string;
}
export interface ZeroTrustAccessGroupExcludeGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupExcludeGroupToTerraform(struct?: ZeroTrustAccessGroupExcludeGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeGroupToHclTerraform(struct?: ZeroTrustAccessGroupExcludeGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupExcludeGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupExcludeGsuiteToTerraform(struct?: ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeGsuiteToHclTerraform(struct?: ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupExcludeIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessGroupExcludeIpToTerraform(struct?: ZeroTrustAccessGroupExcludeIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeIpToHclTerraform(struct?: ZeroTrustAccessGroupExcludeIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessGroupExcludeIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupExcludeIpListStructToTerraform(struct?: ZeroTrustAccessGroupExcludeIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeIpListStructToHclTerraform(struct?: ZeroTrustAccessGroupExcludeIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupExcludeLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#app_uid ZeroTrustAccessGroup#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessGroupExcludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessGroupExcludeLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessGroupExcludeLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessGroupExcludeLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupExcludeLoginMethodToTerraform(struct?: ZeroTrustAccessGroupExcludeLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessGroupExcludeLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupExcludeOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#claim_name ZeroTrustAccessGroup#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#claim_value ZeroTrustAccessGroup#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupExcludeOidcToTerraform(struct?: ZeroTrustAccessGroupExcludeOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeOidcToHclTerraform(struct?: ZeroTrustAccessGroupExcludeOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeOidc | cdktf.IResolvable | undefined);
    private _claimName?;
    get claimName(): string;
    set claimName(value: string);
    get claimNameInput(): string;
    private _claimValue?;
    get claimValue(): string;
    set claimValue(value: string);
    get claimValueInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupExcludeOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessGroupExcludeOktaToTerraform(struct?: ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeOktaToHclTerraform(struct?: ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessGroupExcludeSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupExcludeSamlToTerraform(struct?: ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeSamlToHclTerraform(struct?: ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeSaml | cdktf.IResolvable | undefined);
    private _attributeName?;
    get attributeName(): string;
    set attributeName(value: string);
    get attributeNameInput(): string;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupExcludeServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#token_id ZeroTrustAccessGroup#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessGroupExcludeServiceTokenToTerraform(struct?: ZeroTrustAccessGroupExcludeServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessGroupExcludeServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessGroupExcludeUserRiskScore {
    /**
    * A list of risk score levels to match. Values can be low, medium, high, or unscored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#user_risk_score ZeroTrustAccessGroup#user_risk_score}
    */
    readonly userRiskScore: string[];
}
export declare function zeroTrustAccessGroupExcludeUserRiskScoreToTerraform(struct?: ZeroTrustAccessGroupExcludeUserRiskScore | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeUserRiskScoreToHclTerraform(struct?: ZeroTrustAccessGroupExcludeUserRiskScore | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupExcludeUserRiskScore | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExcludeUserRiskScore | cdktf.IResolvable | undefined);
    private _userRiskScore?;
    get userRiskScore(): string[];
    set userRiskScore(value: string[]);
    get userRiskScoreInput(): string[];
}
export interface ZeroTrustAccessGroupExclude {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessGroupExcludeAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}
    */
    readonly authContext?: ZeroTrustAccessGroupExcludeAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessGroupExcludeAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#azure_ad ZeroTrustAccessGroup#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessGroupExcludeAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}
    */
    readonly certificate?: ZeroTrustAccessGroupExcludeCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
    */
    readonly commonName?: ZeroTrustAccessGroupExcludeCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessGroupExcludeDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email?: ZeroTrustAccessGroupExcludeEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessGroupExcludeEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}
    */
    readonly emailList?: ZeroTrustAccessGroupExcludeEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}
    */
    readonly everyone?: ZeroTrustAccessGroupExcludeEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessGroupExcludeExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}
    */
    readonly geo?: ZeroTrustAccessGroupExcludeGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#github_organization ZeroTrustAccessGroup#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessGroupExcludeGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}
    */
    readonly group?: ZeroTrustAccessGroupExcludeGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessGroupExcludeGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
    */
    readonly ip?: ZeroTrustAccessGroupExcludeIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}
    */
    readonly ipList?: ZeroTrustAccessGroupExcludeIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#linked_app_token ZeroTrustAccessGroup#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessGroupExcludeLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessGroupExcludeLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#oidc ZeroTrustAccessGroup#oidc}
    */
    readonly oidc?: ZeroTrustAccessGroupExcludeOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}
    */
    readonly okta?: ZeroTrustAccessGroupExcludeOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}
    */
    readonly saml?: ZeroTrustAccessGroupExcludeSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessGroupExcludeServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#user_risk_score ZeroTrustAccessGroup#user_risk_score}
    */
    readonly userRiskScore?: ZeroTrustAccessGroupExcludeUserRiskScore;
}
export declare function zeroTrustAccessGroupExcludeToTerraform(struct?: ZeroTrustAccessGroupExclude | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupExcludeToHclTerraform(struct?: ZeroTrustAccessGroupExclude | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessGroupExclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupExclude | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessGroupExcludeAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessGroupExcludeAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessGroupExcludeAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessGroupExcludeAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessGroupExcludeAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessGroupExcludeAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessGroupExcludeAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessGroupExcludeAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessGroupExcludeCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessGroupExcludeCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessGroupExcludeCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessGroupExcludeCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessGroupExcludeDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessGroupExcludeDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessGroupExcludeEmailOutputReference;
    putEmail(value: ZeroTrustAccessGroupExcludeEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessGroupExcludeEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessGroupExcludeEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessGroupExcludeEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessGroupExcludeEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessGroupExcludeEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessGroupExcludeEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessGroupExcludeExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessGroupExcludeGeoOutputReference;
    putGeo(value: ZeroTrustAccessGroupExcludeGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessGroupExcludeGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessGroupExcludeGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessGroupExcludeGroupOutputReference;
    putGroup(value: ZeroTrustAccessGroupExcludeGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessGroupExcludeGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessGroupExcludeGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessGroupExcludeIpOutputReference;
    putIp(value: ZeroTrustAccessGroupExcludeIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessGroupExcludeIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessGroupExcludeIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessGroupExcludeLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessGroupExcludeLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessGroupExcludeLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessGroupExcludeLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessGroupExcludeOidcOutputReference;
    putOidc(value: ZeroTrustAccessGroupExcludeOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessGroupExcludeOktaOutputReference;
    putOkta(value: ZeroTrustAccessGroupExcludeOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessGroupExcludeSamlOutputReference;
    putSaml(value: ZeroTrustAccessGroupExcludeSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessGroupExcludeServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessGroupExcludeServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
    private _userRiskScore;
    get userRiskScore(): ZeroTrustAccessGroupExcludeUserRiskScoreOutputReference;
    putUserRiskScore(value: ZeroTrustAccessGroupExcludeUserRiskScore): void;
    resetUserRiskScore(): void;
    get userRiskScoreInput(): any;
}
export declare class ZeroTrustAccessGroupExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessGroupExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessGroupExcludeOutputReference;
}
export interface ZeroTrustAccessGroupIncludeAnyValidServiceToken {
}
export declare function zeroTrustAccessGroupIncludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessGroupIncludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessGroupIncludeAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupIncludeAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupIncludeAuthContextToTerraform(struct?: ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeAuthContextToHclTerraform(struct?: ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeAuthContext | cdktf.IResolvable | undefined);
    private _acId?;
    get acId(): string;
    set acId(value: string);
    get acIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupIncludeAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessGroupIncludeAuthMethodToTerraform(struct?: ZeroTrustAccessGroupIncludeAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessGroupIncludeAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessGroupIncludeAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupIncludeAzureAdToTerraform(struct?: ZeroTrustAccessGroupIncludeAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeAzureAdToHclTerraform(struct?: ZeroTrustAccessGroupIncludeAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupIncludeCertificate {
}
export declare function zeroTrustAccessGroupIncludeCertificateToTerraform(struct?: ZeroTrustAccessGroupIncludeCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeCertificateToHclTerraform(struct?: ZeroTrustAccessGroupIncludeCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupIncludeCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessGroupIncludeCommonNameToTerraform(struct?: ZeroTrustAccessGroupIncludeCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeCommonNameToHclTerraform(struct?: ZeroTrustAccessGroupIncludeCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessGroupIncludeDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#integration_uid ZeroTrustAccessGroup#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessGroupIncludeDevicePostureToTerraform(struct?: ZeroTrustAccessGroupIncludeDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessGroupIncludeDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessGroupIncludeEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessGroupIncludeEmailToTerraform(struct?: ZeroTrustAccessGroupIncludeEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeEmailToHclTerraform(struct?: ZeroTrustAccessGroupIncludeEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessGroupIncludeEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#domain ZeroTrustAccessGroup#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessGroupIncludeEmailDomainToTerraform(struct?: ZeroTrustAccessGroupIncludeEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessGroupIncludeEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessGroupIncludeEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupIncludeEmailListStructToTerraform(struct?: ZeroTrustAccessGroupIncludeEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessGroupIncludeEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupIncludeEveryone {
}
export declare function zeroTrustAccessGroupIncludeEveryoneToTerraform(struct?: ZeroTrustAccessGroupIncludeEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeEveryoneToHclTerraform(struct?: ZeroTrustAccessGroupIncludeEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupIncludeExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessGroupIncludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessGroupIncludeGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#country_code ZeroTrustAccessGroup#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessGroupIncludeGeoToTerraform(struct?: ZeroTrustAccessGroupIncludeGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeGeoToHclTerraform(struct?: ZeroTrustAccessGroupIncludeGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessGroupIncludeGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#team ZeroTrustAccessGroup#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessGroupIncludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessGroupIncludeGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessGroupIncludeGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeGithubOrganization | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _team?;
    get team(): string;
    set team(value: string);
    resetTeam(): void;
    get teamInput(): string;
}
export interface ZeroTrustAccessGroupIncludeGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupIncludeGroupToTerraform(struct?: ZeroTrustAccessGroupIncludeGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeGroupToHclTerraform(struct?: ZeroTrustAccessGroupIncludeGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupIncludeGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupIncludeGsuiteToTerraform(struct?: ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeGsuiteToHclTerraform(struct?: ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupIncludeIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessGroupIncludeIpToTerraform(struct?: ZeroTrustAccessGroupIncludeIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeIpToHclTerraform(struct?: ZeroTrustAccessGroupIncludeIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessGroupIncludeIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupIncludeIpListStructToTerraform(struct?: ZeroTrustAccessGroupIncludeIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeIpListStructToHclTerraform(struct?: ZeroTrustAccessGroupIncludeIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupIncludeLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#app_uid ZeroTrustAccessGroup#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessGroupIncludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessGroupIncludeLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessGroupIncludeLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessGroupIncludeLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupIncludeLoginMethodToTerraform(struct?: ZeroTrustAccessGroupIncludeLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessGroupIncludeLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupIncludeOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#claim_name ZeroTrustAccessGroup#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#claim_value ZeroTrustAccessGroup#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupIncludeOidcToTerraform(struct?: ZeroTrustAccessGroupIncludeOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeOidcToHclTerraform(struct?: ZeroTrustAccessGroupIncludeOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeOidc | cdktf.IResolvable | undefined);
    private _claimName?;
    get claimName(): string;
    set claimName(value: string);
    get claimNameInput(): string;
    private _claimValue?;
    get claimValue(): string;
    set claimValue(value: string);
    get claimValueInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupIncludeOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessGroupIncludeOktaToTerraform(struct?: ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeOktaToHclTerraform(struct?: ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessGroupIncludeSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupIncludeSamlToTerraform(struct?: ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeSamlToHclTerraform(struct?: ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeSaml | cdktf.IResolvable | undefined);
    private _attributeName?;
    get attributeName(): string;
    set attributeName(value: string);
    get attributeNameInput(): string;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupIncludeServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#token_id ZeroTrustAccessGroup#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessGroupIncludeServiceTokenToTerraform(struct?: ZeroTrustAccessGroupIncludeServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessGroupIncludeServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessGroupIncludeUserRiskScore {
    /**
    * A list of risk score levels to match. Values can be low, medium, high, or unscored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#user_risk_score ZeroTrustAccessGroup#user_risk_score}
    */
    readonly userRiskScore: string[];
}
export declare function zeroTrustAccessGroupIncludeUserRiskScoreToTerraform(struct?: ZeroTrustAccessGroupIncludeUserRiskScore | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeUserRiskScoreToHclTerraform(struct?: ZeroTrustAccessGroupIncludeUserRiskScore | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupIncludeUserRiskScore | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupIncludeUserRiskScore | cdktf.IResolvable | undefined);
    private _userRiskScore?;
    get userRiskScore(): string[];
    set userRiskScore(value: string[]);
    get userRiskScoreInput(): string[];
}
export interface ZeroTrustAccessGroupInclude {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessGroupIncludeAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}
    */
    readonly authContext?: ZeroTrustAccessGroupIncludeAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessGroupIncludeAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#azure_ad ZeroTrustAccessGroup#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessGroupIncludeAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}
    */
    readonly certificate?: ZeroTrustAccessGroupIncludeCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
    */
    readonly commonName?: ZeroTrustAccessGroupIncludeCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessGroupIncludeDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email?: ZeroTrustAccessGroupIncludeEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessGroupIncludeEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}
    */
    readonly emailList?: ZeroTrustAccessGroupIncludeEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}
    */
    readonly everyone?: ZeroTrustAccessGroupIncludeEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessGroupIncludeExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}
    */
    readonly geo?: ZeroTrustAccessGroupIncludeGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#github_organization ZeroTrustAccessGroup#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessGroupIncludeGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}
    */
    readonly group?: ZeroTrustAccessGroupIncludeGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessGroupIncludeGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
    */
    readonly ip?: ZeroTrustAccessGroupIncludeIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}
    */
    readonly ipList?: ZeroTrustAccessGroupIncludeIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#linked_app_token ZeroTrustAccessGroup#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessGroupIncludeLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessGroupIncludeLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#oidc ZeroTrustAccessGroup#oidc}
    */
    readonly oidc?: ZeroTrustAccessGroupIncludeOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}
    */
    readonly okta?: ZeroTrustAccessGroupIncludeOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}
    */
    readonly saml?: ZeroTrustAccessGroupIncludeSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessGroupIncludeServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#user_risk_score ZeroTrustAccessGroup#user_risk_score}
    */
    readonly userRiskScore?: ZeroTrustAccessGroupIncludeUserRiskScore;
}
export declare function zeroTrustAccessGroupIncludeToTerraform(struct?: ZeroTrustAccessGroupInclude | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupIncludeToHclTerraform(struct?: ZeroTrustAccessGroupInclude | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessGroupInclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupInclude | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessGroupIncludeAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessGroupIncludeAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessGroupIncludeAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessGroupIncludeAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessGroupIncludeAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessGroupIncludeAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessGroupIncludeAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessGroupIncludeAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessGroupIncludeCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessGroupIncludeCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessGroupIncludeCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessGroupIncludeCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessGroupIncludeDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessGroupIncludeDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessGroupIncludeEmailOutputReference;
    putEmail(value: ZeroTrustAccessGroupIncludeEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessGroupIncludeEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessGroupIncludeEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessGroupIncludeEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessGroupIncludeEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessGroupIncludeEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessGroupIncludeEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessGroupIncludeExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessGroupIncludeGeoOutputReference;
    putGeo(value: ZeroTrustAccessGroupIncludeGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessGroupIncludeGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessGroupIncludeGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessGroupIncludeGroupOutputReference;
    putGroup(value: ZeroTrustAccessGroupIncludeGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessGroupIncludeGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessGroupIncludeGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessGroupIncludeIpOutputReference;
    putIp(value: ZeroTrustAccessGroupIncludeIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessGroupIncludeIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessGroupIncludeIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessGroupIncludeLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessGroupIncludeLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessGroupIncludeLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessGroupIncludeLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessGroupIncludeOidcOutputReference;
    putOidc(value: ZeroTrustAccessGroupIncludeOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessGroupIncludeOktaOutputReference;
    putOkta(value: ZeroTrustAccessGroupIncludeOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessGroupIncludeSamlOutputReference;
    putSaml(value: ZeroTrustAccessGroupIncludeSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessGroupIncludeServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessGroupIncludeServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
    private _userRiskScore;
    get userRiskScore(): ZeroTrustAccessGroupIncludeUserRiskScoreOutputReference;
    putUserRiskScore(value: ZeroTrustAccessGroupIncludeUserRiskScore): void;
    resetUserRiskScore(): void;
    get userRiskScoreInput(): any;
}
export declare class ZeroTrustAccessGroupIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessGroupInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessGroupIncludeOutputReference;
}
export interface ZeroTrustAccessGroupRequireAnyValidServiceToken {
}
export declare function zeroTrustAccessGroupRequireAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessGroupRequireAnyValidServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessGroupRequireAnyValidServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireAnyValidServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireAnyValidServiceToken | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupRequireAuthContext {
    /**
    * The ACID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}
    */
    readonly acId: string;
    /**
    * The ID of an Authentication context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupRequireAuthContextToTerraform(struct?: ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireAuthContextToHclTerraform(struct?: ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireAuthContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireAuthContext | cdktf.IResolvable | undefined);
    private _acId?;
    get acId(): string;
    set acId(value: string);
    get acIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupRequireAuthMethod {
    /**
    * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
    */
    readonly authMethod: string;
}
export declare function zeroTrustAccessGroupRequireAuthMethodToTerraform(struct?: ZeroTrustAccessGroupRequireAuthMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireAuthMethodToHclTerraform(struct?: ZeroTrustAccessGroupRequireAuthMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireAuthMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireAuthMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireAuthMethod | cdktf.IResolvable | undefined);
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
}
export interface ZeroTrustAccessGroupRequireAzureAd {
    /**
    * The ID of an Azure group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The ID of your Azure identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupRequireAzureAdToTerraform(struct?: ZeroTrustAccessGroupRequireAzureAd | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireAzureAdToHclTerraform(struct?: ZeroTrustAccessGroupRequireAzureAd | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireAzureAdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireAzureAd | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireAzureAd | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupRequireCertificate {
}
export declare function zeroTrustAccessGroupRequireCertificateToTerraform(struct?: ZeroTrustAccessGroupRequireCertificate | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireCertificateToHclTerraform(struct?: ZeroTrustAccessGroupRequireCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireCertificate | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupRequireCommonName {
    /**
    * The common name to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
    */
    readonly commonName: string;
}
export declare function zeroTrustAccessGroupRequireCommonNameToTerraform(struct?: ZeroTrustAccessGroupRequireCommonName | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireCommonNameToHclTerraform(struct?: ZeroTrustAccessGroupRequireCommonName | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireCommonNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireCommonName | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireCommonName | cdktf.IResolvable | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    get commonNameInput(): string;
}
export interface ZeroTrustAccessGroupRequireDevicePosture {
    /**
    * The ID of a device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#integration_uid ZeroTrustAccessGroup#integration_uid}
    */
    readonly integrationUid: string;
}
export declare function zeroTrustAccessGroupRequireDevicePostureToTerraform(struct?: ZeroTrustAccessGroupRequireDevicePosture | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireDevicePostureToHclTerraform(struct?: ZeroTrustAccessGroupRequireDevicePosture | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireDevicePostureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireDevicePosture | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireDevicePosture | cdktf.IResolvable | undefined);
    private _integrationUid?;
    get integrationUid(): string;
    set integrationUid(value: string);
    get integrationUidInput(): string;
}
export interface ZeroTrustAccessGroupRequireEmail {
    /**
    * The email of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email: string;
}
export declare function zeroTrustAccessGroupRequireEmailToTerraform(struct?: ZeroTrustAccessGroupRequireEmail | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireEmailToHclTerraform(struct?: ZeroTrustAccessGroupRequireEmail | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireEmail | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireEmail | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
export interface ZeroTrustAccessGroupRequireEmailDomain {
    /**
    * The email domain to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#domain ZeroTrustAccessGroup#domain}
    */
    readonly domain: string;
}
export declare function zeroTrustAccessGroupRequireEmailDomainToTerraform(struct?: ZeroTrustAccessGroupRequireEmailDomain | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireEmailDomainToHclTerraform(struct?: ZeroTrustAccessGroupRequireEmailDomain | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireEmailDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireEmailDomain | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireEmailDomain | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface ZeroTrustAccessGroupRequireEmailListStruct {
    /**
    * The ID of a previously created email list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupRequireEmailListStructToTerraform(struct?: ZeroTrustAccessGroupRequireEmailListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireEmailListStructToHclTerraform(struct?: ZeroTrustAccessGroupRequireEmailListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireEmailListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireEmailListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireEmailListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupRequireEveryone {
}
export declare function zeroTrustAccessGroupRequireEveryoneToTerraform(struct?: ZeroTrustAccessGroupRequireEveryone | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireEveryoneToHclTerraform(struct?: ZeroTrustAccessGroupRequireEveryone | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireEveryoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireEveryone | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireEveryone | cdktf.IResolvable | undefined);
}
export interface ZeroTrustAccessGroupRequireExternalEvaluation {
    /**
    * The API endpoint containing your business logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}
    */
    readonly evaluateUrl: string;
    /**
    * The API endpoint containing the key that Access uses to verify that the response came from your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}
    */
    readonly keysUrl: string;
}
export declare function zeroTrustAccessGroupRequireExternalEvaluationToTerraform(struct?: ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireExternalEvaluation | cdktf.IResolvable | undefined);
    private _evaluateUrl?;
    get evaluateUrl(): string;
    set evaluateUrl(value: string);
    get evaluateUrlInput(): string;
    private _keysUrl?;
    get keysUrl(): string;
    set keysUrl(value: string);
    get keysUrlInput(): string;
}
export interface ZeroTrustAccessGroupRequireGeo {
    /**
    * The country code that should be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#country_code ZeroTrustAccessGroup#country_code}
    */
    readonly countryCode: string;
}
export declare function zeroTrustAccessGroupRequireGeoToTerraform(struct?: ZeroTrustAccessGroupRequireGeo | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireGeoToHclTerraform(struct?: ZeroTrustAccessGroupRequireGeo | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireGeoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireGeo | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireGeo | cdktf.IResolvable | undefined);
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string;
}
export interface ZeroTrustAccessGroupRequireGithubOrganization {
    /**
    * The ID of your Github identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
    /**
    * The name of the team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#team ZeroTrustAccessGroup#team}
    */
    readonly team?: string;
}
export declare function zeroTrustAccessGroupRequireGithubOrganizationToTerraform(struct?: ZeroTrustAccessGroupRequireGithubOrganization | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessGroupRequireGithubOrganization | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireGithubOrganization | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireGithubOrganization | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _team?;
    get team(): string;
    set team(value: string);
    resetTeam(): void;
    get teamInput(): string;
}
export interface ZeroTrustAccessGroupRequireGroup {
    /**
    * The ID of a previously created Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupRequireGroupToTerraform(struct?: ZeroTrustAccessGroupRequireGroup | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireGroupToHclTerraform(struct?: ZeroTrustAccessGroupRequireGroup | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireGroup | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireGroup | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupRequireGsuite {
    /**
    * The email of the Google Workspace group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email: string;
    /**
    * The ID of your Google Workspace identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupRequireGsuiteToTerraform(struct?: ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireGsuiteToHclTerraform(struct?: ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireGsuiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireGsuite | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupRequireIp {
    /**
    * An IPv4 or IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
    */
    readonly ip: string;
}
export declare function zeroTrustAccessGroupRequireIpToTerraform(struct?: ZeroTrustAccessGroupRequireIp | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireIpToHclTerraform(struct?: ZeroTrustAccessGroupRequireIp | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireIp | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireIp | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
}
export interface ZeroTrustAccessGroupRequireIpListStruct {
    /**
    * The ID of a previously created IP list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupRequireIpListStructToTerraform(struct?: ZeroTrustAccessGroupRequireIpListStruct | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireIpListStructToHclTerraform(struct?: ZeroTrustAccessGroupRequireIpListStruct | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireIpListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireIpListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireIpListStruct | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupRequireLinkedAppToken {
    /**
    * The ID of an Access OIDC SaaS application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#app_uid ZeroTrustAccessGroup#app_uid}
    */
    readonly appUid: string;
}
export declare function zeroTrustAccessGroupRequireLinkedAppTokenToTerraform(struct?: ZeroTrustAccessGroupRequireLinkedAppToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessGroupRequireLinkedAppToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireLinkedAppToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireLinkedAppToken | cdktf.IResolvable | undefined);
    private _appUid?;
    get appUid(): string;
    set appUid(value: string);
    get appUidInput(): string;
}
export interface ZeroTrustAccessGroupRequireLoginMethod {
    /**
    * The ID of an identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustAccessGroupRequireLoginMethodToTerraform(struct?: ZeroTrustAccessGroupRequireLoginMethod | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireLoginMethodToHclTerraform(struct?: ZeroTrustAccessGroupRequireLoginMethod | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireLoginMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireLoginMethod | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireLoginMethod | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustAccessGroupRequireOidc {
    /**
    * The name of the OIDC claim.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#claim_name ZeroTrustAccessGroup#claim_name}
    */
    readonly claimName: string;
    /**
    * The OIDC claim value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#claim_value ZeroTrustAccessGroup#claim_value}
    */
    readonly claimValue: string;
    /**
    * The ID of your OIDC identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupRequireOidcToTerraform(struct?: ZeroTrustAccessGroupRequireOidc | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireOidcToHclTerraform(struct?: ZeroTrustAccessGroupRequireOidc | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireOidc | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireOidc | cdktf.IResolvable | undefined);
    private _claimName?;
    get claimName(): string;
    set claimName(value: string);
    get claimNameInput(): string;
    private _claimValue?;
    get claimValue(): string;
    set claimValue(value: string);
    get claimValueInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupRequireOkta {
    /**
    * The ID of your Okta identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
    /**
    * The name of the Okta group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}
    */
    readonly name: string;
}
export declare function zeroTrustAccessGroupRequireOktaToTerraform(struct?: ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireOktaToHclTerraform(struct?: ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireOktaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireOkta | cdktf.IResolvable | undefined);
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface ZeroTrustAccessGroupRequireSaml {
    /**
    * The name of the SAML attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}
    */
    readonly attributeName: string;
    /**
    * The SAML attribute value to look for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}
    */
    readonly attributeValue: string;
    /**
    * The ID of your SAML identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}
    */
    readonly identityProviderId: string;
}
export declare function zeroTrustAccessGroupRequireSamlToTerraform(struct?: ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireSamlToHclTerraform(struct?: ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireSamlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireSaml | cdktf.IResolvable | undefined);
    private _attributeName?;
    get attributeName(): string;
    set attributeName(value: string);
    get attributeNameInput(): string;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string;
    private _identityProviderId?;
    get identityProviderId(): string;
    set identityProviderId(value: string);
    get identityProviderIdInput(): string;
}
export interface ZeroTrustAccessGroupRequireServiceToken {
    /**
    * The ID of a Service Token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#token_id ZeroTrustAccessGroup#token_id}
    */
    readonly tokenId: string;
}
export declare function zeroTrustAccessGroupRequireServiceTokenToTerraform(struct?: ZeroTrustAccessGroupRequireServiceToken | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireServiceTokenToHclTerraform(struct?: ZeroTrustAccessGroupRequireServiceToken | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireServiceTokenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireServiceToken | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireServiceToken | cdktf.IResolvable | undefined);
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    get tokenIdInput(): string;
}
export interface ZeroTrustAccessGroupRequireUserRiskScore {
    /**
    * A list of risk score levels to match. Values can be low, medium, high, or unscored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#user_risk_score ZeroTrustAccessGroup#user_risk_score}
    */
    readonly userRiskScore: string[];
}
export declare function zeroTrustAccessGroupRequireUserRiskScoreToTerraform(struct?: ZeroTrustAccessGroupRequireUserRiskScore | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireUserRiskScoreToHclTerraform(struct?: ZeroTrustAccessGroupRequireUserRiskScore | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireUserRiskScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustAccessGroupRequireUserRiskScore | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequireUserRiskScore | cdktf.IResolvable | undefined);
    private _userRiskScore?;
    get userRiskScore(): string[];
    set userRiskScore(value: string[]);
    get userRiskScoreInput(): string[];
}
export interface ZeroTrustAccessGroupRequire {
    /**
    * An empty object which matches on all service tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}
    */
    readonly anyValidServiceToken?: ZeroTrustAccessGroupRequireAnyValidServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}
    */
    readonly authContext?: ZeroTrustAccessGroupRequireAuthContext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}
    */
    readonly authMethod?: ZeroTrustAccessGroupRequireAuthMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#azure_ad ZeroTrustAccessGroup#azure_ad}
    */
    readonly azureAd?: ZeroTrustAccessGroupRequireAzureAd;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}
    */
    readonly certificate?: ZeroTrustAccessGroupRequireCertificate;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}
    */
    readonly commonName?: ZeroTrustAccessGroupRequireCommonName;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}
    */
    readonly devicePosture?: ZeroTrustAccessGroupRequireDevicePosture;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}
    */
    readonly email?: ZeroTrustAccessGroupRequireEmail;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}
    */
    readonly emailDomain?: ZeroTrustAccessGroupRequireEmailDomain;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}
    */
    readonly emailList?: ZeroTrustAccessGroupRequireEmailListStruct;
    /**
    * An empty object which matches on all users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}
    */
    readonly everyone?: ZeroTrustAccessGroupRequireEveryone;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}
    */
    readonly externalEvaluation?: ZeroTrustAccessGroupRequireExternalEvaluation;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}
    */
    readonly geo?: ZeroTrustAccessGroupRequireGeo;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#github_organization ZeroTrustAccessGroup#github_organization}
    */
    readonly githubOrganization?: ZeroTrustAccessGroupRequireGithubOrganization;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}
    */
    readonly group?: ZeroTrustAccessGroupRequireGroup;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}
    */
    readonly gsuite?: ZeroTrustAccessGroupRequireGsuite;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}
    */
    readonly ip?: ZeroTrustAccessGroupRequireIp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}
    */
    readonly ipList?: ZeroTrustAccessGroupRequireIpListStruct;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#linked_app_token ZeroTrustAccessGroup#linked_app_token}
    */
    readonly linkedAppToken?: ZeroTrustAccessGroupRequireLinkedAppToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}
    */
    readonly loginMethod?: ZeroTrustAccessGroupRequireLoginMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#oidc ZeroTrustAccessGroup#oidc}
    */
    readonly oidc?: ZeroTrustAccessGroupRequireOidc;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}
    */
    readonly okta?: ZeroTrustAccessGroupRequireOkta;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}
    */
    readonly saml?: ZeroTrustAccessGroupRequireSaml;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}
    */
    readonly serviceToken?: ZeroTrustAccessGroupRequireServiceToken;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#user_risk_score ZeroTrustAccessGroup#user_risk_score}
    */
    readonly userRiskScore?: ZeroTrustAccessGroupRequireUserRiskScore;
}
export declare function zeroTrustAccessGroupRequireToTerraform(struct?: ZeroTrustAccessGroupRequire | cdktf.IResolvable): any;
export declare function zeroTrustAccessGroupRequireToHclTerraform(struct?: ZeroTrustAccessGroupRequire | cdktf.IResolvable): any;
export declare class ZeroTrustAccessGroupRequireOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessGroupRequire | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessGroupRequire | cdktf.IResolvable | undefined);
    private _anyValidServiceToken;
    get anyValidServiceToken(): ZeroTrustAccessGroupRequireAnyValidServiceTokenOutputReference;
    putAnyValidServiceToken(value: ZeroTrustAccessGroupRequireAnyValidServiceToken): void;
    resetAnyValidServiceToken(): void;
    get anyValidServiceTokenInput(): any;
    private _authContext;
    get authContext(): ZeroTrustAccessGroupRequireAuthContextOutputReference;
    putAuthContext(value: ZeroTrustAccessGroupRequireAuthContext): void;
    resetAuthContext(): void;
    get authContextInput(): any;
    private _authMethod;
    get authMethod(): ZeroTrustAccessGroupRequireAuthMethodOutputReference;
    putAuthMethod(value: ZeroTrustAccessGroupRequireAuthMethod): void;
    resetAuthMethod(): void;
    get authMethodInput(): any;
    private _azureAd;
    get azureAd(): ZeroTrustAccessGroupRequireAzureAdOutputReference;
    putAzureAd(value: ZeroTrustAccessGroupRequireAzureAd): void;
    resetAzureAd(): void;
    get azureAdInput(): any;
    private _certificate;
    get certificate(): ZeroTrustAccessGroupRequireCertificateOutputReference;
    putCertificate(value: ZeroTrustAccessGroupRequireCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _commonName;
    get commonName(): ZeroTrustAccessGroupRequireCommonNameOutputReference;
    putCommonName(value: ZeroTrustAccessGroupRequireCommonName): void;
    resetCommonName(): void;
    get commonNameInput(): any;
    private _devicePosture;
    get devicePosture(): ZeroTrustAccessGroupRequireDevicePostureOutputReference;
    putDevicePosture(value: ZeroTrustAccessGroupRequireDevicePosture): void;
    resetDevicePosture(): void;
    get devicePostureInput(): any;
    private _email;
    get email(): ZeroTrustAccessGroupRequireEmailOutputReference;
    putEmail(value: ZeroTrustAccessGroupRequireEmail): void;
    resetEmail(): void;
    get emailInput(): any;
    private _emailDomain;
    get emailDomain(): ZeroTrustAccessGroupRequireEmailDomainOutputReference;
    putEmailDomain(value: ZeroTrustAccessGroupRequireEmailDomain): void;
    resetEmailDomain(): void;
    get emailDomainInput(): any;
    private _emailList;
    get emailList(): ZeroTrustAccessGroupRequireEmailListStructOutputReference;
    putEmailList(value: ZeroTrustAccessGroupRequireEmailListStruct): void;
    resetEmailList(): void;
    get emailListInput(): any;
    private _everyone;
    get everyone(): ZeroTrustAccessGroupRequireEveryoneOutputReference;
    putEveryone(value: ZeroTrustAccessGroupRequireEveryone): void;
    resetEveryone(): void;
    get everyoneInput(): any;
    private _externalEvaluation;
    get externalEvaluation(): ZeroTrustAccessGroupRequireExternalEvaluationOutputReference;
    putExternalEvaluation(value: ZeroTrustAccessGroupRequireExternalEvaluation): void;
    resetExternalEvaluation(): void;
    get externalEvaluationInput(): any;
    private _geo;
    get geo(): ZeroTrustAccessGroupRequireGeoOutputReference;
    putGeo(value: ZeroTrustAccessGroupRequireGeo): void;
    resetGeo(): void;
    get geoInput(): any;
    private _githubOrganization;
    get githubOrganization(): ZeroTrustAccessGroupRequireGithubOrganizationOutputReference;
    putGithubOrganization(value: ZeroTrustAccessGroupRequireGithubOrganization): void;
    resetGithubOrganization(): void;
    get githubOrganizationInput(): any;
    private _group;
    get group(): ZeroTrustAccessGroupRequireGroupOutputReference;
    putGroup(value: ZeroTrustAccessGroupRequireGroup): void;
    resetGroup(): void;
    get groupInput(): any;
    private _gsuite;
    get gsuite(): ZeroTrustAccessGroupRequireGsuiteOutputReference;
    putGsuite(value: ZeroTrustAccessGroupRequireGsuite): void;
    resetGsuite(): void;
    get gsuiteInput(): any;
    private _ip;
    get ip(): ZeroTrustAccessGroupRequireIpOutputReference;
    putIp(value: ZeroTrustAccessGroupRequireIp): void;
    resetIp(): void;
    get ipInput(): any;
    private _ipList;
    get ipList(): ZeroTrustAccessGroupRequireIpListStructOutputReference;
    putIpList(value: ZeroTrustAccessGroupRequireIpListStruct): void;
    resetIpList(): void;
    get ipListInput(): any;
    private _linkedAppToken;
    get linkedAppToken(): ZeroTrustAccessGroupRequireLinkedAppTokenOutputReference;
    putLinkedAppToken(value: ZeroTrustAccessGroupRequireLinkedAppToken): void;
    resetLinkedAppToken(): void;
    get linkedAppTokenInput(): any;
    private _loginMethod;
    get loginMethod(): ZeroTrustAccessGroupRequireLoginMethodOutputReference;
    putLoginMethod(value: ZeroTrustAccessGroupRequireLoginMethod): void;
    resetLoginMethod(): void;
    get loginMethodInput(): any;
    private _oidc;
    get oidc(): ZeroTrustAccessGroupRequireOidcOutputReference;
    putOidc(value: ZeroTrustAccessGroupRequireOidc): void;
    resetOidc(): void;
    get oidcInput(): any;
    private _okta;
    get okta(): ZeroTrustAccessGroupRequireOktaOutputReference;
    putOkta(value: ZeroTrustAccessGroupRequireOkta): void;
    resetOkta(): void;
    get oktaInput(): any;
    private _saml;
    get saml(): ZeroTrustAccessGroupRequireSamlOutputReference;
    putSaml(value: ZeroTrustAccessGroupRequireSaml): void;
    resetSaml(): void;
    get samlInput(): any;
    private _serviceToken;
    get serviceToken(): ZeroTrustAccessGroupRequireServiceTokenOutputReference;
    putServiceToken(value: ZeroTrustAccessGroupRequireServiceToken): void;
    resetServiceToken(): void;
    get serviceTokenInput(): any;
    private _userRiskScore;
    get userRiskScore(): ZeroTrustAccessGroupRequireUserRiskScoreOutputReference;
    putUserRiskScore(value: ZeroTrustAccessGroupRequireUserRiskScore): void;
    resetUserRiskScore(): void;
    get userRiskScoreInput(): any;
}
export declare class ZeroTrustAccessGroupRequireList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessGroupRequire[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessGroupRequireOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}
*/
export declare class ZeroTrustAccessGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_group";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessGroup to import
    * @param importFromId The id of the existing ZeroTrustAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessGroupConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessGroupConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _exclude;
    get exclude(): ZeroTrustAccessGroupExcludeList;
    putExclude(value: ZeroTrustAccessGroupExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    get id(): any;
    private _include;
    get include(): ZeroTrustAccessGroupIncludeList;
    putInclude(value: ZeroTrustAccessGroupInclude[] | cdktf.IResolvable): void;
    get includeInput(): any;
    private _isDefault?;
    get isDefault(): boolean | cdktf.IResolvable;
    set isDefault(value: boolean | cdktf.IResolvable);
    resetIsDefault(): void;
    get isDefaultInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _require;
    get require(): ZeroTrustAccessGroupRequireList;
    putRequire(value: ZeroTrustAccessGroupRequire[] | cdktf.IResolvable): void;
    resetRequire(): void;
    get requireInput(): any;
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
